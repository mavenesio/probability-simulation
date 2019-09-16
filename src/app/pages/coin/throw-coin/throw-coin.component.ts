import { Component, Input } from '@angular/core';
import { CoinService } from '../../../services/coin.service';
import { ThrowCoinResult } from '../../../models/throw-coin-result';

@Component({
  selector: 'ngx-throw-coin',
  templateUrl: './throw-coin.component.html',
})
export class ThrowCoinComponent {
  @Input() numberOfExperiments: number = 2000;
  @Input() probability: number = 50;
  public resultOfExperiment: ThrowCoinResult[] = [];
  public flipped: boolean = false;
  public revealed: boolean = false;
  public loading = false;
  public view = [330, 500];
  private maxNumberOfExperiments: number = 100000000;

  constructor(private _coinService: CoinService) {}

  public startExperiment() {
    this.loading = true;
    this.validate();
    this.cleanResults();
    this.resultOfExperiment = this._coinService.throwCoin(this.numberOfExperiments, parseFloat('0.' + this.probability));
    this.loading = false;
  }
  public validate(): void {
    if (this.numberOfExperiments > this.maxNumberOfExperiments) {
      this.numberOfExperiments = this.maxNumberOfExperiments;
    }
  }
  public cleanResults(): void {
    this.resultOfExperiment = [];
  }
  public toggleView() {
    this.flipped = !this.flipped;
  }

  public toggleRevealedView(): void {
    this.revealed = !this.revealed;
  }
}
