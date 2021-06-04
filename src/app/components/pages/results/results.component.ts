import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  results;

  constructor(
    private router: Router
  ) {
    this.results = this.router.getCurrentNavigation().extras.state.results;
  }

  ngOnInit(): void {
  }

}
