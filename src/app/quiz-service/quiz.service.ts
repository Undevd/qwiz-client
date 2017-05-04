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
    this.websocket.onmessage = this.handleIncomingMessage();
    this.websocket.onclose = () => {
      console.log('websocket closed');
    };

    setTimeout(() => {
      const connection = {
        type: QuizMessageType.NewRoom,
        handle: roomDetails.handle,
        message: roomDetails.roomName
      } as QuizMessage;
      this.websocket.send(JSON.stringify(connection));
      console.log('sent message', JSON.stringify(connection));
    }, 1000);
  }

  handleIncomingMessage() {
    return (message) => {
      // console.log(message);
      const messageData = JSON.parse(message.data);
      console.log('Got new message', messageData);

      switch (messageData.type) {
        case 0:
          console.log('New Room');
          break;
        case 1:
          console.log('Questions');
          break;
        case 2:
          console.log('Result');
          break;
        case 3:
          console.log('Summary');
          break;
        default:
          console.log('Unknown message type');

      }
    };
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
    return this.shuffle(this.currentAnswers);
  }

  chooseAnswer(answer: string) {
    this.chosenAnswer = answer;
    console.log('Answer correct: ' + (this.getCorrectAnswer() === answer));
    this.router.navigate(['outcome']);
  }

  getChosenAnswer() {
    return this.chosenAnswer;
  }

  getCorrectAnswer() {
    return 'pi';
  }

  quit() {
    this.websocket.close();
  }

  // from http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
  shuffle(a) {
    for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
    return a;
  }

}

export class QuizMessage {
  type: number;
  handle: string;
  message: string;
  correct: string;
  incorrect1: string;
  incorrect2: string;
  incorrect3: string;
  result: boolean;
  users: string[];
}

export enum QuizMessageType {
  NewRoom,
  Question,
  Result,
  Summary
}
