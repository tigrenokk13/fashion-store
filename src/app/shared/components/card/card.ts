import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe, CurrencyPipe, UpperCasePipe, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product, ProductCategory } from '../../models/product';
import { TruncatePipe } from '../../pipes/truncate-pipe';
import { CategoryColorPipe } from '../../pipes/category-color-pipe'; 

@Component({
  selector: 'fashion-card',
  standalone: true,
  imports: [
    DatePipe, 
    CurrencyPipe, 
    UpperCasePipe, 
    CommonModule, 
    RouterModule, 
    TruncatePipe,
    CategoryColorPipe
  ],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class CardComponent {
  @Input({ required: true }) item!: Product;
  @Output() addToCart = new EventEmitter<number>();
  protected readonly ProductCategory = ProductCategory;

  onBuyClick(): void {
    this.addToCart.emit(this.item.id);
  }
}