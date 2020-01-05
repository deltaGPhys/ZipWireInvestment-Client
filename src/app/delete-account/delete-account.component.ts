import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service.service';
import { AccountService } from '../services/account-service';
import { User } from '../models/user';
import { Account } from '../models/account';

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

  constructor(private userService: UserService,
    private accountService: AccountService) { }

  ngOnInit() {
    this.currentUser = this.userService.getUser();
    this.accountService.getAccountsByUser(this.currentUser.id)
    .subscribe(accounts => this.userAccounts = accounts);
  }

  deleteAccount(){
    this.accountService.deleteAccount(this.selectedAccount.id).
    subscribe(result => {this.accountDeleted = result; 
      this.accountService.getAccountsByUser(this.currentUser.id)
      .subscribe(accounts => this.userAccounts = accounts)});
    delete this.selectedAccount;
  }

}
