import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';
import { Observable } from 'rxjs';
import { Transaction } from '../models/Transaction';

@Component({
  selector: 'app-recent-transactions',
  templateUrl: './recent-transactions.component.html',
  styleUrls: ['./recent-transactions.component.css']
})
export class RecentTransactionsComponent implements OnInit {
  transactions: Transaction[];
  transTypes: Observable<string[]>;

  constructor(private transactionService: TransactionService,) { 
    this.transactions = this.transactionService.transactions;
  }


  ngOnInit() {
    this.transactionService.getTransactions().subscribe(transactions => this.transactions = transactions);
      
    this.transTypes = this.transactionService.transTypes;
  }

}
