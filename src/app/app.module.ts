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
import { LoginComponent } from './login/login.component';
import { GoalsComponent } from './goals/goals.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { InvestmentsComponent } from './investments/investments.component';
import { InvestmentHeaderComponent } from './investments/investment-header/investment-header.component';
import { HoldingsListComponent } from './investments/holdings-list/holdings-list.component';
import { InvestmentBuyFormComponent } from './investments/investment-buy-form/investment-buy-form.component';
import { SecurityGraphComponent } from './investments/security-graph/security-graph.component';
import { LoginService } from './services/login.service';
import { SpendingReportComponent } from './spending-report/spending-report.component';
import { DateRangeComponent } from './date-range/date-range.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionViewComponent } from './transactions/transaction-view/transaction-view.component';
import {AddGoalComponent} from './add-goal/add-goal.component';
import { GoalServiceService } from './services/goal-service.service';
import { TransactionListComponent } from './transactions/transaction-list/transaction-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionListComponent,
    TransactionViewComponent,
    LoginComponent,
    GoalsComponent,
    AccountsComponent,
    InvestmentsComponent,
    TransactionFormComponent,
    InvestmentHeaderComponent,
    HoldingsListComponent,
    DashboardComponent,
    CreateAccountComponent,
    InvestmentBuyFormComponent,
    SecurityGraphComponent,
    SpendingReportComponent,
    DateRangeComponent,
    AddGoalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
  ],
  providers: [TransactionService, LoginService, GoalServiceService, Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
