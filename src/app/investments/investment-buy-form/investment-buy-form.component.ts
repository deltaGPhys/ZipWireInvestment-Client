import { Component, OnInit, Input } from '@angular/core';
import { Security } from 'src/app/models/Security';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-investment-buy-form',
  templateUrl: './investment-buy-form.component.html',
  styleUrls: ['./investment-buy-form.component.css']
})
export class InvestmentBuyFormComponent implements OnInit {

  @Input() securities: Security[];
  @Input() account: Account;
  buyStockForm: FormGroup;
  
  constructor() { 
    this.buyStockForm = this.createFormGroup();
  }

  ngOnInit() {
  }

  createFormGroup() {
    return new FormGroup({
      numShares: new FormControl(''),
      security: new FormControl(''),
      totalCost: new FormControl('')
    });
  }

  revert() {
    this.buyStockForm.reset();
  }

  onSubmit() {

  }

}
