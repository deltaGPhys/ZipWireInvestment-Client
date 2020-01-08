import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/loginComponent/login.component';
import { InvestmentsComponent } from './investments/investments.component';
<<<<<<< HEAD
//import { TransactionFormComponent } from './transactions/transaction-form/transaction-form.component';
=======
>>>>>>> 879238809d31f111ccb22a430b1cac91602eceaf
import { TransactionListComponent } from './transactions/transaction-list/transaction-list.component';
import { UserComponent } from './user/user-details/user.component';
import { RegisterUserComponent } from './login/register-user/register-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'transactions', component: TransactionListComponent },
    { path: 'investments', component: InvestmentsComponent },
    { path: 'register', component: RegisterUserComponent },
<<<<<<< HEAD
    //{ path: 'transactions', component: TransactionFormComponent },
    { path: 'user', component: UserComponent},
    { path: 'update-user', component: UpdateUserComponent}
=======
    { path: 'user', component: UserComponent}
>>>>>>> 879238809d31f111ccb22a430b1cac91602eceaf
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
