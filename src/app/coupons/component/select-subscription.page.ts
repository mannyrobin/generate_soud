import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ITranslations } from '../../shared/interfaces/translations.interface';
import { API_ENDPOINT, API_COUPON } from '../../shared/constants/api.constant';
import { DbService } from '../../shared/services/db.service';
import { UserModel } from '../../shared/models/user.model';
import { CouponModel } from '../../shared/models/coupon.model';

@Component({
  selector: 'select-subscription',
  templateUrl: './select-subscription.page.html',
  styleUrls: ['./select-subscription.page.scss'],
})
export class SelectSubscriptionComponent implements OnInit, OnDestroy {
  page: number                    = 1;
  code: string                    = '';
  statusClass: string             = '';
  translations: ITranslations     = {};

  private coupon: number          = 0;
  private term: number            = 0;
  private user: UserModel;
  private couponInfo: any         = null;
  private readonly _destroy$: Subject<void> = new Subject<void>();

  constructor (
    public alertController: AlertController,
    private translateService: TranslateService,
    private _dbService: DbService,
    private _modalController: ModalController,
    private _httpClient : HttpClient,
  ) {
    this.translateService.get(['error', 'codeError', 'notAvailable'])
      .pipe(takeUntil(this._destroy$))
      .subscribe(values => {
        this.translations = values;
      });
  }

  ngOnInit (): void {
    this.updateStatus();
    this.getUser();
  }

  ngOnDestroy (): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  setCoupon (id: number): void {
    this.coupon = id;
    this.page   = 2;
    this.updateStatus();
  }

  setTerm (term: number): void {
    this.term = term;
    this.page = 3;
    this.updateStatus();
  }

  goToPage (page: number): void {
    this.page = page;

    this.updateStatus();
  }

  private async getUser (): Promise<void> {
    const userData = await this._dbService.executeSql('SELECT * FROM user', []);

    if (!userData) {
      console.error('ERROR: no user in table');

      return;
    }

    if (userData.rows.length > 0) {
      this.user = new UserModel(userData.rows.item(0));
    }
  }

  checkCode (): void {
    let pack_name = '';
    let expires = '';

    if (this.coupon === 1)
      pack_name = 'Beauty & Health Pack';
    else if (this.coupon === 2)
      pack_name = 'Salon Pack';
    else if (this.coupon === 3)
      pack_name = 'Advanced Pack';

    if (this.term === 1)
      expires = 'day';
    else if (this.term === 2)
      expires = 'week';
    else if (this.term === 3)
      expires = 'month';
    else if (this.term === 4)
      expires = 'year';

    this._httpClient.post(`${API_ENDPOINT}/${API_COUPON}/add?user_id=${this.user.id}&pack_name=${pack_name}&expires=${expires}`, {})
      .subscribe(value => {
        this.couponInfo = value;
      })

    //this.alert(this.translations.error, this.translations.codeError);
  }

  unavailable (): void {
    this.alert(this.translations.error, this.translations.notAvailable);
  }

  private async alert (header: string, message: string): Promise<void> {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  private updateStatus (): void {
    switch (this.page) {
      case 1:
        this.statusClass = '';
        break;

      case 2:
        this.statusClass = 'half_status';
        break;

      case 3:
        this.statusClass = 'more_half_status';
        break;

      case 6:
        this.statusClass = 'full_percents';
        break;
    }
  }
}
