import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StockInventoryService {
  constructor(private http: HttpClient) {}

  getCardItems() {
    return this.http.get('/api/cart');
  }

  getProducts() {
    return this.http.get('/api/products');
  }
}
