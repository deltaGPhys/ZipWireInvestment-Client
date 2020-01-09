import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/loginComponent/login.component';
import { InvestmentsComponent } from './investments/investments.component';
import { TransactionListComponent } from './transactions/transaction-list/transaction-list.component';
import { RegisterUserComponent } from './login/register-user/register-user.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'transactions', component: TransactionListComponent },
    { path: 'investments', component: InvestmentsComponent },
    { path: 'register', component: RegisterUserComponent },
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
