import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LetterBox } from '@wordle-clone/models';

@Component({
  selector: 'app-letter-box',
  templateUrl: './letter-box.component.html',
  styleUrls: ['./letter-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LetterBoxComponent {
  @Input() letterBox: LetterBox | null = null;
}
