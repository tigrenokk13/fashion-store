import { Component, Input } from '@angular/core';
import { DatePipe, CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Product } from '../../models/product';

@Component({
  selector: 'fashion-card',
  standalone: true,
  imports: [DatePipe, CurrencyPipe, UpperCasePipe],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class CardComponent {
  @Input({ required: true }) item!: Product;
}