import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HangmanGraphicComponent } from './hangman-graphic/hangman-graphic.component';
import { HangmanContainerComponent } from './hangman-container/hangman-container.component';
import { WordContainerComponent } from './word-container/word-container.component';
import { GuessContainerComponent } from './guess-container/guess-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HangmanGraphicComponent,
    HangmanContainerComponent,
    WordContainerComponent,
    GuessContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
