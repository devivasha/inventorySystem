import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];
  constructor() {
    this.products = [
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC8xuTbHOW0_E2jwZTY5byglwVruceZQv90g&usqp=CAU',
        ['Men', 'Shoes', 'Running Shoes'], 109.99),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLeujpBvVX8z9OBk5wHNLPOnvmhI8Q4wfacg&usqp=CAU',
        ['Women', 'Apparel', 'Jackets & Vests'], 238.99),
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVy_BK8fvkBGSrZDh4EKspbo4ckcUBsmE_JQ&usqp=CAU',
        ['Men', 'Accessories', 'Hats'],
        29.99)
    ];
  }
  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
}
