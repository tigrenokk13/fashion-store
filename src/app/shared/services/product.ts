import { Injectable } from '@angular/core';
import { PRODUCTS } from '../mock-data'; 
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root' 
})
export class ProductService {
  private items: Product[] = PRODUCTS;

  constructor() {}

  getAll(): Product[] {
    return [...this.items];
  }

  getById(id: number): Product | undefined {
    return this.items.find(item => item.id === id);
  }

  deleteItem(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
    console.log(`Товар з ID ${id} видалено з бази сервісу`);
  }
}