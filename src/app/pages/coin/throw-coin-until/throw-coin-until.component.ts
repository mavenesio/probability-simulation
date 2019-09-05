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
  @Input() resultsLog: any[] = [];
  private maxNumberOfExperiments: number = 2000;
  private selectedUntil: string;
  public loading: boolean = false;


  public startExperiment() {
    if(this.selectedUntil === undefined || this.selectedUntil === null) return;
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


  }
  untilOnchange(event) {
    this.selectedUntil = event;
  }
  /*
  private occurrence (array) {
    let result = {};
    let res = []
    if (array instanceof Array) { // Check if input is array.
        array.forEach(function (v, i) {
            if (!result[v]) { // Initial object property creation.
                result[v] = [i]; // Create an array for that property.
            } else { // Same occurrences found.
                result[v].push(i); // Fill the array.
            }
        });
    }
    return result;
}
*/
}
