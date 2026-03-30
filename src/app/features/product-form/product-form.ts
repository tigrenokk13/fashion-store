import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../shared/services/product'; 
import { ProductCategory } from '../../shared/models/product';
import { forbiddenNameValidator } from '../../shared/validators/custom.validators';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css'
})
export class ProductFormComponent {
  private fb = inject(FormBuilder);
  private productService = inject(ProductService);
  private router = inject(Router);

  categories = Object.values(ProductCategory);

  public form = this.fb.group({
    title: ['', [
      Validators.required, 
      Validators.minLength(3), 
      forbiddenNameValidator(/test/i)
    ]],
    description: ['', [Validators.required, Validators.minLength(10)]],
    price: [0, [Validators.required, Validators.min(0.01)]],
    category: [ProductCategory.MEN, [Validators.required]],
    imageUrl: ['', [Validators.required, Validators.pattern('https?://.+')]],
    quantity: [1, [Validators.required, Validators.min(0)]]
  });

  onSubmit() {
    if (this.form.valid) {
      const rawValue = this.form.getRawValue();
      const newProduct = {
        ...rawValue,
        id: Date.now(),
        addedDate: new Date().toISOString(),
        isDiscount: false,
        brand: { name: 'New Brand', country: 'Ukraine' },
        sizes: ['M', 'L']
      };

      this.productService.addItem(newProduct as any);
      this.router.navigate(['/products']);
    }
  }
}