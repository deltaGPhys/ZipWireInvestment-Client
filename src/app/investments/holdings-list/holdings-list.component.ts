import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { SecurityHolding } from 'src/app/models/SecurityHolding';
import { Security } from 'src/app/models/Security';
import { InvestmentService } from 'src/app/services/investment.service';


@Component({
  selector: 'app-holdings-list',
  templateUrl: './holdings-list.component.html',
  styleUrls: ['./holdings-list.component.css']
})
export class HoldingsListComponent implements OnInit {

  @Input() account: Account;
  @Input() securities: Security[];
  @Input() holdings: SecurityHolding[];
  numbers: number[];
  

  constructor(private investmentService: InvestmentService) { 
    this.investmentService.numsChange.subscribe(value => {this.numbers= value; });
  }

  acctTest():void {
    if (this.numbers == null) {
      console.log('null');
      this.numbers = [1];
    }
    this.numbers = [...this.numbers, this.numbers.length+1];
    this.investmentService.numbersChange(this.numbers);
  }

  ngOnInit() {
  }

  sellHolding(holdingId: number) {
    this.investmentService.sellHolding(holdingId).subscribe();
    this.investmentService.getHoldings(27).subscribe(data => this.holdings = data);
  }

}
