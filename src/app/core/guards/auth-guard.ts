import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map, take } from 'rxjs';
import { AuthService } from '../services/auth';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isAuth$.pipe(
    take(1), 
    map(isAuth => {
      if (isAuth) {
        return true; 
      } else {
        router.navigate(['/login']);
        return false;
      }
    })
  );
};