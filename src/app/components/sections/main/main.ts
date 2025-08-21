import { Component } from '@angular/core';
import { Title } from "../../title/title";
import { HorizontalCard } from "../../horizontal-card/horizontal-card";

@Component({
  selector: 'app-main',
  imports: [Title, HorizontalCard],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {

}
