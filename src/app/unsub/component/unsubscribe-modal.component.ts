import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { APP_ROUTE_URLS } from '../../shared/constants/routes.constant';

enum CONTROLS_NAME {
  CONFIRM = 'confirm',
}

@Component({
  selector: 'unsubscribe-modal',
  templateUrl: './unsubscribe-modal.component.html',
  styleUrls: ['./unsubscribe-modal.component.scss'],
})
export class UnsubscribeModalComponent {
  formGroup: FormGroup = new FormGroup({
    [CONTROLS_NAME.CONFIRM]: new FormControl(false),
  });

  CONTROLS_NAME: typeof CONTROLS_NAME = CONTROLS_NAME;

  isUnsubscribed: boolean = false;

  constructor (
    private _router: Router,
    private _modalController: ModalController,
  ) {
  }

  cancel (): void {
    this._modalController.dismiss();
  }

  success (): void {
    this.isUnsubscribed = true;
  }

  ok (): void {
    this._modalController.dismiss();

    this._router.navigate([`/${APP_ROUTE_URLS.COUPONS}`]);
  }
}
