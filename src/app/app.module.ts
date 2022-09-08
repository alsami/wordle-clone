import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LetterBoxComponent } from '@wordle-clone/components';
import { AppComponent } from '@wordle-clone/container';

@NgModule({
  declarations: [AppComponent, LetterBoxComponent],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
