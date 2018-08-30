import { Component, OnInit } from '@angular/core';
import { Opponent } from './opponent';
import { SELECTABLE_OPPONENTS } from './selectableOpponents';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  opponents = SELECTABLE_OPPONENTS;

  selectedOpponent: Opponent;

  onSelect(opponent: Opponent): void {
    this.selectedOpponent = opponent;
  }

  constructor() { }

  ngOnInit() {
  }

}
