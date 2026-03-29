import { Injectable } from '@angular/core';
import { PRODUCTS } from '../mock-data'; 
import { Product } from '../models/product';
import { Observable, BehaviorSubject, debounceTime, distinctUntilChanged, map, of, delay } from 'rxjs';

export interface FilterOptions {
  query: string;
  category: string;
}

@Injectable({
  providedIn: 'root' 
})
export class ProductService {
  private allItems: Product[] = [...PRODUCTS];

  private itemsSubject$ = new BehaviorSubject<Product[]>(this.allItems);
  public items$ = this.itemsSubject$.asObservable();

  private filterSubject$ = new BehaviorSubject<FilterOptions>({ query: '', category: '' });

  constructor() {
    this.filterSubject$.pipe(
      debounceTime(500),
      distinctUntilChanged((prev, curr) => JSON.stringify(prev) === JSON.stringify(curr)),
      map(options => {
        return this.allItems.filter(item => {
          const matchesQuery = item.title.toLowerCase().includes(options.query.toLowerCase());
          const matchesCategory = options.category === '' || item.category === options.category;
          return matchesQuery && matchesCategory;
        });
      })
    ).subscribe(filteredResult => {
      this.itemsSubject$.next(filteredResult);
    });
  }

  getAll(): Observable<Product[]> {
    return this.items$;
  }

  getById(id: number | string): Observable<Product | undefined> {
    const product = this.allItems.find(item => item.id === Number(id));
    return of(product).pipe(delay(1000));
  }

  filterItems(options: FilterOptions): void {
    this.filterSubject$.next(options);
  }

  deleteItem(id: number): void {
    this.allItems = this.allItems.filter(item => item.id !== id);
    this.filterItems(this.filterSubject$.value);
  }
}