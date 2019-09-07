import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoinService {
  private omega: string[] = ['CARA', 'SECA'];

  constructor() { }


  public throwCoin(repetitions: number): any {
    const resultsLog = [];
    for (let i = 0 ; i < repetitions; i++) {
      resultsLog.push(this.omega[Math.round(Math.random())]);
    }
    return(
    [{name: this.omega[0], value: resultsLog.filter((result) => result === this.omega[0]).length},
     {name: this.omega[1], value: resultsLog.filter((result) => result === this.omega[1]).length}]);
  }

}
