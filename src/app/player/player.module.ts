import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { LanguageModalComponent } from '../shared/components/language-modal/language-modal.component';

import { PlaylistComponent } from './components/playlist/playlist.component';
import { CategoryPipe } from './pipes/category.pipe';
import { OrderBy } from './pipes/order-by.pipe';
import { FormatTimePipe } from './pipes/time-format.pipe';
import { PlayerPage } from './player.page';
import { PlayerSoundService } from './services/play-sound.service';
import { PlayerApiService } from './services/player.api.service';

const routes: Routes = [
  {
    path: '',
    component: PlayerPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule,
    RouterModule.forChild(routes),
    DragDropModule,
  ],
  declarations: [
    PlayerPage,
    FormatTimePipe,
    OrderBy,
    CategoryPipe,
    LanguageModalComponent,
    PlaylistComponent,
  ],
  entryComponents: [
    LanguageModalComponent,
    PlaylistComponent,
  ],
  providers: [
    PlayerApiService,
    PlayerSoundService,
  ],
})
export class PlayerPageModule {
}
