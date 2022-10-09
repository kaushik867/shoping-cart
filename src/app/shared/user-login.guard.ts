import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../users/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserLoginGuard implements CanActivate {

  constructor(private userSvc: UserService,){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.userSvc.isUserLoggedIn;
  }
  
}
