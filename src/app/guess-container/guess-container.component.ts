import { Component, OnInit, ViewChild, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-guess-container',
  templateUrl: './guess-container.component.html',
  styleUrls: ['./guess-container.component.scss']
})
export class GuessContainerComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('letterElement') letterElement: ElementRef;
  letter = '';
  lettersGuessed: string[];
  lettersGuessedSubscription: Subscription;
  duplicateLetter = false;
  invalidCharacter = false;
  userWonGame = null;
  userWonGameSubscription: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.lettersGuessedSubscription = this.dataService.lettersGuessed$.subscribe(lettersGuessed => {
      this.lettersGuessed = lettersGuessed;
    });
    this.userWonGameSubscription = this.dataService.userWonGame$.subscribe(userWonGame => {
      this.userWonGame = userWonGame;
    });
  }

  ngAfterViewInit(): void {
    this.letterElement.nativeElement.focus();
  }

  ngOnDestroy(): void {
    this.lettersGuessedSubscription.unsubscribe();
    this.userWonGameSubscription.unsubscribe();
  }

  guessButtonClick() {
    this.duplicateLetter = false;
    this.invalidCharacter = false;
    if (this.lettersGuessed.includes(this.letter)) {
      this.duplicateLetter = true;
    }
    else if (!/^[a-zA-Z]+$/.test(this.letter)) {
      this.invalidCharacter = true;
    }
    else {
      this.dataService.guessLetter(this.letter);
    }
    this.letter = '';
    this.letterElement.nativeElement.focus();
  }

  startOverButtonClick() {
    this.dataService.restartGame();
    setTimeout(() => {
      this.letterElement.nativeElement.focus();
    }, 0);
  }
}
