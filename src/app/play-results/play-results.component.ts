import { Component, OnInit } from '@angular/core';
import { PlayResultsService } from '../playResults.service';

@Component({
  selector: 'app-play-results',
  templateUrl: './play-results.component.html',
  styleUrls: ['./play-results.component.css']
})
export class PlayResultsComponent implements OnInit {

  constructor(public playResultsService: PlayResultsService) { }

  ngOnInit() {
  }

}
