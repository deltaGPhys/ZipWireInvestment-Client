import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TransViewComponent } from './trans-view/trans-view.component';

const routes: Routes = [
    { path: '/', component: AppComponent },
    { path: '/transactions', component: TransViewComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
