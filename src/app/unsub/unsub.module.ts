import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { UnsubscribeModalComponent } from './component/unsubscribe-modal.component';
import { UnsubPage } from './unsub.page';

const routes: Routes = [
  {
    path: '',
    component: UnsubPage,
  },
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    TranslateModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    UnsubPage,
    UnsubscribeModalComponent,
  ],
  entryComponents: [
    UnsubscribeModalComponent,
  ],
})
export class UnsubPageModule {}
