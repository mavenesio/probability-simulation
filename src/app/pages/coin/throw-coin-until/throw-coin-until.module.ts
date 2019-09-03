import { NgModule } from '@angular/core';
import { NbCardModule,
   NbInputModule,
   NbButtonModule,
   NbListModule,
   NbSpinnerModule,
   NbSelectModule } from '@nebular/theme';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ThemeModule } from '../../../@theme/theme.module';
import { ThrowCoinUntilComponent } from './throw-coin-until.component';

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
  ],
  declarations: [
    ThrowCoinUntilComponent,
  ],
})
export class ThrowCoinUntilModule { }
