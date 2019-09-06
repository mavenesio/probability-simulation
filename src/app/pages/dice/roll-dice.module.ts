import { NgModule } from '@angular/core';
import { NbCardModule,
   NbInputModule,
   NbButtonModule,
   NbListModule,
   NbSpinnerModule,
   NbSelectModule } from '@nebular/theme';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { PieChartModule } from '@swimlane/ngx-charts';

import { RollDiceComponent } from './roll-dice.component';

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
    RollDiceComponent,
  ],
})
export class RollDiceModule { }
