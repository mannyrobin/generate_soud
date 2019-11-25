import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { COUPON_STATUSES } from '../shared/constants/coupons.constant';
import { CouponsService } from '../shared/services/coupons.service';

import { SelectSubscriptionComponent } from './component/select-subscription.page';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.page.html',
  styleUrls: ['./coupons.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CouponsPage implements OnInit {
  activeCoupon: any;

  COUPON_STATUSES: typeof COUPON_STATUSES = COUPON_STATUSES;

  constructor (
    private _changeDetectorRef: ChangeDetectorRef,
    private _modalController: ModalController,
    private _couponsService: CouponsService,
  ) {
  }

  ngOnInit (): void {
    this.init();
  }

  async selectSubscription (): Promise<void> {
    const modal = await this._modalController.create({
      component: SelectSubscriptionComponent,
      cssClass: 'select-subscription',
    });

    return modal.present();
  }

  private async init (): Promise<void> {
    this.activeCoupon = await this._couponsService.getActiveCoupon();
    console.log(this.activeCoupon);

    this._changeDetectorRef.detectChanges();
  }
}
