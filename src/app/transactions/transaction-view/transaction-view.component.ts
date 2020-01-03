import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from 'src/app/models/Transaction';

@Component({
  selector: 'app-transaction-view',
  templateUrl: './transaction-view.component.html',
  styleUrls: ['./transaction-view.component.css']
})
export class TransactionViewComponent implements OnInit {

  @Input() transaction: Transaction;
  
  constructor() { }

  ngOnInit() {
  }

}
