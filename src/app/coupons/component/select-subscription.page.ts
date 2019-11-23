import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ITranslations } from '../../shared/interfaces/translations.interface';

@Component({
  selector: 'select-subscription',
  templateUrl: './select-subscription.page.html',
  styleUrls: ['./select-subscription.page.scss'],
})
export class SelectSubscriptionComponent implements OnInit, OnDestroy {
  page: number                = 1;
  code: string                = '';
  statusClass: string         = '';
  translations: ITranslations = {};

  private coupon: number = 0;
  private term: number   = 0;

  private readonly _destroy$: Subject<void> = new Subject<void>();

  constructor (
    public alertController: AlertController,
    private translateService: TranslateService,
    private _modalController: ModalController,
  ) {
    this.translateService.get(['error', 'codeError', 'notAvailable'])
      .pipe(takeUntil(this._destroy$))
      .subscribe(values => {
        this.translations = values;
      });
  }

  ngOnInit (): void {
    this.updateStatus();
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

  checkCode (): void {
    this.alert(this.translations.error, this.translations.codeError);
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
