import { Injectable } from '@angular/core';
import { Languages } from '../interfaces/languages';

@Injectable({
  providedIn: 'root'
})
export class LanguageList {
  protected languageList: Languages[] = [
    {name: 'EN', value: 'en', icon: 'assets/usa.png'},
    {name: 'PT-BR', value: 'pt', icon: 'assets/brazil.png'},
  ]

  getAll(): Languages[]{
    return this.languageList;
  }
}
