import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz-service/quiz.service';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.css']
})
export class SummaryPageComponent implements OnInit {

  numberCorrect;
  numberIncorrect;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.numberCorrect = this.quizService.getNumberOfCorrect();
    this.numberIncorrect = this.quizService.getNumberOfIncorrect();
  }

  startNew() {

  }

}
