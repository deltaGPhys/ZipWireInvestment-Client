import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TransactionListTestComponent } from './transaction-list-test/transaction-list-test.component';
import { HttpClientModule } from '@angular/common/http';
import { TransactionService } from './services/transaction.service';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { GoalsComponent } from './goals/goals.component';
import { AccountsComponent } from './accounts/accounts.component';
import { InvestmentsComponent } from './investments/investments.component';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            TransactionListTestComponent,
            LoginComponent,
            GoalsComponent,
            AccountsComponent,
            InvestmentsComponent,
            TransactionFormComponent
        ],
        imports: [
            BrowserModule,
            HttpClientModule,
            AppRoutingModule
        ],
        providers: [TransactionService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map