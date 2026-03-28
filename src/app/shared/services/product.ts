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
}