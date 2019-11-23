(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"wrap_login\">\n    <div class=\"small_wrap_part\">\n      <h2>{{ \"haveAcc\" | translate }}</h2>\n      <p>{{ \"signUp\" | translate }}</p>\n\n      <a [routerLink]=\"'/' + APP_ROUTE_URLS.REGISTER\">\n        {{ \"signUpBtn\" | translate }}\n      </a>\n    </div>\n    <div class=\"long_wrap_part\">\n      <div class=\"header_long\">\n        <a href=\"#\">\n          <img src=\"assets/img/Logo.png\" alt=\"logo\">\n        </a>\n\n        <select (change)=\"changeLang($event.target.value)\">\n          <option\n            *ngFor=\"let language of APP_LANGUAGES\"\n            [value]=\"language.code\"\n            [selected]=\"language.code === selectedLang\">\n            {{ language.label }}\n          </option>\n        </select>\n      </div>\n\n      <div class=\"center_long\">\n        <h2>{{ \"enter\" | translate }}</h2>\n        <div class=\"form_center\">\n          <form action=\"\">\n            <div class=\"wrap_form\">\n              <p>{{ \"enterEmail\" | translate }}</p>\n              <ion-input type=\"email\" [(ngModel)]=\"email\" name=\"email\"></ion-input>\n            </div>\n            <div class=\"wrap_form\">\n              <p>{{ \"enterPass\" | translate }}</p>\n              <ion-input type=\"password\" [(ngModel)]=\"password\" name=\"password\"></ion-input>\n            </div>\n\n            <div class=\"wrap_form wrap_form_subm\">\n              <input type=\"submit\" value=\"{{'login' | translate}}\" (click)=\"tryLogin()\">\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_login_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/login.api.service */ "./src/app/login/services/login.api.service.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");









var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_8__["LoginPage"],
    },
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_8__["LoginPage"]],
            providers: [
                _services_login_api_service__WEBPACK_IMPORTED_MODULE_7__["LoginApiService"],
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media screen and (max-width: 1380px) and (orientation: landscape) {\n  input {\n    height: 60px !important;\n    max-height: 60px !important;\n    min-height: 60px !important;\n  }\n\n  .long_wrap_part .wrap_form > p {\n    font-size: 18px;\n    margin-bottom: 0;\n    font-weight: 400;\n  }\n\n  .long_wrap_part .center_long .wrap_form input[type=submit], .small_wrap_part > a {\n    font-size: 21px;\n    height: 60px;\n    min-height: 60px;\n  }\n\n  .long_wrap_part .center_long .wrap_form input[type=text],\n.long_wrap_part .center_long .wrap_form input[type=password],\n.long_wrap_part .center_long .wrap_form input[type=email],\n.long_wrap_part .center_long .wrap_form input[type=number] {\n    height: 60px !important;\n    min-height: 60px !important;\n    background-color: #ffffff !important;\n  }\n\n  .long_wrap_part .center_long > h2 {\n    font-size: 36px;\n    text-align: center;\n  }\n\n  .long_wrap_part .center_long .wrap_form input[type=submit] {\n    width: 100% !important;\n    min-width: 100% !important;\n    max-width: 100% !important;\n  }\n}\n.wrap_form_subm input {\n  background: #0E1FC0;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXEJhY2t1cFxcRGV2ZWxvcG1lbnRcXFdvcmtfSm9ic1xcRnJlZWxhbmNpbmdcXE91dFxcQW5ndWxhcl9zb3VuZFxcQXJjaGl2ZS9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBT0U7SUFDRSx1QkFBQTtJQUNBLDJCQUFBO0lBQ0EsMkJBQUE7RUNMRjs7RURPQTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0VDSkY7O0VETUE7SUFDRSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0VDSEY7O0VES0E7Ozs7SUFLRSx1QkFBQTtJQUNBLDJCQUFBO0lBQ0Esb0NBQUE7RUNIRjs7RURLQTtJQUNFLGVBQUE7SUFDQSxrQkFBQTtFQ0ZGOztFRElBO0lBQ0Usc0JBQUE7SUFDQSwwQkFBQTtJQUNBLDBCQUFBO0VDREY7QUFDRjtBRElBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzgwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSl7XG4gIC8vLmxvbmdfd3JhcF9wYXJ0IC5jZW50ZXJfbG9uZyB7XG4gIC8vICB3aWR0aDogNDUwcHg7XG4gIC8vICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIC8vICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgLy8gIHdpZHRoOiAxMDAlO1xuICAvL31cbiAgaW5wdXR7XG4gICAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogNjBweCAhaW1wb3J0YW50O1xuICAgIG1pbi1oZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbiAgfVxuICAubG9uZ193cmFwX3BhcnQgLndyYXBfZm9ybSA+IHAge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgLmxvbmdfd3JhcF9wYXJ0IC5jZW50ZXJfbG9uZyAud3JhcF9mb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0sIC5zbWFsbF93cmFwX3BhcnQgPiBhIHtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIH1cbiAgLmxvbmdfd3JhcF9wYXJ0IC5jZW50ZXJfbG9uZyAud3JhcF9mb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuICAubG9uZ193cmFwX3BhcnQgLmNlbnRlcl9sb25nIC53cmFwX2Zvcm0gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxuICAubG9uZ193cmFwX3BhcnQgLmNlbnRlcl9sb25nIC53cmFwX2Zvcm0gaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxuICAubG9uZ193cmFwX3BhcnQgLmNlbnRlcl9sb25nIC53cmFwX2Zvcm0gaW5wdXRbdHlwZT1cIm51bWJlclwiXVxuICB7XG4gICAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWluLWhlaWdodDogNjBweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgfVxuICAubG9uZ193cmFwX3BhcnQgLmNlbnRlcl9sb25nID4gaDIge1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmxvbmdfd3JhcF9wYXJ0IC5jZW50ZXJfbG9uZyAud3JhcF9mb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl17XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBtaW4td2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxufVxuXG4ud3JhcF9mb3JtX3N1Ym0gaW5wdXQge1xuICBiYWNrZ3JvdW5kOiAjMEUxRkMwO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbiIsIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzODBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIGlucHV0IHtcbiAgICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWluLWhlaWdodDogNjBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmxvbmdfd3JhcF9wYXJ0IC53cmFwX2Zvcm0gPiBwIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG5cbiAgLmxvbmdfd3JhcF9wYXJ0IC5jZW50ZXJfbG9uZyAud3JhcF9mb3JtIGlucHV0W3R5cGU9c3VibWl0XSwgLnNtYWxsX3dyYXBfcGFydCA+IGEge1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgbWluLWhlaWdodDogNjBweDtcbiAgfVxuXG4gIC5sb25nX3dyYXBfcGFydCAuY2VudGVyX2xvbmcgLndyYXBfZm9ybSBpbnB1dFt0eXBlPXRleHRdLFxuLmxvbmdfd3JhcF9wYXJ0IC5jZW50ZXJfbG9uZyAud3JhcF9mb3JtIGlucHV0W3R5cGU9cGFzc3dvcmRdLFxuLmxvbmdfd3JhcF9wYXJ0IC5jZW50ZXJfbG9uZyAud3JhcF9mb3JtIGlucHV0W3R5cGU9ZW1haWxdLFxuLmxvbmdfd3JhcF9wYXJ0IC5jZW50ZXJfbG9uZyAud3JhcF9mb3JtIGlucHV0W3R5cGU9bnVtYmVyXSB7XG4gICAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWluLWhlaWdodDogNjBweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5sb25nX3dyYXBfcGFydCAuY2VudGVyX2xvbmcgPiBoMiB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5sb25nX3dyYXBfcGFydCAuY2VudGVyX2xvbmcgLndyYXBfZm9ybSBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWluLXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi53cmFwX2Zvcm1fc3VibSBpbnB1dCB7XG4gIGJhY2tncm91bmQ6ICMwRTFGQzA7XG4gIGNvbG9yOiAjZmZmZmZmO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_constants_coupons_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/constants/coupons.constant */ "./src/app/shared/constants/coupons.constant.ts");
/* harmony import */ var _shared_constants_languages_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/constants/languages.constant */ "./src/app/shared/constants/languages.constant.ts");
/* harmony import */ var _shared_constants_routes_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/constants/routes.constant */ "./src/app/shared/constants/routes.constant.ts");
/* harmony import */ var _shared_services_db_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/services/db.service */ "./src/app/shared/services/db.service.ts");
/* harmony import */ var _services_login_api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/login.api.service */ "./src/app/login/services/login.api.service.ts");













var LoginPage = /** @class */ (function () {
    function LoginPage(alertController, storage, router, menu, translateService, platform, _dbService, _loginApiService) {
        this.alertController = alertController;
        this.storage = storage;
        this.router = router;
        this.menu = menu;
        this.translateService = translateService;
        this.platform = platform;
        this._dbService = _dbService;
        this._loginApiService = _loginApiService;
        this.translations = {};
        this.selectedLang = _shared_constants_languages_constant__WEBPACK_IMPORTED_MODULE_9__["APP_LANGUAGES"][0].code;
        this.APP_LANGUAGES = _shared_constants_languages_constant__WEBPACK_IMPORTED_MODULE_9__["APP_LANGUAGES"];
        this.APP_ROUTE_URLS = _shared_constants_routes_constant__WEBPACK_IMPORTED_MODULE_10__["APP_ROUTE_URLS"];
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    LoginPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.storage.get('lang')];
                    case 1:
                        _a.selectedLang = _b.sent();
                        this.translateService.get(['error', 'noUser', 'notAvailable'])
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroy$))
                            .subscribe(function (values) {
                            _this.translations = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, values);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.ngOnDestroy = function () {
        this._destroy$.next();
        this._destroy$.complete();
    };
    LoginPage.prototype.changeLang = function (data) {
        this.translateService.use(data);
        this.storage.set('lang', data);
    };
    LoginPage.prototype.tryLogin = function () {
        var _this = this;
        if (!this.email || !this.password) {
            this.alert(this.translations.error, this.translations.enterData);
        }
        this._loginApiService.login({
            email: this.email,
            password: this.password,
        })
            .subscribe(function (response) {
            if (response.code === 500) {
                _this.alert(_this.translations.error, response.msg);
                return;
            }
            if (response.code === 200 && response.msg !== 'success') {
                _this.alert(_this.translations.error, _this.translations.noUser);
                return;
            }
            _this.menu.enable(true, 'first');
            _this.user = response.data;
            _this.storage.set('user', _this.user);
            _this.saveUser(_this.user);
            if (_this.user.coupons.length) {
                _this.storage.set('upack', _this.user.coupons[0].pack);
                if (_this.user.coupons[0].status === _shared_constants_coupons_constant__WEBPACK_IMPORTED_MODULE_8__["COUPON_STATUSES"].ACTIVE) {
                    _this.router.navigate(["/" + _shared_constants_routes_constant__WEBPACK_IMPORTED_MODULE_10__["APP_ROUTE_URLS"].PLAYER]);
                    _this.menu.enable(true, 'first');
                    return;
                }
                _this.router.navigate(["/" + _shared_constants_routes_constant__WEBPACK_IMPORTED_MODULE_10__["APP_ROUTE_URLS"].COUPONS]);
                _this.menu.open('first');
                return;
            }
            _this.router.navigate(["/" + _shared_constants_routes_constant__WEBPACK_IMPORTED_MODULE_10__["APP_ROUTE_URLS"].PLAYER]);
        });
    };
    LoginPage.prototype.saveUser = function (user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._dbService.executeSql('INSERT INTO user(uid, name, email, address, tel, last_name) VALUES (?, ?, ?, ?, ?, ?)', [user.id, user.name, user.email, user.address, user.phone, user.last_name])
                            .catch(function (error) { return console.error('Error! Can not save user' + error); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.alert = function (header, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
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
    LoginPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _shared_services_db_service__WEBPACK_IMPORTED_MODULE_11__["DbService"] },
        { type: _services_login_api_service__WEBPACK_IMPORTED_MODULE_12__["LoginApiService"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _shared_services_db_service__WEBPACK_IMPORTED_MODULE_11__["DbService"],
            _services_login_api_service__WEBPACK_IMPORTED_MODULE_12__["LoginApiService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ }),

/***/ "./src/app/login/services/login.api.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/login/services/login.api.service.ts ***!
  \*****************************************************/
/*! exports provided: LoginApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginApiService", function() { return LoginApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/constants/api.constant */ "./src/app/shared/constants/api.constant.ts");
/* harmony import */ var _shared_models_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/models/user.model */ "./src/app/shared/models/user.model.ts");






var LoginApiService = /** @class */ (function () {
    function LoginApiService(_http) {
        this._http = _http;
    }
    LoginApiService.prototype.login = function (_a) {
        var email = _a.email, password = _a.password;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
            fromObject: {
                email: email,
                password: password,
            },
        });
        return this._http.get(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_4__["API_ENDPOINT"] + "/" + _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_4__["API_USER"] + "/" + _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_4__["API_LOGIN"], { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response.data) {
                response = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, response, { data: new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_5__["UserModel"](response.data) });
            }
            return response;
        }));
    };
    LoginApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    LoginApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginApiService);
    return LoginApiService;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map