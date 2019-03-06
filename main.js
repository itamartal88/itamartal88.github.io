(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.header{\r\n    height: 50px;\r\n    text-align: center;\r\n}\r\n\r\n.movies{\r\n    text-align: center;\r\n}\r\n\r\n.comment{\r\n    text-align: center;   \r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div>\n  <app-top-bar></app-top-bar>\n</div>\n<div *ngIf='appService.noResult' class=\"comment\">\n    <h1 align=\"center\">{{noMovieComment}}</h1>\n</div>\n<app-selected-movie></app-selected-movie>\n<div class=\"movies\">\n<app-movie></app-movie>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _services_app_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/app/app.service */ "./src/app/services/app/app.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(appService) {
        this.appService = appService;
        this.noMovieComment = 'There No Movies Results';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_app_app_service__WEBPACK_IMPORTED_MODULE_0__["AppService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _services_validators_validators_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/validators/validators.service */ "./src/app/services/validators/validators.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_material_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/material/material */ "./src/app/services/material/material.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _services_app_app_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/app/app.service */ "./src/app/services/app/app.service.ts");
/* harmony import */ var _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/movie/movie.component */ "./src/app/components/movie/movie.component.ts");
/* harmony import */ var _components_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/top-bar/top-bar.component */ "./src/app/components/top-bar/top-bar.component.ts");
/* harmony import */ var _components_popup_model_popup_model_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/popup-model/popup-model.component */ "./src/app/components/popup-model/popup-model.component.ts");
/* harmony import */ var _components_delete_delete_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/delete/delete.component */ "./src/app/components/delete/delete.component.ts");
/* harmony import */ var _components_selected_movie_selected_movie_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/selected-movie/selected-movie.component */ "./src/app/components/selected-movie/selected-movie.component.ts");
/* harmony import */ var _pipes_title_title_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes/title/title.pipe */ "./src/app/pipes/title/title.pipe.ts");
/* harmony import */ var _directives_stars_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/stars/.directive */ "./src/app/directives/stars/.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_10__["MovieComponent"],
                _components_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_11__["TopBarComponent"],
                _components_popup_model_popup_model_component__WEBPACK_IMPORTED_MODULE_12__["PopupModelComponent"],
                _components_delete_delete_component__WEBPACK_IMPORTED_MODULE_13__["DeleteComponent"],
                _components_selected_movie_selected_movie_component__WEBPACK_IMPORTED_MODULE_14__["SelectedMovieComponent"],
                _pipes_title_title_pipe__WEBPACK_IMPORTED_MODULE_15__["TitlePipe"],
                _directives_stars_directive__WEBPACK_IMPORTED_MODULE_16__["starsDirective"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _services_material_material__WEBPACK_IMPORTED_MODULE_5__["MetirialModule"]
            ],
            entryComponents: [_components_popup_model_popup_model_component__WEBPACK_IMPORTED_MODULE_12__["PopupModelComponent"], _components_delete_delete_component__WEBPACK_IMPORTED_MODULE_13__["DeleteComponent"]],
            providers: [_services_http_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"], _services_app_app_service__WEBPACK_IMPORTED_MODULE_9__["AppService"], _services_validators_validators_service__WEBPACK_IMPORTED_MODULE_0__["ValidatorsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classes/movie.ts":
/*!**********************************!*\
  !*** ./src/app/classes/movie.ts ***!
  \**********************************/
/*! exports provided: Movie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movie", function() { return Movie; });
/* harmony import */ var _services_consts_consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/consts/consts */ "./src/app/services/consts/consts.ts");

var idNUmber = 0;
var Movie = /** @class */ (function () {
    function Movie(title, year, runTime, genre, director, lengthId) {
        this.Title = title;
        this.Year = year;
        this.Runtime = runTime;
        this.Genre = genre;
        this.Director = director;
        this.imdbID = this.generateId();
        this.Poster = _services_consts_consts__WEBPACK_IMPORTED_MODULE_0__["deafultImg"];
    }
    Movie.prototype.generateId = function () {
        idNUmber++;
        return idNUmber.toString();
    };
    return Movie;
}());



/***/ }),

/***/ "./src/app/components/delete/delete.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/delete/delete.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.movieName{\r\n    color: red;\r\n    font-weight: bold;\r\n}\r\n\r\n.main{\r\n    position: relative;\r\n}\r\n\r\n.cancelBtn{\r\n    position: absolute;\r\n    margin-right: 10px;\r\n    left: 20%;\r\n}\r\n\r\n.confirmBtn{\r\n    position: absolute;\r\n    right: 20%;;\r\n}\r\n\r\np{\r\n    margin-bottom: 40px;\r\n}"

/***/ }),

/***/ "./src/app/components/delete/delete.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/delete/delete.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"main\">\n  <p>Are You Sure You Want To Delete <span class=\"movieName\">{{data.movie.Title}}</span> </p>\n  <button class=\"cancelBtn btn btn-danger\" (click)=\"closeDialog()\">Cancel</button>\n  <button class=\"confirmBtn btn btn-primary\" (click)=\"deleteMovie()\">Confirm</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/delete/delete.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/delete/delete.component.ts ***!
  \*******************************************************/
/*! exports provided: DeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteComponent", function() { return DeleteComponent; });
/* harmony import */ var _services_app_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/app/app.service */ "./src/app/services/app/app.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var DeleteComponent = /** @class */ (function () {
    function DeleteComponent(dialogRef, appService, data) {
        this.dialogRef = dialogRef;
        this.appService = appService;
        this.data = data;
        dialogRef.disableClose = true;
    }
    DeleteComponent.prototype.ngOnInit = function () {
    };
    DeleteComponent.prototype.deleteMovie = function () {
        for (var i = 0; i < this.appService.moviesArray.length; i++) {
            if (this.appService.moviesArray[i].imdbID == this.data.movie.imdbID) {
                this.appService.moviesArray.splice(i, 1);
            }
        }
        this.appService.setCuerrntMovies(this.appService.moviesArray);
        this.appService.isSelectedMovie = false;
        this.dialogRef.close();
    };
    DeleteComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    DeleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete',
            template: __webpack_require__(/*! ./delete.component.html */ "./src/app/components/delete/delete.component.html"),
            styles: [__webpack_require__(/*! ./delete.component.css */ "./src/app/components/delete/delete.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _services_app_app_service__WEBPACK_IMPORTED_MODULE_0__["AppService"], Object])
    ], DeleteComponent);
    return DeleteComponent;
}());



/***/ }),

/***/ "./src/app/components/movie/movie.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/movie/movie.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.outMovieDiv{\r\n    position:relative;\r\n    padding: 10px;\r\n}\r\n\r\n.inMovieDiv:hover{\r\n    /* background-color:#000; */\r\n    opacity:0.5;\r\n    border-radius: 5px;\r\n}\r\n\r\n.inMovieDiv:hover .glyphicon-info-sign{\r\n    opacity:1;\r\n}\r\n\r\n.editBtn{\r\n    position: absolute;\r\n    left: 0;\r\n}\r\n\r\n.deleteBtn{\r\n    position: absolute;\r\n    right: 0;\r\n}\r\n\r\n.inMovieDiv{\r\n    position: relative;\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n    background: linear-gradient(to right, #f79d00, #64f38c);\r\n}\r\n\r\nimg{\r\n    height: 400px;\r\n    width: 80%;\r\n    border-radius: 5px;\r\n}\r\n\r\n.glyphicon-info-sign{\r\n    opacity: 0; \r\n    font-size: 200px;\r\n    color: red;\r\n    margin: 0;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n\r\n.glyphicon-info-sign:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n.title{\r\n    font-weight: bold;\r\n}\r\n\r\n.year{\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/components/movie/movie.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/movie/movie.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div *ngFor='let movie of allMovies' class=\"col-sm-6 col-xs-12 col-lg-4 outMovieDiv\">\n    <div class=\"inMovieDiv\">\n    <span (click)=\"openSelectedDiv(movie)\" title=\"More Info About The Movie\" class=\"glyphicon glyphicon-info-sign\"></span>\n<p class=\"title\">{{movie.Title | title:movie.Title | titlecase}}</p>\n<p class=\"year\">{{movie.Year}}</p> \n<img src=\"{{movie.Poster}}\" onerror=\"this.src = './../assets/images/no-image.png';\"/>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/movie/movie.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/movie/movie.component.ts ***!
  \*****************************************************/
/*! exports provided: MovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieComponent", function() { return MovieComponent; });
/* harmony import */ var _services_consts_consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/consts/consts */ "./src/app/services/consts/consts.ts");
/* harmony import */ var _services_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/app/app.service */ "./src/app/services/app/app.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http/http.service */ "./src/app/services/http/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MovieComponent = /** @class */ (function () {
    function MovieComponent(httpService, AppService) {
        var _this = this;
        this.httpService = httpService;
        this.AppService = AppService;
        this.AppService.currentMovies.subscribe(function (res) { return _this.allMovies = res; });
    }
    MovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getMovies().subscribe(function (movies) {
            var allMovis = [];
            for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
                var movie = movies_1[_i];
                _this.httpService.getMovieInfo(movie.imdbID).subscribe(function (res) {
                    res.Year = res.Year.slice(0, 4);
                    res.Runtime = res.Runtime.split(" ")[0];
                    allMovis.push(res);
                });
            }
            _this.AppService.setCuerrntMovies(allMovis);
        });
    };
    MovieComponent.prototype.openSelectedDiv = function (movie) {
        var _this = this;
        this.AppService.isSelectedMovie = false;
        if (movie.imdbRating) {
            this.AppService.starsNumber = Math.round(movie.imdbRating / 2);
        }
        else {
            this.AppService.starsNumber = 4;
        }
        switch (this.AppService.starsNumber) {
            case 1:
            case 2:
                this.AppService.selectedGif = _services_consts_consts__WEBPACK_IMPORTED_MODULE_0__["sucksMovie"];
                break;
            case 3:
                this.AppService.selectedGif = _services_consts_consts__WEBPACK_IMPORTED_MODULE_0__["fineMovie"];
                break;
            case 4:
            case 5:
                this.AppService.selectedGif = _services_consts_consts__WEBPACK_IMPORTED_MODULE_0__["goodMovie"];
                break;
            default:
                console.log('no gif');
        }
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        setTimeout(function () {
            _this.AppService.isSelectedMovie = true;
        }, 0);
        this.AppService.setSelectedMovie(movie);
    };
    MovieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-movie',
            template: __webpack_require__(/*! ./movie.component.html */ "./src/app/components/movie/movie.component.html"),
            styles: [__webpack_require__(/*! ./movie.component.css */ "./src/app/components/movie/movie.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _services_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], MovieComponent);
    return MovieComponent;
}());



/***/ }),

/***/ "./src/app/components/popup-model/popup-model.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/popup-model/popup-model.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\nlabel{\r\n    display: block;\r\n}\r\n\r\n.main{\r\n    text-align: center;\r\n    position: relative;\r\n}\r\n\r\n/* .ng-invalid:not(form)  {\r\n    border: 1px solid #a94442; /* red */\r\n\r\n.spanError{\r\n    color: red;\r\n}\r\n\r\n.header{\r\n    font-weight: bold;\r\n}\r\n\r\n.close{\r\n  position: absolute;\r\n  right: 0;\r\n  }\r\n\r\n.form-group{\r\n      margin: 0;\r\n      height: 100px;\r\n  }\r\n\r\n.form-group label::before { \r\n    content: \"*\";\r\n    color: red;\r\n}"

/***/ }),

/***/ "./src/app/components/popup-model/popup-model.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/popup-model/popup-model.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n      <span class=\"close\" (click)=\"closeDialog()\" aria-hidden=\"true\">&times;</span>\n  <p class=\"header\"><u>\n    Movie Details\n  </u>\n  </p>\n  <form [formGroup]=\"movieForm\">\n\n    <div class=\"form-group\" [class.has-error]=\"title.invalid && (title.dirty || title.touched)\">\n      <label> Name:</label>\n      <input type=\"text\" formControlName=\"title\" class=\"form-control\">\n      <div>\n        \n      </div>\n      <div *ngIf=\"title.invalid && (title.dirty || title.touched)\">\n          <span  class=\"spanError\" *ngIf=\"!title.errors.validMovieNameEcxist\">\n          Field Is Required\n        </span>\n        <span  class=\"spanError\" *ngIf=\"title.errors.validMovieNameEcxist\">\n          Movie Name Already Ecxist\n        </span>\n      </div>\n    </div>\n\n    <div class=\"form-group\" [class.has-error]=\"year.invalid && (year.dirty || year.touched)\">\n      <label> Year:</label>\n      <input type=\"text\" formControlName=\"year\" class=\"form-control\">\n      <div *ngIf=\"year.invalid && (year.dirty || year.touched)\">\n          <span  class=\"spanError\" *ngIf=\"!year.errors.validYear\">\n              Field Is Required\n            </span>\n        <span  class=\"spanError\" *ngIf=\"year.errors.validYear\">\n        Years Range (1900-2019)\n      </span>\n      </div>\n    </div>\n\n    <div class=\"form-group\" [class.has-error]=\"runTime.invalid && (runTime.dirty || runTime.touched)\">\n      <label> Run Time(min):</label>\n      <input type=\"text\" formControlName=\"runTime\" class=\"form-control\">\n      <div *ngIf=\"runTime.errors && (runTime.dirty || runTime.touched)\">\n          <span  class=\"spanError\" *ngIf=\"!runTime.errors.validRunTime\">\n              Field Is Required\n            </span>\n          <span  class=\"spanError\" *ngIf=\"runTime.errors.validRunTime\">\n          Insert Only Numbers Max(300)\n        </span>\n      </div>\n    </div>\n\n    <div class=\"form-group\" [class.has-error]=\"genre.invalid && (genre.dirty || genre.touched)\">\n      <label> Genre:</label>\n      <input type=\"text\" formControlName=\"genre\" class=\"form-control\">\n      <div *ngIf=\"genre.invalid && (genre.dirty || genre.touched)\">\n          <span  class=\"spanError\">\n              Field Is Required\n          </span>\n      </div>\n    </div>\n       \n    <div class=\"form-group\" [class.has-error]=\"director.invalid && (director.dirty || director.touched)\">\n      <label> Director:</label>\n      <input type=\"text\" formControlName=\"director\" class=\"form-control\">\n      <div *ngIf=\"director.invalid && (director.dirty || director.touched)\">\n          <span  class=\"spanError\">\n              Field Is Required\n            </span>\n      </div>\n    </div\n    >\n  </form>\n\n  <button class=\"btn btn-primary\" *ngIf=\"addMode\" (click)=\"addMovie()\" [disabled]=\"!movieForm.valid\">Add Movie</button>\n  <button class=\"btn btn-primary\" *ngIf=\"editMode\" (click)=\"editMovie()\" [disabled]=\"!movieForm.valid\">Edit Movie</button>\n</div>"

/***/ }),

/***/ "./src/app/components/popup-model/popup-model.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/popup-model/popup-model.component.ts ***!
  \*****************************************************************/
/*! exports provided: PopupModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupModelComponent", function() { return PopupModelComponent; });
/* harmony import */ var _services_app_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/app/app.service */ "./src/app/services/app/app.service.ts");
/* harmony import */ var _classes_movie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../classes/movie */ "./src/app/classes/movie.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_validators_validators_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/validators/validators.service */ "./src/app/services/validators/validators.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var PopupModelComponent = /** @class */ (function () {
    function PopupModelComponent(dialogRef, appService, validService, data) {
        this.dialogRef = dialogRef;
        this.appService = appService;
        this.validService = validService;
        this.data = data;
        this.addMode = false;
        this.editMode = false;
        this.movieForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            year: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.validService.ValidateYear]),
            runTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.validService.ValidateRunTime]),
            genre: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            director: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
        dialogRef.disableClose = true;
    }
    PopupModelComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.data) {
            this.editMode = true;
            this.setFormValue();
        }
        else {
            this.addMode = true;
        }
        this.title.valueChanges.subscribe(function (res) {
            if (_this.addMode) {
                _this.title.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _this.validService.checkIfMovieNameEcxistAdd.bind(_this)]);
            }
            else {
                _this.title.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _this.validService.checkIfMovieNameEcxistEdit.bind(_this)]);
            }
        });
    };
    PopupModelComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    PopupModelComponent.prototype.setFormValue = function () {
        this.movieForm.controls['title'].setValue(this.data.movie.Title);
        this.movieForm.controls['year'].setValue(this.data.movie.Year);
        this.movieForm.controls['runTime'].setValue(this.data.movie.Runtime);
        this.movieForm.controls['genre'].setValue(this.data.movie.Genre);
        this.movieForm.controls['director'].setValue(this.data.movie.Director);
    };
    PopupModelComponent.prototype.addMovie = function () {
        var newMovie = new _classes_movie__WEBPACK_IMPORTED_MODULE_1__["Movie"](this.movieForm.value.title, this.movieForm.value.year, this.movieForm.value.runTime, this.movieForm.value.genre, this.movieForm.value.director, this.appService.moviesArray.length);
        this.appService.moviesArray.unshift(newMovie);
        this.appService.setCuerrntMovies(this.appService.moviesArray);
        this.dialogRef.close();
    };
    PopupModelComponent.prototype.editMovie = function () {
        for (var i = 0; i < this.appService.moviesArray.length; i++) {
            if (this.appService.moviesArray[i].imdbID == this.data.movie.imdbID) {
                this.appService.moviesArray[i].Title = this.movieForm.value.title;
                this.appService.moviesArray[i].Year = this.movieForm.value.year;
                this.appService.moviesArray[i].Runtime = this.movieForm.value.runTime;
                this.appService.moviesArray[i].Genre = this.movieForm.value.genre;
                this.appService.moviesArray[i].Director = this.movieForm.value.director;
                this.appService.setCuerrntMovies(this.appService.moviesArray);
            }
        }
        this.dialogRef.close();
    };
    Object.defineProperty(PopupModelComponent.prototype, "title", {
        get: function () { return this.movieForm.get('title'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PopupModelComponent.prototype, "year", {
        get: function () { return this.movieForm.get('year'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PopupModelComponent.prototype, "runTime", {
        get: function () { return this.movieForm.get('runTime'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PopupModelComponent.prototype, "genre", {
        get: function () { return this.movieForm.get('genre'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PopupModelComponent.prototype, "director", {
        get: function () { return this.movieForm.get('director'); },
        enumerable: true,
        configurable: true
    });
    PopupModelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-popup-model',
            template: __webpack_require__(/*! ./popup-model.component.html */ "./src/app/components/popup-model/popup-model.component.html"),
            styles: [__webpack_require__(/*! ./popup-model.component.css */ "./src/app/components/popup-model/popup-model.component.css")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            _services_app_app_service__WEBPACK_IMPORTED_MODULE_0__["AppService"], _services_validators_validators_service__WEBPACK_IMPORTED_MODULE_5__["ValidatorsService"], Object])
    ], PopupModelComponent);
    return PopupModelComponent;
}());



/***/ }),

/***/ "./src/app/components/selected-movie/selected-movie.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/selected-movie/selected-movie.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.main{\r\n    position: relative;\r\n}\r\n\r\n.close{\r\n    position: absolute;\r\n    right: 10px;\r\n    color:black;\r\n    font-size: 40px;\r\n    opacity: 1;\r\n}\r\n\r\n.rightDiv{\r\n    height: 100%;\r\n    background: linear-gradient(to right,#fffde4, #005aa7);\r\n}\r\n\r\n.leftDiv{\r\n    height: 100%;\r\n    background: linear-gradient(to right, #005aa7, #fffde4);\r\n}\r\n\r\n.center{\r\n    position: relative;\r\n    height: 100%;\r\n    background-color: #fffde4;\r\n    padding:10px;\r\n}\r\n\r\n.subMain{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.glyphicon-pencil{\r\n    position: absolute;\r\n    right: 0;\r\n}\r\n\r\n.glyphicon-pencil:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n.glyphicon-trash:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n.glyphicon-trash{\r\n    position: absolute;\r\n    right:30px;\r\n}\r\n\r\nimg{\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    right: -15px;\r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 15px;\r\n    border-bottom-right-radius: 15px;\r\n    border-bottom-left-radius: 5px;\r\n}\r\n\r\n.imgDiv{\r\n    height: 100%;\r\n}\r\n\r\n.header{\r\n    font-weight: bold;\r\n}\r\n\r\n.desc{\r\n    height: 200px;\r\n}\r\n\r\n.desc img{\r\n    height: 200px;\r\n    width: 50%;\r\n    position: relative;\r\n}\r\n\r\n.movieDetails{\r\n    font-family: 'Laila', serif;\r\n}\r\n\r\n@media only screen and (min-width: 300px) and (max-width: 680px) {\r\n   img{\r\n    height: 50%;\r\n    max-height: 175px;\r\n    position: relative;\r\n    top:-100px;\r\n   }\r\n .header{\r\n    width: 190px;\r\n  }\r\n\r\n  .glyphicon-trash{\r\n    position: absolute;\r\n    right:10px;\r\n  }\r\n\r\n  .glyphicon-pencil{\r\n    position: absolute;\r\n    right: -20px;\r\n}\r\n\r\n.desc{\r\n    display: none;\r\n}\r\n\r\n}\r\n\r\n@media only screen and (min-width: 680px) and (max-width: 800px) {\r\n    \r\n  .header{\r\n     width: 190px;\r\n   }\r\n \r\n }\r\n\r\n"

/***/ }),

/***/ "./src/app/components/selected-movie/selected-movie.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/selected-movie/selected-movie.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\" [@openClose]=\"appService.isSelectedMovie ? 'open' : 'closed'\">\n    <div class=\"subMain\" *ngIf=\"appService.isSelectedMovie\">\n        <div class=\"col-sm-2 col-xs-1 col-lg-2 leftDiv\"></div>\n        <div class=\"col-sm-8 col-xs-10 col-lg-8 center\">\n            <div class=\"col-sm-6 col-xs-10 col-lg-6 details\">\n                <span (click)=\"openEditModel()\" class=\"glyphicon glyphicon-pencil\"></span>\n                <span (click)=\"openDeleteModel()\" class=\"glyphicon glyphicon-trash\"></span>\n                <p class=\"header\">{{movie.Title | title:movie.Title | titlecase}}</p>\n                <p class=\"movieDetails\">Genre: {{movie.Genre}}</p>\n                <p class=\"movieDetails\">By: {{movie.Director}}</p>\n                <p class=\"movieDetails\">Time: {{movie.Runtime}} Min'</p>\n                <div class=\"desc\">\n                        <img class=\"irc_mi\" src=\"{{appService.selectedGif}}\" onload=\"typeof google==='object'\" alt=\"Image result for gif\" data-iml=\"1551517420254\"/>\n                </div>\n                <canvas appStars> </canvas>\n\n            </div>\n            <div class=\"col-sm-6 col-xs-10 col-lg-6 imgDiv\">\n                <img src=\"{{movie.Poster}}\" onerror=\"this.src = './../assets/images/no-image.png';\" />\n            </div>\n        </div>\n        <div class=\"col-sm-2 col-xs-1 col-lg-2 rightDiv\">\n            <span class=\"close\" (click)=\"closeSelectedDiv()\">&times;</span>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/selected-movie/selected-movie.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/selected-movie/selected-movie.component.ts ***!
  \***********************************************************************/
/*! exports provided: SelectedMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedMovieComponent", function() { return SelectedMovieComponent; });
/* harmony import */ var _services_app_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/app/app.service */ "./src/app/services/app/app.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../delete/delete.component */ "./src/app/components/delete/delete.component.ts");
/* harmony import */ var _popup_model_popup_model_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../popup-model/popup-model.component */ "./src/app/components/popup-model/popup-model.component.ts");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/http/http.service */ "./src/app/services/http/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SelectedMovieComponent = /** @class */ (function () {
    function SelectedMovieComponent(appService, dialog, httpService) {
        var _this = this;
        this.appService = appService;
        this.dialog = dialog;
        this.httpService = httpService;
        this.appService.selectedMovie.subscribe(function (movie) { return _this.movie = movie; });
    }
    SelectedMovieComponent.prototype.ngOnInit = function () {
    };
    SelectedMovieComponent.prototype.closeSelectedDiv = function () {
        this.appService.isSelectedMovie = false;
    };
    SelectedMovieComponent.prototype.openEditModel = function () {
        var config = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        config.panelClass = 'edit-dialog';
        config.height = '600px';
        config.width = '330px';
        config.data = { movie: this.movie };
        var dialogRef = this.dialog.open(_popup_model_popup_model_component__WEBPACK_IMPORTED_MODULE_5__["PopupModelComponent"], config);
    };
    SelectedMovieComponent.prototype.openDeleteModel = function () {
        var config = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        config.panelClass = 'edit-dialog';
        config.height = '150px';
        config.width = '350px';
        config.data = { movie: this.movie };
        var dialogRef = this.dialog.open(_delete_delete_component__WEBPACK_IMPORTED_MODULE_4__["DeleteComponent"], config);
    };
    SelectedMovieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-selected-movie',
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('openClose', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '0px' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '400px' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('open<=>closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1500ms')),
                ])
            ],
            template: __webpack_require__(/*! ./selected-movie.component.html */ "./src/app/components/selected-movie/selected-movie.component.html"),
            styles: [__webpack_require__(/*! ./selected-movie.component.css */ "./src/app/components/selected-movie/selected-movie.component.css")]
        }),
        __metadata("design:paramtypes", [_services_app_app_service__WEBPACK_IMPORTED_MODULE_0__["AppService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _services_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]])
    ], SelectedMovieComponent);
    return SelectedMovieComponent;
}());



/***/ }),

/***/ "./src/app/components/top-bar/top-bar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/top-bar/top-bar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top{\r\n  position: relative;\r\n  height: 50px;\r\n  top:-7px;\r\n  margin: 0;\r\n  padding-top: 0px;\r\n}\r\n\r\n.container{\r\n    background: linear-gradient(to right, #333333, #dd1818);\r\n    width: 100%;\r\n    padding-top: 15px;\r\n}\r\n\r\n.plusBtn{\r\n    height: 40px;;\r\n}\r\n\r\n.voiceSearch{\r\n    width: 50px;\r\n    position: absolute;\r\n    right: 18px;\r\n    top: 5px;\r\n}\r\n\r\nh1{\r\n    margin: 0px;\r\n    padding: 0;\r\n    color:white;\r\n}\r\n\r\nimg:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n.row{\r\n    position: relative;\r\n}\r\n\r\n.plusBtn{\r\n    position: absolute;\r\n    right: 10px;\r\n  }\r\n\r\n@media only screen and (min-width: 300px) and (max-width: 680px) {\r\n    .searchInput{\r\n        width: 100%;\r\n        margin-top: 5px;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/components/top-bar/top-bar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/top-bar/top-bar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n\n    <div class=\"col-xs-8 col-sm-4 col-md-4 col-lg-4\">\n      <h1>{{header}}</h1>\n    </div>\n\n    <div class=\"col-xs-4 col-sm-6 col-md-6 col-lg-6 searchInput\">\n      <div class=\"form-group\">\n        <img title=\"Search By Voice\" (mousedown)=\"startRecord()\" (mouseup)=\"stopRecord()\" class=\"voiceSearch\" src=\"./../../../assets/images/voiceSearch.png\"/>\n        <input placeholder=\"search by name..\" [(ngModel)]=\"searchText\" (keyup)='searchMovie()' type=\"text\"\n          class=\"form-control\">\n      </div>\n    </div>\n\n    <img title=\"Add Movie\" class=\"plusBtn\" (click)=\"openAddModel()\" src=\"./../../../assets/images/plus-btn.png\" />\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/top-bar/top-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/top-bar/top-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: TopBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBarComponent", function() { return TopBarComponent; });
/* harmony import */ var _popup_model_popup_model_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../popup-model/popup-model.component */ "./src/app/components/popup-model/popup-model.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _services_app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/app/app.service */ "./src/app/services/app/app.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TopBarComponent = /** @class */ (function () {
    function TopBarComponent(httpService, AppService, dialog) {
        this.httpService = httpService;
        this.AppService = AppService;
        this.dialog = dialog;
        this.header = 'Cinema App';
    }
    TopBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        var webkitSpeechRecognition = window.webkitSpeechRecognition;
        this.recognition = new webkitSpeechRecognition();
        this.recognition.lang = 'US-en';
        this.recognition.interimResults = true;
        this.recognition.addEventListener('result', function (e) {
            _this.searchText = e.results[0][0].transcript;
        });
    };
    TopBarComponent.prototype.startRecord = function () {
        this.recognition.start();
    };
    TopBarComponent.prototype.stopRecord = function () {
        this.recognition.stop();
        this.searchMovie();
    };
    TopBarComponent.prototype.searchMovie = function () {
        var _this = this;
        if (this.searchText.length > 2) {
            this.AppService.isSelectedMovie = false;
            this.httpService.searchMovie(this.searchText).subscribe(function (movies) {
                if (movies == undefined) {
                    _this.AppService.noResult = true;
                    _this.AppService.setCuerrntMovies([]);
                }
                else {
                    var allMovis_1 = [];
                    for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
                        var movie = movies_1[_i];
                        _this.httpService.getMovieInfo(movie.imdbID).subscribe(function (res) {
                            res.Year = res.Year.slice(0, 4);
                            res.Runtime = res.Runtime.split(" ")[0];
                            allMovis_1.push(res);
                        });
                    }
                    _this.AppService.setCuerrntMovies(allMovis_1);
                    _this.AppService.noResult = false;
                }
            });
        }
    };
    TopBarComponent.prototype.openAddModel = function () {
        var config = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        config.panelClass = 'edit-dialog';
        config.height = '600px';
        config.width = '330px';
        var dialogRef = this.dialog.open(_popup_model_popup_model_component__WEBPACK_IMPORTED_MODULE_0__["PopupModelComponent"], config);
    };
    TopBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-top-bar',
            template: __webpack_require__(/*! ./top-bar.component.html */ "./src/app/components/top-bar/top-bar.component.html"),
            styles: [__webpack_require__(/*! ./top-bar.component.css */ "./src/app/components/top-bar/top-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _services_app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], TopBarComponent);
    return TopBarComponent;
}());



/***/ }),

/***/ "./src/app/directives/stars/.directive.ts":
/*!************************************************!*\
  !*** ./src/app/directives/stars/.directive.ts ***!
  \************************************************/
/*! exports provided: starsDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "starsDirective", function() { return starsDirective; });
/* harmony import */ var _services_app_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/app/app.service */ "./src/app/services/app/app.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var starsDirective = /** @class */ (function () {
    function starsDirective(el, appService) {
        this.el = el;
        this.appService = appService;
    }
    starsDirective.prototype.ngAfterContentInit = function () {
        this.context = this.el.nativeElement.getContext('2d');
        this.drawStars();
    };
    starsDirective.prototype.drawStars = function () {
        var x = 10;
        for (var i = 0; i < this.appService.starsNumber; i++) {
            this.startDraw(x);
            x += 25;
        }
    };
    starsDirective.prototype.startDraw = function (x) {
        var alpha = (2 * Math.PI) / 10;
        var radius = 12;
        var starXY = [x, 20];
        this.context.beginPath();
        for (var i = 11; i != 0; i--) {
            var r = radius * (i % 2 + 1) / 2;
            var omega = alpha * i;
            this.context.lineTo((r * Math.sin(omega)) + starXY[0], (r * Math.cos(omega)) + starXY[1]);
        }
        this.context.closePath();
        this.context.fillStyle = "darkorange";
        this.context.fill();
    };
    starsDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appStars]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _services_app_app_service__WEBPACK_IMPORTED_MODULE_0__["AppService"]])
    ], starsDirective);
    return starsDirective;
}());



/***/ }),

/***/ "./src/app/pipes/title/title.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/title/title.pipe.ts ***!
  \*******************************************/
/*! exports provided: TitlePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitlePipe", function() { return TitlePipe; });
/* harmony import */ var _services_consts_consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/consts/consts */ "./src/app/services/consts/consts.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TitlePipe = /** @class */ (function () {
    function TitlePipe() {
    }
    TitlePipe.prototype.transform = function (value, args) {
        var title = '';
        for (var i = 0; i < args.length; i++) {
            if (_services_consts_consts__WEBPACK_IMPORTED_MODULE_0__["englishAndSpaceRegex"].test(args[i])) {
                title = title + args[i];
            }
        }
        return title;
    };
    TitlePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'title'
        })
    ], TitlePipe);
    return TitlePipe;
}());



/***/ }),

/***/ "./src/app/services/app/app.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/app/app.service.ts ***!
  \*********************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppService = /** @class */ (function () {
    function AppService() {
        this.currentMovies = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.noResult = false;
        this.isSelectedMovie = false;
        this.moviesArray = [];
        this.selectedMovie = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    AppService.prototype.setCuerrntMovies = function (movies) {
        this.moviesArray = movies;
        this.currentMovies.next(movies);
    };
    AppService.prototype.setSelectedMovie = function (movie) {
        this.Movie = movie;
        this.selectedMovie.next(movie);
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/services/consts/consts.ts":
/*!*******************************************!*\
  !*** ./src/app/services/consts/consts.ts ***!
  \*******************************************/
/*! exports provided: url, idUrl, searchUrl, deafultImg, englishAndSpaceRegex, sucksMovie, fineMovie, goodMovie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "url", function() { return url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idUrl", function() { return idUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchUrl", function() { return searchUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deafultImg", function() { return deafultImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "englishAndSpaceRegex", function() { return englishAndSpaceRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sucksMovie", function() { return sucksMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fineMovie", function() { return fineMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goodMovie", function() { return goodMovie; });
var url = 'https://www.omdbapi.com/?s=hell&type=movie&apikey=34a28b1a';
var idUrl = 'https://www.omdbapi.com/?apikey=34a28b1a&i=';
var searchUrl = 'https://www.omdbapi.com/?apikey=34a28b1a&i=&s=';
var deafultImg = './../assets/images/no-image.png';
var englishAndSpaceRegex = new RegExp(/^[A-Za-z\s][A-Za-z0-9]*$/);
var sucksMovie = "https://media1.giphy.com/media/qwZQ7BqbWiIj6/giphy.gif";
var fineMovie = "https://media.giphy.com/media/l41Yn9sKLI8nyD088/giphy.gif";
var goodMovie = "https://gifimage.net/wp-content/uploads/2017/11/gif-amazing-10.gif";


/***/ }),

/***/ "./src/app/services/http/http.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/http/http.service.ts ***!
  \***********************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _consts_consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../consts/consts */ "./src/app/services/consts/consts.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.getMovies = function () {
        return this.http.get(_consts_consts__WEBPACK_IMPORTED_MODULE_0__["url"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (movies) {
            return movies.Search;
        }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) {
            alert(e.status + ' error please try again or refresh this page');
            return e.status;
        })));
    };
    HttpService.prototype.searchMovie = function (name) {
        return this.http.get(_consts_consts__WEBPACK_IMPORTED_MODULE_0__["searchUrl"] + name).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (movies) {
            return movies.Search;
        }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) {
            alert(e.status + ' error please try again or refresh this page');
            return e.status;
        })));
    };
    HttpService.prototype.getMovieInfo = function (id) {
        return this.http.get(_consts_consts__WEBPACK_IMPORTED_MODULE_0__["idUrl"] + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (movies) {
            return movies;
        }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) {
            alert(e.status + ' error please try again or refresh this page');
            return e.status;
        })));
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/services/material/material.ts":
/*!***********************************************!*\
  !*** ./src/app/services/material/material.ts ***!
  \***********************************************/
/*! exports provided: MetirialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetirialModule", function() { return MetirialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var MetirialModule = /** @class */ (function () {
    function MetirialModule() {
    }
    MetirialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"]],
            exports: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"]]
        })
    ], MetirialModule);
    return MetirialModule;
}());



/***/ }),

/***/ "./src/app/services/validators/validators.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/validators/validators.service.ts ***!
  \***********************************************************/
/*! exports provided: ValidatorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidatorsService", function() { return ValidatorsService; });
/* harmony import */ var _app_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../app/app.service */ "./src/app/services/app/app.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ValidatorsService = /** @class */ (function () {
    function ValidatorsService(appService) {
        this.appService = appService;
    }
    ValidatorsService.prototype.ValidateYear = function (control) {
        if (control.value != "") {
            if (isNaN(control.value) || control.value < 1900 || control.value > 2019) {
                return { validYear: true };
            }
        }
        return null;
    };
    ValidatorsService.prototype.ValidateRunTime = function (control) {
        if (control.value != "") {
            if (isNaN(control.value) || control.value > 300) {
                return { validRunTime: true };
            }
        }
        return null;
    };
    ValidatorsService.prototype.checkIfMovieNameEcxistAdd = function (control) {
        for (var _i = 0, _a = this.appService.moviesArray; _i < _a.length; _i++) {
            var movie = _a[_i];
            if (control.value.replace(/\s+/g, " ").toLowerCase().trim() == movie.Title.toLowerCase()) {
                return { validMovieNameEcxist: true };
            }
        }
        return null;
    };
    ValidatorsService.prototype.checkIfMovieNameEcxistEdit = function (name) {
        for (var _i = 0, _a = this.appService.moviesArray; _i < _a.length; _i++) {
            var movie = _a[_i];
            if (name.value.replace(/\s+/g, " ").toLowerCase().trim() != this.appService.Movie.Title.replace(/\s+/g, " ").toLowerCase().trim() && movie.Title.replace(/\s+/g, " ").toLowerCase().trim() == name.value.replace(/\s+/g, " ").toLowerCase().trim()) {
                return { validMovieNameEcxist: true };
            }
        }
        return null;
    };
    ValidatorsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_app_app_service__WEBPACK_IMPORTED_MODULE_0__["AppService"]])
    ], ValidatorsService);
    return ValidatorsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\Cinema\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map