import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/components/card/card';
import { PRODUCTS } from '../../../shared/mock-data';

@Component({
  selector: 'fashion-list',
  standalone: true,
  // Обов'язково підключаємо CardComponent, щоб Angular дозволив використати тег <fashion-card>
  imports: [CardComponent],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class ListComponent {
  // Створюємо публічну змінну і записуємо в неї нашу базу даних
  public productsList = PRODUCTS;
}