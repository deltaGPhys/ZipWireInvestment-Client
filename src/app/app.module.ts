import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { TransactionService } from './services/transaction.service';
import { TransactionFormComponent } from './transactions/transaction-form/transaction-form.component';

import { LoginComponent } from './login/loginComponent/login.component';

import { InvestmentsComponent } from './investments/investments.component';
import { InvestmentHeaderComponent } from './investments/investment-header/investment-header.component';
import { HoldingsListComponent } from './investments/holdings-list/holdings-list.component';
import { InvestmentBuyFormComponent } from './investments/investment-buy-form/investment-buy-form.component';
import { SecurityGraphComponent } from './investments/security-graph/security-graph.component';

import { TransactionViewComponent } from './transactions/transaction-view/transaction-view.component';

import { TransactionListComponent } from './transactions/transaction-list/transaction-list.component';
import { UserComponent } from './user/user.component';
import { TransfersComponent } from './transfers/transfers/transfers.component';

import { RegisterUserComponent } from './login/register-user/register-user.component';
import { ExampleReportComponent } from './transactions/example-report/example-report.component';

import {  RxReactiveFormsModule } from "@rxweb/reactive-form-validators"

//import { DeleteAccountComponent } from './delete-account/delete-account.component';
//import { AddAccountComponent } from './add-account/add-account.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionListComponent,
    TransactionViewComponent,
    LoginComponent,
    InvestmentsComponent,
    TransactionFormComponent,
    InvestmentHeaderComponent,
    HoldingsListComponent,
    RegisterUserComponent,
    InvestmentBuyFormComponent,
    SecurityGraphComponent,
    UserComponent,
    TransfersComponent,
    ExampleReportComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    RxReactiveFormsModule,
  ],
  providers: [TransactionService, Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
