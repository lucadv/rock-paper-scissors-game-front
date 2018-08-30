import { Component, OnInit } from '@angular/core';
import { GameOption } from './gameOption';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  gameOption: GameOption = {
    id: 1,
    name: 'local'
  };

  constructor() { }

  ngOnInit() {
  }

}
