import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Transaction } from '../models/Transaction';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-transaction-list-test',
  templateUrl: './transaction-list-test.component.html',
  styleUrls: ['./transaction-list-test.component.css']
})
export class TransactionListTestComponent implements OnInit {

  transactions: Transaction[];
   

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private text: string = "hiii";

  constructor(private transactionService: TransactionService) { 

  }


  ngOnInit() {
    console.log("here");
    this.transactionService.getTransactions().subscribe(transactions => this.transactions = transactions);
  }

  // getTransactions() {
  //   this.transactions = [
  //     new Transaction(2,"DEPOSIT",123.45,"Jar of coins"),
  //     new Transaction(7,"WITHDRAWAL",45.67,"Online purchase from catsweaters.com")
  //   ];
  //   return this.transactions;

  // }

}
