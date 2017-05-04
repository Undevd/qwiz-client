import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outcome-page',
  templateUrl: './outcome-page.component.html',
  styleUrls: ['./outcome-page.component.css']
})
export class OutcomePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nextQuestion() {

  }

}
