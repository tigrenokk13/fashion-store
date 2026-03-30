import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ListComponent } from './list'; 
import { ProductService } from '../../../shared/services/product';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { vi } from 'vitest';

describe('ListComponent Integration', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let mockService: any;

  beforeEach(async () => {
    mockService = {
      getAll: vi.fn().mockReturnValue(of([
        { id: 1, title: 'P1', price: 100, sizes: ['S'], brand: {name: 'Z'}, category: 'A' },
        { id: 2, title: 'P2', price: 200, sizes: ['M'], brand: {name: 'X'}, category: 'B' }
      ])),
      items$: of([]),
      filterItems: vi.fn()
    };

    await TestBed.configureTestingModule({
      imports: [ListComponent],
      providers: [
        { provide: ProductService, useValue: mockService },
        provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
  });

  it('має відобразити правильну кількість карток', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    expect(mockService.getAll).toHaveBeenCalled();

    const cards = fixture.debugElement.queryAll(By.css('.card'));

    expect(cards.length).toBe(2);
  });
});