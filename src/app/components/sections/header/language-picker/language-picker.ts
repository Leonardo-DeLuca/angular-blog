// language-picker.ts
import { Component, inject } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { Languages } from '../../../../interfaces/languages';
import { LanguageList } from '../../../../services/language-list';

@Component({
  selector: 'app-language-picker',
  imports: [MatSelectModule],
  templateUrl: './language-picker.html',
  styleUrls: ['./language-picker.scss']
})
export class LanguagePicker {
  languageList: Languages[] = [];
  selectedVal: string = 'en';
  
  private languageService: LanguageList = inject(LanguageList);

  ngOnInit(): void {
    this.languageList = this.languageService.getAll();
  }

  get selectedLanguage(): Languages | undefined {
    return this.languageList.find(lang => lang.value === this.selectedVal);
  }
}
