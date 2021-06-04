import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './beginner.component.html',
  styleUrls: ['./beginner.component.css']
})
export class BeginnerComponent implements OnInit {
  difficulty: string = 'beginner';
  // topics: Array<string> = [
  //   'Getting Started',
  // ];

  constructor() { }

  ngOnInit(): void {
  }

}
