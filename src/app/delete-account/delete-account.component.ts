import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account-service';
import { User } from '../models/User';
import { Account } from '../models/account';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent implements OnInit {

  currentUser: User;
  userAccounts: Account[];
  selectedAccount: Account;
  accountDeleted: boolean = false;

  constructor(private userService: UserService, private accountService: AccountService) { }

  ngOnInit() {
    this.userService.currentUser$.subscribe(data => this.currentUser = data);
    this.accountService.getAccountsById(this.currentUser.id)
    .subscribe(accounts => this.userAccounts = accounts);
  }

  deleteAccount(){
    this.accountService.deleteAccount(this.selectedAccount.id).
    subscribe(result => {this.accountDeleted = result; 
      this.accountService.getAccountsById(this.currentUser.id)
      .subscribe(accounts => this.userAccounts = accounts)});
    delete this.selectedAccount;
  }

}
