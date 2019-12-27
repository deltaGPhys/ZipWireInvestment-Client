import { Component, OnInit } from '@angular/core';
import { formatCurrency } from '@angular/common';

import { User } from '../models/User';
import { InvestmentService } from '../services/investment.service';
import { Investment } from '../models/Investment';
import { SecurityHolding } from '../models/SecurityHolding';
import { Security } from '../models/Security';


@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent implements OnInit {

  user: User = new User(1,"Jim","Jones","aol@aol.com","salty",1000.0,2000.0);
  account: Investment;
  securities: Security[];
  holdings: SecurityHolding[];

  constructor(private investmentService: InvestmentService) { }

  ngOnInit() {
    console.log("investments init");
    this.investmentService.getAccount(27)
      .subscribe(account => {
        this.account = account; 
      });
    this.investmentService.getSecurities()
      .subscribe(x => this.securities = x);
    this.investmentService.getHoldings(27)
      .subscribe(y => {this.holdings = y;});
    
  }

  acctTest():void {
    this.account.balance=567.67;
  }


}
