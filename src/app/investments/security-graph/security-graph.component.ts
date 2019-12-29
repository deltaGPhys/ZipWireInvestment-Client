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
  chartData: boolean = true;
  dataStartDate = null;
  
  @ViewChild(BaseChartDirective, { static: true }) 
  chart: BaseChartDirective;

  constructor(private investmentService: InvestmentService) { 
    this.investmentService.stkChange.subscribe(value => {
      this.selectedStock = value[0];
      this.dataStartDate = (value[1] != null) ? this.investmentService.parseDate(value[1]) : null;
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
      this.priceHistory.dates.forEach(date => {
        this.lineChartLabels.push(this.investmentService.parseDate(date));
      });
      this.lineChartData = [{data:this.priceHistory.prices}];
      // if (this.dataStartDate != null) {
      //   this.lineChartOptions.scales.xAxes[0].ticks.min = this.dataStartDate;
      // } else {
      //   this.lineChartOptions.scales.xAxes[0].ticks.min = this.priceHistory.dates[this.priceHistory.dates.length-1];
      // }
      this.chartData = false;
      this.chartData = true;
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
          unit: 'month',
          displayFormats: {
            'millisecond': 'MMM DD',
            'second': 'MMM DD',
            'minute': 'MMM DD',
            'hour': 'MMM DD',
            'day': 'MMM DD',
            'week': 'MMM DD',
            'month': 'MMM',
            'quarter': 'MMM DD',
            'year': 'MMM DD',
          }
        },
        ticks: {
          
        },
        
      }],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
          ticks: {
            callback: function(value, index, values) {
              if(parseInt(value) >= 1000){
                return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              } else {
                return '$' + value;
              }
            }
          }
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

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
