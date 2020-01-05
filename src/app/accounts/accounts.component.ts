import { Component, OnInit } from '@angular/core';
import{User} from '../models/User';


@Component({
  selector: 'app-accounts',
  templateUrl:'./accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
    id: number;
    balance : number;
    openingDate : number;
    owner: string;
    acctName : string;

    constructor(id:number, balance:number, openingDate:number, owner:string, acctName:string){
        this.id = id;
        this.balance = balance;
        this.openingDate = openingDate;
        this.owner = owner;
        this.acctName = acctName;
      
    }

}