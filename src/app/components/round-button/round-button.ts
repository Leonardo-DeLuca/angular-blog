import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import type { MatButtonAppearance } from '@angular/material/button';

@Component({
  selector: 'app-round-button',
  imports: [MatButtonModule],
  templateUrl: './round-button.html',
  styleUrl: './round-button.scss'
})
export class RoundButton {
  @Input() text: string = "";
  @Input() filledColor?: string;

  appearance: MatButtonAppearance = 'text';

  @Input()
  set selected(value: boolean) {
    this.appearance = value ? 'filled' : 'outlined';
  }
}
