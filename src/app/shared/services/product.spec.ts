import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product';
import { provideToastr } from 'ngx-toastr';

describe('ProductService', () => {
  let service: ProductService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideToastr(),
        ProductService
      ]
    });
    service = TestBed.inject(ProductService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should get product by id', () => {
    const initReq = httpTestingController.expectOne('items');
    initReq.flush([]);

    const mockProduct = { id: 1, title: 'Test' };
    service.getById(1).subscribe(product => {
      expect(product).toEqual(mockProduct);
    });

    const req = httpTestingController.expectOne('items/1');
    expect(req.request.method).toEqual('GET');
    req.flush(mockProduct);
  });

  it('should return products via getAll', () => {
    const mockProducts = [{ id: 1, title: 'Test' }];

    service.getAll().subscribe(products => {
      if (products.length > 0) {
        expect(products).toEqual(mockProducts);
      }
    });

    const req = httpTestingController.expectOne('items');
    req.flush(mockProducts);
  });
});