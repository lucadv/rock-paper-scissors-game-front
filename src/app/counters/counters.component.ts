import { Component, OnInit } from '@angular/core';
import { CountersService } from '../counters.service';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.css']
})
export class CountersComponent implements OnInit {

  constructor(public countersService: CountersService) { }

  ngOnInit() {
  }

}
