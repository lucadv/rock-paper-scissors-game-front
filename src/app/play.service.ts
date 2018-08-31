import { Injectable } from '@angular/core';
import { Shape } from './shape';
import { PLAYABLESHAPES } from './playableShapes';

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  constructor() { }

  getShape(): Shape {
    const shapeId = Math.floor(Math.random()*(2-0+1)+0);
    return PLAYABLESHAPES.find(shape => shape.id === shapeId);
  }
}
