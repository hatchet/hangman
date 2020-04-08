import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private word = '';
  private incorrectGuessCount = 0;
  private lettersGuessed: string[] = [];
  private userWonGame: boolean = null;

  public word$: Subject<string> = new Subject<string>();
  public incorrectGuessCount$: BehaviorSubject<number> = new BehaviorSubject<number>(this.incorrectGuessCount);
  public userWonGame$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.userWonGame);

  constructor() {
  }

  public restartGame(): void {
    this.word = this.getRandomWord();
    this.incorrectGuessCount = 0;
    this.lettersGuessed = [];
    this.userWonGame = false;

    this.word$.next(this.word);
    this.incorrectGuessCount$.next(this.incorrectGuessCount);
  }

  public guessLetter(letter: string): void {
    this.incorrectGuessCount$.next(++this.incorrectGuessCount);
    if (this.incorrectGuessCount === 10) {
      this.userWonGame$.next(false);
    }
  }

  private getRandomWord() {
    return 'hello';
  }
}
