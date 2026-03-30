
import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AppInfo } from '../../shared/models/appInfo';

@Component({
  selector: 'fashion-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  private authService = inject(AuthService);

  public headerConfig: AppInfo = {
    title: 'Модний одяг',
    year: 2026 
  };

  isLoggedIn$ = this.authService.isAuth$;

  logout() {
    this.authService.logout();
  }
}
