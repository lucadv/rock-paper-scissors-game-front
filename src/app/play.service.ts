import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Shape } from './shape';
import { MessageService } from './message.service';
import { PLAYABLESHAPES } from './playableShapes';
import RPS from '@lucadv/rock-paper-scissors';
import { PlayResults } from './playResults';

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  opponentType: string;

  constructor(private messageService: MessageService) { }

  transformResults(res): PlayResults {
    const playResults: PlayResults = {
      winner: res.tie ? 'Tie' : res.winner,
      message: res.message,
      opponentMove: res.moves.player2
    };
    return playResults;
  }

  local() {
    this.opponentType = 'remote';
    return this;
  }

  remote() {
    this.opponentType = 'remote';
    return this;
  }

  play(playerSelectedShape: string): Observable<PlayResults> {
    if(this.opponentType === 'local') {
      return this.playLocal(playerSelectedShape);
    }
    return this.playRemote(playerSelectedShape);
  }

  private playLocal(playerSelectedShape: string): Observable<PlayResults> {
    const res = RPS(playerSelectedShape);
    const playResults = this.transformResults(res);
    this.messageService.add(`Opponent played: ${res.moves.player2}`);
    return of(playResults);
  }

  private playRemote(playerSelectedShape: string): Observable<PlayResults> {
    const res = RPS(playerSelectedShape);
    const playResults = this.transformResults(res);
    this.messageService.add(`Opponent played: ${res.moves.player2}`);
    return of(playResults);
  }
}
