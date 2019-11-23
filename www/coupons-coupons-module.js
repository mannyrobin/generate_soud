(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coupons-coupons-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coupons/component/select-subscription.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coupons/component/select-subscription.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrap_of_main_structure\">\n  <div class=\"right_content\">\n    <ng-container class=\"coupone_block\">\n      <div class=\"header_coupone\">\n        <h2>{{ \"coupon\" | translate }}</h2>\n\n        <div class=\"status_coupone\">\n          <div class=\"active_status {{statusClass}}\"></div>\n        </div>\n\n        <div class=\"after_status_\">\n          <p>{{ page }} {{ 'step4' | translate }}</p>\n        </div>\n      </div>\n\n      <div [ngSwitch]=\"page\">\n        <!-- page 1 -->\n        <div\n          *ngSwitchCase=\"1\"\n          class=\"choose_coupone\">\n          <p>{{ 'selectSubscribe' | translate }}</p>\n\n          <div class=\"outer_choose_coupone\">\n            <div class=\"elem_choose_coupone\" (click)=\"setCoupon(1)\">\n              <div class=\"choose_coupone_head\">\n                <a>\n                  <span>Beauty &amp; Health Pack</span>\n                </a>\n              </div>\n\n              <div class=\"choose_coupone_content\">\n                <ul>\n                  <li><span><img src=\"assets/img/checkmar.png\" alt=\"checkmar\"></span>Возможо слушать звуки в фоновом и\n                    офлайн-режиме\n                  </li>\n                  <li><span><img src=\"assets/img/checkmar.png\" alt=\"checkmar\"></span>Без рекламы</li>\n                  <li><span><img src=\"assets/img/checkmar.png\" alt=\"checkmar\"></span>Возможо слушать звуки в фоновом и\n                    офлайн-режиме\n                  </li>\n                  <li><span><img src=\"assets/img/checkmar.png\" alt=\"checkmar\"></span>Без рекламы</li>\n                  <li><span><img src=\"assets/img/checkmar.png\" alt=\"checkmar\"></span>Возможо слушать звуки в фоновом и\n                    офлайн-режиме\n                  </li>\n                </ul>\n              </div>\n            </div>\n\n            <div class=\"elem_choose_coupone\" (click)=\"setCoupon(2)\">\n              <div class=\"choose_coupone_head\">\n                <a>\n                  <span>Salon Pack</span>\n                </a>\n              </div>\n\n              <div class=\"choose_coupone_content\">\n                <ul>\n                  <li><span><img src=\"assets/img/checkmar.png\" alt=\"checkmar\"></span>Возможо слушать звуки в фоновом и\n                    офлайн-режиме\n                  </li>\n                  <li><span><img src=\"assets/img/checkmar.png\" alt=\"checkmar\"></span>Без рекламы</li>\n                  <li><span><img src=\"assets/img/checkmar.png\" alt=\"checkmar\"></span>Возможо слушать звуки в фоновом и\n                    офлайн-режиме\n                  </li>\n                  <li><span><img src=\"assets/img/checkmar.png\" alt=\"checkmar\"></span>Без рекламы</li>\n                  <li><span><img src=\"assets/img/checkmar.png\" alt=\"checkmar\"></span>Возможо слушать звуки в фоновом и\n                    офлайн-режиме\n                  </li>\n                </ul>\n              </div>\n            </div>\n\n            <div class=\"elem_choose_coupone\" (click)=\"setCoupon(3)\">\n              <div class=\"choose_coupone_head\">\n                <a>\n                  <span>Advanced Pack</span>\n                </a>\n              </div>\n\n              <div class=\"choose_coupone_content\">\n                <ul>\n                  <li><span><img src=\"assets/img/checkmar.png\" alt=\"checkmar\"></span>Возможо слушать звуки в фоновом и\n                    офлайн-режиме\n                  </li>\n                  <li><span><img src=\"assets/img/checkmar.png\" alt=\"checkmar\"></span>Без рекламы</li>\n                  <li><span><img src=\"assets/img/checkmar.png\" alt=\"checkmar\"></span>Возможо слушать звуки в фоновом и\n                    офлайн-режиме\n                  </li>\n                  <li><span><img src=\"assets/img/checkmar.png\" alt=\"checkmar\"></span>Без рекламы</li>\n                  <li><span><img src=\"assets/img/checkmar.png\" alt=\"checkmar\"></span>Возможо слушать звуки в фоновом и\n                    офлайн-режиме\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- page 2 -->\n        <div\n          *ngSwitchCase=\"2\"\n          class=\"choose_coupone\">\n          <p>{{ 'subscribeTime' | translate }}</p>\n\n          <div class=\"outer_choose_time\">\n            <div class=\"inner_choose_time\">\n              <div class=\"elem_choose_time\" (click)=\"setTerm(1)\">\n                <p>1 {{ 'day' | translate }}</p>\n              </div>\n\n              <div class=\"elem_choose_time\" (click)=\"setTerm(2)\">\n                <p>1 {{ 'week' | translate }}</p>\n              </div>\n\n              <div class=\"elem_choose_time\" (click)=\"setTerm(3)\">\n                <p>1 {{ 'month' | translate }}</p>\n              </div>\n\n              <div class=\"elem_choose_time\" (click)=\"setTerm(4)\">\n                <p>1 {{ 'year' | translate }}</p>\n              </div>\n            </div>\n\n            <div class=\"after_buttons_time\">\n              <a (click)=\"goToPage(1)\">\n                <img src=\"assets/img/backarr.png\" alt=\"backarr\">\n                {{ 'back' | translate }}\n              </a>\n            </div>\n          </div>\n        </div>\n\n        <!-- page 3 -->\n        <div\n          *ngSwitchCase=\"3\"\n          class=\"choose_coupone\">\n          <p>{{ 'payMethod' | translate }}</p>\n\n          <div class=\"outer_choose_time outer_choose_payment\">\n            <div class=\"card_block\">\n              <a (click)=\"unavailable()\" class=\"elem_of_card_block\">\n                <p>{{ 'bankCard' | translate }}</p>\n              </a>\n              <a (click)=\"unavailable()\" class=\"elem_of_card_block\">\n                <p>{{ 'bankTrans' | translate }}</p>\n              </a>\n              <a (click)=\"goToPage(6)\" class=\"elem_of_card_block\">\n                <p>{{ 'haveCode' | translate }}</p>\n              </a>\n            </div>\n\n            <div class=\"after_buttons_time\">\n              <a (click)=\"goToPage(2)\">\n                <img src=\"assets/img/backarr.png\" alt=\"backarr\">\n                {{ 'back' | translate }}\n              </a>\n            </div>\n          </div>\n        </div>\n\n        <!-- page 6 -->\n        <div\n          *ngSwitchCase=\"6\"\n          class=\"choose_coupone\">\n          <p>{{ 'couponCode' | translate }}</p>\n          <br>\n          <div class=\"outer_choose_time outer_choose_payment remove_height_payment\">\n            <div class=\"coupone_sale\">\n              <p>{{ 'couponCode' | translate }}</p>\n\n              <input type=\"text\" [(ngModel)]=\"code\">\n            </div>\n\n            <div class=\"after_buttons_time\">\n              <a (click)=\"goToPage(3)\">\n                <img src=\"assets/img/backarr.png\" alt=\"backarr\">\n                {{ 'back' | translate }}\n              </a>\n\n              <a (click)=\"checkCode()\">\n                {{ 'next' | translate }}\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coupons/coupons.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coupons/coupons.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"content g-flex-column\">\n    <div class=\"g-flex-column__item g-flex\">\n      <ng-container *ngIf=\"activeCoupon; else noCouponTpl\">\n        <div class=\"g-flex-column\">\n          <div class=\"title\">{{ activeCoupon.packname }}</div>\n\n          <div class=\"status g-flex g-flex--align-center\">\n            <div class=\"status__title\">Статус:</div>\n\n            <div>{{ activeCoupon.status }}</div>\n          </div>\n\n          <div class=\"status g-flex g-flex--align-center\">\n            <div class=\"status__title\">Тип купона:</div>\n\n            <div>{{ activeCoupon.expires }}</div>\n          </div>\n\n          <div class=\"available g-flex g-flex--align-center\">\n            <div class=\"available__title\">Срок действия купона:</div>\n\n            <div>{{ activeCoupon.date_expires | date:'dd.MM.yyyy HH:mm' }}</div>\n          </div>\n        </div>\n      </ng-container>\n\n      <ng-template #noCouponTpl>\n        <div class=\"g-flex-column g-flex--justify-center\" style=\"width: 100%\">\n          <div class=\"no-coupons\">У вас нет активных купонов</div>\n        </div>\n      </ng-template>\n    </div>\n\n\n    <button\n      class=\"btn-select-subscription g-flex-column__item-fixed\"\n      [disabled]=\"activeCoupon && activeCoupon.status === COUPON_STATUSES.ACTIVE\"\n      (click)=\"selectSubscription()\">\n      {{ 'buyCoupon' | translate }}\n    </button>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/coupons/component/select-subscription.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/coupons/component/select-subscription.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdXBvbnMvY29tcG9uZW50L3NlbGVjdC1zdWJzY3JpcHRpb24ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/coupons/component/select-subscription.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/coupons/component/select-subscription.page.ts ***!
  \***************************************************************/
/*! exports provided: SelectSubscriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectSubscriptionComponent", function() { return SelectSubscriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var SelectSubscriptionComponent = /** @class */ (function () {
    function SelectSubscriptionComponent(alertController, translateService, _modalController) {
        var _this = this;
        this.alertController = alertController;
        this.translateService = translateService;
        this._modalController = _modalController;
        this.page = 1;
        this.code = '';
        this.statusClass = '';
        this.translations = {};
        this.coupon = 0;
        this.term = 0;
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.translateService.get(['error', 'codeError', 'notAvailable'])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroy$))
            .subscribe(function (values) {
            _this.translations = values;
        });
    }
    SelectSubscriptionComponent.prototype.ngOnInit = function () {
        this.updateStatus();
    };
    SelectSubscriptionComponent.prototype.ngOnDestroy = function () {
        this._destroy$.next();
        this._destroy$.complete();
    };
    SelectSubscriptionComponent.prototype.setCoupon = function (id) {
        this.coupon = id;
        this.page = 2;
        this.updateStatus();
    };
    SelectSubscriptionComponent.prototype.setTerm = function (term) {
        this.term = term;
        this.page = 3;
        this.updateStatus();
    };
    SelectSubscriptionComponent.prototype.goToPage = function (page) {
        this.page = page;
        this.updateStatus();
    };
    SelectSubscriptionComponent.prototype.checkCode = function () {
        this.alert(this.translations.error, this.translations.codeError);
    };
    SelectSubscriptionComponent.prototype.unavailable = function () {
        this.alert(this.translations.error, this.translations.notAvailable);
    };
    SelectSubscriptionComponent.prototype.alert = function (header, message) {
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
    SelectSubscriptionComponent.prototype.updateStatus = function () {
        switch (this.page) {
            case 1:
                this.statusClass = '';
                break;
            case 2:
                this.statusClass = 'half_status';
                break;
            case 3:
                this.statusClass = 'more_half_status';
                break;
            case 6:
                this.statusClass = 'full_percents';
                break;
        }
    };
    SelectSubscriptionComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    SelectSubscriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'select-subscription',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select-subscription.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/coupons/component/select-subscription.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./select-subscription.page.scss */ "./src/app/coupons/component/select-subscription.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], SelectSubscriptionComponent);
    return SelectSubscriptionComponent;
}());



/***/ }),

/***/ "./src/app/coupons/coupons.module.ts":
/*!*******************************************!*\
  !*** ./src/app/coupons/coupons.module.ts ***!
  \*******************************************/
/*! exports provided: CouponsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponsPageModule", function() { return CouponsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _component_select_subscription_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/select-subscription.page */ "./src/app/coupons/component/select-subscription.page.ts");
/* harmony import */ var _coupons_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./coupons.page */ "./src/app/coupons/coupons.page.ts");









var routes = [
    {
        path: '',
        component: _coupons_page__WEBPACK_IMPORTED_MODULE_8__["CouponsPage"],
    },
];
var CouponsPageModule = /** @class */ (function () {
    function CouponsPageModule() {
    }
    CouponsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [
                _coupons_page__WEBPACK_IMPORTED_MODULE_8__["CouponsPage"],
                _component_select_subscription_page__WEBPACK_IMPORTED_MODULE_7__["SelectSubscriptionComponent"],
            ],
            entryComponents: [
                _component_select_subscription_page__WEBPACK_IMPORTED_MODULE_7__["SelectSubscriptionComponent"],
            ],
        })
    ], CouponsPageModule);
    return CouponsPageModule;
}());



/***/ }),

/***/ "./src/app/coupons/coupons.page.scss":
/*!*******************************************!*\
  !*** ./src/app/coupons/coupons.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  height: 100%;\n  padding: 40px 60px;\n}\n\n.title {\n  font-size: 32px;\n  font-weight: 600;\n}\n\n.no-coupons {\n  align-self: center;\n  font-size: 22px;\n  font-weight: 600;\n}\n\n.status,\n.available {\n  margin-top: 12px;\n  font-size: 22px;\n}\n\n.status__title,\n.available__title {\n  margin-right: 6px;\n  font-weight: 600;\n}\n\n.btn-select-subscription {\n  margin: 0 auto;\n  font-size: 17px;\n  line-height: 21px;\n  background-color: #0E1FC0;\n  height: 60px;\n  color: #ffffff;\n  font-weight: 400;\n  width: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-left: 15px;\n  padding-right: 15px;\n  text-align: center;\n  border-radius: 5px;\n  border: 1px solid #0E1FC0;\n  transition: 0.2s ease all;\n}\n\n.btn-select-subscription:focus {\n  outline: none;\n}\n\n.btn-select-subscription:disabled {\n  opacity: 0.4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cG9ucy9EOlxcQmFja3VwXFxEZXZlbG9wbWVudFxcV29ya19Kb2JzXFxGcmVlbGFuY2luZ1xcT3V0XFxBbmd1bGFyX3NvdW5kXFxBcmNoaXZlL3NyY1xcYXBwXFxjb3Vwb25zXFxjb3Vwb25zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY291cG9ucy9jb3Vwb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBOztFQUVFLGdCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBRENFOztFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURDRTtFQUNFLGFBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NvdXBvbnMvY291cG9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDQwcHggNjBweDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLm5vLWNvdXBvbnMge1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnN0YXR1cyxcclxuLmF2YWlsYWJsZSB7XHJcbiAgbWFyZ2luLXRvcDogMTJweDtcclxuICBmb250LXNpemU6IDIycHg7XHJcblxyXG4gICZfX3RpdGxlIHtcclxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbn1cclxuXHJcbi5idG4tc2VsZWN0LXN1YnNjcmlwdGlvbiB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwRTFGQzA7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMEUxRkMwO1xyXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcblxyXG4gICY6ZGlzYWJsZWQge1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG4gIH1cclxufVxyXG4iLCIuY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogNDBweCA2MHB4O1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5uby1jb3Vwb25zIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5zdGF0dXMsXG4uYXZhaWxhYmxlIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuLnN0YXR1c19fdGl0bGUsXG4uYXZhaWxhYmxlX190aXRsZSB7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uYnRuLXNlbGVjdC1zdWJzY3JpcHRpb24ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsaW5lLWhlaWdodDogMjFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBFMUZDMDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwRTFGQzA7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XG59XG4uYnRuLXNlbGVjdC1zdWJzY3JpcHRpb246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLmJ0bi1zZWxlY3Qtc3Vic2NyaXB0aW9uOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC40O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/coupons/coupons.page.ts":
/*!*****************************************!*\
  !*** ./src/app/coupons/coupons.page.ts ***!
  \*****************************************/
/*! exports provided: CouponsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponsPage", function() { return CouponsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_constants_coupons_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/constants/coupons.constant */ "./src/app/shared/constants/coupons.constant.ts");
/* harmony import */ var _shared_services_coupons_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/coupons.service */ "./src/app/shared/services/coupons.service.ts");
/* harmony import */ var _component_select_subscription_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/select-subscription.page */ "./src/app/coupons/component/select-subscription.page.ts");






var CouponsPage = /** @class */ (function () {
    function CouponsPage(_changeDetectorRef, _modalController, _couponsService) {
        this._changeDetectorRef = _changeDetectorRef;
        this._modalController = _modalController;
        this._couponsService = _couponsService;
        this.COUPON_STATUSES = _shared_constants_coupons_constant__WEBPACK_IMPORTED_MODULE_3__["COUPON_STATUSES"];
    }
    CouponsPage.prototype.ngOnInit = function () {
        this.init();
    };
    CouponsPage.prototype.selectSubscription = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._modalController.create({
                            component: _component_select_subscription_page__WEBPACK_IMPORTED_MODULE_5__["SelectSubscriptionComponent"],
                            cssClass: 'select-subscription',
                        })];
                    case 1:
                        modal = _a.sent();
                        return [2 /*return*/, modal.present()];
                }
            });
        });
    };
    CouponsPage.prototype.init = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this._couponsService.getActiveCoupon()];
                    case 1:
                        _a.activeCoupon = _b.sent();
                        this._changeDetectorRef.detectChanges();
                        return [2 /*return*/];
                }
            });
        });
    };
    CouponsPage.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _shared_services_coupons_service__WEBPACK_IMPORTED_MODULE_4__["CouponsService"] }
    ]; };
    CouponsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-coupons',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./coupons.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/coupons/coupons.page.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./coupons.page.scss */ "./src/app/coupons/coupons.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _shared_services_coupons_service__WEBPACK_IMPORTED_MODULE_4__["CouponsService"]])
    ], CouponsPage);
    return CouponsPage;
}());



/***/ })

}]);
//# sourceMappingURL=coupons-coupons-module.js.map