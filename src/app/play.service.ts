import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Shape } from './shape';
import { PLAYABLESHAPES } from './playableShapes';

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  constructor() { }

  getShape(): Observable<Shape> {
    const shapeId = Math.floor(Math.random()*(2-0+1)+1);
    return of(PLAYABLESHAPES.find(shape => shape.id === shapeId));
  }
}
