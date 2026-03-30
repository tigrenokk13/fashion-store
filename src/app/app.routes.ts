import { Routes } from '@angular/router';
import { ListComponent } from './features/products/list/list';
import { ProductDetailsComponent } from './features/product-details/product-details';
import { NotFoundComponent } from './core/pages/not-found/not-found';
import { ProductFormComponent } from './features/product-form/product-form';
import { Login } from './core/components/login/login';
import { Register } from './core/components/register/register';
import { authGuard } from './core/guards/auth-guard'; 

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ListComponent },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  
  { 
    path: 'product/new', 
    component: ProductFormComponent, 
    canActivate: [authGuard] 
  },
  
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: '**', component: NotFoundComponent }
];