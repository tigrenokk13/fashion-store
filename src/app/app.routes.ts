import { Routes } from '@angular/router';
import { ListComponent } from './features/products/list/list';
import { ProductDetailsComponent } from './features/product-details/product-details';
import { NotFoundComponent } from './core/pages/not-found/not-found';
import { ProductFormComponent } from './features/product-form/product-form';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ListComponent },
  { path: 'product/new', component: ProductFormComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: '**', component: NotFoundComponent }
];