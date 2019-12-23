import { Component, OnInit } from '@angular/core';
import { formatCurrency } from '@angular/common';

import { User } from '../models/User';
import { InvestmentService } from '../services/investment.service';
import { Investment } from '../models/Investment';
import { SecurityHolding } from '../models/SecurityHolding';


@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent implements OnInit {

  user: User;
  account: Investment;

  constructor(private investmentService: InvestmentService) { }

  ngOnInit() {
    this.investmentService.getAccount(27)
      .subscribe(account => {
        this.account = account; 
      });
  }

  acctTest():void {
    this.account.balance=567.67;
  }

}
