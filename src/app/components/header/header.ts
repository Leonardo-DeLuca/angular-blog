import { Component } from '@angular/core';
import { BasicButton } from "../basic-button/basic-button";
import { RoundButton } from "../round-button/round-button";
import { LanguagePicker } from "./language-picker/language-picker";

@Component({
  selector: 'app-header',
  imports: [BasicButton, RoundButton, LanguagePicker],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
