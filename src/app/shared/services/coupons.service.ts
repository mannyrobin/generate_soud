import { Injectable } from '@angular/core';

import { COUPON_STATUSES } from '../constants/coupons.constant';

import { CouponsApiService } from './coupons.api.service';
import { DbService } from './db.service';

@Injectable({ providedIn: 'root' })
export class CouponsService {
  constructor (
    private _dbService: DbService,
    private _couponsApiService: CouponsApiService,
  ) {
  }

  async getActiveCoupon (): Promise<any> {
    const userData = await this._dbService.executeSql('SELECT * FROM user', []);

    if (!userData) {
      console.error('ERROR: no user in table');

      return false;
    }

    const coupons = await this._couponsApiService.getCouponsUser(userData.rows.item(0).uid).toPromise();

    return coupons.find(it => it.status === COUPON_STATUSES.ACTIVE);
  }
}
