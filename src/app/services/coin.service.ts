import { Injectable } from '@angular/core';
import { ThrowCoinResult } from '../models/throw-coin-result';

@Injectable({
  providedIn: 'root',
})
export class CoinService {
  private omega: string[] = ['CARA', 'SECA'];

  constructor() { }

  public throwCoin(repetitions: number, probability: number): ThrowCoinResult[] {
    // experiment
    const resultsLog = [];
    for (let i = 0 ; i < repetitions; i++) {
      resultsLog.push(this.getThrownOutCoin(probability));
    }
    // parse experiment
    return(
    [{name: this.omega[0], value: resultsLog.filter((result) => result === this.omega[0]).length},
     {name: this.omega[1], value: resultsLog.filter((result) => result === this.omega[1]).length}]);
  }


  public throwCointUntil(repetitions: number, until: string, probability: number): ThrowCoinResult[] {
    // experiment
    const resultsLog = [];
    for (let i = 0 ; i < repetitions; i++) {
      let experimentIsOver = false;
      let count: number = 0;
      while (!experimentIsOver) {
        const cointThrow = this.getThrownOutCoin(probability);
        count++;
        experimentIsOver = (cointThrow === until);
      }
      resultsLog.push(count);
    }
    // parse experiment
    return this.getResults(resultsLog);
  }

  // private functions
  private getThrownOutCoin(probability: number): string {
    const random = (Math.random() > (probability)) ? 1 : 0;
    return this.omega[random];
  }

  private getResults(resultsLog: number[] ): ThrowCoinResult[] {
    const experimentResults =  resultsLog
            .reduce( (a, b) => (
            ( a[a.findIndex(d => d.name === b)] ||
              a[a.push({ name: b, value: 0 }) - 1])
            .value++, a), []);
    return this.sortExperimentResults(experimentResults);
  }

  private sortExperimentResults(results: ThrowCoinResult[]): ThrowCoinResult[] {
    return results.sort((a , b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
  }
}
