import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  canShow = false;
  products = [...products];

  share() {
    window.alert('The product has been shared!');
  }

  onNotify(price: number) {
    window.alert('You will be notified in case of any kind of sale! and the price is'+price)
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/