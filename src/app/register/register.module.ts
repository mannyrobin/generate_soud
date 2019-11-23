import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { NgxMaskIonicModule } from 'ngx-mask-ionic';
import { NgxPopperModule } from 'ngx-popper';

import { RegisterPage } from './register.page';
import { RegisterApiService } from './services/register.api.service';

const routes: Routes = [
  {
    path: '',
    component: RegisterPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule,
    NgxMaskIonicModule,
    NgxPopperModule,
    RouterModule.forChild(routes),
  ],
  declarations: [RegisterPage],
  providers: [
    RegisterApiService,
  ],
  entryComponents: [],
})
export class RegisterPageModule {
}
