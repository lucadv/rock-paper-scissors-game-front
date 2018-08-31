import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Shape } from './shape';
import { PLAYABLESHAPES } from './playableShapes';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  playableShapes = PLAYABLESHAPES;

  selectedShape: Shape;

  constructor() { }

  ngOnInit() {
  }

  onSelect(shape: Shape): void {
    this.selectedShape = shape;
  }

}
