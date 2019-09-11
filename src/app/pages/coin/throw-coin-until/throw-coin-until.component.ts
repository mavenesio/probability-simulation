import { Component, Input } from '@angular/core';
import { ThrowCoinResult } from '../../../models/throw-coin-result';
import { CoinService } from '../../../services/coin.service';

@Component({
  selector: 'ngx-throw-coin-until',
  templateUrl: './throw-coin-until.component.html',
})
export class ThrowCoinUntilComponent {
  @Input() numberOfExperiments: number = 2000;
  @Input() probability: number = 50;
  public resultOfExperiment: ThrowCoinResult[] = [];
  public loading: boolean = false;
  public flipped: boolean = false;
  public selectedUntil: string;
  public view = [600 , 400];
  private maxNumberOfExperiments: number = 100000000;

  constructor(private _coinService: CoinService) {
    this.selectedUntil = 'CARA';
  }

  public startExperiment() {
    this.loading = true;
    this.cleanResults();
    this.validate();
    this.resultOfExperiment = this._coinService.throwCointUntil(this.numberOfExperiments, this.selectedUntil, this.probability / 100);
    this.loading = false;
  }
  public validate(): void {
    if (this.numberOfExperiments > this.maxNumberOfExperiments) this.numberOfExperiments = this.maxNumberOfExperiments;
  }
  public untilOnchange( event): void {
    this.selectedUntil = event;
  }
  public toggleView(): void {
    this.flipped = !this.flipped;
  }
  public cleanResults(): void {
    this.resultOfExperiment = [];
  }
}
