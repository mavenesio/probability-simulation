import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { FlipCoinComponent } from './coin/flip-coin/flip-coin.component';
import { FlipCoinUntilComponent } from './coin/flip-coin-until/flip-coin-until.component';
import { RollDiceComponent } from './dice/roll-dice.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'coin/flip-coin',
      component: FlipCoinComponent,
    },
    {
      path: 'coin/flip-coin-until',
      component: FlipCoinUntilComponent,
    },
    {
      path: 'dice/roll-dice-until',
      component: RollDiceComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
