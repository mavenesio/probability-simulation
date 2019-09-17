import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';

import { DashboardModule } from './dashboard/dashboard.module';
import { FlipCoinModule } from './coin/flip-coin/flip-coin.module';
import { FlipCoinUntilModule } from './coin/flip-coin-until/flip-coin-until.module';
import { RollDiceModule } from './dice/roll-dice.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    FlipCoinModule,
    FlipCoinUntilModule,
    RollDiceModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
