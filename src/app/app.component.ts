import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CartService } from './cart/cart.service';
import { SnackBarService } from './shared/snack-bar.service';
import { UserLoginDialogComponent } from './users/user-login-dialog/user-login-dialog.component';
import { IUser, UserService } from './users/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-cart';
  public cartLength: number = 0;
  public userLogin: boolean = false;
  constructor (private cartSvc: CartService, private snackSvc: SnackBarService, 
    private router: Router, private userScv: UserService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.cartSvc.cartLength.subscribe(len => {
      this.cartLength = len;
    });

    this.userScv.isUserLoggedIn.subscribe(data => {
      this.userLogin = data;
    })
  }

  public logOut() {
      this.router.navigate(['/']);
      this.userScv.isUserLoggedIn.next(false);
      this.userScv.loggedUser.next(<IUser>{});
      this.snackSvc.openSnackbar('LogOut Successfully..', 'Dismiss');
  }

  public logIn() {
    this.dialog.open(UserLoginDialogComponent, {width: '40%'});
  }

}
