import { Injectable } from '@angular/core';
import { FlipCoinResult } from '../models/flip-coin-result';

@Injectable({
  providedIn: 'root',
})
export class CoinService {
  private omega: string[] = ['CARA', 'SECA'];

  constructor() { }

  public flipCoinExperiment(repetitions: number, probability: number): FlipCoinResult[] {
    const resultsLog = this.doFlipCoinExperiment(repetitions, probability);
    return this.parseFlipCoinExperiment(resultsLog, repetitions);
  }

  public flipCointUntilExperiment(repetitions: number, until: string, probability: number, numberOfTimes): FlipCoinResult[] {
    const resultsLog = this.doFlipCoinUntilExperiment(repetitions, until, probability, numberOfTimes);
    return this.parseFlioCoinUntilExperiment(resultsLog, repetitions);
  }

  // private functions

  private flipnCoin(probability: number): string {
    const random = (Math.random() > (probability)) ? 1 : 0;
    return this.omega[random];
  }

  private doFlipCoinExperiment(repetitions: number, probability: number) {
    const resultsLog = [];
    for (let i = 0 ; i < repetitions; i++) {
      resultsLog.push(this.flipnCoin(probability));
    }
    return resultsLog;
  }

  private parseFlipCoinExperiment(resultsLog: string[], repetitions: number) {
    const totalHead = resultsLog.filter((result) => result === this.omega[0]).length;
    const totalTail = resultsLog.filter((result) => result === this.omega[1]).length;
    return [{name: this.omega[0], value: totalHead, probability: (totalHead / repetitions).toFixed(6)},
            {name: this.omega[1], value: totalTail, probability: (totalTail / repetitions).toFixed(6)}];
  }

  private doFlipCoinUntilExperiment(repetitions: number, until: string, probability: number, numberOfTimes) {
    const resultsLog = [];
    for (let i = 0 ; i < repetitions; i++) {
      let sightings = 0;
      let count: number = 0;
      while (sightings < numberOfTimes) {
        if (this.flipnCoin(probability) === until) sightings++;
        count++;
      }
      resultsLog.push(count);
    }
    return resultsLog;
  }

  private parseFlioCoinUntilExperiment(resultsLog: number[], repetitions: number ): FlipCoinResult[] {
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

  private sortExperimentResults(results: FlipCoinResult[]): FlipCoinResult[] {
    return results.sort((a , b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
  }
}
