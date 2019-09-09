import { Component, Input } from '@angular/core';
import { DiceService } from '../../services/dice.service';

@Component({
  selector: 'ngx-roll-dice',
  templateUrl: './roll-dice.component.html',
})
export class RollDiceComponent {
  @Input() numberOfExperiments: number = 2000;
  @Input() numberOfDices: number;
  @Input() numberOfFaces: number;
  @Input() selectedResult: number;

  public view = [500, 300];
  public selectedCondition;
  public loading = false;
  public flipped: boolean = false;
  public maxResults: number[] = [];
  public conditions = [];
  public resultOfExperiment: any[] = [];

  private maxNumberOfExperiments: number = 1000000;

  constructor(private _diceService: DiceService) {
    this.conditions = _diceService.getConditions();
    this.selectedCondition = this.conditions[0];
    this.numberOfDices = 1;
    this.numberOfFaces = 6;
    this.NumberOfChange();
    this.selectedResult = 1;
  }

  public startExperiment() {
    if (!this.isValid()) return;
    this.loading = true;
    const results = this._diceService.getResultOfDiceExperiment(
      this.numberOfDices,
      this.numberOfFaces,
      this.selectedCondition.name,
      this.selectedResult,
      this.numberOfExperiments);
    this.resultOfExperiment = this._diceService.getGroupedResults(results);
    this.loading = false;
  }
  public conditionOnchange() {
  }

  public isValid(): boolean {
    let errorMessage: string = '';
    if ( this.numberOfExperiments > this.maxNumberOfExperiments || this.numberOfExperiments <= 0) {
      errorMessage = 'El número máximo de repeticiones es: ' + this.maxNumberOfExperiments.toString();
      this.numberOfExperiments = this.maxNumberOfExperiments;
      return true;
    }
    return true;

  }
  public NumberOfChange() {
    this.maxResults = [];
    const max: number = this.numberOfDices * this.numberOfFaces;
    for ( let i = 1; i <= max ; i++) {
      this.maxResults.push(i);
    }
  }

  public toggleView() {
    this.flipped = !this.flipped;
  }
}
