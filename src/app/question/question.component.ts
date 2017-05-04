import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  answers = ['one', 'a half', 'seventeenthousand', 'pi'];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submitAnswer(answer: string) {
    console.log(answer);
    this.router.navigate(['outcome']);
  }

}
