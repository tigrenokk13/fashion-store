import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/components/card/card';
import { PRODUCTS } from '../../../shared/mock-data';

@Component({
  selector: 'fashion-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class ListComponent {
  public productsList = PRODUCTS;

  handleCardAction(id: number): void {
    console.log(`Користувач натиснув кнопку на товарі з ID: ${id}`);
  }
}