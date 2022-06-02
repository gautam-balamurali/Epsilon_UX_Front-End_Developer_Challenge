import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIConfig } from 'src/app/core/app.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

/**
 *Service class for Table Function Component
 */
export class TableFunctionService {
  baseUrl = APIConfig.API_ENDPOINT;

  constructor(public http: HttpClient) {}

  /**
   * Gets product details
   * @returns product details
   */
  public getProductDetails(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
