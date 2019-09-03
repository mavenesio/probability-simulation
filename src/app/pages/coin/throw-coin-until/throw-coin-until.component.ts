import { Component, Input } from '@angular/core';

type ExperimentResult = {
  result: string,
  total: number,
};
@Component({
  selector: 'ngx-throw-coin-until',
  templateUrl: './throw-coin-until.component.html',
})
export class ThrowCoinUntilComponent {
  @Input() numberOfExperiments: number = 2000;
  @Input() resultOfExperiment: ExperimentResult[] = [];
  @Input() omega: string[] = ['CARA', 'SECA'];
  @Input() resultsLog: any[];
  private maxNumberOfExperiments: number = 2000;
  private selectedUntil: string;
  public loading: boolean = false;


  public startExperiment() {
    if(this.selectedUntil === undefined || this.selectedUntil === null) return
    this.loading = true;
    if (this.numberOfExperiments > this.maxNumberOfExperiments) this.maxNumberOfExperiments = this.maxNumberOfExperiments;
    this.resultsLog = [];
    for (let i = 0 ; i < this.numberOfExperiments; i++) {
      let experimentIsOver = false;
      const experiment: string[] = [];
      while (!experimentIsOver) {
        const cointThrow = this.omega[Math.round(Math.random())];
        experiment.push(cointThrow);
        experimentIsOver = (cointThrow === this.selectedUntil);
      }
      this.resultsLog.push(experiment);
    }
    this.loading = false;
  }
  untilOnchange(event) {
    this.selectedUntil = event;
  }
}
