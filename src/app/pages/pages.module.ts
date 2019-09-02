import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';

import { DashboardModule } from './dashboard/dashboard.module';
import { ThrowCoinModule } from './coin/throw-coin/throw-coin.module';
import { ThrowCoinUntilModule } from './coin/throw-coin-until/throw-coin-until.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ThrowCoinModule,ThrowCoinUntilModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
