import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TransactionListTestComponent } from './transaction-list-test/transaction-list-test.component';
import { LoginComponent } from './login/login.component';
import { GoalsComponent } from './goals/goals.component';
import { AccountsComponent } from './accounts/accounts.component';
import { InvestmentsComponent } from './investments/investments.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import {TransactionFormComponent} from './transaction-form/transaction-form.component'
import { SpendingReportComponent } from './spending-report/spending-report.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'transactions', component: TransactionListTestComponent },
    { path: 'goals', component: GoalsComponent },
    { path: 'accounts', component: AccountsComponent },
    { path: 'investments', component: InvestmentsComponent },
    { path: 'register', component: CreateAccountComponent },
    { path: 'transactions', component: TransactionFormComponent },  
    { path: 'reports', component: SpendingReportComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
