import { Component, OnInit, Input } from '@angular/core';
import { Investment } from 'src/app/models/Investment';
import { InvestmentService } from 'src/app/services/investment.service';


@Component({
  selector: 'app-investment-header',
  templateUrl: './investment-header.component.html',
  styleUrls: ['./investment-header.component.css']
})
export class InvestmentHeaderComponent implements OnInit {

  @Input() account: Investment; 
  portfolioValues: Object = this.investmentService.portValsChange.getValue();

  constructor(private investmentService: InvestmentService) { 
    this.investmentService.portValsChange.subscribe(value => {this.portfolioValues = value;console.log(value);});
  }

  ngOnInit() {
    
  }

  

}
