import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(
    private http: HttpClient
  ) { }

  items: Product[]=[];

  addToCart(product:Product) {
      this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items=[];
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
