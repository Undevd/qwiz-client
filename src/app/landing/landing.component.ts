import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  roomForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.roomForm = this.fb.group({
      roomName: this.fb.control(''),
      handle: this.fb.control('')
    });
  }

  ngOnInit() {
  }

  submit(formValue) {
    console.log(formValue);
    const url = 'wss://quiz-monster.herokuapp.com/chat/' + formValue.roomName + '/' + formValue.handle + '/';
    console.log(url);
    const websocket = new WebSocket(url);
    websocket.onmessage = (message) => {
      // console.log(message);
      const messageData = JSON.parse(message.data);
      console.log(messageData);
    };
  }

}
