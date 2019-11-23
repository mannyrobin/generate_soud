import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_ENDPOINT, API_USER } from '../constants/api.constant';
import { COUPON_STATUSES } from '../constants/coupons.constant';

import { DbService } from './db.service';

@Injectable({ providedIn: 'root' })
export class CouponsApiService {
  constructor (
    private _http: HttpClient,
    private _dbService: DbService,
    ) {
  }

  getCouponsUser (id: string): Observable<any> {
    const params = new HttpParams({
      fromObject: {
        id,
      },
    });

    return this._http.get(`${API_ENDPOINT}/${API_USER}/getCoupons`, { params });
  }
}
