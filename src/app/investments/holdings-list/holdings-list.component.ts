import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private investmentService: InvestmentService) { }

  ngOnInit() {
  }

  sellHolding(holdingId: number) {
    this.investmentService.sellHolding(holdingId).subscribe();
    this.investmentService.getHoldings(27).subscribe(data => this.holdings = data);
  }

}
