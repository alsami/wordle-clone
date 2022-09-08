import { LetterBox } from './letter-box';

export class LetterRow {
  public constructor(private letters: LetterBox[]) {}

  public get _letters() {
    return this.letters;
  }
}
