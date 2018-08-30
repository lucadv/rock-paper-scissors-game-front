import { Component, OnInit } from '@angular/core';
import { GameOption } from './gameOption';
import { GAMEOPTIONS } from './gameOptions';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  gameOptions = GAMEOPTIONS;

  selectedOption: GameOption;

  onSelect(gameOption: GameOption): void {
    this.selectedOption = gameOption;
  }

  constructor() { }

  ngOnInit() {
  }

}
