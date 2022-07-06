import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products/products.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  public products: Product[] = [];
  constructor(private cartSvc: CartService) { }

  ngOnInit(): void {
    this.cartSvc.cartItems.subscribe(prods => {
      this.products = [...prods];
    });
  }

  removeItem(id: number) {
    this.cartSvc.removeItemFromCart(id);
  }

}
