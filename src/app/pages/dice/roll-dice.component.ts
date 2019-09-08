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
  @Input() result: number = 7;

  public view = [500, 300];
  public selectedCondition: string;
  public selectedConditionHasResult: boolean;
  public loading = false;
  public flipped: boolean = false;
  public maxResults: number[] = [];
  public conditions = [];

  public resultOfExperiment: any[] = [];

  constructor(private _diceService: DiceService) {
    this.conditions = _diceService.getConditions();
    this.selectedCondition = this.conditions[0];
    this.selectedConditionHasResult = true;
    this.numberOfDices = 1;
    this.numberOfFaces = 6;
  }

  public startExperiment() {
    const results = this._diceService.getResultOfDiceExperiment(4, 6, this.conditions[7], 6, 100);
    this.resultOfExperiment = this._diceService.getGroupedResults(results);
  }
  public conditionOnchange() {
    this.selectedConditionHasResult = (this.selectedCondition !== this.conditions[5] &&
                                       this.selectedCondition !== this.conditions[6] &&
                                       this.selectedCondition !== this.conditions[7]);
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
