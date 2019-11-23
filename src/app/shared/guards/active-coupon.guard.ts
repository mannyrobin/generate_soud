import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

import { APP_ROUTE_URLS } from '../constants/routes.constant';
import { CouponsApiService } from '../services/coupons.api.service';
import { CouponsService } from '../services/coupons.service';

@Injectable({
  providedIn: 'root',
})
export class ActiveCouponGuard implements CanActivate {
  constructor (
    private _router: Router,
    private _couponsApiService: CouponsApiService,
    private _couponsService: CouponsService,
  ) {
  }

  async canActivate (
    route: ActivatedRouteSnapshot,
  ): Promise<boolean> {
    const activeCoupon = await this._couponsService.getActiveCoupon();

    if (!activeCoupon) {
      this._router.navigate([`/${APP_ROUTE_URLS.COUPONS}`]);

      return false;
    }

    return true;
  }
}
