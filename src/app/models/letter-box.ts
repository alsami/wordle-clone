export class LetterBox {
  private letter: string | null = null;

  public constructor(private correctLetter: string) {
    console.log('CORRECT-LETTER', this.correctLetter);
  }

  public set _letter(letter: string | null) {
    this.letter = letter;
  }

  public get _letter(): string | null {
    return this.letter;
  }

  public get matched(): boolean {
    return this.correctLetter == this.letter;
  }
}
