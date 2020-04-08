import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanGraphicComponent } from './hangman-graphic.component';

describe('HangmanGraphicComponent', () => {
  let component: HangmanGraphicComponent;
  let fixture: ComponentFixture<HangmanGraphicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HangmanGraphicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HangmanGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
