import { Injectable } from '@angular/core';
import { PRODUCTS } from '../mock-data'; 
import { Product } from '../models/product';
import { Observable, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class ProductService {
  private items: Product[] = PRODUCTS;

  constructor() {}

  getAll(): Observable<Product[]> {
    return of([...this.items]).pipe(delay(1000));
  }

  getById(id: number): Product | undefined {
    return this.items.find(item => item.id === id);
  }

  deleteItem(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
    console.log(`Товар з ID ${id} видалено з бази сервісу`);
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