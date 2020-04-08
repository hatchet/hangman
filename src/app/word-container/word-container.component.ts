import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-word-container',
  templateUrl: './word-container.component.html',
  styleUrls: ['./word-container.component.scss']
})
export class WordContainerComponent implements OnInit, OnDestroy {
  wordCharArray: string[] = [];
  wordSubscription: Subscription;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.wordSubscription = this.dataService.word$.subscribe(word => {
      this.wordCharArray = word.split('');
    });
  }

  ngOnDestroy(): void {
    this.wordSubscription.unsubscribe();
  }
}
