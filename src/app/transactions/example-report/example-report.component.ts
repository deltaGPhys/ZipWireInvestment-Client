import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from 'src/app/models/Transaction';

@Component({
  selector: 'app-example-report',
  templateUrl: './example-report.component.html',
  styleUrls: ['./example-report.component.css'],
  host: {
    '[class.modal-content]': 'true'
  }
})
export class ExampleReportComponent implements OnInit {

  @Input() transactions: Transaction[];

  constructor() { }

  ngOnInit() {
  }

}
