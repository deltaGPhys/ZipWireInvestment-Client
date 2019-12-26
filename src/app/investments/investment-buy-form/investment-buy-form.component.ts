import { Component, OnInit, Input } from '@angular/core';
import { Security } from 'src/app/models/Security';
import { FormGroup, FormControl } from '@angular/forms';
import { InvestmentService } from 'src/app/services/investment.service';
import { InvestmentsComponent } from 'src/app/investments/investments.component'
import { Account } from 'src/app/models/Account';


@Component({
  selector: 'app-investment-buy-form',
  templateUrl: './investment-buy-form.component.html',
  styleUrls: ['./investment-buy-form.component.css']
})
export class InvestmentBuyFormComponent implements OnInit {

  @Input() securities: Security[];
  @Input() account: Account;
  buyStockForm: FormGroup;
  selectedStock: Security;
  
  constructor(private investmentService: InvestmentService) { 
    this.buyStockForm = this.createFormGroup();
  }

  ngOnInit() {
    console.log(this.buyStockForm.controls['numShares']);
    
    this.buyStockForm.get('numShares').valueChanges.subscribe(
      numShares => {console.log(numShares);this.updateTotalCost();}
    );
    this.buyStockForm.get('totalCost').valueChanges.subscribe(
      totalCost => {console.log(totalCost);this.updateNumShares();}
    );
    this.buyStockForm.get('security').valueChanges.subscribe(
      sec => {this.selectedStock=this.getSecurity(sec);this.updateTotalCost();}
    );
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
    console.log(this.buyStockForm);
    this.investmentService.addHolding(this.selectedStock.id, this.buyStockForm.controls['numShares'].value, this.account.id).subscribe(data => {console.log(data); });
  }

  getSecurity(id: number): Security {
    for (let sec of this.securities) {
      if (sec.id == id) {
        return sec;
      }
    }
    return null;
  }
  
  updateTotalCost(): void {
    if (this.selectedStock != null){
      let numShares: number = this.buyStockForm.controls['numShares'].value;
      this.buyStockForm.controls['totalCost'].setValue(numShares*this.selectedStock.currentPrice,{emitEvent: false});
    }
  }

  updateNumShares(): void {
    if (this.selectedStock != null){
      let rawVal: string = this.buyStockForm.controls['totalCost'].value;
      let totalCost: number = +rawVal.replace('$','').replace(',','');
      let numShares: number = 0;
      if (totalCost != 0) {
        numShares = totalCost/this.selectedStock.currentPrice;
      }
      this.buyStockForm.controls['numShares'].setValue(numShares,{emitEvent: false});
    }
  }

  updateCostFormat(): void {
    this.buyStockForm.controls['totalCost'].setValue(this.buyStockForm.controls['totalCost'].value,{emitEvent: false});
  }

}
