import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';

import { QuizServiceService } from './quiz-service.service';
import { QuizAnswerData, QuizQuestionData } from './../models';

describe('QuizServiceService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: QuizServiceService;

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  //before each test
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, HttpClientModule ],
      providers: [ QuizServiceService ]
    })

    //inject the http service and test controller 
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

    //create the service with the httpClient 
    // httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new QuizServiceService(httpClient); 
  });

  it('should be defined (HttpClient is defined)', () => {
    expect(service).toBeTruthy();
  });

  it('should test getBeginnerTopic1Questions()', () => {
    const testData: QuizQuestionData = { 
      question: 'Test Question 1',
      answers: [
        'ans1',
        'ans2'
      ]
    };

    const data = service.getBeginnerTopic1Questions()
  }); 
});
