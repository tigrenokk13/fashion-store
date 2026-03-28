import { Component, OnInit, inject } from '@angular/core'; 
import { FormsModule } from '@angular/forms'; 
import { CardComponent } from '../../../shared/components/card/card';
import { ProductCategory } from '../../../shared/models/product';
import { ProductService } from '../../../shared/services/product'; 
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

  public filteredProducts: Product[] = []; 
  public searchQuery: string = '';
  public selectedCategory: string = '';
  public categories = Object.values(ProductCategory);

  ngOnInit(): void {
    this.updateUI();
  }

  filterItems(): void {
    this.updateUI();
  }

  resetFilters(inputElement: HTMLInputElement): void {
    this.searchQuery = '';
    this.selectedCategory = '';
    this.updateUI();
    inputElement.focus();
  }

  handleCardAction(id: number): void {
    this.productService.deleteItem(id);
    this.updateUI();
  }

  private updateUI(): void {
    this.filteredProducts = this.productService.filterItems(
      this.searchQuery, 
      this.selectedCategory
    );
  }
}