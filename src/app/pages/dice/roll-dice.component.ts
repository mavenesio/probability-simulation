import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-roll-dice',
  templateUrl: './roll-dice.component.html',
})
export class RollDiceComponent {


  public flipped: boolean = false;


  public toggleView() { this.flipped = !this.flipped; }
}
