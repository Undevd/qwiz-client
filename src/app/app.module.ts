import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule, MdInputModule, MdButtonModule, MdIconModule, MdListModule } from '@angular/material';

import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { WaitingComponent } from './waiting/waiting.component';
import { StartGameComponent } from './start-game/start-game.component';
import { QuestionComponent } from './question/question.component';
import { OutcomePageComponent } from './outcome-page/outcome-page.component';
import { SummaryPageComponent } from './summary-page/summary-page.component';
import { QuizService } from './quiz-service/quiz.service';

export const appRoutes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'waiting/:room/:handle', component: WaitingComponent },
  { path: 'start', component: StartGameComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'outcome', component: OutcomePageComponent },
  { path: 'summary', component: SummaryPageComponent },
  { path: '', redirectTo: '/landing', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    WaitingComponent,
    StartGameComponent,
    QuestionComponent,
    OutcomePageComponent,
    SummaryPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule,
    MdIconModule,
    MdListModule,
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
