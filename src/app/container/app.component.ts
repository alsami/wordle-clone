import { Component } from '@angular/core';
import { LetterBox, LetterRow, LetterType } from '@wordle-clone/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private currentRowIndex = 0;
  private currentBoxIndex = 0;

  private readonly word: LetterType[] = [
    LetterType.C,
    LetterType.L,
    LetterType.A,
    LetterType.S,
    LetterType.S,
  ];

  public letterRows: LetterRow[];

  public letterTypes;

  public constructor() {
    this.letterTypes = Object.keys(LetterType)
      .filter((key) => !isNaN(Number(key)))
      .map((x) => LetterType[<any>x]);
    this.letterRows = [
      new LetterRow(this.createLetters(5)),
      new LetterRow(this.createLetters(5)),
      new LetterRow(this.createLetters(5)),
      new LetterRow(this.createLetters(5)),
      new LetterRow(this.createLetters(5)),
      new LetterRow(this.createLetters(5)),
    ];
  }

  public letterPicked(value: string) {
    console.log(value);
    this.letterRows[this.currentRowIndex]._letters[
      this.currentBoxIndex
    ]._letter = value;

    if (this.currentBoxIndex < this.word.length - 1) {
      this.currentBoxIndex++;
      return;
    }

    this.currentBoxIndex = 0;
    this.currentRowIndex++;
  }

  private createLetters(amount: number): LetterBox[] {
    const letterBoxes: LetterBox[] = [];
    for (let i = 0; i < amount; i++) {
      const letterBox = new LetterBox(LetterType[this.word[i]]);
      letterBoxes.push(letterBox);
    }

    return letterBoxes;
  }
}
