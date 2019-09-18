import { Component, Input } from '@angular/core';
import { FlipCoinResult } from '../../../models/flip-coin-result';
import { CoinService } from '../../../services/coin.service';

@Component({
  selector: 'ngx-flip-coin-until',
  templateUrl: './flip-coin-until.component.html',
})
export class FlipCoinUntilComponent {
  @Input() numberOfExperiments: number = 2000;
  @Input() probability: number = 50;
  public resultOfExperiment: FlipCoinResult[] = [];
  public loading: boolean = false;
  public flipped: boolean = false;
  public revealed: boolean = false;
  public selectedUntil: string;
  public view = [600 , 400];
  public numberOfSightings: number;
  private maxNumberOfExperiments: number = 100000000;


  constructor(private _coinService: CoinService) {
    this.selectedUntil = 'CARA';
    this.numberOfSightings = 1;
  }

  public startExperiment() {
    this.loading = true;
    this.cleanResults();
    this.validate();
    this.resultOfExperiment = this._coinService.flipCointUntilExperiment(this.numberOfExperiments,
      this.selectedUntil, parseFloat('0.' + this.probability), this.numberOfSightings);
    this.loading = false;
  }
  public validate(): void {
    if (this.numberOfExperiments > this.maxNumberOfExperiments) this.numberOfExperiments = this.maxNumberOfExperiments;
    if (this.probability <= 0) {
      this.probability = 1;
    }
  }
  public untilOnchange( event): void {
    this.selectedUntil = event;
  }
  public toggleView(): void {
    this.flipped = !this.flipped;
  }

  public toggleRevealedView(): void {
    this.revealed = !this.revealed;
  }

  public cleanResults(): void {
    this.resultOfExperiment = [];
  }
}
