import { Component, OnInit } from '@angular/core';
import { Opponent } from '../opponent';
import { SELECTABLE_OPPONENTS } from '../selectableOpponents';

@Component({
  selector: 'app-opponent-selector',
  templateUrl: './opponent-selector.component.html',
  styleUrls: ['./opponent-selector.component.css']
})
export class OpponentSelectorComponent implements OnInit {

  opponents = SELECTABLE_OPPONENTS;

  selectedOpponent: Opponent;

  onSelect(opponent: Opponent): void {
    this.selectedOpponent = opponent;
  }

  constructor() { }

  ngOnInit() {
  }

}
