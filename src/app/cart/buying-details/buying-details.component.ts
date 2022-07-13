import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderProd, OrderService } from 'src/app/order/order.service';
import { Product, ProductsService } from 'src/app/products/products.service';
import { LoadingService } from 'src/app/shared/loader/loading.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-buying-details',
  templateUrl: './buying-details.component.html',
  styleUrls: ['./buying-details.component.css']
})
export class BuyingDetailsComponent implements OnInit {
  public product: Product = <Product>{};
  public loading: boolean = false;

  constructor(private actRoutes: ActivatedRoute, private cartSvc: CartService, private loadSvc: LoadingService,
    private prodSvc: ProductsService, private router: Router, private OrderSvc: OrderService) { }

  ngOnInit(): void {
    this.actRoutes.params.subscribe(data => {
      if (data.id && this.cartSvc.cartItems.getValue().length) {
        this.prodSvc.getProductById(data.id).subscribe(data => {
          this.product = {...data};
        }, error => {
          this.router.navigate(['server-error']);
        })
      }
    });

    this.loadSvc.loading.subscribe(val => {
      this.loading= val;
    });
  }

  public placedOrder(id: number) {
    this.prodSvc.getProductById(id).subscribe(data => {
      const orderData: OrderProd = {...data, time: new Date(), order: 'successfull'};
      this.OrderSvc.setOrders(orderData);
      this.cartSvc.removeItemFromCart(id);
      this.product = <Product>{};
      this.router.navigate(['/usercart/cart']);
    });
  }

}
