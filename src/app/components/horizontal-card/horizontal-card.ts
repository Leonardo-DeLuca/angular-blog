import { Component, input, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-horizontal-card',
  imports: [MatCardModule],
  templateUrl: './horizontal-card.html',
  styleUrl: './horizontal-card.scss'
})
export class HorizontalCard {
  @Input() type: string = "";
  @Input() text: string = "";
  @Input() author: string = "";
  @Input() date: string = "";
  @Input() imgSrc: string = "";

  @Input() maxTextChars: number = 30;
  
  @Input() scale: number = 1;
}
