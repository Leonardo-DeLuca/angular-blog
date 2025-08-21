import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from "./components/title/title";
import { VerticalCard } from "./components/vertical-card/vertical-card";
import { HorizontalCard } from "./components/horizontal-card/horizontal-card";
import { RoundButton } from "./components/round-button/round-button";
import { Header } from "./components/sections/header/header";
import { Main } from "./components/sections/main/main";
import { Second } from "./components/sections/second/second";
import { Footer } from "./components/sections/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Title, VerticalCard, HorizontalCard, RoundButton, Header, Main, Second, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'blog';
}
