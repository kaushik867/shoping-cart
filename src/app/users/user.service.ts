import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
}


export interface IUser {
  name: string,
  mobile: string[],
  cardDetials: string[],
  gender: string,
  address: IAddress[],
}

export interface IAddress {
  address: string,
  city: string,
  state: string,
  pin: number,
}