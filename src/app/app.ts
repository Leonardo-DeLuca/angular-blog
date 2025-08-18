import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from "./components/title/title";
import { VerticalCard } from "./components/vertical-card/vertical-card";
import { HorizontalCard } from "./components/horizontal-card/horizontal-card";
import { RoundButton } from "./components/round-button/round-button";
import { Header } from "./components/header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Title, VerticalCard, HorizontalCard, RoundButton, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'blog';
}
