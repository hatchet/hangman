import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-hangman-container',
  templateUrl: './hangman-container.component.html',
  styleUrls: ['./hangman-container.component.scss']
})
export class HangmanContainerComponent implements OnInit, AfterViewInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.dataService.restartGame();
    }, 0);
  }
}
