import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private userSvc: UserService) { }

  ngOnInit(): void {
    this.userSvc.loggedUser.subscribe(val => {
      console.log(val);
    })
  }

}
