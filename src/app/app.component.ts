import { Component, OnInit } from '@angular/core';
import { CartService } from './cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-cart';
  public cartLength: number = 0 
  constructor (private cartSvc: CartService) {}

  ngOnInit(): void {
    this.cartSvc.cartLength.subscribe(len => {
      this.cartLength = len;
    })
  }
}
