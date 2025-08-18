import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-vertical-card',
  imports: [MatCardModule],
  templateUrl: './vertical-card.html',
  styleUrl: './vertical-card.scss'
})
export class VerticalCard {
  @Input() type:string = "";
  @Input() text:string = "";
  @Input() author:string = "";
  @Input() date:string = "";
  @Input() imgSrc: string = ""

  @Input() maxTextChars: number = 30;

  @Input() scale: number = 1;
}
