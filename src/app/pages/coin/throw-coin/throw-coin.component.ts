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
  public resultOfExperiment: ExperimentResult[] = [];
  public omega: string[] = ['CARA', 'SECA'];
  public resultsLog: string[] = [];
  public resultsLogToShow: string[] = [];
  public flipped: boolean = false;
  public loading = false;
  public data: any[] = [];

  private maxNumberOfExperiments: number = 100000000;

  public startExperiment() {
    this.resultsLog = [];
    this.loading = true;
    if (this.numberOfExperiments > this.maxNumberOfExperiments) this.numberOfExperiments = this.maxNumberOfExperiments;
    for (let i = 0 ; i < this.numberOfExperiments; i++) {
      this.resultsLog.push(this.omega[Math.round(Math.random())]);
    }
    setTimeout(() => {
      this.data = [];
      for (let i = 0 ; i < this.omega.length; i++) {
        this.resultOfExperiment.unshift({name: this.omega[i], total: this.resultsLog.filter((result) => result === this.omega[i]).length});
        this.data.push({name: this.omega[i], value: this.resultsLog.filter((result) => result === this.omega[i]).length});
      }
      this.loading = false;
    }, 1000);
  }

  public toggleView() { this.flipped = !this.flipped; }
}
