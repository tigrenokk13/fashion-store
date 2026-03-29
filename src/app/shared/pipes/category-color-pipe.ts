import { Pipe, PipeTransform } from '@angular/core';
import { ProductCategory } from '../models/product';

@Pipe({
  name: 'categoryColor',
  standalone: true
})
export class CategoryColorPipe implements PipeTransform {

  transform(value: ProductCategory): string {
    switch (value) {
      case ProductCategory.MEN:
        return '#007bff'; 
      case ProductCategory.WOMEN:
        return '#e91e63'; 
      case ProductCategory.KIDS:
        return '#2bcbba'; 
      case ProductCategory.ACCESSORIES:
        return '#ff9800'; 
      default:
        return '#6c757d';
    }
  }
}