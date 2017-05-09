import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionPackComponent } from './question-pack.component';

describe('QuestionPackComponent', () => {
  let component: QuestionPackComponent;
  let fixture: ComponentFixture<QuestionPackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionPackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
