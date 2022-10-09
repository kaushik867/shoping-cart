import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { UserLoginDialogComponent } from './user-login-dialog/user-login-dialog.component';
import { UserRegistrationDialogComponent } from './user-registration-dialog/user-registration-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

const route: Routes = [
  { path: 'details', component: UserDetailsComponent },
  // { path: 'login', component: UserLoginComponent },
  // { path: 'registration', component: UserRegistrationComponent },
]

@NgModule({
  declarations: [
    UserDetailsComponent,
    UserLoginDialogComponent,
    UserRegistrationDialogComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(route),
  ],
  exports: [
    UserLoginDialogComponent,
  ]
})
export class UsersModule { }
