import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { SelectSubscriptionComponent } from './component/select-subscription.page';
import { CouponsPage } from './coupons.page';

const routes: Routes = [
  {
    path: '',
    component: CouponsPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
      TranslateModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    CouponsPage,
    SelectSubscriptionComponent,
  ],
  entryComponents: [
    SelectSubscriptionComponent,
  ],
})
export class CouponsPageModule {}
