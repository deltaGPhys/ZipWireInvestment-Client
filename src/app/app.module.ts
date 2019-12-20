import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TransactionListTestComponent } from './transaction-list-test/transaction-list-test.component';
import { HttpClientModule } from '@angular/common/http';
import { TransViewComponent } from './trans-view/trans-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TransViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
