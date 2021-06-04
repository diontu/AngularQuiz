import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../components/pages/home/home.component';
import { BeginnerComponent } from '../components/pages/beginner/beginner.component';
import { IntermediateComponent } from '../components/pages/intermediate/intermediate.component';
import { ExpertComponent } from '../components/pages/expert/expert.component';
import { QuizComponent } from '../components/pages/quiz/quiz.component';
import { ResultsComponent } from '../components/pages/results/results.component';
import { AnswersComponent } from '../components/pages/answers/answers.component';
import { Error404Component } from '../components/pages/error404/error404.component';
import { LoginComponent } from '../components/pages/login/login.component';
import { RegisterComponent } from '../components/pages/register/register.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "beginner", component: BeginnerComponent },
  { path: "intermediate", component: IntermediateComponent },
  { path: "expert", component: ExpertComponent },
  { path: "results", component: ResultsComponent },
  { path: "login", component: LoginComponent},
  { path: "register", component: RegisterComponent},
  { path: ":difficulty/quiz", component: QuizComponent },
  { path: ":difficulty/quiz/answers", component: AnswersComponent },
  { path:"**", component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
