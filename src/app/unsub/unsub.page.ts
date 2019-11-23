import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { UnsubscribeModalComponent } from './component/unsubscribe-modal.component';

@Component({
  selector: 'app-unsub',
  templateUrl: './unsub.page.html',
  styleUrls: ['./unsub.page.scss'],
})
export class UnsubPage implements OnInit {
  constructor (
    private _modalController: ModalController,
  ) { }

  ngOnInit (): void {
  }

  async onUnsubscribe (): Promise<void> {
    const modal = await this._modalController.create({
      component: UnsubscribeModalComponent,
      cssClass: 'unsubscribe',
    });

    return modal.present();
  }
}
