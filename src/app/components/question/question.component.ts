import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() id: string;
  @Input() question: string;
  @Input() answersString: string;
  @Output() selectAnswerEvent = new EventEmitter<string>();

  possibleAnswers: string[];

  constructor() {}

  ngOnInit(): void {
    this.possibleAnswers = this.answersString.split(".,");
  }

  selectAnswer(event) {
    this.selectAnswerEvent.emit(event.target.value);
  }

}
