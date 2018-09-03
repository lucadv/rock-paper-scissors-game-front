import { Injectable } from '@angular/core';
import { PlayResults } from './playResults';

@Injectable({
  providedIn: 'root'
})
export class CountersService {

  playerWinsCounter = 0;

  opponentWinsCounter = 0;

  incrementCounters(playResults: PlayResults): void {
    if (playResults.winner === 'player 1') {
      this.playerWinsCounter++;
    } else if (playResults.winner === 'player 2') {
      this.opponentWinsCounter++;
    }
  }

  //@todod could add a reset method
}
