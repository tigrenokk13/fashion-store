import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../models/product';
import { Observable, BehaviorSubject, debounceTime, distinctUntilChanged, switchMap, map, tap, catchError, of } from 'rxjs';

export interface FilterOptions {
  query: string;
  category: string;
}

@Injectable({
  providedIn: 'root' 
})
export class ProductService {
  private http = inject(HttpClient);
  private toastr = inject(ToastrService);

  private itemsSubject$ = new BehaviorSubject<Product[]>([]);
  public items$ = this.itemsSubject$.asObservable();
  
  private filterSubject$ = new BehaviorSubject<FilterOptions>({ query: '', category: '' });

  constructor() {
    this.loadInitialData();

    this.filterSubject$.pipe(
      debounceTime(500),
      distinctUntilChanged((prev, curr) => JSON.stringify(prev) === JSON.stringify(curr)),
      switchMap(options => this.http.get<Product[]>('items').pipe(
        map(products => products.filter(item => {
          const matchesQuery = item.title.toLowerCase().includes(options.query.toLowerCase());
          const matchesCategory = options.category === '' || item.category === options.category;
          return matchesQuery && matchesCategory;
        })),
        catchError(() => {
          this.toastr.error('Помилка фільтрації', 'Сервер');
          return of([]);
        })
      ))
    ).subscribe(filteredResult => {
      this.itemsSubject$.next(filteredResult);
    });
  }

  private loadInitialData(): void {
    this.http.get<Product[]>('items').pipe(
      catchError(() => {
        this.toastr.error('Не вдалося з’єднатися з сервером', 'Помилка мережі');
        return of([]);
      })
    ).subscribe(data => this.itemsSubject$.next(data));
  }

  getAll(): Observable<Product[]> {
    return this.items$;
  }

  getById(id: number | string): Observable<Product | undefined> {
    return this.http.get<Product>(`items/${id}`).pipe(
      catchError(() => {
        this.toastr.error('Товар не знайдено', 'Помилка');
        return of(undefined);
      })
    );
  }

  filterItems(options: FilterOptions): void {
    this.filterSubject$.next(options);
  }

  addItem(newItem: Product): void {
    this.http.post<Product>('items', newItem).pipe(
      tap(() => {
        this.toastr.success('Елемент успішно додано!', 'Успіх');
        this.loadInitialData();
      }),
      catchError(() => {
        this.toastr.error('Помилка при додаванні', 'Сервер');
        return of(null);
      })
    ).subscribe();
  }

  deleteItem(id: number): void {
    this.http.delete(`items/${id}`).pipe(
      tap(() => {
        this.toastr.info('Елемент видалено', 'Інфо');
        this.loadInitialData();
      }),
      catchError(() => {
        this.toastr.error('Помилка при видаленні', 'Сервер');
        return of(null);
      })
    ).subscribe();
  }
}