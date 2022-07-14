import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IOrderProd, OrderService } from 'src/app/order/order.service';
import { IProduct, ProductsService } from 'src/app/products/products.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  public products: IProduct[] = [];
  public selectedTabIndex: number = 0;
  constructor(private cartSvc: CartService, private prodSvc: ProductsService, 
    private orderSvc: OrderService, private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cartSvc.cartItems.subscribe(prods => {
      this.products = [...prods];
    });

    this.actRoute.queryParams.subscribe(data=> {
      if (data && data.order) {
        this.selectedTabIndex = 1;
      } else {
        this.selectedTabIndex = 0;
      }
    })
  }

  public removeItem(prod: IProduct) {
    this.cartSvc.removeItemFromCart([prod], 'Item removed from cart');
  }

  public buyAll() {
    this.products.forEach(element => {
      this.prodSvc.getProductById(element.id).subscribe(data => {
        const orderData: IOrderProd = {...data, time: new Date(), order: 'successfull'};
        this.orderSvc.setOrders(orderData);
        this.router.navigate(['/usercart/cart']);
      });
    });

    this.cartSvc.removeItemFromCart(this.products, 'Order Placed');
  }

  public tabChanged(event: any) {
    this.selectedTabIndex = event.index;
    if(event.index === 0) {
      this.router.navigate(['.'], {relativeTo: this.actRoute});
    } else {
      this.router.navigate(['.'], {relativeTo: this.actRoute, queryParams: {order: true}});
    }
    
  }
}
