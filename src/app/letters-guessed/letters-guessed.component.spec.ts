import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LettersGuessedComponent } from './letters-guessed.component';

describe('LettersGuessedComponent', () => {
  let component: LettersGuessedComponent;
  let fixture: ComponentFixture<LettersGuessedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LettersGuessedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LettersGuessedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
