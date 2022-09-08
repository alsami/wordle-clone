import { LetterType } from '@wordle-clone/models';

export class Letter {
  constructor(private letterType: LetterType) {}

  public get _letterType(): LetterType {
    return this.letterType;
  }
}
