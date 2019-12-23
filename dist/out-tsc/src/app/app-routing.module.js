import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TransactionListTestComponent } from './transaction-list-test/transaction-list-test.component';
import { LoginComponent } from './login/login.component';
import { GoalsComponent } from './goals/goals.component';
import { AccountsComponent } from './accounts/accounts.component';
import { InvestmentsComponent } from './investments/investments.component';
const routes = [
    { path: '', component: LoginComponent },
    { path: 'transactions', component: TransactionListTestComponent },
    { path: 'goals', component: GoalsComponent },
    { path: 'accounts', component: AccountsComponent },
    { path: 'investments', component: InvestmentsComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map