import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.css']
})
export class StartGameComponent implements OnInit {

  countDown = 5;

  constructor(private router: Router) { }

  ngOnInit() {
    const interval = setInterval(() => {
      this.countDown -= 1;
      if (this.countDown < 1) {
        clearInterval(interval);
        console.log('starting game');
        this.router.navigate(['question']);
      }
    }, 1000);
  }

}
