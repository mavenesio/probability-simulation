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

  public resultOfExperiment: ExperimentResult[] = [];
  public omega: string[] = ['CARA', 'SECA'];
  public resultsLog: any[] = [];
  public loading: boolean = false;
  public flipped: boolean = false;
  public data: any[] = [];

  private maxNumberOfExperiments: number = 2000;
  private selectedUntil: string;

  public startExperiment() {
    if (this.selectedUntil === undefined || this.selectedUntil === null) return;
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

      this.resultOfExperiment = this.resultsLog
      .map(result => {
        return result.length;
      })
      .reduce(
        (b,c)=>(
          ( b[b.findIndex(d => d.result === c)]
            || b[b.push({ result: c, total: 0 }) - 1])
                .total++, b), [])
      .sort((a,b) => (a.result > b.result) ? 1 : ((b.result > a.result) ? -1 : 0));
      this.data = [];
      this.data = this.resultOfExperiment.map(experiment => {
        return {
          name: experiment.result,
          value: experiment.total,
        };
      });
  }
  untilOnchange(event) {
    this.selectedUntil = event;
  }
  public toggleView() {
    this.flipped = !this.flipped;
  }
}
