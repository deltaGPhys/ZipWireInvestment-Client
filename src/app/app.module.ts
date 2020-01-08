import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { TransactionService } from './services/transaction.service';

import { LoginComponent } from './login/loginComponent/login.component';

import { InvestmentsComponent } from './investments/investments.component';
import { InvestmentHeaderComponent } from './investments/investment-header/investment-header.component';
import { HoldingsListComponent } from './investments/holdings-list/holdings-list.component';
import { InvestmentBuyFormComponent } from './investments/investment-buy-form/investment-buy-form.component';
import { SecurityGraphComponent } from './investments/security-graph/security-graph.component';

import { TransactionViewComponent } from './transactions/transaction-view/transaction-view.component';

import { TransactionListComponent } from './transactions/transaction-list/transaction-list.component';
import { UserComponent } from './user/user-details/user.component';

import { RegisterUserComponent } from './user/register-user/register-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { AngularResizedEventModule } from 'angular-resize-event';



@NgModule({
  declarations: [
    AppComponent,
    TransactionListComponent,
    TransactionViewComponent,
    LoginComponent,
    InvestmentsComponent,
    InvestmentHeaderComponent,
    HoldingsListComponent,
    RegisterUserComponent,
    InvestmentBuyFormComponent,
    SecurityGraphComponent,
    UserComponent,
    UpdateUserComponent
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
    AngularResizedEventModule,
  ],
  providers: [TransactionService, Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
