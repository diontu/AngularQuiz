import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { ResultsComponent } from './results.component';

class RouterStub {
  getCurrentNavigation() {
    return {
      extras: {
        state: {
          results: {
            topic: 'What is Angular?',
            difficulty: 'beginner',
            score: 5,
            outOf: 5
          }
        }
      }
    }
  }
}

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsComponent ],
      providers: [ {provide: Router, useClass: RouterStub} ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
