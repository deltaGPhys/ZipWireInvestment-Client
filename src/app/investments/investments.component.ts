import { Component, OnInit } from '@angular/core';
import { formatCurrency } from '@angular/common';
import { ResizedEvent } from 'angular-resize-event';

import { User } from '../models/User';
import { InvestmentService } from '../services/investment.service';
import { Investment } from '../models/Investment';
import { SecurityHolding } from '../models/SecurityHolding';
import { Security } from '../models/Security';
import { UserService } from '../services/user.service';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent implements OnInit {

  account: Investment;
  securities: Security[];
  holdings: SecurityHolding[];
  numbers: number[];
  selectedStock: Security;
  currentUser: User;
  

  constructor(private investmentService: InvestmentService, private userService: UserService) { 
    this.investmentService.hldgsChange.subscribe(value => this.holdings = value);
    this.userService.currentUser$.subscribe(value => {this.currentUser = value;});
    this.investmentService.acctChange.subscribe(data => {this.account = data;});
    this.investmentService.getSecurities().subscribe(x => this.securities = x);
  }

  ngOnInit() {
   
  }

  // onGraphResize(event: ResizedEvent) {
  //   let height: number = event.newHeight-100;
  //   console.log(height);
  //   this.investmentService.graphWidth$.next(event.newWidth);
  //   this.investmentService.graphHeight$.next(height);
  // }
}
