import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CardComponent } from '../../../shared/components/card/card';
import { PRODUCTS } from '../../../shared/mock-data';
import { ProductCategory } from '../../../shared/models/product';

@Component({
  selector: 'fashion-list',
  standalone: true,
  imports: [CardComponent, FormsModule], 
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class ListComponent {
  private allProducts = PRODUCTS;
  public filteredProducts = [...this.allProducts]; 
  
  public searchQuery: string = '';
  public selectedCategory: string = '';
  public categories = Object.values(ProductCategory);

  filterItems(): void {
    const query = this.searchQuery.toLowerCase().trim();
    
    this.filteredProducts = this.allProducts.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(query);
      const matchesCategory = this.selectedCategory === '' || item.category === this.selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }

  resetFilters(inputElement: HTMLInputElement): void {
    this.searchQuery = '';
    this.selectedCategory = '';
    this.filterItems();
    inputElement.focus();
  }

  handleCardAction(id: number): void {
    console.log(`Користувач натиснув кнопку на товарі з ID: ${id}`);
  }
}