import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../products/products.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public orderDetails: BehaviorSubject<OrderProd[]> = new BehaviorSubject<OrderProd[]>([]);
  constructor() { }

  public getOrderDetails() {
    return this.orderDetails;
  }

  public setOrders(newOrder: OrderProd) {
    const order = this.orderDetails.getValue();
    order.push(newOrder);
    this.orderDetails.next(order);
  }
}


export interface OrderProd extends Product {
  time: Date;
  order: string;
}