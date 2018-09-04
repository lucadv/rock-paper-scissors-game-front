import { Component, OnInit } from '@angular/core';
import { MatchResultsService } from '../matchResults.service';

@Component({
  selector: 'app-match-results',
  templateUrl: './match-results.component.html',
  styleUrls: ['./match-results.component.css']
})
export class MatchResultsComponent implements OnInit {

  constructor(public matchResultsService: MatchResultsService) { }

  ngOnInit() {
  }

}
