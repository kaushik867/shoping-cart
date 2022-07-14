import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IOrderProd, OrderService } from '../order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  public orderDetails: IOrderProd[] = [];
  constructor(private orderSvc: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.orderSvc.getOrderDetails().subscribe(data => {
      this.orderDetails = [...data];
    }, error => {
      this.router.navigate(['/server-error']);
    })
  }

}
