(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["history-history-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"wrap_of_main_structure wrap_height\">\n    <div class=\"right_content purch_content\">\n      <div class=\"purchase_hist\">\n        <h2>{{ \"buyHistory\" | translate }}</h2>\n\n        <div class=\"inn_purchase\">\n          <div class=\"head_purch\">\n            <div class=\"purch_desc\">\n              <p>{{ \"historyDesc\" | translate }}</p>\n            </div>\n\n            <div class=\"purch_date\">\n              <p>{{ 'date' | translate }}</p>\n            </div>\n\n            <div class=\"purch_cost\">\n              <p>{{ 'cost' | translate }}</p>\n            </div>\n          </div>\n\n          <div\n            *ngFor=\"let coupon of coupons\"\n            class=\"elem_purch\">\n            <div class=\"purch_desc\">\n              <p>{{ coupon.packname }}</p>\n            </div>\n\n            <div class=\"purch_date\">\n              <p>{{ coupon.created_at }}</p>\n            </div>\n\n            <div class=\"purch_cost\">\n              <p>{{ coupon.packprice }}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/history/history.module.ts":
/*!*******************************************!*\
  !*** ./src/app/history/history.module.ts ***!
  \*******************************************/
/*! exports provided: HistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history.page */ "./src/app/history/history.page.ts");







var routes = [
    {
        path: '',
        component: _history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"],
    },
];
var HistoryPageModule = /** @class */ (function () {
    function HistoryPageModule() {
    }
    HistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            ],
            declarations: [
                _history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"],
            ],
        })
    ], HistoryPageModule);
    return HistoryPageModule;
}());



/***/ }),

/***/ "./src/app/history/history.page.scss":
/*!*******************************************!*\
  !*** ./src/app/history/history.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu {\n  width: 25%;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGlzdG9yeS9EOlxcQmFja3VwXFxEZXZlbG9wbWVudFxcV29ya19Kb2JzXFxGcmVlbGFuY2luZ1xcT3V0XFxBbmd1bGFyX3NvdW5kXFxBcmNoaXZlL3NyY1xcYXBwXFxoaXN0b3J5XFxoaXN0b3J5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvaGlzdG9yeS9oaXN0b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9oaXN0b3J5L2hpc3RvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUge1xuICB3aWR0aDogMjUlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiIsImlvbi1tZW51IHtcbiAgd2lkdGg6IDI1JTtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */");

/***/ }),

/***/ "./src/app/history/history.page.ts":
/*!*****************************************!*\
  !*** ./src/app/history/history.page.ts ***!
  \*****************************************/
/*! exports provided: HistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPage", function() { return HistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_coupons_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/coupons.api.service */ "./src/app/shared/services/coupons.api.service.ts");
/* harmony import */ var _shared_services_db_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/db.service */ "./src/app/shared/services/db.service.ts");




var HistoryPage = /** @class */ (function () {
    function HistoryPage(_changeDetectorRef, _dbService, _couponsApiService) {
        this._changeDetectorRef = _changeDetectorRef;
        this._dbService = _dbService;
        this._couponsApiService = _couponsApiService;
    }
    HistoryPage.prototype.ngOnInit = function () {
        this.init();
    };
    HistoryPage.prototype.getCouponsUser = function (uid) {
        var _this = this;
        this._couponsApiService.getCouponsUser(uid)
            .subscribe(function (data) {
            _this.coupons = data;
            _this._changeDetectorRef.detectChanges();
        });
    };
    HistoryPage.prototype.init = function () {
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
                            this.getCouponsUser(userData.rows.item(0).uid);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HistoryPage.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _shared_services_db_service__WEBPACK_IMPORTED_MODULE_3__["DbService"] },
        { type: _shared_services_coupons_api_service__WEBPACK_IMPORTED_MODULE_2__["CouponsApiService"] }
    ]; };
    HistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-history',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./history.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.page.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./history.page.scss */ "./src/app/history/history.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _shared_services_db_service__WEBPACK_IMPORTED_MODULE_3__["DbService"],
            _shared_services_coupons_api_service__WEBPACK_IMPORTED_MODULE_2__["CouponsApiService"]])
    ], HistoryPage);
    return HistoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=history-history-module.js.map