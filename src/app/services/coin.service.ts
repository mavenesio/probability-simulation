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
    const resultOfExperiment = [];
    for (let i = 0; i < this.omega.length; i++) {
      const total = resultsLog.filter((result) => result === this.omega[i]).length;
      resultOfExperiment.push({name: this.omega[0], value: total, probability: (total / repetitions).toFixed(6)});

    }
    return resultOfExperiment;
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
    return this.getResults(resultsLog, repetitions);
  }

  // private functions
  private getThrownOutCoin(probability: number): string {
    const random = (Math.random() > (probability)) ? 1 : 0;
    return this.omega[random];
  }

  private getResults(resultsLog: number[], repetitions: number ): ThrowCoinResult[] {
    const experimentResults =  resultsLog
            .reduce( (a, b) => (
            ( a[a.findIndex(d => d.name === b)] ||
              a[a.push({ name: b, value: 0 }) - 1])
            .value++, a), []);
    return this.sortExperimentResults(experimentResults)
    .map(res => {return {
        ...res,
        probability: (res.value / repetitions).toFixed(6),
      };
    });
  }

  private sortExperimentResults(results: ThrowCoinResult[]): ThrowCoinResult[] {
    return results.sort((a , b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
  }
}
