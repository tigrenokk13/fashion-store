import { Component, OnInit, inject } from '@angular/core'; 
import { FormsModule } from '@angular/forms'; 
import { CardComponent } from '../../../shared/components/card/card';
import { ProductCategory } from '../../../shared/models/product';
import { ProductService, FilterOptions } from '../../../shared/services/product'; 
import { Product } from '../../../shared/models/product';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'fashion-list',
  standalone: true,
  imports: [CardComponent, FormsModule, AsyncPipe, CommonModule], 
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class ListComponent implements OnInit {
  private productService = inject(ProductService);

  public products$!: Observable<Product[]>; 
  public searchQuery: string = '';
  public selectedCategory: string = '';
  public categories = Object.values(ProductCategory);

  ngOnInit(): void {
    this.products$ = this.productService.getAll();
  }

  filterItems(): void {
    const options: FilterOptions = {
      query: this.searchQuery,
      category: this.selectedCategory
    };
    this.productService.filterItems(options);
  }

  resetFilters(inputElement: HTMLInputElement): void {
    this.searchQuery = '';
    this.selectedCategory = '';
    this.filterItems();
    inputElement.focus();
  }

  handleCardAction(id: number): void {
    this.productService.deleteItem(id);
  }
}