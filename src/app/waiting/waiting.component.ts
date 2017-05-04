import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-waiting',
  templateUrl: './waiting.component.html',
  styleUrls: ['./waiting.component.css']
})
export class WaitingComponent implements OnInit {

  roomName: string;

  constructor(
    private route: ActivatedRoute
    ) {
    this.roomName = 'Room Name';
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.roomName = params['room'];
    });
  }

}
