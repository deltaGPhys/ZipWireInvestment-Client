import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  
  currentUser: User;
  data : any;

  constructor(private loginService : LoginService) {
    
   }

  ngOnInit() {
    this.loginService.userToDisplay$.subscribe(data => this.currentUser = data);
    console.log(this.data);
  }

  
}
