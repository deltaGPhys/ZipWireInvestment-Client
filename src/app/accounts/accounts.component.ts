<<<<<<< HEAD
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


=======
import {Component, Input, OnInit} from '@angular/core';
import { Account } from '../models/account';
import {AccountService} from '../services/account-service';
import {ActivatedRoute} from '@angular/router';
import {Accounttype} from '../models/accounttype';

@Component({
    selector: 'app-accounts',
    templateUrl: './accounts.component.html',
    styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
    @Input('userId') userId: number;
    accounts: Account[];
    selectedAccount: Account;
    createAccount: boolean;
    account: Account;
    accountTypes: Accounttype[];
    selectedAccountType: Accounttype;
    accountTypeName: string;
    accountTypeId: number;

    constructor(private accountService: AccountService, private route: ActivatedRoute) {
      this.createAccount = false;
    }

    ngOnInit() {
        // this.userId = +this.route.snapshot.paramMap.get('id');
        console.log('init called');
        this.getAccounts();
        this.accountTypeName = 'Type';
        this.accountService.getAccountTypes().subscribe(accountType => this.accountTypes = accountType);
    }

    getAccounts(): void {
        this.accountService.getAccounts(this.userId).subscribe(accounts => this.accounts = accounts);
    }

    onSelect(account: Account): void {
        this.selectedAccount = account;
    }

    onClick(): void {
      this.createAccount = !this.createAccount;
    }

    // add(name: string, balance: number, accountTypeId: number, userId: number): void {
    //     name = name.trim();

    //     if (!this.validDeposit(name, balance)) {
    //         return;
    //     }
    //     accountTypeId = this.accountTypeId;
    //     userId = this.userId;
    //     this.accountService.addAccount({name, balance, accountTypeId, userId} as Account)
    //         .subscribe(
    //             account => {this.accounts.push(account);}
    //         );
    //     this.createAccount = false;
    // }
>>>>>>> d1c77a27bdfce1d5616483765fd4ae573a89a3f1


    onSelectAccountType(accountType: Accounttype) {
        this.selectedAccountType = accountType;
        this.accountTypeName = this.selectedAccountType.description;
        this.accountTypeId = this.selectedAccountType.id;
    }

    private validDeposit(name: string, balance: number) {
        if (!name) {
            return false;
        }
        if (!balance) {
            return false;
        }
        if (!this.userId) {
            return false;
        }
        if (!this.accountTypeId) {
            return false;
        }
        return true;
    }
}
