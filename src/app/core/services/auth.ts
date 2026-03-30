import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);

  private isAuthSubject$ = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));
  public isAuth$ = this.isAuthSubject$.asObservable();

  // Метод логіну (Етап 2)
  login(credentials: any): Observable<any> {
    return this.http.post<any>('login', credentials).pipe(
      tap(res => {
        // У разі успіху зберігаємо токен
        if (res.accessToken) {
          localStorage.setItem('token', res.accessToken);
          this.isAuthSubject$.next(true);
        }
      }),
      catchError(err => {
        console.log('Імітація входу для тестування');
        localStorage.setItem('token', 'fake-token');
        this.isAuthSubject$.next(true);
        return of(err);
      })
    );
  }

  register(credentials: any): Observable<any> {
    return this.http.post<any>('register', credentials);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isAuthSubject$.next(false);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}