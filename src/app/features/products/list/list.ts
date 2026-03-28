import { Component, OnInit, inject } from '@angular/core'; 
import { FormsModule } from '@angular/forms'; 
import { CardComponent } from '../../../shared/components/card/card';
import { ProductCategory } from '../../../shared/models/product';
import { ProductService } from '../../../shared/services/product.service'; 
import { Product } from '../../../shared/models/product';

@Component({
  selector: 'fashion-list',
  standalone: true,
  imports: [CardComponent, FormsModule], 
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class ListComponent implements OnInit {
  private productService = inject(ProductService);

  public allProducts: Product[] = [];
  public filteredProducts: Product[] = []; 
  
  public searchQuery: string = '';
  public selectedCategory: string = '';
  public categories = Object.values(ProductCategory);

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.allProducts = this.productService.getAll();
    this.filteredProducts = [...this.allProducts];
  }

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