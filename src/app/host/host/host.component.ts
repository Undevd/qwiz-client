import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit {

  hostForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router) {
    this.hostForm = this.fb.group({
      roomName: this.fb.control(''),
      handle: this.fb.control('')
    });
  }

  ngOnInit() {
  }

  createRoom() {
    this.router.navigate(['room-customize']);
  }

}
