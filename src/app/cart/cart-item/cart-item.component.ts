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

  public removeItem(id: number) {
    this.cartSvc.removeItemFromCart(id);
  }

  public buyAll() {
    this.products.forEach(element => {
      this.prodSvc.getProductById(element.id).subscribe(data => {
        const orderData: OrderProd = {...data, time: new Date(), order: 'successfull'};
        this.orderSvc.setOrders(orderData);
        this.cartSvc.removeItemFromCart(element.id);
        this.products = [];
        this.router.navigate(['/usercart/cart']);
      })
    })
  }
}
