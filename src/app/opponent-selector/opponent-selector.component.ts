import { Component, OnInit } from '@angular/core';
import { Opponent } from '../opponent';
import { MessageService } from '../message.service';
import { SELECTABLE_OPPONENTS } from '../selectableOpponents';

@Component({
  selector: 'app-opponent-selector',
  templateUrl: './opponent-selector.component.html',
  styleUrls: ['./opponent-selector.component.css']
})
export class OpponentSelectorComponent implements OnInit {

  opponents = SELECTABLE_OPPONENTS;

  selectedOpponent: Opponent;

  constructor(private messageService: MessageService) { }

  onSelect(opponent: Opponent): void {
    this.messageService.add(`Selected ${opponent.name} opponent`);
    this.selectedOpponent = opponent;
  }

  ngOnInit() {
  }

}
