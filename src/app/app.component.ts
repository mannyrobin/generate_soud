import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';

import { APP_ROUTE_URLS } from './shared/constants/routes.constant';
import { CouponsService } from './shared/services/coupons.service';
import { DbService } from './shared/services/db.service';

interface IAppPage {
  title: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  public database: any;
  public color: any;
  public url: string    = this.router.url;
  isMenuOpened: boolean = false;

  APP_ROUTE_URLS: typeof APP_ROUTE_URLS = APP_ROUTE_URLS;

  constructor (
    private router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private storage: Storage,
    private translate: TranslateService,
    private _screenOrientation: ScreenOrientation,
    private _dbService: DbService,
    private _couponsService: CouponsService,
  ) {
    this.initializeApp();
  }

  initializeApp (): void {
    this.platform.ready().then(async () => {
      const lang = await this.storage.get('lang');

      this.translate.setDefaultLang(lang ? lang : 'ru');

      if (this.platform.is('cordova')) {
        this._screenOrientation.lock(this._screenOrientation.ORIENTATIONS.LANDSCAPE);
      }

      this.color = setInterval(() => {
        this.getColor();
      }, 1000);

      this.menu.close('first');
      this.statusBar.hide();
      this.splashScreen.hide();

      this.database = await this._dbService.createDbConnection();

      if (!this.database) {
        console.error('Error! Can not connect to database');

        return;
      }

      const createCardsTable = await this._dbService.executeSql(
        'CREATE TABLE IF NOT EXISTS cards (id INTEGER PRIMARY KEY AUTOINCREMENT, number TEXT, cvv TEXT, date TEXT)',
      )
        .catch(error => console.error('Error! Can not create table "cards"' + error));

      const createUserTable = await this._dbService.executeSql(
        'CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT, tel TEXT, address TEXT, uid INTEGER, name TEXT, coupon_status TEXT, token TEXT, cache TEXT, email TEXT, last_name TEXT)',
      )
        .catch(error => console.error('Error! Can not create table "user"' + error));

      const selectFromUserTable = await this._dbService.executeSql(
        'SELECT * FROM user',
      )
        .catch(error => console.error('Error! Can not select from table "user"' + error));

      if (!selectFromUserTable || !selectFromUserTable.rows.length) {
        this.router.navigate([`/${APP_ROUTE_URLS.LOGIN}`]);

        return;
      }

      const activeCoupon = await this._couponsService.getActiveCoupon();

      if (!activeCoupon) {
        this.router.navigate([`/${APP_ROUTE_URLS.COUPONS}`]);
      }

      this.router.navigate([`/${APP_ROUTE_URLS.PLAYER}`]);
      this.menu.enable(true, 'first');
    });
  }

  async exit (): Promise<void> {
    await this._dbService.executeSql('DELETE FROM user');
    await this._dbService.executeSql('DELETE FROM cards');
    await this.storage.clear();

    await this.router.navigate([`/${APP_ROUTE_URLS.LOGIN}`]);

    await this.menu.enable(false, 'first');
  }

  closeMenu (): void {
    this.menu.close('first');
  }

  getColor (): void {
    this.storage.get('color')
      .then(val => this.color = val);
  }
}
