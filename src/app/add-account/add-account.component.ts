import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service.service';
import { User } from '../models/user';
import { AccountService } from '../services/account-service';
import { Account } from '../models/account';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
  currentUser: User;
  newBalance: number;
  accountCreated: boolean = false;
  createdAccount: Account;
  acctName: string;

  constructor(private userService: UserService,
    private accountService: AccountService) { }


  ngOnInit() {
    this.currentUser = this.userService.getUser();
  }

  makeNewAccount(){
    console.log("button pressed");
    this.accountService.createAccount(this.newBalance, +this.currentUser.id, this.acctName).subscribe(
      account => this.createdAccount = account
      );
  }

}
