import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';

import { APP_LANGUAGES, ILanguage } from '../../constants/languages.constant';

@Component({
  selector: 'language-modal.component',
  templateUrl: './language-modal.component.html',
  styleUrls: ['./language-modal.component.scss'],
})
export class LanguageModalComponent implements OnInit {
  selectedLang: string       = APP_LANGUAGES[0].code;
  APP_LANGUAGES: ILanguage[] = APP_LANGUAGES;

  constructor (
    private _modalController: ModalController,
    private _translateService: TranslateService,
    private _storage: Storage,
  ) {
  }

  async ngOnInit (): Promise<void> {
    this.selectedLang = await this._storage.get('lang');
  }

  changeLang (lang: string): void {
    this._translateService.use(lang);
    this._storage.set('lang', lang);

    this._modalController.dismiss();
  }
}
