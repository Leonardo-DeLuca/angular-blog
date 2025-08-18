import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-basic-button',
  imports: [MatButtonModule],
  templateUrl: './basic-button.html',
  styleUrl: './basic-button.scss'
})
export class BasicButton {
  @Input() text: string = "";
}
