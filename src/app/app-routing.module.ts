import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TransactionListTestComponent } from './transaction-list-test/transaction-list-test.component';


const routes: Routes = [
  { path: '', component: TransactionListTestComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
