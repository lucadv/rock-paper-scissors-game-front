import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Shape } from './shape';
import { PLAYABLESHAPES } from './playableShapes';
import RPS from '@lucadv/rock-paper-scissors';

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  constructor() { }

  getShape(playerSelectedShape: string): Observable<Shape> {
    const result = RPS(playerSelectedShape);
    console.log(result);
    return of(result);
  }
}
