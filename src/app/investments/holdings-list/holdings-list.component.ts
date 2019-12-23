import { Component, OnInit, Input } from '@angular/core';
import { SecurityHolding } from 'src/app/models/SecurityHolding';

@Component({
  selector: 'app-holdings-list',
  templateUrl: './holdings-list.component.html',
  styleUrls: ['./holdings-list.component.css']
})
export class HoldingsListComponent implements OnInit {

  @Input() account: Account;

  constructor() { }

  ngOnInit() {
  }

}
