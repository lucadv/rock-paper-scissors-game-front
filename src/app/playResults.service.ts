import { Injectable } from '@angular/core';
import { PlayResults } from './playResults';

@Injectable({
  providedIn: 'root'
})
export class PlayResultsService {

  playResults: PlayResults;
  playerWinsCounter = 0;
  opponentWinsCounter = 0;

  setPlayResults(playResults: PlayResults): void {
    this.playResults = playResults;
    this.incrementCounters();
  }

  private incrementCounters(): void {
    if (this.playResults.winner === 'player 1') {
      this.playerWinsCounter++;
    } else if (this.playResults.winner === 'player 2') {
      this.opponentWinsCounter++;
    }
  }
}
