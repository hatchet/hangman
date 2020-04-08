import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-guess-container',
  templateUrl: './guess-container.component.html',
  styleUrls: ['./guess-container.component.scss']
})
export class GuessContainerComponent implements OnInit {
  letter = '';

  constructor(private dataService: DataService) { }


  ngOnInit(): void {
    // this.dataService.restartGame();
  }

  guessButtonClick() {
    this.dataService.guessLetter(this.letter);
  }

  startOverButtonClick() {
    this.dataService.restartGame();
  }
}
