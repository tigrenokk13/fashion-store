import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from '../../shared/services/product';
import { Product } from '../../shared/models/product';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetailsComponent implements OnInit {
  private productService = inject(ProductService);

  @Input() id!: string; 
  public product$!: Observable<Product | undefined>;

  ngOnInit(): void {
    this.product$ = this.productService.getById(this.id);
  }
}
