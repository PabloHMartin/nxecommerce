import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@ecommerce/data';
import { Observable } from 'rxjs';

const API_URI = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  //

  constructor(private readonly http: HttpClient) {}

  public getAllProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(`${API_URI}/data`);
  }
}
