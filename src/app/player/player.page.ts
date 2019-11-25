import { CdkDragDrop, CdkDropList, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController, MenuController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of, Subject, throwError, timer } from 'rxjs';
import { catchError, finalize, map, takeUntil, takeWhile, tap } from 'rxjs/operators';
import * as uuid from 'uuid';

import { LanguageModalComponent } from '../shared/components/language-modal/language-modal.component';
import { COUPON_STATUSES } from '../shared/constants/coupons.constant';
import { APP_ROUTE_URLS } from '../shared/constants/routes.constant';
import { ITranslations } from '../shared/interfaces/translations.interface';
import { UserModel } from '../shared/models/user.model';
import { DbService } from '../shared/services/db.service';
import { CouponsApiService } from '../shared/services/coupons.api.service';

import { IPlaylistEvent, PlaylistComponent } from './components/playlist/playlist.component';
import { MixModel } from './model/playlist.model';
import { SoundModel } from './model/sound.model';
import { PlayerSoundService } from './services/play-sound.service';
import { PlayerApiService } from './services/player.api.service';

enum CONTROLS_NAME {
  CATEGORY    = 'category',
  COURSE      = 'course',
  CUSTOM_TIME = 'custom_time',
  RANGE       = 'range',
}

const DURATION_TICK = 1000;

@Component({
  selector: 'app-player',
  templateUrl: './player.page.html',
  styleUrls: ['./player.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerPage implements OnInit, OnDestroy {
  get currentSound (): string {
    if (!this.selectedSounds.length) {
      this.playerFormGroup.get(CONTROLS_NAME.RANGE).disable({ emitEvent: false });

      return '';
    }

    this.playerFormGroup.get(CONTROLS_NAME.RANGE).enable({ emitEvent: false });

    return this.selectedSounds.map(sound => sound.name).join(', ');
  }

  get isSwitchButtonsDisabled (): boolean {
    return !this.selectedSounds.length ||
      this.selectedSounds.length > 1 ||
      (this.soundList && this.soundList.length <= 1) ||
      !this.playerSoundService.isSomePlaying;
  }

  get isDisableCourseCreate (): boolean {
    return this.isOfficialCategorySelected ||
      this.isOfficialCourseSelected ||
      !this.selectedCategoryId ||
      !this.playerFormGroup.get(CONTROLS_NAME.COURSE).value ||
      !this.playerFormGroup.get(CONTROLS_NAME.COURSE).value.trim();
  }

  get selectedSoundsMaxDuration (): number {
    return Math.max(...this.selectedSounds.map(it => it.duration), 0);
  }

  get customDuration (): number {
    return this.playerFormGroup.get(CONTROLS_NAME.CUSTOM_TIME).valid
      ? this.playerFormGroup.get(CONTROLS_NAME.CUSTOM_TIME).value
      : 0;
  }

  @ViewChild(PlaylistComponent, { static: false })
  set playlistContentChild (playlistComponent: PlaylistComponent) {
    if (this.draggedFilteredSounds) {
      this.draggedFilteredSounds.connectedTo = playlistComponent
        ? playlistComponent.playlistDraggedSoundList
        : this.draggedFilteredSounds.connectedTo = this.draggedSoundList;
    }
  }

  @ViewChild('draggedSoundListElm', { static: false }) draggedSoundList: CdkDropList;
  @ViewChild('draggedFilteredSoundsElm', { static: false }) draggedFilteredSounds: CdkDropList;

  selectedCategoryId: any;
  coupons: any[];
  categories: any[];
  countDown: Observable<number>;
  color: string;
  soundList: SoundModel[];
  filteredSounds: SoundModel[];
  selectedSounds: SoundModel[]        = [];
  copiedSounds: SoundModel[]          = [];
  copiedMixes: MixModel[]             = [];
  officialCategoriesId: string[]      = [];
  userOwnCategoryCourses: any[]       = [];
  officialCategoryCourses: any[]      = [];
  selectedCourse: string              = '';
  isOfficialCourseSelected: boolean   = false;
  isOfficialCategorySelected: boolean = false;
  userOwnCategoriesId: string[]       = [];
  isPlaylistOpened: boolean           = false;
  totalDuration: number               = 0;
  isRangeChange: boolean              = false;
  
  playerFormGroup: FormGroup = new FormGroup({
    [CONTROLS_NAME.CATEGORY]: new FormControl(),
    [CONTROLS_NAME.COURSE]: new FormControl(),
    [CONTROLS_NAME.CUSTOM_TIME]: new FormControl(null, Validators.pattern('^[0-9]*$')),
    [CONTROLS_NAME.RANGE]: new FormControl(0),
  });

  APP_ROUTE_URLS: typeof APP_ROUTE_URLS = APP_ROUTE_URLS;
  CONTROLS_NAME: typeof CONTROLS_NAME   = CONTROLS_NAME;

  private courses: any[];
  private upack: string;
  private user: UserModel;
  private sounds: SoundModel[];
  private settings: any[];
  private availableSoundsArray: string[] = [];
  private translations: ITranslations    = {};
  private counter: number                = 0;

  private readonly _destroy$: Subject<void> = new Subject<void>();

  constructor (
    private _changeDetectorRef: ChangeDetectorRef,
    private _renderer: Renderer2,
    private _dbService: DbService,
    private _modalController: ModalController,
    private alertController: AlertController,
    private menu: MenuController,
    private translateService: TranslateService,
    public loadingController: LoadingController,
    public storage: Storage,
    private _playerApiService: PlayerApiService,
    public playerSoundService: PlayerSoundService,
    private _playerSoundService: PlayerSoundService,
    private _couponApiService: CouponsApiService,
  ) {
    this.translateService.get(['error', 'noCourse', 'max5', 'notMoveToOfficial'])
      .pipe(takeUntil(this._destroy$))
      .subscribe(values => {
        this.translations = values;
      });

    this.load('Загрузка');
  }

  dropCategory (event: CdkDragDrop<any[]>): void {
    moveItemInArray(this.userOwnCategoriesId, event.previousIndex, event.currentIndex);
  }

  dropCourse (event: CdkDragDrop<any[]>): void {
    moveItemInArray(this.userOwnCategoryCourses, event.previousIndex, event.currentIndex);
  }

  dropSound (event: CdkDragDrop<any[]>): void {
    if (!this.selectedCategoryId && !this.isOfficialCourseSelected) {
      return;
    }

    this.resetSounds();

    if (this.isOfficialCourseSelected) {
      if (event.container !== event.previousContainer) {
        this.alert(this.translations.error, this.translations.notMoveToOfficial);
      }

      moveItemInArray(this.soundList, event.previousIndex, event.currentIndex);

      return;
    }

    if (event.container !== event.previousContainer) {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );

      this.soundList = this.playerSoundService.updateSelectedSoundsUuid(this.soundList, this.selectedSounds);

      const selectedCourse = this.getCourseById(this.selectedCourse);

      this.updateSounds();

      return;
    }

    moveItemInArray(this.soundList, event.previousIndex, event.currentIndex);

    this.updateSounds();

    this._changeDetectorRef.detectChanges();
  }

  ngOnInit (): void {
    this.playerFormGroup.get(CONTROLS_NAME.COURSE).disable({ emitEvent: false });

    this.playerFormGroup.get(CONTROLS_NAME.CUSTOM_TIME).setValue(null, { emitEvent: false });

    this.playerFormGroup.get(CONTROLS_NAME.CUSTOM_TIME)
      .valueChanges
      .pipe(takeUntil(this._destroy$))
      .subscribe((duration: number) => {
        if (!this.selectedSounds.length ||
          duration <= 0 ||
          this.playerFormGroup.get(CONTROLS_NAME.CUSTOM_TIME).invalid) {
          return;
        }

        this.selectedSounds.forEach(sound => {
          sound.duration = duration;
        });

        this.counter = 0;
      });

    this.getColor();
  }

  ngOnDestroy (): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  ionViewDidEnter (): void {
    this.loadData();
  }

  async changeLanguage (): Promise<void> {
    const modal = await this._modalController.create({
      component: LanguageModalComponent,
      cssClass: 'change-language',
    });

    return modal.present();
  }

  onEditCategory (): void {
    this.load('Загрузка');

    const selectedCategory = this.getCategoryById(this.selectedCategoryId);
    selectedCategory.name  = this.playerFormGroup.get(CONTROLS_NAME.CATEGORY).value;

    this._playerApiService.renameCategory({
      id: selectedCategory.id,
      name: selectedCategory.name,
    })
      .subscribe(() => {
        this.loadingController.dismiss();
      });
  }

  onAddCategory (): void {
    this.load('Загрузка');

    this._playerApiService.addCategory({
      name: this.playerFormGroup.get(CONTROLS_NAME.CATEGORY).value,
      status: COUPON_STATUSES.ACTIVE,
      created_user_id: this.user.id,
      user_id: this.user.uid,
      official: 0,
    })
      .subscribe(async () => {
        await this.getCategories();
        await this.reload();

        this.playerFormGroup.get(CONTROLS_NAME.CATEGORY).setValue(null, { emitEvent: false });

        this.loadingController.dismiss();

        this._changeDetectorRef.detectChanges();
      });
  }

  onDeleteCategory (): void {
    this.load('Загрузка');

    this._playerApiService.deleteCategory({
      id: this.selectedCategoryId,
    })
      .subscribe(async () => {
        this.userOwnCategoryCourses  = [];
        this.officialCategoryCourses = [];
        this.soundList               = [];

        await this.getCategories();
        await this.reload();

        this.loadingController.dismiss();

        this._changeDetectorRef.detectChanges();
      });
  }

  onEditCourse (): void {
    this.load('Загрузка');

    const selectedCourse = this.getCourseById(this.selectedCourse);
    selectedCourse.name  = this.playerFormGroup.get(CONTROLS_NAME.COURSE).value;

    this._playerApiService.renameCourse({
      id: selectedCourse.id,
      name: selectedCourse.name,
    })
      .subscribe(() => {
        this.loadingController.dismiss();
      });
  }

  onAddCourse (): void {
    this.load('Загрузка');

    this._playerApiService.addCourse({
      name: this.playerFormGroup.get(CONTROLS_NAME.COURSE).value,
      status: COUPON_STATUSES.ACTIVE,
      official: 0,
      user_id: this.user.uid,
      created_user_id: this.user.uid,
      cat_id: this.selectedCategoryId,
    })
      .subscribe(async () => {
        await this.getCategories();
        await this.getCourses();
        await this.reload();
        this.filterCourses(this.selectedCategoryId, false);

        this.playerFormGroup.get(CONTROLS_NAME.COURSE).setValue(null, { emitEvent: false });

        this.loadingController.dismiss();

        this._changeDetectorRef.detectChanges();
      });
  }

  onDeleteCourse (): void {
    this.load('Загрузка');

    this._playerApiService.deleteCourse({
      id: this.selectedCourse,
    })
      .subscribe(async () => {
        this.soundList = [];

        await this.getCategories();
        await this.getCourses();
        await this.reload();
        this.filterCourses(this.selectedCategoryId, false);

        this.loadingController.dismiss();

        this._changeDetectorRef.detectChanges();
      });
  }

  switchPlaylist (): void {
    this.resetSounds();

    this.isPlaylistOpened = !this.isPlaylistOpened;
    this.selectedSounds   = [];
    this.soundList        = [];
  }

  copySounds (): void {
    if (this.copiedSounds.length !== 0 || this.copiedMixes.length !== 0) {
      this.copiedSounds = [];
      this.copiedMixes = [];
      return;
    }

    this.copiedSounds = this.selectedSounds.length
      ? [...this.selectedSounds]
      : [...this.soundList];
  }

  onCopyPlaylistSound ({ copiedSounds, copiedMixes }: { copiedSounds: SoundModel[], copiedMixes: MixModel[] }): void {
    // if (copiedSounds && copiedMixes) {
    //   this.copiedSounds = [
    //     ...copiedSounds,
    //     ...this._playerSoundService.getSoundsFromSelectedMixes(copiedMixes),
    //   ];
    //
    //   return;
    // }
    //
    // if (copiedSounds) {
    //   this.copiedSounds = [...copiedSounds];
    // }
    //
    // if (copiedMixes) {
    //   this.copiedSounds = [...this._playerSoundService.getSoundsFromSelectedMixes(copiedMixes)];
    // }

    this.copiedSounds = [...copiedSounds];
    this.copiedMixes  = [...copiedMixes];

    this._changeDetectorRef.detectChanges();
  }

  pasteSounds (): void {
    this.soundList = [...this.soundList, ...this.copiedSounds];

    if (this.copiedMixes) {
      this.soundList = [...this.soundList, ...this._playerSoundService.getSoundsFromSelectedMixes(this.copiedMixes)];
    }

    this.soundList = this.soundList.map(it => ({ ...it, uuid: uuid.v4() }));

    this.copiedSounds   = [];
    this.selectedSounds = [];
    this.copiedMixes    = [];

    this.updateSounds();
  }

  pauseSelectedSounds (): void {
    this.selectedSounds.forEach(sound => {
      this.playerSoundService.stopSound(sound);
    });

    this.countDown = of(this.counter);

    this.playerFormGroup.get(CONTROLS_NAME.CUSTOM_TIME).enable({ emitEvent: false });
  }

  playSelectedSounds (): void {
    if (this.selectedSounds.length >= 5) {
      this.alert('', this.translations.max5);

      return;
    }

    this.setSoundDuration(this.selectedSounds[0]);
    this.startCountDown();

    this.selectedSounds.forEach(sound => {
      this.playerSoundService.playSound(sound);
    });

    this.playerFormGroup.get(CONTROLS_NAME.CUSTOM_TIME).disable({ emitEvent: false });
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  changeSelectedSounds (sound: SoundModel, event: MouseEvent): void {
    event.stopPropagation();

    const foundSound = this.selectedSounds.find(it => it.uuid === sound.uuid);

    if (!foundSound) {
      this.selectedSounds.push(sound);

      if (this.playerSoundService.isSomePlaying) {
        this.playerSoundService.playSound(sound);
      } else {
        this.setCustomTime(this.selectedSoundsMaxDuration);
        this.setSoundDuration(this.selectedSounds[0]);
      }

      return;
    }

    this.selectedSounds = this.selectedSounds.filter(it => it.uuid !== sound.uuid);

    if (this.playerSoundService.isSoundPlaying(sound.uuid)) {
      this.playerSoundService.stopSound(sound);

      this.playerFormGroup.get(CONTROLS_NAME.CUSTOM_TIME).enable({ emitEvent: false });
    } else {
      this.setCustomTime(this.selectedSoundsMaxDuration);
      this.setSoundDuration(this.selectedSounds[0]);
    }

    if (!this.selectedSounds.length) {
      this.resetSounds();
    }
  }

  removeSound (sound: SoundModel): void {    
    this.soundList = this.soundList.filter(it => it.uuid !== sound.uuid);
    
    this.updateSounds();    
  }

  setCourse (course: any): void {
    const id = course.id;

    this.resetSounds();

    if (this.selectedCourse === id) {
      this.selectedCourse           = undefined;
      this.soundList                = undefined;
      this.isOfficialCourseSelected = false;

      return;
    }

    this.isOfficialCourseSelected = course.official === 'on';

    if (!this.isOfficialCourseSelected) {
      this.playerFormGroup.get(CONTROLS_NAME.COURSE).setValue(course.name, { emitEvent: false });
    } else {
      this.playerFormGroup.get(CONTROLS_NAME.COURSE).setValue(null, { emitEvent: false });
    }

    if (!this.isOfficialCourseSelected) {
      this.playerFormGroup.get(CONTROLS_NAME.COURSE).enable({ emitEvent: false });
    } else {
      this.playerFormGroup.get(CONTROLS_NAME.COURSE).disable({ emitEvent: false });
    }

    this.selectedCourse = id;

    for (const course of this.courses) {
      if (course.id === id) {
        this.soundList = course.sounds.map(it => {
          return new SoundModel({ ...it, uuid: uuid.v4() });
        });
      }
    }
  }

  filterCourses (id: string, isReset: boolean = true): void {
    this.resetSounds();

    if (isReset && Number(id) === Number(this.selectedCategoryId)) {
      this.selectedCategoryId      = undefined;
      this.selectedCourse          = undefined;
      this.soundList               = undefined;
      this.userOwnCategoryCourses  = [];
      this.officialCategoryCourses = [];

      return;
    }

    const selectedCategory = this.getCategoryById(id);

    this.isOfficialCategorySelected = selectedCategory.official === 'on';

    if (!this.isOfficialCategorySelected) {
      this.playerFormGroup.get(CONTROLS_NAME.CATEGORY).setValue(selectedCategory.name, { emitEvent: false });
      this.playerFormGroup.get(CONTROLS_NAME.COURSE).enable({ emitEvent: false });
    } else {
      this.playerFormGroup.get(CONTROLS_NAME.CATEGORY).setValue(null, { emitEvent: false });
      this.playerFormGroup.get(CONTROLS_NAME.COURSE).disable({ emitEvent: false });
    }

    this.selectedCategoryId = Number(id);
    this.soundList          = null;
    this.selectedCourse     = null;

    this.userOwnCategoryCourses = this.courses.filter(course => {
      return course.categories
        && course.official !== 'on'
        && course.categories.length
        && (course.categories[0].id === this.selectedCategoryId
          || (course.categories[1] && course.categories[1].id === this.selectedCategoryId));
    });

    this.officialCategoryCourses = this.courses.filter(course => {
      return course.categories
        && course.official === 'on'
        && course.categories.length
        && (course.categories[0].id === this.selectedCategoryId
          || (course.categories[1] && course.categories[1].id === this.selectedCategoryId));
    });
  }

  openMenu (): void {
    this.menu.open('first');
  }

  // direction:
  //    0 - previous
  //    1 - next
  autoPlay (direction: number): void {
    const playingSoundIndex = this.soundList.findIndex(
      sound => this.playerSoundService.playingSounds.indexOf(sound.uuid) !== -1,
    );

    const currentPlayingSound = this.soundList[playingSoundIndex];

    if (this.playerSoundService.isSoundPlaying(currentPlayingSound.uuid)) {
      this.playerSoundService.stopSound(currentPlayingSound);
    }

    if (direction === 0) {
      this.selectedSounds = playingSoundIndex === 0
        ? [this.soundList[this.soundList.length - 1]]
        : [this.soundList[playingSoundIndex - 1]];
    }

    if (direction === 1) {
      this.selectedSounds = playingSoundIndex === this.soundList.length - 1
        ? [this.soundList[0]]
        : [this.soundList[playingSoundIndex + 1]];
    }

    this.counter = 0;
    this.setSoundDuration(this.selectedSounds[0]);

    this.playerSoundService.playSound(this.selectedSounds[0]);

    this.playerFormGroup.get(CONTROLS_NAME.CUSTOM_TIME).disable({ emitEvent: false });

    this._changeDetectorRef.detectChanges();
  }

  async reload (): Promise<void> {
    if (!this.settings) {
      await this.getSettings();

      return;
    }

    const ownCategoriesId     = this.getOwnCategoriesId();
    const availableCats       = this.settings[`${this.upack}_cats`].value;
    this.userOwnCategoriesId  = [...ownCategoriesId];
    this.officialCategoriesId = this.getOfficialCategoriesId();

    if (this.sounds) {
      const availableSounds = this.settings[`${this.upack}_sounds`].value.split(',');

      this.availableSoundsArray = availableSounds
        .map(id => this.sounds.find(it => it.id === Number(id)))
        .map(it => it.uuid);
    }
  }

  getItems (event: any): void {
    const val = event.target.value;

    if (val && val.trim() !== '') {
      this.filteredSounds = this.sounds.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });

      return;
    }

    this.getSounds();
  }

  onPlaylistSoundChange ({ selectedSounds, soundList }: IPlaylistEvent): void {
    let isSomePlaying = false;

    if (this.playerSoundService.isSomePlaying) {
      this.selectedSounds.forEach(sound => {
        this.playerSoundService.stopSound(sound);
      });

      isSomePlaying = true;
    }

    this.selectedSounds = selectedSounds;
    this.soundList      = soundList;

    if (isSomePlaying) {
      selectedSounds.forEach(sound => {
        this.playerSoundService.playSound(sound);
      });
    }
  }

  onTouchStartRange (): void {
    this.isRangeChange = true;
  }

  onTouchEndRange (): void {
    this.isRangeChange = false;
  }

  onChangeRange ({ detail }: CustomEvent): void {
    if (this.isRangeChange) {
      const duration = this.totalDuration - Math.round((detail.value / 100) * this.totalDuration);
      this.countDown = of(duration);
      this.counter   = duration;
      // this.isRangeChange = false;

      // if (this._playerSoundService.isSomePlaying) {
      //   this.startCountDown();
      // }
    }
  }

  private updateSounds (): void {
    this.load('Загрузка');

    this._playerApiService.addSounds({
      id: this.selectedCourse,
      sounds_id: this.soundList.map(sound => sound.id).join(','),
    })
      .pipe(
        catchError(({ error }) => {
          console.error('error', error);

          return throwError(error);
        }),
      )
      .subscribe(async () => {
        await this.getCourses();
        await this.getSounds();
        this.loadingController.dismiss();
        this._changeDetectorRef.detectChanges();
      });
  }

  private setCustomTime (time: number): void {
    this.playerFormGroup.get(CONTROLS_NAME.CUSTOM_TIME).setValue(time, { emitEvent: false });
  }

  private getColor (): Promise<void> {
    return new Promise<void>(resolve => {
      this.storage.get('color')
        .then(val => {
          this.color = val;

          resolve();

          this._changeDetectorRef.detectChanges();
        });
    });
  }

  private async getUser (): Promise<void> {
    const userData = await this._dbService.executeSql('SELECT * FROM user', []);

    if (!userData) {
      console.error('ERROR: no user in table');

      return;
    }

    if (userData.rows.length > 0) {
      this.user = new UserModel(userData.rows.item(0));
    }

    this._changeDetectorRef.detectChanges();
  }

  private getPack (): Promise<void> {
    return new Promise<void>(resolve => {
      this.storage.get('upack')
        .then(val => {
          this.upack = val;

          resolve();

          this._changeDetectorRef.detectChanges();
        });
    });
  }

  private async alert (header: string, message: string): Promise<void> {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  private async load (message: string): Promise<void> {
    const loading = await this.loadingController.create({
      message,
      duration: 0,
    });

    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

  private getSounds (): Promise<void> {
    return new Promise<void>(resolve => {
      this._playerApiService.getSounds()
        .subscribe(sounds => {
          this.sounds = sounds;

          this.reload();

          if (this.availableSoundsArray.length !== 0) {
            this.filteredSounds = this.sounds.filter(sound => this.availableSoundsArray.indexOf(sound.uuid) !== -1);
          }

          resolve();

          this._changeDetectorRef.detectChanges();
        });
    });
  }

  private getSettings (): Promise<void> {
    return new Promise<void>(resolve => {
      this._playerApiService.getSettings()
        .subscribe(data => {
          this.settings = data;

          this.reload();
          this.getSounds();

          resolve();

          this._changeDetectorRef.detectChanges();
        });
    });
  }

  private getCourses (): Promise<void> {
    return new Promise<void>(resolve => {
      this._playerApiService.getCourses()
        .subscribe(data => {
          this.courses = data.list;

          resolve();

          this._changeDetectorRef.detectChanges();
        });
    });
  }

  private getCoupons (): Promise<void> {
    return new Promise<void>(resolve => {
      this._couponApiService.getCouponsUser(this.user.uid.toString())
        .subscribe(data => {
          this.coupons = data;

          resolve();

          this._changeDetectorRef.detectChanges();
        });
    });
  }

  private getCategories (): Promise<void> {
    let couponTypes = {salon_pack_cats: false, advanced_pack_cats: false, beauty_health_pack_cats: false};
    const groupKeys = ['salon_pack_cats', 'advanced_pack_cats', 'beauty_health_pack_cats'];

    this.coupons.forEach(coupon => {
      couponTypes[coupon.pack + "_cats"] = true;
    });

    return new Promise<void>(resolve => {
      this._playerApiService.getGroupedCategories()
        .subscribe(data => {
          let groupCategories = data;
          let categories = [], flag = {};

          groupKeys.forEach(groupKey => {
            if (couponTypes[groupKey] === true){
              groupCategories[groupKey].values.forEach((category:any) => {
                if (flag[category.id] !== true) {
                  flag[category.id] = true;
                  categories.push(category);
                }
              });
            }
          });
          this.categories = categories;

          resolve();

          this._changeDetectorRef.detectChanges();
        });
    });
  }

  private resetSounds (): void {
    this.playerFormGroup.get(CONTROLS_NAME.CUSTOM_TIME).enable({ emitEvent: false });

    if (this.playerSoundService.isSomePlaying) {
      this.selectedSounds.forEach(sound => {
        this.playerSoundService.stopSound(sound);
      });
    }

    this.counter        = 0;
    this.selectedSounds = [];
    this.countDown      = of(0);

    this.playerFormGroup.get(CONTROLS_NAME.RANGE).setValue(0, { emitEvent: false });
  }

  private setSoundDuration ({ duration }: any): void {
    const customDurationControl = this.playerFormGroup.get(CONTROLS_NAME.CUSTOM_TIME);

    const soundDuration = customDurationControl.valid && customDurationControl.value
      ? customDurationControl.value * 60
      : duration * 60;

    this.counter = this.counter ? this.counter : soundDuration;

    this.totalDuration = Number(soundDuration);
    this.countDown     = of(this.totalDuration);

    this.playerFormGroup.get(CONTROLS_NAME.RANGE).setValue(0, { emitEvent: false });
  }

  private startCountDown (): void {
    this.countDown = timer(0, DURATION_TICK)
      .pipe(
        takeWhile(t => this.counter > 0),
        map(() => --this.counter),
        tap(count => {
          const rangeValue = Math.round((1 - count / this.totalDuration) * 100);

          this.playerFormGroup.get(CONTROLS_NAME.RANGE).setValue(rangeValue, { emitEvent: false });
        }),
        finalize(() => {
          if (this.playerSoundService.isSomePlaying && this.counter === 0) {
            if (this.soundList.length > 1) {
              this.autoPlay(1);
            } else {
              this.pauseSelectedSounds();

              this.counter       = 0;
              this.countDown     = of(0);
              this.totalDuration = 0;

              this.playerFormGroup.get(CONTROLS_NAME.RANGE).setValue(0, { emitEvent: false });

              this._changeDetectorRef.detectChanges();
            }
          }
        }),
      );
  }

  private getCategoryById (id: any): any {
    return this.categories.find(category => category.id === Number(id));
  }

  private getCourseById (id: any): any {
    return this.courses.find(course => course.id === Number(id));
  }

  private findSoundById (id: number): SoundModel {
    return this.sounds.find(sound => sound.id === id);
  }

  private findSoundByUuid (uuid: string): any {
    return this.soundList.find(sound => sound.uuid === uuid);
  }

  private getOfficialCategoriesId (): string[] {
    return this.categories
      .filter(category => category.user_id === 0 && category.official === 'on')
      .map(category => String(category.id));
  }

  private getOwnCategoriesId (): string[] {
    return this.categories
      .filter(category => category.user_id === this.user.uid && category.official !== 'on')
      .map(category => String(category.id));
  }

  private async loadData (): Promise<void> {
    await this.getPack();
    await this.getUser();
    await this.getCoupons();

    if (!this.user) {
      return;
    }

    await this.getCategories();
    await this.getSettings();
    await this.getCourses();
    await this.getSounds();

    if (this.loadingController) {
      this.loadingController.dismiss();
    }
  }
}
