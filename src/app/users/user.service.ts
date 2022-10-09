import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: IUser[] = [{email: 'k@g.co', password: '1234'} as IUser];
  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public loggedUser: BehaviorSubject<IUser> = new BehaviorSubject(<IUser>{});
  constructor() { }

  public login(val: boolean = false) {
    this.isUserLoggedIn.next(val);
  }

  public validateLogIn(cred: any) {
      const user = this.user.find(x => x.email === cred.email && x.password === cred.password);
      if (user) {
          this.loggedUser.next(user);
          this.login(true);
          return;
      }

      this.loggedUser.next(<IUser>{});
      return {
        userNotExist: true,
      }
  }

  public signUp(user: IUser) {
    this.user.push(user);
  }
}


export interface IUser {
  name: string,
  phoneNumber: string[],
  cardDetials: string[],
  address: IAddress[],
  email: string,
  password: string,
}

export interface IAddress {
  address: string,
  city: string,
  state: string,
  pin: number,
}