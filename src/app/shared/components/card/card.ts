import { Component, Input } from '@angular/core';
import { DatePipe, CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Product } from '../../../models/product';

@Component({
  selector: 'fashion-card',
  standalone: true,
  imports: [DatePipe, CurrencyPipe, UpperCasePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input({ required: true }) item!: Product;
}