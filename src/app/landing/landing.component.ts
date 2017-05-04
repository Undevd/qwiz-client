import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  roomForm: FormGroup;
  room: string;

  constructor(private fb: FormBuilder) {
    this.fb.group({
      roomName: this.fb.control('')
    });
  }

  ngOnInit() {
  }

}
