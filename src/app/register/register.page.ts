import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { APP_LANGUAGES, ILanguage } from '../shared/constants/languages.constant';
import { APP_ROUTE_URLS } from '../shared/constants/routes.constant';
import { ITranslations } from '../shared/interfaces/translations.interface';
import { UserModel } from '../shared/models/user.model';
import { DbService } from '../shared/services/db.service';
import { passwordMatchValidator } from '../shared/validators/validators';

import { RegisterApiService } from './services/register.api.service';

enum CONTROLS_NAME {
  NAME             = 'first_name',
  LAST_NAME        = 'last_name',
  ADDRESS          = 'address',
  PHONE            = 'phone',
  CODE             = 'code',
  EMAIL            = 'email',
  PASSWORD         = 'password',
  CONFIRM_PASSWORD = 'confirm_password',
}

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPage implements OnInit, OnDestroy {
  formGroup: FormGroup = new FormGroup({});

  CONTROLS_NAME: typeof CONTROLS_NAME = CONTROLS_NAME;

  translations: ITranslations = {};
  isShowInvoiceModal: boolean = false;

  selectedLang: string                  = APP_LANGUAGES[0].code;
  APP_LANGUAGES: ILanguage[]            = APP_LANGUAGES;
  APP_ROUTE_URLS: typeof APP_ROUTE_URLS = APP_ROUTE_URLS;

  private readonly _destroy$: Subject<void> = new Subject<void>();

  constructor (
    private _alertController: AlertController,
    private _router: Router,
    private _menu: MenuController,
    private _translateService: TranslateService,
    private _storage: Storage,
    private _dbService: DbService,
    private _registerApiService: RegisterApiService,
  ) {
  }

  ngOnInit (): void {
    this._translateService.get(['error', 'passError', 'tryLater', 'addAllData', 'allOk', 'accRgistered'])
      .pipe(takeUntil(this._destroy$))
      .subscribe(values => this.translations = values);

    const passwordControl        = new FormControl(null, [Validators.required, Validators.minLength(6)]);
    const passwordConfirmControl = new FormControl(
      '',
      [Validators.required, Validators.minLength(6), passwordMatchValidator(passwordControl)],
    );

    passwordControl.valueChanges
      .pipe(takeUntil(this._destroy$))
      .subscribe(() => {
        passwordConfirmControl.updateValueAndValidity({ onlySelf: true });
      });

    this.formGroup = new FormGroup({
      [CONTROLS_NAME.NAME]: new FormControl(null, [Validators.required]),
      [CONTROLS_NAME.LAST_NAME]: new FormControl(null, [Validators.required]),
      [CONTROLS_NAME.ADDRESS]: new FormControl(null, [Validators.required]),
      [CONTROLS_NAME.PHONE]: new FormControl(null, [Validators.pattern(/^(\+)?\d{11,}$/)]),
      [CONTROLS_NAME.CODE]: new FormControl(null, [Validators.required]),
      [CONTROLS_NAME.EMAIL]: new FormControl(
        null,
        [Validators.required, Validators.pattern(/^[a-zA-Z0-9_\-\.]+@[a-zA-Z0-9_\-\.]+(\.){1}[a-zA-Z]{2,4}$/)],
      ),
      [CONTROLS_NAME.PASSWORD]: passwordControl,
      [CONTROLS_NAME.CONFIRM_PASSWORD]: passwordConfirmControl,
    });
  }

  ngOnDestroy (): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  controlHasError (controlName: string): boolean {
    const control = this.formGroup.get(controlName);

    return control.dirty && control.invalid;
  }

  tryRegister (): void {
    this._registerApiService.register(this.formGroup.value)
      .subscribe(response => {
        this.saveUser(response.data);

        this.isShowInvoiceModal = true;

        this._router.navigate([`/${APP_ROUTE_URLS.COUPONS}`]);

        this._menu.enable(true, 'first');
        this._menu.open('first');
      });
  }

  async alert (header: string, message: string): Promise<void> {
    const alert = await this._alertController.create({
      header,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentAlertConfirm (): Promise<void> {
    const alert = await this._alertController.create({
      header: this.translations.allOk,
      message: this.translations.accRgistered,
      buttons: [
        {
          text: 'Ок',
          handler: () => {
            this._router.navigate([`/${APP_ROUTE_URLS.COUPONS}`]);
            this._menu.enable(true, 'first');
            this._menu.open('first');
          },
        },
      ],
    });

    await alert.present();
  }

  async saveUser (user: UserModel): Promise<void> {
    await this._dbService.executeSql(
      'INSERT INTO user(uid, name, email) VALUES (?, ?, ?)',
      [user.id, user.name, user.email],
    )
      .catch(error => console.error('Error! Can not save user' + error));
  }

  changeLang (lang: string): void {
    this._translateService.use(lang);
    this._storage.set('lang', lang);
  }
}
