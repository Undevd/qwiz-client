import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-customize',
  templateUrl: './room-customize.component.html',
  styleUrls: ['./room-customize.component.css']
})
export class RoomCustomizeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  createQuestions() {
    this.router.navigate(['question-customize']);
  }

}
