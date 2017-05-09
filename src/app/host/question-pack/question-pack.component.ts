import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question-pack',
  templateUrl: './question-pack.component.html',
  styleUrls: ['./question-pack.component.css']
})
export class QuestionPackComponent implements OnInit {

  questionForm: FormGroup;
  pack: string;

  questionPacks: string[] = ['food', 'computers', 'trivia'];

  constructor(private fb: FormBuilder) {
    this.questionForm = this.fb.group({
      pack: this.fb.control(''),
      question: this.fb.control(''),
      correct: this.fb.control(''),
      incorrect_1: this.fb.control(''),
      incorrect_2: this.fb.control(''),
      incorrect_3: this.fb.control('')
    });
  }

  ngOnInit() {
  }

  submit(formValue) {
    console.log(formValue);
  }
}
