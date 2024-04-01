import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.css'
})
export class ShippingComponent implements OnInit{
  shippingCosts!: Observable<{ type: string, price: number }[]>;
  items:Product[]=[];
  constructor(
    private cartService: CartService
  ) {}
  ngOnInit(): void {
      this.shippingCosts=this.cartService.getShippingPrices();
      this.items=this.cartService.getItems();
  }
  saveSelection() {

  }
}
