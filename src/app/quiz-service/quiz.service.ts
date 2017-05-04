import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

declare var ReconnectingWebSocket;

@Injectable()
export class QuizService {

  websocket: WebSocket;
  currentHandle: string;
  currentQuestion: string = 'What is irrational?';
  currentAnswers: string[] = ['one', 'a half', 'seventeenthousand', 'pi'];;
  chosenAnswer: string;

  constructor(private router: Router) { }

  open(roomDetails) {
    this.currentHandle = roomDetails.handle;
    const url = 'wss://quiz-monster.herokuapp.com/quiz/' + roomDetails.roomName + '/' + roomDetails.handle + '/';
    console.log(url);
    this.websocket = new ReconnectingWebSocket(url);
    this.websocket.onopen = () => {
      console.log('websocket opened');
    };
    this.websocket.onmessage = (message) => {
      // console.log(message);
      const messageData = JSON.parse(message.data);
      console.log('Got new message', messageData);
    };
    this.websocket.onclose = () => {
      console.log('websocket closed');
    };

    setTimeout(() => {
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

  sendMessage(message) {
    const websocketMessage = {
      handle: this.currentHandle,
      message: message
    };
    console.log('Sending websocket message ', websocketMessage);
    this.websocket.send(JSON.stringify(websocketMessage));
  }

  getQuestion() {
    return this.currentQuestion;
  }

  getAnswers() {
    return this.currentAnswers;
  }

  chooseAnswer(answer: string) {
    this.chosenAnswer = answer;
    this.router.navigate(['outcome']);
  }

}
