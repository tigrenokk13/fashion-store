import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CardComponent } from '../../../shared/components/card/card';
import { PRODUCTS } from '../../../shared/mock-data';

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

  filterItems(): void {
    const query = this.searchQuery.toLowerCase().trim();
    
    // Фільтруємо оригінальний масив і результат записуємо у відображуваний
    this.filteredProducts = this.allProducts.filter(item => 
      item.title.toLowerCase().includes(query)
    );
  }

  handleCardAction(id: number): void {
    console.log(`Користувач натиснув кнопку на товарі з ID: ${id}`);
  }
}