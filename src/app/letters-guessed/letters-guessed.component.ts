import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-letters-guessed',
  templateUrl: './letters-guessed.component.html',
  styleUrls: ['./letters-guessed.component.scss']
})
export class LettersGuessedComponent implements OnInit, OnDestroy {
  incorrectLetters: string[] = [];
  word: string;
  lettersGuessedSubscription: Subscription;
  wordSubscription: Subscription;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.wordSubscription = this.dataService.word$.subscribe(word => {
      this.word = word;
    });
    this.lettersGuessedSubscription = this.dataService.lettersGuessed$.subscribe(lettersGuessed => {
      this.incorrectLetters = [];
      lettersGuessed.forEach(letter => {
        if (!this.word.includes(letter)) {
          this.incorrectLetters.push(letter);
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.lettersGuessedSubscription.unsubscribe();
    this.wordSubscription.unsubscribe();
  }
}
