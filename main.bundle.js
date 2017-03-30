webpackJsonp([1,4],{

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParkingSpace; });
var ParkingSpace = (function () {
    function ParkingSpace(name, totalSpaces, occupiedSpaces, location, size, hourlyRate, description) {
        this.name = name;
        this.totalSpaces = totalSpaces;
        this.occupiedSpaces = occupiedSpaces;
        this.location = location;
        this.size = size;
        this.hourlyRate = hourlyRate;
        this.description = description;
    }
    return ParkingSpace;
}());
//# sourceMappingURL=parkingspace.model.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChooseThemeDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChooseThemeDialogComponent = (function () {
    function ChooseThemeDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.themes = [];
        this.themeDict = {};
        this.themeDict['Default theme'] = 'default';
        this.themeDict['Dark theme'] = 'dark-theme';
        this.themeDict['Unicorn dark theme'] = 'unicorn-dark-theme';
        this.themeDict['Deep purple theme'] = 'deep-purple-theme';
        for (var property in this.themeDict) {
            if (this.themeDict.hasOwnProperty(property)) {
                this.themes.push(property);
            }
        }
    }
    ChooseThemeDialogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-theme-dialog',
            template: __webpack_require__(664),
            styles: [__webpack_require__(653)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */]) === 'function' && _a) || Object])
    ], ChooseThemeDialogComponent);
    return ChooseThemeDialogComponent;
    var _a;
}());
//# sourceMappingURL=choose-theme-dialog.component.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_location_model__ = __webpack_require__(585);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeolocationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GeolocationService = (function () {
    function GeolocationService() {
        this.options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
    }
    GeolocationService.prototype.getCurrentPosition = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            navigator.geolocation.getCurrentPosition(function (pos) {
                observer.next(new __WEBPACK_IMPORTED_MODULE_2__models_location_model__["a" /* Location */](pos.coords.latitude, pos.coords.longitude));
                observer.complete();
            }, function (err) {
                console.log(err);
                observer.error(err);
            }, _this.options);
        });
    };
    GeolocationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], GeolocationService);
    return GeolocationService;
}());
//# sourceMappingURL=geolocation.service.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HistoryService = (function () {
    function HistoryService(http) {
        this.http = http;
        this.historyUrl = 'https://remote.glenng.no:3006/history'; // URL to web API
    }
    HistoryService.prototype.getHistory = function (parkingSpaceName) {
        var _this = this;
        return this.http.get(this.historyUrl + '/' + parkingSpaceName)
            .map(this.extractData)
            .map(function (history) { return _this.toHistoryCollection(parkingSpaceName, history); })
            .catch(this.handleError);
    };
    HistoryService.prototype.toHistoryCollection = function (parkingSpaceName, history) {
        return new HistoryCollection(parkingSpaceName, history);
    };
    HistoryService.prototype.extractData = function (res) {
        console.log('Response', res);
        var history = res.json();
        console.log('history', history);
        return history || {};
    };
    HistoryService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    HistoryService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], HistoryService);
    return HistoryService;
    var _a;
}());
var HistoryCollection = (function () {
    function HistoryCollection(parkingSpaceName, history) {
        this.parkingSpaceName = parkingSpaceName;
        this.history = history;
    }
    return HistoryCollection;
}());
var HistoryData = (function () {
    function HistoryData() {
    }
    return HistoryData;
}());
//# sourceMappingURL=history.service.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoCircleColorService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfoCircleColorService = (function () {
    function InfoCircleColorService() {
        this.fullColor = 'red';
        this.lowColor = 'yellow';
        this.normalColor = 'blue';
        this.fullFreeSpace = 0;
        this.lowFreeSpace = 20;
    }
    InfoCircleColorService.prototype.getColor = function (occupiedSpaces, totalSpaces) {
        var freeSpaces = totalSpaces - occupiedSpaces;
        if (freeSpaces === 0) {
            return this.fullColor;
        }
        var freeSpacePercent = freeSpaces * 100 / totalSpaces;
        console.log('Free space is: ', freeSpacePercent);
        if (freeSpacePercent <= this.lowFreeSpace) {
            return this.lowColor;
        }
        return this.normalColor;
    };
    InfoCircleColorService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], InfoCircleColorService);
    return InfoCircleColorService;
}());
//# sourceMappingURL=info-circle-color.service.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_websockets__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_websockets___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_websockets__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParkingSpaceWebsocketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ParkingSpaceWebsocketService = (function () {
    function ParkingSpaceWebsocketService() {
    }
    ParkingSpaceWebsocketService.prototype.connect = function () {
        if (this.messages) {
            return;
        }
        // Using share() causes a single websocket to be created when the first
        // observer subscribes. This socket is shared with subsequent observers
        // and closed when the observer count falls to zero.
        this.messages = __WEBPACK_IMPORTED_MODULE_2_rxjs_websockets___default()('wss://remote.glenng.no:3006/', this.inputStream = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]()).messages.share();
    };
    ParkingSpaceWebsocketService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ParkingSpaceWebsocketService);
    return ParkingSpaceWebsocketService;
}());
//# sourceMappingURL=parking-space-websocket.service.js.map

/***/ }),

/***/ 435:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 435;


/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(593);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_localstorage__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_localstorage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_localstorage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__choose_theme_dialog_choose_theme_dialog_component__ = __webpack_require__(402);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(dialog) {
        this.dialog = dialog;
        this.title = 'Oversikt over parkeringsplasser';
        this.theme = 'default';
    }
    AppComponent.prototype.openThemeDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__choose_theme_dialog_choose_theme_dialog_component__["a" /* ChooseThemeDialogComponent */]);
        dialogRef.componentInstance.selectedTheme = this.theme;
        dialogRef.afterClosed().subscribe(function (chosenTheme) {
            if (chosenTheme) {
                _this.theme = chosenTheme;
            }
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_localstorage__["LocalStorage"])(), 
        __metadata('design:type', Object)
    ], AppComponent.prototype, "theme", void 0);
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(663),
            styles: [__webpack_require__(652)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialog */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialog */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_localstorage__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_localstorage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_localstorage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__choose_theme_dialog_choose_theme_dialog_component__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__parking_space_map___ = __webpack_require__(583);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







__WEBPACK_IMPORTED_MODULE_6_angular2_localstorage__["WEBSTORAGE_CONFIG"].prefix = '';



var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__choose_theme_dialog_choose_theme_dialog_component__["a" /* ChooseThemeDialogComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__choose_theme_dialog_choose_theme_dialog_component__["a" /* ChooseThemeDialogComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_9__parking_space_map___["a" /* ParkingSpaceMapModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6_angular2_localstorage__["LocalStorageService"],
                __WEBPACK_IMPORTED_MODULE_6_angular2_localstorage__["WebStorageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_google_maps_core__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__parking_space_map_component__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__map_circle_with_info_window_map_circle_with_info_window_component__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__parking_space_info_circle_parking_space_info_circle_component__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__parking_space_info_circle_info_circle_color_service__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__geolocation_service_geolocation_service__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__websocket_service_parking_space_websocket_service__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__range_filter___ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__parking_space_toolbar_parking_space_toolbar_component__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__parking_space_info_dialog_parking_space_info_dialog_component__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__history_service_history_service__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__parking_space_info_parking_space_info_component__ = __webpack_require__(588);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParkingSpaceMapModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var ParkingSpaceMapModule = (function () {
    function ParkingSpaceMapModule() {
    }
    ParkingSpaceMapModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyD403ZxaQdODw0iVMMGG7ZparzGy2rEo8g'
                }),
                __WEBPACK_IMPORTED_MODULE_11__range_filter___["a" /* RangeFilterModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__geolocation_service_geolocation_service__["a" /* GeolocationService */],
                __WEBPACK_IMPORTED_MODULE_8__parking_space_info_circle_info_circle_color_service__["a" /* InfoCircleColorService */],
                __WEBPACK_IMPORTED_MODULE_10__websocket_service_parking_space_websocket_service__["a" /* ParkingSpaceWebsocketService */],
                __WEBPACK_IMPORTED_MODULE_14__history_service_history_service__["a" /* HistoryService */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__parking_space_map_component__["a" /* ParkingSpaceMapComponent */],
                __WEBPACK_IMPORTED_MODULE_6__map_circle_with_info_window_map_circle_with_info_window_component__["a" /* MapCircleWithInfoWindowComponent */],
                __WEBPACK_IMPORTED_MODULE_7__parking_space_info_circle_parking_space_info_circle_component__["a" /* ParkingSpaceInfoCircleComponent */],
                __WEBPACK_IMPORTED_MODULE_12__parking_space_toolbar_parking_space_toolbar_component__["a" /* ParkingSpaceToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__parking_space_info_dialog_parking_space_info_dialog_component__["a" /* ParkingSpaceInfoDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_15__parking_space_info_parking_space_info_component__["a" /* ParkingSpaceInfoComponent */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_13__parking_space_info_dialog_parking_space_info_dialog_component__["a" /* ParkingSpaceInfoDialogComponent */],
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_5__parking_space_map_component__["a" /* ParkingSpaceMapComponent */], __WEBPACK_IMPORTED_MODULE_15__parking_space_info_parking_space_info_component__["a" /* ParkingSpaceInfoComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], ParkingSpaceMapModule);
    return ParkingSpaceMapModule;
}());
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_google_maps_core__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_google_maps_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapCircleWithInfoWindowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapCircleWithInfoWindowComponent = (function () {
    function MapCircleWithInfoWindowComponent() {
        this.circleClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    MapCircleWithInfoWindowComponent.prototype.onCircleClick = function () {
        this.infoWindow.open();
        this.infoWindowOpen = this.infoWindow.isOpen;
        this.circleClick.emit();
    };
    MapCircleWithInfoWindowComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], MapCircleWithInfoWindowComponent.prototype, "latitude", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], MapCircleWithInfoWindowComponent.prototype, "longitude", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], MapCircleWithInfoWindowComponent.prototype, "infoWindowText", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], MapCircleWithInfoWindowComponent.prototype, "circleFillColor", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], MapCircleWithInfoWindowComponent.prototype, "circleRadius", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], MapCircleWithInfoWindowComponent.prototype, "infoWindowOpen", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], MapCircleWithInfoWindowComponent.prototype, "circleClick", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_angular2_google_maps_core__["SebmGoogleMapInfoWindow"]), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_google_maps_core__["SebmGoogleMapInfoWindow"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_google_maps_core__["SebmGoogleMapInfoWindow"]) === 'function' && _b) || Object)
    ], MapCircleWithInfoWindowComponent.prototype, "infoWindow", void 0);
    MapCircleWithInfoWindowComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'gg-map-circle-with-info-window',
            template: __webpack_require__(665),
            styles: [__webpack_require__(654)]
        }), 
        __metadata('design:paramtypes', [])
    ], MapCircleWithInfoWindowComponent);
    return MapCircleWithInfoWindowComponent;
    var _a, _b;
}());
//# sourceMappingURL=map-circle-with-info-window.component.js.map

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Location; });
var Location = (function () {
    function Location(lat, long) {
        this.lat = lat;
        this.long = long;
    }
    return Location;
}());
//# sourceMappingURL=location.model.js.map

/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_circle_color_service__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_parkingspace_model__ = __webpack_require__(228);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParkingSpaceInfoCircleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ParkingSpaceInfoCircleComponent = (function () {
    function ParkingSpaceInfoCircleComponent(colorService, dialog) {
        this.colorService = colorService;
        this.dialog = dialog;
        this.infoWindowOpen = true;
        this.circleClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.circleFillColor = 'red';
    }
    ParkingSpaceInfoCircleComponent.prototype.ngOnInit = function () {
        this.updateCircleFillColor();
        this.updateFreeSpaces();
    };
    ParkingSpaceInfoCircleComponent.prototype.ngOnChanges = function (changes) {
        if (changes['occupiedSpaces']) {
            if (this.parkingSpace.occupiedSpaces === undefined || this.parkingSpace.totalSpaces === undefined) {
                return;
            }
            this.updateCircleFillColor();
            this.updateFreeSpaces();
        }
    };
    ParkingSpaceInfoCircleComponent.prototype.onMapCircleClick = function () {
        // const dialogRef = this.dialog.open(ParkingSpaceInfoDialogComponent);
        // const dialogInstance = dialogRef.componentInstance;
        // dialogInstance.parkingSpace = this.parkingSpace;
        this.circleClick.emit(this.parkingSpace.name);
    };
    ParkingSpaceInfoCircleComponent.prototype.updateCircleFillColor = function () {
        this.circleFillColor = this.colorService.getColor(this.parkingSpace.occupiedSpaces, this.parkingSpace.totalSpaces);
    };
    ParkingSpaceInfoCircleComponent.prototype.updateFreeSpaces = function () {
        this.freeSpaces = this.parkingSpace.totalSpaces - this.parkingSpace.occupiedSpaces;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__models_parkingspace_model__["a" /* ParkingSpace */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__models_parkingspace_model__["a" /* ParkingSpace */]) === 'function' && _a) || Object)
    ], ParkingSpaceInfoCircleComponent.prototype, "parkingSpace", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], ParkingSpaceInfoCircleComponent.prototype, "infoWindowOpen", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _b) || Object)
    ], ParkingSpaceInfoCircleComponent.prototype, "circleClick", void 0);
    ParkingSpaceInfoCircleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'gg-parking-space-info-circle',
            template: __webpack_require__(666),
            styles: [__webpack_require__(655)]
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__info_circle_color_service__["a" /* InfoCircleColorService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__info_circle_color_service__["a" /* InfoCircleColorService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialog */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialog */]) === 'function' && _d) || Object])
    ], ParkingSpaceInfoCircleComponent);
    return ParkingSpaceInfoCircleComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=parking-space-info-circle.component.js.map

/***/ }),

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_parkingspace_model__ = __webpack_require__(228);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParkingSpaceInfoDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ParkingSpaceInfoDialogComponent = (function () {
    function ParkingSpaceInfoDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_parkingspace_model__["a" /* ParkingSpace */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__models_parkingspace_model__["a" /* ParkingSpace */]) === 'function' && _a) || Object)
    ], ParkingSpaceInfoDialogComponent.prototype, "parkingSpace", void 0);
    ParkingSpaceInfoDialogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-parking-space-info-dialog',
            template: __webpack_require__(667),
            styles: [__webpack_require__(656)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */]) === 'function' && _b) || Object])
    ], ParkingSpaceInfoDialogComponent);
    return ParkingSpaceInfoDialogComponent;
    var _a, _b;
}());
//# sourceMappingURL=parking-space-info-dialog.component.js.map

/***/ }),

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_parkingspace_model__ = __webpack_require__(228);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParkingSpaceInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParkingSpaceInfoComponent = (function () {
    function ParkingSpaceInfoComponent() {
    }
    ParkingSpaceInfoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_parkingspace_model__["a" /* ParkingSpace */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__models_parkingspace_model__["a" /* ParkingSpace */]) === 'function' && _a) || Object)
    ], ParkingSpaceInfoComponent.prototype, "parkingSpace", void 0);
    ParkingSpaceInfoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-parking-space-info',
            template: __webpack_require__(668),
            styles: [__webpack_require__(657)]
        }), 
        __metadata('design:paramtypes', [])
    ], ParkingSpaceInfoComponent);
    return ParkingSpaceInfoComponent;
    var _a;
}());
//# sourceMappingURL=parking-space-info.component.js.map

/***/ }),

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_combineLatest__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_combineLatest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeUntil__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_localstorage__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_localstorage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_localstorage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__geolocation_service_geolocation_service__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__websocket_service_parking_space_websocket_service__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__history_service_history_service__ = __webpack_require__(404);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParkingSpaceMapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ParkingSpaceMapComponent = (function () {
    function ParkingSpaceMapComponent(geoLocationService, parkingSpaceWsService, historyService) {
        this.geoLocationService = geoLocationService;
        this.parkingSpaceWsService = parkingSpaceWsService;
        this.historyService = historyService;
        this.lat = 58.146623;
        this.lng = 7.996178;
        this.mapZoom = 15;
        this.showAllInfowindows = true;
        this.showingUserLocation = false;
        this.showParkingSpaceToolbar = true;
        this.freeParkingSpacesLocalStorageValue = 0;
        this.freeParkingSpacesFilterValue$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.destroyed$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
    }
    ParkingSpaceMapComponent.prototype.onGetData = function () {
        this.historyService.getHistory('P3').subscribe(function (data) {
            console.log(data);
        });
    };
    ParkingSpaceMapComponent.prototype.onCircleClick = function (event) {
        this.sideNav.open();
        console.log(event);
        this.sidenavData = this.parkingSpaces.find(function (ps) { return ps.name === event; });
    };
    ParkingSpaceMapComponent.prototype.onShowMyLocationButtonClick = function () {
        var _this = this;
        this.showingUserLocation = true;
        this.previousMapLocation = new PreviousMapLocation(this.lat, this.lng, this.mapZoom);
        if (this.userGeoLocation === undefined) {
            this.geoLocationService.getCurrentPosition().subscribe(function (newpos) {
                _this.userGeoLocation = newpos;
                _this.lat = newpos.lat;
                _this.lng = newpos.long;
                _this.mapZoom = 13;
            });
        }
        else {
            /* TODO: Fix so that map automatically pans to the user
             * location if button for showing "my location" is pressed multiple times */
            this.lat = this.userGeoLocation.lat;
            this.lng = this.userGeoLocation.long;
            this.mapZoom = 13;
        }
    };
    ParkingSpaceMapComponent.prototype.onHideMyLocationButtonClick = function () {
        this.showingUserLocation = false;
        this.lat = this.previousMapLocation.lat;
        this.lng = this.previousMapLocation.long;
        this.mapZoom = this.previousMapLocation.zoomLevel;
    };
    ParkingSpaceMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.parkingSpaceWsService.connect();
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].combineLatest(this.parkingSpaceWsService.messages.distinctUntilChanged(), this.freeParkingSpacesFilterValue$.distinctUntilChanged()).takeUntil(this.destroyed$)
            .subscribe(function (_a) {
            var parkingSpaces = _a[0], minFreeSpaces = _a[1];
            _this.parkingSpaces = parkingSpaces.filter(function (ps) { return ps.totalSpaces - ps.occupiedSpaces >= minFreeSpaces; });
        });
        this.freeParkingSpacesFilterValue$.next(this.freeParkingSpacesLocalStorageValue); // Emit the last value from LocalStorage
    };
    ParkingSpaceMapComponent.prototype.ngOnDestroy = function () {
        this.destroyed$.next();
        this.destroyed$.complete();
    };
    ParkingSpaceMapComponent.prototype.mapZoomChanged = function (newZoomLevel) {
        if (newZoomLevel < 14) {
            console.log('Hiding info windows. Zoom level is:', newZoomLevel);
            this.showAllInfowindows = false;
        }
        else {
            console.log('Showing info windows. Zoom level is:', newZoomLevel);
            this.showAllInfowindows = true;
        }
    };
    ParkingSpaceMapComponent.prototype.freeSpacesFilterChanged = function (newValue) {
        this.freeParkingSpacesLocalStorageValue = newValue;
        this.freeParkingSpacesFilterValue$.next(newValue);
    };
    ParkingSpaceMapComponent.prototype.trackByIdAndOccupiedSpaces = function (index, item) {
        return item.name + '-' + item.occupiedSpaces;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_angular2_localstorage__["LocalStorage"])(), 
        __metadata('design:type', Object)
    ], ParkingSpaceMapComponent.prototype, "freeParkingSpacesLocalStorageValue", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdSidenav */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdSidenav */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdSidenav */]) === 'function' && _a) || Object)
    ], ParkingSpaceMapComponent.prototype, "sideNav", void 0);
    ParkingSpaceMapComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-parking-space-map',
            template: __webpack_require__(669),
            styles: [__webpack_require__(658)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__geolocation_service_geolocation_service__["a" /* GeolocationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__geolocation_service_geolocation_service__["a" /* GeolocationService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_9__websocket_service_parking_space_websocket_service__["a" /* ParkingSpaceWebsocketService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_9__websocket_service_parking_space_websocket_service__["a" /* ParkingSpaceWebsocketService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_10__history_service_history_service__["a" /* HistoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_10__history_service_history_service__["a" /* HistoryService */]) === 'function' && _d) || Object])
    ], ParkingSpaceMapComponent);
    return ParkingSpaceMapComponent;
    var _a, _b, _c, _d;
}());
var PreviousMapLocation = (function () {
    function PreviousMapLocation(lat, long, zoomLevel) {
        this.lat = lat;
        this.long = long;
        this.zoomLevel = zoomLevel;
    }
    return PreviousMapLocation;
}());
//# sourceMappingURL=parking-space-map.component.js.map

/***/ }),

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParkingSpaceToolbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParkingSpaceToolbarComponent = (function () {
    function ParkingSpaceToolbarComponent() {
    }
    ParkingSpaceToolbarComponent.prototype.ngOnInit = function () {
    };
    ParkingSpaceToolbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-parking-space-toolbar',
            template: __webpack_require__(670),
            styles: [__webpack_require__(659)]
        }), 
        __metadata('design:paramtypes', [])
    ], ParkingSpaceToolbarComponent);
    return ParkingSpaceToolbarComponent;
}());
//# sourceMappingURL=parking-space-toolbar.component.js.map

/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__range_filter_component__ = __webpack_require__(592);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeFilterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RangeFilterModule = (function () {
    function RangeFilterModule() {
    }
    RangeFilterModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MaterialModule */],
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__range_filter_component__["a" /* RangeFilterComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__range_filter_component__["a" /* RangeFilterComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], RangeFilterModule);
    return RangeFilterModule;
}());
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeFilterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RangeFilterComponent = (function () {
    function RangeFilterComponent() {
        this.valueChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    RangeFilterComponent.prototype.ngOnInit = function () {
    };
    RangeFilterComponent.prototype.onSliderchange = function (event) {
        console.log(event);
        this.valueChanged.emit(event.value);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], RangeFilterComponent.prototype, "minValue", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], RangeFilterComponent.prototype, "maxValue", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], RangeFilterComponent.prototype, "title", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], RangeFilterComponent.prototype, "value", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], RangeFilterComponent.prototype, "valueChanged", void 0);
    RangeFilterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-range-filter',
            template: __webpack_require__(671),
            styles: [__webpack_require__(660)]
        }), 
        __metadata('design:paramtypes', [])
    ], RangeFilterComponent);
    return RangeFilterComponent;
}());
//# sourceMappingURL=range-filter.component.js.map

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 652:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, ".fill-remaining-space{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 653:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "md-radio-group md-radio-button{display:inline}md-radio-group md-radio-button:after{content:\"\\A\";white-space:pre}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 655:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 656:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, ".category-title{font-weight:bold}.category-text{float:right}hr{min-width:300px}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 657:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 658:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, ".sebm-google-map-container{height:calc(100vh - $toolbar-height)}:host-context(.showingParkingSpaceToolbar) .sebm-google-map-container{height:calc(100vh - 64px * 2)}md-spinner{max-height:58px}.fill-remaining-space{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}app-parking-space-toolbar .filter-icon{margin-right:10px}app-parking-space-toolbar .mat-icon-button{margin:5px}md-sidenav{padding:20px}md-sidenav .mat-icon-button{float:right;margin-bottom:10px}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 659:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 663:
/***/ (function(module, exports) {

module.exports = "<div [class.showingParkingSpaceToolbar]=\"map.showParkingSpaceToolbar\" [class.deep-purple-theme]=\"theme === 'deep-purple-theme'\" [class.dark-theme]=\"theme === 'dark-theme'\" [class.unicorn-dark-theme]=\"theme === 'unicorn-dark-theme'\">\r\n<md-toolbar color=\"primary\">\r\n  <span>{{title}}</span>\r\n  <span class=\"fill-remaining-space\"></span>\r\n  <button md-icon-button [mdMenuTriggerFor]=\"menu\">\r\n  <md-icon>more_vert</md-icon>\r\n</button>\r\n  <md-menu #menu=\"mdMenu\">\r\n    <button md-menu-item (click)=\"map.showParkingSpaceToolbar=true;\" *ngIf=\"!map.showParkingSpaceToolbar\">\r\n      <md-icon>view_agenda</md-icon>\r\n      <span>Vis verktøylinjen</span>\r\n    </button>\r\n    <button md-menu-item (click)=\"map.showParkingSpaceToolbar=false;\" *ngIf=\"map.showParkingSpaceToolbar\">\r\n      <md-icon>view_agenda</md-icon>\r\n      <span>Skjul verktøylinjen</span>\r\n    </button>\r\n    <button md-menu-item (click)=\"openThemeDialog()\">\r\n      <md-icon>palette</md-icon>\r\n      <span>Velg fargetema</span>\r\n    </button>\r\n  </md-menu>\r\n</md-toolbar>\r\n<app-parking-space-map #map></app-parking-space-map>\r\n</div>"

/***/ }),

/***/ 664:
/***/ (function(module, exports) {

module.exports = "<h6>\r\n    Velg fargetema\r\n</h6>\r\n<md-radio-group [(ngModel)]=\"selectedTheme\">\r\n  <md-radio-button *ngFor=\"let theme of themes\" [value]=\"themeDict[theme]\" (click)=\"dialogRef.close(themeDict[theme])\">\r\n    {{theme}}\r\n  </md-radio-button>\r\n</md-radio-group>"

/***/ }),

/***/ 665:
/***/ (function(module, exports) {

module.exports = "<sebm-google-map-circle [latitude]=\"latitude\" [longitude]=\"longitude\" [radius]=\"circleRadius\" [fillColor]=\"circleFillColor\" (circleClick)=\"onCircleClick()\"></sebm-google-map-circle>\r\n<sebm-google-map-info-window #info [latitude]=\"latitude\" [longitude]=\"longitude\" [isOpen]=\"infoWindowOpen\"><ng-content></ng-content></sebm-google-map-info-window>"

/***/ }),

/***/ 666:
/***/ (function(module, exports) {

module.exports = "  <gg-map-circle-with-info-window [latitude]=\"parkingSpace.location.lat\" [longitude]=\"parkingSpace.location.long\" [circleFillColor]=\"circleFillColor\" [circleRadius]=\"parkingSpace.size\" [infoWindowOpen]=\"infoWindowOpen\" (circleClick)=onMapCircleClick()>\r\n  <strong>{{parkingSpace.parkingSpaceName}}</strong> Ledige plasser: <i>{{freeSpaces}}</i> av totalt <i>{{parkingSpace.totalSpaces}}</i>\r\n  </gg-map-circle-with-info-window>"

/***/ }),

/***/ 667:
/***/ (function(module, exports) {

module.exports = "<app-parking-space-info [parkingSpace]=\"parkingSpace\"></app-parking-space-info>"

/***/ }),

/***/ 668:
/***/ (function(module, exports) {

module.exports = "<md-spinner *ngIf=\"!parkingSpace\"></md-spinner>\n<div *ngIf=\"parkingSpace\" class=\"clearfix\">\n  <h6>\n    {{parkingSpace.name}}\n  </h6>\n  <hr>\n  <div class=\"info-content\">\n    <div class=\"category-row\">\n      <span class=\"category-title\">Beskrivelse:</span><span class=\"category-text\">{{parkingSpace.description}}</span>\n    </div>\n    <div class=\"category-row\">\n      <span class=\"category-title\">Plasser totalt:</span><span class=\"category-text\">{{parkingSpace.totalSpaces}}</span>\n    </div>\n    <div class=\"category-row\">\n      <span class=\"category-title\">Plasser opptatt:</span><span class=\"category-text\">{{parkingSpace.occupiedSpaces}}</span>\n    </div>\n    <div class=\"category-row\">\n      <span class=\"category-title\">Plasser ledig:</span><span class=\"category-text\">{{parkingSpace.freeSpaces}}</span>\n    </div>\n    <div class=\"category-row\">\n      <span class=\"category-title\">Timerate:</span><span class=\"category-text\">{{parkingSpace.hourlyRate}}</span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 669:
/***/ (function(module, exports) {

module.exports = "<app-parking-space-toolbar *ngIf=\"showParkingSpaceToolbar\">\r\n  <md-icon class=\"filter-icon\">filter_list</md-icon>\r\n  <app-range-filter maxValue=\"100\" minValue=\"0\" [value]=\"freeParkingSpacesLocalStorageValue\" (valueChanged)=\"freeSpacesFilterChanged($event)\"\r\n    title=\"Filtrer parkeringsplasser etter antall ledige plasser\"></app-range-filter>\r\n  <!-- This fills the remaining space of the current row -->\r\n  <span class=\"fill-remaining-space\"></span>\r\n  <md-spinner mdTooltip=\"Laster inn data fra server\" *ngIf=\"!parkingSpaces\"></md-spinner>\r\n  <button md-raised-button color=\"secondary\" *ngIf=\"!showingUserLocation\" (click)=\"onShowMyLocationButtonClick()\">Vis min lokasjon</button>\r\n  <button md-raised-button color=\"secondary\" *ngIf=\"showingUserLocation\" (click)=\"onHideMyLocationButtonClick()\">Fjern min lokasjon</button>\r\n  <button md-icon-button (click)=\"showParkingSpaceToolbar = false;\" mdTooltip=\"Lukk\"><md-icon>close</md-icon></button>\r\n</app-parking-space-toolbar>\r\n<md-sidenav-container class=\"example-sidenav-fab-container\">\r\n  <md-sidenav #sidenav mode=\"over\">\r\n    <button md-icon-button (click)=\"sidenav.close()\" mdTooltip=\"Lukk sidemeny\"><md-icon>close</md-icon></button>\r\n    <app-parking-space-info [parkingSpace]=\"sidenavData\"></app-parking-space-info>\r\n  </md-sidenav>\r\n  <sebm-google-map [latitude]=\"lat\" [longitude]=\"lng\" [(zoom)]=\"mapZoom\" (zoomChange)=\"mapZoomChanged($event)\" #map>\r\n    <gg-parking-space-info-circle *ngFor=\"let parkingSpace of parkingSpaces;trackBy: trackByIdAndOccupiedSpaces\" (circleClick)=\"onCircleClick($event)\"\r\n      [parkingSpace]=\"parkingSpace\" [infoWindowOpen]=\"showAllInfowindows\">\r\n    </gg-parking-space-info-circle>\r\n    <sebm-google-map-marker *ngIf=\"userGeoLocation\" [latitude]=\"userGeoLocation.lat\" [longitude]=\"userGeoLocation.long\">\r\n      <sebm-google-map-info-window [isOpen]=\"true\">Din omtrentlige plassering</sebm-google-map-info-window>\r\n    </sebm-google-map-marker>\r\n  </sebm-google-map>\r\n</md-sidenav-container>"

/***/ }),

/***/ 670:
/***/ (function(module, exports) {

module.exports = "<md-toolbar>\r\n  <ng-content></ng-content>\r\n</md-toolbar>"

/***/ }),

/***/ 671:
/***/ (function(module, exports) {

module.exports = "  {{title}}: <md-slider [min]=\"minValue\" [max]=\"maxValue\" step=\"1\" thumb-label=\"true\" tick-interval=\"1\" [(value)]=\"value\" (input)=\"onSliderchange($event)\"></md-slider>"

/***/ }),

/***/ 728:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(436);


/***/ })

},[728]);
//# sourceMappingURL=main.bundle.js.map