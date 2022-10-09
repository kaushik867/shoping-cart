import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserLoginDialogComponent } from '../user-login-dialog/user-login-dialog.component';
import { IUser, UserService } from '../user.service';

@Component({
  selector: 'app-user-registration-dialog',
  templateUrl: './user-registration-dialog.component.html',
  styleUrls: ['./user-registration-dialog.component.css']
})
export class UserRegistrationDialogComponent implements OnInit {
  public hide: boolean = true;
  public signUpForm = this.fb.group({
    name: this.fb.control('', [Validators.required, Validators.minLength(3)]),
    dob: this.fb.control('', [Validators.required]),
    email: this.fb.control('', [Validators.email, Validators.required]),
    phoneNumber: this.fb.control('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    password: this.fb.control('', [Validators.required]),
  });

  constructor(private dialog: MatDialog, private fb: FormBuilder, private userSvc: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  public openLogIn() {
    this.dialog.closeAll();
    this.dialog.open(UserLoginDialogComponent, {width: '40%', data: null});
  }

  public onSubmit() {
    console.log(this.signUpForm.value);
    if (this.signUpForm.valid) {
      this.userSvc.signUp(this.signUpForm.value as IUser);
      this.dialog.closeAll();
      this.dialog.open(UserLoginDialogComponent, {width: '40%', data: null});
    }
  }

}
