import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { QuizService } from '../quiz-service/quiz.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  roomForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private quizService: QuizService
  ) {
    this.roomForm = this.fb.group({
      roomName: this.fb.control(''),
      handle: this.fb.control('')
    });
  }

  ngOnInit() {
  }

  submit(formValue) {
    console.log(formValue);
    this.quizService.open(formValue);
    this.router.navigate(['waiting', formValue.roomName, formValue.handle]);
  }

}
