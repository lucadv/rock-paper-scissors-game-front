import { Component, OnInit } from '@angular/core';
import { Opponent } from '../opponent';
import { MessageService } from '../message.service';
import { SELECTABLE_OPPONENTS } from '../selectableOpponents';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  title = 'Rock, paper, scissors game';
  
  opponents = SELECTABLE_OPPONENTS;

  selectedOpponent: Opponent;

  constructor(private messageService: MessageService) { }
  
  ngOnInit() {
  }

  onSelect(opponent: Opponent): void {
    this.messageService.add(`Selected ${opponent.name} opponent`);
    this.selectedOpponent = opponent;
  }


}
