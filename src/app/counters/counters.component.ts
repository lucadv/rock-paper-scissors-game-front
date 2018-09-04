import { Component, OnInit } from '@angular/core';
import { MatchResultsService } from '../matchResults.service';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.css']
})
export class CountersComponent implements OnInit {

  constructor(public matchResultsService: MatchResultsService) { }

  ngOnInit() {
  }

}
