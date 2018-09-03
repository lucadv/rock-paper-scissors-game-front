import { Component, OnInit } from '@angular/core';
import { PlayResultsService } from '../playResults.service';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.css']
})
export class CountersComponent implements OnInit {

  constructor(public playResultsService: PlayResultsService) { }

  ngOnInit() {
  }

}
