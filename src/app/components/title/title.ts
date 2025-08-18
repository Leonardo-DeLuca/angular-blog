import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.html',
  styleUrl: './title.scss'
})
export class Title {
  @Input() textTitle: string = "";
  @Input() position: string = "";

  get processedText(): string{
    return this.textTitle.replace(/\n/g, '<br>');
  }
}
