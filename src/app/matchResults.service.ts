import { Injectable } from '@angular/core';
import { MatchResults } from './matchResults';

@Injectable({
  providedIn: 'root'
})
export class MatchResultsService {

  matchResults: MatchResults;
  playerWinsCounter = 0;
  opponentWinsCounter = 0;

  setMatchResults(matchResults: MatchResults): void {
    this.matchResults = matchResults;
    this.incrementCounters();
  }

  private incrementCounters(): void {
    if (this.matchResults.winner === 'player 1') {
      this.playerWinsCounter++;
    } else if (this.matchResults.winner === 'player 2') {
      this.opponentWinsCounter++;
    }
  }
}
