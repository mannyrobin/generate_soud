import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AlertController, MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ITranslations } from '../shared/interfaces/translations.interface';
import { DbService } from '../shared/services/db.service';
import { CouponsService } from '../shared/services/coupons.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit, OnDestroy {
  public email: string;
  public name: string;
  public color: string;

  infoFormGroup: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    address: new FormControl(),
  });

  coupon_number: '';

  translations: ITranslations = {};

  private readonly _destroy$: Subject<void> = new Subject<void>();

  constructor (
    public menu: MenuController,
    private _alertController: AlertController,
    private storage: Storage,
    private _dbService: DbService,
    private _couponService : CouponsService,
    private _translateService: TranslateService,
  ) {
  }

  ngOnInit (): void {
    this._translateService.get(['error', 'codeError', 'notAvailable'])
      .pipe(takeUntil(this._destroy$))
      .subscribe(values => {
        this.translations = values;
      });

    this.menu.swipeGesture(false);
    this.menu.open();

    this.getUser();
    this.getCoupon();

    this.storage.get('color')
      .then(val => this.color = val);
  }

  ngOnDestroy (): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  ionViewWillEnter (): void {
    this.menu.swipeGesture(false);
    this.menu.open();
  }

  setColor (color: string): void {
    this.storage.set('color', color);
    this.color = color;
  }

  unavailable (): void {
    this.alert(this.translations.error, this.translations.notAvailable);
  }

  private async alert (header: string, message: string): Promise<void> {
    const alert = await this._alertController.create({
      header,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  private async getCoupon(): Promise<void> {
    const activeCoupon = await this._couponService.getActiveCoupon();
    try {
      this.coupon_number = activeCoupon.number;
    }
    catch(err) {
      this.coupon_number = '';
    }
  }

  private async getUser (): Promise<void> {
    const userData = await this._dbService.executeSql('SELECT * FROM user', []);
    
    if (!userData) {
      console.error('ERROR: no user in table');

      return;
    }

    if (userData.rows.length > 0) {
      this.infoFormGroup.get('name').setValue(
        `${userData.rows.item(0).name} ${userData.rows.item(0).last_name}`,
        { emitEvent: false },
      );
      this.infoFormGroup.get('email').setValue(userData.rows.item(0).email, { emitEvent: false });
      this.infoFormGroup.get('phone').setValue(userData.rows.item(0).tel, { emitEvent: false });
      this.infoFormGroup.get('address').setValue(userData.rows.item(0).address, { emitEvent: false });
    }
  }
}
