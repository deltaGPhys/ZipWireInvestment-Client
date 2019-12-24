import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TransactionListTestComponent } from './transaction-list-test/transaction-list-test.component';
import { HttpClientModule } from '@angular/common/http';
import { TransactionService } from './services/transaction.service';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { GoalsComponent } from './goals/goals.component';
import { AccountsComponent } from './accounts/accounts.component';
import { InvestmentsComponent } from './investments/investments.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import { InvestmentHeaderComponent } from './investments/investment-header/investment-header.component';
import { HoldingsListComponent } from './investments/holdings-list/holdings-list.component';
import { InvestmentBuyFormComponent } from './investments/investment-buy-form/investment-buy-form.component';


@NgModule({
  declarations: [
    AppComponent,
    TransactionListTestComponent,
    LoginComponent,
    GoalsComponent,
    AccountsComponent,
    InvestmentsComponent,
    TransactionFormComponent,
    InvestmentHeaderComponent,
    HoldingsListComponent,
    DashboardComponent,
    CreateAccountComponent,
    TransactionFormComponent,
    InvestmentBuyFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [TransactionService, Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
