import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hangman-graphic',
  templateUrl: './hangman-graphic.component.html',
  styleUrls: ['./hangman-graphic.component.scss']
})
export class HangmanGraphicComponent implements OnInit, OnDestroy {
  imgSrc = '';
  incorrectGuessCountSubscription: Subscription;
  userWonGame = false;
  userWonGameSubscription: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.incorrectGuessCountSubscription = this.dataService.incorrectGuessCount$.subscribe(incorrectGuessCount => {
      this.imgSrc = `./assets/${incorrectGuessCount}.PNG`;
    });

    this.userWonGameSubscription = this.dataService.userWonGame$.subscribe(userWonGame => {
      if (userWonGame) {
        this.imgSrc = './assets/win.PNG';
      }
    });
  }

  ngOnDestroy(): void {
    this.incorrectGuessCountSubscription.unsubscribe();
    this.userWonGameSubscription.unsubscribe();
  }
}
