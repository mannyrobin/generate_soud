import { CdkDragDrop, CdkDropList, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit, Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { forkJoin, Subject, throwError } from 'rxjs';
import { catchError, takeUntil } from 'rxjs/operators';
import * as uuid from 'uuid';

import { COUPON_STATUSES } from '../../../shared/constants/coupons.constant';
import { ITranslations } from '../../../shared/interfaces/translations.interface';
import { UserModel } from '../../../shared/models/user.model';
import { MixModel, PlaylistModel } from '../../model/playlist.model';
import { SoundModel } from '../../model/sound.model';
import { PlayerSoundService } from '../../services/play-sound.service';
import { PlayerApiService } from '../../services/player.api.service';

enum CONTROLS_NAME {
  PLAYLIST = 'playlist',
}

export interface IPlaylistEvent {
  selectedSounds: SoundModel[];
  soundList: SoundModel[];
}

@Component({
  selector: 'playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'g-flex',
  },
})
export class PlaylistComponent implements OnInit, OnChanges, OnDestroy {
  @Input() user: UserModel;
  @Input() customDuration: number;
  @Input() draggedFilteredSounds: CdkDropList;
  @Input() copiedSounds: SoundModel[] = [];

  @Output() selectSound: EventEmitter<IPlaylistEvent> = new EventEmitter<IPlaylistEvent>();
  @Output() resetSound: EventEmitter<void>            = new EventEmitter<void>();
  @Output() copyPlaylistSound: EventEmitter<{ copiedSounds: SoundModel[], copiedMixes: MixModel[] }>
                                                      = new EventEmitter();

  @ViewChild('playlistTextarea', { static: false }) playlistTextarea: ElementRef<HTMLTextAreaElement>;
  @ViewChild('playlistDraggedSoundListElm', { static: false }) playlistDraggedSoundList: CdkDropList;
  @ViewChild('playlistDraggedMixesListElm', { static: false }) playlistDraggedMixesList: CdkDropList;

  playlists: PlaylistModel[];
  selectedItemSounds: SoundModel[];
  selectedItemMixes: MixModel[];
  color: string;
  selectedItemId: number;
  copiedMixes: MixModel[]      = [];
  selectedSounds: SoundModel[] = [];
  selectedMixes: MixModel[]    = [];
  countOfMixesSounds: number   = 0;

  playlistFormGroup: FormGroup = new FormGroup({
    [CONTROLS_NAME.PLAYLIST]: new FormControl(),
  });

  CONTROLS_NAME: typeof CONTROLS_NAME = CONTROLS_NAME;

  private _translations: ITranslations = {};

  private readonly _destroy$: Subject<void> = new Subject<void>();

  constructor (
    private _changeDetectorRef: ChangeDetectorRef,
    private _storage: Storage,
    private _loadingController: LoadingController,
    private _alertController: AlertController,
    private _translateService: TranslateService,
    private _playerApiService: PlayerApiService,
    private _playerSoundService: PlayerSoundService,
  ) {
  }

  async ngOnInit (): Promise<void> {
    this.load('Загрузка');

    this._translateService.get(['max5'])
      .pipe(takeUntil(this._destroy$))
      .subscribe(values => {
        this._translations = values;
      });

    await this.getColor();
  }

  async ngOnChanges ({ user, customDuration }: SimpleChanges): Promise<void> {
    if (user && this.user) {
      await this.getPlayLists();

      this._loadingController.dismiss();
    }

    if (customDuration) {
      this.selectedSounds.forEach(sound => {
        sound.duration = this.customDuration;
      });

      this.selectedMixes.forEach(mix => {
        mix.duration = this.customDuration;
      });
    }
  }

  ngOnDestroy (): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  dropItem (event: CdkDragDrop<any[]>): void {
    moveItemInArray(this.playlists, event.previousIndex, event.currentIndex);
  }

  dropMix (event: CdkDragDrop<any[]>): void {
    if (!this.selectedItemId) {
      return;
    }

    this.resetSound.emit();

    moveItemInArray(this.selectedItemMixes, event.previousIndex, event.currentIndex);

    this._changeDetectorRef.detectChanges();
  }

  dropSound (event: CdkDragDrop<any[]>): void {
    if (!this.selectedItemId) {
      return;
    }

    this.resetSound.emit();

    if (event.container !== event.previousContainer) {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );

      this.selectedItemSounds = this._playerSoundService.updateSelectedSoundsUuid(
        this.selectedItemSounds,
        this.selectedSounds,
      );

      this.updateSounds();

      return;
    }

    moveItemInArray(this.selectedItemSounds, event.previousIndex, event.currentIndex);

    this.updateSounds();

    this._changeDetectorRef.detectChanges();
  }

  selectItem (item: PlaylistModel): void {
    this.selectedItemId     = item.id;
    this.selectedItemSounds = item.sounds.map(it => (new SoundModel({ ...it, uuid: uuid.v4() })));
    this.selectedItemMixes  = item.mixes.map(it => {
      this.countOfMixesSounds = this.countOfMixesSounds + it.sounds.length;

      return new MixModel({
        ...it,
        duration: it.sounds[0] ? it.sounds[0].duration : 0,
        uuid: uuid.v4(),
      });
    });
    this.selectedSounds     = [];

    this.playlistFormGroup.get(CONTROLS_NAME.PLAYLIST).setValue(item.name, { emitEvent: false });

    this.resetSound.emit();
  }

  onAddPlaylist (): void {
    this.load('Загрузка');

    this._playerApiService.addPlaylist({
      user_id: this.user.uid,
      name: this.playlistFormGroup.get(CONTROLS_NAME.PLAYLIST).value,
      status: COUPON_STATUSES.ACTIVE,
      trash: 0,
    })
      .subscribe(async () => {
        await this.getPlayLists();

        this.playlistFormGroup.get(CONTROLS_NAME.PLAYLIST).setValue(null, { emitEvent: false });

        await this._loadingController.dismiss();
      });
  }

  onEditPlaylist (id: number): void {
    this.load('Загрузка');

    this._playerApiService.renamePlaylist({
      id,
      name: this.playlistFormGroup.get(CONTROLS_NAME.PLAYLIST).value,
    })
      .subscribe(async () => {
        await this.getPlayLists();

        await this._loadingController.dismiss();
      });
  }

  onDeletePlaylist (): void {
    this._playerApiService.deletePlaylist({
      id: this.selectedItemId,
    })
      .pipe(
        catchError(({ error }) => {
          console.error('error', error);

          return throwError(error);
        }),
      )
      .subscribe(async () => {
        this.selectedSounds     = [];
        this.selectedMixes      = [];
        this.selectedItemMixes  = [];
        this.selectedItemSounds = [];

        await this.getPlayLists();

        this.playlistFormGroup.get(CONTROLS_NAME.PLAYLIST).setValue(null, { emitEvent: false });

        this._changeDetectorRef.detectChanges();
      });
  }

  copySounds (): void {
    this.copiedSounds = [];
    this.copiedMixes  = [];

    if (!this.selectedSounds.length && !this.selectedMixes.length) {
      this.copiedSounds = [...this.copiedSounds, ...this.selectedItemSounds];
      this.copiedMixes  = [...this.copiedMixes, ...this.selectedItemMixes];
    }

    if (!this.selectedSounds.length && this.selectedMixes.length) {
      this.copiedMixes = [...this.copiedMixes, ...this.selectedMixes];
    }

    if (this.selectedSounds.length && !this.selectedMixes.length) {
      this.copiedSounds = [...this.copiedSounds, ...this.selectedSounds];
    }

    if (this.selectedSounds.length && this.selectedMixes.length) {
      this.copiedSounds = [...this.copiedSounds, ...this.selectedSounds];
      this.copiedMixes  = [...this.copiedMixes, ...this.selectedMixes];
    }

    this.copyPlaylistSound.emit({ copiedSounds: this.copiedSounds, copiedMixes: this.copiedMixes });
  }

  pasteSounds (): void {
    if (this.copiedSounds) {
      this.selectedItemSounds = [...this.selectedItemSounds, ...this.copiedSounds]
        .map(it => (new SoundModel({ ...it, uuid: uuid.v4() })));

      this.updateSounds();
    }

    if (this.copiedMixes) {
      this.selectedItemMixes = [...this.selectedItemMixes, ...this.copiedMixes]
        .map(it => (new MixModel({ ...it, uuid: uuid.v4() })));

      const requests = [];

      this.copiedMixes.forEach(mix => {
        requests.push(
          this._playerApiService.addMix({
            id: this.selectedItemId,
            sounds_id: mix.sounds.map(it => it.id).join(','),
          }),
        );

        forkJoin(requests)
          .pipe(
            catchError(({ error }) => {
              console.error('error', error);

              return throwError(error);
            }),
          )
          .subscribe(async () => {
            await this.finalizeMixOperation();
          });
      });
    }

    this.copiedSounds   = [];
    this.selectedSounds = [];
    this.copiedMixes    = [];
    this.selectedMixes  = [];

    this.copyPlaylistSound.emit({ copiedSounds: this.copiedSounds, copiedMixes: this.copiedMixes });

  }

  changeSelectedMixes (mix: MixModel, event: MouseEvent): void {
    event.stopPropagation();

    const foundMix = this.selectedMixes.find(it => it.uuid === mix.uuid);

    if (!foundMix) {
      if (this.selectedMixes.length >= 5) {
        this.alert('', this._translations.max5);

        return;
      }

      this.selectedMixes.push(mix);

      this.emitSelectedSounds();

      return;
    }

    this.selectedMixes = this.selectedMixes.filter(it => it.uuid !== mix.uuid);

    this.emitSelectedSounds();
  }

  changeSelectedSounds (sound: SoundModel, event: MouseEvent): void {
    event.stopPropagation();

    const foundSound = this.selectedSounds.find(it => it.uuid === sound.uuid);

    if (!foundSound) {
      if (this.selectedSounds.length >= 5) {
        this.alert('', this._translations.max5);

        return;
      }

      this.selectedSounds.push(sound);

      this.emitSelectedSounds();

      return;
    }

    this.selectedSounds = this.selectedSounds.filter(it => it.uuid !== sound.uuid);

    this.emitSelectedSounds();
  }

  saveMix (): void {
    this.load('Загрузка');

    let request;

    if (this.selectedMixes.length && this.selectedSounds.length) {
      request = this._playerApiService.addMixSounds({
        id: this.selectedMixes[0].id,
        sounds_id: this.selectedSounds.map(sound => sound.id).join(','),
      });
    } else {
      request = this._playerApiService.addMix({
        id: this.selectedItemId,
        sounds_id: this.selectedSounds.map(sound => sound.id).join(','),
      });
    }

    request
      .pipe(
        catchError(({ error }) => {
          console.error('error', error);

          return throwError(error);
        }),
      )
      .subscribe(async () => {
        await this.finalizeMixOperation();
      });
  }

  resetMix (): void {
    this.load('Загрузка');

    const requests = this.selectedMixes.map(it => {
      return this._playerApiService.resetMix({
        id: it.id,
      });
    });

    forkJoin(requests)
      .pipe(
        catchError(({ error }) => {
          console.error('error', error);

          return throwError(error);
        }),
      )
      .subscribe(async () => {
        await this.finalizeMixOperation();
      });
  }

  private emitSelectedSounds (): void {
    const mixesSounds = this.selectedMixes.map(mix => mix.sounds);

    this.selectSound.emit({
      selectedSounds: [
        ...this._playerSoundService.getSoundsFromSelectedMixes(this.selectedMixes),
        ...this.selectedSounds,
      ],
      soundList: this.selectedItemSounds,
    });
  }

  private async finalizeMixOperation (): Promise<void> {
    await this.getPlayLists();

    const item = this.playlists.find(it => this.selectedItemId === it.id);
    this.selectItem(item);

    this.selectedMixes      = [];
    this.selectedSounds     = [];
    this.countOfMixesSounds = 0;

    this._changeDetectorRef.detectChanges();

    await this._loadingController.dismiss();
  }

  private async load (message: string): Promise<void> {
    const loading = await this._loadingController.create({
      message,
      duration: 0,
    });

    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

  private async alert (header: string, message: string): Promise<void> {
    const alert = await this._alertController.create({
      header,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  private getColor (): Promise<void> {
    return new Promise<void>(resolve => {
      this._storage.get('color')
        .then(val => {
          this.color = val;

          resolve();

          this._changeDetectorRef.detectChanges();
        });
    });
  }

  private getPlayLists (): Promise<void> {
    // return new Promise<void>(resolve => {
    //   this._playerApiService.getPlayLists()
    //     .subscribe(data => {
    //       this.playlists = data.list.filter(it => it.user_id === this.user.uid);
    //
    //       resolve();
    //
    //       this._changeDetectorRef.detectChanges();
    //     });
    // });

    return new Promise<void>(resolve => {
      this._playerApiService.getUserPlayList(this.user.uid)
        .subscribe(data => {
          this.playlists = data.list;

          resolve();

          this._changeDetectorRef.detectChanges();
        });
    });
  }

  private updateSounds (): void {
    this._playerApiService.addPlayListSound({
      id: this.selectedItemId,
      sounds_id: this.selectedItemSounds.map(sound => sound.id).join(','),
    })
      .pipe(
        catchError(({ error }) => {
          console.error('error', error);

          return throwError(error);
        }),
      )
      .subscribe(async () => {
        // await this.getCourses();
        // await this.getSounds();
        await this.getPlayLists();

        this._changeDetectorRef.detectChanges();
      });
  }
}
