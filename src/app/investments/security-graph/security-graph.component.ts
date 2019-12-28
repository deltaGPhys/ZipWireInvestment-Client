import { Component, OnInit, ViewChild } from '@angular/core';
import { Security } from 'src/app/models/Security';
import { InvestmentService } from 'src/app/services/investment.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { PriceHistory } from 'src/app/models/PriceHistory';


@Component({
  selector: 'app-security-graph',
  templateUrl: './security-graph.component.html',
  styleUrls: ['./security-graph.component.css']
})
export class SecurityGraphComponent implements OnInit {

  selectedStock: Security = null;
  priceHistory: PriceHistory = this.investmentService.histChange.getValue();

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;
  constructor(private investmentService: InvestmentService) { 
    this.investmentService.stkChange.subscribe(value => {
      this.selectedStock = value[0];
    });
    this.investmentService.histChange.subscribe(value => {
      this.priceHistory = value;
      this.chartUpdate();
    });
  }

  ngOnInit() {
  }

  chartUpdate() {
    if (this.priceHistory != null) {
      console.log(this.priceHistory.dates);
      this.priceHistory.dates.forEach(date => {
        this.lineChartLabels.push(date[0]+"-"+date[1]+"-"+date[2]);
      });
      this.lineChartData = [{data:this.priceHistory.prices}];
    }
  }

  public lineChartData: ChartDataSets[] = [
    { data: [] },
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: (ChartOptions) = {
    responsive: true,
    elements: 
    { 
      point: 
      {
          radius: 0,
          hitRadius: 0,
          hoverRadius: 5,
          hoverBorderWidth: 1
      },
      line:
      {
        borderWidth: 1,
        tension: 0
      }
    },
    scales: {
      xAxes: [{
        type: 'time',
        time: {
          unit: 'day'
        }
      }],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
      ]
    },
    legend: {
      display: false
    },
  };
  public lineChartColors: Color[] = [
    { // blue
      backgroundColor: 'rgba(0,0,255,0.3)',
      borderColor: 'blue',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartType = 'line';
}
