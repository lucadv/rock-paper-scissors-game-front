import { Component, OnInit } from '@angular/core';
import { Opponent } from './opponent';
import { SELECTABLE_OPPONENTS } from './selectableOpponents';

@Component({
  selector: 'app-opponent-selection',
  templateUrl: './opponent-selection.component.html',
  styleUrls: ['./opponent-selection.component.css']
})
export class OpponentSelectionComponent implements OnInit {

  opponents = SELECTABLE_OPPONENTS;

  selectedOpponent: Opponent;

  onSelect(opponent: Opponent): void {
    this.selectedOpponent = opponent;
  }

  constructor() { }

  ngOnInit() {
  }

}
