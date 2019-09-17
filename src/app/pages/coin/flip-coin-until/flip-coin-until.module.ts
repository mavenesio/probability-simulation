import { NgModule } from '@angular/core';
import { NbCardModule,
   NbInputModule,
   NbButtonModule,
   NbListModule,
   NbSpinnerModule,
   NbSelectModule } from '@nebular/theme';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ThemeModule } from '../../../@theme/theme.module';
import { BarChartModule } from '@swimlane/ngx-charts';

import { FlipCoinUntilComponent } from './flip-coin-until.component';

@NgModule({
  imports: [
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    ThemeModule,
    FormsModule,
    ReactiveFormsModule,
    NbListModule,
    NbSpinnerModule,
    NbSelectModule,
    BarChartModule,
  ],
  declarations: [
    FlipCoinUntilComponent,
  ],
})
export class FlipCoinUntilModule { }
