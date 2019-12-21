import { Component, OnInit } from '@angular/core';
import { Transaction } from '../models/Transaction';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent implements OnInit{

  private transTypes: string[];

  constructor(private transactionService: TransactionService) {

  }

  ngOnInit () {
  }
  
  

}
