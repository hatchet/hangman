import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanContainerComponent } from './hangman-container.component';

describe('HangmanContainerComponent', () => {
  let component: HangmanContainerComponent;
  let fixture: ComponentFixture<HangmanContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HangmanContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HangmanContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
