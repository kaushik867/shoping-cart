import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SnackBarService } from './shared/snack-bar.service';
import { UserService } from './users/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedUserGuard implements CanActivate {
  constructor(private snackbarSvc: SnackBarService, private userSvc: UserService, private router: Router,) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const loggedUser = this.userSvc.loggedUser.getValue();
    if (Object.keys(loggedUser).length > 0) {
      return true;
    }

    this.router.navigate(['/']);
    this.snackbarSvc.openSnackbar('Please login', 'close');
    return false;
  }
  
}
