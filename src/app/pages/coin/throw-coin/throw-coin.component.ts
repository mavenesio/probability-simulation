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
  @Input() resultsLogToShow: string[] = [];
  @Input() flipped: boolean = false;


  toggleView() { this.flipped = !this.flipped; }
  private maxNumberOfExperiments: number = 100000000;

  public loading = false;
  public data: any[] = [];

  public startExperiment() {
    this.resultsLog = [];
    this.loading = true;
    if (this.numberOfExperiments > this.maxNumberOfExperiments) this.numberOfExperiments = this.maxNumberOfExperiments;
    for (let i = 0 ; i < this.numberOfExperiments; i++) {
      this.resultsLog.push(this.omega[Math.round(Math.random())]);
    }
    setTimeout(() => {
      for (let i = 0 ; i < this.omega.length; i++) {
        this.resultOfExperiment.unshift({name: this.omega[i], total: this.resultsLog.filter((result) => result === this.omega[i]).length});
        this.data.push({name: this.omega[i], value: this.resultsLog.filter((result) => result === this.omega[i]).length});
      }
      this.loading = false;
    }, 1000);
  }
}
