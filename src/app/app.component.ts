import { Component } from '@angular/core';
import { TransactionListTestComponent } from './transaction-list-test/transaction-list-test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'FinanceAppFrontEnd';

  ngOnInit() {
      console.log("hiApp");
  }
}
