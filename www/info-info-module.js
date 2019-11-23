(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["info-info-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"overlay\"></div>\n  <div class=\"wrap_of_main_structure wrap_height\">\n    <div class=\"right_content\">\n      <!--<div class=\"wrap_of_menu_small\">-->\n      <!--<a href=\"#\"><img src=\"assets/img/hamb.png\" alt=\"hamb\"></a>-->\n      <!--</div>-->\n      <div class=\"info_block\">\n        <div class=\"left_info\" [formGroup]=\"infoFormGroup\">\n          <h2>Information</h2>\n          <div class=\"left_bottom\">\n            <div class=\"left_bott_el\">\n              <p>{{ 'name' | translate }}</p>\n              <input type=\"text\" formControlName=\"name\">\n            </div>\n\n            <div class=\"left_bott_el\">\n              <p>{{ 'email' | translate }}</p>\n              <input type=\"text\" formControlName=\"email\">\n            </div>\n\n            <div class=\"left_bott_el\">\n              <p>{{ 'tel' | translate }}</p>\n              <input type=\"text\" formControlName=\"phone\">\n            </div>\n\n            <div class=\"left_bott_el\">\n              <p>{{ 'address' | translate }}</p>\n              <input type=\"text\" formControlName=\"address\">\n            </div>\n          </div>\n\n          <div class=\"left_card\">\n            <p>{{ 'bankCards' | translate }}</p>\n            <a class=\"txt_col_ plus_button\" (click)=\"unavailable()\">\n              <img src=\"assets/img/plus.png\" alt=\"plus\">\n              {{ 'addBankCards' | translate }}\n            </a>\n          </div>\n        </div>\n\n        <div class=\"right_info\">\n          <div class=\"inner_right_selection\">\n            <h2>{{ 'selectColor' | translate }} {{ color }}</h2>\n            <div class=\"choose_colors_block\">\n              <div class=\"choose_elem blue_col\" data-id=\"#0E1FC0\" data-back=\"backside.png\" data-plus=\"plus.png\"\n                   (click)=\"setColor('')\">\n                <img src=\"assets/img/acceptmark.png\" alt=\"acceptmark\" *ngIf=\"color == ''\">\n              </div>\n              <div class=\"choose_elem pink_col\" data-id=\"#E91E63\" data-back=\"pinkb.png\" data-plus=\"pluspink.png\"\n                   (click)=\"setColor('pink')\">\n                <img src=\"assets/img/acceptmark.png\" alt=\"acceptmark\" *ngIf=\"color == 'pink'\">\n              </div>\n              <div class=\"choose_elem  red_col\" data-id=\"#D50000\" data-back=\"redb.png\" data-plus=\"plusred.png\"\n                   (click)=\"setColor('red')\">\n                <img src=\"assets/img/acceptmark.png\" alt=\"acceptmark\" *ngIf=\"color == 'red'\">\n              </div>\n              <div class=\"choose_elem  purple_col\" data-id=\"#6A1B9A\" data-back=\"purpleb.png\" data-plus=\"pluspurple.png\"\n                   (click)=\"setColor('purple')\">\n                <img src=\"assets/img/acceptmark.png\" alt=\"acceptmark\" *ngIf=\"color == 'purple'\">\n              </div>\n              <div class=\"choose_elem green_col\" data-id=\"#00C853\" data-back=\"greenb.png\" data-plus=\"plusgreen.png\"\n                   (click)=\"setColor('green')\">\n                <img src=\"assets/img/acceptmark.png\" alt=\"acceptmark\" *ngIf=\"color == 'green'\">\n              </div>\n              <div class=\"choose_elem orange_col\" data-id=\"#FF5722\" data-back=\"orangeb.png\" data-plus=\"plusorange.png\"\n                   (click)=\"setColor('orange')\">\n                <img src=\"assets/img/acceptmark.png\" alt=\"acceptmark\" *ngIf=\"color == 'orange'\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"modal fade\" id=\"newCardModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n       aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"newcardblock\">\n          <div class=\"bank_header\">\n            <p>{{ 'addNewBankCard' | translate }}</p> <img src=\"img/visa.png\" alt=\"visa\">\n          </div>\n          <div class=\"bank_content\">\n            <div class=\"number_card\">\n              <p>{{ 'cardNumber' | translate }}</p>\n              <div class=\"wrap_number_card\">\n                <input type=\"text\" placeholder=\"****\" maxlength=\"4\">\n                <input type=\"text\" placeholder=\"****\" maxlength=\"4\">\n                <input type=\"text\" placeholder=\"****\" maxlength=\"4\">\n                <input type=\"text\" placeholder=\"****\" maxlength=\"4\">\n              </div>\n            </div>\n            <div class=\"bottom_cvv\">\n              <div class=\"surname_inp\">\n                <p>{{ 'nameSurname' | translate }}</p>\n                <input type=\"text\">\n              </div>\n\n              <div class=\"date_year\">\n                <p>{{ 'dateY' | translate }}</p>\n                <input type=\"text\" maxlength=\"5\">\n              </div>\n\n              <div class=\"cvc_inp\">\n                <p>{{ 'cvc' | translate }}</p>\n                <input type=\"text\" maxlength=\"3\t\">\n              </div>\n            </div>\n          </div>\n          <div class=\"bank_bottom_content\">\n            <a href=\"#\">{{ 'cancel' | translate }}</a>\n            <a href=\"#\">{{ 'addNewBankCard' | translate }}</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/info/info.module.ts":
/*!*************************************!*\
  !*** ./src/app/info/info.module.ts ***!
  \*************************************/
/*! exports provided: InfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPageModule", function() { return InfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _info_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./info.page */ "./src/app/info/info.page.ts");








var routes = [
    {
        path: '',
        component: _info_page__WEBPACK_IMPORTED_MODULE_7__["InfoPage"],
    },
];
var InfoPageModule = /** @class */ (function () {
    function InfoPageModule() {
    }
    InfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [_info_page__WEBPACK_IMPORTED_MODULE_7__["InfoPage"]],
        })
    ], InfoPageModule);
    return InfoPageModule;
}());



/***/ }),

/***/ "./src/app/info/info.page.scss":
/*!*************************************!*\
  !*** ./src/app/info/info.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrap_of_main_structure > .right_content, ion-menu > .right_content {\n  width: 75%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby9EOlxcQmFja3VwXFxEZXZlbG9wbWVudFxcV29ya19Kb2JzXFxGcmVlbGFuY2luZ1xcT3V0XFxBbmd1bGFyX3NvdW5kXFxBcmNoaXZlL3NyY1xcYXBwXFxpbmZvXFxpbmZvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaW5mby9pbmZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2luZm8vaW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcF9vZl9tYWluX3N0cnVjdHVyZSA+IC5yaWdodF9jb250ZW50LCBpb24tbWVudSA+IC5yaWdodF9jb250ZW50e1xuICB3aWR0aDogNzUlO1xufVxuIiwiLndyYXBfb2ZfbWFpbl9zdHJ1Y3R1cmUgPiAucmlnaHRfY29udGVudCwgaW9uLW1lbnUgPiAucmlnaHRfY29udGVudCB7XG4gIHdpZHRoOiA3NSU7XG59Il19 */");

/***/ }),

/***/ "./src/app/info/info.page.ts":
/*!***********************************!*\
  !*** ./src/app/info/info.page.ts ***!
  \***********************************/
/*! exports provided: InfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPage", function() { return InfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_db_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/services/db.service */ "./src/app/shared/services/db.service.ts");









var InfoPage = /** @class */ (function () {
    function InfoPage(menu, _alertController, storage, _dbService, _translateService) {
        this.menu = menu;
        this._alertController = _alertController;
        this.storage = storage;
        this._dbService = _dbService;
        this._translateService = _translateService;
        this.infoFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
        this.translations = {};
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    InfoPage.prototype.ngOnInit = function () {
        var _this = this;
        this._translateService.get(['error', 'codeError', 'notAvailable'])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroy$))
            .subscribe(function (values) {
            _this.translations = values;
        });
        this.menu.swipeGesture(false);
        this.menu.open();
        this.getUser();
        this.storage.get('color')
            .then(function (val) { return _this.color = val; });
    };
    InfoPage.prototype.ngOnDestroy = function () {
        this._destroy$.next();
        this._destroy$.complete();
    };
    InfoPage.prototype.ionViewWillEnter = function () {
        this.menu.swipeGesture(false);
        this.menu.open();
    };
    InfoPage.prototype.setColor = function (color) {
        this.storage.set('color', color);
        this.color = color;
    };
    InfoPage.prototype.unavailable = function () {
        this.alert(this.translations.error, this.translations.notAvailable);
    };
    InfoPage.prototype.alert = function (header, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._alertController.create({
                            header: header,
                            message: message,
                            buttons: ['OK'],
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    InfoPage.prototype.getUser = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var userData;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._dbService.executeSql('SELECT * FROM user', [])];
                    case 1:
                        userData = _a.sent();
                        if (!userData) {
                            console.error('ERROR: no user in table');
                            return [2 /*return*/];
                        }
                        if (userData.rows.length > 0) {
                            this.infoFormGroup.get('name').setValue(userData.rows.item(0).name + " " + userData.rows.item(0).last_name, { emitEvent: false });
                            this.infoFormGroup.get('email').setValue(userData.rows.item(0).email, { emitEvent: false });
                            this.infoFormGroup.get('phone').setValue(userData.rows.item(0).tel, { emitEvent: false });
                            this.infoFormGroup.get('address').setValue(userData.rows.item(0).address, { emitEvent: false });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    InfoPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
        { type: _shared_services_db_service__WEBPACK_IMPORTED_MODULE_8__["DbService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }
    ]; };
    InfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./info.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./info.page.scss */ "./src/app/info/info.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _shared_services_db_service__WEBPACK_IMPORTED_MODULE_8__["DbService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], InfoPage);
    return InfoPage;
}());



/***/ })

}]);
//# sourceMappingURL=info-info-module.js.map