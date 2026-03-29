import { Injectable } from '@angular/core';
import { PRODUCTS } from '../mock-data'; 
import { Product } from '../models/product';
import { Observable, BehaviorSubject, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class ProductService {
  private items: Product[] = [...PRODUCTS];

  private itemsSubject$ = new BehaviorSubject<Product[]>(this.items);
  public items$ = this.itemsSubject$.asObservable();

  constructor() {}

  getAll(): Observable<Product[]> {
    return this.items$.pipe(delay(1000));
  }

  getById(id: number): Product | undefined {
    return this.items.find(item => item.id === id);
  }

  deleteItem(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
    this.itemsSubject$.next([...this.items]);
  }

  filterItems(query: string, category: string): Product[] {
    const lowQuery = query.toLowerCase().trim();
    return this.items.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(lowQuery);
      const matchesCategory = category === '' || item.category === category;
      return matchesSearch && matchesCategory;
    });
  }
}