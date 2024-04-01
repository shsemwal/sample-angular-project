import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Product, products } from '../products'
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
product: Product | undefined;
products = [...products];
constructor(
  private route: ActivatedRoute,
  private cartService: CartService
  ) {}
ngOnInit() {
  // First get the product id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));
  // const productNamefromRoute = routeParams.get('productName');

  // Find the product that correspond with the id provided in route.
  this.product = products.find(product => product.id === productIdFromRoute);
}
id = Number(this.route.snapshot.paramMap.get('productId'));
name = String(this.route.snapshot.paramMap.get('productName'));

showAlert() {
  window.alert("Product Id is: "+this.id+" and the Product name is: "+this.name);
}

addToCart(product:Product) {
  this.cartService.addToCart(product);
  window.alert("Product "+product.name+" added to cart");
}
}
