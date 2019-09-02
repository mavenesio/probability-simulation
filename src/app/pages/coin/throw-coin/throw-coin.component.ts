import { Component, Input } from '@angular/core';

type ExperimentResult = {
  name: string, total: number
};

@Component({
  selector: 'ngx-throw-coin',
  templateUrl: './throw-coin.component.html',
})
export class ThrowCoinComponent {
  @Input() numberOfExperiments: number = 2000;
  @Input() resultOfExperiment: ExperimentResult[] = [];
  @Input() omega: string[] = ['CARA', 'SECA'];
  @Input() resultsLog: string[] = [];
  public startExperiment() {
    for (let i = 0 ; i < this.numberOfExperiments; i++) {
      this.resultsLog.push(this.omega[Math.round(Math.random())]);
    }
    for (let i = 0 ; i < this.omega.length; i++) {
      this.resultOfExperiment.push({name: this.omega[i], total: this.resultsLog.filter((result) => result === this.omega[i]).length});
    }
  }
}
