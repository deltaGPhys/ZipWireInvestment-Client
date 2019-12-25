import { Component, OnInit, Input } from '@angular/core';
import { Security } from 'src/app/models/Security';

@Component({
  selector: 'app-investment-buy-form',
  templateUrl: './investment-buy-form.component.html',
  styleUrls: ['./investment-buy-form.component.css']
})
export class InvestmentBuyFormComponent implements OnInit {

  @Input() securities: Security[];
  @Input() account: Account;
  
  constructor() { }

  ngOnInit() {
  }

}
