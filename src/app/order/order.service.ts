import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../products/products.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public orderDetails: BehaviorSubject<IOrderProd[]> = new BehaviorSubject<IOrderProd[]>([]);
  constructor() { }

  public getOrderDetails() {
    return this.orderDetails;
  }

  public setOrders(newOrder: IOrderProd) {
    const order = this.orderDetails.getValue();
    order.push(newOrder);
    this.orderDetails.next(order);
  }
}


export interface IOrderProd extends IProduct {
  time: Date;
  order: string;
}