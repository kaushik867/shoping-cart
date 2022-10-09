import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackBarService } from 'src/app/shared/snack-bar.service';
import { UserRegistrationDialogComponent } from '../user-registration-dialog/user-registration-dialog.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login-dialog',
  templateUrl: './user-login-dialog.component.html',
  styleUrls: ['./user-login-dialog.component.css']
})
export class UserLoginDialogComponent implements OnInit {
  public hide: boolean = true;
  private isLogin: boolean = false;
  public error: string = '';
  
  constructor(private fb: FormBuilder, private dialog: MatDialog, private userSvc: UserService, private snackbarSvc: SnackBarService) { }

  public loginForm = this.fb.group({
    email: this.fb.control('', [Validators.email, Validators.required]),
    password: this.fb.control('', [Validators.required]),
  });

  ngOnInit(): void {
    this.userSvc.isUserLoggedIn.subscribe(val => {
      this.isLogin = val;
    });
  }

  public onSubmit() {
    console.log(this.loginForm.value);
    const result = this.userSvc.validateLogIn(this.loginForm.value);
    if (this.isLogin) {
      this.dialog.closeAll();
      this.snackbarSvc.openSnackbar('Login successfull', 'close')
      return;
    }

    if (result?.userNotExist) {
        this.error = 'Invalid email or password';
    }
  }

  public openRegForm() {
    this.dialog.closeAll();
    this.dialog.open(UserRegistrationDialogComponent, {width: '40%', height: '90vh'});
  }

}
