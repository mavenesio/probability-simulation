import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../../@theme/theme.module';
import { ThrowCoinUntilComponent } from './throw-coin-until.component';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
  ],
  declarations: [
    ThrowCoinUntilComponent,
  ],
})
export class ThrowCoinUntilModule { }
