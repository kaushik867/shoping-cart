import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './cart/cart.service';
import { SnackBarService } from './shared/snack-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-cart';
  public cartLength: number = 0 
  constructor (private cartSvc: CartService, private snackSvc: SnackBarService, private router: Router) {}

  ngOnInit(): void {
    this.cartSvc.cartLength.subscribe(len => {
      this.cartLength = len;
    })
  }

  public logOut() {
      this.router.navigate(['/']);
      this.snackSvc.openSnackbar('LogOut Successfully..', 'Dismiss');
  }
}
