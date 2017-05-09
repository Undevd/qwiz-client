import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdCardModule,
  MdInputModule,
  MdButtonModule,
  MdIconModule,
  MdListModule,
  MdSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule,
    MdIconModule,
    MdListModule,
    MdSelectModule
  ],
  declarations: [],
  exports: [
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule,
    MdIconModule,
    MdListModule,
    MdSelectModule
  ]
})
export class AngularMaterialModule { }
