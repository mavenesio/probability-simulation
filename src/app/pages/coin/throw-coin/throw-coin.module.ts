import { NgModule } from '@angular/core';
import { NbCardModule, NbInputModule, NbButtonModule, NbListModule, NbSpinnerModule } from '@nebular/theme';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ThemeModule } from '../../../@theme/theme.module';

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
  ],
  declarations: [
    ThrowCoinComponent,
  ],
})
export class ThrowCoinModule { }
