(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-backdrop-ios.entry.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-backdrop-ios.entry.js ***!
  \*************************************************************************/
/*! exports provided: ion_backdrop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_backdrop", function() { return Backdrop; });
/* harmony import */ var _chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-84f6bf13.js */ "./node_modules/@ionic/core/dist/esm-es5/chunk-84f6bf13.js");
/* harmony import */ var _chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-1074393c.js */ "./node_modules/@ionic/core/dist/esm-es5/chunk-1074393c.js");
/* harmony import */ var _chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunk-c90aaa66.js */ "./node_modules/@ionic/core/dist/esm-es5/chunk-c90aaa66.js");
/* harmony import */ var _index_8421816f_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-8421816f.js */ "./node_modules/@ionic/core/dist/esm-es5/index-8421816f.js");




var Backdrop = /** @class */ (function () {
    function Backdrop(hostRef) {
        Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.lastClick = -10000;
        this.blocker = _index_8421816f_js__WEBPACK_IMPORTED_MODULE_3__["GESTURE_CONTROLLER"].createBlocker({
            disableScroll: true
        });
        /**
         * If `true`, the backdrop will be visible.
         */
        this.visible = true;
        /**
         * If `true`, the backdrop will can be clicked and will emit the `ionBackdropTap` event.
         */
        this.tappable = true;
        /**
         * If `true`, the backdrop will stop propagation on tap.
         */
        this.stopPropagation = true;
        this.ionBackdropTap = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionBackdropTap", 7);
    }
    Backdrop.prototype.componentDidLoad = function () {
        if (this.stopPropagation) {
            this.blocker.block();
        }
    };
    Backdrop.prototype.componentDidUnload = function () {
        this.blocker.destroy();
    };
    Backdrop.prototype.onTouchStart = function (ev) {
        this.lastClick = Object(_chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_2__["n"])(ev);
        this.emitTap(ev);
    };
    Backdrop.prototype.onMouseDown = function (ev) {
        if (this.lastClick < Object(_chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_2__["n"])(ev) - 2500) {
            this.emitTap(ev);
        }
    };
    Backdrop.prototype.emitTap = function (ev) {
        if (this.stopPropagation) {
            ev.preventDefault();
            ev.stopPropagation();
        }
        if (this.tappable) {
            this.ionBackdropTap.emit();
        }
    };
    Backdrop.prototype.hostData = function () {
        var _a;
        var mode = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        return {
            tabindex: '-1',
            class: (_a = {},
                _a[mode] = true,
                _a['backdrop-hide'] = !this.visible,
                _a['backdrop-no-tappable'] = !this.tappable,
                _a)
        };
    };
    Backdrop.prototype.render = function () { return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["H"], this.hostData()); };
    Object.defineProperty(Backdrop, "style", {
        get: function () { return ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color,#000)}"; },
        enumerable: true,
        configurable: true
    });
    return Backdrop;
}());



/***/ })

}]);
//# sourceMappingURL=14.js.map