import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { QuizServiceService } from '../../../services/quiz-service.service';

import { beginnerTopics } from '../../../topics';

@Component({
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {
  topic: string;
  listOfAnswers: Observable<{ question: string; answer: string, explanation: string }[]>;

  constructor(
    private quizService: QuizServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe(param => {
      this.topic = param['topic'];
    });
  }

  ngOnInit(): void {
    switch (this.topic) {
      case beginnerTopics.topic1:
        this.listOfAnswers = this.quizService.getBeginnerTopic1Answers();
        break;
    }
  }

}
