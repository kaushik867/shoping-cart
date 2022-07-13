import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderProd, OrderService } from 'src/app/order/order.service';
import { Product, ProductsService } from 'src/app/products/products.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  public products: Product[] = [];
  constructor(private cartSvc: CartService, private prodSvc: ProductsService, 
    private orderSvc: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.cartSvc.cartItems.subscribe(prods => {
      this.products = [...prods];
    });
  }

  public removeItem(prod: Product) {
    this.cartSvc.removeItemFromCart([prod], 'Item removed from cart');
  }

  public buyAll() {
    this.products.forEach(element => {
      this.prodSvc.getProductById(element.id).subscribe(data => {
        const orderData: OrderProd = {...data, time: new Date(), order: 'successfull'};
        this.orderSvc.setOrders(orderData);
        this.router.navigate(['/usercart/cart']);
      });
    });

    this.cartSvc.removeItemFromCart(this.products, 'Order Placed');
  }
}
