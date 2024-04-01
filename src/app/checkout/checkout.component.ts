import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'
import { Product } from '../products';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {
  products:Product[]=[]
  constructor(
    private cartService: CartService
  ){}
  ngOnInit(): void {
    this.products=this.cartService.getItems();
  }
}
