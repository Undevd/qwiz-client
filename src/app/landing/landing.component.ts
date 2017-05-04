import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  roomForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
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
    const url = 'wss://quiz-monster.herokuapp.com/quiz/' + formValue.roomName + '/' + formValue.handle + '/';
    console.log(url);
    const websocket = new WebSocket(url);
    websocket.onmessage = (message) => {
      // console.log(message);
      const messageData = JSON.parse(message.data);
      console.log(messageData);
    };
    this.router.navigate(['waiting', formValue.roomName, formValue.handle]);
  }

}
