import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  answers = ['one', 'a half', 'seventeenthousand', 'pi'];

  constructor() { }

  ngOnInit() {
  }

  submitAnswer(answer: string) {
    console.log(answer);
  }

}
