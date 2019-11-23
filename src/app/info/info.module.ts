import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { InfoPage } from './info.page';

const routes: Routes = [
  {
    path: '',
    component: InfoPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
      TranslateModule,
    RouterModule.forChild(routes),
  ],
  declarations: [InfoPage],
})
export class InfoPageModule {}
