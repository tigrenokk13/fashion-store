import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input('appHighlight') highlightColor: string = 'rgba(0,0,0,0.1)';

  @HostBinding('style.transform') transform: string = 'scale(1)';
  @HostBinding('style.boxShadow') boxShadow: string = 'none';
  @HostBinding('style.transition') transition: string = 'all 0.3s ease';
  @HostBinding('style.display') display: string = 'block';

  @HostListener('mouseenter') onMouseEnter() {
    this.transform = 'scale(1.03)';
    this.boxShadow = `0 10px 25px ${this.highlightColor}`;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.transform = 'scale(1)';
    this.boxShadow = 'none';
  }
}