import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { COUPON_STATUSES } from '../shared/constants/coupons.constant';
import { APP_LANGUAGES, ILanguage } from '../shared/constants/languages.constant';
import { APP_ROUTE_URLS } from '../shared/constants/routes.constant';
import { IResponse } from '../shared/interfaces/response.interface';
import { ITranslations } from '../shared/interfaces/translations.interface';
import { UserModel } from '../shared/models/user.model';
import { DbService } from '../shared/services/db.service';

import { LoginApiService } from './services/login.api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {
  public email: string;
  public password: string;
  public user: UserModel;
  public isFailed: boolean;
  translations: ITranslations = {};
  selectedLang: string        = APP_LANGUAGES[0].code;
  APP_LANGUAGES: ILanguage[]  = APP_LANGUAGES;

  APP_ROUTE_URLS: typeof APP_ROUTE_URLS = APP_ROUTE_URLS;

  private readonly _destroy$: Subject<void> = new Subject<void>();

  constructor (
    private alertController: AlertController,
    private storage: Storage,
    private router: Router,
    private menu: MenuController,
    private translateService: TranslateService,
    private platform: Platform,
    private _dbService: DbService,
    private _loginApiService: LoginApiService,
  ) {
  }

  async ngOnInit (): Promise<void> {
    this.selectedLang = await this.storage.get('lang');

    this.translateService.get(['error', 'noUser', 'notAvailable'])
      .pipe(takeUntil(this._destroy$))
      .subscribe(values => {
        this.translations = { ...values };
      });
  }

  ngOnDestroy (): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  changeLang (data: string): void {
    this.translateService.use(data);
    this.storage.set('lang', data);
  }

  tryLogin (): void {
    if (!this.email || !this.password) {
      this.alert(this.translations.error, this.translations.enterData);
      this.isFailed = true;
    }

    this._loginApiService.login({
      email: this.email,
      password: this.password,
    })
      .subscribe((response: IResponse) => {
        if (response.code === 500) {
          this.alert(this.translations.error, response.msg);
          this.isFailed = true;
          return;
        }

        if (response.code === 200 && response.msg !== 'success') {
          this.alert(this.translations.error, this.translations.noUser);
          this.isFailed = true;
          return;
        }

        this.menu.enable(true, 'first');

        this.user = response.data;

        this.storage.set('user', this.user);
        this.saveUser(this.user);

        if (this.user.coupons.length) {
          this.storage.set('upack', this.user.coupons[0].pack);

          if (this.user.coupons[0].status === COUPON_STATUSES.ACTIVE) {
            this.router.navigate([`/${APP_ROUTE_URLS.PLAYER}`]);
            this.menu.enable(true, 'first');

            return;
          }

          this.router.navigate([`/${APP_ROUTE_URLS.COUPONS}`]);
          this.menu.open('first');

          return;
        }

        this.router.navigate([`/${APP_ROUTE_URLS.PLAYER}`]);
      });
  }

  private async saveUser (user: UserModel): Promise<void> {
    await this._dbService.executeSql(
      'INSERT INTO user(uid, name, email, address, tel, last_name) VALUES (?, ?, ?, ?, ?, ?)',
      [user.id, user.name, user.email, user.address, user.phone, user.last_name],
    )
      .catch(error => console.error('Error! Can not save user' + error));
  }

  private async alert (header: string, message: string): Promise<void> {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
