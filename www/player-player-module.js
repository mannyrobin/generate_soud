(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["player-player-module"],{

/***/ "./node_modules/@angular/cdk/esm5/bidi.es5.js":
/*!****************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/bidi.es5.js ***!
  \****************************************************/
/*! exports provided: Directionality, DIR_DOCUMENT, Dir, BidiModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Directionality", function() { return Directionality; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIR_DOCUMENT", function() { return DIR_DOCUMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dir", function() { return Dir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidiModule", function() { return BidiModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DIR_DOCUMENT_FACTORY; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token used to inject the document into Directionality.
 * This is used so that the value can be faked in tests.
 *
 * We can't use the real document in tests because changing the real `dir` causes geometry-based
 * tests in Safari to fail.
 *
 * We also can't re-provide the DOCUMENT token from platform-brower because the unit tests
 * themselves use things like `querySelector` in test code.
 *
 * This token is defined in a separate file from Directionality as a workaround for
 * https://github.com/angular/angular/issues/22559
 *
 * \@docs-private
 * @type {?}
 */
var DIR_DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('cdk-dir-doc', {
    providedIn: 'root',
    factory: DIR_DOCUMENT_FACTORY,
});
/**
 * \@docs-private
 * @return {?}
 */
function DIR_DOCUMENT_FACTORY() {
    return Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The directionality (LTR / RTL) context for the application (or a subtree of it).
 * Exposes the current direction and a stream of direction changes.
 */
var Directionality = /** @class */ (function () {
    function Directionality(_document) {
        /**
         * The current 'ltr' or 'rtl' value.
         */
        this.value = 'ltr';
        /**
         * Stream that emits whenever the 'ltr' / 'rtl' state changes.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        if (_document) {
            // TODO: handle 'auto' value -
            // We still need to account for dir="auto".
            // It looks like HTMLElemenet.dir is also "auto" when that's set to the attribute,
            // but getComputedStyle return either "ltr" or "rtl". avoiding getComputedStyle for now
            /** @type {?} */
            var bodyDir = _document.body ? _document.body.dir : null;
            /** @type {?} */
            var htmlDir = _document.documentElement ? _document.documentElement.dir : null;
            /** @type {?} */
            var value = bodyDir || htmlDir;
            this.value = (value === 'ltr' || value === 'rtl') ? value : 'ltr';
        }
    }
    /**
     * @return {?}
     */
    Directionality.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.change.complete();
    };
    Directionality.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    Directionality.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [DIR_DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ Directionality.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function Directionality_Factory() { return new Directionality(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(DIR_DOCUMENT, 8)); }, token: Directionality, providedIn: "root" });
    return Directionality;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive to listen for changes of direction of part of the DOM.
 *
 * Provides itself as Directionality such that descendant directives only need to ever inject
 * Directionality to get the closest direction.
 */
var Dir = /** @class */ (function () {
    function Dir() {
        /**
         * Normalized direction that accounts for invalid/unsupported values.
         */
        this._dir = 'ltr';
        /**
         * Whether the `value` has been set to its initial value.
         */
        this._isInitialized = false;
        /**
         * Event emitted when the direction changes.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(Dir.prototype, "dir", {
        /** @docs-private */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () { return this._dir; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var old = this._dir;
            /** @type {?} */
            var normalizedValue = value ? value.toLowerCase() : value;
            this._rawDir = value;
            this._dir = (normalizedValue === 'ltr' || normalizedValue === 'rtl') ? normalizedValue : 'ltr';
            if (old !== this._dir && this._isInitialized) {
                this.change.emit(this._dir);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dir.prototype, "value", {
        /** Current layout direction of the element. */
        get: /**
         * Current layout direction of the element.
         * @return {?}
         */
        function () { return this.dir; },
        enumerable: true,
        configurable: true
    });
    /** Initialize once default value has been set. */
    /**
     * Initialize once default value has been set.
     * @return {?}
     */
    Dir.prototype.ngAfterContentInit = /**
     * Initialize once default value has been set.
     * @return {?}
     */
    function () {
        this._isInitialized = true;
    };
    /**
     * @return {?}
     */
    Dir.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.change.complete();
    };
    Dir.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[dir]',
                    providers: [{ provide: Directionality, useExisting: Dir }],
                    host: { '[attr.dir]': '_rawDir' },
                    exportAs: 'dir',
                },] },
    ];
    Dir.propDecorators = {
        change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['dirChange',] }],
        dir: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return Dir;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BidiModule = /** @class */ (function () {
    function BidiModule() {
    }
    BidiModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    exports: [Dir],
                    declarations: [Dir],
                },] },
    ];
    return BidiModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=bidi.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/coercion.es5.js":
/*!********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/coercion.es5.js ***!
  \********************************************************/
/*! exports provided: coerceBooleanProperty, coerceNumberProperty, _isNumberValue, coerceArray, coerceCssPixelValue, coerceElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceBooleanProperty", function() { return coerceBooleanProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceNumberProperty", function() { return coerceNumberProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isNumberValue", function() { return _isNumberValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceArray", function() { return coerceArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceCssPixelValue", function() { return coerceCssPixelValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceElement", function() { return coerceElement; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Coerces a data-bound value (typically a string) to a boolean.
 * @param {?} value
 * @return {?}
 */
function coerceBooleanProperty(value) {
    return value != null && "" + value !== 'false';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} value
 * @param {?=} fallbackValue
 * @return {?}
 */
function coerceNumberProperty(value, fallbackValue) {
    if (fallbackValue === void 0) { fallbackValue = 0; }
    return _isNumberValue(value) ? Number(value) : fallbackValue;
}
/**
 * Whether the provided value is considered a number.
 * \@docs-private
 * @param {?} value
 * @return {?}
 */
function _isNumberValue(value) {
    // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
    // and other non-number values as NaN, where Number just uses 0) but it considers the string
    // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
    return !isNaN(parseFloat((/** @type {?} */ (value)))) && !isNaN(Number(value));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Wraps the provided value in an array, unless the provided value is an array.
 * @template T
 * @param {?} value
 * @return {?}
 */
function coerceArray(value) {
    return Array.isArray(value) ? value : [value];
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Coerces a value to a CSS pixel value.
 * @param {?} value
 * @return {?}
 */
function coerceCssPixelValue(value) {
    if (value == null) {
        return '';
    }
    return typeof value === 'string' ? value : value + "px";
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Coerces an ElementRef or an Element into an element.
 * Useful for APIs that can accept either a ref or the native element itself.
 * @template T
 * @param {?} elementOrRef
 * @return {?}
 */
function coerceElement(elementOrRef) {
    return elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] ? elementOrRef.nativeElement : elementOrRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=coercion.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/collections.es5.js":
/*!***********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/collections.es5.js ***!
  \***********************************************************/
/*! exports provided: UniqueSelectionDispatcher, ArrayDataSource, isDataSource, DataSource, getMultipleValuesInSingleSelectionError, SelectionModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueSelectionDispatcher", function() { return UniqueSelectionDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayDataSource", function() { return ArrayDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDataSource", function() { return isDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return DataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMultipleValuesInSingleSelectionError", function() { return getMultipleValuesInSingleSelectionError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionModel", function() { return SelectionModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @abstract
 * @template T
 */
var  /**
 * @abstract
 * @template T
 */
DataSource = /** @class */ (function () {
    function DataSource() {
    }
    return DataSource;
}());
/**
 * Checks whether an object is a data source.
 * @param {?} value
 * @return {?}
 */
function isDataSource(value) {
    // Check if the value is a DataSource by observing if it has a connect function. Cannot
    // be checked as an `instanceof DataSource` since people could create their own sources
    // that match the interface, but don't extend DataSource.
    return value && typeof value.connect === 'function';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * DataSource wrapper for a native array.
 * @template T
 */
var  /**
 * DataSource wrapper for a native array.
 * @template T
 */
ArrayDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ArrayDataSource, _super);
    function ArrayDataSource(_data) {
        var _this = _super.call(this) || this;
        _this._data = _data;
        return _this;
    }
    /**
     * @return {?}
     */
    ArrayDataSource.prototype.connect = /**
     * @return {?}
     */
    function () {
        return this._data instanceof rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"] ? this._data : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this._data);
    };
    /**
     * @return {?}
     */
    ArrayDataSource.prototype.disconnect = /**
     * @return {?}
     */
    function () { };
    return ArrayDataSource;
}(DataSource));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Class to be used to power selecting one or more options from a list.
 * @template T
 */
var  /**
 * Class to be used to power selecting one or more options from a list.
 * @template T
 */
SelectionModel = /** @class */ (function () {
    function SelectionModel(_multiple, initiallySelectedValues, _emitChanges) {
        var _this = this;
        if (_multiple === void 0) { _multiple = false; }
        if (_emitChanges === void 0) { _emitChanges = true; }
        this._multiple = _multiple;
        this._emitChanges = _emitChanges;
        /**
         * Currently-selected values.
         */
        this._selection = new Set();
        /**
         * Keeps track of the deselected options that haven't been emitted by the change event.
         */
        this._deselectedToEmit = [];
        /**
         * Keeps track of the selected options that haven't been emitted by the change event.
         */
        this._selectedToEmit = [];
        /**
         * Event emitted when the value has changed.
         */
        this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * Event emitted when the value has changed.
         * @deprecated Use `changed` instead.
         * \@breaking-change 8.0.0 To be changed to `changed`
         */
        this.onChange = this.changed;
        if (initiallySelectedValues && initiallySelectedValues.length) {
            if (_multiple) {
                initiallySelectedValues.forEach((/**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) { return _this._markSelected(value); }));
            }
            else {
                this._markSelected(initiallySelectedValues[0]);
            }
            // Clear the array in order to avoid firing the change event for preselected values.
            this._selectedToEmit.length = 0;
        }
    }
    Object.defineProperty(SelectionModel.prototype, "selected", {
        /** Selected values. */
        get: /**
         * Selected values.
         * @return {?}
         */
        function () {
            if (!this._selected) {
                this._selected = Array.from(this._selection.values());
            }
            return this._selected;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Selects a value or an array of values.
     */
    /**
     * Selects a value or an array of values.
     * @param {...?} values
     * @return {?}
     */
    SelectionModel.prototype.select = /**
     * Selects a value or an array of values.
     * @param {...?} values
     * @return {?}
     */
    function () {
        var _this = this;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        this._verifyValueAssignment(values);
        values.forEach((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return _this._markSelected(value); }));
        this._emitChangeEvent();
    };
    /**
     * Deselects a value or an array of values.
     */
    /**
     * Deselects a value or an array of values.
     * @param {...?} values
     * @return {?}
     */
    SelectionModel.prototype.deselect = /**
     * Deselects a value or an array of values.
     * @param {...?} values
     * @return {?}
     */
    function () {
        var _this = this;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        this._verifyValueAssignment(values);
        values.forEach((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return _this._unmarkSelected(value); }));
        this._emitChangeEvent();
    };
    /**
     * Toggles a value between selected and deselected.
     */
    /**
     * Toggles a value between selected and deselected.
     * @param {?} value
     * @return {?}
     */
    SelectionModel.prototype.toggle = /**
     * Toggles a value between selected and deselected.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.isSelected(value) ? this.deselect(value) : this.select(value);
    };
    /**
     * Clears all of the selected values.
     */
    /**
     * Clears all of the selected values.
     * @return {?}
     */
    SelectionModel.prototype.clear = /**
     * Clears all of the selected values.
     * @return {?}
     */
    function () {
        this._unmarkAll();
        this._emitChangeEvent();
    };
    /**
     * Determines whether a value is selected.
     */
    /**
     * Determines whether a value is selected.
     * @param {?} value
     * @return {?}
     */
    SelectionModel.prototype.isSelected = /**
     * Determines whether a value is selected.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this._selection.has(value);
    };
    /**
     * Determines whether the model does not have a value.
     */
    /**
     * Determines whether the model does not have a value.
     * @return {?}
     */
    SelectionModel.prototype.isEmpty = /**
     * Determines whether the model does not have a value.
     * @return {?}
     */
    function () {
        return this._selection.size === 0;
    };
    /**
     * Determines whether the model has a value.
     */
    /**
     * Determines whether the model has a value.
     * @return {?}
     */
    SelectionModel.prototype.hasValue = /**
     * Determines whether the model has a value.
     * @return {?}
     */
    function () {
        return !this.isEmpty();
    };
    /**
     * Sorts the selected values based on a predicate function.
     */
    /**
     * Sorts the selected values based on a predicate function.
     * @param {?=} predicate
     * @return {?}
     */
    SelectionModel.prototype.sort = /**
     * Sorts the selected values based on a predicate function.
     * @param {?=} predicate
     * @return {?}
     */
    function (predicate) {
        if (this._multiple && this.selected) {
            (/** @type {?} */ (this._selected)).sort(predicate);
        }
    };
    /**
     * Gets whether multiple values can be selected.
     */
    /**
     * Gets whether multiple values can be selected.
     * @return {?}
     */
    SelectionModel.prototype.isMultipleSelection = /**
     * Gets whether multiple values can be selected.
     * @return {?}
     */
    function () {
        return this._multiple;
    };
    /** Emits a change event and clears the records of selected and deselected values. */
    /**
     * Emits a change event and clears the records of selected and deselected values.
     * @private
     * @return {?}
     */
    SelectionModel.prototype._emitChangeEvent = /**
     * Emits a change event and clears the records of selected and deselected values.
     * @private
     * @return {?}
     */
    function () {
        // Clear the selected values so they can be re-cached.
        this._selected = null;
        if (this._selectedToEmit.length || this._deselectedToEmit.length) {
            this.changed.next({
                source: this,
                added: this._selectedToEmit,
                removed: this._deselectedToEmit
            });
            this._deselectedToEmit = [];
            this._selectedToEmit = [];
        }
    };
    /** Selects a value. */
    /**
     * Selects a value.
     * @private
     * @param {?} value
     * @return {?}
     */
    SelectionModel.prototype._markSelected = /**
     * Selects a value.
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!this.isSelected(value)) {
            if (!this._multiple) {
                this._unmarkAll();
            }
            this._selection.add(value);
            if (this._emitChanges) {
                this._selectedToEmit.push(value);
            }
        }
    };
    /** Deselects a value. */
    /**
     * Deselects a value.
     * @private
     * @param {?} value
     * @return {?}
     */
    SelectionModel.prototype._unmarkSelected = /**
     * Deselects a value.
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.isSelected(value)) {
            this._selection.delete(value);
            if (this._emitChanges) {
                this._deselectedToEmit.push(value);
            }
        }
    };
    /** Clears out the selected values. */
    /**
     * Clears out the selected values.
     * @private
     * @return {?}
     */
    SelectionModel.prototype._unmarkAll = /**
     * Clears out the selected values.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.isEmpty()) {
            this._selection.forEach((/**
             * @param {?} value
             * @return {?}
             */
            function (value) { return _this._unmarkSelected(value); }));
        }
    };
    /**
     * Verifies the value assignment and throws an error if the specified value array is
     * including multiple values while the selection model is not supporting multiple values.
     */
    /**
     * Verifies the value assignment and throws an error if the specified value array is
     * including multiple values while the selection model is not supporting multiple values.
     * @private
     * @param {?} values
     * @return {?}
     */
    SelectionModel.prototype._verifyValueAssignment = /**
     * Verifies the value assignment and throws an error if the specified value array is
     * including multiple values while the selection model is not supporting multiple values.
     * @private
     * @param {?} values
     * @return {?}
     */
    function (values) {
        if (values.length > 1 && !this._multiple) {
            throw getMultipleValuesInSingleSelectionError();
        }
    };
    return SelectionModel;
}());
/**
 * Returns an error that reports that multiple values are passed into a selection model
 * with a single value.
 * \@docs-private
 * @return {?}
 */
function getMultipleValuesInSingleSelectionError() {
    return Error('Cannot pass multiple values into SelectionModel with single-value mode.');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Class to coordinate unique selection based on name.
 * Intended to be consumed as an Angular service.
 * This service is needed because native radio change events are only fired on the item currently
 * being selected, and we still need to uncheck the previous selection.
 *
 * This service does not *store* any IDs and names because they may change at any time, so it is
 * less error-prone if they are simply passed through when the events occur.
 */
var UniqueSelectionDispatcher = /** @class */ (function () {
    function UniqueSelectionDispatcher() {
        this._listeners = [];
    }
    /**
     * Notify other items that selection for the given name has been set.
     * @param id ID of the item.
     * @param name Name of the item.
     */
    /**
     * Notify other items that selection for the given name has been set.
     * @param {?} id ID of the item.
     * @param {?} name Name of the item.
     * @return {?}
     */
    UniqueSelectionDispatcher.prototype.notify = /**
     * Notify other items that selection for the given name has been set.
     * @param {?} id ID of the item.
     * @param {?} name Name of the item.
     * @return {?}
     */
    function (id, name) {
        for (var _i = 0, _a = this._listeners; _i < _a.length; _i++) {
            var listener = _a[_i];
            listener(id, name);
        }
    };
    /**
     * Listen for future changes to item selection.
     * @return Function used to deregister listener
     */
    /**
     * Listen for future changes to item selection.
     * @param {?} listener
     * @return {?} Function used to deregister listener
     */
    UniqueSelectionDispatcher.prototype.listen = /**
     * Listen for future changes to item selection.
     * @param {?} listener
     * @return {?} Function used to deregister listener
     */
    function (listener) {
        var _this = this;
        this._listeners.push(listener);
        return (/**
         * @return {?}
         */
        function () {
            _this._listeners = _this._listeners.filter((/**
             * @param {?} registered
             * @return {?}
             */
            function (registered) {
                return listener !== registered;
            }));
        });
    };
    /**
     * @return {?}
     */
    UniqueSelectionDispatcher.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._listeners = [];
    };
    UniqueSelectionDispatcher.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */ UniqueSelectionDispatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({ factory: function UniqueSelectionDispatcher_Factory() { return new UniqueSelectionDispatcher(); }, token: UniqueSelectionDispatcher, providedIn: "root" });
    return UniqueSelectionDispatcher;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=collections.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/drag-drop.es5.js ***!
  \*********************************************************/
/*! exports provided: DragDrop, DragRef, DropListRef, CdkDropList, CDK_DROP_LIST, CDK_DROP_LIST_CONTAINER, moveItemInArray, transferArrayItem, copyArrayItem, DragDropModule, DragDropRegistry, CdkDropListGroup, CDK_DRAG_CONFIG_FACTORY, CDK_DRAG_CONFIG, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDrop", function() { return DragDrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragRef", function() { return DragRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropListRef", function() { return DropListRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDropList", function() { return CdkDropList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DROP_LIST", function() { return CDK_DROP_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DROP_LIST_CONTAINER", function() { return CDK_DROP_LIST_CONTAINER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveItemInArray", function() { return moveItemInArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transferArrayItem", function() { return transferArrayItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyArrayItem", function() { return copyArrayItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropModule", function() { return DragDropModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropRegistry", function() { return DragDropRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDropListGroup", function() { return CdkDropListGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DRAG_CONFIG_FACTORY", function() { return CDK_DRAG_CONFIG_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DRAG_CONFIG", function() { return CDK_DRAG_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDrag", function() { return CdkDrag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragHandle", function() { return CdkDragHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragPreview", function() { return CdkDragPreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragPlaceholder", function() { return CdkDragPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return CDK_DRAG_PARENT; });
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Shallow-extends a stylesheet object with another stylesheet object.
 * \@docs-private
 * @param {?} dest
 * @param {?} source
 * @return {?}
 */
function extendStyles(dest, source) {
    for (var key in source) {
        if (source.hasOwnProperty(key)) {
            dest[key] = (/** @type {?} */ (source[key]));
        }
    }
    return dest;
}
/**
 * Toggles whether the native drag interactions should be enabled for an element.
 * \@docs-private
 * @param {?} element Element on which to toggle the drag interactions.
 * @param {?} enable Whether the drag interactions should be enabled.
 * @return {?}
 */
function toggleNativeDragInteractions(element, enable) {
    /** @type {?} */
    var userSelect = enable ? '' : 'none';
    extendStyles(element.style, {
        touchAction: enable ? '' : 'none',
        webkitUserDrag: enable ? '' : 'none',
        webkitTapHighlightColor: enable ? '' : 'transparent',
        userSelect: userSelect,
        msUserSelect: userSelect,
        webkitUserSelect: userSelect,
        MozUserSelect: userSelect
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Parses a CSS time value to milliseconds.
 * @param {?} value
 * @return {?}
 */
function parseCssTimeUnitsToMs(value) {
    // Some browsers will return it in seconds, whereas others will return milliseconds.
    /** @type {?} */
    var multiplier = value.toLowerCase().indexOf('ms') > -1 ? 1 : 1000;
    return parseFloat(value) * multiplier;
}
/**
 * Gets the transform transition duration, including the delay, of an element in milliseconds.
 * @param {?} element
 * @return {?}
 */
function getTransformTransitionDurationInMs(element) {
    /** @type {?} */
    var computedStyle = getComputedStyle(element);
    /** @type {?} */
    var transitionedProperties = parseCssPropertyValue(computedStyle, 'transition-property');
    /** @type {?} */
    var property = transitionedProperties.find((/**
     * @param {?} prop
     * @return {?}
     */
    function (prop) { return prop === 'transform' || prop === 'all'; }));
    // If there's no transition for `all` or `transform`, we shouldn't do anything.
    if (!property) {
        return 0;
    }
    // Get the index of the property that we're interested in and match
    // it up to the same index in `transition-delay` and `transition-duration`.
    /** @type {?} */
    var propertyIndex = transitionedProperties.indexOf(property);
    /** @type {?} */
    var rawDurations = parseCssPropertyValue(computedStyle, 'transition-duration');
    /** @type {?} */
    var rawDelays = parseCssPropertyValue(computedStyle, 'transition-delay');
    return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) +
        parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
}
/**
 * Parses out multiple values from a computed style into an array.
 * @param {?} computedStyle
 * @param {?} name
 * @return {?}
 */
function parseCssPropertyValue(computedStyle, name) {
    /** @type {?} */
    var value = computedStyle.getPropertyValue(name);
    return value.split(',').map((/**
     * @param {?} part
     * @return {?}
     */
    function (part) { return part.trim(); }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Options that can be used to bind a passive event listener.
 * @type {?}
 */
var passiveEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({ passive: true });
/**
 * Options that can be used to bind an active event listener.
 * @type {?}
 */
var activeEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({ passive: false });
/**
 * Time in milliseconds for which to ignore mouse events, after
 * receiving a touch event. Used to avoid doing double work for
 * touch devices where the browser fires fake mouse events, in
 * addition to touch events.
 * @type {?}
 */
var MOUSE_EVENT_IGNORE_TIME = 800;
/**
 * Reference to a draggable item. Used to manipulate or dispose of the item.
 * \@docs-private
 * @template T
 */
var  /**
 * Reference to a draggable item. Used to manipulate or dispose of the item.
 * \@docs-private
 * @template T
 */
DragRef = /** @class */ (function () {
    function DragRef(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry) {
        var _this = this;
        this._config = _config;
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._dragDropRegistry = _dragDropRegistry;
        /**
         * CSS `transform` applied to the element when it isn't being dragged. We need a
         * passive transform in order for the dragged element to retain its new position
         * after the user has stopped dragging and because we need to know the relative
         * position in case they start dragging again. This corresponds to `element.style.transform`.
         */
        this._passiveTransform = { x: 0, y: 0 };
        /**
         * CSS `transform` that is applied to the element while it's being dragged.
         */
        this._activeTransform = { x: 0, y: 0 };
        /**
         * Emits when the item is being moved.
         */
        this._moveEvents = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Subscription to pointer movement events.
         */
        this._pointerMoveSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Subscription to the event that is dispatched when the user lifts their pointer.
         */
        this._pointerUpSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Subscription to the viewport being scrolled.
         */
        this._scrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Subscription to the viewport being resized.
         */
        this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Cached reference to the boundary element.
         */
        this._boundaryElement = null;
        /**
         * Whether the native dragging interactions have been enabled on the root element.
         */
        this._nativeInteractionsEnabled = true;
        /**
         * Elements that can be used to drag the draggable item.
         */
        this._handles = [];
        /**
         * Registered handles that are currently disabled.
         */
        this._disabledHandles = new Set();
        /**
         * Layout direction of the item.
         */
        this._direction = 'ltr';
        /**
         * Amount of milliseconds to wait after the user has put their
         * pointer down before starting to drag the element.
         */
        this.dragStartDelay = 0;
        this._disabled = false;
        /**
         * Emits as the drag sequence is being prepared.
         */
        this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user starts dragging the item.
         */
        this.started = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user has released a drag item, before any animations have started.
         */
        this.released = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user stops dragging an item in the container.
         */
        this.ended = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user has moved the item into a new container.
         */
        this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user removes the item its container by dragging it into another container.
         */
        this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user drops the item inside a container.
         */
        this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits as the user is dragging the item. Use with caution,
         * because this event will fire for every pixel that the user has dragged.
         */
        this.moved = this._moveEvents.asObservable();
        /**
         * Handler for the `mousedown`/`touchstart` events.
         */
        this._pointerDown = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.beforeStarted.next();
            // Delegate the event based on whether it started from a handle or the element itself.
            if (_this._handles.length) {
                /** @type {?} */
                var targetHandle = _this._handles.find((/**
                 * @param {?} handle
                 * @return {?}
                 */
                function (handle) {
                    /** @type {?} */
                    var target = event.target;
                    return !!target && (target === handle || handle.contains((/** @type {?} */ (target))));
                }));
                if (targetHandle && !_this._disabledHandles.has(targetHandle) && !_this.disabled) {
                    _this._initializeDragSequence(targetHandle, event);
                }
            }
            else if (!_this.disabled) {
                _this._initializeDragSequence(_this._rootElement, event);
            }
        });
        /**
         * Handler that is invoked when the user moves their pointer after they've initiated a drag.
         */
        this._pointerMove = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (!_this._hasStartedDragging) {
                /** @type {?} */
                var pointerPosition = _this._getPointerPositionOnPage(event);
                /** @type {?} */
                var distanceX = Math.abs(pointerPosition.x - _this._pickupPositionOnPage.x);
                /** @type {?} */
                var distanceY = Math.abs(pointerPosition.y - _this._pickupPositionOnPage.y);
                /** @type {?} */
                var isOverThreshold = distanceX + distanceY >= _this._config.dragStartThreshold;
                // Only start dragging after the user has moved more than the minimum distance in either
                // direction. Note that this is preferrable over doing something like `skip(minimumDistance)`
                // in the `pointerMove` subscription, because we're not guaranteed to have one move event
                // per pixel of movement (e.g. if the user moves their pointer quickly).
                if (isOverThreshold) {
                    /** @type {?} */
                    var isDelayElapsed = Date.now() >= _this._dragStartTime + (_this.dragStartDelay || 0);
                    if (!isDelayElapsed) {
                        _this._endDragSequence(event);
                        return;
                    }
                    // Prevent other drag sequences from starting while something in the container is still
                    // being dragged. This can happen while we're waiting for the drop animation to finish
                    // and can cause errors, because some elements might still be moving around.
                    if (!_this._dropContainer || !_this._dropContainer.isDragging()) {
                        _this._hasStartedDragging = true;
                        _this._ngZone.run((/**
                         * @return {?}
                         */
                        function () { return _this._startDragSequence(event); }));
                    }
                }
                return;
            }
            // We only need the preview dimensions if we have a boundary element.
            if (_this._boundaryElement) {
                // Cache the preview element rect if we haven't cached it already or if
                // we cached it too early before the element dimensions were computed.
                if (!_this._previewRect || (!_this._previewRect.width && !_this._previewRect.height)) {
                    _this._previewRect = (_this._preview || _this._rootElement).getBoundingClientRect();
                }
            }
            /** @type {?} */
            var constrainedPointerPosition = _this._getConstrainedPointerPosition(event);
            _this._hasMoved = true;
            event.preventDefault();
            _this._updatePointerDirectionDelta(constrainedPointerPosition);
            if (_this._dropContainer) {
                _this._updateActiveDropContainer(constrainedPointerPosition);
            }
            else {
                /** @type {?} */
                var activeTransform = _this._activeTransform;
                activeTransform.x =
                    constrainedPointerPosition.x - _this._pickupPositionOnPage.x + _this._passiveTransform.x;
                activeTransform.y =
                    constrainedPointerPosition.y - _this._pickupPositionOnPage.y + _this._passiveTransform.y;
                _this._applyRootElementTransform(activeTransform.x, activeTransform.y);
                // Apply transform as attribute if dragging and svg element to work for IE
                if (typeof SVGElement !== 'undefined' && _this._rootElement instanceof SVGElement) {
                    /** @type {?} */
                    var appliedTransform = "translate(" + activeTransform.x + " " + activeTransform.y + ")";
                    _this._rootElement.setAttribute('transform', appliedTransform);
                }
            }
            // Since this event gets fired for every pixel while dragging, we only
            // want to fire it if the consumer opted into it. Also we have to
            // re-enter the zone because we run all of the events on the outside.
            if (_this._moveEvents.observers.length) {
                _this._ngZone.run((/**
                 * @return {?}
                 */
                function () {
                    _this._moveEvents.next({
                        source: _this,
                        pointerPosition: constrainedPointerPosition,
                        event: event,
                        distance: _this._getDragDistance(constrainedPointerPosition),
                        delta: _this._pointerDirectionDelta
                    });
                }));
            }
        });
        /**
         * Handler that is invoked when the user lifts their pointer up, after initiating a drag.
         */
        this._pointerUp = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this._endDragSequence(event);
        });
        this.withRootElement(element);
        _dragDropRegistry.registerDragItem(this);
    }
    Object.defineProperty(DragRef.prototype, "disabled", {
        /** Whether starting to drag this element is disabled. */
        get: /**
         * Whether starting to drag this element is disabled.
         * @return {?}
         */
        function () {
            return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            if (newValue !== this._disabled) {
                this._disabled = newValue;
                this._toggleNativeDragInteractions();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     */
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     * @return {?}
     */
    DragRef.prototype.getPlaceholderElement = /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     * @return {?}
     */
    function () {
        return this._placeholder;
    };
    /** Returns the root draggable element. */
    /**
     * Returns the root draggable element.
     * @return {?}
     */
    DragRef.prototype.getRootElement = /**
     * Returns the root draggable element.
     * @return {?}
     */
    function () {
        return this._rootElement;
    };
    /** Registers the handles that can be used to drag the element. */
    /**
     * Registers the handles that can be used to drag the element.
     * @template THIS
     * @this {THIS}
     * @param {?} handles
     * @return {THIS}
     */
    DragRef.prototype.withHandles = /**
     * Registers the handles that can be used to drag the element.
     * @template THIS
     * @this {THIS}
     * @param {?} handles
     * @return {THIS}
     */
    function (handles) {
        (/** @type {?} */ (this))._handles = handles.map((/**
         * @param {?} handle
         * @return {?}
         */
        function (handle) { return Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(handle); }));
        (/** @type {?} */ (this))._handles.forEach((/**
         * @param {?} handle
         * @return {?}
         */
        function (handle) { return toggleNativeDragInteractions(handle, false); }));
        (/** @type {?} */ (this))._toggleNativeDragInteractions();
        return (/** @type {?} */ (this));
    };
    /**
     * Registers the template that should be used for the drag preview.
     * @param template Template that from which to stamp out the preview.
     */
    /**
     * Registers the template that should be used for the drag preview.
     * @template THIS
     * @this {THIS}
     * @param {?} template Template that from which to stamp out the preview.
     * @return {THIS}
     */
    DragRef.prototype.withPreviewTemplate = /**
     * Registers the template that should be used for the drag preview.
     * @template THIS
     * @this {THIS}
     * @param {?} template Template that from which to stamp out the preview.
     * @return {THIS}
     */
    function (template) {
        (/** @type {?} */ (this))._previewTemplate = template;
        return (/** @type {?} */ (this));
    };
    /**
     * Registers the template that should be used for the drag placeholder.
     * @param template Template that from which to stamp out the placeholder.
     */
    /**
     * Registers the template that should be used for the drag placeholder.
     * @template THIS
     * @this {THIS}
     * @param {?} template Template that from which to stamp out the placeholder.
     * @return {THIS}
     */
    DragRef.prototype.withPlaceholderTemplate = /**
     * Registers the template that should be used for the drag placeholder.
     * @template THIS
     * @this {THIS}
     * @param {?} template Template that from which to stamp out the placeholder.
     * @return {THIS}
     */
    function (template) {
        (/** @type {?} */ (this))._placeholderTemplate = template;
        return (/** @type {?} */ (this));
    };
    /**
     * Sets an alternate drag root element. The root element is the element that will be moved as
     * the user is dragging. Passing an alternate root element is useful when trying to enable
     * dragging on an element that you might not have access to.
     */
    /**
     * Sets an alternate drag root element. The root element is the element that will be moved as
     * the user is dragging. Passing an alternate root element is useful when trying to enable
     * dragging on an element that you might not have access to.
     * @template THIS
     * @this {THIS}
     * @param {?} rootElement
     * @return {THIS}
     */
    DragRef.prototype.withRootElement = /**
     * Sets an alternate drag root element. The root element is the element that will be moved as
     * the user is dragging. Passing an alternate root element is useful when trying to enable
     * dragging on an element that you might not have access to.
     * @template THIS
     * @this {THIS}
     * @param {?} rootElement
     * @return {THIS}
     */
    function (rootElement) {
        /** @type {?} */
        var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(rootElement);
        if (element !== (/** @type {?} */ (this))._rootElement) {
            if ((/** @type {?} */ (this))._rootElement) {
                (/** @type {?} */ (this))._removeRootElementListeners((/** @type {?} */ (this))._rootElement);
            }
            element.addEventListener('mousedown', (/** @type {?} */ (this))._pointerDown, activeEventListenerOptions);
            element.addEventListener('touchstart', (/** @type {?} */ (this))._pointerDown, passiveEventListenerOptions);
            (/** @type {?} */ (this))._initialTransform = undefined;
            (/** @type {?} */ (this))._rootElement = element;
        }
        return (/** @type {?} */ (this));
    };
    /**
     * Element to which the draggable's position will be constrained.
     */
    /**
     * Element to which the draggable's position will be constrained.
     * @template THIS
     * @this {THIS}
     * @param {?} boundaryElement
     * @return {THIS}
     */
    DragRef.prototype.withBoundaryElement = /**
     * Element to which the draggable's position will be constrained.
     * @template THIS
     * @this {THIS}
     * @param {?} boundaryElement
     * @return {THIS}
     */
    function (boundaryElement) {
        var _this = this;
        (/** @type {?} */ (this))._boundaryElement = boundaryElement ? Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(boundaryElement) : null;
        (/** @type {?} */ (this))._resizeSubscription.unsubscribe();
        if (boundaryElement) {
            (/** @type {?} */ (this))._resizeSubscription = (/** @type {?} */ (this))._viewportRuler
                .change(10)
                .subscribe((/**
             * @return {?}
             */
            function () { return (/** @type {?} */ (_this))._containInsideBoundaryOnResize(); }));
        }
        return (/** @type {?} */ (this));
    };
    /** Removes the dragging functionality from the DOM element. */
    /**
     * Removes the dragging functionality from the DOM element.
     * @return {?}
     */
    DragRef.prototype.dispose = /**
     * Removes the dragging functionality from the DOM element.
     * @return {?}
     */
    function () {
        this._removeRootElementListeners(this._rootElement);
        // Do this check before removing from the registry since it'll
        // stop being considered as dragged once it is removed.
        if (this.isDragging()) {
            // Since we move out the element to the end of the body while it's being
            // dragged, we have to make sure that it's removed if it gets destroyed.
            removeElement(this._rootElement);
        }
        this._destroyPreview();
        this._destroyPlaceholder();
        this._dragDropRegistry.removeDragItem(this);
        this._removeSubscriptions();
        this.beforeStarted.complete();
        this.started.complete();
        this.released.complete();
        this.ended.complete();
        this.entered.complete();
        this.exited.complete();
        this.dropped.complete();
        this._moveEvents.complete();
        this._handles = [];
        this._disabledHandles.clear();
        this._dropContainer = undefined;
        this._boundaryElement = this._rootElement = this._placeholderTemplate =
            this._previewTemplate = this._nextSibling = (/** @type {?} */ (null));
    };
    /** Checks whether the element is currently being dragged. */
    /**
     * Checks whether the element is currently being dragged.
     * @return {?}
     */
    DragRef.prototype.isDragging = /**
     * Checks whether the element is currently being dragged.
     * @return {?}
     */
    function () {
        return this._hasStartedDragging && this._dragDropRegistry.isDragging(this);
    };
    /** Resets a standalone drag item to its initial position. */
    /**
     * Resets a standalone drag item to its initial position.
     * @return {?}
     */
    DragRef.prototype.reset = /**
     * Resets a standalone drag item to its initial position.
     * @return {?}
     */
    function () {
        this._rootElement.style.transform = this._initialTransform || '';
        this._activeTransform = { x: 0, y: 0 };
        this._passiveTransform = { x: 0, y: 0 };
    };
    /**
     * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
     * @param handle Handle element that should be disabled.
     */
    /**
     * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
     * @param {?} handle Handle element that should be disabled.
     * @return {?}
     */
    DragRef.prototype.disableHandle = /**
     * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
     * @param {?} handle Handle element that should be disabled.
     * @return {?}
     */
    function (handle) {
        if (this._handles.indexOf(handle) > -1) {
            this._disabledHandles.add(handle);
        }
    };
    /**
     * Enables a handle, if it has been disabled.
     * @param handle Handle element to be enabled.
     */
    /**
     * Enables a handle, if it has been disabled.
     * @param {?} handle Handle element to be enabled.
     * @return {?}
     */
    DragRef.prototype.enableHandle = /**
     * Enables a handle, if it has been disabled.
     * @param {?} handle Handle element to be enabled.
     * @return {?}
     */
    function (handle) {
        this._disabledHandles.delete(handle);
    };
    /** Sets the layout direction of the draggable item. */
    /**
     * Sets the layout direction of the draggable item.
     * @template THIS
     * @this {THIS}
     * @param {?} direction
     * @return {THIS}
     */
    DragRef.prototype.withDirection = /**
     * Sets the layout direction of the draggable item.
     * @template THIS
     * @this {THIS}
     * @param {?} direction
     * @return {THIS}
     */
    function (direction) {
        (/** @type {?} */ (this))._direction = direction;
        return (/** @type {?} */ (this));
    };
    /** Sets the container that the item is part of. */
    /**
     * Sets the container that the item is part of.
     * @param {?} container
     * @return {?}
     */
    DragRef.prototype._withDropContainer = /**
     * Sets the container that the item is part of.
     * @param {?} container
     * @return {?}
     */
    function (container) {
        this._dropContainer = container;
    };
    /**
     * Gets the current position in pixels the draggable outside of a drop container.
     */
    /**
     * Gets the current position in pixels the draggable outside of a drop container.
     * @return {?}
     */
    DragRef.prototype.getFreeDragPosition = /**
     * Gets the current position in pixels the draggable outside of a drop container.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var position = this.isDragging() ? this._activeTransform : this._passiveTransform;
        return { x: position.x, y: position.y };
    };
    /**
     * Sets the current position in pixels the draggable outside of a drop container.
     * @param value New position to be set.
     */
    /**
     * Sets the current position in pixels the draggable outside of a drop container.
     * @template THIS
     * @this {THIS}
     * @param {?} value New position to be set.
     * @return {THIS}
     */
    DragRef.prototype.setFreeDragPosition = /**
     * Sets the current position in pixels the draggable outside of a drop container.
     * @template THIS
     * @this {THIS}
     * @param {?} value New position to be set.
     * @return {THIS}
     */
    function (value) {
        (/** @type {?} */ (this))._activeTransform = { x: 0, y: 0 };
        (/** @type {?} */ (this))._passiveTransform.x = value.x;
        (/** @type {?} */ (this))._passiveTransform.y = value.y;
        if (!(/** @type {?} */ (this))._dropContainer) {
            (/** @type {?} */ (this))._applyRootElementTransform(value.x, value.y);
        }
        return (/** @type {?} */ (this));
    };
    /** Updates the item's sort order based on the last-known pointer position. */
    /**
     * Updates the item's sort order based on the last-known pointer position.
     * @return {?}
     */
    DragRef.prototype._sortFromLastPointerPosition = /**
     * Updates the item's sort order based on the last-known pointer position.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var position = this._pointerPositionAtLastDirectionChange;
        if (position && this._dropContainer) {
            this._updateActiveDropContainer(position);
        }
    };
    /** Unsubscribes from the global subscriptions. */
    /**
     * Unsubscribes from the global subscriptions.
     * @private
     * @return {?}
     */
    DragRef.prototype._removeSubscriptions = /**
     * Unsubscribes from the global subscriptions.
     * @private
     * @return {?}
     */
    function () {
        this._pointerMoveSubscription.unsubscribe();
        this._pointerUpSubscription.unsubscribe();
        this._scrollSubscription.unsubscribe();
    };
    /** Destroys the preview element and its ViewRef. */
    /**
     * Destroys the preview element and its ViewRef.
     * @private
     * @return {?}
     */
    DragRef.prototype._destroyPreview = /**
     * Destroys the preview element and its ViewRef.
     * @private
     * @return {?}
     */
    function () {
        if (this._preview) {
            removeElement(this._preview);
        }
        if (this._previewRef) {
            this._previewRef.destroy();
        }
        this._preview = this._previewRef = (/** @type {?} */ (null));
    };
    /** Destroys the placeholder element and its ViewRef. */
    /**
     * Destroys the placeholder element and its ViewRef.
     * @private
     * @return {?}
     */
    DragRef.prototype._destroyPlaceholder = /**
     * Destroys the placeholder element and its ViewRef.
     * @private
     * @return {?}
     */
    function () {
        if (this._placeholder) {
            removeElement(this._placeholder);
        }
        if (this._placeholderRef) {
            this._placeholderRef.destroy();
        }
        this._placeholder = this._placeholderRef = (/** @type {?} */ (null));
    };
    /**
     * Clears subscriptions and stops the dragging sequence.
     * @param event Browser event object that ended the sequence.
     */
    /**
     * Clears subscriptions and stops the dragging sequence.
     * @private
     * @param {?} event Browser event object that ended the sequence.
     * @return {?}
     */
    DragRef.prototype._endDragSequence = /**
     * Clears subscriptions and stops the dragging sequence.
     * @private
     * @param {?} event Browser event object that ended the sequence.
     * @return {?}
     */
    function (event) {
        var _this = this;
        // Note that here we use `isDragging` from the service, rather than from `this`.
        // The difference is that the one from the service reflects whether a dragging sequence
        // has been initiated, whereas the one on `this` includes whether the user has passed
        // the minimum dragging threshold.
        if (!this._dragDropRegistry.isDragging(this)) {
            return;
        }
        this._removeSubscriptions();
        this._dragDropRegistry.stopDragging(this);
        this._toggleNativeDragInteractions();
        if (this._handles) {
            this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight;
        }
        if (!this._hasStartedDragging) {
            return;
        }
        this.released.next({ source: this });
        if (this._dropContainer) {
            // Stop scrolling immediately, instead of waiting for the animation to finish.
            this._dropContainer._stopScrolling();
            this._animatePreviewToPlaceholder().then((/**
             * @return {?}
             */
            function () {
                _this._cleanupDragArtifacts(event);
                _this._cleanupCachedDimensions();
                _this._dragDropRegistry.stopDragging(_this);
            }));
        }
        else {
            // Convert the active transform into a passive one. This means that next time
            // the user starts dragging the item, its position will be calculated relatively
            // to the new passive transform.
            this._passiveTransform.x = this._activeTransform.x;
            this._passiveTransform.y = this._activeTransform.y;
            this._ngZone.run((/**
             * @return {?}
             */
            function () {
                _this.ended.next({
                    source: _this,
                    distance: _this._getDragDistance(_this._getPointerPositionOnPage(event))
                });
            }));
            this._cleanupCachedDimensions();
            this._dragDropRegistry.stopDragging(this);
        }
    };
    /** Starts the dragging sequence. */
    /**
     * Starts the dragging sequence.
     * @private
     * @param {?} event
     * @return {?}
     */
    DragRef.prototype._startDragSequence = /**
     * Starts the dragging sequence.
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // Emit the event on the item before the one on the container.
        this.started.next({ source: this });
        if (isTouchEvent(event)) {
            this._lastTouchEventTime = Date.now();
        }
        this._toggleNativeDragInteractions();
        if (this._dropContainer) {
            /** @type {?} */
            var element = this._rootElement;
            // Grab the `nextSibling` before the preview and placeholder
            // have been created so we don't get the preview by accident.
            this._nextSibling = element.nextSibling;
            /** @type {?} */
            var preview = this._preview = this._createPreviewElement();
            /** @type {?} */
            var placeholder = this._placeholder = this._createPlaceholderElement();
            // We move the element out at the end of the body and we make it hidden, because keeping it in
            // place will throw off the consumer's `:last-child` selectors. We can't remove the element
            // from the DOM completely, because iOS will stop firing all subsequent events in the chain.
            element.style.display = 'none';
            this._document.body.appendChild((/** @type {?} */ (element.parentNode)).replaceChild(placeholder, element));
            getPreviewInsertionPoint(this._document).appendChild(preview);
            this._dropContainer.start();
        }
    };
    /**
     * Sets up the different variables and subscriptions
     * that will be necessary for the dragging sequence.
     * @param referenceElement Element that started the drag sequence.
     * @param event Browser event object that started the sequence.
     */
    /**
     * Sets up the different variables and subscriptions
     * that will be necessary for the dragging sequence.
     * @private
     * @param {?} referenceElement Element that started the drag sequence.
     * @param {?} event Browser event object that started the sequence.
     * @return {?}
     */
    DragRef.prototype._initializeDragSequence = /**
     * Sets up the different variables and subscriptions
     * that will be necessary for the dragging sequence.
     * @private
     * @param {?} referenceElement Element that started the drag sequence.
     * @param {?} event Browser event object that started the sequence.
     * @return {?}
     */
    function (referenceElement, event) {
        var _this = this;
        // Always stop propagation for the event that initializes
        // the dragging sequence, in order to prevent it from potentially
        // starting another sequence for a draggable parent somewhere up the DOM tree.
        event.stopPropagation();
        /** @type {?} */
        var isDragging = this.isDragging();
        /** @type {?} */
        var isTouchSequence = isTouchEvent(event);
        /** @type {?} */
        var isAuxiliaryMouseButton = !isTouchSequence && ((/** @type {?} */ (event))).button !== 0;
        /** @type {?} */
        var rootElement = this._rootElement;
        /** @type {?} */
        var isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime &&
            this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now();
        // If the event started from an element with the native HTML drag&drop, it'll interfere
        // with our own dragging (e.g. `img` tags do it by default). Prevent the default action
        // to stop it from happening. Note that preventing on `dragstart` also seems to work, but
        // it's flaky and it fails if the user drags it away quickly. Also note that we only want
        // to do this for `mousedown` since doing the same for `touchstart` will stop any `click`
        // events from firing on touch devices.
        if (event.target && ((/** @type {?} */ (event.target))).draggable && event.type === 'mousedown') {
            event.preventDefault();
        }
        // Abort if the user is already dragging or is using a mouse button other than the primary one.
        if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent) {
            return;
        }
        // If we've got handles, we need to disable the tap highlight on the entire root element,
        // otherwise iOS will still add it, even though all the drag interactions on the handle
        // are disabled.
        if (this._handles.length) {
            this._rootElementTapHighlight = rootElement.style.webkitTapHighlightColor;
            rootElement.style.webkitTapHighlightColor = 'transparent';
        }
        this._hasStartedDragging = this._hasMoved = false;
        this._initialContainer = (/** @type {?} */ (this._dropContainer));
        // Avoid multiple subscriptions and memory leaks when multi touch
        // (isDragging check above isn't enough because of possible temporal and/or dimensional delays)
        this._removeSubscriptions();
        this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
        this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
        this._scrollSubscription = this._dragDropRegistry.scroll.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null)).subscribe((/**
         * @return {?}
         */
        function () {
            _this._scrollPosition = _this._viewportRuler.getViewportScrollPosition();
        }));
        if (this._boundaryElement) {
            this._boundaryRect = this._boundaryElement.getBoundingClientRect();
        }
        // If we have a custom preview template, the element won't be visible anyway so we avoid the
        // extra `getBoundingClientRect` calls and just move the preview next to the cursor.
        this._pickupPositionInElement = this._previewTemplate && this._previewTemplate.template ?
            { x: 0, y: 0 } :
            this._getPointerPositionInElement(referenceElement, event);
        /** @type {?} */
        var pointerPosition = this._pickupPositionOnPage = this._getPointerPositionOnPage(event);
        this._pointerDirectionDelta = { x: 0, y: 0 };
        this._pointerPositionAtLastDirectionChange = { x: pointerPosition.x, y: pointerPosition.y };
        this._dragStartTime = Date.now();
        this._dragDropRegistry.startDragging(this, event);
    };
    /** Cleans up the DOM artifacts that were added to facilitate the element being dragged. */
    /**
     * Cleans up the DOM artifacts that were added to facilitate the element being dragged.
     * @private
     * @param {?} event
     * @return {?}
     */
    DragRef.prototype._cleanupDragArtifacts = /**
     * Cleans up the DOM artifacts that were added to facilitate the element being dragged.
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        // Restore the element's visibility and insert it at its old position in the DOM.
        // It's important that we maintain the position, because moving the element around in the DOM
        // can throw off `NgFor` which does smart diffing and re-creates elements only when necessary,
        // while moving the existing elements in all other cases.
        this._rootElement.style.display = '';
        if (this._nextSibling) {
            (/** @type {?} */ (this._nextSibling.parentNode)).insertBefore(this._rootElement, this._nextSibling);
        }
        else {
            Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this._initialContainer.element).appendChild(this._rootElement);
        }
        this._destroyPreview();
        this._destroyPlaceholder();
        this._boundaryRect = this._previewRect = undefined;
        // Re-enter the NgZone since we bound `document` events on the outside.
        this._ngZone.run((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var container = (/** @type {?} */ (_this._dropContainer));
            /** @type {?} */
            var currentIndex = container.getItemIndex(_this);
            /** @type {?} */
            var pointerPosition = _this._getPointerPositionOnPage(event);
            /** @type {?} */
            var distance = _this._getDragDistance(_this._getPointerPositionOnPage(event));
            /** @type {?} */
            var isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);
            _this.ended.next({ source: _this, distance: distance });
            _this.dropped.next({
                item: _this,
                currentIndex: currentIndex,
                previousIndex: _this._initialContainer.getItemIndex(_this),
                container: container,
                previousContainer: _this._initialContainer,
                isPointerOverContainer: isPointerOverContainer,
                distance: distance
            });
            container.drop(_this, currentIndex, _this._initialContainer, isPointerOverContainer, distance);
            _this._dropContainer = _this._initialContainer;
        }));
    };
    /**
     * Updates the item's position in its drop container, or moves it
     * into a new one, depending on its current drag position.
     */
    /**
     * Updates the item's position in its drop container, or moves it
     * into a new one, depending on its current drag position.
     * @private
     * @param {?} __0
     * @return {?}
     */
    DragRef.prototype._updateActiveDropContainer = /**
     * Updates the item's position in its drop container, or moves it
     * into a new one, depending on its current drag position.
     * @private
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var _this = this;
        var x = _a.x, y = _a.y;
        // Drop container that draggable has been moved into.
        /** @type {?} */
        var newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y);
        // If we couldn't find a new container to move the item into, and the item has left its
        // initial container, check whether the it's over the initial container. This handles the
        // case where two containers are connected one way and the user tries to undo dragging an
        // item into a new container.
        if (!newContainer && this._dropContainer !== this._initialContainer &&
            this._initialContainer._isOverContainer(x, y)) {
            newContainer = this._initialContainer;
        }
        if (newContainer && newContainer !== this._dropContainer) {
            this._ngZone.run((/**
             * @return {?}
             */
            function () {
                // Notify the old container that the item has left.
                _this.exited.next({ item: _this, container: (/** @type {?} */ (_this._dropContainer)) });
                (/** @type {?} */ (_this._dropContainer)).exit(_this);
                // Notify the new container that the item has entered.
                _this._dropContainer = (/** @type {?} */ (newContainer));
                _this._dropContainer.enter(_this, x, y);
                _this.entered.next({
                    item: _this,
                    container: (/** @type {?} */ (newContainer)),
                    currentIndex: (/** @type {?} */ (newContainer)).getItemIndex(_this)
                });
            }));
        }
        (/** @type {?} */ (this._dropContainer))._startScrollingIfNecessary(x, y);
        (/** @type {?} */ (this._dropContainer))._sortItem(this, x, y, this._pointerDirectionDelta);
        this._preview.style.transform =
            getTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
    };
    /**
     * Creates the element that will be rendered next to the user's pointer
     * and will be used as a preview of the element that is being dragged.
     */
    /**
     * Creates the element that will be rendered next to the user's pointer
     * and will be used as a preview of the element that is being dragged.
     * @private
     * @return {?}
     */
    DragRef.prototype._createPreviewElement = /**
     * Creates the element that will be rendered next to the user's pointer
     * and will be used as a preview of the element that is being dragged.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var previewConfig = this._previewTemplate;
        /** @type {?} */
        var previewTemplate = previewConfig ? previewConfig.template : null;
        /** @type {?} */
        var preview;
        if (previewTemplate) {
            /** @type {?} */
            var viewRef = (/** @type {?} */ (previewConfig)).viewContainer.createEmbeddedView(previewTemplate, (/** @type {?} */ (previewConfig)).context);
            preview = getRootNode(viewRef, this._document);
            this._previewRef = viewRef;
            preview.style.transform =
                getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
        }
        else {
            /** @type {?} */
            var element = this._rootElement;
            /** @type {?} */
            var elementRect = element.getBoundingClientRect();
            preview = deepCloneNode(element);
            preview.style.width = elementRect.width + "px";
            preview.style.height = elementRect.height + "px";
            preview.style.transform = getTransform(elementRect.left, elementRect.top);
        }
        extendStyles(preview.style, {
            // It's important that we disable the pointer events on the preview, because
            // it can throw off the `document.elementFromPoint` calls in the `CdkDropList`.
            pointerEvents: 'none',
            // We have to reset the margin, because can throw off positioning relative to the viewport.
            margin: '0',
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: '1000'
        });
        toggleNativeDragInteractions(preview, false);
        preview.classList.add('cdk-drag-preview');
        preview.setAttribute('dir', this._direction);
        return preview;
    };
    /**
     * Animates the preview element from its current position to the location of the drop placeholder.
     * @returns Promise that resolves when the animation completes.
     */
    /**
     * Animates the preview element from its current position to the location of the drop placeholder.
     * @private
     * @return {?} Promise that resolves when the animation completes.
     */
    DragRef.prototype._animatePreviewToPlaceholder = /**
     * Animates the preview element from its current position to the location of the drop placeholder.
     * @private
     * @return {?} Promise that resolves when the animation completes.
     */
    function () {
        var _this = this;
        // If the user hasn't moved yet, the transitionend event won't fire.
        if (!this._hasMoved) {
            return Promise.resolve();
        }
        /** @type {?} */
        var placeholderRect = this._placeholder.getBoundingClientRect();
        // Apply the class that adds a transition to the preview.
        this._preview.classList.add('cdk-drag-animating');
        // Move the preview to the placeholder position.
        this._preview.style.transform = getTransform(placeholderRect.left, placeholderRect.top);
        // If the element doesn't have a `transition`, the `transitionend` event won't fire. Since
        // we need to trigger a style recalculation in order for the `cdk-drag-animating` class to
        // apply its style, we take advantage of the available info to figure out whether we need to
        // bind the event in the first place.
        /** @type {?} */
        var duration = getTransformTransitionDurationInMs(this._preview);
        if (duration === 0) {
            return Promise.resolve();
        }
        return this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            return new Promise((/**
             * @param {?} resolve
             * @return {?}
             */
            function (resolve) {
                /** @type {?} */
                var handler = (/** @type {?} */ (((/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    if (!event || (event.target === _this._preview && event.propertyName === 'transform')) {
                        _this._preview.removeEventListener('transitionend', handler);
                        resolve();
                        clearTimeout(timeout);
                    }
                }))));
                // If a transition is short enough, the browser might not fire the `transitionend` event.
                // Since we know how long it's supposed to take, add a timeout with a 50% buffer that'll
                // fire if the transition hasn't completed when it was supposed to.
                /** @type {?} */
                var timeout = setTimeout((/** @type {?} */ (handler)), duration * 1.5);
                _this._preview.addEventListener('transitionend', handler);
            }));
        }));
    };
    /** Creates an element that will be shown instead of the current element while dragging. */
    /**
     * Creates an element that will be shown instead of the current element while dragging.
     * @private
     * @return {?}
     */
    DragRef.prototype._createPlaceholderElement = /**
     * Creates an element that will be shown instead of the current element while dragging.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var placeholderConfig = this._placeholderTemplate;
        /** @type {?} */
        var placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
        /** @type {?} */
        var placeholder;
        if (placeholderTemplate) {
            this._placeholderRef = (/** @type {?} */ (placeholderConfig)).viewContainer.createEmbeddedView(placeholderTemplate, (/** @type {?} */ (placeholderConfig)).context);
            placeholder = getRootNode(this._placeholderRef, this._document);
        }
        else {
            placeholder = deepCloneNode(this._rootElement);
        }
        placeholder.classList.add('cdk-drag-placeholder');
        return placeholder;
    };
    /**
     * Figures out the coordinates at which an element was picked up.
     * @param referenceElement Element that initiated the dragging.
     * @param event Event that initiated the dragging.
     */
    /**
     * Figures out the coordinates at which an element was picked up.
     * @private
     * @param {?} referenceElement Element that initiated the dragging.
     * @param {?} event Event that initiated the dragging.
     * @return {?}
     */
    DragRef.prototype._getPointerPositionInElement = /**
     * Figures out the coordinates at which an element was picked up.
     * @private
     * @param {?} referenceElement Element that initiated the dragging.
     * @param {?} event Event that initiated the dragging.
     * @return {?}
     */
    function (referenceElement, event) {
        /** @type {?} */
        var elementRect = this._rootElement.getBoundingClientRect();
        /** @type {?} */
        var handleElement = referenceElement === this._rootElement ? null : referenceElement;
        /** @type {?} */
        var referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
        /** @type {?} */
        var point = isTouchEvent(event) ? event.targetTouches[0] : event;
        /** @type {?} */
        var x = point.pageX - referenceRect.left - this._scrollPosition.left;
        /** @type {?} */
        var y = point.pageY - referenceRect.top - this._scrollPosition.top;
        return {
            x: referenceRect.left - elementRect.left + x,
            y: referenceRect.top - elementRect.top + y
        };
    };
    /** Determines the point of the page that was touched by the user. */
    /**
     * Determines the point of the page that was touched by the user.
     * @private
     * @param {?} event
     * @return {?}
     */
    DragRef.prototype._getPointerPositionOnPage = /**
     * Determines the point of the page that was touched by the user.
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
        /** @type {?} */
        var point = isTouchEvent(event) ? (event.touches[0] || event.changedTouches[0]) : event;
        return {
            x: point.pageX - this._scrollPosition.left,
            y: point.pageY - this._scrollPosition.top
        };
    };
    /** Gets the pointer position on the page, accounting for any position constraints. */
    /**
     * Gets the pointer position on the page, accounting for any position constraints.
     * @private
     * @param {?} event
     * @return {?}
     */
    DragRef.prototype._getConstrainedPointerPosition = /**
     * Gets the pointer position on the page, accounting for any position constraints.
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var point = this._getPointerPositionOnPage(event);
        /** @type {?} */
        var constrainedPoint = this.constrainPosition ? this.constrainPosition(point, this) : point;
        /** @type {?} */
        var dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;
        if (this.lockAxis === 'x' || dropContainerLock === 'x') {
            constrainedPoint.y = this._pickupPositionOnPage.y;
        }
        else if (this.lockAxis === 'y' || dropContainerLock === 'y') {
            constrainedPoint.x = this._pickupPositionOnPage.x;
        }
        if (this._boundaryRect) {
            var _a = this._pickupPositionInElement, pickupX = _a.x, pickupY = _a.y;
            /** @type {?} */
            var boundaryRect = this._boundaryRect;
            /** @type {?} */
            var previewRect = (/** @type {?} */ (this._previewRect));
            /** @type {?} */
            var minY = boundaryRect.top + pickupY;
            /** @type {?} */
            var maxY = boundaryRect.bottom - (previewRect.height - pickupY);
            /** @type {?} */
            var minX = boundaryRect.left + pickupX;
            /** @type {?} */
            var maxX = boundaryRect.right - (previewRect.width - pickupX);
            constrainedPoint.x = clamp(constrainedPoint.x, minX, maxX);
            constrainedPoint.y = clamp(constrainedPoint.y, minY, maxY);
        }
        return constrainedPoint;
    };
    /** Updates the current drag delta, based on the user's current pointer position on the page. */
    /**
     * Updates the current drag delta, based on the user's current pointer position on the page.
     * @private
     * @param {?} pointerPositionOnPage
     * @return {?}
     */
    DragRef.prototype._updatePointerDirectionDelta = /**
     * Updates the current drag delta, based on the user's current pointer position on the page.
     * @private
     * @param {?} pointerPositionOnPage
     * @return {?}
     */
    function (pointerPositionOnPage) {
        var x = pointerPositionOnPage.x, y = pointerPositionOnPage.y;
        /** @type {?} */
        var delta = this._pointerDirectionDelta;
        /** @type {?} */
        var positionSinceLastChange = this._pointerPositionAtLastDirectionChange;
        // Amount of pixels the user has dragged since the last time the direction changed.
        /** @type {?} */
        var changeX = Math.abs(x - positionSinceLastChange.x);
        /** @type {?} */
        var changeY = Math.abs(y - positionSinceLastChange.y);
        // Because we handle pointer events on a per-pixel basis, we don't want the delta
        // to change for every pixel, otherwise anything that depends on it can look erratic.
        // To make the delta more consistent, we track how much the user has moved since the last
        // delta change and we only update it after it has reached a certain threshold.
        if (changeX > this._config.pointerDirectionChangeThreshold) {
            delta.x = x > positionSinceLastChange.x ? 1 : -1;
            positionSinceLastChange.x = x;
        }
        if (changeY > this._config.pointerDirectionChangeThreshold) {
            delta.y = y > positionSinceLastChange.y ? 1 : -1;
            positionSinceLastChange.y = y;
        }
        return delta;
    };
    /** Toggles the native drag interactions, based on how many handles are registered. */
    /**
     * Toggles the native drag interactions, based on how many handles are registered.
     * @private
     * @return {?}
     */
    DragRef.prototype._toggleNativeDragInteractions = /**
     * Toggles the native drag interactions, based on how many handles are registered.
     * @private
     * @return {?}
     */
    function () {
        if (!this._rootElement || !this._handles) {
            return;
        }
        /** @type {?} */
        var shouldEnable = this._handles.length > 0 || !this.isDragging();
        if (shouldEnable !== this._nativeInteractionsEnabled) {
            this._nativeInteractionsEnabled = shouldEnable;
            toggleNativeDragInteractions(this._rootElement, shouldEnable);
        }
    };
    /** Removes the manually-added event listeners from the root element. */
    /**
     * Removes the manually-added event listeners from the root element.
     * @private
     * @param {?} element
     * @return {?}
     */
    DragRef.prototype._removeRootElementListeners = /**
     * Removes the manually-added event listeners from the root element.
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        element.removeEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
        element.removeEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
    };
    /**
     * Applies a `transform` to the root element, taking into account any existing transforms on it.
     * @param x New transform value along the X axis.
     * @param y New transform value along the Y axis.
     */
    /**
     * Applies a `transform` to the root element, taking into account any existing transforms on it.
     * @private
     * @param {?} x New transform value along the X axis.
     * @param {?} y New transform value along the Y axis.
     * @return {?}
     */
    DragRef.prototype._applyRootElementTransform = /**
     * Applies a `transform` to the root element, taking into account any existing transforms on it.
     * @private
     * @param {?} x New transform value along the X axis.
     * @param {?} y New transform value along the Y axis.
     * @return {?}
     */
    function (x, y) {
        /** @type {?} */
        var transform = getTransform(x, y);
        // Cache the previous transform amount only after the first drag sequence, because
        // we don't want our own transforms to stack on top of each other.
        if (this._initialTransform == null) {
            this._initialTransform = this._rootElement.style.transform || '';
        }
        // Preserve the previous `transform` value, if there was one. Note that we apply our own
        // transform before the user's, because things like rotation can affect which direction
        // the element will be translated towards.
        this._rootElement.style.transform = this._initialTransform ?
            transform + ' ' + this._initialTransform : transform;
    };
    /**
     * Gets the distance that the user has dragged during the current drag sequence.
     * @param currentPosition Current position of the user's pointer.
     */
    /**
     * Gets the distance that the user has dragged during the current drag sequence.
     * @private
     * @param {?} currentPosition Current position of the user's pointer.
     * @return {?}
     */
    DragRef.prototype._getDragDistance = /**
     * Gets the distance that the user has dragged during the current drag sequence.
     * @private
     * @param {?} currentPosition Current position of the user's pointer.
     * @return {?}
     */
    function (currentPosition) {
        /** @type {?} */
        var pickupPosition = this._pickupPositionOnPage;
        if (pickupPosition) {
            return { x: currentPosition.x - pickupPosition.x, y: currentPosition.y - pickupPosition.y };
        }
        return { x: 0, y: 0 };
    };
    /** Cleans up any cached element dimensions that we don't need after dragging has stopped. */
    /**
     * Cleans up any cached element dimensions that we don't need after dragging has stopped.
     * @private
     * @return {?}
     */
    DragRef.prototype._cleanupCachedDimensions = /**
     * Cleans up any cached element dimensions that we don't need after dragging has stopped.
     * @private
     * @return {?}
     */
    function () {
        this._boundaryRect = this._previewRect = undefined;
    };
    /**
     * Checks whether the element is still inside its boundary after the viewport has been resized.
     * If not, the position is adjusted so that the element fits again.
     */
    /**
     * Checks whether the element is still inside its boundary after the viewport has been resized.
     * If not, the position is adjusted so that the element fits again.
     * @private
     * @return {?}
     */
    DragRef.prototype._containInsideBoundaryOnResize = /**
     * Checks whether the element is still inside its boundary after the viewport has been resized.
     * If not, the position is adjusted so that the element fits again.
     * @private
     * @return {?}
     */
    function () {
        var _a = this._passiveTransform, x = _a.x, y = _a.y;
        if ((x === 0 && y === 0) || this.isDragging() || !this._boundaryElement) {
            return;
        }
        /** @type {?} */
        var boundaryRect = this._boundaryElement.getBoundingClientRect();
        /** @type {?} */
        var elementRect = this._rootElement.getBoundingClientRect();
        /** @type {?} */
        var leftOverflow = boundaryRect.left - elementRect.left;
        /** @type {?} */
        var rightOverflow = elementRect.right - boundaryRect.right;
        /** @type {?} */
        var topOverflow = boundaryRect.top - elementRect.top;
        /** @type {?} */
        var bottomOverflow = elementRect.bottom - boundaryRect.bottom;
        // If the element has become wider than the boundary, we can't
        // do much to make it fit so we just anchor it to the left.
        if (boundaryRect.width > elementRect.width) {
            if (leftOverflow > 0) {
                x += leftOverflow;
            }
            if (rightOverflow > 0) {
                x -= rightOverflow;
            }
        }
        else {
            x = 0;
        }
        // If the element has become taller than the boundary, we can't
        // do much to make it fit so we just anchor it to the top.
        if (boundaryRect.height > elementRect.height) {
            if (topOverflow > 0) {
                y += topOverflow;
            }
            if (bottomOverflow > 0) {
                y -= bottomOverflow;
            }
        }
        else {
            y = 0;
        }
        if (x !== this._passiveTransform.x || y !== this._passiveTransform.y) {
            this.setFreeDragPosition({ y: y, x: x });
        }
    };
    return DragRef;
}());
/**
 * Gets a 3d `transform` that can be applied to an element.
 * @param {?} x Desired position of the element along the X axis.
 * @param {?} y Desired position of the element along the Y axis.
 * @return {?}
 */
function getTransform(x, y) {
    // Round the transforms since some browsers will
    // blur the elements for sub-pixel transforms.
    return "translate3d(" + Math.round(x) + "px, " + Math.round(y) + "px, 0)";
}
/**
 * Creates a deep clone of an element.
 * @param {?} node
 * @return {?}
 */
function deepCloneNode(node) {
    /** @type {?} */
    var clone = (/** @type {?} */ (node.cloneNode(true)));
    /** @type {?} */
    var descendantsWithId = clone.querySelectorAll('[id]');
    /** @type {?} */
    var descendantCanvases = node.querySelectorAll('canvas');
    // Remove the `id` to avoid having multiple elements with the same id on the page.
    clone.removeAttribute('id');
    for (var i = 0; i < descendantsWithId.length; i++) {
        descendantsWithId[i].removeAttribute('id');
    }
    // `cloneNode` won't transfer the content of `canvas` elements so we have to do it ourselves.
    // We match up the cloned canvas to their sources using their index in the DOM.
    if (descendantCanvases.length) {
        /** @type {?} */
        var cloneCanvases = clone.querySelectorAll('canvas');
        for (var i = 0; i < descendantCanvases.length; i++) {
            /** @type {?} */
            var correspondingCloneContext = cloneCanvases[i].getContext('2d');
            if (correspondingCloneContext) {
                correspondingCloneContext.drawImage(descendantCanvases[i], 0, 0);
            }
        }
    }
    return clone;
}
/**
 * Clamps a value between a minimum and a maximum.
 * @param {?} value
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
/**
 * Helper to remove an element from the DOM and to do all the necessary null checks.
 * @param {?} element Element to be removed.
 * @return {?}
 */
function removeElement(element) {
    if (element && element.parentNode) {
        element.parentNode.removeChild(element);
    }
}
/**
 * Determines whether an event is a touch event.
 * @param {?} event
 * @return {?}
 */
function isTouchEvent(event) {
    // This function is called for every pixel that the user has dragged so we need it to be
    // as fast as possible. Since we only bind mouse events and touch events, we can assume
    // that if the event's name starts with `t`, it's a touch event.
    return event.type[0] === 't';
}
/**
 * Gets the element into which the drag preview should be inserted.
 * @param {?} documentRef
 * @return {?}
 */
function getPreviewInsertionPoint(documentRef) {
    // We can't use the body if the user is in fullscreen mode,
    // because the preview will render under the fullscreen element.
    // TODO(crisbeto): dedupe this with the `FullscreenOverlayContainer` eventually.
    return documentRef.fullscreenElement ||
        documentRef.webkitFullscreenElement ||
        documentRef.mozFullScreenElement ||
        documentRef.msFullscreenElement ||
        documentRef.body;
}
/**
 * Gets the root HTML element of an embedded view.
 * If the root is not an HTML element it gets wrapped in one.
 * @param {?} viewRef
 * @param {?} _document
 * @return {?}
 */
function getRootNode(viewRef, _document) {
    /** @type {?} */
    var rootNode = viewRef.rootNodes[0];
    if (rootNode.nodeType !== _document.ELEMENT_NODE) {
        /** @type {?} */
        var wrapper = _document.createElement('div');
        wrapper.appendChild(rootNode);
        return wrapper;
    }
    return (/** @type {?} */ (rootNode));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Moves an item one index in an array to another.
 * @template T
 * @param {?} array Array in which to move the item.
 * @param {?} fromIndex Starting index of the item.
 * @param {?} toIndex Index to which the item should be moved.
 * @return {?}
 */
function moveItemInArray(array, fromIndex, toIndex) {
    /** @type {?} */
    var from = clamp$1(fromIndex, array.length - 1);
    /** @type {?} */
    var to = clamp$1(toIndex, array.length - 1);
    if (from === to) {
        return;
    }
    /** @type {?} */
    var target = array[from];
    /** @type {?} */
    var delta = to < from ? -1 : 1;
    for (var i = from; i !== to; i += delta) {
        array[i] = array[i + delta];
    }
    array[to] = target;
}
/**
 * Moves an item from one array to another.
 * @template T
 * @param {?} currentArray Array from which to transfer the item.
 * @param {?} targetArray Array into which to put the item.
 * @param {?} currentIndex Index of the item in its current array.
 * @param {?} targetIndex Index at which to insert the item.
 * @return {?}
 */
function transferArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
    /** @type {?} */
    var from = clamp$1(currentIndex, currentArray.length - 1);
    /** @type {?} */
    var to = clamp$1(targetIndex, targetArray.length);
    if (currentArray.length) {
        targetArray.splice(to, 0, currentArray.splice(from, 1)[0]);
    }
}
/**
 * Copies an item from one array to another, leaving it in its
 * original position in current array.
 * @template T
 * @param {?} currentArray Array from which to copy the item.
 * @param {?} targetArray Array into which is copy the item.
 * @param {?} currentIndex Index of the item in its current array.
 * @param {?} targetIndex Index at which to insert the item.
 *
 * @return {?}
 */
function copyArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
    /** @type {?} */
    var to = clamp$1(targetIndex, targetArray.length);
    if (currentArray.length) {
        targetArray.splice(to, 0, currentArray[currentIndex]);
    }
}
/**
 * Clamps a number between zero and a maximum.
 * @param {?} value
 * @param {?} max
 * @return {?}
 */
function clamp$1(value, max) {
    return Math.max(0, Math.min(max, value));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Counter used to generate unique ids for drop refs.
 * @type {?}
 */
var _uniqueIdCounter = 0;
/**
 * Proximity, as a ratio to width/height, at which a
 * dragged item will affect the drop container.
 * @type {?}
 */
var DROP_PROXIMITY_THRESHOLD = 0.05;
/**
 * Proximity, as a ratio to width/height at which to start auto-scrolling the drop list or the
 * viewport. The value comes from trying it out manually until it feels right.
 * @type {?}
 */
var SCROLL_PROXIMITY_THRESHOLD = 0.05;
/**
 * Number of pixels to scroll for each frame when auto-scrolling an element.
 * The value comes from trying it out manually until it feels right.
 * @type {?}
 */
var AUTO_SCROLL_STEP = 2;
/**
 * Reference to a drop list. Used to manipulate or dispose of the container.
 * \@docs-private
 * @template T
 */
var  /**
 * Reference to a drop list. Used to manipulate or dispose of the container.
 * \@docs-private
 * @template T
 */
DropListRef = /** @class */ (function () {
    function DropListRef(element, _dragDropRegistry, _document, _ngZone, _viewportRuler) {
        var _this = this;
        this._dragDropRegistry = _dragDropRegistry;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        /**
         * Unique ID for the drop list.
         * @deprecated No longer being used. To be removed.
         * \@breaking-change 8.0.0
         */
        this.id = "cdk-drop-list-ref-" + _uniqueIdCounter++;
        /**
         * Whether starting a dragging sequence from this container is disabled.
         */
        this.disabled = false;
        /**
         * Whether sorting items within the list is disabled.
         */
        this.sortingDisabled = false;
        /**
         * Whether auto-scrolling the view when the user
         * moves their pointer close to the edges is disabled.
         */
        this.autoScrollDisabled = false;
        /**
         * Function that is used to determine whether an item
         * is allowed to be moved into a drop container.
         */
        this.enterPredicate = (/**
         * @return {?}
         */
        function () { return true; });
        /**
         * Emits right before dragging has started.
         */
        this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user has moved a new drag item into this container.
         */
        this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user removes an item from the container
         * by dragging it into another container.
         */
        this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user drops an item inside the container.
         */
        this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits as the user is swapping items while actively dragging.
         */
        this.sorted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Whether an item in the list is being dragged.
         */
        this._isDragging = false;
        /**
         * Cache of the dimensions of all the items inside the container.
         */
        this._itemPositions = [];
        /**
         * Keeps track of the container's scroll position.
         */
        this._scrollPosition = { top: 0, left: 0 };
        /**
         * Keeps track of the scroll position of the viewport.
         */
        this._viewportScrollPosition = { top: 0, left: 0 };
        /**
         * Keeps track of the item that was last swapped with the dragged item, as
         * well as what direction the pointer was moving in when the swap occured.
         */
        this._previousSwap = { drag: (/** @type {?} */ (null)), delta: 0 };
        /**
         * Drop lists that are connected to the current one.
         */
        this._siblings = [];
        /**
         * Direction in which the list is oriented.
         */
        this._orientation = 'vertical';
        /**
         * Connected siblings that currently have a dragged item.
         */
        this._activeSiblings = new Set();
        /**
         * Layout direction of the drop list.
         */
        this._direction = 'ltr';
        /**
         * Subscription to the window being scrolled.
         */
        this._viewportScrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Vertical direction in which the list is currently scrolling.
         */
        this._verticalScrollDirection = 0 /* NONE */;
        /**
         * Horizontal direction in which the list is currently scrolling.
         */
        this._horizontalScrollDirection = 0 /* NONE */;
        /**
         * Used to signal to the current auto-scroll sequence when to stop.
         */
        this._stopScrollTimers = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Handles the container being scrolled. Has to be an arrow function to preserve the context.
         */
        this._handleScroll = (/**
         * @return {?}
         */
        function () {
            if (!_this.isDragging()) {
                return;
            }
            /** @type {?} */
            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(_this.element);
            _this._updateAfterScroll(_this._scrollPosition, element.scrollTop, element.scrollLeft);
        });
        /**
         * Starts the interval that'll auto-scroll the element.
         */
        this._startScrollInterval = (/**
         * @return {?}
         */
        function () {
            _this._stopScrolling();
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(0, rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this._stopScrollTimers))
                .subscribe((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var node = _this._scrollNode;
                if (_this._verticalScrollDirection === 1 /* UP */) {
                    incrementVerticalScroll(node, -AUTO_SCROLL_STEP);
                }
                else if (_this._verticalScrollDirection === 2 /* DOWN */) {
                    incrementVerticalScroll(node, AUTO_SCROLL_STEP);
                }
                if (_this._horizontalScrollDirection === 1 /* LEFT */) {
                    incrementHorizontalScroll(node, -AUTO_SCROLL_STEP);
                }
                else if (_this._horizontalScrollDirection === 2 /* RIGHT */) {
                    incrementHorizontalScroll(node, AUTO_SCROLL_STEP);
                }
            }));
        });
        /** @type {?} */
        var nativeNode = this.element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(element);
        this._shadowRoot = getShadowRoot(nativeNode) || _document;
        _dragDropRegistry.registerDropContainer(this);
    }
    /** Removes the drop list functionality from the DOM element. */
    /**
     * Removes the drop list functionality from the DOM element.
     * @return {?}
     */
    DropListRef.prototype.dispose = /**
     * Removes the drop list functionality from the DOM element.
     * @return {?}
     */
    function () {
        this._stopScrolling();
        this._stopScrollTimers.complete();
        this._removeListeners();
        this.beforeStarted.complete();
        this.entered.complete();
        this.exited.complete();
        this.dropped.complete();
        this.sorted.complete();
        this._activeSiblings.clear();
        this._scrollNode = (/** @type {?} */ (null));
        this._dragDropRegistry.removeDropContainer(this);
    };
    /** Whether an item from this list is currently being dragged. */
    /**
     * Whether an item from this list is currently being dragged.
     * @return {?}
     */
    DropListRef.prototype.isDragging = /**
     * Whether an item from this list is currently being dragged.
     * @return {?}
     */
    function () {
        return this._isDragging;
    };
    /** Starts dragging an item. */
    /**
     * Starts dragging an item.
     * @return {?}
     */
    DropListRef.prototype.start = /**
     * Starts dragging an item.
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element);
        this.beforeStarted.next();
        this._isDragging = true;
        this._cacheItems();
        this._siblings.forEach((/**
         * @param {?} sibling
         * @return {?}
         */
        function (sibling) { return sibling._startReceiving(_this); }));
        this._removeListeners();
        // @breaking-change 9.0.0 Remove check for _ngZone once it's marked as a required param.
        if (this._ngZone) {
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () { return element.addEventListener('scroll', _this._handleScroll); }));
        }
        else {
            element.addEventListener('scroll', this._handleScroll);
        }
        // @breaking-change 9.0.0 Remove check for _viewportRuler once it's marked as a required param.
        if (this._viewportRuler) {
            this._listenToScrollEvents();
        }
    };
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param item Item that was moved into the container.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     */
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param {?} item Item that was moved into the container.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @return {?}
     */
    DropListRef.prototype.enter = /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param {?} item Item that was moved into the container.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @return {?}
     */
    function (item, pointerX, pointerY) {
        this.start();
        // If sorting is disabled, we want the item to return to its starting
        // position if the user is returning it to its initial container.
        /** @type {?} */
        var newIndex = this.sortingDisabled ? this._draggables.indexOf(item) : -1;
        if (newIndex === -1) {
            // We use the coordinates of where the item entered the drop
            // zone to figure out at which index it should be inserted.
            newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY);
        }
        /** @type {?} */
        var activeDraggables = this._activeDraggables;
        /** @type {?} */
        var currentIndex = activeDraggables.indexOf(item);
        /** @type {?} */
        var placeholder = item.getPlaceholderElement();
        /** @type {?} */
        var newPositionReference = activeDraggables[newIndex];
        // If the item at the new position is the same as the item that is being dragged,
        // it means that we're trying to restore the item to its initial position. In this
        // case we should use the next item from the list as the reference.
        if (newPositionReference === item) {
            newPositionReference = activeDraggables[newIndex + 1];
        }
        // Since the item may be in the `activeDraggables` already (e.g. if the user dragged it
        // into another container and back again), we have to ensure that it isn't duplicated.
        if (currentIndex > -1) {
            activeDraggables.splice(currentIndex, 1);
        }
        // Don't use items that are being dragged as a reference, because
        // their element has been moved down to the bottom of the body.
        if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
            /** @type {?} */
            var element = newPositionReference.getRootElement();
            (/** @type {?} */ (element.parentElement)).insertBefore(placeholder, element);
            activeDraggables.splice(newIndex, 0, item);
        }
        else {
            Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element).appendChild(placeholder);
            activeDraggables.push(item);
        }
        // The transform needs to be cleared so it doesn't throw off the measurements.
        placeholder.style.transform = '';
        // Note that the positions were already cached when we called `start` above,
        // but we need to refresh them since the amount of items has changed.
        this._cacheItemPositions();
        this.entered.next({ item: item, container: this, currentIndex: this.getItemIndex(item) });
    };
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param item Item that was dragged out.
     */
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param {?} item Item that was dragged out.
     * @return {?}
     */
    DropListRef.prototype.exit = /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param {?} item Item that was dragged out.
     * @return {?}
     */
    function (item) {
        this._reset();
        this.exited.next({ item: item, container: this });
    };
    /**
     * Drops an item into this container.
     * @param item Item being dropped into the container.
     * @param currentIndex Index at which the item should be inserted.
     * @param previousContainer Container from which the item got dragged in.
     * @param isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @param distance Distance the user has dragged since the start of the dragging sequence.
     * @breaking-change 9.0.0 `distance` parameter to become required.
     */
    /**
     * Drops an item into this container.
     * \@breaking-change 9.0.0 `distance` parameter to become required.
     * @param {?} item Item being dropped into the container.
     * @param {?} currentIndex Index at which the item should be inserted.
     * @param {?} previousContainer Container from which the item got dragged in.
     * @param {?} isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @param {?=} distance Distance the user has dragged since the start of the dragging sequence.
     * @return {?}
     */
    DropListRef.prototype.drop = /**
     * Drops an item into this container.
     * \@breaking-change 9.0.0 `distance` parameter to become required.
     * @param {?} item Item being dropped into the container.
     * @param {?} currentIndex Index at which the item should be inserted.
     * @param {?} previousContainer Container from which the item got dragged in.
     * @param {?} isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @param {?=} distance Distance the user has dragged since the start of the dragging sequence.
     * @return {?}
     */
    function (item, currentIndex, previousContainer, isPointerOverContainer, distance) {
        if (distance === void 0) { distance = { x: 0, y: 0 }; }
        this._reset();
        this.dropped.next({
            item: item,
            currentIndex: currentIndex,
            previousIndex: previousContainer.getItemIndex(item),
            container: this,
            previousContainer: previousContainer,
            isPointerOverContainer: isPointerOverContainer,
            distance: distance
        });
    };
    /**
     * Sets the draggable items that are a part of this list.
     * @param items Items that are a part of this list.
     */
    /**
     * Sets the draggable items that are a part of this list.
     * @template THIS
     * @this {THIS}
     * @param {?} items Items that are a part of this list.
     * @return {THIS}
     */
    DropListRef.prototype.withItems = /**
     * Sets the draggable items that are a part of this list.
     * @template THIS
     * @this {THIS}
     * @param {?} items Items that are a part of this list.
     * @return {THIS}
     */
    function (items) {
        var _this = this;
        (/** @type {?} */ (this))._draggables = items;
        items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item._withDropContainer((/** @type {?} */ (_this))); }));
        if ((/** @type {?} */ (this)).isDragging()) {
            (/** @type {?} */ (this))._cacheItems();
        }
        return (/** @type {?} */ (this));
    };
    /** Sets the layout direction of the drop list. */
    /**
     * Sets the layout direction of the drop list.
     * @template THIS
     * @this {THIS}
     * @param {?} direction
     * @return {THIS}
     */
    DropListRef.prototype.withDirection = /**
     * Sets the layout direction of the drop list.
     * @template THIS
     * @this {THIS}
     * @param {?} direction
     * @return {THIS}
     */
    function (direction) {
        (/** @type {?} */ (this))._direction = direction;
        return (/** @type {?} */ (this));
    };
    /**
     * Sets the containers that are connected to this one. When two or more containers are
     * connected, the user will be allowed to transfer items between them.
     * @param connectedTo Other containers that the current containers should be connected to.
     */
    /**
     * Sets the containers that are connected to this one. When two or more containers are
     * connected, the user will be allowed to transfer items between them.
     * @template THIS
     * @this {THIS}
     * @param {?} connectedTo Other containers that the current containers should be connected to.
     * @return {THIS}
     */
    DropListRef.prototype.connectedTo = /**
     * Sets the containers that are connected to this one. When two or more containers are
     * connected, the user will be allowed to transfer items between them.
     * @template THIS
     * @this {THIS}
     * @param {?} connectedTo Other containers that the current containers should be connected to.
     * @return {THIS}
     */
    function (connectedTo) {
        (/** @type {?} */ (this))._siblings = connectedTo.slice();
        return (/** @type {?} */ (this));
    };
    /**
     * Sets the orientation of the container.
     * @param orientation New orientation for the container.
     */
    /**
     * Sets the orientation of the container.
     * @template THIS
     * @this {THIS}
     * @param {?} orientation New orientation for the container.
     * @return {THIS}
     */
    DropListRef.prototype.withOrientation = /**
     * Sets the orientation of the container.
     * @template THIS
     * @this {THIS}
     * @param {?} orientation New orientation for the container.
     * @return {THIS}
     */
    function (orientation) {
        (/** @type {?} */ (this))._orientation = orientation;
        return (/** @type {?} */ (this));
    };
    /**
     * Figures out the index of an item in the container.
     * @param item Item whose index should be determined.
     */
    /**
     * Figures out the index of an item in the container.
     * @param {?} item Item whose index should be determined.
     * @return {?}
     */
    DropListRef.prototype.getItemIndex = /**
     * Figures out the index of an item in the container.
     * @param {?} item Item whose index should be determined.
     * @return {?}
     */
    function (item) {
        if (!this._isDragging) {
            return this._draggables.indexOf(item);
        }
        // Items are sorted always by top/left in the cache, however they flow differently in RTL.
        // The rest of the logic still stands no matter what orientation we're in, however
        // we need to invert the array when determining the index.
        /** @type {?} */
        var items = this._orientation === 'horizontal' && this._direction === 'rtl' ?
            this._itemPositions.slice().reverse() : this._itemPositions;
        return findIndex(items, (/**
         * @param {?} currentItem
         * @return {?}
         */
        function (currentItem) { return currentItem.drag === item; }));
    };
    /**
     * Whether the list is able to receive the item that
     * is currently being dragged inside a connected drop list.
     */
    /**
     * Whether the list is able to receive the item that
     * is currently being dragged inside a connected drop list.
     * @return {?}
     */
    DropListRef.prototype.isReceiving = /**
     * Whether the list is able to receive the item that
     * is currently being dragged inside a connected drop list.
     * @return {?}
     */
    function () {
        return this._activeSiblings.size > 0;
    };
    /**
     * Sorts an item inside the container based on its position.
     * @param item Item to be sorted.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     * @param pointerDelta Direction in which the pointer is moving along each axis.
     */
    /**
     * Sorts an item inside the container based on its position.
     * @param {?} item Item to be sorted.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
     * @return {?}
     */
    DropListRef.prototype._sortItem = /**
     * Sorts an item inside the container based on its position.
     * @param {?} item Item to be sorted.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
     * @return {?}
     */
    function (item, pointerX, pointerY, pointerDelta) {
        // Don't sort the item if sorting is disabled or it's out of range.
        if (this.sortingDisabled || !this._isPointerNearDropContainer(pointerX, pointerY)) {
            return;
        }
        /** @type {?} */
        var siblings = this._itemPositions;
        /** @type {?} */
        var newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);
        if (newIndex === -1 && siblings.length > 0) {
            return;
        }
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        /** @type {?} */
        var currentIndex = findIndex(siblings, (/**
         * @param {?} currentItem
         * @return {?}
         */
        function (currentItem) { return currentItem.drag === item; }));
        /** @type {?} */
        var siblingAtNewPosition = siblings[newIndex];
        /** @type {?} */
        var currentPosition = siblings[currentIndex].clientRect;
        /** @type {?} */
        var newPosition = siblingAtNewPosition.clientRect;
        /** @type {?} */
        var delta = currentIndex > newIndex ? 1 : -1;
        this._previousSwap.drag = siblingAtNewPosition.drag;
        this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y;
        // How many pixels the item's placeholder should be offset.
        /** @type {?} */
        var itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta);
        // How many pixels all the other items should be offset.
        /** @type {?} */
        var siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta);
        // Save the previous order of the items before moving the item to its new index.
        // We use this to check whether an item has been moved as a result of the sorting.
        /** @type {?} */
        var oldOrder = siblings.slice();
        // Shuffle the array in place.
        moveItemInArray(siblings, currentIndex, newIndex);
        this.sorted.next({
            previousIndex: currentIndex,
            currentIndex: newIndex,
            container: this,
            item: item
        });
        siblings.forEach((/**
         * @param {?} sibling
         * @param {?} index
         * @return {?}
         */
        function (sibling, index) {
            // Don't do anything if the position hasn't changed.
            if (oldOrder[index] === sibling) {
                return;
            }
            /** @type {?} */
            var isDraggedItem = sibling.drag === item;
            /** @type {?} */
            var offset = isDraggedItem ? itemOffset : siblingOffset;
            /** @type {?} */
            var elementToOffset = isDraggedItem ? item.getPlaceholderElement() :
                sibling.drag.getRootElement();
            // Update the offset to reflect the new position.
            sibling.offset += offset;
            // Since we're moving the items with a `transform`, we need to adjust their cached
            // client rects to reflect their new position, as well as swap their positions in the cache.
            // Note that we shouldn't use `getBoundingClientRect` here to update the cache, because the
            // elements may be mid-animation which will give us a wrong result.
            if (isHorizontal) {
                // Round the transforms since some browsers will
                // blur the elements, for sub-pixel transforms.
                elementToOffset.style.transform = "translate3d(" + Math.round(sibling.offset) + "px, 0, 0)";
                adjustClientRect(sibling.clientRect, 0, offset);
            }
            else {
                elementToOffset.style.transform = "translate3d(0, " + Math.round(sibling.offset) + "px, 0)";
                adjustClientRect(sibling.clientRect, offset, 0);
            }
        }));
    };
    /**
     * Checks whether the user's pointer is close to the edges of either the
     * viewport or the drop list and starts the auto-scroll sequence.
     * @param pointerX User's pointer position along the x axis.
     * @param pointerY User's pointer position along the y axis.
     */
    /**
     * Checks whether the user's pointer is close to the edges of either the
     * viewport or the drop list and starts the auto-scroll sequence.
     * @param {?} pointerX User's pointer position along the x axis.
     * @param {?} pointerY User's pointer position along the y axis.
     * @return {?}
     */
    DropListRef.prototype._startScrollingIfNecessary = /**
     * Checks whether the user's pointer is close to the edges of either the
     * viewport or the drop list and starts the auto-scroll sequence.
     * @param {?} pointerX User's pointer position along the x axis.
     * @param {?} pointerY User's pointer position along the y axis.
     * @return {?}
     */
    function (pointerX, pointerY) {
        var _a;
        if (this.autoScrollDisabled) {
            return;
        }
        /** @type {?} */
        var scrollNode;
        /** @type {?} */
        var verticalScrollDirection = 0 /* NONE */;
        /** @type {?} */
        var horizontalScrollDirection = 0 /* NONE */;
        // Check whether we should start scrolling the container.
        if (this._isPointerNearDropContainer(pointerX, pointerY)) {
            /** @type {?} */
            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element);
            _a = getElementScrollDirections(element, this._clientRect, pointerX, pointerY), verticalScrollDirection = _a[0], horizontalScrollDirection = _a[1];
            if (verticalScrollDirection || horizontalScrollDirection) {
                scrollNode = element;
            }
        }
        // @breaking-change 9.0.0 Remove null check for _viewportRuler once it's a required parameter.
        // Otherwise check if we can start scrolling the viewport.
        if (this._viewportRuler && !verticalScrollDirection && !horizontalScrollDirection) {
            var _b = this._viewportRuler.getViewportSize(), width = _b.width, height = _b.height;
            /** @type {?} */
            var clientRect = { width: width, height: height, top: 0, right: width, bottom: height, left: 0 };
            verticalScrollDirection = getVerticalScrollDirection(clientRect, pointerY);
            horizontalScrollDirection = getHorizontalScrollDirection(clientRect, pointerX);
            scrollNode = window;
        }
        if (scrollNode && (verticalScrollDirection !== this._verticalScrollDirection ||
            horizontalScrollDirection !== this._horizontalScrollDirection ||
            scrollNode !== this._scrollNode)) {
            this._verticalScrollDirection = verticalScrollDirection;
            this._horizontalScrollDirection = horizontalScrollDirection;
            this._scrollNode = scrollNode;
            if ((verticalScrollDirection || horizontalScrollDirection) && scrollNode) {
                // @breaking-change 9.0.0 Remove null check for `_ngZone` once it is made required.
                if (this._ngZone) {
                    this._ngZone.runOutsideAngular(this._startScrollInterval);
                }
                else {
                    this._startScrollInterval();
                }
            }
            else {
                this._stopScrolling();
            }
        }
    };
    /** Stops any currently-running auto-scroll sequences. */
    /**
     * Stops any currently-running auto-scroll sequences.
     * @return {?}
     */
    DropListRef.prototype._stopScrolling = /**
     * Stops any currently-running auto-scroll sequences.
     * @return {?}
     */
    function () {
        this._stopScrollTimers.next();
    };
    /** Caches the position of the drop list. */
    /**
     * Caches the position of the drop list.
     * @private
     * @return {?}
     */
    DropListRef.prototype._cacheOwnPosition = /**
     * Caches the position of the drop list.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element);
        this._clientRect = getMutableClientRect(element);
        this._scrollPosition = { top: element.scrollTop, left: element.scrollLeft };
    };
    /** Refreshes the position cache of the items and sibling containers. */
    /**
     * Refreshes the position cache of the items and sibling containers.
     * @private
     * @return {?}
     */
    DropListRef.prototype._cacheItemPositions = /**
     * Refreshes the position cache of the items and sibling containers.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        this._itemPositions = this._activeDraggables.map((/**
         * @param {?} drag
         * @return {?}
         */
        function (drag) {
            /** @type {?} */
            var elementToMeasure = _this._dragDropRegistry.isDragging(drag) ?
                // If the element is being dragged, we have to measure the
                // placeholder, because the element is hidden.
                drag.getPlaceholderElement() :
                drag.getRootElement();
            return { drag: drag, offset: 0, clientRect: getMutableClientRect(elementToMeasure) };
        })).sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) {
            return isHorizontal ? a.clientRect.left - b.clientRect.left :
                a.clientRect.top - b.clientRect.top;
        }));
    };
    /** Resets the container to its initial state. */
    /**
     * Resets the container to its initial state.
     * @private
     * @return {?}
     */
    DropListRef.prototype._reset = /**
     * Resets the container to its initial state.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._isDragging = false;
        // TODO(crisbeto): may have to wait for the animations to finish.
        this._activeDraggables.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.getRootElement().style.transform = ''; }));
        this._siblings.forEach((/**
         * @param {?} sibling
         * @return {?}
         */
        function (sibling) { return sibling._stopReceiving(_this); }));
        this._activeDraggables = [];
        this._itemPositions = [];
        this._previousSwap.drag = null;
        this._previousSwap.delta = 0;
        this._stopScrolling();
        this._removeListeners();
    };
    /**
     * Gets the offset in pixels by which the items that aren't being dragged should be moved.
     * @param currentIndex Index of the item currently being dragged.
     * @param siblings All of the items in the list.
     * @param delta Direction in which the user is moving.
     */
    /**
     * Gets the offset in pixels by which the items that aren't being dragged should be moved.
     * @private
     * @param {?} currentIndex Index of the item currently being dragged.
     * @param {?} siblings All of the items in the list.
     * @param {?} delta Direction in which the user is moving.
     * @return {?}
     */
    DropListRef.prototype._getSiblingOffsetPx = /**
     * Gets the offset in pixels by which the items that aren't being dragged should be moved.
     * @private
     * @param {?} currentIndex Index of the item currently being dragged.
     * @param {?} siblings All of the items in the list.
     * @param {?} delta Direction in which the user is moving.
     * @return {?}
     */
    function (currentIndex, siblings, delta) {
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        /** @type {?} */
        var currentPosition = siblings[currentIndex].clientRect;
        /** @type {?} */
        var immediateSibling = siblings[currentIndex + delta * -1];
        /** @type {?} */
        var siblingOffset = currentPosition[isHorizontal ? 'width' : 'height'] * delta;
        if (immediateSibling) {
            /** @type {?} */
            var start = isHorizontal ? 'left' : 'top';
            /** @type {?} */
            var end = isHorizontal ? 'right' : 'bottom';
            // Get the spacing between the start of the current item and the end of the one immediately
            // after it in the direction in which the user is dragging, or vice versa. We add it to the
            // offset in order to push the element to where it will be when it's inline and is influenced
            // by the `margin` of its siblings.
            if (delta === -1) {
                siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
            }
            else {
                siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
            }
        }
        return siblingOffset;
    };
    /**
     * Checks whether the pointer coordinates are close to the drop container.
     * @param pointerX Coordinates along the X axis.
     * @param pointerY Coordinates along the Y axis.
     */
    /**
     * Checks whether the pointer coordinates are close to the drop container.
     * @private
     * @param {?} pointerX Coordinates along the X axis.
     * @param {?} pointerY Coordinates along the Y axis.
     * @return {?}
     */
    DropListRef.prototype._isPointerNearDropContainer = /**
     * Checks whether the pointer coordinates are close to the drop container.
     * @private
     * @param {?} pointerX Coordinates along the X axis.
     * @param {?} pointerY Coordinates along the Y axis.
     * @return {?}
     */
    function (pointerX, pointerY) {
        var _a = this._clientRect, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
        /** @type {?} */
        var xThreshold = width * DROP_PROXIMITY_THRESHOLD;
        /** @type {?} */
        var yThreshold = height * DROP_PROXIMITY_THRESHOLD;
        return pointerY > top - yThreshold && pointerY < bottom + yThreshold &&
            pointerX > left - xThreshold && pointerX < right + xThreshold;
    };
    /**
     * Gets the offset in pixels by which the item that is being dragged should be moved.
     * @param currentPosition Current position of the item.
     * @param newPosition Position of the item where the current item should be moved.
     * @param delta Direction in which the user is moving.
     */
    /**
     * Gets the offset in pixels by which the item that is being dragged should be moved.
     * @private
     * @param {?} currentPosition Current position of the item.
     * @param {?} newPosition Position of the item where the current item should be moved.
     * @param {?} delta Direction in which the user is moving.
     * @return {?}
     */
    DropListRef.prototype._getItemOffsetPx = /**
     * Gets the offset in pixels by which the item that is being dragged should be moved.
     * @private
     * @param {?} currentPosition Current position of the item.
     * @param {?} newPosition Position of the item where the current item should be moved.
     * @param {?} delta Direction in which the user is moving.
     * @return {?}
     */
    function (currentPosition, newPosition, delta) {
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        /** @type {?} */
        var itemOffset = isHorizontal ? newPosition.left - currentPosition.left :
            newPosition.top - currentPosition.top;
        // Account for differences in the item width/height.
        if (delta === -1) {
            itemOffset += isHorizontal ? newPosition.width - currentPosition.width :
                newPosition.height - currentPosition.height;
        }
        return itemOffset;
    };
    /**
     * Gets the index of an item in the drop container, based on the position of the user's pointer.
     * @param item Item that is being sorted.
     * @param pointerX Position of the user's pointer along the X axis.
     * @param pointerY Position of the user's pointer along the Y axis.
     * @param delta Direction in which the user is moving their pointer.
     */
    /**
     * Gets the index of an item in the drop container, based on the position of the user's pointer.
     * @private
     * @param {?} item Item that is being sorted.
     * @param {?} pointerX Position of the user's pointer along the X axis.
     * @param {?} pointerY Position of the user's pointer along the Y axis.
     * @param {?=} delta Direction in which the user is moving their pointer.
     * @return {?}
     */
    DropListRef.prototype._getItemIndexFromPointerPosition = /**
     * Gets the index of an item in the drop container, based on the position of the user's pointer.
     * @private
     * @param {?} item Item that is being sorted.
     * @param {?} pointerX Position of the user's pointer along the X axis.
     * @param {?} pointerY Position of the user's pointer along the Y axis.
     * @param {?=} delta Direction in which the user is moving their pointer.
     * @return {?}
     */
    function (item, pointerX, pointerY, delta) {
        var _this = this;
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        return findIndex(this._itemPositions, (/**
         * @param {?} __0
         * @param {?} _
         * @param {?} array
         * @return {?}
         */
        function (_a, _, array) {
            var drag = _a.drag, clientRect = _a.clientRect;
            if (drag === item) {
                // If there's only one item left in the container, it must be
                // the dragged item itself so we use it as a reference.
                return array.length < 2;
            }
            if (delta) {
                /** @type {?} */
                var direction = isHorizontal ? delta.x : delta.y;
                // If the user is still hovering over the same item as last time, and they didn't change
                // the direction in which they're dragging, we don't consider it a direction swap.
                if (drag === _this._previousSwap.drag && direction === _this._previousSwap.delta) {
                    return false;
                }
            }
            return isHorizontal ?
                // Round these down since most browsers report client rects with
                // sub-pixel precision, whereas the pointer coordinates are rounded to pixels.
                pointerX >= Math.floor(clientRect.left) && pointerX <= Math.floor(clientRect.right) :
                pointerY >= Math.floor(clientRect.top) && pointerY <= Math.floor(clientRect.bottom);
        }));
    };
    /** Caches the current items in the list and their positions. */
    /**
     * Caches the current items in the list and their positions.
     * @private
     * @return {?}
     */
    DropListRef.prototype._cacheItems = /**
     * Caches the current items in the list and their positions.
     * @private
     * @return {?}
     */
    function () {
        this._activeDraggables = this._draggables.slice();
        this._cacheItemPositions();
        this._cacheOwnPosition();
    };
    /**
     * Updates the internal state of the container after a scroll event has happened.
     * @param scrollPosition Object that is keeping track of the scroll position.
     * @param newTop New top scroll position.
     * @param newLeft New left scroll position.
     * @param extraClientRect Extra `ClientRect` object that should be updated, in addition to the
     *  ones of the drag items. Useful when the viewport has been scrolled and we also need to update
     *  the `ClientRect` of the list.
     */
    /**
     * Updates the internal state of the container after a scroll event has happened.
     * @private
     * @param {?} scrollPosition Object that is keeping track of the scroll position.
     * @param {?} newTop New top scroll position.
     * @param {?} newLeft New left scroll position.
     * @param {?=} extraClientRect Extra `ClientRect` object that should be updated, in addition to the
     *  ones of the drag items. Useful when the viewport has been scrolled and we also need to update
     *  the `ClientRect` of the list.
     * @return {?}
     */
    DropListRef.prototype._updateAfterScroll = /**
     * Updates the internal state of the container after a scroll event has happened.
     * @private
     * @param {?} scrollPosition Object that is keeping track of the scroll position.
     * @param {?} newTop New top scroll position.
     * @param {?} newLeft New left scroll position.
     * @param {?=} extraClientRect Extra `ClientRect` object that should be updated, in addition to the
     *  ones of the drag items. Useful when the viewport has been scrolled and we also need to update
     *  the `ClientRect` of the list.
     * @return {?}
     */
    function (scrollPosition, newTop, newLeft, extraClientRect) {
        var _this = this;
        /** @type {?} */
        var topDifference = scrollPosition.top - newTop;
        /** @type {?} */
        var leftDifference = scrollPosition.left - newLeft;
        if (extraClientRect) {
            adjustClientRect(extraClientRect, topDifference, leftDifference);
        }
        // Since we know the amount that the user has scrolled we can shift all of the client rectangles
        // ourselves. This is cheaper than re-measuring everything and we can avoid inconsistent
        // behavior where we might be measuring the element before its position has changed.
        this._itemPositions.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var clientRect = _a.clientRect;
            adjustClientRect(clientRect, topDifference, leftDifference);
        }));
        // We need two loops for this, because we want all of the cached
        // positions to be up-to-date before we re-sort the item.
        this._itemPositions.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var drag = _a.drag;
            if (_this._dragDropRegistry.isDragging(drag)) {
                // We need to re-sort the item manually, because the pointer move
                // events won't be dispatched while the user is scrolling.
                drag._sortFromLastPointerPosition();
            }
        }));
        scrollPosition.top = newTop;
        scrollPosition.left = newLeft;
    };
    /** Removes the event listeners associated with this drop list. */
    /**
     * Removes the event listeners associated with this drop list.
     * @private
     * @return {?}
     */
    DropListRef.prototype._removeListeners = /**
     * Removes the event listeners associated with this drop list.
     * @private
     * @return {?}
     */
    function () {
        Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element).removeEventListener('scroll', this._handleScroll);
        this._viewportScrollSubscription.unsubscribe();
    };
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param x Pointer position along the X axis.
     * @param y Pointer position along the Y axis.
     */
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param {?} x Pointer position along the X axis.
     * @param {?} y Pointer position along the Y axis.
     * @return {?}
     */
    DropListRef.prototype._isOverContainer = /**
     * Checks whether the user's pointer is positioned over the container.
     * @param {?} x Pointer position along the X axis.
     * @param {?} y Pointer position along the Y axis.
     * @return {?}
     */
    function (x, y) {
        return isInsideClientRect(this._clientRect, x, y);
    };
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param item Drag item that is being moved.
     * @param x Position of the item along the X axis.
     * @param y Position of the item along the Y axis.
     */
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param {?} item Drag item that is being moved.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    DropListRef.prototype._getSiblingContainerFromPosition = /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param {?} item Drag item that is being moved.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    function (item, x, y) {
        return this._siblings.find((/**
         * @param {?} sibling
         * @return {?}
         */
        function (sibling) { return sibling._canReceive(item, x, y); }));
    };
    /**
     * Checks whether the drop list can receive the passed-in item.
     * @param item Item that is being dragged into the list.
     * @param x Position of the item along the X axis.
     * @param y Position of the item along the Y axis.
     */
    /**
     * Checks whether the drop list can receive the passed-in item.
     * @param {?} item Item that is being dragged into the list.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    DropListRef.prototype._canReceive = /**
     * Checks whether the drop list can receive the passed-in item.
     * @param {?} item Item that is being dragged into the list.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    function (item, x, y) {
        if (!this.enterPredicate(item, this) || !isInsideClientRect(this._clientRect, x, y)) {
            return false;
        }
        /** @type {?} */
        var elementFromPoint = (/** @type {?} */ (this._shadowRoot.elementFromPoint(x, y)));
        // If there's no element at the pointer position, then
        // the client rect is probably scrolled out of the view.
        if (!elementFromPoint) {
            return false;
        }
        /** @type {?} */
        var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element);
        // The `ClientRect`, that we're using to find the container over which the user is
        // hovering, doesn't give us any information on whether the element has been scrolled
        // out of the view or whether it's overlapping with other containers. This means that
        // we could end up transferring the item into a container that's invisible or is positioned
        // below another one. We use the result from `elementFromPoint` to get the top-most element
        // at the pointer position and to find whether it's one of the intersecting drop containers.
        return elementFromPoint === nativeElement || nativeElement.contains(elementFromPoint);
    };
    /**
     * Called by one of the connected drop lists when a dragging sequence has started.
     * @param sibling Sibling in which dragging has started.
     */
    /**
     * Called by one of the connected drop lists when a dragging sequence has started.
     * @param {?} sibling Sibling in which dragging has started.
     * @return {?}
     */
    DropListRef.prototype._startReceiving = /**
     * Called by one of the connected drop lists when a dragging sequence has started.
     * @param {?} sibling Sibling in which dragging has started.
     * @return {?}
     */
    function (sibling) {
        /** @type {?} */
        var activeSiblings = this._activeSiblings;
        if (!activeSiblings.has(sibling)) {
            activeSiblings.add(sibling);
            this._cacheOwnPosition();
            this._listenToScrollEvents();
        }
    };
    /**
     * Called by a connected drop list when dragging has stopped.
     * @param sibling Sibling whose dragging has stopped.
     */
    /**
     * Called by a connected drop list when dragging has stopped.
     * @param {?} sibling Sibling whose dragging has stopped.
     * @return {?}
     */
    DropListRef.prototype._stopReceiving = /**
     * Called by a connected drop list when dragging has stopped.
     * @param {?} sibling Sibling whose dragging has stopped.
     * @return {?}
     */
    function (sibling) {
        this._activeSiblings.delete(sibling);
        this._viewportScrollSubscription.unsubscribe();
    };
    /**
     * Starts listening to scroll events on the viewport.
     * Used for updating the internal state of the list.
     */
    /**
     * Starts listening to scroll events on the viewport.
     * Used for updating the internal state of the list.
     * @private
     * @return {?}
     */
    DropListRef.prototype._listenToScrollEvents = /**
     * Starts listening to scroll events on the viewport.
     * Used for updating the internal state of the list.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._viewportScrollPosition = (/** @type {?} */ (this._viewportRuler)).getViewportScrollPosition();
        this._viewportScrollSubscription = this._dragDropRegistry.scroll.subscribe((/**
         * @return {?}
         */
        function () {
            if (_this.isDragging()) {
                /** @type {?} */
                var newPosition = (/** @type {?} */ (_this._viewportRuler)).getViewportScrollPosition();
                _this._updateAfterScroll(_this._viewportScrollPosition, newPosition.top, newPosition.left, _this._clientRect);
            }
            else if (_this.isReceiving()) {
                _this._cacheOwnPosition();
            }
        }));
    };
    return DropListRef;
}());
/**
 * Updates the top/left positions of a `ClientRect`, as well as their bottom/right counterparts.
 * @param {?} clientRect `ClientRect` that should be updated.
 * @param {?} top Amount to add to the `top` position.
 * @param {?} left Amount to add to the `left` position.
 * @return {?}
 */
function adjustClientRect(clientRect, top, left) {
    clientRect.top += top;
    clientRect.bottom = clientRect.top + clientRect.height;
    clientRect.left += left;
    clientRect.right = clientRect.left + clientRect.width;
}
/**
 * Finds the index of an item that matches a predicate function. Used as an equivalent
 * of `Array.prototype.findIndex` which isn't part of the standard Google typings.
 * @template T
 * @param {?} array Array in which to look for matches.
 * @param {?} predicate Function used to determine whether an item is a match.
 * @return {?}
 */
function findIndex(array, predicate) {
    for (var i = 0; i < array.length; i++) {
        if (predicate(array[i], i, array)) {
            return i;
        }
    }
    return -1;
}
/**
 * Checks whether some coordinates are within a `ClientRect`.
 * @param {?} clientRect ClientRect that is being checked.
 * @param {?} x Coordinates along the X axis.
 * @param {?} y Coordinates along the Y axis.
 * @return {?}
 */
function isInsideClientRect(clientRect, x, y) {
    var top = clientRect.top, bottom = clientRect.bottom, left = clientRect.left, right = clientRect.right;
    return y >= top && y <= bottom && x >= left && x <= right;
}
/**
 * Gets a mutable version of an element's bounding `ClientRect`.
 * @param {?} element
 * @return {?}
 */
function getMutableClientRect(element) {
    /** @type {?} */
    var clientRect = element.getBoundingClientRect();
    // We need to clone the `clientRect` here, because all the values on it are readonly
    // and we need to be able to update them. Also we can't use a spread here, because
    // the values on a `ClientRect` aren't own properties. See:
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#Notes
    return {
        top: clientRect.top,
        right: clientRect.right,
        bottom: clientRect.bottom,
        left: clientRect.left,
        width: clientRect.width,
        height: clientRect.height
    };
}
/**
 * Increments the vertical scroll position of a node.
 * @param {?} node Node whose scroll position should change.
 * @param {?} amount Amount of pixels that the `node` should be scrolled.
 * @return {?}
 */
function incrementVerticalScroll(node, amount) {
    if (node === window) {
        ((/** @type {?} */ (node))).scrollBy(0, amount);
    }
    else {
        // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.
        ((/** @type {?} */ (node))).scrollTop += amount;
    }
}
/**
 * Increments the horizontal scroll position of a node.
 * @param {?} node Node whose scroll position should change.
 * @param {?} amount Amount of pixels that the `node` should be scrolled.
 * @return {?}
 */
function incrementHorizontalScroll(node, amount) {
    if (node === window) {
        ((/** @type {?} */ (node))).scrollBy(amount, 0);
    }
    else {
        // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.
        ((/** @type {?} */ (node))).scrollLeft += amount;
    }
}
/**
 * Gets whether the vertical auto-scroll direction of a node.
 * @param {?} clientRect Dimensions of the node.
 * @param {?} pointerY Position of the user's pointer along the y axis.
 * @return {?}
 */
function getVerticalScrollDirection(clientRect, pointerY) {
    var top = clientRect.top, bottom = clientRect.bottom, height = clientRect.height;
    /** @type {?} */
    var yThreshold = height * SCROLL_PROXIMITY_THRESHOLD;
    if (pointerY >= top - yThreshold && pointerY <= top + yThreshold) {
        return 1 /* UP */;
    }
    else if (pointerY >= bottom - yThreshold && pointerY <= bottom + yThreshold) {
        return 2 /* DOWN */;
    }
    return 0 /* NONE */;
}
/**
 * Gets whether the horizontal auto-scroll direction of a node.
 * @param {?} clientRect Dimensions of the node.
 * @param {?} pointerX Position of the user's pointer along the x axis.
 * @return {?}
 */
function getHorizontalScrollDirection(clientRect, pointerX) {
    var left = clientRect.left, right = clientRect.right, width = clientRect.width;
    /** @type {?} */
    var xThreshold = width * SCROLL_PROXIMITY_THRESHOLD;
    if (pointerX >= left - xThreshold && pointerX <= left + xThreshold) {
        return 1 /* LEFT */;
    }
    else if (pointerX >= right - xThreshold && pointerX <= right + xThreshold) {
        return 2 /* RIGHT */;
    }
    return 0 /* NONE */;
}
/**
 * Gets the directions in which an element node should be scrolled,
 * assuming that the user's pointer is already within it scrollable region.
 * @param {?} element Element for which we should calculate the scroll direction.
 * @param {?} clientRect Bounding client rectangle of the element.
 * @param {?} pointerX Position of the user's pointer along the x axis.
 * @param {?} pointerY Position of the user's pointer along the y axis.
 * @return {?}
 */
function getElementScrollDirections(element, clientRect, pointerX, pointerY) {
    /** @type {?} */
    var computedVertical = getVerticalScrollDirection(clientRect, pointerY);
    /** @type {?} */
    var computedHorizontal = getHorizontalScrollDirection(clientRect, pointerX);
    /** @type {?} */
    var verticalScrollDirection = 0 /* NONE */;
    /** @type {?} */
    var horizontalScrollDirection = 0 /* NONE */;
    // Note that we here we do some extra checks for whether the element is actually scrollable in
    // a certain direction and we only assign the scroll direction if it is. We do this so that we
    // can allow other elements to be scrolled, if the current element can't be scrolled anymore.
    // This allows us to handle cases where the scroll regions of two scrollable elements overlap.
    if (computedVertical) {
        /** @type {?} */
        var scrollTop = element.scrollTop;
        if (computedVertical === 1 /* UP */) {
            if (scrollTop > 0) {
                verticalScrollDirection = 1 /* UP */;
            }
        }
        else if (element.scrollHeight - scrollTop > element.clientHeight) {
            verticalScrollDirection = 2 /* DOWN */;
        }
    }
    if (computedHorizontal) {
        /** @type {?} */
        var scrollLeft = element.scrollLeft;
        if (computedHorizontal === 1 /* LEFT */) {
            if (scrollLeft > 0) {
                horizontalScrollDirection = 1 /* LEFT */;
            }
        }
        else if (element.scrollWidth - scrollLeft > element.clientWidth) {
            horizontalScrollDirection = 2 /* RIGHT */;
        }
    }
    return [verticalScrollDirection, horizontalScrollDirection];
}
/**
 * Gets the shadow root of an element, if any.
 * @param {?} element
 * @return {?}
 */
function getShadowRoot(element) {
    if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["_supportsShadowDom"])()) {
        /** @type {?} */
        var rootNode = element.getRootNode ? element.getRootNode() : null;
        if (rootNode instanceof ShadowRoot) {
            return rootNode;
        }
    }
    return null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Event options that can be used to bind an active, capturing event.
 * @type {?}
 */
var activeCapturingEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({
    passive: false,
    capture: true
});
/**
 * Service that keeps track of all the drag item and drop container
 * instances, and manages global event listeners on the `document`.
 * \@docs-private
 * @template I, C
 */
// Note: this class is generic, rather than referencing CdkDrag and CdkDropList directly, in order
// to avoid circular imports. If we were to reference them here, importing the registry into the
// classes that are registering themselves will introduce a circular import.
var DragDropRegistry = /** @class */ (function () {
    function DragDropRegistry(_ngZone, _document) {
        var _this = this;
        this._ngZone = _ngZone;
        /**
         * Registered drop container instances.
         */
        this._dropInstances = new Set();
        /**
         * Registered drag item instances.
         */
        this._dragInstances = new Set();
        /**
         * Drag item instances that are currently being dragged.
         */
        this._activeDragInstances = new Set();
        /**
         * Keeps track of the event listeners that we've bound to the `document`.
         */
        this._globalListeners = new Map();
        /**
         * Emits the `touchmove` or `mousemove` events that are dispatched
         * while the user is dragging a drag item instance.
         */
        this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits the `touchend` or `mouseup` events that are dispatched
         * while the user is dragging a drag item instance.
         */
        this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the viewport has been scrolled while the user is dragging an item.
         */
        this.scroll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Event listener that will prevent the default browser action while the user is dragging.
         * @param event Event whose default action should be prevented.
         */
        this._preventDefaultWhileDragging = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (_this._activeDragInstances.size) {
                event.preventDefault();
            }
        });
        this._document = _document;
    }
    /** Adds a drop container to the registry. */
    /**
     * Adds a drop container to the registry.
     * @param {?} drop
     * @return {?}
     */
    DragDropRegistry.prototype.registerDropContainer = /**
     * Adds a drop container to the registry.
     * @param {?} drop
     * @return {?}
     */
    function (drop) {
        if (!this._dropInstances.has(drop)) {
            if (this.getDropContainer(drop.id)) {
                throw Error("Drop instance with id \"" + drop.id + "\" has already been registered.");
            }
            this._dropInstances.add(drop);
        }
    };
    /** Adds a drag item instance to the registry. */
    /**
     * Adds a drag item instance to the registry.
     * @param {?} drag
     * @return {?}
     */
    DragDropRegistry.prototype.registerDragItem = /**
     * Adds a drag item instance to the registry.
     * @param {?} drag
     * @return {?}
     */
    function (drag) {
        var _this = this;
        this._dragInstances.add(drag);
        // The `touchmove` event gets bound once, ahead of time, because WebKit
        // won't preventDefault on a dynamically-added `touchmove` listener.
        // See https://bugs.webkit.org/show_bug.cgi?id=184250.
        if (this._dragInstances.size === 1) {
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                // The event handler has to be explicitly active,
                // because newer browsers make it passive by default.
                _this._document.addEventListener('touchmove', _this._preventDefaultWhileDragging, activeCapturingEventOptions);
            }));
        }
    };
    /** Removes a drop container from the registry. */
    /**
     * Removes a drop container from the registry.
     * @param {?} drop
     * @return {?}
     */
    DragDropRegistry.prototype.removeDropContainer = /**
     * Removes a drop container from the registry.
     * @param {?} drop
     * @return {?}
     */
    function (drop) {
        this._dropInstances.delete(drop);
    };
    /** Removes a drag item instance from the registry. */
    /**
     * Removes a drag item instance from the registry.
     * @param {?} drag
     * @return {?}
     */
    DragDropRegistry.prototype.removeDragItem = /**
     * Removes a drag item instance from the registry.
     * @param {?} drag
     * @return {?}
     */
    function (drag) {
        this._dragInstances.delete(drag);
        this.stopDragging(drag);
        if (this._dragInstances.size === 0) {
            this._document.removeEventListener('touchmove', this._preventDefaultWhileDragging, activeCapturingEventOptions);
        }
    };
    /**
     * Starts the dragging sequence for a drag instance.
     * @param drag Drag instance which is being dragged.
     * @param event Event that initiated the dragging.
     */
    /**
     * Starts the dragging sequence for a drag instance.
     * @param {?} drag Drag instance which is being dragged.
     * @param {?} event Event that initiated the dragging.
     * @return {?}
     */
    DragDropRegistry.prototype.startDragging = /**
     * Starts the dragging sequence for a drag instance.
     * @param {?} drag Drag instance which is being dragged.
     * @param {?} event Event that initiated the dragging.
     * @return {?}
     */
    function (drag, event) {
        var _this = this;
        // Do not process the same drag twice to avoid memory leaks and redundant listeners
        if (this._activeDragInstances.has(drag)) {
            return;
        }
        this._activeDragInstances.add(drag);
        if (this._activeDragInstances.size === 1) {
            /** @type {?} */
            var isTouchEvent = event.type.startsWith('touch');
            /** @type {?} */
            var moveEvent = isTouchEvent ? 'touchmove' : 'mousemove';
            /** @type {?} */
            var upEvent = isTouchEvent ? 'touchend' : 'mouseup';
            // We explicitly bind __active__ listeners here, because newer browsers will default to
            // passive ones for `mousemove` and `touchmove`. The events need to be active, because we
            // use `preventDefault` to prevent the page from scrolling while the user is dragging.
            this._globalListeners
                .set(moveEvent, {
                handler: (/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return _this.pointerMove.next((/** @type {?} */ (e))); }),
                options: activeCapturingEventOptions
            })
                .set(upEvent, {
                handler: (/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return _this.pointerUp.next((/** @type {?} */ (e))); }),
                options: true
            })
                .set('scroll', {
                handler: (/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return _this.scroll.next(e); }),
                // Use capturing so that we pick up scroll changes in any scrollable nodes that aren't
                // the document. See https://github.com/angular/components/issues/17144.
                options: true
            })
                // Preventing the default action on `mousemove` isn't enough to disable text selection
                // on Safari so we need to prevent the selection event as well. Alternatively this can
                // be done by setting `user-select: none` on the `body`, however it has causes a style
                // recalculation which can be expensive on pages with a lot of elements.
                .set('selectstart', {
                handler: this._preventDefaultWhileDragging,
                options: activeCapturingEventOptions
            });
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                _this._globalListeners.forEach((/**
                 * @param {?} config
                 * @param {?} name
                 * @return {?}
                 */
                function (config, name) {
                    _this._document.addEventListener(name, config.handler, config.options);
                }));
            }));
        }
    };
    /** Stops dragging a drag item instance. */
    /**
     * Stops dragging a drag item instance.
     * @param {?} drag
     * @return {?}
     */
    DragDropRegistry.prototype.stopDragging = /**
     * Stops dragging a drag item instance.
     * @param {?} drag
     * @return {?}
     */
    function (drag) {
        this._activeDragInstances.delete(drag);
        if (this._activeDragInstances.size === 0) {
            this._clearGlobalListeners();
        }
    };
    /** Gets whether a drag item instance is currently being dragged. */
    /**
     * Gets whether a drag item instance is currently being dragged.
     * @param {?} drag
     * @return {?}
     */
    DragDropRegistry.prototype.isDragging = /**
     * Gets whether a drag item instance is currently being dragged.
     * @param {?} drag
     * @return {?}
     */
    function (drag) {
        return this._activeDragInstances.has(drag);
    };
    /**
     * Gets a drop container by its id.
     * @deprecated No longer being used. To be removed.
     * @breaking-change 8.0.0
     */
    /**
     * Gets a drop container by its id.
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 8.0.0
     * @param {?} id
     * @return {?}
     */
    DragDropRegistry.prototype.getDropContainer = /**
     * Gets a drop container by its id.
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 8.0.0
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return Array.from(this._dropInstances).find((/**
         * @param {?} instance
         * @return {?}
         */
        function (instance) { return instance.id === id; }));
    };
    /**
     * @return {?}
     */
    DragDropRegistry.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._dragInstances.forEach((/**
         * @param {?} instance
         * @return {?}
         */
        function (instance) { return _this.removeDragItem(instance); }));
        this._dropInstances.forEach((/**
         * @param {?} instance
         * @return {?}
         */
        function (instance) { return _this.removeDropContainer(instance); }));
        this._clearGlobalListeners();
        this.pointerMove.complete();
        this.pointerUp.complete();
    };
    /** Clears out the global event listeners from the `document`. */
    /**
     * Clears out the global event listeners from the `document`.
     * @private
     * @return {?}
     */
    DragDropRegistry.prototype._clearGlobalListeners = /**
     * Clears out the global event listeners from the `document`.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._globalListeners.forEach((/**
         * @param {?} config
         * @param {?} name
         * @return {?}
         */
        function (config, name) {
            _this._document.removeEventListener(name, config.handler, config.options);
        }));
        this._globalListeners.clear();
    };
    DragDropRegistry.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    DragDropRegistry.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] }
    ]; };
    /** @nocollapse */ DragDropRegistry.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"])({ factory: function DragDropRegistry_Factory() { return new DragDropRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"])); }, token: DragDropRegistry, providedIn: "root" });
    return DragDropRegistry;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default configuration to be used when creating a `DragRef`.
 * @type {?}
 */
var DEFAULT_CONFIG = {
    dragStartThreshold: 5,
    pointerDirectionChangeThreshold: 5
};
/**
 * Service that allows for drag-and-drop functionality to be attached to DOM elements.
 */
var DragDrop = /** @class */ (function () {
    function DragDrop(_document, _ngZone, _viewportRuler, _dragDropRegistry) {
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._dragDropRegistry = _dragDropRegistry;
    }
    /**
     * Turns an element into a draggable item.
     * @param element Element to which to attach the dragging functionality.
     * @param config Object used to configure the dragging behavior.
     */
    /**
     * Turns an element into a draggable item.
     * @template T
     * @param {?} element Element to which to attach the dragging functionality.
     * @param {?=} config Object used to configure the dragging behavior.
     * @return {?}
     */
    DragDrop.prototype.createDrag = /**
     * Turns an element into a draggable item.
     * @template T
     * @param {?} element Element to which to attach the dragging functionality.
     * @param {?=} config Object used to configure the dragging behavior.
     * @return {?}
     */
    function (element, config) {
        if (config === void 0) { config = DEFAULT_CONFIG; }
        return new DragRef(element, config, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry);
    };
    /**
     * Turns an element into a drop list.
     * @param element Element to which to attach the drop list functionality.
     */
    /**
     * Turns an element into a drop list.
     * @template T
     * @param {?} element Element to which to attach the drop list functionality.
     * @return {?}
     */
    DragDrop.prototype.createDropList = /**
     * Turns an element into a drop list.
     * @template T
     * @param {?} element Element to which to attach the drop list functionality.
     * @return {?}
     */
    function (element) {
        return new DropListRef(element, this._dragDropRegistry, this._document, this._ngZone, this._viewportRuler);
    };
    DragDrop.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    DragDrop.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
        { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ViewportRuler"] },
        { type: DragDropRegistry }
    ]; };
    /** @nocollapse */ DragDrop.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"])({ factory: function DragDrop_Factory() { return new DragDrop(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(DragDropRegistry)); }, token: DragDrop, providedIn: "root" });
    return DragDrop;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that is used to provide a CdkDropList instance to CdkDrag.
 * Used for avoiding circular imports.
 * @type {?}
 */
var CDK_DROP_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('CDK_DROP_LIST');
/**
 * Injection token that is used to provide a CdkDropList instance to CdkDrag.
 * Used for avoiding circular imports.
 * @deprecated Use `CDK_DROP_LIST` instead.
 * \@breaking-change 8.0.0
 * @type {?}
 */
var CDK_DROP_LIST_CONTAINER = CDK_DROP_LIST;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used for a `CdkDrag` to provide itself as a parent to the
 * drag-specific child directive (`CdkDragHandle`, `CdkDragPreview` etc.). Used primarily
 * to avoid circular imports.
 * \@docs-private
 * @type {?}
 */
var CDK_DRAG_PARENT = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('CDK_DRAG_PARENT');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Handle that can be used to drag and CdkDrag instance.
 */
var CdkDragHandle = /** @class */ (function () {
    function CdkDragHandle(element, parentDrag) {
        this.element = element;
        /**
         * Emits when the state of the handle has changed.
         */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._disabled = false;
        this._parentDrag = parentDrag;
        toggleNativeDragInteractions(element.nativeElement, false);
    }
    Object.defineProperty(CdkDragHandle.prototype, "disabled", {
        /** Whether starting to drag through this handle is disabled. */
        get: /**
         * Whether starting to drag through this handle is disabled.
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            this._stateChanges.next(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkDragHandle.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._stateChanges.complete();
    };
    CdkDragHandle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: '[cdkDragHandle]',
                    host: {
                        'class': 'cdk-drag-handle'
                    }
                },] },
    ];
    /** @nocollapse */
    CdkDragHandle.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [CDK_DRAG_PARENT,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] }
    ]; };
    CdkDragHandle.propDecorators = {
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragHandleDisabled',] }]
    };
    return CdkDragHandle;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Element that will be used as a template for the placeholder of a CdkDrag when
 * it is being dragged. The placeholder is displayed in place of the element being dragged.
 * @template T
 */
var CdkDragPlaceholder = /** @class */ (function () {
    function CdkDragPlaceholder(templateRef) {
        this.templateRef = templateRef;
    }
    CdkDragPlaceholder.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: 'ng-template[cdkDragPlaceholder]'
                },] },
    ];
    /** @nocollapse */
    CdkDragPlaceholder.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"] }
    ]; };
    CdkDragPlaceholder.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return CdkDragPlaceholder;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Element that will be used as a template for the preview
 * of a CdkDrag when it is being dragged.
 * @template T
 */
var CdkDragPreview = /** @class */ (function () {
    function CdkDragPreview(templateRef) {
        this.templateRef = templateRef;
    }
    CdkDragPreview.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: 'ng-template[cdkDragPreview]'
                },] },
    ];
    /** @nocollapse */
    CdkDragPreview.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"] }
    ]; };
    CdkDragPreview.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return CdkDragPreview;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used to configure the behavior of `CdkDrag`.
 * @type {?}
 */
var CDK_DRAG_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('CDK_DRAG_CONFIG', {
    providedIn: 'root',
    factory: CDK_DRAG_CONFIG_FACTORY
});
/**
 * \@docs-private
 * @return {?}
 */
function CDK_DRAG_CONFIG_FACTORY() {
    return { dragStartThreshold: 5, pointerDirectionChangeThreshold: 5 };
}
/**
 * Element that can be moved inside a CdkDropList container.
 * @template T
 */
var CdkDrag = /** @class */ (function () {
    function CdkDrag(element, dropContainer, _document, _ngZone, _viewContainerRef, config, _dir, dragDrop, _changeDetectorRef) {
        var _this = this;
        this.element = element;
        this.dropContainer = dropContainer;
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewContainerRef = _viewContainerRef;
        this._dir = _dir;
        this._changeDetectorRef = _changeDetectorRef;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Amount of milliseconds to wait after the user has put their
         * pointer down before starting to drag the element.
         */
        this.dragStartDelay = 0;
        this._disabled = false;
        /**
         * Emits when the user starts dragging the item.
         */
        this.started = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user has released a drag item, before any animations have started.
         */
        this.released = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user stops dragging an item in the container.
         */
        this.ended = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user has moved the item into a new container.
         */
        this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user removes the item its container by dragging it into another container.
         */
        this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user drops the item inside a container.
         */
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits as the user is dragging the item. Use with caution,
         * because this event will fire for every pixel that the user has dragged.
         */
        this.moved = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            /** @type {?} */
            var subscription = _this._dragRef.moved.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
             * @param {?} movedEvent
             * @return {?}
             */
            function (movedEvent) { return ({
                source: _this,
                pointerPosition: movedEvent.pointerPosition,
                event: movedEvent.event,
                delta: movedEvent.delta,
                distance: movedEvent.distance
            }); }))).subscribe(observer);
            return (/**
             * @return {?}
             */
            function () {
                subscription.unsubscribe();
            });
        }));
        this._dragRef = dragDrop.createDrag(element, config);
        this._dragRef.data = this;
        this._syncInputs(this._dragRef);
        this._handleEvents(this._dragRef);
    }
    Object.defineProperty(CdkDrag.prototype, "boundaryElementSelector", {
        /**
         * Selector that will be used to determine the element to which the draggable's position will
         * be constrained. Matching starts from the element's parent and goes up the DOM until a matching
         * element has been found
         * @deprecated Use `boundaryElement` instead.
         * @breaking-change 9.0.0
         */
        get: /**
         * Selector that will be used to determine the element to which the draggable's position will
         * be constrained. Matching starts from the element's parent and goes up the DOM until a matching
         * element has been found
         * @deprecated Use `boundaryElement` instead.
         * \@breaking-change 9.0.0
         * @return {?}
         */
        function () {
            return typeof this.boundaryElement === 'string' ? this.boundaryElement : (/** @type {?} */ (undefined));
        },
        set: /**
         * @param {?} selector
         * @return {?}
         */
        function (selector) {
            this.boundaryElement = selector;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkDrag.prototype, "disabled", {
        /** Whether starting to drag this element is disabled. */
        get: /**
         * Whether starting to drag this element is disabled.
         * @return {?}
         */
        function () {
            return this._disabled || (this.dropContainer && this.dropContainer.disabled);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            this._dragRef.disabled = this._disabled;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     */
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     * @return {?}
     */
    CdkDrag.prototype.getPlaceholderElement = /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     * @return {?}
     */
    function () {
        return this._dragRef.getPlaceholderElement();
    };
    /** Returns the root draggable element. */
    /**
     * Returns the root draggable element.
     * @return {?}
     */
    CdkDrag.prototype.getRootElement = /**
     * Returns the root draggable element.
     * @return {?}
     */
    function () {
        return this._dragRef.getRootElement();
    };
    /** Resets a standalone drag item to its initial position. */
    /**
     * Resets a standalone drag item to its initial position.
     * @return {?}
     */
    CdkDrag.prototype.reset = /**
     * Resets a standalone drag item to its initial position.
     * @return {?}
     */
    function () {
        this._dragRef.reset();
    };
    /**
     * Gets the pixel coordinates of the draggable outside of a drop container.
     */
    /**
     * Gets the pixel coordinates of the draggable outside of a drop container.
     * @return {?}
     */
    CdkDrag.prototype.getFreeDragPosition = /**
     * Gets the pixel coordinates of the draggable outside of a drop container.
     * @return {?}
     */
    function () {
        return this._dragRef.getFreeDragPosition();
    };
    /**
     * @return {?}
     */
    CdkDrag.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // We need to wait for the zone to stabilize, in order for the reference
        // element to be in the proper place in the DOM. This is mostly relevant
        // for draggable elements inside portals since they get stamped out in
        // their original DOM position and then they get transferred to the portal.
        this._ngZone.onStable.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this._updateRootElement();
            // Listen for any newly-added handles.
            _this._handles.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(_this._handles), 
            // Sync the new handles with the DragRef.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((/**
             * @param {?} handles
             * @return {?}
             */
            function (handles) {
                /** @type {?} */
                var childHandleElements = handles
                    .filter((/**
                 * @param {?} handle
                 * @return {?}
                 */
                function (handle) { return handle._parentDrag === _this; }))
                    .map((/**
                 * @param {?} handle
                 * @return {?}
                 */
                function (handle) { return handle.element; }));
                _this._dragRef.withHandles(childHandleElements);
            })), 
            // Listen if the state of any of the handles changes.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((/**
             * @param {?} handles
             * @return {?}
             */
            function (handles) {
                return rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"].apply(void 0, handles.map((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item._stateChanges; })));
            })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this._destroyed)).subscribe((/**
             * @param {?} handleInstance
             * @return {?}
             */
            function (handleInstance) {
                // Enabled/disable the handle that changed in the DragRef.
                /** @type {?} */
                var dragRef = _this._dragRef;
                /** @type {?} */
                var handle = handleInstance.element.nativeElement;
                handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
            }));
            if (_this.freeDragPosition) {
                _this._dragRef.setFreeDragPosition(_this.freeDragPosition);
            }
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CdkDrag.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var rootSelectorChange = changes['rootElementSelector'];
        /** @type {?} */
        var positionChange = changes['freeDragPosition'];
        // We don't have to react to the first change since it's being
        // handled in `ngAfterViewInit` where it needs to be deferred.
        if (rootSelectorChange && !rootSelectorChange.firstChange) {
            this._updateRootElement();
        }
        // Skip the first change since it's being handled in `ngAfterViewInit`.
        if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
            this._dragRef.setFreeDragPosition(this.freeDragPosition);
        }
    };
    /**
     * @return {?}
     */
    CdkDrag.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroyed.next();
        this._destroyed.complete();
        this._dragRef.dispose();
    };
    /** Syncs the root element with the `DragRef`. */
    /**
     * Syncs the root element with the `DragRef`.
     * @private
     * @return {?}
     */
    CdkDrag.prototype._updateRootElement = /**
     * Syncs the root element with the `DragRef`.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this.element.nativeElement;
        /** @type {?} */
        var rootElement = this.rootElementSelector ?
            getClosestMatchingAncestor(element, this.rootElementSelector) : element;
        if (rootElement && rootElement.nodeType !== this._document.ELEMENT_NODE) {
            throw Error("cdkDrag must be attached to an element node. " +
                ("Currently attached to \"" + rootElement.nodeName + "\"."));
        }
        this._dragRef.withRootElement(rootElement || element);
    };
    /** Gets the boundary element, based on the `boundaryElement` value. */
    /**
     * Gets the boundary element, based on the `boundaryElement` value.
     * @private
     * @return {?}
     */
    CdkDrag.prototype._getBoundaryElement = /**
     * Gets the boundary element, based on the `boundaryElement` value.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var boundary = this.boundaryElement;
        if (!boundary) {
            return null;
        }
        if (typeof boundary === 'string') {
            return getClosestMatchingAncestor(this.element.nativeElement, boundary);
        }
        /** @type {?} */
        var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(boundary);
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["isDevMode"])() && !element.contains(this.element.nativeElement)) {
            throw Error('Draggable element is not inside of the node passed into cdkDragBoundary.');
        }
        return element;
    };
    /** Syncs the inputs of the CdkDrag with the options of the underlying DragRef. */
    /**
     * Syncs the inputs of the CdkDrag with the options of the underlying DragRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    CdkDrag.prototype._syncInputs = /**
     * Syncs the inputs of the CdkDrag with the options of the underlying DragRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    function (ref) {
        var _this = this;
        ref.beforeStarted.subscribe((/**
         * @return {?}
         */
        function () {
            if (!ref.isDragging()) {
                /** @type {?} */
                var dir = _this._dir;
                /** @type {?} */
                var placeholder = _this._placeholderTemplate ? {
                    template: _this._placeholderTemplate.templateRef,
                    context: _this._placeholderTemplate.data,
                    viewContainer: _this._viewContainerRef
                } : null;
                /** @type {?} */
                var preview = _this._previewTemplate ? {
                    template: _this._previewTemplate.templateRef,
                    context: _this._previewTemplate.data,
                    viewContainer: _this._viewContainerRef
                } : null;
                ref.disabled = _this.disabled;
                ref.lockAxis = _this.lockAxis;
                ref.dragStartDelay = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(_this.dragStartDelay);
                ref.constrainPosition = _this.constrainPosition;
                ref
                    .withBoundaryElement(_this._getBoundaryElement())
                    .withPlaceholderTemplate(placeholder)
                    .withPreviewTemplate(preview);
                if (dir) {
                    ref.withDirection(dir.value);
                }
            }
        }));
    };
    /** Handles the events from the underlying `DragRef`. */
    /**
     * Handles the events from the underlying `DragRef`.
     * @private
     * @param {?} ref
     * @return {?}
     */
    CdkDrag.prototype._handleEvents = /**
     * Handles the events from the underlying `DragRef`.
     * @private
     * @param {?} ref
     * @return {?}
     */
    function (ref) {
        var _this = this;
        ref.started.subscribe((/**
         * @return {?}
         */
        function () {
            _this.started.emit({ source: _this });
            // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.
            _this._changeDetectorRef.markForCheck();
        }));
        ref.released.subscribe((/**
         * @return {?}
         */
        function () {
            _this.released.emit({ source: _this });
        }));
        ref.ended.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.ended.emit({ source: _this, distance: event.distance });
            // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.
            _this._changeDetectorRef.markForCheck();
        }));
        ref.entered.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.entered.emit({
                container: event.container.data,
                item: _this,
                currentIndex: event.currentIndex
            });
        }));
        ref.exited.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.exited.emit({
                container: event.container.data,
                item: _this
            });
        }));
        ref.dropped.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                isPointerOverContainer: event.isPointerOverContainer,
                item: _this,
                distance: event.distance
            });
        }));
    };
    CdkDrag.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: '[cdkDrag]',
                    exportAs: 'cdkDrag',
                    host: {
                        'class': 'cdk-drag',
                        '[class.cdk-drag-disabled]': 'disabled',
                        '[class.cdk-drag-dragging]': '_dragRef.isDragging()',
                    },
                    providers: [{ provide: CDK_DRAG_PARENT, useExisting: CdkDrag }]
                },] },
    ];
    /** @nocollapse */
    CdkDrag.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [CDK_DROP_LIST,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [CDK_DRAG_CONFIG,] }] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
        { type: DragDrop },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }
    ]; };
    CdkDrag.propDecorators = {
        _handles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [CdkDragHandle, { descendants: true },] }],
        _previewTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"], args: [CdkDragPreview, { static: false },] }],
        _placeholderTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"], args: [CdkDragPlaceholder, { static: false },] }],
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragData',] }],
        lockAxis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragLockAxis',] }],
        rootElementSelector: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragRootElement',] }],
        boundaryElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragBoundary',] }],
        dragStartDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragStartDelay',] }],
        freeDragPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragFreeDragPosition',] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragDisabled',] }],
        constrainPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragConstrainPosition',] }],
        started: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDragStarted',] }],
        released: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDragReleased',] }],
        ended: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDragEnded',] }],
        entered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDragEntered',] }],
        exited: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDragExited',] }],
        dropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDragDropped',] }],
        moved: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDragMoved',] }]
    };
    return CdkDrag;
}());
/**
 * Gets the closest ancestor of an element that matches a selector.
 * @param {?} element
 * @param {?} selector
 * @return {?}
 */
function getClosestMatchingAncestor(element, selector) {
    /** @type {?} */
    var currentElement = (/** @type {?} */ (element.parentElement));
    while (currentElement) {
        // IE doesn't support `matches` so we have to fall back to `msMatchesSelector`.
        if (currentElement.matches ? currentElement.matches(selector) :
            ((/** @type {?} */ (currentElement))).msMatchesSelector(selector)) {
            return currentElement;
        }
        currentElement = currentElement.parentElement;
    }
    return null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Declaratively connects sibling `cdkDropList` instances together. All of the `cdkDropList`
 * elements that are placed inside a `cdkDropListGroup` will be connected to each other
 * automatically. Can be used as an alternative to the `cdkDropListConnectedTo` input
 * from `cdkDropList`.
 * @template T
 */
var CdkDropListGroup = /** @class */ (function () {
    function CdkDropListGroup() {
        /**
         * Drop lists registered inside the group.
         */
        this._items = new Set();
        this._disabled = false;
    }
    Object.defineProperty(CdkDropListGroup.prototype, "disabled", {
        /** Whether starting a dragging sequence from inside this group is disabled. */
        get: /**
         * Whether starting a dragging sequence from inside this group is disabled.
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkDropListGroup.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._items.clear();
    };
    CdkDropListGroup.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: '[cdkDropListGroup]',
                    exportAs: 'cdkDropListGroup',
                },] },
    ];
    CdkDropListGroup.propDecorators = {
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListGroupDisabled',] }]
    };
    return CdkDropListGroup;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Counter used to generate unique ids for drop zones.
 * @type {?}
 */
var _uniqueIdCounter$1 = 0;
var ɵ0 = undefined;
// @breaking-change 8.0.0 `CdkDropList` implements `CdkDropListContainer` for backwards
// compatiblity. The implements clause, as well as all the methods that it enforces can
// be removed when `CdkDropListContainer` is deleted.
/**
 * Container that wraps a set of draggable items.
 * @template T
 */
var CdkDropList = /** @class */ (function () {
    function CdkDropList(element, dragDrop, _changeDetectorRef, _dir, _group) {
        var _this = this;
        this.element = element;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this._group = _group;
        /**
         * Emits when the list has been destroyed.
         */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Other draggable containers that this container is connected to and into which the
         * container's items can be transferred. Can either be references to other drop containers,
         * or their unique IDs.
         */
        this.connectedTo = [];
        /**
         * Direction in which the list is oriented.
         */
        this.orientation = 'vertical';
        /**
         * Unique ID for the drop zone. Can be used as a reference
         * in the `connectedTo` of another `CdkDropList`.
         */
        this.id = "cdk-drop-list-" + _uniqueIdCounter$1++;
        this._disabled = false;
        this._sortingDisabled = false;
        /**
         * Function that is used to determine whether an item
         * is allowed to be moved into a drop container.
         */
        this.enterPredicate = (/**
         * @return {?}
         */
        function () { return true; });
        /**
         * Whether to auto-scroll the view when the user moves their pointer close to the edges.
         */
        this.autoScrollDisabled = false;
        /**
         * Emits when the user drops an item inside the container.
         */
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user has moved a new drag item into this container.
         */
        this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user removes an item from the container
         * by dragging it into another container.
         */
        this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits as the user is swapping items while actively dragging.
         */
        this.sorted = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this._dropListRef = dragDrop.createDropList(element);
        this._dropListRef.data = this;
        this._dropListRef.enterPredicate = (/**
         * @param {?} drag
         * @param {?} drop
         * @return {?}
         */
        function (drag, drop) {
            return _this.enterPredicate(drag.data, drop.data);
        });
        this._syncInputs(this._dropListRef);
        this._handleEvents(this._dropListRef);
        CdkDropList._dropLists.push(this);
        if (_group) {
            _group._items.add(this);
        }
    }
    Object.defineProperty(CdkDropList.prototype, "disabled", {
        /** Whether starting a dragging sequence from this container is disabled. */
        get: /**
         * Whether starting a dragging sequence from this container is disabled.
         * @return {?}
         */
        function () {
            return this._disabled || (!!this._group && this._group.disabled);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkDropList.prototype, "sortingDisabled", {
        /** Whether sorting within this drop list is disabled. */
        get: /**
         * Whether sorting within this drop list is disabled.
         * @return {?}
         */
        function () { return this._sortingDisabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._sortingDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkDropList.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._draggables.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(this._draggables), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed))
            .subscribe((/**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            _this._dropListRef.withItems(items.map((/**
             * @param {?} drag
             * @return {?}
             */
            function (drag) { return drag._dragRef; })));
        }));
    };
    /**
     * @return {?}
     */
    CdkDropList.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var index = CdkDropList._dropLists.indexOf(this);
        if (index > -1) {
            CdkDropList._dropLists.splice(index, 1);
        }
        if (this._group) {
            this._group._items.delete(this);
        }
        this._dropListRef.dispose();
        this._destroyed.next();
        this._destroyed.complete();
    };
    /** Starts dragging an item. */
    /**
     * Starts dragging an item.
     * @return {?}
     */
    CdkDropList.prototype.start = /**
     * Starts dragging an item.
     * @return {?}
     */
    function () {
        this._dropListRef.start();
    };
    /**
     * Drops an item into this container.
     * @param item Item being dropped into the container.
     * @param currentIndex Index at which the item should be inserted.
     * @param previousContainer Container from which the item got dragged in.
     * @param isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     */
    /**
     * Drops an item into this container.
     * @param {?} item Item being dropped into the container.
     * @param {?} currentIndex Index at which the item should be inserted.
     * @param {?} previousContainer Container from which the item got dragged in.
     * @param {?} isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @return {?}
     */
    CdkDropList.prototype.drop = /**
     * Drops an item into this container.
     * @param {?} item Item being dropped into the container.
     * @param {?} currentIndex Index at which the item should be inserted.
     * @param {?} previousContainer Container from which the item got dragged in.
     * @param {?} isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @return {?}
     */
    function (item, currentIndex, previousContainer, isPointerOverContainer) {
        this._dropListRef.drop(item._dragRef, currentIndex, ((/** @type {?} */ (previousContainer)))._dropListRef, isPointerOverContainer);
    };
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param item Item that was moved into the container.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     */
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param {?} item Item that was moved into the container.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @return {?}
     */
    CdkDropList.prototype.enter = /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param {?} item Item that was moved into the container.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @return {?}
     */
    function (item, pointerX, pointerY) {
        this._dropListRef.enter(item._dragRef, pointerX, pointerY);
    };
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param item Item that was dragged out.
     */
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param {?} item Item that was dragged out.
     * @return {?}
     */
    CdkDropList.prototype.exit = /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param {?} item Item that was dragged out.
     * @return {?}
     */
    function (item) {
        this._dropListRef.exit(item._dragRef);
    };
    /**
     * Figures out the index of an item in the container.
     * @param item Item whose index should be determined.
     */
    /**
     * Figures out the index of an item in the container.
     * @param {?} item Item whose index should be determined.
     * @return {?}
     */
    CdkDropList.prototype.getItemIndex = /**
     * Figures out the index of an item in the container.
     * @param {?} item Item whose index should be determined.
     * @return {?}
     */
    function (item) {
        return this._dropListRef.getItemIndex(item._dragRef);
    };
    /**
     * Sorts an item inside the container based on its position.
     * @param item Item to be sorted.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     * @param pointerDelta Direction in which the pointer is moving along each axis.
     */
    /**
     * Sorts an item inside the container based on its position.
     * @param {?} item Item to be sorted.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
     * @return {?}
     */
    CdkDropList.prototype._sortItem = /**
     * Sorts an item inside the container based on its position.
     * @param {?} item Item to be sorted.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
     * @return {?}
     */
    function (item, pointerX, pointerY, pointerDelta) {
        return this._dropListRef._sortItem(item._dragRef, pointerX, pointerY, pointerDelta);
    };
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param item Drag item that is being moved.
     * @param x Position of the item along the X axis.
     * @param y Position of the item along the Y axis.
     */
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param {?} item Drag item that is being moved.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    CdkDropList.prototype._getSiblingContainerFromPosition = /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param {?} item Drag item that is being moved.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    function (item, x, y) {
        /** @type {?} */
        var result = this._dropListRef._getSiblingContainerFromPosition(item._dragRef, x, y);
        return result ? result.data : null;
    };
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param x Pointer position along the X axis.
     * @param y Pointer position along the Y axis.
     */
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param {?} x Pointer position along the X axis.
     * @param {?} y Pointer position along the Y axis.
     * @return {?}
     */
    CdkDropList.prototype._isOverContainer = /**
     * Checks whether the user's pointer is positioned over the container.
     * @param {?} x Pointer position along the X axis.
     * @param {?} y Pointer position along the Y axis.
     * @return {?}
     */
    function (x, y) {
        return this._dropListRef._isOverContainer(x, y);
    };
    /** Syncs the inputs of the CdkDropList with the options of the underlying DropListRef. */
    /**
     * Syncs the inputs of the CdkDropList with the options of the underlying DropListRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    CdkDropList.prototype._syncInputs = /**
     * Syncs the inputs of the CdkDropList with the options of the underlying DropListRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    function (ref) {
        var _this = this;
        if (this._dir) {
            this._dir.change
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(this._dir.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed))
                .subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) { return ref.withDirection(value); }));
        }
        ref.beforeStarted.subscribe((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var siblings = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceArray"])(_this.connectedTo).map((/**
             * @param {?} drop
             * @return {?}
             */
            function (drop) {
                return typeof drop === 'string' ?
                    (/** @type {?} */ (CdkDropList._dropLists.find((/**
                     * @param {?} list
                     * @return {?}
                     */
                    function (list) { return list.id === drop; })))) : drop;
            }));
            if (_this._group) {
                _this._group._items.forEach((/**
                 * @param {?} drop
                 * @return {?}
                 */
                function (drop) {
                    if (siblings.indexOf(drop) === -1) {
                        siblings.push(drop);
                    }
                }));
            }
            ref.disabled = _this.disabled;
            ref.lockAxis = _this.lockAxis;
            ref.sortingDisabled = _this.sortingDisabled;
            ref.autoScrollDisabled = _this.autoScrollDisabled;
            ref
                .connectedTo(siblings.filter((/**
             * @param {?} drop
             * @return {?}
             */
            function (drop) { return drop && drop !== _this; })).map((/**
             * @param {?} list
             * @return {?}
             */
            function (list) { return list._dropListRef; })))
                .withOrientation(_this.orientation);
        }));
    };
    /** Handles events from the underlying DropListRef. */
    /**
     * Handles events from the underlying DropListRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    CdkDropList.prototype._handleEvents = /**
     * Handles events from the underlying DropListRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    function (ref) {
        var _this = this;
        ref.beforeStarted.subscribe((/**
         * @return {?}
         */
        function () {
            _this._changeDetectorRef.markForCheck();
        }));
        ref.entered.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.entered.emit({
                container: _this,
                item: event.item.data,
                currentIndex: event.currentIndex
            });
        }));
        ref.exited.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.exited.emit({
                container: _this,
                item: event.item.data
            });
            _this._changeDetectorRef.markForCheck();
        }));
        ref.sorted.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.sorted.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                container: _this,
                item: event.item.data
            });
        }));
        ref.dropped.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                item: event.item.data,
                isPointerOverContainer: event.isPointerOverContainer,
                distance: event.distance
            });
            // Mark for check since all of these events run outside of change
            // detection and we're not guaranteed for something else to have triggered it.
            _this._changeDetectorRef.markForCheck();
        }));
    };
    /**
     * Keeps track of the drop lists that are currently on the page.
     */
    CdkDropList._dropLists = [];
    CdkDropList.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: '[cdkDropList], cdk-drop-list',
                    exportAs: 'cdkDropList',
                    providers: [
                        // Prevent child drop lists from picking up the same group as their parent.
                        { provide: CdkDropListGroup, useValue: ɵ0 },
                        { provide: CDK_DROP_LIST_CONTAINER, useExisting: CdkDropList },
                    ],
                    host: {
                        'class': 'cdk-drop-list',
                        '[id]': 'id',
                        '[class.cdk-drop-list-disabled]': 'disabled',
                        '[class.cdk-drop-list-dragging]': '_dropListRef.isDragging()',
                        '[class.cdk-drop-list-receiving]': '_dropListRef.isReceiving()',
                    }
                },] },
    ];
    /** @nocollapse */
    CdkDropList.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
        { type: DragDrop },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
        { type: CdkDropListGroup, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"] }] }
    ]; };
    CdkDropList.propDecorators = {
        _draggables: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])((/**
                     * @return {?}
                     */
                    function () { return CdkDrag; })), {
                        // Explicitly set to false since some of the logic below makes assumptions about it.
                        // The `.withItems` call below should be updated if we ever need to switch this to `true`.
                        descendants: false
                    },] }],
        connectedTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListConnectedTo',] }],
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListData',] }],
        orientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListOrientation',] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        lockAxis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListLockAxis',] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListDisabled',] }],
        sortingDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListSortingDisabled',] }],
        enterPredicate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListEnterPredicate',] }],
        autoScrollDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListAutoScrollDisabled',] }],
        dropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDropListDropped',] }],
        entered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDropListEntered',] }],
        exited: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDropListExited',] }],
        sorted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDropListSorted',] }]
    };
    return CdkDropList;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DragDropModule = /** @class */ (function () {
    function DragDropModule() {
    }
    DragDropModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    declarations: [
                        CdkDropList,
                        CdkDropListGroup,
                        CdkDrag,
                        CdkDragHandle,
                        CdkDragPreview,
                        CdkDragPlaceholder,
                    ],
                    exports: [
                        CdkDropList,
                        CdkDropListGroup,
                        CdkDrag,
                        CdkDragHandle,
                        CdkDragPreview,
                        CdkDragPlaceholder,
                    ],
                    providers: [
                        DragDrop,
                    ]
                },] },
    ];
    return DragDropModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=drag-drop.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/platform.es5.js":
/*!********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/platform.es5.js ***!
  \********************************************************/
/*! exports provided: Platform, PlatformModule, getSupportedInputTypes, supportsPassiveEventListeners, normalizePassiveListenerOptions, supportsScrollBehavior, getRtlScrollAxisType, RtlScrollAxisType, _supportsShadowDom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return Platform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformModule", function() { return PlatformModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSupportedInputTypes", function() { return getSupportedInputTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsPassiveEventListeners", function() { return supportsPassiveEventListeners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizePassiveListenerOptions", function() { return normalizePassiveListenerOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsScrollBehavior", function() { return supportsScrollBehavior; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRtlScrollAxisType", function() { return getRtlScrollAxisType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RtlScrollAxisType", function() { return RtlScrollAxisType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_supportsShadowDom", function() { return _supportsShadowDom; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.
/** @type {?} */
var hasV8BreakIterator;
// We need a try/catch around the reference to `Intl`, because accessing it in some cases can
// cause IE to throw. These cases are tied to particular versions of Windows and can happen if
// the consumer is providing a polyfilled `Map`. See:
// https://github.com/Microsoft/ChakraCore/issues/3189
// https://github.com/angular/components/issues/15687
try {
    hasV8BreakIterator = (typeof Intl !== 'undefined' && ((/** @type {?} */ (Intl))).v8BreakIterator);
}
catch (_a) {
    hasV8BreakIterator = false;
}
/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 */
var Platform = /** @class */ (function () {
    /**
     * @breaking-change 8.0.0 remove optional decorator
     */
    function Platform(_platformId) {
        this._platformId = _platformId;
        /**
         * Whether the Angular application is being rendered in the browser.
         * We want to use the Angular platform check because if the Document is shimmed
         * without the navigator, the following checks will fail. This is preferred because
         * sometimes the Document may be shimmed without the user's knowledge or intention
         */
        this.isBrowser = this._platformId ?
            Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) : typeof document === 'object' && !!document;
        /**
         * Whether the current browser is Microsoft Edge.
         */
        this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
        /**
         * Whether the current rendering engine is Microsoft Trident.
         */
        this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
        /**
         * Whether the current rendering engine is Blink.
         */
        // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
        this.BLINK = this.isBrowser && (!!(((/** @type {?} */ (window))).chrome || hasV8BreakIterator) &&
            typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT);
        /**
         * Whether the current rendering engine is WebKit.
         */
        // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
        // ensure that Webkit runs standalone and is not used as another engine's base.
        this.WEBKIT = this.isBrowser &&
            /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
        /**
         * Whether the current platform is Apple iOS.
         */
        this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) &&
            !('MSStream' in window);
        /**
         * Whether the current browser is Firefox.
         */
        // It's difficult to detect the plain Gecko engine, because most of the browsers identify
        // them self as Gecko-like browsers and modify the userAgent's according to that.
        // Since we only cover one explicit Firefox case, we can simply check for Firefox
        // instead of having an unstable check for Gecko.
        this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
        /**
         * Whether the current platform is Android.
         */
        // Trident on mobile adds the android platform to the userAgent to trick detections.
        this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
        /**
         * Whether the current browser is Safari.
         */
        // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
        // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
        // Safari browser should also use Webkit as its layout engine.
        this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
    }
    Platform.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    Platform.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] }
    ]; };
    /** @nocollapse */ Platform.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function Platform_Factory() { return new Platform(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], 8)); }, token: Platform, providedIn: "root" });
    return Platform;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PlatformModule = /** @class */ (function () {
    function PlatformModule() {
    }
    PlatformModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{},] },
    ];
    return PlatformModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Cached result Set of input types support by the current browser.
 * @type {?}
 */
var supportedInputTypes;
/**
 * Types of `<input>` that *might* be supported.
 * @type {?}
 */
var candidateInputTypes = [
    // `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
    // first changing it to something else:
    // The specified value "" does not conform to the required format.
    // The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
    'color',
    'button',
    'checkbox',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week',
];
/**
 * @return {?} The input types supported by this browser.
 */
function getSupportedInputTypes() {
    // Result is cached.
    if (supportedInputTypes) {
        return supportedInputTypes;
    }
    // We can't check if an input type is not supported until we're on the browser, so say that
    // everything is supported when not on the browser. We don't use `Platform` here since it's
    // just a helper function and can't inject it.
    if (typeof document !== 'object' || !document) {
        supportedInputTypes = new Set(candidateInputTypes);
        return supportedInputTypes;
    }
    /** @type {?} */
    var featureTestInput = document.createElement('input');
    supportedInputTypes = new Set(candidateInputTypes.filter((/**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        featureTestInput.setAttribute('type', value);
        return featureTestInput.type === value;
    })));
    return supportedInputTypes;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Cached result of whether the user's browser supports passive event listeners.
 * @type {?}
 */
var supportsPassiveEvents;
/**
 * Checks whether the user's browser supports passive event listeners.
 * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
 * @return {?}
 */
function supportsPassiveEventListeners() {
    if (supportsPassiveEvents == null && typeof window !== 'undefined') {
        try {
            window.addEventListener('test', (/** @type {?} */ (null)), Object.defineProperty({}, 'passive', {
                get: (/**
                 * @return {?}
                 */
                function () { return supportsPassiveEvents = true; })
            }));
        }
        finally {
            supportsPassiveEvents = supportsPassiveEvents || false;
        }
    }
    return supportsPassiveEvents;
}
/**
 * Normalizes an `AddEventListener` object to something that can be passed
 * to `addEventListener` on any browser, no matter whether it supports the
 * `options` parameter.
 * @param {?} options Object to be normalized.
 * @return {?}
 */
function normalizePassiveListenerOptions(options) {
    return supportsPassiveEventListeners() ? options : !!options.capture;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @enum {number} */
var RtlScrollAxisType = {
    /**
     * scrollLeft is 0 when scrolled all the way left and (scrollWidth - clientWidth) when scrolled
     * all the way right.
     */
    NORMAL: 0,
    /**
     * scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
     * all the way right.
     */
    NEGATED: 1,
    /**
     * scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
     * all the way right.
     */
    INVERTED: 2,
};
RtlScrollAxisType[RtlScrollAxisType.NORMAL] = 'NORMAL';
RtlScrollAxisType[RtlScrollAxisType.NEGATED] = 'NEGATED';
RtlScrollAxisType[RtlScrollAxisType.INVERTED] = 'INVERTED';
/**
 * Cached result of the way the browser handles the horizontal scroll axis in RTL mode.
 * @type {?}
 */
var rtlScrollAxisType;
/**
 * Check whether the browser supports scroll behaviors.
 * @return {?}
 */
function supportsScrollBehavior() {
    return !!(typeof document == 'object' && 'scrollBehavior' in (/** @type {?} */ (document.documentElement)).style);
}
/**
 * Checks the type of RTL scroll axis used by this browser. As of time of writing, Chrome is NORMAL,
 * Firefox & Safari are NEGATED, and IE & Edge are INVERTED.
 * @return {?}
 */
function getRtlScrollAxisType() {
    // We can't check unless we're on the browser. Just assume 'normal' if we're not.
    if (typeof document !== 'object' || !document) {
        return RtlScrollAxisType.NORMAL;
    }
    if (!rtlScrollAxisType) {
        // Create a 1px wide scrolling container and a 2px wide content element.
        /** @type {?} */
        var scrollContainer = document.createElement('div');
        /** @type {?} */
        var containerStyle = scrollContainer.style;
        scrollContainer.dir = 'rtl';
        containerStyle.height = '1px';
        containerStyle.width = '1px';
        containerStyle.overflow = 'auto';
        containerStyle.visibility = 'hidden';
        containerStyle.pointerEvents = 'none';
        containerStyle.position = 'absolute';
        /** @type {?} */
        var content = document.createElement('div');
        /** @type {?} */
        var contentStyle = content.style;
        contentStyle.width = '2px';
        contentStyle.height = '1px';
        scrollContainer.appendChild(content);
        document.body.appendChild(scrollContainer);
        rtlScrollAxisType = RtlScrollAxisType.NORMAL;
        // The viewport starts scrolled all the way to the right in RTL mode. If we are in a NORMAL
        // browser this would mean that the scrollLeft should be 1. If it's zero instead we know we're
        // dealing with one of the other two types of browsers.
        if (scrollContainer.scrollLeft === 0) {
            // In a NEGATED browser the scrollLeft is always somewhere in [-maxScrollAmount, 0]. For an
            // INVERTED browser it is always somewhere in [0, maxScrollAmount]. We can determine which by
            // setting to the scrollLeft to 1. This is past the max for a NEGATED browser, so it will
            // return 0 when we read it again.
            scrollContainer.scrollLeft = 1;
            rtlScrollAxisType =
                scrollContainer.scrollLeft === 0 ? RtlScrollAxisType.NEGATED : RtlScrollAxisType.INVERTED;
        }
        (/** @type {?} */ (scrollContainer.parentNode)).removeChild(scrollContainer);
    }
    return rtlScrollAxisType;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */
var shadowDomIsSupported;
/**
 * Checks whether the user's browser support Shadow DOM.
 * @return {?}
 */
function _supportsShadowDom() {
    if (shadowDomIsSupported == null) {
        /** @type {?} */
        var head = typeof document !== 'undefined' ? document.head : null;
        shadowDomIsSupported = !!(head && (((/** @type {?} */ (head))).createShadowRoot || head.attachShadow));
    }
    return shadowDomIsSupported;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=platform.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/scrolling.es5.js":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/scrolling.es5.js ***!
  \*********************************************************/
/*! exports provided: _fixedSizeVirtualScrollStrategyFactory, FixedSizeVirtualScrollStrategy, CdkFixedSizeVirtualScroll, SCROLL_DISPATCHER_PROVIDER_FACTORY, DEFAULT_SCROLL_TIME, ScrollDispatcher, SCROLL_DISPATCHER_PROVIDER, CdkScrollable, ScrollingModule, ScrollDispatchModule, VIEWPORT_RULER_PROVIDER_FACTORY, DEFAULT_RESIZE_TIME, ViewportRuler, VIEWPORT_RULER_PROVIDER, CdkVirtualForOf, VIRTUAL_SCROLL_STRATEGY, CdkVirtualScrollViewport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_fixedSizeVirtualScrollStrategyFactory", function() { return _fixedSizeVirtualScrollStrategyFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedSizeVirtualScrollStrategy", function() { return FixedSizeVirtualScrollStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFixedSizeVirtualScroll", function() { return CdkFixedSizeVirtualScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_DISPATCHER_PROVIDER_FACTORY", function() { return SCROLL_DISPATCHER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SCROLL_TIME", function() { return DEFAULT_SCROLL_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function() { return ScrollDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_DISPATCHER_PROVIDER", function() { return SCROLL_DISPATCHER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkScrollable", function() { return CdkScrollable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollingModule", function() { return ScrollingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollDispatchModule", function() { return ScrollDispatchModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEWPORT_RULER_PROVIDER_FACTORY", function() { return VIEWPORT_RULER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_RESIZE_TIME", function() { return DEFAULT_RESIZE_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportRuler", function() { return ViewportRuler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEWPORT_RULER_PROVIDER", function() { return VIEWPORT_RULER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkVirtualForOf", function() { return CdkVirtualForOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIRTUAL_SCROLL_STRATEGY", function() { return VIRTUAL_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkVirtualScrollViewport", function() { return CdkVirtualScrollViewport; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The injection token used to specify the virtual scrolling strategy.
 * @type {?}
 */
var VIRTUAL_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('VIRTUAL_SCROLL_STRATEGY');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Virtual scrolling strategy for lists with items of known fixed size.
 */
var  /**
 * Virtual scrolling strategy for lists with items of known fixed size.
 */
FixedSizeVirtualScrollStrategy = /** @class */ (function () {
    /**
     * @param itemSize The size of the items in the virtually scrolling list.
     * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
     * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
     */
    function FixedSizeVirtualScrollStrategy(itemSize, minBufferPx, maxBufferPx) {
        this._scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * \@docs-private Implemented as part of VirtualScrollStrategy.
         */
        this.scrolledIndexChange = this._scrolledIndexChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
        /**
         * The attached viewport.
         */
        this._viewport = null;
        this._itemSize = itemSize;
        this._minBufferPx = minBufferPx;
        this._maxBufferPx = maxBufferPx;
    }
    /**
     * Attaches this scroll strategy to a viewport.
     * @param viewport The viewport to attach this strategy to.
     */
    /**
     * Attaches this scroll strategy to a viewport.
     * @param {?} viewport The viewport to attach this strategy to.
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype.attach = /**
     * Attaches this scroll strategy to a viewport.
     * @param {?} viewport The viewport to attach this strategy to.
     * @return {?}
     */
    function (viewport) {
        this._viewport = viewport;
        this._updateTotalContentSize();
        this._updateRenderedRange();
    };
    /** Detaches this scroll strategy from the currently attached viewport. */
    /**
     * Detaches this scroll strategy from the currently attached viewport.
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype.detach = /**
     * Detaches this scroll strategy from the currently attached viewport.
     * @return {?}
     */
    function () {
        this._scrolledIndexChange.complete();
        this._viewport = null;
    };
    /**
     * Update the item size and buffer size.
     * @param itemSize The size of the items in the virtually scrolling list.
     * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
     * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
     */
    /**
     * Update the item size and buffer size.
     * @param {?} itemSize The size of the items in the virtually scrolling list.
     * @param {?} minBufferPx The minimum amount of buffer (in pixels) before needing to render more
     * @param {?} maxBufferPx The amount of buffer (in pixels) to render when rendering more.
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype.updateItemAndBufferSize = /**
     * Update the item size and buffer size.
     * @param {?} itemSize The size of the items in the virtually scrolling list.
     * @param {?} minBufferPx The minimum amount of buffer (in pixels) before needing to render more
     * @param {?} maxBufferPx The amount of buffer (in pixels) to render when rendering more.
     * @return {?}
     */
    function (itemSize, minBufferPx, maxBufferPx) {
        if (maxBufferPx < minBufferPx) {
            throw Error('CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx');
        }
        this._itemSize = itemSize;
        this._minBufferPx = minBufferPx;
        this._maxBufferPx = maxBufferPx;
        this._updateTotalContentSize();
        this._updateRenderedRange();
    };
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype.onContentScrolled = /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    function () {
        this._updateRenderedRange();
    };
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype.onDataLengthChanged = /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    function () {
        this._updateTotalContentSize();
        this._updateRenderedRange();
    };
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype.onContentRendered = /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    function () { };
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype.onRenderedOffsetChanged = /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    function () { };
    /**
     * Scroll to the offset for the given index.
     * @param index The index of the element to scroll to.
     * @param behavior The ScrollBehavior to use when scrolling.
     */
    /**
     * Scroll to the offset for the given index.
     * @param {?} index The index of the element to scroll to.
     * @param {?} behavior The ScrollBehavior to use when scrolling.
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype.scrollToIndex = /**
     * Scroll to the offset for the given index.
     * @param {?} index The index of the element to scroll to.
     * @param {?} behavior The ScrollBehavior to use when scrolling.
     * @return {?}
     */
    function (index, behavior) {
        if (this._viewport) {
            this._viewport.scrollToOffset(index * this._itemSize, behavior);
        }
    };
    /** Update the viewport's total content size. */
    /**
     * Update the viewport's total content size.
     * @private
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype._updateTotalContentSize = /**
     * Update the viewport's total content size.
     * @private
     * @return {?}
     */
    function () {
        if (!this._viewport) {
            return;
        }
        this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
    };
    /** Update the viewport's rendered range. */
    /**
     * Update the viewport's rendered range.
     * @private
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype._updateRenderedRange = /**
     * Update the viewport's rendered range.
     * @private
     * @return {?}
     */
    function () {
        if (!this._viewport) {
            return;
        }
        /** @type {?} */
        var scrollOffset = this._viewport.measureScrollOffset();
        /** @type {?} */
        var firstVisibleIndex = scrollOffset / this._itemSize;
        /** @type {?} */
        var renderedRange = this._viewport.getRenderedRange();
        /** @type {?} */
        var newRange = { start: renderedRange.start, end: renderedRange.end };
        /** @type {?} */
        var viewportSize = this._viewport.getViewportSize();
        /** @type {?} */
        var dataLength = this._viewport.getDataLength();
        /** @type {?} */
        var startBuffer = scrollOffset - newRange.start * this._itemSize;
        if (startBuffer < this._minBufferPx && newRange.start != 0) {
            /** @type {?} */
            var expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
            newRange.start = Math.max(0, newRange.start - expandStart);
            newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
        }
        else {
            /** @type {?} */
            var endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);
            if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
                /** @type {?} */
                var expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);
                if (expandEnd > 0) {
                    newRange.end = Math.min(dataLength, newRange.end + expandEnd);
                    newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
                }
            }
        }
        this._viewport.setRenderedRange(newRange);
        this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);
        this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
    };
    return FixedSizeVirtualScrollStrategy;
}());
/**
 * Provider factory for `FixedSizeVirtualScrollStrategy` that simply extracts the already created
 * `FixedSizeVirtualScrollStrategy` from the given directive.
 * @param {?} fixedSizeDir The instance of `CdkFixedSizeVirtualScroll` to extract the
 *     `FixedSizeVirtualScrollStrategy` from.
 * @return {?}
 */
function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
    return fixedSizeDir._scrollStrategy;
}
/**
 * A virtual scroll strategy that supports fixed-size items.
 */
var CdkFixedSizeVirtualScroll = /** @class */ (function () {
    function CdkFixedSizeVirtualScroll() {
        this._itemSize = 20;
        this._minBufferPx = 100;
        this._maxBufferPx = 200;
        /**
         * The scroll strategy used by this directive.
         */
        this._scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
    }
    Object.defineProperty(CdkFixedSizeVirtualScroll.prototype, "itemSize", {
        /** The size of the items in the list (in pixels). */
        get: /**
         * The size of the items in the list (in pixels).
         * @return {?}
         */
        function () { return this._itemSize; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._itemSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkFixedSizeVirtualScroll.prototype, "minBufferPx", {
        /**
         * The minimum amount of buffer rendered beyond the viewport (in pixels).
         * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
         */
        get: /**
         * The minimum amount of buffer rendered beyond the viewport (in pixels).
         * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
         * @return {?}
         */
        function () { return this._minBufferPx; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._minBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkFixedSizeVirtualScroll.prototype, "maxBufferPx", {
        /**
         * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
         */
        get: /**
         * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
         * @return {?}
         */
        function () { return this._maxBufferPx; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._maxBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkFixedSizeVirtualScroll.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
    };
    CdkFixedSizeVirtualScroll.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'cdk-virtual-scroll-viewport[itemSize]',
                    providers: [{
                            provide: VIRTUAL_SCROLL_STRATEGY,
                            useFactory: _fixedSizeVirtualScrollStrategyFactory,
                            deps: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                                 * @return {?}
                                 */
                                function () { return CdkFixedSizeVirtualScroll; }))],
                        }],
                },] },
    ];
    CdkFixedSizeVirtualScroll.propDecorators = {
        itemSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        minBufferPx: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxBufferPx: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return CdkFixedSizeVirtualScroll;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Time in ms to throttle the scrolling events by default.
 * @type {?}
 */
var DEFAULT_SCROLL_TIME = 20;
/**
 * Service contained all registered Scrollable references and emits an event when any one of the
 * Scrollable references emit a scrolled event.
 */
var ScrollDispatcher = /** @class */ (function () {
    function ScrollDispatcher(_ngZone, _platform) {
        this._ngZone = _ngZone;
        this._platform = _platform;
        /**
         * Subject for notifying that a registered scrollable reference element has been scrolled.
         */
        this._scrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Keeps track of the global `scroll` and `resize` subscriptions.
         */
        this._globalSubscription = null;
        /**
         * Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards.
         */
        this._scrolledCount = 0;
        /**
         * Map of all the scrollable references that are registered with the service and their
         * scroll event subscriptions.
         */
        this.scrollContainers = new Map();
    }
    /**
     * Registers a scrollable instance with the service and listens for its scrolled events. When the
     * scrollable is scrolled, the service emits the event to its scrolled observable.
     * @param scrollable Scrollable instance to be registered.
     */
    /**
     * Registers a scrollable instance with the service and listens for its scrolled events. When the
     * scrollable is scrolled, the service emits the event to its scrolled observable.
     * @param {?} scrollable Scrollable instance to be registered.
     * @return {?}
     */
    ScrollDispatcher.prototype.register = /**
     * Registers a scrollable instance with the service and listens for its scrolled events. When the
     * scrollable is scrolled, the service emits the event to its scrolled observable.
     * @param {?} scrollable Scrollable instance to be registered.
     * @return {?}
     */
    function (scrollable) {
        var _this = this;
        if (!this.scrollContainers.has(scrollable)) {
            this.scrollContainers.set(scrollable, scrollable.elementScrolled()
                .subscribe((/**
             * @return {?}
             */
            function () { return _this._scrolled.next(scrollable); })));
        }
    };
    /**
     * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
     * @param scrollable Scrollable instance to be deregistered.
     */
    /**
     * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
     * @param {?} scrollable Scrollable instance to be deregistered.
     * @return {?}
     */
    ScrollDispatcher.prototype.deregister = /**
     * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
     * @param {?} scrollable Scrollable instance to be deregistered.
     * @return {?}
     */
    function (scrollable) {
        /** @type {?} */
        var scrollableReference = this.scrollContainers.get(scrollable);
        if (scrollableReference) {
            scrollableReference.unsubscribe();
            this.scrollContainers.delete(scrollable);
        }
    };
    /**
     * Returns an observable that emits an event whenever any of the registered Scrollable
     * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
     * to override the default "throttle" time.
     *
     * **Note:** in order to avoid hitting change detection for every scroll event,
     * all of the events emitted from this stream will be run outside the Angular zone.
     * If you need to update any data bindings as a result of a scroll event, you have
     * to run the callback using `NgZone.run`.
     */
    /**
     * Returns an observable that emits an event whenever any of the registered Scrollable
     * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
     * to override the default "throttle" time.
     *
     * **Note:** in order to avoid hitting change detection for every scroll event,
     * all of the events emitted from this stream will be run outside the Angular zone.
     * If you need to update any data bindings as a result of a scroll event, you have
     * to run the callback using `NgZone.run`.
     * @param {?=} auditTimeInMs
     * @return {?}
     */
    ScrollDispatcher.prototype.scrolled = /**
     * Returns an observable that emits an event whenever any of the registered Scrollable
     * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
     * to override the default "throttle" time.
     *
     * **Note:** in order to avoid hitting change detection for every scroll event,
     * all of the events emitted from this stream will be run outside the Angular zone.
     * If you need to update any data bindings as a result of a scroll event, you have
     * to run the callback using `NgZone.run`.
     * @param {?=} auditTimeInMs
     * @return {?}
     */
    function (auditTimeInMs) {
        var _this = this;
        if (auditTimeInMs === void 0) { auditTimeInMs = DEFAULT_SCROLL_TIME; }
        if (!this._platform.isBrowser) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
        }
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            if (!_this._globalSubscription) {
                _this._addGlobalListener();
            }
            // In the case of a 0ms delay, use an observable without auditTime
            // since it does add a perceptible delay in processing overhead.
            /** @type {?} */
            var subscription = auditTimeInMs > 0 ?
                _this._scrolled.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(auditTimeInMs)).subscribe(observer) :
                _this._scrolled.subscribe(observer);
            _this._scrolledCount++;
            return (/**
             * @return {?}
             */
            function () {
                subscription.unsubscribe();
                _this._scrolledCount--;
                if (!_this._scrolledCount) {
                    _this._removeGlobalListener();
                }
            });
        }));
    };
    /**
     * @return {?}
     */
    ScrollDispatcher.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._removeGlobalListener();
        this.scrollContainers.forEach((/**
         * @param {?} _
         * @param {?} container
         * @return {?}
         */
        function (_, container) { return _this.deregister(container); }));
        this._scrolled.complete();
    };
    /**
     * Returns an observable that emits whenever any of the
     * scrollable ancestors of an element are scrolled.
     * @param elementRef Element whose ancestors to listen for.
     * @param auditTimeInMs Time to throttle the scroll events.
     */
    /**
     * Returns an observable that emits whenever any of the
     * scrollable ancestors of an element are scrolled.
     * @param {?} elementRef Element whose ancestors to listen for.
     * @param {?=} auditTimeInMs Time to throttle the scroll events.
     * @return {?}
     */
    ScrollDispatcher.prototype.ancestorScrolled = /**
     * Returns an observable that emits whenever any of the
     * scrollable ancestors of an element are scrolled.
     * @param {?} elementRef Element whose ancestors to listen for.
     * @param {?=} auditTimeInMs Time to throttle the scroll events.
     * @return {?}
     */
    function (elementRef, auditTimeInMs) {
        /** @type {?} */
        var ancestors = this.getAncestorScrollContainers(elementRef);
        return this.scrolled(auditTimeInMs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((/**
         * @param {?} target
         * @return {?}
         */
        function (target) {
            return !target || ancestors.indexOf(target) > -1;
        })));
    };
    /** Returns all registered Scrollables that contain the provided element. */
    /**
     * Returns all registered Scrollables that contain the provided element.
     * @param {?} elementRef
     * @return {?}
     */
    ScrollDispatcher.prototype.getAncestorScrollContainers = /**
     * Returns all registered Scrollables that contain the provided element.
     * @param {?} elementRef
     * @return {?}
     */
    function (elementRef) {
        var _this = this;
        /** @type {?} */
        var scrollingContainers = [];
        this.scrollContainers.forEach((/**
         * @param {?} _subscription
         * @param {?} scrollable
         * @return {?}
         */
        function (_subscription, scrollable) {
            if (_this._scrollableContainsElement(scrollable, elementRef)) {
                scrollingContainers.push(scrollable);
            }
        }));
        return scrollingContainers;
    };
    /** Returns true if the element is contained within the provided Scrollable. */
    /**
     * Returns true if the element is contained within the provided Scrollable.
     * @private
     * @param {?} scrollable
     * @param {?} elementRef
     * @return {?}
     */
    ScrollDispatcher.prototype._scrollableContainsElement = /**
     * Returns true if the element is contained within the provided Scrollable.
     * @private
     * @param {?} scrollable
     * @param {?} elementRef
     * @return {?}
     */
    function (scrollable, elementRef) {
        /** @type {?} */
        var element = elementRef.nativeElement;
        /** @type {?} */
        var scrollableElement = scrollable.getElementRef().nativeElement;
        // Traverse through the element parents until we reach null, checking if any of the elements
        // are the scrollable's element.
        do {
            if (element == scrollableElement) {
                return true;
            }
        } while (element = (/** @type {?} */ (element)).parentElement);
        return false;
    };
    /** Sets up the global scroll listeners. */
    /**
     * Sets up the global scroll listeners.
     * @private
     * @return {?}
     */
    ScrollDispatcher.prototype._addGlobalListener = /**
     * Sets up the global scroll listeners.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._globalSubscription = this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window.document, 'scroll').subscribe((/**
             * @return {?}
             */
            function () { return _this._scrolled.next(); }));
        }));
    };
    /** Cleans up the global scroll listener. */
    /**
     * Cleans up the global scroll listener.
     * @private
     * @return {?}
     */
    ScrollDispatcher.prototype._removeGlobalListener = /**
     * Cleans up the global scroll listener.
     * @private
     * @return {?}
     */
    function () {
        if (this._globalSubscription) {
            this._globalSubscription.unsubscribe();
            this._globalSubscription = null;
        }
    };
    ScrollDispatcher.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    ScrollDispatcher.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
    ]; };
    /** @nocollapse */ ScrollDispatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ScrollDispatcher_Factory() { return new ScrollDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"])); }, token: ScrollDispatcher, providedIn: "root" });
    return ScrollDispatcher;
}());
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @param {?} parentDispatcher
 * @param {?} ngZone
 * @param {?} platform
 * @return {?}
 */
function SCROLL_DISPATCHER_PROVIDER_FACTORY(parentDispatcher, ngZone, platform) {
    return parentDispatcher || new ScrollDispatcher(ngZone, platform);
}
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @type {?}
 */
var SCROLL_DISPATCHER_PROVIDER = {
    // If there is already a ScrollDispatcher available, use that. Otherwise, provide a new one.
    provide: ScrollDispatcher,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), ScrollDispatcher], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]],
    useFactory: SCROLL_DISPATCHER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Sends an event when the directive's element is scrolled. Registers itself with the
 * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
 * can be listened to through the service.
 */
var CdkScrollable = /** @class */ (function () {
    function CdkScrollable(elementRef, scrollDispatcher, ngZone, dir) {
        var _this = this;
        this.elementRef = elementRef;
        this.scrollDispatcher = scrollDispatcher;
        this.ngZone = ngZone;
        this.dir = dir;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._elementScrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            return _this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(_this.elementRef.nativeElement, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this._destroyed))
                    .subscribe(observer);
            }));
        }));
    }
    /**
     * @return {?}
     */
    CdkScrollable.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.scrollDispatcher.register(this);
    };
    /**
     * @return {?}
     */
    CdkScrollable.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.scrollDispatcher.deregister(this);
        this._destroyed.next();
        this._destroyed.complete();
    };
    /** Returns observable that emits when a scroll event is fired on the host element. */
    /**
     * Returns observable that emits when a scroll event is fired on the host element.
     * @return {?}
     */
    CdkScrollable.prototype.elementScrolled = /**
     * Returns observable that emits when a scroll event is fired on the host element.
     * @return {?}
     */
    function () {
        return this._elementScrolled;
    };
    /** Gets the ElementRef for the viewport. */
    /**
     * Gets the ElementRef for the viewport.
     * @return {?}
     */
    CdkScrollable.prototype.getElementRef = /**
     * Gets the ElementRef for the viewport.
     * @return {?}
     */
    function () {
        return this.elementRef;
    };
    /**
     * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
     * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param options specified the offsets to scroll to.
     */
    /**
     * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
     * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param {?} options specified the offsets to scroll to.
     * @return {?}
     */
    CdkScrollable.prototype.scrollTo = /**
     * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
     * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param {?} options specified the offsets to scroll to.
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var el = this.elementRef.nativeElement;
        /** @type {?} */
        var isRtl = this.dir && this.dir.value == 'rtl';
        // Rewrite start & end offsets as right or left offsets.
        options.left = options.left == null ? (isRtl ? options.end : options.start) : options.left;
        options.right = options.right == null ? (isRtl ? options.start : options.end) : options.right;
        // Rewrite the bottom offset as a top offset.
        if (options.bottom != null) {
            ((/** @type {?} */ (options))).top =
                el.scrollHeight - el.clientHeight - options.bottom;
        }
        // Rewrite the right offset as a left offset.
        if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() != _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].NORMAL) {
            if (options.left != null) {
                ((/** @type {?} */ (options))).right =
                    el.scrollWidth - el.clientWidth - options.left;
            }
            if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].INVERTED) {
                options.left = options.right;
            }
            else if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].NEGATED) {
                options.left = options.right ? -options.right : options.right;
            }
        }
        else {
            if (options.right != null) {
                ((/** @type {?} */ (options))).left =
                    el.scrollWidth - el.clientWidth - options.right;
            }
        }
        this._applyScrollToOptions(options);
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    CdkScrollable.prototype._applyScrollToOptions = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var el = this.elementRef.nativeElement;
        if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["supportsScrollBehavior"])()) {
            el.scrollTo(options);
        }
        else {
            if (options.top != null) {
                el.scrollTop = options.top;
            }
            if (options.left != null) {
                el.scrollLeft = options.left;
            }
        }
    };
    /**
     * Measures the scroll offset relative to the specified edge of the viewport. This method can be
     * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
     * about what scrollLeft means in RTL. The values returned by this method are normalized such that
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param from The edge to measure from.
     */
    /**
     * Measures the scroll offset relative to the specified edge of the viewport. This method can be
     * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
     * about what scrollLeft means in RTL. The values returned by this method are normalized such that
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param {?} from The edge to measure from.
     * @return {?}
     */
    CdkScrollable.prototype.measureScrollOffset = /**
     * Measures the scroll offset relative to the specified edge of the viewport. This method can be
     * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
     * about what scrollLeft means in RTL. The values returned by this method are normalized such that
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param {?} from The edge to measure from.
     * @return {?}
     */
    function (from) {
        /** @type {?} */
        var LEFT = 'left';
        /** @type {?} */
        var RIGHT = 'right';
        /** @type {?} */
        var el = this.elementRef.nativeElement;
        if (from == 'top') {
            return el.scrollTop;
        }
        if (from == 'bottom') {
            return el.scrollHeight - el.clientHeight - el.scrollTop;
        }
        // Rewrite start & end as left or right offsets.
        /** @type {?} */
        var isRtl = this.dir && this.dir.value == 'rtl';
        if (from == 'start') {
            from = isRtl ? RIGHT : LEFT;
        }
        else if (from == 'end') {
            from = isRtl ? LEFT : RIGHT;
        }
        if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].INVERTED) {
            // For INVERTED, scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and
            // 0 when scrolled all the way right.
            if (from == LEFT) {
                return el.scrollWidth - el.clientWidth - el.scrollLeft;
            }
            else {
                return el.scrollLeft;
            }
        }
        else if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].NEGATED) {
            // For NEGATED, scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and
            // 0 when scrolled all the way right.
            if (from == LEFT) {
                return el.scrollLeft + el.scrollWidth - el.clientWidth;
            }
            else {
                return -el.scrollLeft;
            }
        }
        else {
            // For NORMAL, as well as non-RTL contexts, scrollLeft is 0 when scrolled all the way left and
            // (scrollWidth - clientWidth) when scrolled all the way right.
            if (from == LEFT) {
                return el.scrollLeft;
            }
            else {
                return el.scrollWidth - el.clientWidth - el.scrollLeft;
            }
        }
    };
    CdkScrollable.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[cdk-scrollable], [cdkScrollable]'
                },] },
    ];
    /** @nocollapse */
    CdkScrollable.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: ScrollDispatcher },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
    ]; };
    return CdkScrollable;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Checks if the given ranges are equal.
 * @param {?} r1
 * @param {?} r2
 * @return {?}
 */
function rangesEqual(r1, r2) {
    return r1.start == r2.start && r1.end == r2.end;
}
/**
 * Scheduler to be used for scroll events. Needs to fall back to
 * something that doesn't rely on requestAnimationFrame on environments
 * that don't support it (e.g. server-side rendering).
 * @type {?}
 */
var SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"] : rxjs__WEBPACK_IMPORTED_MODULE_2__["asapScheduler"];
/**
 * A viewport that virtualizes its scrolling with the help of `CdkVirtualForOf`.
 */
var CdkVirtualScrollViewport = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(CdkVirtualScrollViewport, _super);
    function CdkVirtualScrollViewport(elementRef, _changeDetectorRef, ngZone, _scrollStrategy, dir, scrollDispatcher) {
        var _this = _super.call(this, elementRef, scrollDispatcher, ngZone, dir) || this;
        _this.elementRef = elementRef;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._scrollStrategy = _scrollStrategy;
        /**
         * Emits when the viewport is detached from a CdkVirtualForOf.
         */
        _this._detachedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the rendered range changes.
         */
        _this._renderedRangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        _this._orientation = 'vertical';
        // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
        // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
        // depending on how the strategy calculates the scrolled index, it may come at a cost to
        // performance.
        /**
         * Emits when the index of the first element visible in the viewport changes.
         */
        _this.scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            return _this._scrollStrategy.scrolledIndexChange.subscribe((/**
             * @param {?} index
             * @return {?}
             */
            function (index) {
                return Promise.resolve().then((/**
                 * @return {?}
                 */
                function () { return _this.ngZone.run((/**
                 * @return {?}
                 */
                function () { return observer.next(index); })); }));
            }));
        }));
        /**
         * A stream that emits whenever the rendered range changes.
         */
        _this.renderedRangeStream = _this._renderedRangeSubject.asObservable();
        /**
         * The total size of all content (in pixels), including content that is not currently rendered.
         */
        _this._totalContentSize = 0;
        /**
         * A string representing the `style.width` property value to be used for the spacer element.
         */
        _this._totalContentWidth = '';
        /**
         * A string representing the `style.height` property value to be used for the spacer element.
         */
        _this._totalContentHeight = '';
        /**
         * The currently rendered range of indices.
         */
        _this._renderedRange = { start: 0, end: 0 };
        /**
         * The length of the data bound to this viewport (in number of items).
         */
        _this._dataLength = 0;
        /**
         * The size of the viewport (in pixels).
         */
        _this._viewportSize = 0;
        /**
         * The last rendered content offset that was set.
         */
        _this._renderedContentOffset = 0;
        /**
         * Whether the last rendered content offset was to the end of the content (and therefore needs to
         * be rewritten as an offset to the start of the content).
         */
        _this._renderedContentOffsetNeedsRewrite = false;
        /**
         * Whether there is a pending change detection cycle.
         */
        _this._isChangeDetectionPending = false;
        /**
         * A list of functions to run after the next change detection cycle.
         */
        _this._runAfterChangeDetection = [];
        if (!_scrollStrategy) {
            throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
        }
        return _this;
    }
    Object.defineProperty(CdkVirtualScrollViewport.prototype, "orientation", {
        /** The direction the viewport scrolls. */
        get: /**
         * The direction the viewport scrolls.
         * @return {?}
         */
        function () {
            return this._orientation;
        },
        set: /**
         * @param {?} orientation
         * @return {?}
         */
        function (orientation) {
            if (this._orientation !== orientation) {
                this._orientation = orientation;
                this._calculateSpacerSize();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        // It's still too early to measure the viewport at this point. Deferring with a promise allows
        // the Viewport to be rendered with the correct size before we measure. We run this outside the
        // zone to avoid causing more change detection cycles. We handle the change detection loop
        // ourselves instead.
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () { return Promise.resolve().then((/**
         * @return {?}
         */
        function () {
            _this._measureViewportSize();
            _this._scrollStrategy.attach(_this);
            _this.elementScrolled()
                .pipe(
            // Start off with a fake scroll event so we properly detect our initial position.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])((/** @type {?} */ (null))), 
            // Collect multiple events into one until the next animation frame. This way if
            // there are multiple scroll events in the same frame we only need to recheck
            // our layout once.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(0, SCROLL_SCHEDULER))
                .subscribe((/**
             * @return {?}
             */
            function () { return _this._scrollStrategy.onContentScrolled(); }));
            _this._markChangeDetectionNeeded();
        })); }));
    };
    /**
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.detach();
        this._scrollStrategy.detach();
        // Complete all subjects
        this._renderedRangeSubject.complete();
        this._detachedSubject.complete();
        _super.prototype.ngOnDestroy.call(this);
    };
    /** Attaches a `CdkVirtualForOf` to this viewport. */
    /**
     * Attaches a `CdkVirtualForOf` to this viewport.
     * @param {?} forOf
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.attach = /**
     * Attaches a `CdkVirtualForOf` to this viewport.
     * @param {?} forOf
     * @return {?}
     */
    function (forOf) {
        var _this = this;
        if (this._forOf) {
            throw Error('CdkVirtualScrollViewport is already attached.');
        }
        // Subscribe to the data stream of the CdkVirtualForOf to keep track of when the data length
        // changes. Run outside the zone to avoid triggering change detection, since we're managing the
        // change detection loop ourselves.
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this._forOf = forOf;
            _this._forOf.dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this._detachedSubject)).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                /** @type {?} */
                var newLength = data.length;
                if (newLength !== _this._dataLength) {
                    _this._dataLength = newLength;
                    _this._scrollStrategy.onDataLengthChanged();
                }
                _this._doChangeDetection();
            }));
        }));
    };
    /** Detaches the current `CdkVirtualForOf`. */
    /**
     * Detaches the current `CdkVirtualForOf`.
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.detach = /**
     * Detaches the current `CdkVirtualForOf`.
     * @return {?}
     */
    function () {
        this._forOf = null;
        this._detachedSubject.next();
    };
    /** Gets the length of the data bound to this viewport (in number of items). */
    /**
     * Gets the length of the data bound to this viewport (in number of items).
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.getDataLength = /**
     * Gets the length of the data bound to this viewport (in number of items).
     * @return {?}
     */
    function () {
        return this._dataLength;
    };
    /** Gets the size of the viewport (in pixels). */
    /**
     * Gets the size of the viewport (in pixels).
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.getViewportSize = /**
     * Gets the size of the viewport (in pixels).
     * @return {?}
     */
    function () {
        return this._viewportSize;
    };
    // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
    // cycle happens. I'm being careful to only call it after the render cycle is complete and before
    // setting it to something else, but its error prone and should probably be split into
    // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.
    /** Get the current rendered range of items. */
    // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
    // cycle happens. I'm being careful to only call it after the render cycle is complete and before
    // setting it to something else, but its error prone and should probably be split into
    // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.
    /**
     * Get the current rendered range of items.
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.getRenderedRange = 
    // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
    // cycle happens. I'm being careful to only call it after the render cycle is complete and before
    // setting it to something else, but its error prone and should probably be split into
    // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.
    /**
     * Get the current rendered range of items.
     * @return {?}
     */
    function () {
        return this._renderedRange;
    };
    /**
     * Sets the total size of all content (in pixels), including content that is not currently
     * rendered.
     */
    /**
     * Sets the total size of all content (in pixels), including content that is not currently
     * rendered.
     * @param {?} size
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.setTotalContentSize = /**
     * Sets the total size of all content (in pixels), including content that is not currently
     * rendered.
     * @param {?} size
     * @return {?}
     */
    function (size) {
        if (this._totalContentSize !== size) {
            this._totalContentSize = size;
            this._calculateSpacerSize();
            this._markChangeDetectionNeeded();
        }
    };
    /** Sets the currently rendered range of indices. */
    /**
     * Sets the currently rendered range of indices.
     * @param {?} range
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.setRenderedRange = /**
     * Sets the currently rendered range of indices.
     * @param {?} range
     * @return {?}
     */
    function (range) {
        var _this = this;
        if (!rangesEqual(this._renderedRange, range)) {
            this._renderedRangeSubject.next(this._renderedRange = range);
            this._markChangeDetectionNeeded((/**
             * @return {?}
             */
            function () { return _this._scrollStrategy.onContentRendered(); }));
        }
    };
    /**
     * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
     */
    /**
     * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.getOffsetToRenderedContentStart = /**
     * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
     * @return {?}
     */
    function () {
        return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
    };
    /**
     * Sets the offset from the start of the viewport to either the start or end of the rendered data
     * (in pixels).
     */
    /**
     * Sets the offset from the start of the viewport to either the start or end of the rendered data
     * (in pixels).
     * @param {?} offset
     * @param {?=} to
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.setRenderedContentOffset = /**
     * Sets the offset from the start of the viewport to either the start or end of the rendered data
     * (in pixels).
     * @param {?} offset
     * @param {?=} to
     * @return {?}
     */
    function (offset, to) {
        var _this = this;
        if (to === void 0) { to = 'to-start'; }
        // For a horizontal viewport in a right-to-left language we need to translate along the x-axis
        // in the negative direction.
        /** @type {?} */
        var isRtl = this.dir && this.dir.value == 'rtl';
        /** @type {?} */
        var isHorizontal = this.orientation == 'horizontal';
        /** @type {?} */
        var axis = isHorizontal ? 'X' : 'Y';
        /** @type {?} */
        var axisDirection = isHorizontal && isRtl ? -1 : 1;
        /** @type {?} */
        var transform = "translate" + axis + "(" + Number(axisDirection * offset) + "px)";
        this._renderedContentOffset = offset;
        if (to === 'to-end') {
            transform += " translate" + axis + "(-100%)";
            // The viewport should rewrite this as a `to-start` offset on the next render cycle. Otherwise
            // elements will appear to expand in the wrong direction (e.g. `mat-expansion-panel` would
            // expand upward).
            this._renderedContentOffsetNeedsRewrite = true;
        }
        if (this._renderedContentTransform != transform) {
            // We know this value is safe because we parse `offset` with `Number()` before passing it
            // into the string.
            this._renderedContentTransform = transform;
            this._markChangeDetectionNeeded((/**
             * @return {?}
             */
            function () {
                if (_this._renderedContentOffsetNeedsRewrite) {
                    _this._renderedContentOffset -= _this.measureRenderedContentSize();
                    _this._renderedContentOffsetNeedsRewrite = false;
                    _this.setRenderedContentOffset(_this._renderedContentOffset);
                }
                else {
                    _this._scrollStrategy.onRenderedOffsetChanged();
                }
            }));
        }
    };
    /**
     * Scrolls to the given offset from the start of the viewport. Please note that this is not always
     * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
     * direction, this would be the equivalent of setting a fictional `scrollRight` property.
     * @param offset The offset to scroll to.
     * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     */
    /**
     * Scrolls to the given offset from the start of the viewport. Please note that this is not always
     * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
     * direction, this would be the equivalent of setting a fictional `scrollRight` property.
     * @param {?} offset The offset to scroll to.
     * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.scrollToOffset = /**
     * Scrolls to the given offset from the start of the viewport. Please note that this is not always
     * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
     * direction, this would be the equivalent of setting a fictional `scrollRight` property.
     * @param {?} offset The offset to scroll to.
     * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     * @return {?}
     */
    function (offset, behavior) {
        if (behavior === void 0) { behavior = 'auto'; }
        /** @type {?} */
        var options = { behavior: behavior };
        if (this.orientation === 'horizontal') {
            options.start = offset;
        }
        else {
            options.top = offset;
        }
        this.scrollTo(options);
    };
    /**
     * Scrolls to the offset for the given index.
     * @param index The index of the element to scroll to.
     * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     */
    /**
     * Scrolls to the offset for the given index.
     * @param {?} index The index of the element to scroll to.
     * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.scrollToIndex = /**
     * Scrolls to the offset for the given index.
     * @param {?} index The index of the element to scroll to.
     * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     * @return {?}
     */
    function (index, behavior) {
        if (behavior === void 0) { behavior = 'auto'; }
        this._scrollStrategy.scrollToIndex(index, behavior);
    };
    /**
     * Gets the current scroll offset from the start of the viewport (in pixels).
     * @param from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
     *     in horizontal mode.
     */
    /**
     * Gets the current scroll offset from the start of the viewport (in pixels).
     * @param {?=} from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
     *     in horizontal mode.
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.measureScrollOffset = /**
     * Gets the current scroll offset from the start of the viewport (in pixels).
     * @param {?=} from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
     *     in horizontal mode.
     * @return {?}
     */
    function (from) {
        return _super.prototype.measureScrollOffset.call(this, from ? from : this.orientation === 'horizontal' ? 'start' : 'top');
    };
    /** Measure the combined size of all of the rendered items. */
    /**
     * Measure the combined size of all of the rendered items.
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.measureRenderedContentSize = /**
     * Measure the combined size of all of the rendered items.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var contentEl = this._contentWrapper.nativeElement;
        return this.orientation === 'horizontal' ? contentEl.offsetWidth : contentEl.offsetHeight;
    };
    /**
     * Measure the total combined size of the given range. Throws if the range includes items that are
     * not rendered.
     */
    /**
     * Measure the total combined size of the given range. Throws if the range includes items that are
     * not rendered.
     * @param {?} range
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.measureRangeSize = /**
     * Measure the total combined size of the given range. Throws if the range includes items that are
     * not rendered.
     * @param {?} range
     * @return {?}
     */
    function (range) {
        if (!this._forOf) {
            return 0;
        }
        return this._forOf.measureRangeSize(range, this.orientation);
    };
    /** Update the viewport dimensions and re-render. */
    /**
     * Update the viewport dimensions and re-render.
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.checkViewportSize = /**
     * Update the viewport dimensions and re-render.
     * @return {?}
     */
    function () {
        // TODO: Cleanup later when add logic for handling content resize
        this._measureViewportSize();
        this._scrollStrategy.onDataLengthChanged();
    };
    /** Measure the viewport size. */
    /**
     * Measure the viewport size.
     * @private
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype._measureViewportSize = /**
     * Measure the viewport size.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var viewportEl = this.elementRef.nativeElement;
        this._viewportSize = this.orientation === 'horizontal' ?
            viewportEl.clientWidth : viewportEl.clientHeight;
    };
    /** Queue up change detection to run. */
    /**
     * Queue up change detection to run.
     * @private
     * @param {?=} runAfter
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype._markChangeDetectionNeeded = /**
     * Queue up change detection to run.
     * @private
     * @param {?=} runAfter
     * @return {?}
     */
    function (runAfter) {
        var _this = this;
        if (runAfter) {
            this._runAfterChangeDetection.push(runAfter);
        }
        // Use a Promise to batch together calls to `_doChangeDetection`. This way if we set a bunch of
        // properties sequentially we only have to run `_doChangeDetection` once at the end.
        if (!this._isChangeDetectionPending) {
            this._isChangeDetectionPending = true;
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () { return Promise.resolve().then((/**
             * @return {?}
             */
            function () {
                _this._doChangeDetection();
            })); }));
        }
    };
    /** Run change detection. */
    /**
     * Run change detection.
     * @private
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype._doChangeDetection = /**
     * Run change detection.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._isChangeDetectionPending = false;
        // Apply changes to Angular bindings. Note: We must call `markForCheck` to run change detection
        // from the root, since the repeated items are content projected in. Calling `detectChanges`
        // instead does not properly check the projected content.
        this.ngZone.run((/**
         * @return {?}
         */
        function () { return _this._changeDetectorRef.markForCheck(); }));
        // Apply the content transform. The transform can't be set via an Angular binding because
        // bypassSecurityTrustStyle is banned in Google. However the value is safe, it's composed of
        // string literals, a variable that can only be 'X' or 'Y', and user input that is run through
        // the `Number` function first to coerce it to a numeric value.
        this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform;
        /** @type {?} */
        var runAfterChangeDetection = this._runAfterChangeDetection;
        this._runAfterChangeDetection = [];
        for (var _i = 0, runAfterChangeDetection_1 = runAfterChangeDetection; _i < runAfterChangeDetection_1.length; _i++) {
            var fn = runAfterChangeDetection_1[_i];
            fn();
        }
    };
    /** Calculates the `style.width` and `style.height` for the spacer element. */
    /**
     * Calculates the `style.width` and `style.height` for the spacer element.
     * @private
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype._calculateSpacerSize = /**
     * Calculates the `style.width` and `style.height` for the spacer element.
     * @private
     * @return {?}
     */
    function () {
        this._totalContentHeight =
            this.orientation === 'horizontal' ? '' : this._totalContentSize + "px";
        this._totalContentWidth =
            this.orientation === 'horizontal' ? this._totalContentSize + "px" : '';
    };
    CdkVirtualScrollViewport.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'cdk-virtual-scroll-viewport',
                    template: "<div #contentWrapper class=\"cdk-virtual-scroll-content-wrapper\"><ng-content></ng-content></div><div class=\"cdk-virtual-scroll-spacer\" [style.width]=\"_totalContentWidth\" [style.height]=\"_totalContentHeight\"></div>",
                    styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:0}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:0}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}"],
                    host: {
                        'class': 'cdk-virtual-scroll-viewport',
                        '[class.cdk-virtual-scroll-orientation-horizontal]': 'orientation === "horizontal"',
                        '[class.cdk-virtual-scroll-orientation-vertical]': 'orientation !== "horizontal"',
                    },
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    providers: [{
                            provide: CdkScrollable,
                            useExisting: CdkVirtualScrollViewport,
                        }]
                },] },
    ];
    /** @nocollapse */
    CdkVirtualScrollViewport.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [VIRTUAL_SCROLL_STRATEGY,] }] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
        { type: ScrollDispatcher }
    ]; };
    CdkVirtualScrollViewport.propDecorators = {
        orientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        scrolledIndexChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        _contentWrapper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['contentWrapper', { static: true },] }]
    };
    return CdkVirtualScrollViewport;
}(CdkScrollable));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Helper to extract size from a DOM Node.
 * @param {?} orientation
 * @param {?} node
 * @return {?}
 */
function getSize(orientation, node) {
    /** @type {?} */
    var el = (/** @type {?} */ (node));
    if (!el.getBoundingClientRect) {
        return 0;
    }
    /** @type {?} */
    var rect = el.getBoundingClientRect();
    return orientation == 'horizontal' ? rect.width : rect.height;
}
/**
 * A directive similar to `ngForOf` to be used for rendering data inside a virtual scrolling
 * container.
 * @template T
 */
var CdkVirtualForOf = /** @class */ (function () {
    function CdkVirtualForOf(_viewContainerRef, _template, _differs, _viewport, ngZone) {
        var _this = this;
        this._viewContainerRef = _viewContainerRef;
        this._template = _template;
        this._differs = _differs;
        this._viewport = _viewport;
        /**
         * Emits when the rendered view of the data changes.
         */
        this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Subject that emits when a new DataSource instance is given.
         */
        this._dataSourceChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * The size of the cache used to store templates that are not being used for re-use later.
         * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
         */
        this.cdkVirtualForTemplateCacheSize = 20;
        /**
         * Emits whenever the data in the current DataSource changes.
         */
        this.dataStream = this._dataSourceChanges
            .pipe(
        // Start off with null `DataSource`.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])((/** @type {?} */ (null))), 
        // Bundle up the previous and current data sources so we can work with both.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])(), 
        // Use `_changeDataSource` to disconnect from the previous data source and connect to the
        // new one, passing back a stream of data changes which we run through `switchMap` to give
        // us a data stream that emits the latest data from whatever the current `DataSource` is.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var prev = _a[0], cur = _a[1];
            return _this._changeDataSource(prev, cur);
        })), 
        // Replay the last emitted data when someone subscribes.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
        /**
         * The differ used to calculate changes to the data.
         */
        this._differ = null;
        /**
         * The template cache used to hold on ot template instancess that have been stamped out, but don't
         * currently need to be rendered. These instances will be reused in the future rather than
         * stamping out brand new ones.
         */
        this._templateCache = [];
        /**
         * Whether the rendered data should be updated during the next ngDoCheck cycle.
         */
        this._needsUpdate = false;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dataStream.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this._data = data;
            _this._onRenderedDataChange();
        }));
        this._viewport.renderedRangeStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe((/**
         * @param {?} range
         * @return {?}
         */
        function (range) {
            _this._renderedRange = range;
            ngZone.run((/**
             * @return {?}
             */
            function () { return _this.viewChange.next(_this._renderedRange); }));
            _this._onRenderedDataChange();
        }));
        this._viewport.attach(this);
    }
    Object.defineProperty(CdkVirtualForOf.prototype, "cdkVirtualForOf", {
        /** The DataSource to display. */
        get: /**
         * The DataSource to display.
         * @return {?}
         */
        function () {
            return this._cdkVirtualForOf;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._cdkVirtualForOf = value;
            /** @type {?} */
            var ds = Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["isDataSource"])(value) ? value :
                // Slice the value if its an NgIterable to ensure we're working with an array.
                new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["ArrayDataSource"](value instanceof rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"] ? value : Array.prototype.slice.call(value || []));
            this._dataSourceChanges.next(ds);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkVirtualForOf.prototype, "cdkVirtualForTrackBy", {
        /**
         * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
         * the item and produces a value to be used as the item's identity when tracking changes.
         */
        get: /**
         * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
         * the item and produces a value to be used as the item's identity when tracking changes.
         * @return {?}
         */
        function () {
            return this._cdkVirtualForTrackBy;
        },
        set: /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            var _this = this;
            this._needsUpdate = true;
            this._cdkVirtualForTrackBy = fn ?
                (/**
                 * @param {?} index
                 * @param {?} item
                 * @return {?}
                 */
                function (index, item) { return fn(index + (_this._renderedRange ? _this._renderedRange.start : 0), item); }) :
                undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkVirtualForOf.prototype, "cdkVirtualForTemplate", {
        /** The template used to stamp out new elements. */
        set: /**
         * The template used to stamp out new elements.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._needsUpdate = true;
                this._template = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Measures the combined size (width for horizontal orientation, height for vertical) of all items
     * in the specified range. Throws an error if the range includes items that are not currently
     * rendered.
     */
    /**
     * Measures the combined size (width for horizontal orientation, height for vertical) of all items
     * in the specified range. Throws an error if the range includes items that are not currently
     * rendered.
     * @param {?} range
     * @param {?} orientation
     * @return {?}
     */
    CdkVirtualForOf.prototype.measureRangeSize = /**
     * Measures the combined size (width for horizontal orientation, height for vertical) of all items
     * in the specified range. Throws an error if the range includes items that are not currently
     * rendered.
     * @param {?} range
     * @param {?} orientation
     * @return {?}
     */
    function (range, orientation) {
        if (range.start >= range.end) {
            return 0;
        }
        if (range.start < this._renderedRange.start || range.end > this._renderedRange.end) {
            throw Error("Error: attempted to measure an item that isn't rendered.");
        }
        // The index into the list of rendered views for the first item in the range.
        /** @type {?} */
        var renderedStartIndex = range.start - this._renderedRange.start;
        // The length of the range we're measuring.
        /** @type {?} */
        var rangeLen = range.end - range.start;
        // Loop over all root nodes for all items in the range and sum up their size.
        /** @type {?} */
        var totalSize = 0;
        /** @type {?} */
        var i = rangeLen;
        while (i--) {
            /** @type {?} */
            var view = (/** @type {?} */ (this._viewContainerRef.get(i + renderedStartIndex)));
            /** @type {?} */
            var j = view ? view.rootNodes.length : 0;
            while (j--) {
                totalSize += getSize(orientation, (/** @type {?} */ (view)).rootNodes[j]);
            }
        }
        return totalSize;
    };
    /**
     * @return {?}
     */
    CdkVirtualForOf.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this._differ && this._needsUpdate) {
            // TODO(mmalerba): We should differentiate needs update due to scrolling and a new portion of
            // this list being rendered (can use simpler algorithm) vs needs update due to data actually
            // changing (need to do this diff).
            /** @type {?} */
            var changes = this._differ.diff(this._renderedItems);
            if (!changes) {
                this._updateContext();
            }
            else {
                this._applyChanges(changes);
            }
            this._needsUpdate = false;
        }
    };
    /**
     * @return {?}
     */
    CdkVirtualForOf.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._viewport.detach();
        this._dataSourceChanges.next();
        this._dataSourceChanges.complete();
        this.viewChange.complete();
        this._destroyed.next();
        this._destroyed.complete();
        for (var _i = 0, _a = this._templateCache; _i < _a.length; _i++) {
            var view = _a[_i];
            view.destroy();
        }
    };
    /** React to scroll state changes in the viewport. */
    /**
     * React to scroll state changes in the viewport.
     * @private
     * @return {?}
     */
    CdkVirtualForOf.prototype._onRenderedDataChange = /**
     * React to scroll state changes in the viewport.
     * @private
     * @return {?}
     */
    function () {
        if (!this._renderedRange) {
            return;
        }
        this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);
        if (!this._differ) {
            this._differ = this._differs.find(this._renderedItems).create(this.cdkVirtualForTrackBy);
        }
        this._needsUpdate = true;
    };
    /** Swap out one `DataSource` for another. */
    /**
     * Swap out one `DataSource` for another.
     * @private
     * @param {?} oldDs
     * @param {?} newDs
     * @return {?}
     */
    CdkVirtualForOf.prototype._changeDataSource = /**
     * Swap out one `DataSource` for another.
     * @private
     * @param {?} oldDs
     * @param {?} newDs
     * @return {?}
     */
    function (oldDs, newDs) {
        if (oldDs) {
            oldDs.disconnect(this);
        }
        this._needsUpdate = true;
        return newDs ? newDs.connect(this) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
    };
    /** Update the `CdkVirtualForOfContext` for all views. */
    /**
     * Update the `CdkVirtualForOfContext` for all views.
     * @private
     * @return {?}
     */
    CdkVirtualForOf.prototype._updateContext = /**
     * Update the `CdkVirtualForOfContext` for all views.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var count = this._data.length;
        /** @type {?} */
        var i = this._viewContainerRef.length;
        while (i--) {
            /** @type {?} */
            var view = (/** @type {?} */ (this._viewContainerRef.get(i)));
            view.context.index = this._renderedRange.start + i;
            view.context.count = count;
            this._updateComputedContextProperties(view.context);
            view.detectChanges();
        }
    };
    /** Apply changes to the DOM. */
    /**
     * Apply changes to the DOM.
     * @private
     * @param {?} changes
     * @return {?}
     */
    CdkVirtualForOf.prototype._applyChanges = /**
     * Apply changes to the DOM.
     * @private
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        // Rearrange the views to put them in the right location.
        changes.forEachOperation((/**
         * @param {?} record
         * @param {?} adjustedPreviousIndex
         * @param {?} currentIndex
         * @return {?}
         */
        function (record, adjustedPreviousIndex, currentIndex) {
            if (record.previousIndex == null) { // Item added.
                // Item added.
                /** @type {?} */
                var view = _this._insertViewForNewItem((/** @type {?} */ (currentIndex)));
                view.context.$implicit = record.item;
            }
            else if (currentIndex == null) { // Item removed.
                _this._cacheView(_this._detachView((/** @type {?} */ (adjustedPreviousIndex))));
            }
            else { // Item moved.
                // Item moved.
                /** @type {?} */
                var view = (/** @type {?} */ (_this._viewContainerRef.get((/** @type {?} */ (adjustedPreviousIndex)))));
                _this._viewContainerRef.move(view, currentIndex);
                view.context.$implicit = record.item;
            }
        }));
        // Update $implicit for any items that had an identity change.
        changes.forEachIdentityChange((/**
         * @param {?} record
         * @return {?}
         */
        function (record) {
            /** @type {?} */
            var view = (/** @type {?} */ (_this._viewContainerRef.get((/** @type {?} */ (record.currentIndex)))));
            view.context.$implicit = record.item;
        }));
        // Update the context variables on all items.
        /** @type {?} */
        var count = this._data.length;
        /** @type {?} */
        var i = this._viewContainerRef.length;
        while (i--) {
            /** @type {?} */
            var view = (/** @type {?} */ (this._viewContainerRef.get(i)));
            view.context.index = this._renderedRange.start + i;
            view.context.count = count;
            this._updateComputedContextProperties(view.context);
        }
    };
    /** Cache the given detached view. */
    /**
     * Cache the given detached view.
     * @private
     * @param {?} view
     * @return {?}
     */
    CdkVirtualForOf.prototype._cacheView = /**
     * Cache the given detached view.
     * @private
     * @param {?} view
     * @return {?}
     */
    function (view) {
        if (this._templateCache.length < this.cdkVirtualForTemplateCacheSize) {
            this._templateCache.push(view);
        }
        else {
            /** @type {?} */
            var index = this._viewContainerRef.indexOf(view);
            // It's very unlikely that the index will ever be -1, but just in case,
            // destroy the view on its own, otherwise destroy it through the
            // container to ensure that all the references are removed.
            if (index === -1) {
                view.destroy();
            }
            else {
                this._viewContainerRef.remove(index);
            }
        }
    };
    /** Inserts a view for a new item, either from the cache or by creating a new one. */
    /**
     * Inserts a view for a new item, either from the cache or by creating a new one.
     * @private
     * @param {?} index
     * @return {?}
     */
    CdkVirtualForOf.prototype._insertViewForNewItem = /**
     * Inserts a view for a new item, either from the cache or by creating a new one.
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return this._insertViewFromCache(index) || this._createEmbeddedViewAt(index);
    };
    /** Update the computed properties on the `CdkVirtualForOfContext`. */
    /**
     * Update the computed properties on the `CdkVirtualForOfContext`.
     * @private
     * @param {?} context
     * @return {?}
     */
    CdkVirtualForOf.prototype._updateComputedContextProperties = /**
     * Update the computed properties on the `CdkVirtualForOfContext`.
     * @private
     * @param {?} context
     * @return {?}
     */
    function (context) {
        context.first = context.index === 0;
        context.last = context.index === context.count - 1;
        context.even = context.index % 2 === 0;
        context.odd = !context.even;
    };
    /** Creates a new embedded view and moves it to the given index */
    /**
     * Creates a new embedded view and moves it to the given index
     * @private
     * @param {?} index
     * @return {?}
     */
    CdkVirtualForOf.prototype._createEmbeddedViewAt = /**
     * Creates a new embedded view and moves it to the given index
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        // Note that it's important that we insert the item directly at the proper index,
        // rather than inserting it and the moving it in place, because if there's a directive
        // on the same node that injects the `ViewContainerRef`, Angular will insert another
        // comment node which can throw off the move when it's being repeated for all items.
        return this._viewContainerRef.createEmbeddedView(this._template, {
            $implicit: (/** @type {?} */ (null)),
            cdkVirtualForOf: this._cdkVirtualForOf,
            index: -1,
            count: -1,
            first: false,
            last: false,
            odd: false,
            even: false
        }, index);
    };
    /** Inserts a recycled view from the cache at the given index. */
    /**
     * Inserts a recycled view from the cache at the given index.
     * @private
     * @param {?} index
     * @return {?}
     */
    CdkVirtualForOf.prototype._insertViewFromCache = /**
     * Inserts a recycled view from the cache at the given index.
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var cachedView = this._templateCache.pop();
        if (cachedView) {
            this._viewContainerRef.insert(cachedView, index);
        }
        return cachedView || null;
    };
    /** Detaches the embedded view at the given index. */
    /**
     * Detaches the embedded view at the given index.
     * @private
     * @param {?} index
     * @return {?}
     */
    CdkVirtualForOf.prototype._detachView = /**
     * Detaches the embedded view at the given index.
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return (/** @type {?} */ (this._viewContainerRef.detach(index)));
    };
    CdkVirtualForOf.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[cdkVirtualFor][cdkVirtualForOf]',
                },] },
    ];
    /** @nocollapse */
    CdkVirtualForOf.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"] },
        { type: CdkVirtualScrollViewport, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    CdkVirtualForOf.propDecorators = {
        cdkVirtualForOf: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cdkVirtualForTrackBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cdkVirtualForTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cdkVirtualForTemplateCacheSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return CdkVirtualForOf;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ScrollingModule = /** @class */ (function () {
    function ScrollingModule() {
    }
    ScrollingModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"]],
                    exports: [
                        _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"],
                        CdkFixedSizeVirtualScroll,
                        CdkScrollable,
                        CdkVirtualForOf,
                        CdkVirtualScrollViewport,
                    ],
                    declarations: [
                        CdkFixedSizeVirtualScroll,
                        CdkScrollable,
                        CdkVirtualForOf,
                        CdkVirtualScrollViewport,
                    ],
                },] },
    ];
    return ScrollingModule;
}());
/**
 * @deprecated ScrollDispatchModule has been renamed to ScrollingModule.
 * \@breaking-change 8.0.0 delete this alias
 */
var ScrollDispatchModule = /** @class */ (function () {
    function ScrollDispatchModule() {
    }
    ScrollDispatchModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [ScrollingModule],
                    exports: [ScrollingModule],
                },] },
    ];
    return ScrollDispatchModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Time in ms to throttle the resize events by default.
 * @type {?}
 */
var DEFAULT_RESIZE_TIME = 20;
/**
 * Simple utility for getting the bounds of the browser viewport.
 * \@docs-private
 */
var ViewportRuler = /** @class */ (function () {
    function ViewportRuler(_platform, ngZone) {
        var _this = this;
        this._platform = _platform;
        ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this._change = _platform.isBrowser ?
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize'), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'orientationchange')) :
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
            // Note that we need to do the subscription inside `runOutsideAngular`
            // since subscribing is what causes the event listener to be added.
            _this._invalidateCache = _this.change().subscribe((/**
             * @return {?}
             */
            function () { return _this._updateViewportSize(); }));
        }));
    }
    /**
     * @return {?}
     */
    ViewportRuler.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._invalidateCache.unsubscribe();
    };
    /** Returns the viewport's width and height. */
    /**
     * Returns the viewport's width and height.
     * @return {?}
     */
    ViewportRuler.prototype.getViewportSize = /**
     * Returns the viewport's width and height.
     * @return {?}
     */
    function () {
        if (!this._viewportSize) {
            this._updateViewportSize();
        }
        /** @type {?} */
        var output = { width: this._viewportSize.width, height: this._viewportSize.height };
        // If we're not on a browser, don't cache the size since it'll be mocked out anyway.
        if (!this._platform.isBrowser) {
            this._viewportSize = (/** @type {?} */ (null));
        }
        return output;
    };
    /** Gets a ClientRect for the viewport's bounds. */
    /**
     * Gets a ClientRect for the viewport's bounds.
     * @return {?}
     */
    ViewportRuler.prototype.getViewportRect = /**
     * Gets a ClientRect for the viewport's bounds.
     * @return {?}
     */
    function () {
        // Use the document element's bounding rect rather than the window scroll properties
        // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
        // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
        // conceptual viewports. Under most circumstances these viewports are equivalent, but they
        // can disagree when the page is pinch-zoomed (on devices that support touch).
        // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
        // We use the documentElement instead of the body because, by default (without a css reset)
        // browsers typically give the document body an 8px margin, which is not included in
        // getBoundingClientRect().
        /** @type {?} */
        var scrollPosition = this.getViewportScrollPosition();
        var _a = this.getViewportSize(), width = _a.width, height = _a.height;
        return {
            top: scrollPosition.top,
            left: scrollPosition.left,
            bottom: scrollPosition.top + height,
            right: scrollPosition.left + width,
            height: height,
            width: width,
        };
    };
    /** Gets the (top, left) scroll position of the viewport. */
    /**
     * Gets the (top, left) scroll position of the viewport.
     * @return {?}
     */
    ViewportRuler.prototype.getViewportScrollPosition = /**
     * Gets the (top, left) scroll position of the viewport.
     * @return {?}
     */
    function () {
        // While we can get a reference to the fake document
        // during SSR, it doesn't have getBoundingClientRect.
        if (!this._platform.isBrowser) {
            return { top: 0, left: 0 };
        }
        // The top-left-corner of the viewport is determined by the scroll position of the document
        // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
        // whether `document.body` or `document.documentElement` is the scrolled element, so reading
        // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
        // `document.documentElement` works consistently, where the `top` and `left` values will
        // equal negative the scroll position.
        /** @type {?} */
        var documentElement = (/** @type {?} */ (document.documentElement));
        /** @type {?} */
        var documentRect = documentElement.getBoundingClientRect();
        /** @type {?} */
        var top = -documentRect.top || document.body.scrollTop || window.scrollY ||
            documentElement.scrollTop || 0;
        /** @type {?} */
        var left = -documentRect.left || document.body.scrollLeft || window.scrollX ||
            documentElement.scrollLeft || 0;
        return { top: top, left: left };
    };
    /**
     * Returns a stream that emits whenever the size of the viewport changes.
     * @param throttleTime Time in milliseconds to throttle the stream.
     */
    /**
     * Returns a stream that emits whenever the size of the viewport changes.
     * @param {?=} throttleTime Time in milliseconds to throttle the stream.
     * @return {?}
     */
    ViewportRuler.prototype.change = /**
     * Returns a stream that emits whenever the size of the viewport changes.
     * @param {?=} throttleTime Time in milliseconds to throttle the stream.
     * @return {?}
     */
    function (throttleTime) {
        if (throttleTime === void 0) { throttleTime = DEFAULT_RESIZE_TIME; }
        return throttleTime > 0 ? this._change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(throttleTime)) : this._change;
    };
    /** Updates the cached viewport size. */
    /**
     * Updates the cached viewport size.
     * @private
     * @return {?}
     */
    ViewportRuler.prototype._updateViewportSize = /**
     * Updates the cached viewport size.
     * @private
     * @return {?}
     */
    function () {
        this._viewportSize = this._platform.isBrowser ?
            { width: window.innerWidth, height: window.innerHeight } :
            { width: 0, height: 0 };
    };
    ViewportRuler.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    ViewportRuler.ctorParameters = function () { return [
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    /** @nocollapse */ ViewportRuler.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ViewportRuler_Factory() { return new ViewportRuler(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); }, token: ViewportRuler, providedIn: "root" });
    return ViewportRuler;
}());
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @param {?} parentRuler
 * @param {?} platform
 * @param {?} ngZone
 * @return {?}
 */
function VIEWPORT_RULER_PROVIDER_FACTORY(parentRuler, platform, ngZone) {
    return parentRuler || new ViewportRuler(platform, ngZone);
}
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @type {?}
 */
var VIEWPORT_RULER_PROVIDER = {
    // If there is already a ViewportRuler available, use that. Otherwise, provide a new one.
    provide: ViewportRuler,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), ViewportRuler], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]],
    useFactory: VIEWPORT_RULER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=scrolling.es5.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/player/components/playlist/playlist.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/player/components/playlist/playlist.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"playlist-container g-flex-column\">\n  <div\n    [formGroup]=\"playlistFormGroup\"\n    class=\"edit_of_ g-flex-column__item-fixed g-flex g-flex--align-center\">\n    <div class=\"lf_edit g-flex__item\">\n      <textarea\n        #playlistTextarea\n        [formControlName]=\"CONTROLS_NAME.PLAYLIST\"\n        cols=\"30\"\n        rows=\"10\">\n      </textarea>\n    </div>\n\n    <div class=\"rg_edit g-flex__item-fixed g-flex-column\">\n      <button\n        class=\"create_btn g-flex g-flex--align-center g-flex--justify-center\"\n        (click)=\"onAddPlaylist()\">\n        {{ 'create' | translate }}\n      </button>\n\n      <button\n        class=\"edit_me_ g-flex g-flex--align-center g-flex--justify-center\"\n        [disabled]=\"!selectedItemId\"\n        (click)=\"onEditPlaylist(selectedItemId)\">\n        {{ 'edit' | translate }}\n      </button>\n    </div>\n  </div>\n\n  <div class=\"edit_of_content g-flex-column__item g-flex-column\">\n    <div class=\"head_of_edit_ g-flex-column__item-fixed\">\n      <h2>{{ 'playlist' | translate }}</h2>\n\n      <button\n        class=\"delete_elems\"\n        [disabled]=\"!selectedItemId\"\n        (click)=\"onDeletePlaylist()\">\n        {{ 'delete' | translate }}\n      </button>\n    </div>\n\n    <div\n      class=\"count_elems playlist-items g-flex-column__item g-flex-column g-scroll-y\"\n      cdkDropList\n      (cdkDropListDropped)=\"dropItem($event)\"\n      [ngClass]=\"color + '_edit'\">\n      <ng-container *ngFor=\"let item of playlists\">\n        <div\n          cdkDrag\n          cdkDragBoundary=\".playlist-items\"\n          class=\"dragged-element elem_of_cont_edit course by-user\"\n          (click)=\"selectItem(item)\"\n          [class.active_elem_]=\"item.id === selectedItemId && selectedItemId\">\n          <p>{{ item.name }}</p>\n\n          <img class=\"moved-img\" src=\"../../assets/category.svg\">\n        </div>\n      </ng-container>\n    </div>\n  </div>\n</div>\n\n<div class=\"category_player g-flex-column\">\n  <div class=\"create_of_ g-flex-column__item-fixed g-flex g-flex--align-center\">\n    <div class=\"hovered_btns_left\">\n      <button\n        class=\"hovered_btns {{ color }}_button\"\n        [class.has-copied]=\"copiedSounds.length || copiedMixes.length\"\n        [disabled]=\"!selectedItemId\"\n        (click)=\"copySounds()\">\n        {{ 'pCopy' | translate }}\n      </button>\n\n      <ng-container *ngIf=\"selectedSounds.length && selectedMixes.length === 1; else saveMixTpl\">\n        <button\n          class=\"hovered_btns mix-btn\"\n          [disabled]=\"!selectedSounds.length || selectedMixes.length > 1\"\n          (click)=\"saveMix()\">\n          {{ 'addSoundsToMix' | translate }}\n        </button>\n      </ng-container>\n\n      <ng-template #saveMixTpl>\n        <button\n          class=\"hovered_btns mix-btn\"\n          [disabled]=\"selectedSounds.length < 2 || selectedMixes.length > 1\"\n          (click)=\"saveMix()\">\n          {{ 'saveMix' | translate }}\n        </button>\n      </ng-template>\n    </div>\n\n    <div class=\"hovered_btns_right\">\n      <button\n        class=\"hovered_btns\"\n        [disabled]=\"!selectedItemId || (!copiedSounds.length && !copiedMixes.length)\"\n        (click)=\"pasteSounds()\">\n        {{ 'pPaste' | translate }}\n      </button>\n\n      <button\n        class=\"hovered_btns mix-btn\"\n        [disabled]=\"!selectedMixes.length\"\n        (click)=\"resetMix()\">\n        {{ 'reset' | translate }}\n      </button>\n    </div>\n  </div>\n\n  <div class=\"edit_of_content g-flex-column__item g-flex-column\">\n    <div class=\"head_of_edit_ head_of_programm_sort g-flex-column__item-fixed\">\n      <h2>{{ 'program' | translate }}</h2>\n\n      <a>{{ 'edit' | translate }}</a>\n    </div>\n\n    <div class=\"g-flex-column__item g-scroll-y g-flex-column\">\n      <div\n        *ngIf=\"selectedItemMixes?.length\"\n        cdkDropList\n        #playlistDraggedMixesListElm=\"cdkDropList\"\n        [cdkDropListData]=\"selectedItemMixes\"\n        [cdkDropListConnectedTo]=\"[draggedFilteredSounds]\"\n        (cdkDropListDropped)=\"dropMix($event)\"\n        class=\"program_edit_ count_elems cont_of_edit_ mix\">\n        <div\n          *ngFor=\"let mix of selectedItemMixes\"\n          class=\"elem_program\"\n          cdkDragBoundary=\".program_edit_\"\n          cdkDrag>\n          <div class=\"lf_program programm-row g-flex__item\">\n            <div class=\"preview_prog g-flex__item-fixed\">\n              <div\n                class=\"checkbox-wrapper\"\n                (click)=\"changeSelectedMixes(mix, $event)\">\n              </div>\n\n              <p class=\"checkbox_in_prog\">\n                <input\n                  type=\"checkbox\"\n                  id=\"playlistMix\"\n                  [checked]=\"selectedMixes.indexOf(mix) !== -1\">\n                <label for=\"playlistMix\"></label>\n              </p>\n            </div>\n\n            <div class=\"g-flex-column g-flex__item\">\n              <div\n                *ngFor=\"let sound of mix.sounds; let i = index\"\n                class=\"g-flex g-flex--align-center\">\n                <div\n                  class=\"sound-label__mix g-flex__item\"\n                  (click)=\"changeSelectedMixes(mix, $event)\">\n                  {{ i + 1 }}. {{ sound.name }}\n                </div>\n              </div>\n            </div>\n\n            <div class=\"rf_program g-flex__item-fixed g-flex g-flex--align-center\">\n              <p>{{ mix.duration }}</p>\n\n              <img\n                src=\"../../assets/img/bin.png\"\n                alt=\"bin\"\n                class=\"bin_button\"\n                (click)=\"removeMix(mix)\">\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div\n        cdkDropList\n        #playlistDraggedSoundListElm=\"cdkDropList\"\n        [cdkDropListData]=\"selectedItemSounds\"\n        [cdkDropListConnectedTo]=\"[draggedFilteredSounds]\"\n        (cdkDropListDropped)=\"dropSound($event)\"\n        class=\"program_edit_ count_elems cont_of_edit_ sounds g-flex-column__item\">\n        <div\n          *ngFor=\"let sound of selectedItemSounds; let i = index\"\n          class=\"elem_program\"\n          cdkDragBoundary=\".program_edit_\"\n          cdkDrag>\n          <div class=\"lf_program programm-row g-flex__item\">\n            <div class=\"preview_prog\">\n              <div\n                class=\"checkbox-wrapper\"\n                (click)=\"changeSelectedSounds(sound, $event)\">\n              </div>\n\n              <p class=\"checkbox_in_prog\">\n                <input\n                  type=\"checkbox\"\n                  [id]=\"'playlistSound-' + i\"\n                  [checked]=\"selectedSounds.indexOf(sound) !== -1\">\n                <label [for]=\"'playlistSound-' + i\"></label>\n              </p>\n            </div>\n\n            <div\n              class=\"sound-label\"\n              (click)=\"changeSelectedSounds(sound, $event)\">\n              {{ i + countOfMixesSounds + 1 }}. {{ sound.name }}\n            </div>\n          </div>\n\n          <div class=\"rf_program g-flex__item-fixed g-flex g-flex--align-center\">\n            <p>{{ sound.duration }}</p>\n\n            <img\n              src=\"../../assets/img/bin.png\"\n              alt=\"bin\"\n              class=\"bin_button\"\n              (click)=\"removeSound(sound)\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <form\n    class=\"player-form g-flex-column\"\n    [formGroup]=\"playerFormGroup\">\n    <div class=\"wrap_of_top_player g-flex-column__item-fixed\">\n      <div class=\"head_of_player\">\n        <div class=\"head_logo\">\n          <a>\n            <img src=\"assets/img/bluelogo.png\" alt=\"bluelogo\">\n          </a>\n        </div>\n\n        <div class=\"search_with_settings\">\n          <div class=\"search_player\">\n            <div class=\"selected-sounds g-flex g-flex--align-center\">\n              <span class=\"selected-sounds__label\">{{ currentSound }}</span>\n            </div>\n          </div>\n\n          <div class=\"filter_player\">\n            <input\n              type=\"text\"\n              class=\"custom-duration\"\n              maxlength=\"3\"\n              [class.invalid]=\"playerFormGroup.get(CONTROLS_NAME.CUSTOM_TIME).invalid\"\n              [formControlName]=\"CONTROLS_NAME.CUSTOM_TIME\">\n\n            <a [class]=\"color + '_back'\">\n              <ion-icon name=\"settings\"></ion-icon>\n            </a>\n          </div>\n        </div>\n\n        <div class=\"player_buttons\">\n          <div class=\"controls_player\">\n            <i class=\"fa fa-arrows\" aria-hidden=\"true\"></i>\n\n            <button\n              class=\"btn-player\"\n              [disabled]=\"isSwitchButtonsDisabled\"\n              (click)=\"autoPlay(0)\">\n              <img\n                src=\"assets/img/prevbutton.png\"\n                alt=\"prevbutton\">\n            </button>\n\n            <button\n              *ngIf=\"!playerSoundService.isSomePlaying\"\n              [disabled]=\"!selectedSounds.length\"\n              class=\"btn-player\"\n              (click)=\"playSelectedSounds()\">\n              <img\n                src=\"assets/img/playbutton.png\"\n                alt=\"playbutton\">\n            </button>\n\n            <button\n              *ngIf=\"playerSoundService.isSomePlaying\"\n              [disabled]=\"!selectedSounds.length\"\n              class=\"btn-player\"\n              (click)=\"pauseSelectedSounds()\">\n              <img\n                src=\"assets/img/pause-button.png\"\n                alt=\"playbutton\">\n            </button>\n\n            <button\n              class=\"btn-player\"\n              [disabled]=\"isSwitchButtonsDisabled\"\n              (click)=\"autoPlay(1)\">\n              <img\n                src=\"assets/img/nextbutton.png\"\n                alt=\"nextbutton\">\n            </button>\n          </div>\n\n          <div class=\"duration_block {{ color }}\">\n            <ion-range\n              [formControlName]=\"CONTROLS_NAME.RANGE\"\n              (touchstart)=\"onTouchStartRange()\"\n              (touchend)=\"onTouchEndRange()\"\n              (ionChange)=\"onChangeRange($event)\"\n              min=\"0\"\n              max=\"100\"\n              step=\"1\">\n            </ion-range>\n          </div>\n\n          <div class=\"timing_block\">\n            <p class=\"timer\">\n              {{ countDown | async | formatTime }}\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"wrap_of_bottom_player player__fourth player-container g-flex-column__item\">\n      <ng-container *ngIf=\"isPlaylistOpened; else categoriesTpl\">\n        <playlist\n          class=\"playlist\"\n          [draggedFilteredSounds]=\"draggedFilteredSounds\"\n          [user]=\"user\"\n          [customDuration]=\"customDuration\"\n          [copiedSounds]=\"copiedSounds\"\n          (copyPlaylistSound)=\"onCopyPlaylistSound($event)\"\n          (resetSound)=\"resetSounds()\"\n          (selectSound)=\"onPlaylistSoundChange($event)\">\n        </playlist>\n      </ng-container>\n\n      <ng-template #categoriesTpl>\n        <!-- Categories -->\n        <div class=\"category_player {{ color }}_categor g-flex-column\">\n          <div class=\"edit_of_ g-flex-column__item-fixed\">\n            <div class=\"lf_edit\">\n              <textarea\n                #categoryTextarea\n                [formControlName]=\"CONTROLS_NAME.CATEGORY\"\n                cols=\"30\"\n                rows=\"10\">\n              </textarea>\n            </div>\n            <div class=\"rg_edit g-flex-column\">\n              <button\n                class=\"create_btn g-flex g-flex--align-center g-flex--justify-center\"\n                [disabled]=\"!categoryTextarea.value.trim()\"\n                (click)=\"onAddCategory()\">\n                {{ 'create' | translate }}\n              </button>\n\n              <button\n                class=\"edit_me_ g-flex g-flex--align-center g-flex--justify-center\"\n                [disabled]=\"!selectedCategoryId || isOfficialCategorySelected\"\n                (click)=\"onEditCategory()\">\n                {{ 'edit' | translate }}\n              </button>\n            </div>\n          </div>\n\n          <div class=\"edit_of_content g-flex-column__item g-flex-column\">\n            <div class=\"head_of_edit_ g-flex-column__item-fixed\">\n              <h2>{{ 'category' | translate }}</h2>\n\n              <button\n                class=\"delete_elems\"\n                [disabled]=\"!selectedCategoryId || isOfficialCategorySelected\"\n                (click)=\"onDeleteCategory()\">\n                {{ 'delete' | translate }}\n              </button>\n            </div>\n\n            <div class=\"g-flex-column__item g-flex-column g-scroll-y\">\n              <div\n                class=\"cont_of_edit_ count_elems categories\"\n                [ngClass]=\"color + '_edit'\">\n                <div\n                  *ngFor=\"let categoryId of officialCategoriesId\"\n                  [id]=\"categoryId\"\n                  [class]=\"'dragged-element ' + color\"\n                  (click)=\"filterCourses(categoryId)\">\n                  <div\n                    *ngFor=\"let cat of categories | category: categoryId\"\n                    class=\"elem_of_cont_edit {{ color }}\"\n                    [class.active_elem_]=\"cat.id == selectedCategoryId\">\n                    <p>\n                      {{ cat.name }}\n                    </p>\n                  </div>\n                </div>\n              </div>\n\n              <div\n                class=\"cont_of_edit_ count_elems user-categories\"\n                cdkDropList\n                (cdkDropListDropped)=\"dropCategory($event)\"\n                [ngClass]=\"color + '_edit'\">\n                <div\n                  *ngFor=\"let categoryId of userOwnCategoriesId\"\n                  cdkDrag\n                  [id]=\"categoryId\"\n                  [class]=\"'dragged-element ' + color\"\n                  (click)=\"filterCourses(categoryId)\">\n                  <div\n                    *ngFor=\"let cat of categories | category: categoryId\"\n                    class=\"elem_of_cont_edit {{ color }} by-user\"\n                    [class.active_elem_]=\"cat.id == selectedCategoryId\">\n                    <p>\n                      {{ cat.name }}\n                    </p>\n\n                    <img class=\"moved-img\" src=\"../../assets/category.svg\">\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- Courses -->\n        <div class=\"category_player {{ color }}_categor g-flex-column\">\n          <div class=\"edit_of_ g-flex-column__item-fixed\">\n            <div class=\"lf_edit\">\n              <textarea\n                #courseTextarea\n                [formControlName]=\"CONTROLS_NAME.COURSE\"\n                cols=\"30\"\n                rows=\"10\">\n              </textarea>\n            </div>\n            <div class=\"rg_edit g-flex-column\">\n              <button\n                class=\"create_btn g-flex g-flex--align-center g-flex--justify-center\"\n                [disabled]=\"isDisableCourseCreate\"\n                (click)=\"onAddCourse()\">\n                {{ 'create' | translate }}\n              </button>\n\n              <button\n                class=\"edit_me_ g-flex g-flex--align-center g-flex--justify-center\"\n                [disabled]=\"!selectedCourse || isOfficialCourseSelected\"\n                (click)=\"onEditCourse()\">\n                {{ 'edit' | translate }}\n              </button>\n            </div>\n          </div>\n\n          <div class=\"edit_of_content count_elems g-flex-column__item g-flex-column\">\n            <div class=\"head_of_edit_ g-flex-column__item-fixed\">\n              <h2>{{ 'course' | translate }}</h2>\n\n              <button\n                class=\"delete_elems\"\n                [disabled]=\"!selectedCourse || isOfficialCourseSelected\"\n                (click)=\"onDeleteCourse()\">\n                {{ 'delete' | translate }}\n              </button>\n            </div>\n\n            <div class=\"g-flex-column__item g-flex-column g-scroll-y\">\n              <div\n                *ngIf=\"userOwnCategoryCourses.length\"\n                class=\"cont_of_edit_ {{ color }}_edit courses\"\n                cdkDropList\n                (cdkDropListDropped)=\"dropCourse($event)\">\n                <ng-container *ngFor=\"let course of userOwnCategoryCourses\">\n                  <div\n                    cdkDrag\n                    class=\"dragged-element elem_of_cont_edit course by-user\"\n                    (click)=\"setCourse(course)\"\n                    [class.active_elem_]=\"course.id == selectedCourse && selectedCourse\">\n                    <p>{{ course.name }}</p>\n\n                    <img class=\"moved-img\" src=\"../../assets/category.svg\">\n                  </div>\n                </ng-container>\n              </div>\n\n              <div\n                *ngIf=\"officialCategoryCourses.length\"\n                class=\"cont_of_edit_ {{ color }}_edit courses\">\n                <ng-container *ngFor=\"let course of officialCategoryCourses\">\n                  <div\n                    class=\"elem_of_cont_edit course\"\n                    (click)=\"setCourse(course)\"\n                    [class.active_elem_]=\"course.id == selectedCourse && selectedCourse\">\n                    <p>{{ course.name }}</p>\n                  </div>\n                </ng-container>\n              </div>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n\n      <!-- Program -->\n      <ng-container *ngIf=\"!isPlaylistOpened\">\n        <div class=\"category_player longer_program g-flex-column\">\n          <div class=\"create_of_ g-flex-column__item-fixed\">\n            <button\n              class=\"hovered_btns {{ color }}_button\"\n              [class.has-copied]=\"copiedSounds.length || copiedMixes.length\"\n              [disabled]=\"!selectedCourse\"\n              (click)=\"copySounds()\">\n              {{ 'pCopy' | translate }}\n            </button>\n\n            <button\n              class=\"hovered_btns\"\n              [disabled]=\"!selectedCourse || isOfficialCourseSelected || (!copiedSounds.length && !copiedMixes.length)\"\n              (click)=\"pasteSounds()\">\n              {{ 'pPaste' | translate }}\n            </button>\n          </div>\n\n          <div class=\"edit_of_content g-flex-column__item g-flex-column\">\n            <div class=\"head_of_edit_ head_of_programm_sort g-flex-column__item-fixed\">\n              <h2>{{ 'program' | translate }}</h2>\n              <a>{{ 'edit' | translate }}</a>\n            </div>\n\n            <div\n              cdkDropList\n              #draggedSoundListElm=\"cdkDropList\"\n              [cdkDropListData]=\"soundList\"\n              [cdkDropListConnectedTo]=\"[draggedFilteredSounds]\"\n              (cdkDropListDropped)=\"dropSound($event)\"\n              class=\"program_edit_ count_elems cont_of_edit_ g-flex-column__item\">\n              <div\n                *ngFor=\"let sound of soundList; let i = index\"\n                class=\"elem_program\"\n                cdkDragBoundary=\".program_edit_\"\n                cdkDrag>\n                <div class=\"lf_program programm-row g-flex__item\">\n                  <div class=\"preview_prog\">\n                    <div\n                      class=\"checkbox-wrapper\"\n                      (click)=\"changeSelectedSounds(sound, $event)\">\n                    </div>\n\n                    <p class=\"checkbox_in_prog\">\n                      <input\n                        type=\"checkbox\"\n                        [id]=\"'courseSound-' + i\"\n                        [checked]=\"selectedSounds.indexOf(sound) !== -1\">\n                      <label [for]=\"'courseSound-' + i\"></label>\n                    </p>\n                  </div>\n\n                  <div\n                    class=\"sound-label\"\n                    (click)=\"changeSelectedSounds(sound, $event)\">\n                    {{ i + 1 }}. {{ sound.name }}\n                  </div>\n                </div>\n\n                <div class=\"rf_program g-flex__item-fixed\">\n                  <p>{{ sound.duration }}</p>\n\n                  <img\n                    *ngIf=\"!isOfficialCourseSelected\"\n                    src=\"../../assets/img/bin.png\"\n                    alt=\"bin\"\n                    class=\"bin_button\"\n                    (click)=\"removeSound(sound)\">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </ng-container>\n\n      <!-- Sounds list -->\n      <div class=\"category_player longer_program generation_block g-flex-column\">\n        <div class=\"generation_buttons {{ color }}_button g-flex-column__item-fixed\">\n          <!--<a (click)=\"openMenu()\" class=\"active_generation\">My Page</a>-->\n          <a [routerLink]=\"'/' + APP_ROUTE_URLS.INFO\" class=\"active_generation\">{{ \"home\" | translate }}</a>\n          <a class=\"hovered_btns\" (click)=\"changeLanguage()\">{{ \"cLang\" | translate }}</a>\n        </div>\n\n        <div class=\"generation_content count_elems g-flex-column__item g-flex-column\">\n          <div class=\"scrolltobot g-flex-column__item-fixed\">\n            <img src=\"assets/img/scrollBot.png\" alt=\"scrollBot\">\n          </div>\n\n          <div class=\"head_generation g-flex-column__item g-flex-column\">\n            <h2 class=\"g-flex-column__item-fixed\">\n              {{ \"tList\" | translate }}\n            </h2>\n\n            <div class=\"inner_head_generation {{ color }}_generation g-flex-column__item-fixed\">\n              <ion-input type=\"text\" (ionInput)=\"getItems($event)\" placeholder=\"Поиск\"></ion-input>\n            </div>\n\n            <div\n              cdkDropList\n              #draggedFilteredSoundsElm=\"cdkDropList\"\n              [cdkDropListData]=\"filteredSounds\"\n              class=\"generation_wrap cont_of_edit_ top-list g-flex-column g-scroll-y\">\n              <div\n                *ngFor=\"let sound of filteredSounds; let i = index\"\n                cdkDrag\n                class=\"generation_elem\">\n                <p>{{ i + 1 }}. {{ sound.name }}</p>\n                <p>{{ sound.duration }}</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"bottom_delete courses_bottom\">\n      <h2>{{ 'delCourse' | translate }}</h2>\n      <div class=\"bottom_buttons\">\n        <a class=\"delete_button_courses\">{{ 'delete' | translate }}</a>\n        <a class=\"ok_button_courses\">OK</a>\n      </div>\n    </div>\n\n    <div class=\"bottom_delete program_bottom\">\n      <h2>{{ 'delProg' | translate }}</h2>\n      <div class=\"bottom_buttons\">\n        <a class=\"delete_button_program\">{{ 'delete' | translate }}</a>\n        <a class=\"ok_button_program\">OK</a>\n      </div>\n    </div>\n\n    <div class=\"switcher_of_page {{color}}\">\n      <a (click)=\"switchPlaylist()\">{{ (isPlaylistOpened ? 'category' : 'playlist') | translate }} </a>\n    </div>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/language-modal/language-modal.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/language-modal/language-modal.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header_long change-lang\">\n  <div>\n    {{ \"cLang\" | translate }}\n  </div>\n\n  <select (change)=\"changeLang($event.target.value)\">\n    <option\n      *ngFor=\"let language of APP_LANGUAGES\"\n      [value]=\"language.code\"\n      [selected]=\"language.code === selectedLang\">\n      {{ language.label }}\n    </option>\n  </select>\n</div>\n");

/***/ }),

/***/ "./node_modules/uuid/index.js":
/*!************************************!*\
  !*** ./node_modules/uuid/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(/*! ./v1 */ "./node_modules/uuid/v1.js");
var v4 = __webpack_require__(/*! ./v4 */ "./node_modules/uuid/v4.js");

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "./node_modules/uuid/v1.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v1.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "./src/app/player/components/playlist/playlist.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/player/components/playlist/playlist.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".playlist-container {\n  width: 75%;\n}\n\n.category_player {\n  width: 37%;\n  margin-left: 2%;\n}\n\n.hovered_btns,\n.edit_me_,\n.create_btn,\n.delete_elems {\n  background: none;\n}\n\n.hovered_btns:focus,\n.edit_me_:focus,\n.create_btn:focus,\n.delete_elems:focus {\n  outline: none;\n}\n\n.hovered_btns:disabled,\n.edit_me_:disabled,\n.create_btn:disabled,\n.delete_elems:disabled {\n  opacity: 0.4;\n}\n\n.hovered_btns:active,\n.edit_me_:active,\n.create_btn:active,\n.delete_elems:active {\n  background-color: #0E1FC0;\n  color: #fff;\n  transition: 0.2s ease all;\n}\n\n.hovered_btns_left,\n.hovered_btns_right {\n  width: 100%;\n}\n\n.hovered_btns_left {\n  margin-right: 5px;\n}\n\n.hovered_btns_right {\n  margin-left: 5px;\n}\n\n.hovered_btns {\n  width: 100%;\n  height: 27.5px;\n  white-space: nowrap;\n}\n\n.delete_elems {\n  font-size: 20px;\n}\n\n.edit_me_,\n.create_btn {\n  flex: auto;\n  padding: 3px;\n  border-radius: 5px;\n  border: 1px solid #D1D1D3;\n}\n\n.edit_me_ {\n  margin-top: 5px;\n}\n\n.playlist-items {\n  margin-top: 10px;\n}\n\n.checkbox-wrapper {\n  background: transparent;\n  width: 50px;\n  height: 30px;\n  position: absolute;\n  z-index: 10;\n}\n\n.dragged-element {\n  margin-bottom: 10px;\n}\n\n.dragged-element .moved-img {\n  display: none;\n}\n\n.dragged-element.moved .moved-img {\n  display: block;\n}\n\n.dragged-element:last-child {\n  margin-bottom: 0;\n}\n\n.mix-btn {\n  margin-top: 5px;\n}\n\n.cont_of_edit_ {\n  overflow-y: visible;\n}\n\n.cont_of_edit_.sounds, .cont_of_edit_.mix {\n  margin-top: 0;\n}\n\n.sound-label__mix {\n  padding: 6px 0;\n}\n\n.rf_program {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.rf_program img {\n  display: flex !important;\n  height: 16px;\n  width: 16px;\n  margin-left: 10px;\n  padding: 0;\n}\n\n.elem_program .lf_program p {\n  margin-right: 0;\n}\n\n.head_of_edit_ {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWVyL2NvbXBvbmVudHMvcGxheWxpc3QvRDpcXEJhY2t1cFxcRGV2ZWxvcG1lbnRcXFdvcmtfSm9ic1xcRnJlZWxhbmNpbmdcXE91dFxcQW5ndWxhcl9zb3VuZFxcQXJjaGl2ZS9zcmNcXGFwcFxccGxheWVyXFxjb21wb25lbnRzXFxwbGF5bGlzdFxccGxheWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BsYXllci9jb21wb25lbnRzL3BsYXlsaXN0L3BsYXlsaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTs7OztFQUlFLGdCQUFBO0FDQ0Y7O0FEQ0U7Ozs7RUFDRSxhQUFBO0FDSUo7O0FEREU7Ozs7RUFDRSxZQUFBO0FDTUo7O0FESEU7Ozs7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ1FKOztBREpBOztFQUVFLFdBQUE7QUNPRjs7QURKQTtFQUNFLGlCQUFBO0FDT0Y7O0FESkE7RUFDRSxnQkFBQTtBQ09GOztBREpBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ09GOztBREpBO0VBQ0UsZUFBQTtBQ09GOztBREpBOztFQUVFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ09GOztBREpBO0VBQ0UsZUFBQTtBQ09GOztBREpBO0VBQ0UsZ0JBQUE7QUNPRjs7QURKQTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNPRjs7QURKQTtFQUNFLG1CQUFBO0FDT0Y7O0FETEU7RUFDRSxhQUFBO0FDT0o7O0FESEk7RUFDRSxjQUFBO0FDS047O0FEREU7RUFDRSxnQkFBQTtBQ0dKOztBRENBO0VBQ0UsZUFBQTtBQ0VGOztBRENBO0VBQ0UsbUJBQUE7QUNFRjs7QURBRTtFQUVFLGFBQUE7QUNDSjs7QURJRTtFQUNFLGNBQUE7QUNESjs7QURLQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQ0ZGOztBRElFO0VBQ0Usd0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQ0ZKOztBRE1BO0VBQ0UsZUFBQTtBQ0hGOztBRE1BO0VBQ0UsZ0JBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL3BsYXllci9jb21wb25lbnRzL3BsYXlsaXN0L3BsYXlsaXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBsYXlsaXN0LWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDc1JTtcclxufVxyXG5cclxuLmNhdGVnb3J5X3BsYXllciB7XHJcbiAgd2lkdGg6IDM3JTtcclxuICBtYXJnaW4tbGVmdDogMiU7XHJcbn1cclxuXHJcbi5ob3ZlcmVkX2J0bnMsXHJcbi5lZGl0X21lXyxcclxuLmNyZWF0ZV9idG4sXHJcbi5kZWxldGVfZWxlbXMge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcblxyXG4gICY6ZGlzYWJsZWQge1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG4gIH1cclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBFMUZDMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcclxuICB9XHJcbn1cclxuXHJcbi5ob3ZlcmVkX2J0bnNfbGVmdCxcclxuLmhvdmVyZWRfYnRuc19yaWdodCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5ob3ZlcmVkX2J0bnNfbGVmdCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5ob3ZlcmVkX2J0bnNfcmlnaHQge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5ob3ZlcmVkX2J0bnMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjcuNXB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5kZWxldGVfZWxlbXMge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmVkaXRfbWVfLFxyXG4uY3JlYXRlX2J0biB7XHJcbiAgZmxleDogYXV0bztcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNEMUQxRDM7XHJcbn1cclxuXHJcbi5lZGl0X21lXyB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4ucGxheWxpc3QtaXRlbXMge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5jaGVja2JveC13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4uZHJhZ2dlZC1lbGVtZW50IHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAubW92ZWQtaW1nIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmLm1vdmVkIHtcclxuICAgIC5tb3ZlZC1pbWcge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLm1peC1idG4ge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmNvbnRfb2ZfZWRpdF8ge1xyXG4gIG92ZXJmbG93LXk6IHZpc2libGU7XHJcblxyXG4gICYuc291bmRzLFxyXG4gICYubWl4IHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uc291bmQtbGFiZWwge1xyXG4gICZfX21peCB7XHJcbiAgICBwYWRkaW5nOiA2cHggMDtcclxuICB9XHJcbn1cclxuXHJcbi5yZl9wcm9ncmFtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gIGltZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuXHJcbi5lbGVtX3Byb2dyYW0gLmxmX3Byb2dyYW0gcCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uaGVhZF9vZl9lZGl0XyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4iLCIucGxheWxpc3QtY29udGFpbmVyIHtcbiAgd2lkdGg6IDc1JTtcbn1cblxuLmNhdGVnb3J5X3BsYXllciB7XG4gIHdpZHRoOiAzNyU7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbn1cblxuLmhvdmVyZWRfYnRucyxcbi5lZGl0X21lXyxcbi5jcmVhdGVfYnRuLFxuLmRlbGV0ZV9lbGVtcyB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG4uaG92ZXJlZF9idG5zOmZvY3VzLFxuLmVkaXRfbWVfOmZvY3VzLFxuLmNyZWF0ZV9idG46Zm9jdXMsXG4uZGVsZXRlX2VsZW1zOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5ob3ZlcmVkX2J0bnM6ZGlzYWJsZWQsXG4uZWRpdF9tZV86ZGlzYWJsZWQsXG4uY3JlYXRlX2J0bjpkaXNhYmxlZCxcbi5kZWxldGVfZWxlbXM6ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjQ7XG59XG4uaG92ZXJlZF9idG5zOmFjdGl2ZSxcbi5lZGl0X21lXzphY3RpdmUsXG4uY3JlYXRlX2J0bjphY3RpdmUsXG4uZGVsZXRlX2VsZW1zOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwRTFGQzA7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xufVxuXG4uaG92ZXJlZF9idG5zX2xlZnQsXG4uaG92ZXJlZF9idG5zX3JpZ2h0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ob3ZlcmVkX2J0bnNfbGVmdCB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uaG92ZXJlZF9idG5zX3JpZ2h0IHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmhvdmVyZWRfYnRucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI3LjVweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmRlbGV0ZV9lbGVtcyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmVkaXRfbWVfLFxuLmNyZWF0ZV9idG4ge1xuICBmbGV4OiBhdXRvO1xuICBwYWRkaW5nOiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0QxRDFEMztcbn1cblxuLmVkaXRfbWVfIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4ucGxheWxpc3QtaXRlbXMge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uY2hlY2tib3gtd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uZHJhZ2dlZC1lbGVtZW50IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5kcmFnZ2VkLWVsZW1lbnQgLm1vdmVkLWltZyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZHJhZ2dlZC1lbGVtZW50Lm1vdmVkIC5tb3ZlZC1pbWcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5kcmFnZ2VkLWVsZW1lbnQ6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5taXgtYnRuIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uY29udF9vZl9lZGl0XyB7XG4gIG92ZXJmbG93LXk6IHZpc2libGU7XG59XG4uY29udF9vZl9lZGl0Xy5zb3VuZHMsIC5jb250X29mX2VkaXRfLm1peCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5zb3VuZC1sYWJlbF9fbWl4IHtcbiAgcGFkZGluZzogNnB4IDA7XG59XG5cbi5yZl9wcm9ncmFtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5yZl9wcm9ncmFtIGltZyB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5lbGVtX3Byb2dyYW0gLmxmX3Byb2dyYW0gcCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLmhlYWRfb2ZfZWRpdF8ge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/player/components/playlist/playlist.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/player/components/playlist/playlist.component.ts ***!
  \******************************************************************/
/*! exports provided: PlaylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistComponent", function() { return PlaylistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shared_constants_coupons_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/constants/coupons.constant */ "./src/app/shared/constants/coupons.constant.ts");
/* harmony import */ var _shared_models_user_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/models/user.model */ "./src/app/shared/models/user.model.ts");
/* harmony import */ var _model_playlist_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../model/playlist.model */ "./src/app/player/model/playlist.model.ts");
/* harmony import */ var _model_sound_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../model/sound.model */ "./src/app/player/model/sound.model.ts");
/* harmony import */ var _services_play_sound_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/play-sound.service */ "./src/app/player/services/play-sound.service.ts");
/* harmony import */ var _services_player_api_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/player.api.service */ "./src/app/player/services/player.api.service.ts");
















var CONTROLS_NAME;
(function (CONTROLS_NAME) {
    CONTROLS_NAME["PLAYLIST"] = "playlist";
})(CONTROLS_NAME || (CONTROLS_NAME = {}));
var PlaylistComponent = /** @class */ (function () {
    function PlaylistComponent(_changeDetectorRef, _storage, _loadingController, _alertController, _translateService, _playerApiService, _playerSoundService) {
        var _a;
        this._changeDetectorRef = _changeDetectorRef;
        this._storage = _storage;
        this._loadingController = _loadingController;
        this._alertController = _alertController;
        this._translateService = _translateService;
        this._playerApiService = _playerApiService;
        this._playerSoundService = _playerSoundService;
        this.copiedSounds = [];
        this.selectSound = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.resetSound = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.copyPlaylistSound = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.copiedMixes = [];
        this.selectedSounds = [];
        this.selectedMixes = [];
        this.countOfMixesSounds = 0;
        this.playlistFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]((_a = {},
            _a[CONTROLS_NAME.PLAYLIST] = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            _a));
        this.CONTROLS_NAME = CONTROLS_NAME;
        this._translations = {};
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
    }
    PlaylistComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.load('Загрузка');
                        this._translateService.get(['max5'])
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._destroy$))
                            .subscribe(function (values) {
                            _this._translations = values;
                        });
                        return [4 /*yield*/, this.getColor()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PlaylistComponent.prototype.ngOnChanges = function (_a) {
        var user = _a.user, customDuration = _a.customDuration;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(user && this.user)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getPlayLists()];
                    case 1:
                        _b.sent();
                        this._loadingController.dismiss();
                        _b.label = 2;
                    case 2:
                        if (customDuration) {
                            this.selectedSounds.forEach(function (sound) {
                                sound.duration = _this.customDuration;
                            });
                            this.selectedMixes.forEach(function (mix) {
                                mix.duration = _this.customDuration;
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PlaylistComponent.prototype.ngOnDestroy = function () {
        this._destroy$.next();
        this._destroy$.complete();
    };
    PlaylistComponent.prototype.dropItem = function (event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(this.playlists, event.previousIndex, event.currentIndex);
    };
    PlaylistComponent.prototype.dropMix = function (event) {
        if (!this.selectedItemId) {
            return;
        }
        this.resetSound.emit();
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(this.selectedItemMixes, event.previousIndex, event.currentIndex);
        this._changeDetectorRef.detectChanges();
    };
    PlaylistComponent.prototype.dropSound = function (event) {
        if (!this.selectedItemId) {
            return;
        }
        this.resetSound.emit();
        if (event.container !== event.previousContainer) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["copyArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            this.selectedItemSounds = this._playerSoundService.updateSelectedSoundsUuid(this.selectedItemSounds, this.selectedSounds);
            this.updateSounds();
            return;
        }
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(this.selectedItemSounds, event.previousIndex, event.currentIndex);
        this.updateSounds();
        this._changeDetectorRef.detectChanges();
    };
    PlaylistComponent.prototype.selectItem = function (item) {
        var _this = this;
        this.selectedItemId = item.id;
        this.selectedItemSounds = item.sounds.map(function (it) { return (new _model_sound_model__WEBPACK_IMPORTED_MODULE_13__["SoundModel"](tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, it, { uuid: uuid__WEBPACK_IMPORTED_MODULE_9__["v4"]() }))); });
        this.selectedItemMixes = item.mixes.map(function (it) {
            _this.countOfMixesSounds = _this.countOfMixesSounds + it.sounds.length;
            return new _model_playlist_model__WEBPACK_IMPORTED_MODULE_12__["MixModel"](tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, it, { duration: it.sounds[0] ? it.sounds[0].duration : 0, uuid: uuid__WEBPACK_IMPORTED_MODULE_9__["v4"]() }));
        });
        this.selectedSounds = [];
        this.playlistFormGroup.get(CONTROLS_NAME.PLAYLIST).setValue(item.name, { emitEvent: false });
        this.resetSound.emit();
    };
    PlaylistComponent.prototype.onAddPlaylist = function () {
        var _this = this;
        this.load('Загрузка');
        this._playerApiService.addPlaylist({
            user_id: this.user.uid,
            name: this.playlistFormGroup.get(CONTROLS_NAME.PLAYLIST).value,
            status: _shared_constants_coupons_constant__WEBPACK_IMPORTED_MODULE_10__["COUPON_STATUSES"].ACTIVE,
            trash: 0,
        })
            .subscribe(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getPlayLists()];
                    case 1:
                        _a.sent();
                        this.playlistFormGroup.get(CONTROLS_NAME.PLAYLIST).setValue(null, { emitEvent: false });
                        return [4 /*yield*/, this._loadingController.dismiss()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    PlaylistComponent.prototype.onEditPlaylist = function (id) {
        var _this = this;
        this.load('Загрузка');
        this._playerApiService.renamePlaylist({
            id: id,
            name: this.playlistFormGroup.get(CONTROLS_NAME.PLAYLIST).value,
        })
            .subscribe(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getPlayLists()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this._loadingController.dismiss()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    PlaylistComponent.prototype.onDeletePlaylist = function () {
        var _this = this;
        this._playerApiService.deletePlaylist({
            id: this.selectedItemId,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(function (_a) {
            var error = _a.error;
            console.error('error', error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(error);
        }))
            .subscribe(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.selectedSounds = [];
                        this.selectedMixes = [];
                        this.selectedItemMixes = [];
                        this.selectedItemSounds = [];
                        return [4 /*yield*/, this.getPlayLists()];
                    case 1:
                        _a.sent();
                        this.playlistFormGroup.get(CONTROLS_NAME.PLAYLIST).setValue(null, { emitEvent: false });
                        this._changeDetectorRef.detectChanges();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    PlaylistComponent.prototype.copySounds = function () {
        this.copiedSounds = [];
        this.copiedMixes = [];
        if (!this.selectedSounds.length && !this.selectedMixes.length) {
            this.copiedSounds = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.copiedSounds, this.selectedItemSounds);
            this.copiedMixes = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.copiedMixes, this.selectedItemMixes);
        }
        if (!this.selectedSounds.length && this.selectedMixes.length) {
            this.copiedMixes = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.copiedMixes, this.selectedMixes);
        }
        if (this.selectedSounds.length && !this.selectedMixes.length) {
            this.copiedSounds = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.copiedSounds, this.selectedSounds);
        }
        if (this.selectedSounds.length && this.selectedMixes.length) {
            this.copiedSounds = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.copiedSounds, this.selectedSounds);
            this.copiedMixes = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.copiedMixes, this.selectedMixes);
        }
        this.copyPlaylistSound.emit({ copiedSounds: this.copiedSounds, copiedMixes: this.copiedMixes });
    };
    PlaylistComponent.prototype.pasteSounds = function () {
        var _this = this;
        if (this.copiedSounds) {
            this.selectedItemSounds = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.selectedItemSounds, this.copiedSounds).map(function (it) { return (new _model_sound_model__WEBPACK_IMPORTED_MODULE_13__["SoundModel"](tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, it, { uuid: uuid__WEBPACK_IMPORTED_MODULE_9__["v4"]() }))); });
            this.updateSounds();
        }
        if (this.copiedMixes) {
            this.selectedItemMixes = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.selectedItemMixes, this.copiedMixes).map(function (it) { return (new _model_playlist_model__WEBPACK_IMPORTED_MODULE_12__["MixModel"](tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, it, { uuid: uuid__WEBPACK_IMPORTED_MODULE_9__["v4"]() }))); });
            var requests_1 = [];
            this.copiedMixes.forEach(function (mix) {
                requests_1.push(_this._playerApiService.addMix({
                    id: _this.selectedItemId,
                    sounds_id: mix.sounds.map(function (it) { return it.id; }).join(','),
                }));
                Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])(requests_1)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(function (_a) {
                    var error = _a.error;
                    console.error('error', error);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(error);
                }))
                    .subscribe(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.finalizeMixOperation()];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
            });
        }
        this.copiedSounds = [];
        this.selectedSounds = [];
        this.copiedMixes = [];
        this.selectedMixes = [];
        this.copyPlaylistSound.emit({ copiedSounds: this.copiedSounds, copiedMixes: this.copiedMixes });
    };
    PlaylistComponent.prototype.changeSelectedMixes = function (mix, event) {
        event.stopPropagation();
        var foundMix = this.selectedMixes.find(function (it) { return it.uuid === mix.uuid; });
        if (!foundMix) {
            if (this.selectedMixes.length >= 5) {
                this.alert('', this._translations.max5);
                return;
            }
            this.selectedMixes.push(mix);
            this.emitSelectedSounds();
            return;
        }
        this.selectedMixes = this.selectedMixes.filter(function (it) { return it.uuid !== mix.uuid; });
        this.emitSelectedSounds();
    };
    PlaylistComponent.prototype.changeSelectedSounds = function (sound, event) {
        event.stopPropagation();
        var foundSound = this.selectedSounds.find(function (it) { return it.uuid === sound.uuid; });
        if (!foundSound) {
            if (this.selectedSounds.length >= 5) {
                this.alert('', this._translations.max5);
                return;
            }
            this.selectedSounds.push(sound);
            this.emitSelectedSounds();
            return;
        }
        this.selectedSounds = this.selectedSounds.filter(function (it) { return it.uuid !== sound.uuid; });
        this.emitSelectedSounds();
    };
    PlaylistComponent.prototype.saveMix = function () {
        var _this = this;
        this.load('Загрузка');
        var request;
        if (this.selectedMixes.length && this.selectedSounds.length) {
            request = this._playerApiService.addMixSounds({
                id: this.selectedMixes[0].id,
                sounds_id: this.selectedSounds.map(function (sound) { return sound.id; }).join(','),
            });
        }
        else {
            request = this._playerApiService.addMix({
                id: this.selectedItemId,
                sounds_id: this.selectedSounds.map(function (sound) { return sound.id; }).join(','),
            });
        }
        request
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(function (_a) {
            var error = _a.error;
            console.error('error', error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(error);
        }))
            .subscribe(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.finalizeMixOperation()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    PlaylistComponent.prototype.resetMix = function () {
        var _this = this;
        this.load('Загрузка');
        var requests = this.selectedMixes.map(function (it) {
            return _this._playerApiService.resetMix({
                id: it.id,
            });
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])(requests)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(function (_a) {
            var error = _a.error;
            console.error('error', error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(error);
        }))
            .subscribe(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.finalizeMixOperation()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    PlaylistComponent.prototype.emitSelectedSounds = function () {
        var mixesSounds = this.selectedMixes.map(function (mix) { return mix.sounds; });
        this.selectSound.emit({
            selectedSounds: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this._playerSoundService.getSoundsFromSelectedMixes(this.selectedMixes), this.selectedSounds),
            soundList: this.selectedItemSounds,
        });
    };
    PlaylistComponent.prototype.finalizeMixOperation = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var item;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getPlayLists()];
                    case 1:
                        _a.sent();
                        item = this.playlists.find(function (it) { return _this.selectedItemId === it.id; });
                        this.selectItem(item);
                        this.selectedMixes = [];
                        this.selectedSounds = [];
                        this.countOfMixesSounds = 0;
                        this._changeDetectorRef.detectChanges();
                        return [4 /*yield*/, this._loadingController.dismiss()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PlaylistComponent.prototype.load = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._loadingController.create({
                            message: message,
                            duration: 0,
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        return [2 /*return*/];
                }
            });
        });
    };
    PlaylistComponent.prototype.alert = function (header, message) {
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
    PlaylistComponent.prototype.getColor = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._storage.get('color')
                .then(function (val) {
                _this.color = val;
                resolve();
                _this._changeDetectorRef.detectChanges();
            });
        });
    };
    PlaylistComponent.prototype.getPlayLists = function () {
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
        var _this = this;
        return new Promise(function (resolve) {
            _this._playerApiService.getUserPlayList(_this.user.uid)
                .subscribe(function (data) {
                _this.playlists = data.list;
                resolve();
                _this._changeDetectorRef.detectChanges();
            });
        });
    };
    PlaylistComponent.prototype.updateSounds = function () {
        var _this = this;
        this._playerApiService.addPlayListSound({
            id: this.selectedItemId,
            sounds_id: this.selectedItemSounds.map(function (sound) { return sound.id; }).join(','),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(function (_a) {
            var error = _a.error;
            console.error('error', error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(error);
        }))
            .subscribe(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // await this.getCourses();
                    // await this.getSounds();
                    return [4 /*yield*/, this.getPlayLists()];
                    case 1:
                        // await this.getCourses();
                        // await this.getSounds();
                        _a.sent();
                        this._changeDetectorRef.detectChanges();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    PlaylistComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _services_player_api_service__WEBPACK_IMPORTED_MODULE_15__["PlayerApiService"] },
        { type: _services_play_sound_service__WEBPACK_IMPORTED_MODULE_14__["PlayerSoundService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shared_models_user_model__WEBPACK_IMPORTED_MODULE_11__["UserModel"])
    ], PlaylistComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PlaylistComponent.prototype, "customDuration", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"])
    ], PlaylistComponent.prototype, "draggedFilteredSounds", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], PlaylistComponent.prototype, "copiedSounds", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], PlaylistComponent.prototype, "selectSound", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], PlaylistComponent.prototype, "resetSound", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], PlaylistComponent.prototype, "copyPlaylistSound", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('playlistTextarea', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], PlaylistComponent.prototype, "playlistTextarea", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('playlistDraggedSoundListElm', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"])
    ], PlaylistComponent.prototype, "playlistDraggedSoundList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('playlistDraggedMixesListElm', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"])
    ], PlaylistComponent.prototype, "playlistDraggedMixesList", void 0);
    PlaylistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'playlist',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./playlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/player/components/playlist/playlist.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            host: {
                class: 'g-flex',
            },
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./playlist.component.scss */ "./src/app/player/components/playlist/playlist.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _services_player_api_service__WEBPACK_IMPORTED_MODULE_15__["PlayerApiService"],
            _services_play_sound_service__WEBPACK_IMPORTED_MODULE_14__["PlayerSoundService"]])
    ], PlaylistComponent);
    return PlaylistComponent;
}());



/***/ }),

/***/ "./src/app/player/model/playlist.model.ts":
/*!************************************************!*\
  !*** ./src/app/player/model/playlist.model.ts ***!
  \************************************************/
/*! exports provided: PlaylistDataModel, MixModel, PlaylistModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistDataModel", function() { return PlaylistDataModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MixModel", function() { return MixModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistModel", function() { return PlaylistModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sound_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sound.model */ "./src/app/player/model/sound.model.ts");



var PlaylistDataModel = /** @class */ (function () {
    function PlaylistDataModel(data) {
        if (data === void 0) { data = {}; }
        Object.assign(this, data, {
            list: data.list.map(function (it) { return new PlaylistModel(it); }),
        });
    }
    return PlaylistDataModel;
}());

var MixModel = /** @class */ (function () {
    function MixModel(data) {
        if (data === void 0) { data = {}; }
        Object.assign(this, data, {
            sounds: data.sounds.filter(function (it) { return it; })
                .map(function (it) {
                it.uuid = uuid__WEBPACK_IMPORTED_MODULE_1__["v4"]();
                return new _sound_model__WEBPACK_IMPORTED_MODULE_2__["SoundModel"](it);
            }),
        });
    }
    return MixModel;
}());

var PlaylistModel = /** @class */ (function () {
    function PlaylistModel(data) {
        if (data === void 0) { data = {}; }
        Object.assign(this, data, {
            sounds: data.sounds ? data.sounds.map(function (it) { return new _sound_model__WEBPACK_IMPORTED_MODULE_2__["SoundModel"](it); }) : [],
            mixes: data.mixes ? data.mixes.map(function (it) { return new MixModel(it); }) : [],
        });
    }
    return PlaylistModel;
}());



/***/ }),

/***/ "./src/app/player/model/sound.model.ts":
/*!*********************************************!*\
  !*** ./src/app/player/model/sound.model.ts ***!
  \*********************************************/
/*! exports provided: SoundModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundModel", function() { return SoundModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var SoundModel = /** @class */ (function () {
    function SoundModel(data) {
        if (data === void 0) { data = {}; }
        Object.assign(this, data, {
            hz1: Number(data.hz1),
            hz2: Number(data.hz2),
            hz3: Number(data.hz3),
            hz4: Number(data.hz4),
            hz5: Number(data.hz5),
        });
    }
    return SoundModel;
}());



/***/ }),

/***/ "./src/app/player/pipes/category.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/player/pipes/category.pipe.ts ***!
  \***********************************************/
/*! exports provided: CategoryPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPipe", function() { return CategoryPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CategoryPipe = /** @class */ (function () {
    function CategoryPipe() {
    }
    CategoryPipe.prototype.transform = function (items, categoryId) {
        if (!items || !categoryId) {
            return items;
        }
        return items.filter(function (item) { return String(item.id) === categoryId; });
    };
    CategoryPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'category',
            pure: true,
        })
    ], CategoryPipe);
    return CategoryPipe;
}());



/***/ }),

/***/ "./src/app/player/pipes/order-by.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/player/pipes/order-by.pipe.ts ***!
  \***********************************************/
/*! exports provided: OrderBy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderBy", function() { return OrderBy; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderBy = /** @class */ (function () {
    function OrderBy() {
    }
    OrderBy_1 = OrderBy;
    OrderBy.prototype.transform = function (input, _a) {
        var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 1), _c = _b[0], config = _c === void 0 ? '+' : _c;
        if (!Array.isArray(input)) {
            return input;
        }
        if (!Array.isArray(config) || (Array.isArray(config) && config.length === 1)) {
            var propertyToCheck = !Array.isArray(config) ? config : config[0];
            var desc_1 = propertyToCheck.substr(0, 1) === '-';
            // Basic array
            if (!propertyToCheck || propertyToCheck === '-' || propertyToCheck === '+') {
                return !desc_1 ? input.sort() : input.sort().reverse();
            }
            var property_1 = propertyToCheck.substr(0, 1) === '+' || propertyToCheck.substr(0, 1) === '-'
                ? propertyToCheck.substr(1)
                : propertyToCheck;
            return input.sort(function (a, b) {
                return !desc_1
                    ? OrderBy_1._orderByComparator(a[property_1], b[property_1])
                    : -OrderBy_1._orderByComparator(a[property_1], b[property_1]);
            });
        }
        // Loop over property of the array in order and sort
        return input.sort(function (a, b) {
            var e_1, _a;
            try {
                for (var config_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](config), config_1_1 = config_1.next(); !config_1_1.done; config_1_1 = config_1.next()) {
                    var c = config_1_1.value;
                    var desc = c.substr(0, 1) === '-';
                    var property = c.substr(0, 1) === '+' || c.substr(0, 1) === '-'
                        ? c.substr(1)
                        : c;
                    var comparison = !desc
                        ? OrderBy_1._orderByComparator(a[property], b[property])
                        : -OrderBy_1._orderByComparator(a[property], b[property]);
                    if (comparison !== 0) {
                        return comparison;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (config_1_1 && !config_1_1.done && (_a = config_1.return)) _a.call(config_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return 0;
        });
    };
    OrderBy._orderByComparator = function (a, b) {
        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
        }
        else {
            // Parse strings as numbers to compare properly
            if (parseFloat(a) < parseFloat(b)) {
                return -1;
            }
            if (parseFloat(a) > parseFloat(b)) {
                return 1;
            }
        }
        return 0; // equal each other
    };
    var OrderBy_1;
    OrderBy = OrderBy_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'order', pure: false })
    ], OrderBy);
    return OrderBy;
}());



/***/ }),

/***/ "./src/app/player/pipes/time-format.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/player/pipes/time-format.pipe.ts ***!
  \**************************************************/
/*! exports provided: FormatTimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatTimePipe", function() { return FormatTimePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormatTimePipe = /** @class */ (function () {
    function FormatTimePipe() {
    }
    FormatTimePipe.prototype.transform = function (value) {
        var minutes = Math.floor(value / 60);
        return ('00' + minutes).slice(-2) + ':' + ('00' + Math.floor(value - minutes * 60)).slice(-2);
    };
    FormatTimePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'formatTime',
        })
    ], FormatTimePipe);
    return FormatTimePipe;
}());



/***/ }),

/***/ "./src/app/player/player.module.ts":
/*!*****************************************!*\
  !*** ./src/app/player/player.module.ts ***!
  \*****************************************/
/*! exports provided: PlayerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerPageModule", function() { return PlayerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_components_language_modal_language_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/components/language-modal/language-modal.component */ "./src/app/shared/components/language-modal/language-modal.component.ts");
/* harmony import */ var _components_playlist_playlist_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/playlist/playlist.component */ "./src/app/player/components/playlist/playlist.component.ts");
/* harmony import */ var _pipes_category_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/category.pipe */ "./src/app/player/pipes/category.pipe.ts");
/* harmony import */ var _pipes_order_by_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/order-by.pipe */ "./src/app/player/pipes/order-by.pipe.ts");
/* harmony import */ var _pipes_time_format_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes/time-format.pipe */ "./src/app/player/pipes/time-format.pipe.ts");
/* harmony import */ var _player_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./player.page */ "./src/app/player/player.page.ts");
/* harmony import */ var _services_play_sound_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/play-sound.service */ "./src/app/player/services/play-sound.service.ts");
/* harmony import */ var _services_player_api_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/player.api.service */ "./src/app/player/services/player.api.service.ts");
















var routes = [
    {
        path: '',
        component: _player_page__WEBPACK_IMPORTED_MODULE_13__["PlayerPage"],
    },
];
var PlayerPageModule = /** @class */ (function () {
    function PlayerPageModule() {
    }
    PlayerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
            ],
            declarations: [
                _player_page__WEBPACK_IMPORTED_MODULE_13__["PlayerPage"],
                _pipes_time_format_pipe__WEBPACK_IMPORTED_MODULE_12__["FormatTimePipe"],
                _pipes_order_by_pipe__WEBPACK_IMPORTED_MODULE_11__["OrderBy"],
                _pipes_category_pipe__WEBPACK_IMPORTED_MODULE_10__["CategoryPipe"],
                _shared_components_language_modal_language_modal_component__WEBPACK_IMPORTED_MODULE_8__["LanguageModalComponent"],
                _components_playlist_playlist_component__WEBPACK_IMPORTED_MODULE_9__["PlaylistComponent"],
            ],
            entryComponents: [
                _shared_components_language_modal_language_modal_component__WEBPACK_IMPORTED_MODULE_8__["LanguageModalComponent"],
                _components_playlist_playlist_component__WEBPACK_IMPORTED_MODULE_9__["PlaylistComponent"],
            ],
            providers: [
                _services_player_api_service__WEBPACK_IMPORTED_MODULE_15__["PlayerApiService"],
                _services_play_sound_service__WEBPACK_IMPORTED_MODULE_14__["PlayerSoundService"],
            ],
        })
    ], PlayerPageModule);
    return PlayerPageModule;
}());



/***/ }),

/***/ "./src/app/player/player.page.scss":
/*!*****************************************!*\
  !*** ./src/app/player/player.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".player-form {\n  height: 100%;\n  overflow: hidden;\n}\n\n.wrap_of_bottom_player {\n  margin-bottom: 70px;\n}\n\n.hovered_btns,\n.edit_me_,\n.create_btn,\n.delete_elems {\n  background: none;\n}\n\n.hovered_btns:focus,\n.edit_me_:focus,\n.create_btn:focus,\n.delete_elems:focus {\n  outline: none;\n}\n\n.hovered_btns:disabled,\n.edit_me_:disabled,\n.create_btn:disabled,\n.delete_elems:disabled {\n  opacity: 0.4;\n}\n\n.hovered_btns:active,\n.edit_me_:active,\n.create_btn:active,\n.delete_elems:active {\n  background-color: #0E1FC0;\n  color: #fff;\n  transition: 0.2s ease all;\n}\n\n.delete_elems {\n  font-size: 20px;\n}\n\n.edit_me_,\n.create_btn {\n  flex: auto;\n  padding: 3px;\n  border-radius: 5px;\n  border: 1px solid #D1D1D3;\n}\n\n.edit_me_ {\n  margin-top: 5px;\n}\n\n.by-user {\n  background-color: #EBEBF5;\n}\n\n.rf_program {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.rf_program img {\n  display: flex !important;\n  height: 16px;\n  width: 16px;\n  margin-left: 10px;\n  padding: 0;\n}\n\n.player-container {\n  height: 72%;\n}\n\n.player-container .category_player {\n  height: 100%;\n}\n\n.top-list {\n  overflow: hidden;\n  overflow-y: scroll;\n}\n\n.timer {\n  font-family: Roboto;\n}\n\n.checkbox-wrapper {\n  background: transparent;\n  width: 50px;\n  height: 30px;\n  position: absolute;\n  z-index: 10;\n}\n\n.elem_of_cont_edit.course {\n  margin-bottom: 10px;\n}\n\n.dragged-element {\n  margin-bottom: 10px;\n}\n\n.dragged-element .moved-img {\n  display: none;\n}\n\n.dragged-element.moved .moved-img {\n  display: block;\n}\n\n.dragged-element:last-child {\n  margin-bottom: 0;\n}\n\n.generation_elem {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.programm-row {\n  white-space: nowrap;\n}\n\n.sound-label {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.cont_of_edit_ {\n  margin-top: 0;\n}\n\n.categories,\n.user-categories,\n.courses {\n  overflow: visible;\n}\n\n.user-categories {\n  margin-top: 10px;\n}\n\n.btn-player {\n  background: none;\n}\n\n.btn-player:focus {\n  outline: none;\n}\n\n.btn-player:disabled {\n  opacity: 0.4;\n}\n\n.btn-player img {\n  width: 18px;\n}\n\n.selected-sounds {\n  font-size: 20px;\n  padding-left: 60px;\n  height: 50px;\n  width: 100%;\n  color: #0B0B20;\n  font-weight: 600;\n  background-size: 15px;\n  background: url('soundicon.png') no-repeat 20px center;\n  padding-right: 20px;\n  border: 1px solid #A0A0A9;\n  border-radius: 10px;\n  white-space: nowrap;\n}\n\n.selected-sounds__label {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.custom-duration {\n  background: url('timeic.png');\n  background-repeat: no-repeat;\n  background-size: 18px;\n  background-position: 20px center;\n  width: 150px;\n  height: 90px;\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border: 1px solid #A0A0A9;\n  font-size: 30px;\n  font-weight: 600;\n  outline: none;\n  color: #0B0B20;\n  padding-left: 70px;\n  padding-right: 10px;\n}\n\n.custom-duration.invalid {\n  border: 2px solid #ff0000;\n  color: #ff0000;\n}\n\n.custom-duration:disabled {\n  opacity: 0.4;\n}\n\n.playlist {\n  width: 75%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWVyL0Q6XFxCYWNrdXBcXERldmVsb3BtZW50XFxXb3JrX0pvYnNcXEZyZWVsYW5jaW5nXFxPdXRcXEFuZ3VsYXJfc291bmRcXEFyY2hpdmUvc3JjXFxhcHBcXHBsYXllclxccGxheWVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGxheWVyL3BsYXllci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7Ozs7RUFJRSxnQkFBQTtBQ0NGOztBRENFOzs7O0VBQ0UsYUFBQTtBQ0lKOztBRERFOzs7O0VBQ0UsWUFBQTtBQ01KOztBREhFOzs7O0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNRSjs7QURKQTtFQUNFLGVBQUE7QUNPRjs7QURKQTs7RUFFRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNPRjs7QURKQTtFQUNFLGVBQUE7QUNPRjs7QURKQTtFQUNFLHlCQUFBO0FDT0Y7O0FESkE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUNPRjs7QURMRTtFQUNFLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUNPSjs7QURIQTtFQUNFLFdBQUE7QUNNRjs7QURKRTtFQUNFLFlBQUE7QUNNSjs7QURGQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNLRjs7QURGQTtFQUNFLG1CQUFBO0FDS0Y7O0FERkE7RUFDRSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDS0Y7O0FES0U7RUFDRSxtQkFBQTtBQ0ZKOztBRE1BO0VBQ0UsbUJBQUE7QUNIRjs7QURLRTtFQUNFLGFBQUE7QUNISjs7QURPSTtFQUNFLGNBQUE7QUNMTjs7QURTRTtFQUNFLGdCQUFBO0FDUEo7O0FEV0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ1JGOztBRFdBO0VBQ0UsbUJBQUE7QUNSRjs7QURXQTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7QUNSRjs7QURXQTtFQUNFLGFBQUE7QUNSRjs7QURXQTs7O0VBR0UsaUJBQUE7QUNSRjs7QURXQTtFQUNFLGdCQUFBO0FDUkY7O0FEV0E7RUFDRSxnQkFBQTtBQ1JGOztBRFVFO0VBQ0UsYUFBQTtBQ1JKOztBRFdFO0VBQ0UsWUFBQTtBQ1RKOztBRFlFO0VBQ0UsV0FBQTtBQ1ZKOztBRGNBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNEQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNYRjs7QURhRTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7QUNYSjs7QURlQTtFQUNFLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNaRjs7QURjRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQ1pKOztBRGVFO0VBQ0UsWUFBQTtBQ2JKOztBRGlCQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FDZEYiLCJmaWxlIjoic3JjL2FwcC9wbGF5ZXIvcGxheWVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wbGF5ZXItZm9ybSB7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLndyYXBfb2ZfYm90dG9tX3BsYXllciB7XG4gIG1hcmdpbi1ib3R0b206IDcwcHg7XG59XG5cbi5ob3ZlcmVkX2J0bnMsXG4uZWRpdF9tZV8sXG4uY3JlYXRlX2J0bixcbi5kZWxldGVfZWxlbXMge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBFMUZDMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xuICB9XG59XG5cbi5kZWxldGVfZWxlbXMge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5lZGl0X21lXyxcbi5jcmVhdGVfYnRuIHtcbiAgZmxleDogYXV0bztcbiAgcGFkZGluZzogM3B4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNEMUQxRDM7XG59XG5cbi5lZGl0X21lXyB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmJ5LXVzZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJFQkY1O1xufVxuXG4ucmZfcHJvZ3JhbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgaW1nIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cblxuLnBsYXllci1jb250YWluZXIge1xuICBoZWlnaHQ6IDcyJTtcblxuICAuY2F0ZWdvcnlfcGxheWVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cblxuLnRvcC1saXN0IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4udGltZXIge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xufVxuXG4uY2hlY2tib3gtd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4vLy5jb3VudF9lbGVtcyB7XG4vLyAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4vLyAgICBtYXJnaW4tdG9wOiAxMHB4O1xuLy8gIH1cbi8vfVxuXG4uZWxlbV9vZl9jb250X2VkaXQge1xuICAmLmNvdXJzZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxufVxuXG4uZHJhZ2dlZC1lbGVtZW50IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAubW92ZWQtaW1nIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgJi5tb3ZlZCB7XG4gICAgLm1vdmVkLWltZyB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cblxuICAmOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbn1cblxuLmdlbmVyYXRpb25fZWxlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnByb2dyYW1tLXJvdyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5zb3VuZC1sYWJlbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uY29udF9vZl9lZGl0XyB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5jYXRlZ29yaWVzLFxuLnVzZXItY2F0ZWdvcmllcyxcbi5jb3Vyc2VzIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi51c2VyLWNhdGVnb3JpZXMge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uYnRuLXBsYXllciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG5cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuXG4gICY6ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgfVxuXG4gIGltZyB7XG4gICAgd2lkdGg6IDE4cHg7XG4gIH1cbn1cblxuLnNlbGVjdGVkLXNvdW5kcyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiA2MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogIzBCMEIyMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYmFja2dyb3VuZC1zaXplOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL3NvdW5kaWNvbi5wbmdcIikgbm8tcmVwZWF0IDIwcHggY2VudGVyO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjQTBBMEE5O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICZfX2xhYmVsIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG59XG5cbi5jdXN0b20tZHVyYXRpb24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL3RpbWVpYy5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMThweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjBweCBjZW50ZXI7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjQTBBMEE5O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjMEIwQjIwO1xuICBwYWRkaW5nLWxlZnQ6IDcwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG5cbiAgJi5pbnZhbGlkIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmYwMDAwO1xuICAgIGNvbG9yOiAjZmYwMDAwO1xuICB9XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC40O1xuICB9XG59XG5cbi5wbGF5bGlzdCB7XG4gIHdpZHRoOiA3NSU7XG4gIGhlaWdodDogMTAwJTtcbn1cbiIsIi5wbGF5ZXItZm9ybSB7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLndyYXBfb2ZfYm90dG9tX3BsYXllciB7XG4gIG1hcmdpbi1ib3R0b206IDcwcHg7XG59XG5cbi5ob3ZlcmVkX2J0bnMsXG4uZWRpdF9tZV8sXG4uY3JlYXRlX2J0bixcbi5kZWxldGVfZWxlbXMge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLmhvdmVyZWRfYnRuczpmb2N1cyxcbi5lZGl0X21lXzpmb2N1cyxcbi5jcmVhdGVfYnRuOmZvY3VzLFxuLmRlbGV0ZV9lbGVtczpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uaG92ZXJlZF9idG5zOmRpc2FibGVkLFxuLmVkaXRfbWVfOmRpc2FibGVkLFxuLmNyZWF0ZV9idG46ZGlzYWJsZWQsXG4uZGVsZXRlX2VsZW1zOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC40O1xufVxuLmhvdmVyZWRfYnRuczphY3RpdmUsXG4uZWRpdF9tZV86YWN0aXZlLFxuLmNyZWF0ZV9idG46YWN0aXZlLFxuLmRlbGV0ZV9lbGVtczphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEUxRkMwO1xuICBjb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcbn1cblxuLmRlbGV0ZV9lbGVtcyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmVkaXRfbWVfLFxuLmNyZWF0ZV9idG4ge1xuICBmbGV4OiBhdXRvO1xuICBwYWRkaW5nOiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0QxRDFEMztcbn1cblxuLmVkaXRfbWVfIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uYnktdXNlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFQkVCRjU7XG59XG5cbi5yZl9wcm9ncmFtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5yZl9wcm9ncmFtIGltZyB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5wbGF5ZXItY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA3MiU7XG59XG4ucGxheWVyLWNvbnRhaW5lciAuY2F0ZWdvcnlfcGxheWVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udG9wLWxpc3Qge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi50aW1lciB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG59XG5cbi5jaGVja2JveC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTA7XG59XG5cbi5lbGVtX29mX2NvbnRfZWRpdC5jb3Vyc2Uge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uZHJhZ2dlZC1lbGVtZW50IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5kcmFnZ2VkLWVsZW1lbnQgLm1vdmVkLWltZyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZHJhZ2dlZC1lbGVtZW50Lm1vdmVkIC5tb3ZlZC1pbWcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5kcmFnZ2VkLWVsZW1lbnQ6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5nZW5lcmF0aW9uX2VsZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5wcm9ncmFtbS1yb3cge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uc291bmQtbGFiZWwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmNvbnRfb2ZfZWRpdF8ge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uY2F0ZWdvcmllcyxcbi51c2VyLWNhdGVnb3JpZXMsXG4uY291cnNlcyB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4udXNlci1jYXRlZ29yaWVzIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmJ0bi1wbGF5ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLmJ0bi1wbGF5ZXI6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLmJ0bi1wbGF5ZXI6ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjQ7XG59XG4uYnRuLXBsYXllciBpbWcge1xuICB3aWR0aDogMThweDtcbn1cblxuLnNlbGVjdGVkLXNvdW5kcyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiA2MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogIzBCMEIyMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYmFja2dyb3VuZC1zaXplOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL3NvdW5kaWNvbi5wbmdcIikgbm8tcmVwZWF0IDIwcHggY2VudGVyO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjQTBBMEE5O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLnNlbGVjdGVkLXNvdW5kc19fbGFiZWwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmN1c3RvbS1kdXJhdGlvbiB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvdGltZWljLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxOHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMHB4IGNlbnRlcjtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNBMEEwQTk7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICMwQjBCMjA7XG4gIHBhZGRpbmctbGVmdDogNzBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbi5jdXN0b20tZHVyYXRpb24uaW52YWxpZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZjAwMDA7XG4gIGNvbG9yOiAjZmYwMDAwO1xufVxuLmN1c3RvbS1kdXJhdGlvbjpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNDtcbn1cblxuLnBsYXlsaXN0IHtcbiAgd2lkdGg6IDc1JTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/player/player.page.ts":
/*!***************************************!*\
  !*** ./src/app/player/player.page.ts ***!
  \***************************************/
/*! exports provided: PlayerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerPage", function() { return PlayerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shared_components_language_modal_language_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/components/language-modal/language-modal.component */ "./src/app/shared/components/language-modal/language-modal.component.ts");
/* harmony import */ var _shared_constants_coupons_constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/constants/coupons.constant */ "./src/app/shared/constants/coupons.constant.ts");
/* harmony import */ var _shared_constants_routes_constant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/constants/routes.constant */ "./src/app/shared/constants/routes.constant.ts");
/* harmony import */ var _shared_models_user_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/models/user.model */ "./src/app/shared/models/user.model.ts");
/* harmony import */ var _shared_services_db_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/services/db.service */ "./src/app/shared/services/db.service.ts");
/* harmony import */ var _components_playlist_playlist_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/playlist/playlist.component */ "./src/app/player/components/playlist/playlist.component.ts");
/* harmony import */ var _model_sound_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./model/sound.model */ "./src/app/player/model/sound.model.ts");
/* harmony import */ var _services_play_sound_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/play-sound.service */ "./src/app/player/services/play-sound.service.ts");
/* harmony import */ var _services_player_api_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/player.api.service */ "./src/app/player/services/player.api.service.ts");



















var CONTROLS_NAME;
(function (CONTROLS_NAME) {
    CONTROLS_NAME["CATEGORY"] = "category";
    CONTROLS_NAME["COURSE"] = "course";
    CONTROLS_NAME["CUSTOM_TIME"] = "custom_time";
    CONTROLS_NAME["RANGE"] = "range";
})(CONTROLS_NAME || (CONTROLS_NAME = {}));
var DURATION_TICK = 1000;
var PlayerPage = /** @class */ (function () {
    function PlayerPage(_changeDetectorRef, _renderer, _dbService, _modalController, alertController, menu, translateService, loadingController, storage, _playerApiService, playerSoundService, _playerSoundService) {
        var _a;
        var _this = this;
        this._changeDetectorRef = _changeDetectorRef;
        this._renderer = _renderer;
        this._dbService = _dbService;
        this._modalController = _modalController;
        this.alertController = alertController;
        this.menu = menu;
        this.translateService = translateService;
        this.loadingController = loadingController;
        this.storage = storage;
        this._playerApiService = _playerApiService;
        this.playerSoundService = playerSoundService;
        this._playerSoundService = _playerSoundService;
        this.selectedSounds = [];
        this.copiedSounds = [];
        this.copiedMixes = [];
        this.officialCategoriesId = [];
        this.userOwnCategoryCourses = [];
        this.officialCategoryCourses = [];
        this.selectedCourse = '';
        this.isOfficialCourseSelected = false;
        this.isOfficialCategorySelected = false;
        this.userOwnCategoriesId = [];
        this.isPlaylistOpened = false;
        this.totalDuration = 0;
        this.isRangeChange = false;
        this.playerFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]((_a = {},
            _a[CONTROLS_NAME.CATEGORY] = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            _a[CONTROLS_NAME.COURSE] = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            _a[CONTROLS_NAME.CUSTOM_TIME] = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]*$')),
            _a[CONTROLS_NAME.RANGE] = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0),
            _a));
        this.APP_ROUTE_URLS = _shared_constants_routes_constant__WEBPACK_IMPORTED_MODULE_12__["APP_ROUTE_URLS"];
        this.CONTROLS_NAME = CONTROLS_NAME;
        this.availableSoundsArray = [];
        this.translations = {};
        this.counter = 0;
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.translateService.get(['error', 'noCourse', 'max5', 'notMoveToOfficial'])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._destroy$))
            .subscribe(function (values) {
            _this.translations = values;
        });
        this.load('Загрузка');
    }
    Object.defineProperty(PlayerPage.prototype, "currentSound", {
        get: function () {
            if (!this.selectedSounds.length) {
                this.playerFormGroup.get(CONTROLS_NAME.RANGE).disable({ emitEvent: false });
                return '';
            }
            this.playerFormGroup.get(CONTROLS_NAME.RANGE).enable({ emitEvent: false });
            return this.selectedSounds.map(function (sound) { return sound.name; }).join(', ');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerPage.prototype, "isSwitchButtonsDisabled", {
        get: function () {
            return !this.selectedSounds.length ||
                this.selectedSounds.length > 1 ||
                (this.soundList && this.soundList.length <= 1) ||
                !this.playerSoundService.isSomePlaying;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerPage.prototype, "isDisableCourseCreate", {
        get: function () {
            return this.isOfficialCategorySelected ||
                this.isOfficialCourseSelected ||
                !this.selectedCategoryId ||
                !this.playerFormGroup.get(CONTROLS_NAME.COURSE).value ||
                !this.playerFormGroup.get(CONTROLS_NAME.COURSE).value.trim();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerPage.prototype, "selectedSoundsMaxDuration", {
        get: function () {
            return Math.max.apply(Math, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.selectedSounds.map(function (it) { return it.duration; }), [0]));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerPage.prototype, "customDuration", {
        get: function () {
            return this.playerFormGroup.get(CONTROLS_NAME.CUSTOM_TIME).valid
                ? this.playerFormGroup.get(CONTROLS_NAME.CUSTOM_TIME).value
                : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerPage.prototype, "playlistContentChild", {
        set: function (playlistComponent) {
            if (this.draggedFilteredSounds) {
                this.draggedFilteredSounds.connectedTo = playlistComponent
                    ? playlistComponent.playlistDraggedSoundList
                    : this.draggedFilteredSounds.connectedTo = this.draggedSoundList;
            }
        },
        enumerable: true,
        configurable: true
    });
    PlayerPage.prototype.dropCategory = function (event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(this.userOwnCategoriesId, event.previousIndex, event.currentIndex);
    };
    PlayerPage.prototype.dropCourse = function (event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(this.userOwnCategoryCourses, event.previousIndex, event.currentIndex);
    };
    PlayerPage.prototype.dropSound = function (event) {
        if (!this.selectedCategoryId && !this.isOfficialCourseSelected) {
            return;
        }
        this.resetSounds();
        if (this.isOfficialCourseSelected) {
            if (event.container !== event.previousContainer) {
                this.alert(this.translations.error, this.translations.notMoveToOfficial);
            }
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(this.soundList, event.previousIndex, event.currentIndex);
            return;
        }
        if (event.container !== event.previousContainer) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["copyArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            this.soundList = this.playerSoundService.updateSelectedSoundsUuid(this.soundList, this.selectedSounds);
            var selectedCourse = this.getCourseById(this.selectedCourse);
            this.updateSounds();
            return;
        }
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(this.soundList, event.previousIndex, event.currentIndex);
        this.updateSounds();
        this._changeDetectorRef.detectChanges();
    };
    PlayerPage.prototype.ngOnInit = function () {
        var _this = this;
        this.playerFormGroup.get(CONTROLS_NAME.COURSE).disable({ emitEvent: false });
        this.playerFormGroup.get(CONTROLS_NAME.CUSTOM_TIME).setValue(null, { emitEvent: false });
        this.playerFormGroup.get(CONTROLS_NAME.CUSTOM_TIME)
            .valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._destroy$))
            .subscribe(function (duration) {
            if (!_this.selectedSounds.length ||
                duration <= 0 ||
                _this.playerFormGroup.get(CONTROLS_NAME.CUSTOM_TIME).invalid) {
                return;
            }
            _this.selectedSounds.forEach(function (sound) {
                sound.duration = duration;
            });
            _this.counter = 0;
        });
        this.getColor();
    };
    PlayerPage.prototype.ngOnDestroy = function () {
        this._destroy$.next();
        this._destroy$.complete();
    };
    PlayerPage.prototype.ionViewDidEnter = function () {
        this.loadData();
    };
    PlayerPage.prototype.changeLanguage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._modalController.create({
                            component: _shared_components_language_modal_language_modal_component__WEBPACK_IMPORTED_MODULE_10__["LanguageModalComponent"],
                            cssClass: 'change-language',
                        })];
                    case 1:
                        modal = _a.sent();
                        return [2 /*return*/, modal.present()];
                }
            });
        });
    };
    PlayerPage.prototype.onEditCategory = function () {
        var _this = this;
        this.load('Загрузка');
        var selectedCategory = this.getCategoryById(this.selectedCategoryId);
        selectedCategory.name = this.playerFormGroup.get(CONTROLS_NAME.CATEGORY).value;
        this._playerApiService.renameCategory({
            id: selectedCategory.id,
            name: selectedCategory.name,
        })
            .subscribe(function () {
            _this.loadingController.dismiss();
        });
    };
    PlayerPage.prototype.onAddCategory = function () {
        var _this = this;
        this.load('Загрузка');
        this._playerApiService.addCategory({
            name: this.playerFormGroup.get(CONTROLS_NAME.CATEGORY).value,
            status: _shared_constants_coupons_constant__WEBPACK_IMPORTED_MODULE_11__["COUPON_STATUSES"].ACTIVE,
            created_user_id: this.user.id,
            user_id: this.user.uid,
            official: 0,
        })
            .subscribe(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCategories()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.reload()];
                    case 2:
                        _a.sent();
                        this.playerFormGroup.get(CONTROLS_NAME.CATEGORY).setValue(null, { emitEvent: false });
                        this.loadingController.dismiss();
                        this._changeDetectorRef.detectChanges();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    PlayerPage.prototype.onDeleteCategory = function () {
        var _this = this;
        this.load('Загрузка');
        this._playerApiService.deleteCategory({
            id: this.selectedCategoryId,
        })
            .subscribe(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.userOwnCategoryCourses = [];
                        this.officialCategoryCourses = [];
                        this.soundList = [];
                        return [4 /*yield*/, this.getCategories()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.reload()];
                    case 2:
                        _a.sent();
                        this.loadingController.dismiss();
                        this._changeDetectorRef.detectChanges();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    PlayerPage.prototype.onEditCourse = function () {
        var _this = this;
        this.load('Загрузка');
        var selectedCourse = this.getCourseById(this.selectedCourse);
        selectedCourse.name = this.playerFormGroup.get(CONTROLS_NAME.COURSE).value;
        this._playerApiService.renameCourse({
            id: selectedCourse.id,
            name: selectedCourse.name,
        })
            .subscribe(function () {
            _this.loadingController.dismiss();
        });
    };
    PlayerPage.prototype.onAddCourse = function () {
        var _this = this;
        this.load('Загрузка');
        this._playerApiService.addCourse({
            name: this.playerFormGroup.get(CONTROLS_NAME.COURSE).value,
            status: _shared_constants_coupons_constant__WEBPACK_IMPORTED_MODULE_11__["COUPON_STATUSES"].ACTIVE,
            official: 0,
            user_id: this.user.uid,
            created_user_id: this.user.uid,
            cat_id: this.selectedCategoryId,
        })
            .subscribe(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCategories()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getCourses()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.reload()];
                    case 3:
                        _a.sent();
                        this.filterCourses(this.selectedCategoryId, false);
                        this.playerFormGroup.get(CONTROLS_NAME.COURSE).setValue(null, { emitEvent: false });
                        this.loadingController.dismiss();
                        this._changeDetectorRef.detectChanges();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    PlayerPage.prototype.onDeleteCourse = function () {
        var _this = this;
        this.load('Загрузка');
        this._playerApiService.deleteCourse({
            id: this.selectedCourse,
        })
            .subscribe(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.soundList = [];
                        return [4 /*yield*/, this.getCategories()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getCourses()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.reload()];
                    case 3:
                        _a.sent();
                        this.filterCourses(this.selectedCategoryId, false);
                        this.loadingController.dismiss();
                        this._changeDetectorRef.detectChanges();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    PlayerPage.prototype.switchPlaylist = function () {
        this.resetSounds();
        this.isPlaylistOpened = !this.isPlaylistOpened;
        this.selectedSounds = [];
        this.soundList = [];
    };
    PlayerPage.prototype.copySounds = function () {
        this.copiedSounds = this.selectedSounds.length
            ? tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.selectedSounds) : tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.soundList);
    };
    PlayerPage.prototype.onCopyPlaylistSound = function (_a) {
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
        var copiedSounds = _a.copiedSounds, copiedMixes = _a.copiedMixes;
        this.copiedSounds = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](copiedSounds);
        this.copiedMixes = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](copiedMixes);
        this._changeDetectorRef.detectChanges();
    };
    PlayerPage.prototype.pasteSounds = function () {
        this.soundList = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.soundList, this.copiedSounds);
        if (this.copiedMixes) {
            this.soundList = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.soundList, this._playerSoundService.getSoundsFromSelectedMixes(this.copiedMixes));
        }
        this.soundList = this.soundList.map(function (it) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, it, { uuid: uuid__WEBPACK_IMPORTED_MODULE_9__["v4"]() })); });
        this.copiedSounds = [];
        this.selectedSounds = [];
        this.copiedMixes = [];
        this.updateSounds();
    };
    PlayerPage.prototype.pauseSelectedSounds = function () {
        var _this = this;
        this.selectedSounds.forEach(function (sound) {
            _this.playerSoundService.stopSound(sound);
        });
        this.countDown = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(this.counter);
        this.playerFormGroup.get(CONTROLS_NAME.CUSTOM_TIME).enable({ emitEvent: false });
    };
    PlayerPage.prototype.playSelectedSounds = function () {
        var _this = this;
        if (this.selectedSounds.length >= 5) {
            this.alert('', this.translations.max5);
            return;
        }
        this.setSoundDuration(this.selectedSounds[0]);
        this.startCountDown();
        this.selectedSounds.forEach(function (sound) {
            _this.playerSoundService.playSound(sound);
        });
        this.playerFormGroup.get(CONTROLS_NAME.CUSTOM_TIME).disable({ emitEvent: false });
    };
    PlayerPage.prototype.changeSelectedSounds = function (sound, event) {
        event.stopPropagation();
        var foundSound = this.selectedSounds.find(function (it) { return it.uuid === sound.uuid; });
        if (!foundSound) {
            this.selectedSounds.push(sound);
            if (this.playerSoundService.isSomePlaying) {
                this.playerSoundService.playSound(sound);
            }
            else {
                this.setCustomTime(this.selectedSoundsMaxDuration);
                this.setSoundDuration(this.selectedSounds[0]);
            }
            return;
        }
        this.selectedSounds = this.selectedSounds.filter(function (it) { return it.uuid !== sound.uuid; });
        if (this.playerSoundService.isSoundPlaying(sound.uuid)) {
            this.playerSoundService.stopSound(sound);
            this.playerFormGroup.get(CONTROLS_NAME.CUSTOM_TIME).enable({ emitEvent: false });
        }
        else {
            this.setCustomTime(this.selectedSoundsMaxDuration);
            this.setSoundDuration(this.selectedSounds[0]);
        }
        if (!this.selectedSounds.length) {
            this.resetSounds();
        }
    };
    PlayerPage.prototype.removeSound = function (sound) {
        this.soundList = this.soundList.filter(function (it) { return it.uuid !== sound.uuid; });
        this.updateSounds();
    };
    PlayerPage.prototype.setCourse = function (course) {
        var e_1, _a;
        var id = course.id;
        this.resetSounds();
        if (this.selectedCourse === id) {
            this.selectedCourse = undefined;
            this.soundList = undefined;
            this.isOfficialCourseSelected = false;
            return;
        }
        this.isOfficialCourseSelected = course.official === 'on';
        if (!this.isOfficialCourseSelected) {
            this.playerFormGroup.get(CONTROLS_NAME.COURSE).setValue(course.name, { emitEvent: false });
        }
        else {
            this.playerFormGroup.get(CONTROLS_NAME.COURSE).setValue(null, { emitEvent: false });
        }
        if (!this.isOfficialCourseSelected) {
            this.playerFormGroup.get(CONTROLS_NAME.COURSE).enable({ emitEvent: false });
        }
        else {
            this.playerFormGroup.get(CONTROLS_NAME.COURSE).disable({ emitEvent: false });
        }
        this.selectedCourse = id;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.courses), _c = _b.next(); !_c.done; _c = _b.next()) {
                var course_1 = _c.value;
                if (course_1.id === id) {
                    this.soundList = course_1.sounds.map(function (it) {
                        return new _model_sound_model__WEBPACK_IMPORTED_MODULE_16__["SoundModel"](tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, it, { uuid: uuid__WEBPACK_IMPORTED_MODULE_9__["v4"]() }));
                    });
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    PlayerPage.prototype.filterCourses = function (id, isReset) {
        var _this = this;
        if (isReset === void 0) { isReset = true; }
        this.resetSounds();
        if (isReset && Number(id) === Number(this.selectedCategoryId)) {
            this.selectedCategoryId = undefined;
            this.selectedCourse = undefined;
            this.soundList = undefined;
            this.userOwnCategoryCourses = [];
            this.officialCategoryCourses = [];
            return;
        }
        var selectedCategory = this.getCategoryById(id);
        this.isOfficialCategorySelected = selectedCategory.official === 'on';
        if (!this.isOfficialCategorySelected) {
            this.playerFormGroup.get(CONTROLS_NAME.CATEGORY).setValue(selectedCategory.name, { emitEvent: false });
            this.playerFormGroup.get(CONTROLS_NAME.COURSE).enable({ emitEvent: false });
        }
        else {
            this.playerFormGroup.get(CONTROLS_NAME.CATEGORY).setValue(null, { emitEvent: false });
            this.playerFormGroup.get(CONTROLS_NAME.COURSE).disable({ emitEvent: false });
        }
        this.selectedCategoryId = Number(id);
        this.soundList = null;
        this.selectedCourse = null;
        this.userOwnCategoryCourses = this.courses.filter(function (course) {
            return course.categories
                && course.official !== 'on'
                && course.categories.length
                && (course.categories[0].id === _this.selectedCategoryId
                    || (course.categories[1] && course.categories[1].id === _this.selectedCategoryId));
        });
        this.officialCategoryCourses = this.courses.filter(function (course) {
            return course.categories
                && course.official === 'on'
                && course.categories.length
                && (course.categories[0].id === _this.selectedCategoryId
                    || (course.categories[1] && course.categories[1].id === _this.selectedCategoryId));
        });
    };
    PlayerPage.prototype.openMenu = function () {
        this.menu.open('first');
    };
    // direction:
    //    0 - previous
    //    1 - next
    PlayerPage.prototype.autoPlay = function (direction) {
        var _this = this;
        var playingSoundIndex = this.soundList.findIndex(function (sound) { return _this.playerSoundService.playingSounds.indexOf(sound.uuid) !== -1; });
        var currentPlayingSound = this.soundList[playingSoundIndex];
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
    };
    PlayerPage.prototype.reload = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var ownCategoriesId, availableCats, availableSounds;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.settings) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getSettings()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2:
                        ownCategoriesId = this.getOwnCategoriesId();
                        availableCats = this.settings[this.upack + "_cats"].value;
                        this.userOwnCategoriesId = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](ownCategoriesId);
                        this.officialCategoriesId = this.getOfficialCategoriesId();
                        if (this.sounds) {
                            availableSounds = this.settings[this.upack + "_sounds"].value.split(',');
                            this.availableSoundsArray = availableSounds
                                .map(function (id) { return _this.sounds.find(function (it) { return it.id === Number(id); }); })
                                .map(function (it) { return it.uuid; });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PlayerPage.prototype.getItems = function (event) {
        var val = event.target.value;
        if (val && val.trim() !== '') {
            this.filteredSounds = this.sounds.filter(function (item) {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            return;
        }
        this.getSounds();
    };
    PlayerPage.prototype.onPlaylistSoundChange = function (_a) {
        var _this = this;
        var selectedSounds = _a.selectedSounds, soundList = _a.soundList;
        var isSomePlaying = false;
        if (this.playerSoundService.isSomePlaying) {
            this.selectedSounds.forEach(function (sound) {
                _this.playerSoundService.stopSound(sound);
            });
            isSomePlaying = true;
        }
        this.selectedSounds = selectedSounds;
        this.soundList = soundList;
        if (isSomePlaying) {
            selectedSounds.forEach(function (sound) {
                _this.playerSoundService.playSound(sound);
            });
        }
    };
    PlayerPage.prototype.onTouchStartRange = function () {
        this.isRangeChange = true;
    };
    PlayerPage.prototype.onTouchEndRange = function () {
        this.isRangeChange = false;
    };
    PlayerPage.prototype.onChangeRange = function (_a) {
        var detail = _a.detail;
        if (this.isRangeChange) {
            var duration = this.totalDuration - Math.round((detail.value / 100) * this.totalDuration);
            this.countDown = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(duration);
            this.counter = duration;
            // this.isRangeChange = false;
            // if (this._playerSoundService.isSomePlaying) {
            //   this.startCountDown();
            // }
        }
    };
    PlayerPage.prototype.updateSounds = function () {
        var _this = this;
        this._playerApiService.addSounds({
            id: this.selectedCourse,
            sounds_id: this.soundList.map(function (sound) { return sound.id; }).join(','),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(function (_a) {
            var error = _a.error;
            console.error('error', error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(error);
        }))
            .subscribe(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCourses()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getSounds()];
                    case 2:
                        _a.sent();
                        this._changeDetectorRef.detectChanges();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    PlayerPage.prototype.setCustomTime = function (time) {
        this.playerFormGroup.get(CONTROLS_NAME.CUSTOM_TIME).setValue(time, { emitEvent: false });
    };
    PlayerPage.prototype.getColor = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.storage.get('color')
                .then(function (val) {
                _this.color = val;
                resolve();
                _this._changeDetectorRef.detectChanges();
            });
        });
    };
    PlayerPage.prototype.getUser = function () {
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
                            this.user = new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_13__["UserModel"](userData.rows.item(0));
                        }
                        this._changeDetectorRef.detectChanges();
                        return [2 /*return*/];
                }
            });
        });
    };
    PlayerPage.prototype.getPack = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.storage.get('upack')
                .then(function (val) {
                _this.upack = val;
                resolve();
                _this._changeDetectorRef.detectChanges();
            });
        });
    };
    PlayerPage.prototype.alert = function (header, message) {
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
    PlayerPage.prototype.load = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: message,
                            duration: 0,
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        return [2 /*return*/];
                }
            });
        });
    };
    PlayerPage.prototype.getSounds = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._playerApiService.getSounds()
                .subscribe(function (sounds) {
                _this.sounds = sounds;
                _this.reload();
                if (_this.availableSoundsArray.length !== 0) {
                    _this.filteredSounds = _this.sounds.filter(function (sound) { return _this.availableSoundsArray.indexOf(sound.uuid) !== -1; });
                }
                resolve();
                _this._changeDetectorRef.detectChanges();
            });
        });
    };
    PlayerPage.prototype.getSettings = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._playerApiService.getSettings()
                .subscribe(function (data) {
                _this.settings = data;
                _this.reload();
                _this.getSounds();
                resolve();
                _this._changeDetectorRef.detectChanges();
            });
        });
    };
    PlayerPage.prototype.getCourses = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._playerApiService.getCourses()
                .subscribe(function (data) {
                _this.courses = data.list;
                resolve();
                _this._changeDetectorRef.detectChanges();
            });
        });
    };
    PlayerPage.prototype.getCategories = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._playerApiService.getCategories()
                .subscribe(function (data) {
                _this.categories = data.list;
                resolve();
                _this._changeDetectorRef.detectChanges();
            });
        });
    };
    PlayerPage.prototype.resetSounds = function () {
        var _this = this;
        this.playerFormGroup.get(CONTROLS_NAME.CUSTOM_TIME).enable({ emitEvent: false });
        if (this.playerSoundService.isSomePlaying) {
            this.selectedSounds.forEach(function (sound) {
                _this.playerSoundService.stopSound(sound);
            });
        }
        this.counter = 0;
        this.selectedSounds = [];
        this.countDown = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(0);
        this.playerFormGroup.get(CONTROLS_NAME.RANGE).setValue(0, { emitEvent: false });
    };
    PlayerPage.prototype.setSoundDuration = function (_a) {
        var duration = _a.duration;
        var customDurationControl = this.playerFormGroup.get(CONTROLS_NAME.CUSTOM_TIME);
        var soundDuration = customDurationControl.valid && customDurationControl.value
            ? customDurationControl.value * 60
            : duration * 60;
        this.counter = this.counter ? this.counter : soundDuration;
        this.totalDuration = Number(soundDuration);
        this.countDown = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(this.totalDuration);
        this.playerFormGroup.get(CONTROLS_NAME.RANGE).setValue(0, { emitEvent: false });
    };
    PlayerPage.prototype.startCountDown = function () {
        var _this = this;
        this.countDown = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["timer"])(0, DURATION_TICK)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeWhile"])(function (t) { return _this.counter > 0; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function () { return --_this.counter; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function (count) {
            var rangeValue = Math.round((1 - count / _this.totalDuration) * 100);
            _this.playerFormGroup.get(CONTROLS_NAME.RANGE).setValue(rangeValue, { emitEvent: false });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
            if (_this.playerSoundService.isSomePlaying && _this.counter === 0) {
                if (_this.soundList.length > 1) {
                    _this.autoPlay(1);
                }
                else {
                    _this.pauseSelectedSounds();
                    _this.counter = 0;
                    _this.countDown = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(0);
                    _this.totalDuration = 0;
                    _this.playerFormGroup.get(CONTROLS_NAME.RANGE).setValue(0, { emitEvent: false });
                    _this._changeDetectorRef.detectChanges();
                }
            }
        }));
    };
    PlayerPage.prototype.getCategoryById = function (id) {
        return this.categories.find(function (category) { return category.id === Number(id); });
    };
    PlayerPage.prototype.getCourseById = function (id) {
        return this.courses.find(function (course) { return course.id === Number(id); });
    };
    PlayerPage.prototype.findSoundById = function (id) {
        return this.sounds.find(function (sound) { return sound.id === id; });
    };
    PlayerPage.prototype.findSoundByUuid = function (uuid) {
        return this.soundList.find(function (sound) { return sound.uuid === uuid; });
    };
    PlayerPage.prototype.getOfficialCategoriesId = function () {
        return this.categories
            .filter(function (category) { return category.user_id === 0 && category.official === 'on'; })
            .map(function (category) { return String(category.id); });
    };
    PlayerPage.prototype.getOwnCategoriesId = function () {
        var _this = this;
        return this.categories
            .filter(function (category) { return category.user_id === _this.user.uid && category.official !== 'on'; })
            .map(function (category) { return String(category.id); });
    };
    PlayerPage.prototype.loadData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getPack()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getUser()];
                    case 2:
                        _a.sent();
                        if (!this.user) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.getCategories()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.getSettings()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.getCourses()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.getSounds()];
                    case 6:
                        _a.sent();
                        if (this.loadingController) {
                            this.loadingController.dismiss();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PlayerPage.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
        { type: _shared_services_db_service__WEBPACK_IMPORTED_MODULE_14__["DbService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _services_player_api_service__WEBPACK_IMPORTED_MODULE_18__["PlayerApiService"] },
        { type: _services_play_sound_service__WEBPACK_IMPORTED_MODULE_17__["PlayerSoundService"] },
        { type: _services_play_sound_service__WEBPACK_IMPORTED_MODULE_17__["PlayerSoundService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_components_playlist_playlist_component__WEBPACK_IMPORTED_MODULE_15__["PlaylistComponent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _components_playlist_playlist_component__WEBPACK_IMPORTED_MODULE_15__["PlaylistComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_components_playlist_playlist_component__WEBPACK_IMPORTED_MODULE_15__["PlaylistComponent"]])
    ], PlayerPage.prototype, "playlistContentChild", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('draggedSoundListElm', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"])
    ], PlayerPage.prototype, "draggedSoundList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('draggedFilteredSoundsElm', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"])
    ], PlayerPage.prototype, "draggedFilteredSounds", void 0);
    PlayerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-player',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./player.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.page.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./player.page.scss */ "./src/app/player/player.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"],
            _shared_services_db_service__WEBPACK_IMPORTED_MODULE_14__["DbService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _services_player_api_service__WEBPACK_IMPORTED_MODULE_18__["PlayerApiService"],
            _services_play_sound_service__WEBPACK_IMPORTED_MODULE_17__["PlayerSoundService"],
            _services_play_sound_service__WEBPACK_IMPORTED_MODULE_17__["PlayerSoundService"]])
    ], PlayerPage);
    return PlayerPage;
}());



/***/ }),

/***/ "./src/app/player/services/play-sound.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/player/services/play-sound.service.ts ***!
  \*******************************************************/
/*! exports provided: PlayerSoundService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerSoundService", function() { return PlayerSoundService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);



var TOTAL_HZS = 5;
var DECIBEL_LEVEL = -20;
var PlayerSoundService = /** @class */ (function () {
    function PlayerSoundService() {
        // fixed Decibel value
        this._osc = {};
        this._playing = {};
        this._freq = {};
        this._audioContext = new AudioContext();
    }
    Object.defineProperty(PlayerSoundService.prototype, "isSomePlaying", {
        get: function () {
            return Object.values(this._playing).some(function (it) { return it; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerSoundService.prototype, "playingSounds", {
        get: function () {
            var _this = this;
            return Object.keys(this._playing).filter(function (key) { return _this._playing[key]; });
        },
        enumerable: true,
        configurable: true
    });
    PlayerSoundService.prototype.isSoundPlaying = function (uuid) {
        return this._playing[uuid];
    };
    PlayerSoundService.prototype.playSound = function (sound) {
        this.updateFreq(sound);
        this.toggle(sound);
    };
    PlayerSoundService.prototype.stopSound = function (sound) {
        this.toggle(sound);
    };
    PlayerSoundService.prototype.updateSelectedSoundsUuid = function (soundList, selectedSoundList) {
        return soundList.map(function (it) {
            var soundUuid = it.uuid;
            var newSoundInstance = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, it, { uuid: uuid__WEBPACK_IMPORTED_MODULE_2__["v4"]() });
            var foundIndex = selectedSoundList.findIndex(function (it) { return it.uuid === soundUuid; });
            if (foundIndex >= 0) {
                selectedSoundList[foundIndex] = newSoundInstance;
            }
            return newSoundInstance;
        });
    };
    PlayerSoundService.prototype.getSoundsFromSelectedMixes = function (mixes) {
        var mixesSounds = mixes.map(function (mix) { return mix.sounds; });
        return [].concat.apply([], tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](mixesSounds));
    };
    PlayerSoundService.prototype.updateFreq = function (sound) {
        for (var i = 1; i <= TOTAL_HZS; i++) {
            var hz = sound["hz" + i];
            if (!this._freq[sound.uuid]) {
                this._freq[sound.uuid] = [];
            }
            this._freq[sound.uuid][i] = hz;
            if (this._osc[sound.uuid] && this._osc[sound.uuid][i]) {
                this._osc[sound.uuid][i].frequency.value = hz;
            }
        }
    };
    PlayerSoundService.prototype.convertDBToGain = function (Db) {
        return Math.pow(10, Db);
    };
    PlayerSoundService.prototype.toggle = function (sound) {
        if (this._playing[sound.uuid]) {
            for (var i = 1; i <= TOTAL_HZS; i++) {
                this._osc[sound.uuid][i].stop(0);
            }
            this._playing[sound.uuid] = false;
            return;
        }
        if (!this._osc[sound.uuid]) {
            this._osc[sound.uuid] = [];
        }
        for (var i = 1; i <= TOTAL_HZS; i++) {
            this._osc[sound.uuid][i] = this._audioContext.createOscillator();
            var gainNode = this._audioContext.createGain();
            this._osc[sound.uuid][i].connect(gainNode);
            gainNode.gain.value = this.convertDBToGain(DECIBEL_LEVEL);
            this._osc[sound.uuid][i].frequency.value = this._freq[sound.uuid][i];
            gainNode.connect(this._audioContext.destination);
            this._osc[sound.uuid][i].start(0);
        }
        this._playing[sound.uuid] = true;
    };
    PlayerSoundService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], PlayerSoundService);
    return PlayerSoundService;
}());



/***/ }),

/***/ "./src/app/player/services/player.api.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/player/services/player.api.service.ts ***!
  \*******************************************************/
/*! exports provided: PlayerApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerApiService", function() { return PlayerApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/constants/api.constant */ "./src/app/shared/constants/api.constant.ts");
/* harmony import */ var _model_playlist_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/playlist.model */ "./src/app/player/model/playlist.model.ts");
/* harmony import */ var _model_sound_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/sound.model */ "./src/app/player/model/sound.model.ts");








var PlayerApiService = /** @class */ (function () {
    function PlayerApiService(_http) {
        this._http = _http;
    }
    PlayerApiService.prototype.getPlayLists = function () {
        return this._http.get(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_5__["API_ENDPOINT"] + "/" + _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_5__["API_USER"] + "/getPlayList")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return new _model_playlist_model__WEBPACK_IMPORTED_MODULE_6__["PlaylistDataModel"](data); }));
    };
    PlayerApiService.prototype.getUserPlayList = function (userId) {
        return this._http.get(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_5__["API_ENDPOINT"] + "/" + _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_5__["API_USER"] + "/getUserPlayList?id=" + userId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return new _model_playlist_model__WEBPACK_IMPORTED_MODULE_6__["PlaylistDataModel"](data); }));
    };
    PlayerApiService.prototype.getSounds = function () {
        return this._http.get(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_5__["API_ENDPOINT"] + "/" + _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_5__["API_SOUND"] + "/getSoundList")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data.list.map(function (it) {
                return new _model_sound_model__WEBPACK_IMPORTED_MODULE_7__["SoundModel"](tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, it, { uuid: uuid__WEBPACK_IMPORTED_MODULE_4__["v4"]() }));
            });
        }));
    };
    PlayerApiService.prototype.getSettings = function () {
        return this._http.get(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_5__["API_ENDPOINT"] + "/" + _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_5__["API_USER"] + "/getSettings");
    };
    PlayerApiService.prototype.getCourses = function () {
        return this._http.get(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_5__["API_ENDPOINT"] + "/" + _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_5__["API_COURSE"] + "/getCourseList");
    };
    PlayerApiService.prototype.getCategories = function () {
        return this._http.get(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_5__["API_ENDPOINT"] + "/" + _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_5__["API_CATEGORY"] + "/getCateoryList");
    };
    PlayerApiService.prototype.addSounds = function (data) {
        return this._http.post(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_5__["API_ENDPOINT"] + "/" + _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_5__["API_COURSE"] + "/addSounds", data);
    };
    PlayerApiService.prototype.renameCategory = function (data) {
        return this._http.post(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_5__["API_ENDPOINT"] + "/" + _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_5__["API_CATEGORY"] + "/renameCategory", data);
    };
    PlayerApiService.prototype.renameCourse = function (data) {
        return this._http.post(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_5__["API_ENDPOINT"] + "/" + _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_5__["API_COURSE"] + "/renameCourse", data);
    };
    PlayerApiService.prototype.addCourse = function (data) {
        return this._http.post(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_5__["API_ENDPOINT"] + "/" + _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_5__["API_COURSE"] + "/addCourse", data);
    };
    PlayerApiService.prototype.addCategory = function (data) {
        return this._http.post(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_5__["API_ENDPOINT"] + "/" + _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_5__["API_CATEGORY"] + "/addCategory", data);
    };
    PlayerApiService.prototype.deleteCategory = function (data) {
        return this._http.post(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_5__["API_ENDPOINT"] + "/" + _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_5__["API_CATEGORY"] + "/deleteCategory", data);
    };
    PlayerApiService.prototype.deleteCourse = function (data) {
        return this._http.post(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_5__["API_ENDPOINT"] + "/" + _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_5__["API_COURSE"] + "/deleteCourse", data);
    };
    PlayerApiService.prototype.addPlaylist = function (data) {
        return this._http.post(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_5__["API_ENDPOINT"] + "/" + _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_5__["API_USER"] + "/addPlayList", data);
    };
    PlayerApiService.prototype.renamePlaylist = function (data) {
        return this._http.post(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_5__["API_ENDPOINT"] + "/" + _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_5__["API_USER"] + "/renamePlaylist", data);
    };
    PlayerApiService.prototype.addPlayListSound = function (data) {
        return this._http.post(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_5__["API_ENDPOINT"] + "/" + _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_5__["API_USER"] + "/addPlayListSound", data);
    };
    PlayerApiService.prototype.deletePlaylist = function (data) {
        return this._http.post(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_5__["API_ENDPOINT"] + "/" + _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_5__["API_USER"] + "/deletePlaylist", data);
    };
    PlayerApiService.prototype.addMix = function (data) {
        return this._http.post(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_5__["API_ENDPOINT"] + "/" + _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_5__["API_USER"] + "/addMix", data);
    };
    PlayerApiService.prototype.resetMix = function (data) {
        return this._http.post(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_5__["API_ENDPOINT"] + "/" + _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_5__["API_USER"] + "/resetMix", data);
    };
    PlayerApiService.prototype.addMixSounds = function (data) {
        return this._http.post(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_5__["API_ENDPOINT"] + "/" + _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_5__["API_USER"] + "/addMixSounds", data);
    };
    PlayerApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    PlayerApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PlayerApiService);
    return PlayerApiService;
}());



/***/ }),

/***/ "./src/app/shared/components/language-modal/language-modal.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/language-modal/language-modal.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".change-lang {\n  display: block;\n  font-weight: 600;\n  font-size: 24px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbGFuZ3VhZ2UtbW9kYWwvRDpcXEJhY2t1cFxcRGV2ZWxvcG1lbnRcXFdvcmtfSm9ic1xcRnJlZWxhbmNpbmdcXE91dFxcQW5ndWxhcl9zb3VuZFxcQXJjaGl2ZS9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxsYW5ndWFnZS1tb2RhbFxcbGFuZ3VhZ2UtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xhbmd1YWdlLW1vZGFsL2xhbmd1YWdlLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sYW5ndWFnZS1tb2RhbC9sYW5ndWFnZS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGFuZ2UtbGFuZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiIsIi5jaGFuZ2UtbGFuZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/components/language-modal/language-modal.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/language-modal/language-modal.component.ts ***!
  \******************************************************************************/
/*! exports provided: LanguageModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageModalComponent", function() { return LanguageModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _constants_languages_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/languages.constant */ "./src/app/shared/constants/languages.constant.ts");






var LanguageModalComponent = /** @class */ (function () {
    function LanguageModalComponent(_modalController, _translateService, _storage) {
        this._modalController = _modalController;
        this._translateService = _translateService;
        this._storage = _storage;
        this.selectedLang = _constants_languages_constant__WEBPACK_IMPORTED_MODULE_5__["APP_LANGUAGES"][0].code;
        this.APP_LANGUAGES = _constants_languages_constant__WEBPACK_IMPORTED_MODULE_5__["APP_LANGUAGES"];
    }
    LanguageModalComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this._storage.get('lang')];
                    case 1:
                        _a.selectedLang = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LanguageModalComponent.prototype.changeLang = function (lang) {
        this._translateService.use(lang);
        this._storage.set('lang', lang);
        this._modalController.dismiss();
    };
    LanguageModalComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
    ]; };
    LanguageModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'language-modal.component',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./language-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/language-modal/language-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./language-modal.component.scss */ "./src/app/shared/components/language-modal/language-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], LanguageModalComponent);
    return LanguageModalComponent;
}());



/***/ })

}]);
//# sourceMappingURL=player-player-module.js.map