(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen>\n  <div class=\"wrap_login\">\n    <div class=\"small_wrap_part\">\n      <h2>{{ 'wBack' | translate }}</h2>\n      <p>{{ 'enterToAcc' | translate }}</p>\n      <a\n        href=\"#\"\n        [routerLink]=\"'/' + APP_ROUTE_URLS.LOGIN\">\n        {{ \"login\" | translate }}\n      </a>\n    </div>\n    <div class=\"long_wrap_part\">\n      <div class=\"header_long\">\n        <a href=\"#\">\n          <img src=\"assets/img/Logo.png\" alt=\"logo\">\n        </a>\n\n        <select (change)=\"changeLang($event.target.value)\">\n          <option\n            *ngFor=\"let language of APP_LANGUAGES\"\n            [value]=\"language.code\"\n            [selected]=\"language.code === selectedLang\">\n            {{ language.label }}\n          </option>\n        </select>\n      </div>\n\n      <div class=\"center_long\">\n        <h2>{{ \"signUpBtn\" | translate }}</h2>\n\n        <div class=\"form_center\">\n          <form [formGroup]=\"formGroup\">\n            <div\n              class=\"wrap_form\"\n              [class.has-error]=\"controlHasError(CONTROLS_NAME.NAME)\">\n              <p>{{ \"name\" | translate }}</p>\n\n              <input\n                [formControlName]=\"CONTROLS_NAME.NAME\"\n                class=\"form-input\">\n            </div>\n\n            <div\n              class=\"wrap_form\"\n              [class.has-error]=\"controlHasError(CONTROLS_NAME.LAST_NAME)\">\n              <p>{{ \"surName\" | translate }}</p>\n\n              <input\n                [formControlName]=\"CONTROLS_NAME.LAST_NAME\"\n                class=\"form-input\">\n            </div>\n\n            <div\n              class=\"wrap_form\"\n              [class.has-error]=\"controlHasError(CONTROLS_NAME.ADDRESS)\">\n              <p>{{ \"address\" | translate }}</p>\n\n              <input\n                [formControlName]=\"CONTROLS_NAME.ADDRESS\"\n                class=\"form-input\">\n            </div>\n\n            <div\n              class=\"wrap_form\"\n              [class.has-error]=\"controlHasError(CONTROLS_NAME.PHONE)\">\n              <p>{{ \"tel\" | translate }}</p>\n\n              <input\n                [formControlName]=\"CONTROLS_NAME.PHONE\"\n                class=\"form-input\"\n                type=\"number\"\n                autocomplete=\"off\"\n                style=\"font-family: Arial\">\n            </div>\n\n            <div\n              class=\"wrap_form\"\n              [class.has-error]=\"controlHasError(CONTROLS_NAME.CODE)\">\n              <p>\n                <ion-icon\n                  name=\"information-circle-outline\"\n                  popper=\"Enter the code of the employee from whom you came from, if there is no code put it everywhere 0\"\n                  popperTrigger=\"click\"></ion-icon>\n                {{ \"personalCode\" | translate }}\n              </p>\n\n              <input\n                class=\"form-input\"\n                type=\"text\"\n                [formControlName]=\"CONTROLS_NAME.CODE\"\n                mask=\"[0][000][0000]\"\n                maxlength=\"14\"\n                style=\"font-family: Arial\">\n            </div>\n\n            <div\n              class=\"wrap_form\"\n              [class.has-error]=\"controlHasError(CONTROLS_NAME.EMAIL)\">\n              <p class=\"form-label\">\n                {{ \"email\" | translate }}*\n              </p>\n\n              <input\n                class=\"form-input\"\n                [formControlName]=\"CONTROLS_NAME.EMAIL\"\n                autocomplete=\"off\">\n            </div>\n\n            <div\n              class=\"wrap_form\"\n              [class.has-error]=\"controlHasError(CONTROLS_NAME.CONFIRM_PASSWORD)\">\n              <p class=\"form-label\">\n                {{ \"pass\" | translate }}*\n              </p>\n\n              <input\n                class=\"form-input\"\n                [formControlName]=\"CONTROLS_NAME.PASSWORD\"\n                autocomplete=\"off\">\n            </div>\n\n            <div\n              class=\"wrap_form\"\n              [class.has-error]=\"controlHasError(CONTROLS_NAME.CONFIRM_PASSWORD)\">\n              <p\n                class=\"form-label\">\n                {{ \"rPass\" | translate }}*\n              </p>\n\n              <input\n                class=\"form-input\"\n                [formControlName]=\"CONTROLS_NAME.CONFIRM_PASSWORD\"\n                autocomplete=\"off\">\n            </div>\n          </form>\n\n          <div class=\"wrap_form wrap_form_subm\">\n            <button\n              class=\"btn-register\"\n              [disabled]=\"formGroup.invalid\"\n              (click)=\"tryRegister()\">\n              {{ 'signUpR' | translate }}\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_mask_ionic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mask-ionic */ "./node_modules/ngx-mask-ionic/fesm5/ngx-mask-ionic.js");
/* harmony import */ var ngx_popper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-popper */ "./node_modules/ngx-popper/fesm5/ngx-popper.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");
/* harmony import */ var _services_register_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/register.api.service */ "./src/app/register/services/register.api.service.ts");











var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_9__["RegisterPage"],
    },
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                ngx_mask_ionic__WEBPACK_IMPORTED_MODULE_7__["NgxMaskIonicModule"],
                ngx_popper__WEBPACK_IMPORTED_MODULE_8__["NgxPopperModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_9__["RegisterPage"]],
            providers: [
                _services_register_api_service__WEBPACK_IMPORTED_MODULE_10__["RegisterApiService"],
            ],
            entryComponents: [],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form_center > form > div {\n  margin-bottom: 15px;\n  width: 49%;\n  display: inline-block;\n  margin-left: 1%;\n}\n\n.btn-register {\n  background-color: #0819BF;\n  border-radius: 5px;\n  color: #fff;\n  font-size: 40px;\n  font-weight: 600;\n}\n\n.btn-register:focus {\n  outline: none;\n}\n\n.btn-register:disabled {\n  opacity: 0.4;\n}\n\n.wrap_form.has-error .form-input {\n  border: 2px solid #ff0000 !important;\n}\n\n.wrap_form.has-error .form-label {\n  color: #ff0000 !important;\n}\n\n@media screen and (max-width: 1380px) and (orientation: landscape) {\n  .btn-register {\n    left: 0;\n    right: 0;\n    margin: 0 auto;\n  }\n\n  .long_wrap_part .center_long {\n    width: 450px;\n    padding: 0 !important;\n    margin: 0 !important;\n    width: 100%;\n  }\n\n  .long_wrap_part .wrap_form > p {\n    font-size: 18px;\n    margin-bottom: 0;\n    font-weight: 400;\n  }\n\n  .btn-register, .small_wrap_part > a {\n    font-size: 21px;\n    height: 60px;\n    min-height: 60px;\n  }\n\n  .long_wrap_part .center_long .wrap_form input[type=text],\n.long_wrap_part .center_long .wrap_form input[type=password],\n.long_wrap_part .center_long .wrap_form input[type=email],\n.long_wrap_part .center_long .wrap_form input[type=number] {\n    height: 60px !important;\n    min-height: 60px !important;\n    background-color: #ffffff !important;\n  }\n\n  .long_wrap_part .center_long > h2 {\n    font-size: 36px;\n    text-align: center;\n  }\n\n  .btn-register {\n    width: 300px !important;\n    min-width: 300px !important;\n    max-width: 300px !important;\n    left: 0;\n    right: 0;\n    margin: 0 auto;\n    display: block;\n  }\n\n  .unsubModal .modal-content {\n    padding-top: 30px;\n    height: 510px;\n    width: 900px;\n  }\n\n  .modal-dialog.unsubModal {\n    width: 900px;\n    text-align: center;\n  }\n\n  .already_unsubed {\n    top: -15px;\n  }\n\n  .unsubed_img, .already_unsubed > p {\n    margin-bottom: 30px;\n  }\n\n  .unsubed_img, .already_unsubed > p {\n    margin-bottom: 30px;\n  }\n\n  .already_unsubed > p {\n    font-size: 36px;\n  }\n\n  .already_unsubed > a {\n    width: 290px;\n  }\n\n  .already_unsubed > a {\n    width: 360px;\n    height: 90px;\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 32px;\n    color: #fff;\n    font-weight: bold;\n    text-transform: uppercase;\n    background-color: #0E1FC0;\n    margin-left: auto;\n    margin-right: auto;\n    transition: 0.4s ease all;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvRDpcXEJhY2t1cFxcRGV2ZWxvcG1lbnRcXFdvcmtfSm9ic1xcRnJlZWxhbmNpbmdcXE91dFxcQW5ndWxhcl9zb3VuZFxcQXJjaGl2ZS9zcmNcXGFwcFxccmVnaXN0ZXJcXHJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENFO0VBQ0UsYUFBQTtBQ0NKOztBREVFO0VBQ0UsWUFBQTtBQ0FKOztBRE1JO0VBQ0Usb0NBQUE7QUNITjs7QURNSTtFQUNFLHlCQUFBO0FDSk47O0FEU0E7RUFDRTtJQUNFLE9BQUE7SUFDQSxRQUFBO0lBQ0EsY0FBQTtFQ05GOztFRFFBO0lBQ0UsWUFBQTtJQUNBLHFCQUFBO0lBQ0Esb0JBQUE7SUFDQSxXQUFBO0VDTEY7O0VET0E7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtFQ0pGOztFRE1BO0lBQ0UsZUFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtFQ0hGOztFREtBOzs7O0lBSUUsdUJBQUE7SUFDQSwyQkFBQTtJQUNBLG9DQUFBO0VDRkY7O0VESUE7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7RUNERjs7RURHQTtJQUNFLHVCQUFBO0lBQ0EsMkJBQUE7SUFDQSwyQkFBQTtJQUNBLE9BQUE7SUFDQSxRQUFBO0lBQ0EsY0FBQTtJQUNBLGNBQUE7RUNBRjs7RURHQTtJQUNFLGlCQUFBO0lBQ0EsYUFBQTtJQUNBLFlBQUE7RUNBRjs7RURFQTtJQUNFLFlBQUE7SUFDQSxrQkFBQTtFQ0NGOztFRENBO0lBQ0UsVUFBQTtFQ0VGOztFREFBO0lBQ0UsbUJBQUE7RUNHRjs7RUREQTtJQUNFLG1CQUFBO0VDSUY7O0VERkE7SUFDRSxlQUFBO0VDS0Y7O0VESEE7SUFDRSxZQUFBO0VDTUY7O0VESkE7SUFDRSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBR0EsYUFBQTtJQUdBLG1CQUFBO0lBR0EsdUJBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0lBQ0EseUJBQUE7SUFDQSx5QkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFFQSx5QkFBQTtFQ09GO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybV9jZW50ZXIgPiBmb3JtID4gZGl2IHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgd2lkdGg6IDQ5JTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMSU7XG59XG5cbi5idG4tcmVnaXN0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgxOUJGO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuXG4gICY6ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgfVxufVxuXG4ud3JhcF9mb3JtIHtcbiAgJi5oYXMtZXJyb3Ige1xuICAgIC5mb3JtLWlucHV0IHtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZjAwMDAgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuZm9ybS1sYWJlbCB7XG4gICAgICBjb2xvcjogI2ZmMDAwMCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzgwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAuYnRuLXJlZ2lzdGVyIHtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIC5sb25nX3dyYXBfcGFydCAuY2VudGVyX2xvbmcge1xuICAgIHdpZHRoOiA0NTBweDtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmxvbmdfd3JhcF9wYXJ0IC53cmFwX2Zvcm0gPiBwIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIC5idG4tcmVnaXN0ZXIsIC5zbWFsbF93cmFwX3BhcnQgPiBhIHtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIH1cbiAgLmxvbmdfd3JhcF9wYXJ0IC5jZW50ZXJfbG9uZyAud3JhcF9mb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuICAubG9uZ193cmFwX3BhcnQgLmNlbnRlcl9sb25nIC53cmFwX2Zvcm0gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxuICAubG9uZ193cmFwX3BhcnQgLmNlbnRlcl9sb25nIC53cmFwX2Zvcm0gaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxuICAubG9uZ193cmFwX3BhcnQgLmNlbnRlcl9sb25nIC53cmFwX2Zvcm0gaW5wdXRbdHlwZT1cIm51bWJlclwiXSB7XG4gICAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWluLWhlaWdodDogNjBweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgfVxuICAubG9uZ193cmFwX3BhcnQgLmNlbnRlcl9sb25nID4gaDIge1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmJ0bi1yZWdpc3RlciB7XG4gICAgd2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWluLXdpZHRoOiAzMDBweCAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMzAwcHggIWltcG9ydGFudDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC8vL21vZGFsXG4gIC51bnN1Yk1vZGFsIC5tb2RhbC1jb250ZW50IHtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBoZWlnaHQ6IDUxMHB4O1xuICAgIHdpZHRoOiA5MDBweDtcbiAgfVxuICAubW9kYWwtZGlhbG9nLnVuc3ViTW9kYWwge1xuICAgIHdpZHRoOiA5MDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmFscmVhZHlfdW5zdWJlZCB7XG4gICAgdG9wOiAtMTVweDtcbiAgfVxuICAudW5zdWJlZF9pbWcsIC5hbHJlYWR5X3Vuc3ViZWQgPiBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG4gIC51bnN1YmVkX2ltZywgLmFscmVhZHlfdW5zdWJlZCA+IHAge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbiAgLmFscmVhZHlfdW5zdWJlZCA+IHAge1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgfVxuICAuYWxyZWFkeV91bnN1YmVkID4gYSB7XG4gICAgd2lkdGg6IDI5MHB4O1xuICB9XG4gIC5hbHJlYWR5X3Vuc3ViZWQgPiBhIHtcbiAgICB3aWR0aDogMzYwcHg7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBFMUZDMDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHMgZWFzZSBhbGw7XG4gICAgdHJhbnNpdGlvbjogLjRzIGVhc2UgYWxsO1xuICB9XG59XG4iLCIuZm9ybV9jZW50ZXIgPiBmb3JtID4gZGl2IHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgd2lkdGg6IDQ5JTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMSU7XG59XG5cbi5idG4tcmVnaXN0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgxOUJGO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uYnRuLXJlZ2lzdGVyOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5idG4tcmVnaXN0ZXI6ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjQ7XG59XG5cbi53cmFwX2Zvcm0uaGFzLWVycm9yIC5mb3JtLWlucHV0IHtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmMDAwMCAhaW1wb3J0YW50O1xufVxuLndyYXBfZm9ybS5oYXMtZXJyb3IgLmZvcm0tbGFiZWwge1xuICBjb2xvcjogI2ZmMDAwMCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzgwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAuYnRuLXJlZ2lzdGVyIHtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG5cbiAgLmxvbmdfd3JhcF9wYXJ0IC5jZW50ZXJfbG9uZyB7XG4gICAgd2lkdGg6IDQ1MHB4O1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5sb25nX3dyYXBfcGFydCAud3JhcF9mb3JtID4gcCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuXG4gIC5idG4tcmVnaXN0ZXIsIC5zbWFsbF93cmFwX3BhcnQgPiBhIHtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIH1cblxuICAubG9uZ193cmFwX3BhcnQgLmNlbnRlcl9sb25nIC53cmFwX2Zvcm0gaW5wdXRbdHlwZT10ZXh0XSxcbi5sb25nX3dyYXBfcGFydCAuY2VudGVyX2xvbmcgLndyYXBfZm9ybSBpbnB1dFt0eXBlPXBhc3N3b3JkXSxcbi5sb25nX3dyYXBfcGFydCAuY2VudGVyX2xvbmcgLndyYXBfZm9ybSBpbnB1dFt0eXBlPWVtYWlsXSxcbi5sb25nX3dyYXBfcGFydCAuY2VudGVyX2xvbmcgLndyYXBfZm9ybSBpbnB1dFt0eXBlPW51bWJlcl0ge1xuICAgIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xuICAgIG1pbi1oZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubG9uZ193cmFwX3BhcnQgLmNlbnRlcl9sb25nID4gaDIge1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuYnRuLXJlZ2lzdGVyIHtcbiAgICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcbiAgICBtaW4td2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAzMDBweCAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAudW5zdWJNb2RhbCAubW9kYWwtY29udGVudCB7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgaGVpZ2h0OiA1MTBweDtcbiAgICB3aWR0aDogOTAwcHg7XG4gIH1cblxuICAubW9kYWwtZGlhbG9nLnVuc3ViTW9kYWwge1xuICAgIHdpZHRoOiA5MDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuYWxyZWFkeV91bnN1YmVkIHtcbiAgICB0b3A6IC0xNXB4O1xuICB9XG5cbiAgLnVuc3ViZWRfaW1nLCAuYWxyZWFkeV91bnN1YmVkID4gcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuXG4gIC51bnN1YmVkX2ltZywgLmFscmVhZHlfdW5zdWJlZCA+IHAge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cblxuICAuYWxyZWFkeV91bnN1YmVkID4gcCB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICB9XG5cbiAgLmFscmVhZHlfdW5zdWJlZCA+IGEge1xuICAgIHdpZHRoOiAyOTBweDtcbiAgfVxuXG4gIC5hbHJlYWR5X3Vuc3ViZWQgPiBhIHtcbiAgICB3aWR0aDogMzYwcHg7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBFMUZDMDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzIGVhc2UgYWxsO1xuICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZSBhbGw7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_constants_languages_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/constants/languages.constant */ "./src/app/shared/constants/languages.constant.ts");
/* harmony import */ var _shared_constants_routes_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/constants/routes.constant */ "./src/app/shared/constants/routes.constant.ts");
/* harmony import */ var _shared_services_db_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/services/db.service */ "./src/app/shared/services/db.service.ts");
/* harmony import */ var _shared_validators_validators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/validators/validators */ "./src/app/shared/validators/validators.ts");
/* harmony import */ var _services_register_api_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/register.api.service */ "./src/app/register/services/register.api.service.ts");














var CONTROLS_NAME;
(function (CONTROLS_NAME) {
    CONTROLS_NAME["NAME"] = "first_name";
    CONTROLS_NAME["LAST_NAME"] = "last_name";
    CONTROLS_NAME["ADDRESS"] = "address";
    CONTROLS_NAME["PHONE"] = "phone";
    CONTROLS_NAME["CODE"] = "code";
    CONTROLS_NAME["EMAIL"] = "email";
    CONTROLS_NAME["PASSWORD"] = "password";
    CONTROLS_NAME["CONFIRM_PASSWORD"] = "confirm_password";
})(CONTROLS_NAME || (CONTROLS_NAME = {}));
var RegisterPage = /** @class */ (function () {
    function RegisterPage(_alertController, _router, _menu, _translateService, _storage, _dbService, _registerApiService) {
        this._alertController = _alertController;
        this._router = _router;
        this._menu = _menu;
        this._translateService = _translateService;
        this._storage = _storage;
        this._dbService = _dbService;
        this._registerApiService = _registerApiService;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
        this.CONTROLS_NAME = CONTROLS_NAME;
        this.translations = {};
        this.isShowInvoiceModal = false;
        this.selectedLang = _shared_constants_languages_constant__WEBPACK_IMPORTED_MODULE_9__["APP_LANGUAGES"][0].code;
        this.APP_LANGUAGES = _shared_constants_languages_constant__WEBPACK_IMPORTED_MODULE_9__["APP_LANGUAGES"];
        this.APP_ROUTE_URLS = _shared_constants_routes_constant__WEBPACK_IMPORTED_MODULE_10__["APP_ROUTE_URLS"];
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
    }
    RegisterPage.prototype.ngOnInit = function () {
        var _a;
        var _this = this;
        this._translateService.get(['error', 'passError', 'tryLater', 'addAllData', 'allOk', 'accRgistered'])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._destroy$))
            .subscribe(function (values) { return _this.translations = values; });
        var passwordControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]);
        var passwordConfirmControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), Object(_shared_validators_validators__WEBPACK_IMPORTED_MODULE_12__["passwordMatchValidator"])(passwordControl)]);
        passwordControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._destroy$))
            .subscribe(function () {
            passwordConfirmControl.updateValueAndValidity({ onlySelf: true });
        });
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]((_a = {},
            _a[CONTROLS_NAME.NAME] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            _a[CONTROLS_NAME.LAST_NAME] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            _a[CONTROLS_NAME.ADDRESS] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            _a[CONTROLS_NAME.PHONE] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(\+)?\d{11,}$/)]),
            _a[CONTROLS_NAME.CODE] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            _a[CONTROLS_NAME.EMAIL] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[a-zA-Z0-9_\-\.]+@[a-zA-Z0-9_\-\.]+(\.){1}[a-zA-Z]{2,4}$/)]),
            _a[CONTROLS_NAME.PASSWORD] = passwordControl,
            _a[CONTROLS_NAME.CONFIRM_PASSWORD] = passwordConfirmControl,
            _a));
    };
    RegisterPage.prototype.ngOnDestroy = function () {
        this._destroy$.next();
        this._destroy$.complete();
    };
    RegisterPage.prototype.controlHasError = function (controlName) {
        var control = this.formGroup.get(controlName);
        return control.dirty && control.invalid;
    };
    RegisterPage.prototype.tryRegister = function () {
        var _this = this;
        this._registerApiService.register(this.formGroup.value)
            .subscribe(function (response) {
            _this.saveUser(response.data);
            _this.isShowInvoiceModal = true;
            _this._router.navigate(["/" + _shared_constants_routes_constant__WEBPACK_IMPORTED_MODULE_10__["APP_ROUTE_URLS"].COUPONS]);
            _this._menu.enable(true, 'first');
            _this._menu.open('first');
        });
    };
    RegisterPage.prototype.alert = function (header, message) {
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
    RegisterPage.prototype.presentAlertConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._alertController.create({
                            header: this.translations.allOk,
                            message: this.translations.accRgistered,
                            buttons: [
                                {
                                    text: 'Ок',
                                    handler: function () {
                                        _this._router.navigate(["/" + _shared_constants_routes_constant__WEBPACK_IMPORTED_MODULE_10__["APP_ROUTE_URLS"].COUPONS]);
                                        _this._menu.enable(true, 'first');
                                        _this._menu.open('first');
                                    },
                                },
                            ],
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
    RegisterPage.prototype.saveUser = function (user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._dbService.executeSql('INSERT INTO user(uid, name, email) VALUES (?, ?, ?)', [user.id, user.name, user.email])
                            .catch(function (error) { return console.error('Error! Can not save user' + error); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.changeLang = function (lang) {
        this._translateService.use(lang);
        this._storage.set('lang', lang);
    };
    RegisterPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _shared_services_db_service__WEBPACK_IMPORTED_MODULE_11__["DbService"] },
        { type: _services_register_api_service__WEBPACK_IMPORTED_MODULE_13__["RegisterApiService"] }
    ]; };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _shared_services_db_service__WEBPACK_IMPORTED_MODULE_11__["DbService"],
            _services_register_api_service__WEBPACK_IMPORTED_MODULE_13__["RegisterApiService"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ }),

/***/ "./src/app/register/services/register.api.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/register/services/register.api.service.ts ***!
  \***********************************************************/
/*! exports provided: RegisterApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterApiService", function() { return RegisterApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/constants/api.constant */ "./src/app/shared/constants/api.constant.ts");
/* harmony import */ var _shared_models_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/models/user.model */ "./src/app/shared/models/user.model.ts");






var RegisterApiService = /** @class */ (function () {
    function RegisterApiService(_http) {
        this._http = _http;
    }
    RegisterApiService.prototype.register = function (_a) {
        var first_name = _a.first_name, last_name = _a.last_name, address = _a.address, phone = _a.phone, email = _a.email, password = _a.password;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
            fromObject: {
                first_name: first_name,
                last_name: last_name,
                address: address,
                phone: phone,
                email: email,
                password: password,
            },
        });
        return this._http.get(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_4__["API_ENDPOINT"] + "/" + _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_4__["API_USER"] + "/userAdd", { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response.data) {
                response = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, response, { data: new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_5__["UserModel"](response.data) });
            }
            return response;
        }));
    };
    RegisterApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    RegisterApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RegisterApiService);
    return RegisterApiService;
}());



/***/ }),

/***/ "./src/app/shared/validators/validators.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/validators/validators.ts ***!
  \*************************************************/
/*! exports provided: passwordMatchValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordMatchValidator", function() { return passwordMatchValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function passwordMatchValidator(passwordControl) {
    return function (control) {
        if (!control || !passwordControl) {
            return null;
        }
        return control.value !== passwordControl.value
            ? { passwordsMatch: { value: control.value } }
            : null;
    };
}


/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map