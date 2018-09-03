import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Shape } from '../shape';
import { PlayService } from '../play.service';
import { MessageService } from '../message.service';
import { PlayResults } from '../playResults';
import { PLAYABLESHAPES } from '../playableShapes';

@Component({
  selector: 'app-shape-selector',
  templateUrl: './shape-selector.component.html',
  styleUrls: ['./shape-selector.component.css']
})
export class ShapeSelectorComponent implements OnInit {

  playableShapes = PLAYABLESHAPES;

  playerSelectedShape: Shape;

  opponentSelectedShape: Shape;

  playerWinsCounter = 0;

  opponentWinsCounter = 0;

  playResults: PlayResults;

  constructor(
    private route: ActivatedRoute,
    private playService: PlayService,
    private messageService: MessageService,
    private location: Location
  ) {}

  ngOnInit() {
  }

  private setPlayResults(playResults: PlayResults): void {
    this.playResults = playResults;
    this.messageService.add(`Opponent played: ${playResults.moves.player2}`);
    this.incrementCounters();
  }

  private incrementCounters(): void {
    if (this.playResults.winner === 'player 1') {
      this.playerWinsCounter++;
    } else if (this.playResults.winner === 'player 2') {
      this.opponentWinsCounter++;
    }
  }

  onSelect(shape: Shape): void {
    this.playerSelectedShape = shape;
    const opponentType = this.route.snapshot.paramMap.get('opponentType');
    console.log(opponentType);
    this.playService[opponentType]().play(this.playerSelectedShape.name)
      .subscribe(res => this.setPlayResults(res));
  }

}
