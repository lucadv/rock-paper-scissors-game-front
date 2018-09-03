import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Shape } from './shape';
import { MessageService } from './message.service';
import { PLAYABLESHAPES } from './playableShapes';
import RPS from '@lucadv/rock-paper-scissors';

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  constructor(private messageService: MessageService) { }

  getShape(playerSelectedShape: string): Observable<Shape> {
    const result = RPS(playerSelectedShape);
    this.messageService.add(`Opponent played: ${result.moves.player2}`);
    return of(result);
  }
}
