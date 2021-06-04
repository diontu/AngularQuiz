import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { beginnerTopics } from './../../../topics';
import { QuizServiceService } from './../../../services/quiz-service.service';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  existsError: Boolean = false;

  queryTopic: string;
  difficulty: string;
  listOfQuestions$: Observable<{ question: string; answers: string[] }[]>;
  listOfUserAnswers: Map<Number,string> = new Map<Number, string>();

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizServiceService,
    private router: Router
  ) {
    this.route.queryParams.subscribe(params => {
      this.queryTopic = params['topic'];
      this.difficulty = params['difficulty'];
    });
  }

  ngOnInit(): void {
    // load the questions
    // let backend handle question reordering and handling of answer. the backend will produce the answer.
    switch(this.queryTopic) {
      case beginnerTopics.topic1:
        this.listOfQuestions$ = this.quizService.getBeginnerTopic1Questions();
        break;
    }
  }

  selectAnswer(id: Number, answer: string): void {
    this.listOfUserAnswers.set(id, answer);
  }

  onSubmit() {
    let results;
    switch(this.queryTopic) {
      case beginnerTopics.topic1:
        console.log("submitting answers");
        results = {
          topic: this.queryTopic,
          difficulty: this.difficulty,
          score: 9,
          outOf: 18
        };
        break;
    }
    this.router.navigate(['results'], {
      state: {
        results
      }
    });
  }

}
