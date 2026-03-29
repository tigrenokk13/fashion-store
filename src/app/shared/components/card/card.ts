import { Component, Input, Output, EventEmitter } from '@angular/core'; // Додали імпорти
import { DatePipe, CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Product, ProductCategory } from '../../models/product';

@Component({
  selector: 'fashion-card',
  standalone: true,
  imports: [DatePipe, CurrencyPipe, UpperCasePipe],
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