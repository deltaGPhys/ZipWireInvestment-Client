import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from '../models/Transaction';
import { TransactionService } from '../services/transaction.service';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent implements OnInit{

  @Input() transTypes: string[];
  

  constructor(private transactionService: TransactionService) {
    
  }

  ngOnInit () {
  }

  submitTransactionForm(form): void {
    console.log(form.value);
    this.transactionService.addTransaction(form.value);
  }
  

}
