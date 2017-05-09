import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { HostComponent } from './host/host.component';
import { QuestionPackComponent } from './question-pack/question-pack.component';
import { RoomCustomizeComponent } from './room-customize/room-customize.component';

export const hostRoutes: Routes = [
  { path: 'host', component: HostComponent },
  { path: 'room-customize', component: RoomCustomizeComponent },
  { path: 'question-customize', component: QuestionPackComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(hostRoutes),
    AngularMaterialModule
  ],
  declarations: [
    HostComponent,
    QuestionPackComponent,
    RoomCustomizeComponent
  ]
})
export class HostModule { }
