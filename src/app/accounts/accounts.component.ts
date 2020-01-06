import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../services/user-service.service';
import { LoginComponent } from '../login/loginComponent/login.component';


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})

export class AccountsComponent implements OnInit {
public name = "Charlotte Beale";
public myId = "675472";
userId : any;

  constructor(private userService: UserService,  ) {
    
    // this.userId = this.userService.getUser(this.loginComponent.userEmail)
    //   console.log(this.userId);
   }




  ngOnInit() {
  }

}
