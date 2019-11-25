import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { CouponsApiService } from '../shared/services/coupons.api.service';
import { DbService } from '../shared/services/db.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryPage implements OnInit {
  public coupons: any[];

  public convertToTkTime(orgDate: any) {
    let date = new Date(orgDate);
    console.log(date);
    date.setHours(date.getHours() + 9);     // convert from (GMT+00:00) to (GMT+09:00)
    return `${date.getFullYear()}-${date.getMonth()<9?'0':''}${date.getMonth() + 1}-${date.getDate()<10?'0':''}${date.getDate()}
        ${date.getHours()<10?'0':''}${date.getHours()}:${date.getMinutes()<10?'0':''}${date.getMinutes()}:${date.getSeconds()<10?'0':''}${date.getSeconds()}`;
  }

  constructor (
    private _changeDetectorRef: ChangeDetectorRef,
    private _dbService: DbService,
    private _couponsApiService: CouponsApiService,
  ) {
  }

  ngOnInit (): void {
    this.init();
  }

  getCouponsUser (uid: string): void {
    this._couponsApiService.getCouponsUser(uid)
      .subscribe(data => {
        this.coupons = data;

        this._changeDetectorRef.detectChanges();
      });
  }

  private async init (): Promise<void> {
    const userData = await this._dbService.executeSql('SELECT * FROM user', []);

    if (!userData) {
      console.error('ERROR: no user in table');

      return;
    }

    if (userData.rows.length > 0) {
      this.getCouponsUser(userData.rows.item(0).uid);
    }
  }
}
