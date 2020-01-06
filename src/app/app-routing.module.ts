import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GoalsComponent } from './goals/goals.component';
import { AccountsComponent } from './accounts/accounts.component';
import { InvestmentsComponent } from './investments/investments.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { SpendingReportComponent } from './spending-report/spending-report.component';
import { TransactionFormComponent } from './transactions/transaction-form/transaction-form.component';
import { AddGoalComponent } from './add-goal/add-goal.component';
import { TransactionListComponent } from './transactions/transaction-list/transaction-list.component';
import { UserComponent } from './user/user.component';
import { TransfersComponent } from './transfers/transfers/transfers.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'transactions', component: TransactionListComponent },
    { path: 'goals', component: GoalsComponent },
    { path: 'accounts', component: AccountsComponent },
    { path: 'transfers', component: TransfersComponent },
    { path: 'investments', component: InvestmentsComponent },
    { path: 'register', component: CreateAccountComponent },
    { path: 'transactions', component: TransactionFormComponent },  
    { path: 'reports', component: SpendingReportComponent },
    { path: 'transactions', component: TransactionFormComponent },
    { path: 'createGoal', component: AddGoalComponent},
    { path: 'user', component: UserComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
