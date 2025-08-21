import { Component } from '@angular/core';
import { Title } from "../../title/title";
import { VerticalCard } from "../../vertical-card/vertical-card";

@Component({
  selector: 'app-second',
  imports: [Title, VerticalCard],
  templateUrl: './second.html',
  styleUrl: './second.scss'
})

export class Second {

}
