import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TableFunctionService } from './table-function.service';

describe('TableFunctionService', () => {
  let service: TableFunctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(TableFunctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch product details', () => {
    const productDetailsObj = service.getProductDetails();
    expect(productDetailsObj).toBeTruthy();
  });
});
