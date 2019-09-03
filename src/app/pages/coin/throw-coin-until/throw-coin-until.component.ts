import { Component, Input } from '@angular/core';

type ExperimentResult = {
  result: string, total: number
};
@Component({
  selector: 'ngx-throw-coin-until',
  templateUrl: './throw-coin-until.component.html',
})
export class ThrowCoinUntilComponent {
  @Input() numberOfExperiments: number = 2000;
  @Input() resultOfExperiment: ExperimentResult[] = [];
  @Input() omega: string[] = ['CARA', 'SECA'];
  @Input() resultsLog: string[][];
  private maxNumberOfExperiments: number = 100000;
  private selectedUntil: string = 'CARA';
  public loading: boolean = false;


  public startExperiment() {
    this.loading = true;
    if (this.numberOfExperiments > this.maxNumberOfExperiments) this.maxNumberOfExperiments = this.maxNumberOfExperiments;

    for (let i = 0 ; i < this.numberOfExperiments; i++) {
      let experimentIsOver = false;
      while (!experimentIsOver) {
        this.resultsLog[i].push(this.omega[Math.round(Math.random())]);
        experimentIsOver = (this.omega[Math.round(Math.random())] === this.selectedUntil);
      }
    }
    this.loading = true;
  }
  untilOnchange(event) {
    this.selectedUntil = event;
  }
}
