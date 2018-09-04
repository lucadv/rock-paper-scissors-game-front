import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Shape } from '../shape';
import { PlayService } from '../play.service';
import { MessageService } from '../message.service';
import { MatchResultsService } from '../matchResults.service';
import { MatchResults } from '../matchResults';
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

  constructor(
    private route: ActivatedRoute,
    private playService: PlayService,
    private matchResultsService: MatchResultsService,
    private messageService: MessageService,
    private location: Location
  ) {}

  ngOnInit() {
  }

  private processResults(matchResults: MatchResults): void {
    this.messageService.add(`Player: ${matchResults.moves.player1}, opponent: ${matchResults.moves.player2}`);
    this.matchResultsService.setMatchResults(matchResults);
  }

  onSelect(shape: Shape): void {
    this.playerSelectedShape = shape;
    const opponentType = this.route.snapshot.paramMap.get('opponentType');
    this.playService[opponentType]().play(this.playerSelectedShape.name)
      .subscribe(res => this.processResults(res));
  }

}
