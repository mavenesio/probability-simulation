import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-roll-dice',
  templateUrl: './roll-dice.component.html',
})
export class RollDiceComponent {
  @Input() numberOfExperiments: number = 2000;
  @Input() numberOfDices: number;
  @Input() numberOfFaces: number;
  @Input() result: number = 7;

  public conditions = ['Igual', 'Mayor', 'Mayor o Igual', 'Menor', 'Menor o Igual', 'Par', 'Impar'];
  public selectedCondition: string;
  public selectedConditionHasResult: boolean;
  public loading = false;
  public flipped: boolean = false;
  public maxResults: number[] = [];

constructor() {
  this.selectedCondition = this.conditions[0];
  this.selectedConditionHasResult = true;
  this.numberOfDices = 1;
  this.numberOfFaces = 6;
}

  public startExperiment() {
    console.log('start experiment');
  }
  public conditionOnchange() {
    this.selectedConditionHasResult = (this.selectedCondition !== 'Par' && this.selectedCondition !== 'Impar' );
  }
  public NumberOfChange() {
    const max: number = this.numberOfDices * this.numberOfFaces;
    for ( let i = 1; i <= max ; i++) {
      this.maxResults.push(i);
    }
  }

  public toggleView() {
    this.flipped = !this.flipped;
  }
}
