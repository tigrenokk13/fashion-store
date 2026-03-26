import { Component } from '@angular/core';
import { AppInfo } from '../../shared/models/appInfo';

@Component({
  selector: 'fashion-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public footerConfig: AppInfo = {
    title: 'Модний одяг',
    year: new Date().getFullYear() 
  };
}