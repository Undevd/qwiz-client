import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

declare var ReconnectingWebSocket;

@Injectable()
export class QuizService {

  websocket: WebSocket;
  currentHandle: string;
  currentQuestion: string = 'What is irrational?';
  currentAnswers: string[] = ['one', 'a half', 'seventeenthousand', 'pi'];
  correctAnswer: string = 'pi';
  chosenAnswer: string;
  questionNumber: number;
  numberOfCorrect: string;
  numberOfIncorrect: string;

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
      const messageData: QuizMessage = JSON.parse(message.data);
      console.log('Got new message', messageData);

      switch (messageData.type) {
        case 0:
          console.log('New Room');
          break;
        case 1:
          console.log('Questions');
          this.currentQuestion = messageData.message;
          this.currentAnswers = [messageData.incorrect_answer_1, messageData.incorrect_answer_2, messageData.incorrect_answer_3];
          this.correctAnswer = messageData.correct_answer;
          this.router.navigate(['question']);
          break;
        case 2:
          console.log('Result');
          break;
        case 3:
          console.log('Summary');
          this.numberOfCorrect = messageData.correct_answer;
          this.numberOfIncorrect = messageData.incorrect_answer_1;
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
      type: QuizMessageType.Message,
      handle: this.currentHandle,
      message: message
    };
    console.log('Sending websocket message ', websocketMessage);
    this.websocket.send(JSON.stringify(websocketMessage));
  }

  getNextQuestion() {
    const websocketMessage = {
      type: QuizMessageType.Question,
      handle: this.currentHandle,
      message: '',
      q_id: this.questionNumber
    };
    console.log('Sending websocket message ', websocketMessage);
    this.websocket.send(JSON.stringify(websocketMessage));
  }

  startGame() {
    this.questionNumber = 1;
    this.router.navigate(['start']);
  }

  getCurrentQuestion() {
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
    return this.correctAnswer;
  }

  getNumberOfCorrect() {
    return this.numberOfCorrect;
  }

  getNumberOfIncorrect() {
    return this.numberOfIncorrect;
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
  q_id: number;
  handle: string;
  message: string;
  correct_answer: string;
  incorrect_answer_1: string;
  incorrect_answer_2: string;
  incorrect_answer_3: string;
  result: boolean;
  users: string[];
}

export enum QuizMessageType {
  NewRoom,
  Question,
  Result,
  Summary,
  Message
}
