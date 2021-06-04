import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { BeginnerComponent } from './components/pages/beginner/beginner.component';
import { IntermediateComponent } from './components/pages/intermediate/intermediate.component';
import { ExpertComponent } from './components/pages/expert/expert.component';
import { QuizComponent } from './components/pages/quiz/quiz.component';
import { QuestionComponent } from './components/question/question.component';
import { ResultsComponent } from './components/pages/results/results.component';
import { AnswersComponent } from './components/pages/answers/answers.component';
import { Error404Component } from './components/pages/error404/error404.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BeginnerComponent,
    IntermediateComponent,
    ExpertComponent,
    QuizComponent,
    QuestionComponent,
    ResultsComponent,
    AnswersComponent,
    Error404Component,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
