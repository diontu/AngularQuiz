import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { QuizQuestionData, QuizAnswerData } from './../models';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {

  constructor(
    private http: HttpClient,
  ) { }

  getBeginnerTopic1Questions() {
    return this.http.get<QuizQuestionData[]>(
      '/assets/quizdata.json'
    );
  }

  getBeginnerTopic1Answers() {
    this.http.get
    return this.http.get<QuizAnswerData[]>(
      '/assets/quizAnswerData.json'
    );
  }

  getIntermediateComponentsQuestions() {}
  
  getIntermediateTemplatesQuestions() {}

  getIntermediateDirectivesQuestions() {}

  getIntermediateDependencyInejctionQuestions() {}

  getExpertQuestions() {}
}
