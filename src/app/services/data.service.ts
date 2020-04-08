import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import words from '../../assets/words.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private word = '';
  private incorrectGuessCount = 0;
  private lettersGuessed: string[] = [];
  private userWonGame = null;

  public word$: Subject<string> = new Subject<string>();
  public incorrectGuessCount$: BehaviorSubject<number> = new BehaviorSubject<number>(this.incorrectGuessCount);
  public userWonGame$: Subject<boolean> = new Subject<boolean>();
  public lettersGuessed$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(this.lettersGuessed);

  constructor() {
  }

  public restartGame(): void {
    this.word = this.getRandomWord();
    this.incorrectGuessCount = 0;
    this.lettersGuessed = [];
    this.userWonGame = null;

    this.word$.next(this.word);
    this.incorrectGuessCount$.next(this.incorrectGuessCount);
    this.userWonGame$.next(this.userWonGame);
    this.lettersGuessed$.next(this.lettersGuessed);
  }

  public guessLetter(letter: string): void {
    this.lettersGuessed.push(letter.toLowerCase());
    this.lettersGuessed$.next(this.lettersGuessed);
    if (this.word.includes(letter)) {
      this.checkIfWordHasBeenGuessedCorrectly();
      return;
    }

    this.incorrectGuessCount$.next(++this.incorrectGuessCount);
    if (this.incorrectGuessCount === 10) {
      this.userWonGame = false;
      this.userWonGame$.next(this.userWonGame);
    }
  }

  private checkIfWordHasBeenGuessedCorrectly() {
    let allLettersFound = true;
    this.word.split('').forEach(letter => {
      if (!this.lettersGuessed.includes(letter)) {
        allLettersFound = false;
      }
    });
    if (allLettersFound) {
      this.userWonGame = true;
      this.userWonGame$.next(this.userWonGame);
    }
  }

  private getRandomWord() {
    const arrayIndex = Math.floor(Math.random() * Math.floor(words.length - 1));
    return words[arrayIndex];
  }
}
