import { NgModule } from '@angular/core';
import { NbCardModule,
   NbInputModule,
   NbButtonModule,
   NbListModule,
   NbSpinnerModule,
   NbSelectModule } from '@nebular/theme';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ThemeModule } from '../../../@theme/theme.module';
import { PieChartModule } from '@swimlane/ngx-charts';

import { ThrowCoinComponent } from './throw-coin.component';

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
    PieChartModule,
  ],
  declarations: [
    ThrowCoinComponent,
  ],
})
export class ThrowCoinModule { }
