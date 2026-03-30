import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card'; 
import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { TruncatePipe } from '../../pipes/truncate-pipe'; 
import { CategoryColorPipe } from '../../pipes/category-color-pipe';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
  });

  it('має відображати назву товару в тегу h3', () => {
    const mockItem: any = {
      id: 1,
      title: 'Стильна куртка',
      price: 2500,
      isDiscount: true,
      imageUrl: 'test.jpg',
      category: 'Одяг',
      description: 'Це опис товару для тестування пайпа truncate',
      brand: { name: 'Zara', country: 'Spain' },
      sizes: ['S', 'M', 'L'], 
      addedDate: new Date(),
      quantity: 10
    };

    fixture.componentRef.setInput('item', mockItem);

    fixture.detectChanges();

    const titleElement = fixture.nativeElement.querySelector('h3');
    
    expect(titleElement.textContent).toContain('СТИЛЬНА КУРТКА');
  });
});