import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

  websocket: WebSocket;

  constructor() { }

  open(roomDetails) {
    const url = 'wss://quiz-monster.herokuapp.com/quiz/' + roomDetails.roomName + '/' + roomDetails.handle + '/';
    console.log(url);
    this.websocket = new WebSocket(url);
    this.websocket.onmessage = (message) => {
      // console.log(message);
      const messageData = JSON.parse(message.data);
      console.log('Got new message', messageData);
    };
    setTimeout(function () {
      const connection = {
        message: roomDetails.roomName,
        handle: roomDetails.handle
      };
      this.websocket.send(JSON.stringify(connection));
      console.log('sent message', JSON.stringify(connection));
    }, 1000);
  }

  send() {

  }

}
