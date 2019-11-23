(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["unsub-unsub-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/unsub/component/unsubscribe-modal.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/unsub/component/unsubscribe-modal.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrap_of_main_structure\">\n  <div class=\"right_content\">\n    <ng-container *ngIf=\"!isUnsubscribed; else unsubscribedTpl\">\n      <form\n        class=\"unsubscribe_container g-flex-column\"\n        [formGroup]=\"formGroup\">\n        <h2 class=\"title\">\n          Отказаться от подписки\n        </h2>\n\n        <div class=\"content\">\n          В случае отказа от подписки Компания CIMATICS RESONANSE деньги не возвращает!\n        </div>\n\n        <div class=\"confirm g-flex g-flex--align-center\">\n          <div class=\"g-flex__item-fixed\">\n            <input\n              class=\"checkbox\"\n              type=\"checkbox\"\n              id=\"confirm-checkbox\"\n              [formControlName]=\"CONTROLS_NAME.CONFIRM\">\n            <label\n              class=\"label\"\n              [class.checked]=\"formGroup.get(CONTROLS_NAME.CONFIRM).value\"\n              for=\"confirm-checkbox\">\n            </label>\n          </div>\n\n          <div class=\"checkbox__label g-flex__item\">\n            Я согласен с условиями\n          </div>\n        </div>\n\n        <div class=\"buttons g-flex g-flex--align-center\">\n          <button\n            class=\"btn cancel\"\n            (click)=\"cancel()\">\n            {{ 'cancel' | translate }}\n          </button>\n\n          <button\n            class=\"btn done\"\n            [disabled]=\"!formGroup.get(CONTROLS_NAME.CONFIRM).value\"\n            (click)=\"success()\">\n            {{ 'done' | translate }}\n          </button>\n        </div>\n      </form>\n    </ng-container>\n\n    <ng-template #unsubscribedTpl>\n      <div class=\"success-content g-flex-column g-flex--align-center\">\n        <div class=\"unsubscribe-success\">\n          Вы успешно отписались!\n          <br/>\n          Спасибо за то что пользовались нашими услугами\n        </div>\n\n        <button\n          class=\"btn ok\"\n          (click)=\"ok()\">\n          OK\n        </button>\n      </div>\n    </ng-template>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/unsub/unsub.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/unsub/unsub.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"wrap_of_main_structure wrap_height\">\n    <div class=\"right_content purch_content\">\n      <h2 class=\"unsubscribe_block\">{{ \"unSub\" | translate }}</h2>\n\n      <button\n        class=\"unsub_button\"\n        (click)=\"onUnsubscribe()\">\n        {{ \"unSub\" | translate }}\n      </button>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/unsub/component/unsubscribe-modal.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/unsub/component/unsubscribe-modal.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.title {\n  font-size: 32px;\n  font-weight: 600;\n  margin-bottom: 24px;\n}\n.content {\n  font-size: 24px;\n}\n.checkbox {\n  display: none;\n}\n.checkbox__label {\n  margin-top: 24px;\n  margin-left: 10px;\n  font-size: 20px;\n}\n.label {\n  position: relative;\n  width: 25px;\n  height: 25px;\n  margin-top: 36px;\n}\n.label:before {\n  width: 25px;\n  height: 25px;\n  content: \"\";\n  position: absolute;\n  border-radius: 250px;\n  border: 2px solid #ccc;\n  background: #EBEBF6;\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.label:after {\n  display: none;\n  content: \"✓ \";\n  position: absolute;\n  top: 3px;\n  left: 6px;\n  font-size: 20px;\n  line-height: 0.8;\n  color: #1223C0;\n  transition: all 0.2s;\n  font-family: \"Lucida Sans Unicode\", \"Arial Unicode MS\", Arial;\n}\n.label.checked:after {\n  display: block;\n}\n.btn {\n  width: 360px;\n  height: 50px;\n  margin-top: 40px;\n  border-radius: 5px;\n  transition: 0.4s ease all;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #0E1FC0;\n  font-size: 24px;\n  color: #fff;\n  font-weight: bold;\n}\n.btn:focus {\n  outline: none;\n}\n.btn:disabled {\n  opacity: 0.4;\n}\n.btn.cancel {\n  margin-right: 12px;\n}\n.btn.done {\n  margin-left: 12px;\n}\n.unsubscribe-success {\n  margin-top: 40px;\n  font-size: 32px;\n  font-weight: bold;\n}\n.unsubscribe-success .btn.ok {\n  margin-top: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdW5zdWIvY29tcG9uZW50L3Vuc3Vic2NyaWJlLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91bnN1Yi9jb21wb25lbnQvRDpcXEJhY2t1cFxcRGV2ZWxvcG1lbnRcXFdvcmtfSm9ic1xcRnJlZWxhbmNpbmdcXE91dFxcQW5ndWxhcl9zb3VuZFxcQXJjaGl2ZS9zcmNcXGFwcFxcdW5zdWJcXGNvbXBvbmVudFxcdW5zdWJzY3JpYmUtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QURFRjtBQ0NBO0VBQ0UsZUFBQTtBREVGO0FDQ0E7RUFDRSxhQUFBO0FERUY7QUNBRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FERUo7QUNFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRENGO0FDQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhDQUFBO0FEQ0o7QUNFRTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFFQSxvQkFBQTtFQUNBLDZEQUFBO0FEQUo7QUNJSTtFQUNFLGNBQUE7QURGTjtBQ09BO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBREpGO0FDTUU7RUFDRSxhQUFBO0FESko7QUNPRTtFQUNFLFlBQUE7QURMSjtBQ1FFO0VBQ0Usa0JBQUE7QUROSjtBQ1NFO0VBQ0UsaUJBQUE7QURQSjtBQ1dBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QURSRjtBQ1VFO0VBQ0UsZ0JBQUE7QURSSiIsImZpbGUiOiJzcmMvYXBwL3Vuc3ViL2NvbXBvbmVudC91bnN1YnNjcmliZS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cblxuLmNvbnRlbnQge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5jaGVja2JveCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uY2hlY2tib3hfX2xhYmVsIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmxhYmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBtYXJnaW4tdG9wOiAzNnB4O1xufVxuLmxhYmVsOmJlZm9yZSB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjUwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XG4gIGJhY2tncm91bmQ6ICNFQkVCRjY7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4ubGFiZWw6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xuICBjb250ZW50OiBcIuKckyBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDNweDtcbiAgbGVmdDogNnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAwLjg7XG4gIGNvbG9yOiAjMTIyM0MwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiLCBcIkFyaWFsIFVuaWNvZGUgTVNcIiwgQXJpYWw7XG59XG4ubGFiZWwuY2hlY2tlZDphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYnRuIHtcbiAgd2lkdGg6IDM2MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlIGFsbDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwRTFGQzA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmJ0bjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uYnRuOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC40O1xufVxuLmJ0bi5jYW5jZWwge1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG4uYnRuLmRvbmUge1xuICBtYXJnaW4tbGVmdDogMTJweDtcbn1cblxuLnVuc3Vic2NyaWJlLXN1Y2Nlc3Mge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnVuc3Vic2NyaWJlLXN1Y2Nlc3MgLmJ0bi5vayB7XG4gIG1hcmdpbi10b3A6IDQ1cHg7XG59IiwiLnRpdGxlIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4uY2hlY2tib3gge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gICZfX2xhYmVsIHtcclxuICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbi5sYWJlbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBtYXJnaW4tdG9wOiAzNnB4O1xyXG5cclxuICAmOmJlZm9yZSB7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjUwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xyXG4gICAgYmFja2dyb3VuZDogI0VCRUJGNjtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgfVxyXG5cclxuICAmOmFmdGVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBjb250ZW50OiAnXFwyNzEzXFwwMDIwJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogM3B4O1xyXG4gICAgbGVmdDogNnB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDAuODtcclxuICAgIGNvbG9yOiAjMTIyM0MwO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycztcclxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdBcmlhbCBVbmljb2RlIE1TJywgQXJpYWw7XHJcbiAgfVxyXG5cclxuICAmLmNoZWNrZWQge1xyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmJ0biB7XHJcbiAgd2lkdGg6IDM2MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2UgYWxsO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEUxRkMwO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgfVxyXG5cclxuICAmLmNhbmNlbCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgfVxyXG5cclxuICAmLmRvbmUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgfVxyXG59XHJcblxyXG4udW5zdWJzY3JpYmUtc3VjY2VzcyB7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG4gIC5idG4ub2sge1xyXG4gICAgbWFyZ2luLXRvcDogNDVweDtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/unsub/component/unsubscribe-modal.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/unsub/component/unsubscribe-modal.component.ts ***!
  \****************************************************************/
/*! exports provided: UnsubscribeModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsubscribeModalComponent", function() { return UnsubscribeModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_constants_routes_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/constants/routes.constant */ "./src/app/shared/constants/routes.constant.ts");






var CONTROLS_NAME;
(function (CONTROLS_NAME) {
    CONTROLS_NAME["CONFIRM"] = "confirm";
})(CONTROLS_NAME || (CONTROLS_NAME = {}));
var UnsubscribeModalComponent = /** @class */ (function () {
    function UnsubscribeModalComponent(_router, _modalController) {
        var _a;
        this._router = _router;
        this._modalController = _modalController;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]((_a = {},
            _a[CONTROLS_NAME.CONFIRM] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            _a));
        this.CONTROLS_NAME = CONTROLS_NAME;
        this.isUnsubscribed = false;
    }
    UnsubscribeModalComponent.prototype.cancel = function () {
        this._modalController.dismiss();
    };
    UnsubscribeModalComponent.prototype.success = function () {
        this.isUnsubscribed = true;
    };
    UnsubscribeModalComponent.prototype.ok = function () {
        this._modalController.dismiss();
        this._router.navigate(["/" + _shared_constants_routes_constant__WEBPACK_IMPORTED_MODULE_5__["APP_ROUTE_URLS"].COUPONS]);
    };
    UnsubscribeModalComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
    ]; };
    UnsubscribeModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'unsubscribe-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./unsubscribe-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/unsub/component/unsubscribe-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./unsubscribe-modal.component.scss */ "./src/app/unsub/component/unsubscribe-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], UnsubscribeModalComponent);
    return UnsubscribeModalComponent;
}());



/***/ }),

/***/ "./src/app/unsub/unsub.module.ts":
/*!***************************************!*\
  !*** ./src/app/unsub/unsub.module.ts ***!
  \***************************************/
/*! exports provided: UnsubPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsubPageModule", function() { return UnsubPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _component_unsubscribe_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/unsubscribe-modal.component */ "./src/app/unsub/component/unsubscribe-modal.component.ts");
/* harmony import */ var _unsub_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./unsub.page */ "./src/app/unsub/unsub.page.ts");









var routes = [
    {
        path: '',
        component: _unsub_page__WEBPACK_IMPORTED_MODULE_8__["UnsubPage"],
    },
];
var UnsubPageModule = /** @class */ (function () {
    function UnsubPageModule() {
    }
    UnsubPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [
                _unsub_page__WEBPACK_IMPORTED_MODULE_8__["UnsubPage"],
                _component_unsubscribe_modal_component__WEBPACK_IMPORTED_MODULE_7__["UnsubscribeModalComponent"],
            ],
            entryComponents: [
                _component_unsubscribe_modal_component__WEBPACK_IMPORTED_MODULE_7__["UnsubscribeModalComponent"],
            ],
        })
    ], UnsubPageModule);
    return UnsubPageModule;
}());



/***/ }),

/***/ "./src/app/unsub/unsub.page.scss":
/*!***************************************!*\
  !*** ./src/app/unsub/unsub.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".unsubscribe_block {\n  color: #0B0B20;\n  line-height: 94px;\n  font-weight: bold;\n  font-size: 50px;\n  margin-bottom: 40px;\n}\n\n.unsub_button {\n  width: 360px;\n  height: 50px;\n  border-radius: 5px;\n  transition: 0.4s ease all;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #0E1FC0;\n  font-size: 24px;\n  color: #fff;\n  font-weight: bold;\n}\n\n.unsub_button:focus {\n  outline: none;\n}\n\n.unsub_button:disabled {\n  opacity: 0.4;\n}\n\n.unsub_button:active {\n  background-color: #0E1FC0;\n  color: #fff;\n  transition: 0.2s ease all;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdW5zdWIvRDpcXEJhY2t1cFxcRGV2ZWxvcG1lbnRcXFdvcmtfSm9ic1xcRnJlZWxhbmNpbmdcXE91dFxcQW5ndWxhcl9zb3VuZFxcQXJjaGl2ZS9zcmNcXGFwcFxcdW5zdWJcXHVuc3ViLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdW5zdWIvdW5zdWIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxhQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0FDQUo7O0FER0U7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvdW5zdWIvdW5zdWIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVuc3Vic2NyaWJlX2Jsb2NrIHtcclxuICBjb2xvcjogIzBCMEIyMDtcclxuICBsaW5lLWhlaWdodDogOTRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLnVuc3ViX2J1dHRvbiB7XHJcbiAgd2lkdGg6IDM2MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgdHJhbnNpdGlvbjogLjRzIGVhc2UgYWxsO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEUxRkMwO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEUxRkMwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xyXG4gIH1cclxufVxyXG4iLCIudW5zdWJzY3JpYmVfYmxvY2sge1xuICBjb2xvcjogIzBCMEIyMDtcbiAgbGluZS1oZWlnaHQ6IDk0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi51bnN1Yl9idXR0b24ge1xuICB3aWR0aDogMzYwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2UgYWxsO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBFMUZDMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udW5zdWJfYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi51bnN1Yl9idXR0b246ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjQ7XG59XG4udW5zdWJfYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwRTFGQzA7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/unsub/unsub.page.ts":
/*!*************************************!*\
  !*** ./src/app/unsub/unsub.page.ts ***!
  \*************************************/
/*! exports provided: UnsubPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsubPage", function() { return UnsubPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _component_unsubscribe_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/unsubscribe-modal.component */ "./src/app/unsub/component/unsubscribe-modal.component.ts");




var UnsubPage = /** @class */ (function () {
    function UnsubPage(_modalController) {
        this._modalController = _modalController;
    }
    UnsubPage.prototype.ngOnInit = function () {
    };
    UnsubPage.prototype.onUnsubscribe = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._modalController.create({
                            component: _component_unsubscribe_modal_component__WEBPACK_IMPORTED_MODULE_3__["UnsubscribeModalComponent"],
                            cssClass: 'unsubscribe',
                        })];
                    case 1:
                        modal = _a.sent();
                        return [2 /*return*/, modal.present()];
                }
            });
        });
    };
    UnsubPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    UnsubPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-unsub',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./unsub.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/unsub/unsub.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./unsub.page.scss */ "./src/app/unsub/unsub.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], UnsubPage);
    return UnsubPage;
}());



/***/ })

}]);
//# sourceMappingURL=unsub-unsub-module.js.map