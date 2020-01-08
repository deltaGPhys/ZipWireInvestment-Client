import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { TransactionService } from './services/transaction.service';
<<<<<<< HEAD
//import { TransactionFormComponent } from './transactions/transaction-form/transaction-form.component';
=======
>>>>>>> 879238809d31f111ccb22a430b1cac91602eceaf

import { LoginComponent } from './login/loginComponent/login.component';

import { InvestmentsComponent } from './investments/investments.component';
import { InvestmentHeaderComponent } from './investments/investment-header/investment-header.component';
import { HoldingsListComponent } from './investments/holdings-list/holdings-list.component';
import { InvestmentBuyFormComponent } from './investments/investment-buy-form/investment-buy-form.component';
import { SecurityGraphComponent } from './investments/security-graph/security-graph.component';

import { TransactionViewComponent } from './transactions/transaction-view/transaction-view.component';

import { TransactionListComponent } from './transactions/transaction-list/transaction-list.component';
import { UserComponent } from './user/user-details/user.component';

import { RegisterUserComponent } from './login/register-user/register-user.component';
<<<<<<< HEAD
//import { ExampleReportComponent } from './transactions/example-report/example-report.component';
=======
>>>>>>> 879238809d31f111ccb22a430b1cac91602eceaf

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { UpdateUserComponent } from './user/update-user/update-user.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionListComponent,
    TransactionViewComponent,
    LoginComponent,
    InvestmentsComponent,
<<<<<<< HEAD
    //TransactionFormComponent,
=======
>>>>>>> 879238809d31f111ccb22a430b1cac91602eceaf
    InvestmentHeaderComponent,
    HoldingsListComponent,
    RegisterUserComponent,
    InvestmentBuyFormComponent,
    SecurityGraphComponent,
    UserComponent,
<<<<<<< HEAD
    //ExampleReportComponent,
    UpdateUserComponent
=======
>>>>>>> 879238809d31f111ccb22a430b1cac91602eceaf
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
  ],
  providers: [TransactionService, Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
