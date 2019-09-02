import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ThrowCoinComponent } from './coin/throw-coin/throw-coin.component';
import { ThrowCoinUntilComponent } from './coin/throw-coin-until/throw-coin-until.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'coin/throw-coin',
      component: ThrowCoinComponent,
    },
    {
      path: 'coin/throw-coin-until',
      component: ThrowCoinUntilComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
