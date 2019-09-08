import { Injectable } from '@angular/core';
import { RollDiceResult } from '../models/roll-dice-result';
import { NormalizedResult } from '../models/normalized-result';

@Injectable({
  providedIn: 'root',
})
export class DiceService {
  public conditions = ['Igual', 'Mayor', 'Mayor o Igual', 'Menor', 'Menor o Igual', 'Par', 'Impar', 'salga'];

  constructor() { }

  public getConditions(): string[] {
    return this.conditions;
  }

  public getResultOfDiceExperiment(numberOfDices: number, numberOfFaces: number, condition: string,
                                  conditionResult: number, repetitions: number): RollDiceResult[] {
    const result = [];
    for (let i = 0; i < repetitions; i++) {
      result.push(this.executeExperiment(numberOfDices, numberOfFaces, condition, conditionResult));
    }
    return result;
  }

  public getGroupedResults(results: RollDiceResult[]): NormalizedResult[] {
    const groupedResult =  results
    .map(res =>  (res.comply).toString() )
    .reduce( (a, b) => (
      ( a[a.findIndex(d => d.name === b)] ||
        a[a.push({ name: b, value: 0 }) - 1])
      .value++, a), []);
      return this.sortExperimentResults(groupedResult);
  }

  // Private functions
  private executeExperiment(numberOfDices: number, numberOfFaces: number, condition: string, conditionResult: number): RollDiceResult {
    const rollDiceResults: number[] = [];
    for (let j = 0; j < numberOfDices; j++) {
      rollDiceResults.push(this.rollDice(numberOfFaces));
    }
    return this.complyTheCondition(rollDiceResults, condition, conditionResult);
  }

  public rollDice(diceFaces: number): number {
    return (Math.round((Math.random() * diceFaces)));
  }

  private sortExperimentResults(results: NormalizedResult[]): NormalizedResult[] {
    return results.sort((a , b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
  }

  private complyTheCondition(rollDiceResults: number[], condition: string, conditionResult: number): RollDiceResult {
    let result;
    switch (condition) {
      case this.conditions[0]:
          // equal
          result = rollDiceResults.reduce((a, b) => a + b, 0) === conditionResult;
        break;
        case this.conditions[1]:
          // greater than
          result = conditionResult > rollDiceResults.reduce((a, b) => a + b, 0);
        break;
        case this.conditions[2]:
          // greater than or equal
          result = conditionResult >= rollDiceResults.reduce((a, b) => a + b, 0);
        break;
        case this.conditions[3]:
          // less than
          result = conditionResult < rollDiceResults.reduce((a, b) => a + b, 0);
        break;
        case this.conditions[4]:
          // less than or equal
          result = conditionResult <= rollDiceResults.reduce((a, b) => a + b, 0);
        break;
        case this.conditions[5]:
          // par
          result = rollDiceResults.reduce((a, b) => a + b, 0) % 2;
        break;
        case this.conditions[6]:
          // par
          result = !(rollDiceResults.reduce((a, b) => a + b, 0) % 2);
        break;
        case this.conditions[7]:
          // condition result is in
          result = rollDiceResults.includes(conditionResult);
        break;
    }
    return {results: rollDiceResults, comply: result};
  }
}
