import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Shape } from '../shape';
import { PlayService } from '../play.service';
import { PLAYABLESHAPES } from '../playableShapes';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  playableShapes = PLAYABLESHAPES;

  selectedShape: Shape;

  opponentSelectedShape: Shape;

  constructor(private playService: PlayService) { }

  ngOnInit() {
  }

  onSelect(shape: Shape): void {
    this.selectedShape = shape;
    this.opponentSelectedShape = this.playService.getShape();
  }

}
