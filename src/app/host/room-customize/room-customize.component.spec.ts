import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomCustomizeComponent } from './room-customize.component';

describe('RoomCustomizeComponent', () => {
  let component: RoomCustomizeComponent;
  let fixture: ComponentFixture<RoomCustomizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomCustomizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomCustomizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
