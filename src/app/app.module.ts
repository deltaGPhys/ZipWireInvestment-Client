import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TransactionListTestComponent } from './transaction-list-test/transaction-list-test.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionListTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
