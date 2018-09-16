webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/adddata/adddata.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".addevents {\r\n  background-color: white;\r\n  padding-bottom: 50px;\r\n  padding-top: 50px;\r\n  padding-left: 50px;\r\n  padding-right: 50px;\r\n}\r\n.addcourse {\r\n  background-color: white;\r\n  padding-bottom: 50px;\r\n  padding-top: 50px;\r\n  padding-left: 50px;\r\n  padding-right: 50px;\r\n}\r\n.center {\r\n  margin: auto;\r\n  width: 50%;\r\n  padding-left: 200px;\r\n  padding-top: 40px;\r\n  -ms-grid-column-align: center;\r\n      justify-items: center;\r\n  -ms-flex-pack: center !important;\r\n      justify-content: center !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/adddata/adddata.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!upSvc.warning\">\n  <h2>Invalid page</h2>\n</div>\n<div *ngIf=\"upSvc.warning\">\n\n<div class=\"center\">\n<div class=\"btn-group btngroup\" style=\"justify-content: center !important;\">\n  <button type=\"button\" class=\"btn user-selection-btn\"  (click)=\"addCourse()\"  [ngClass]=\"{'card_active_true_tenant':card === '1', 'card_active_false_tenant': card !== '1'}\">Add Courses</button>\n  <button type=\"button\" class=\"btn user-selection-btn\"  (click)=\"addEvents()\" [ngClass]=\"{'card_active_true_admin':card === '2', 'card_active_false_admin': card !== '2'}\" >Add Events</button>\n  <button type=\"button\" class=\"btn user-selection-btn\"  (click)=\"addPhotos()\" [ngClass]=\"{'card_active_true_log':card === '3', 'card_active_false_admin': card !== '3'}\" >Add Photos</button>\n  <button type=\"button\" class=\"btn user-selection-btn\"  (click)=\"addActivities()\" [ngClass]=\"{'card_active_true_log':card === '4', 'card_active_false_admin': card !== '4'}\" >Add Activities</button>\n</div>\n</div>\n\n<div class=\"addevents\" *ngIf=\"addevents\">\n\n  <div class=\"row\">\n\n        <div class=\"col-sm-4\">\n              <h2>Add a event</h2>\n              <form  #heroForm=\"ngForm\">\n                <div class=\"form-group\">\n                  <label for=\"name\">Name</label>\n                  <input type=\"text\" class=\"form-control\" id=\"name\"\n                         required\n                         [(ngModel)]=\"title\" name=\"name\"\n                         #name=\"ngModel\">\n                  <div [hidden]=\"name.valid || name.pristine\"\n                       class=\"alert alert-danger\">\n                    Name is required\n                  </div>\n                </div>\n\n                <div class=\"form-group\">\n                  <label for=\"alterEgo\">Description</label>\n                  <input type=\"text\" class=\"form-control\" id=\"alterEgo\"\n                         [(ngModel)]=\"desc\" name=\"alterEgo\">\n                </div>\n\n                <div *ngIf=\"currentUpload\">\n                  <div class=\"progress\">\n                    <div class=\"progress-bar progress-bar-animated\" [ngStyle]=\"{ 'width': currentUpload?.progress + '%' }\"></div>\n                  </div>\n                  Progress: {{currentUpload?.name}} | {{currentUpload?.progress}}% Complete\n                </div>\n\n                <label> Upload Image\n                  <input type=\"file\" (change)=\"detectFiles($event)\">\n                </label>\n\n\n\n\n                <button type=\"submit\" class=\"btn btn-success\" (click)=\"onEnter()\" [disabled]=\"!heroForm.form.valid\">Submit</button>\n                <!--<button type=\"button\" class=\"btn btn-default\" (click)=\"newHero(); heroForm.reset()\">New Hero</button>-->\n              </form>\n\n        </div>\n\n    <div class=\"col-sm-6 floatright\" style=\"padding-right: 30px;\">\n      <h2>Event List</h2>\n      <ul class=\"list-group\" *ngFor=\"let event of events|async let number=index\">\n        <li class=\"list-group-item\">{{event.title}}<span class=\"badge\"><i (click)=\"removeItemFromList(event)\" class=\"fa fa-trash\" aria-hidden=\"true\"></i></span></li>\n      </ul>\n    </div>\n\n    <!--The content below is only a placeholder and can be replaced.-->\n    <!--<button mat-raised-button color=\"primary\" (click)=\"fileInput.click()\">Click</button>-->\n    <!--<input #fileInput type=\"file\" (change)=\"chooseFiles($event)\" style=\"display:none;\" />-->\n\n    <img style=\" \" src=\"{{imgsrc | async}}\">\n\n    <div> {{ progressBarValue }}</div>\n\n    <mat-progress-bar\n      [color]=\"color\"\n      [mode]=\"mode\"\n      [value]=\"progressBarValue\">\n    </mat-progress-bar>\n\n</div>\n</div>\n\n<div class=\"addcourse\" *ngIf=\"addcourse\">\n\n  <div class=\"row\">\n\n    <div class=\"col-sm-4\">\n      <h2>Add a course</h2>\n      <form  #heroForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"name\"\n                 required\n                 [(ngModel)]=\"title\" name=\"name\"\n                 #name=\"ngModel\">\n          <div [hidden]=\"name.valid || name.pristine\"\n               class=\"alert alert-danger\">\n            Name is required\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"alterEgo\">Description</label>\n          <input type=\"text\" class=\"form-control\" id=\"alterEgo\"\n                 [(ngModel)]=\"desc\" name=\"alterEgo\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-success\" (click)=\"onAddCourse()\" [disabled]=\"!heroForm.form.valid\">Submit</button>\n        <!--<button type=\"button\" class=\"btn btn-default\" (click)=\"newHero(); heroForm.reset()\">New Hero</button>-->\n      </form>\n    </div>\n\n    <div class=\"col-sm-6 floatright\" style=\"padding-right: 30px;\">\n      <h2>Course List</h2>\n      <ul class=\"list-group\" *ngFor=\"let course of courses|async let number=index\">\n        <li class=\"list-group-item\">{{course.title}}{{course.$key}}<span class=\"badge\"><i (click)=\"removeItemFromCourse(course)\" class=\"fa fa-trash\" aria-hidden=\"true\"></i></span></li>\n      </ul>\n    </div>\n\n\n    <img style=\" \" src=\"{{imgsrc | async}}\">\n\n    <div> {{ progressBarValue }}</div>\n\n    <mat-progress-bar\n      [color]=\"color\"\n      [mode]=\"mode\"\n      [value]=\"progressBarValue\">\n    </mat-progress-bar>\n\n  </div>\n</div>\n\n<div class=\"addcourse\" *ngIf=\"addactivities\">\n\n    <div class=\"row\">\n\n      <div class=\"col-sm-4\">\n        <h2>Add a activity</h2>\n        <form  #heroForm=\"ngForm\">\n          <div class=\"form-group\">\n            <label for=\"name\">Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"name\"\n                   required\n                   [(ngModel)]=\"title\" name=\"name\"\n                   #name=\"ngModel\">\n            <div [hidden]=\"name.valid || name.pristine\"\n                 class=\"alert alert-danger\">\n              Name is required\n            </div>\n          </div>\n\n          <!--<div class=\"form-group\">-->\n            <!--<label for=\"alterEgo\">Description</label>-->\n            <!--<input type=\"text\" class=\"form-control\" id=\"alterEgo\"-->\n                   <!--[(ngModel)]=\"desc\" name=\"alterEgo\">-->\n          <!--</div>-->\n          <button type=\"submit\" class=\"btn btn-success\" (click)=\"onAddActivities()\" [disabled]=\"!heroForm.form.valid\">Submit</button>\n          <!--<button type=\"button\" class=\"btn btn-default\" (click)=\"newHero(); heroForm.reset()\">New Hero</button>-->\n        </form>\n      </div>\n\n      <div class=\"col-sm-6 floatright\" style=\"padding-right: 30px;\">\n        <h2>Activity List</h2>\n        <ul class=\"list-group\" *ngFor=\"let course of activities |async let number=index\">\n          <li class=\"list-group-item\">{{course.title}}{{course.$key}}<span class=\"badge\"><i (click)=\"removeItemFromActivities(course)\" class=\"fa fa-trash\" aria-hidden=\"true\"></i></span></li>\n        </ul>\n      </div>\n\n\n      <img style=\" \" src=\"{{imgsrc | async}}\">\n\n      <div> {{ progressBarValue }}</div>\n\n      <mat-progress-bar\n        [color]=\"color\"\n        [mode]=\"mode\"\n        [value]=\"progressBarValue\">\n      </mat-progress-bar>\n\n    </div>\n  </div>\n<div class=\"addevents\" *ngIf=\"addphotos\">\n\n  <div class=\"row\">\n\n    <div class=\"col-sm-4\">\n      <h2>Add a photo</h2>\n      <form  #heroForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"name\"\n                 required\n                 [(ngModel)]=\"title\" name=\"name\"\n                 #name=\"ngModel\">\n          <div [hidden]=\"name.valid || name.pristine\"\n               class=\"alert alert-danger\">\n            Name is required\n          </div>\n        </div>\n\n        <div *ngIf=\"currentUpload\">\n          <div class=\"progress\">\n            <div class=\"progress-bar progress-bar-animated\" [ngStyle]=\"{ 'width': currentUpload?.progress + '%' }\"></div>\n          </div>\n          Progress: {{currentUpload?.name}} | {{currentUpload?.progress}}% Complete\n        </div>\n\n        <label> Upload Image\n          <input type=\"file\" (change)=\"detectFiles($event)\">\n        </label>\n        <button type=\"submit\" class=\"btn btn-success\" (click)=\"onEnterPhotos()\" [disabled]=\"!heroForm.form.valid\">Submit</button>\n        <!--<button type=\"button\" class=\"btn btn-default\" (click)=\"newHero(); heroForm.reset()\">New Hero</button>-->\n      </form>\n    </div>\n\n\n    <div class=\"col-sm-6 floatright\" style=\"padding-right: 30px;\">\n      <h2>Photos List</h2>\n      <ul class=\"list-group\" *ngFor=\"let course of photos|async let number=index\">\n        <li class=\"list-group-item\">{{course.title}}{{course.$key}}<span class=\"badge\"><i (click)=\"removeItemFromPhotos(course)\" class=\"fa fa-trash\" aria-hidden=\"true\"></i></span></li>\n      </ul>\n    </div>\n\n    <!--The content below is only a placeholder and can be replaced.-->\n    <!--<button mat-raised-button color=\"primary\" (click)=\"fileInput.click()\">Click</button>-->\n    <!--<input #fileInput type=\"file\" (change)=\"chooseFiles($event)\" style=\"display:none;\" />-->\n\n    <img style=\" \" src=\"{{imgsrc | async}}\">\n\n    <div> {{ progressBarValue }}</div>\n\n    <mat-progress-bar\n      [color]=\"color\"\n      [mode]=\"mode\"\n      [value]=\"progressBarValue\">\n    </mat-progress-bar>\n\n  </div>\n</div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/adddata/adddata.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdddataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__ = __webpack_require__("../../../../angularfire2/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__upload__ = __webpack_require__("../../../../../src/app/upload.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__uploadphoto_service__ = __webpack_require__("../../../../../src/app/uploadphoto.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdddataComponent = /** @class */ (function () {
    function AdddataComponent(db, storage, upSvc, upPhoto) {
        var _this = this;
        this.db = db;
        this.storage = storage;
        this.upSvc = upSvc;
        this.upPhoto = upPhoto;
        this.submitted = false;
        this.addevents = false;
        this.addcourse = true;
        this.addphotos = false;
        this.addactivities = false;
        db.object('/events').snapshotChanges().map(function (action) {
            var $key = action.payload.key;
            _this.events1 = db.list('/events');
            _this.events = _this.events1.valueChanges();
            _this.events = _this.events1.snapshotChanges().map(function (changes) {
                return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
            });
            var data = __assign({ $key: $key }, action.payload.val());
            return data;
        }).subscribe();
        db.object('/courses').snapshotChanges().map(function (action) {
            var $key = action.payload.key;
            _this.courses1 = db.list('/courses');
            _this.courses = _this.courses1.valueChanges();
            _this.courses = _this.courses1.snapshotChanges().map(function (changes) {
                return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
            });
            var data = __assign({ $key: $key }, action.payload.val());
            return data;
        }).subscribe();
        db.object('/activities').snapshotChanges().map(function (action) {
            var $key = action.payload.key;
            _this.activities1 = db.list('/activities');
            _this.activities = _this.activities1.valueChanges();
            _this.activities = _this.activities1.snapshotChanges().map(function (changes) {
                return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
            });
            var data = __assign({ $key: $key }, action.payload.val());
            return data;
        }).subscribe();
        db.object('/photos').snapshotChanges().map(function (action) {
            var $key = action.payload.key;
            _this.photos1 = db.list('/photos');
            _this.photos = _this.photos1.valueChanges();
            _this.photos = _this.photos1.snapshotChanges().map(function (changes) {
                return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
            });
            var data = __assign({ $key: $key }, action.payload.val());
            return data;
        }).subscribe();
    }
    AdddataComponent.prototype.ngOnInit = function () {
        // this.downloadURL = this.storage.ref('/users/davideast.png').getDownloadURL();
    };
    AdddataComponent.prototype.detectFiles = function (event) {
        this.selectedFiles = event.target.files;
    };
    AdddataComponent.prototype.addEvents = function () {
        this.addevents = true;
        this.addactivities = false;
        this.addcourse = false;
        this.addphotos = false;
    };
    AdddataComponent.prototype.addActivities = function () {
        this.addactivities = true;
        this.addevents = false;
        this.addcourse = false;
        this.addphotos = false;
    };
    AdddataComponent.prototype.addCourse = function () {
        this.addcourse = true;
        this.addevents = false;
        this.addactivities = false;
        this.addphotos = false;
    };
    AdddataComponent.prototype.addPhotos = function () {
        this.addphotos = true;
        this.addevents = false;
        this.addcourse = false;
        this.addactivities = false;
    };
    AdddataComponent.prototype.uploadSingle = function () {
        var file = this.selectedFiles.item(0);
        this.currentUpload = new __WEBPACK_IMPORTED_MODULE_3__upload__["a" /* Upload */](file);
        this.upSvc.pushUpload(this.currentUpload);
    };
    AdddataComponent.prototype.uploadPhoto = function () {
        var file = this.selectedFiles.item(0);
        this.currentUpload = new __WEBPACK_IMPORTED_MODULE_3__upload__["a" /* Upload */](file);
        this.upPhoto.pushUpload(this.currentUpload);
    };
    // uploadMulti() {
    //   const files = this.selectedFiles;
    //   const filesIndex = _.range(files.length);
    //   _.each(filesIndex, (idx) => {
    //     this.currentUpload = new Upload(files[idx]);
    //     this.upSvc.pushUpload(this.currentUpload); }
    //   );
    // }
    AdddataComponent.prototype.onEnter = function () {
        this.submitted = true;
        this.upSvc.title = this.title;
        this.upSvc.desc = this.desc;
        // this.events1.push({desc: this.desc, title: this.title});
        this.uploadSingle();
    };
    AdddataComponent.prototype.onEnterPhotos = function () {
        this.submitted = true;
        this.upPhoto.title = this.title;
        // this.events1.push({desc: this.desc, title: this.title});
        this.uploadPhoto();
    };
    AdddataComponent.prototype.onAddCourse = function () {
        this.courses1.push({ desc: this.desc, title: this.title });
    };
    AdddataComponent.prototype.onAddActivities = function () {
        this.activities1.push({ title: this.title });
    };
    AdddataComponent.prototype.removeItemFromList = function (events) {
        // this.events.remove().then(_ => console.log('item deleted!'));
        this.db.object('/events/' + events.key).remove();
    };
    AdddataComponent.prototype.removeItemFromCourse = function (course) {
        // this.events.remove().then(_ => console.log('item deleted!'));
        this.db.object('/courses/' + course.key).remove();
    };
    AdddataComponent.prototype.removeItemFromActivities = function (activity) {
        // this.events.remove().then(_ => console.log('item deleted!'));
        this.db.object('/activities/' + activity.key).remove();
    };
    AdddataComponent.prototype.removeItemFromPhotos = function (photo) {
        // this.events.remove().then(_ => console.log('item deleted!'));
        this.db.object('/photos/' + photo.key).remove();
    };
    AdddataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-adddata',
            template: __webpack_require__("../../../../../src/app/adddata/adddata.component.html"),
            styles: [__webpack_require__("../../../../../src/app/adddata/adddata.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__["a" /* AngularFireStorage */], __WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_6__uploadphoto_service__["a" /* UploadphotoService */]])
    ], AdddataComponent);
    return AdddataComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,300italic,400italic,500,500italic,700,700italic,900|Open+Sans:300,400,600,700);", ""]);

// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(db, appservice) {
        this.db = db;
        this.appservice = appservice;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.db.list('/photos/').snapshotChanges().map(function (list) { return list.length; }).subscribe(function (length) { return _this.appservice.rows = Math.floor(length / 5) + 1; });
        // this.imagesUrl = [
        //   '../../assets/img/slides/flexslider/1.jpg',
        //   '../../assets/img/slides/flexslider/2.jpg',
        //   './../assets/img/slides/flexslider/3.jpg',
        // ];
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_simple_slideshow__ = __webpack_require__("../../../../ng-simple-slideshow/ng-simple-slideshow.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gallery_gallery_component__ = __webpack_require__("../../../../../src/app/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__events_events_component__ = __webpack_require__("../../../../../src/app/events/events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__courses_courses_component__ = __webpack_require__("../../../../../src/app/courses/courses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular_image_slider__ = __webpack_require__("../../../../angular-image-slider/esm5/angular-image-slider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_mousetrap__ = __webpack_require__("../../../../mousetrap/mousetrap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_mousetrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_mousetrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_google_login__ = __webpack_require__("../../../../angular2-google-login/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular_modal_gallery__ = __webpack_require__("../../../../angular-modal-gallery/angular-modal-gallery.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular2_image_gallery__ = __webpack_require__("../../../../angular2-image-gallery/fesm5/angular2-image-gallery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ngx_gallery__ = __webpack_require__("../../../../ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ngx_gallery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_ngx_gallery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__adddata_adddata_component__ = __webpack_require__("../../../../../src/app/adddata/adddata.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angularfire2_storage__ = __webpack_require__("../../../../angularfire2/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__uploadphoto_service__ = __webpack_require__("../../../../../src/app/uploadphoto.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var firebaseConfig = {
    apiKey: "AIzaSyBRgda9yX_qo4MhVqtf9dT9hUTXPv2VTlc",
    authDomain: "af-de-mahe.firebaseapp.com",
    databaseURL: "https://af-de-mahe.firebaseio.com",
    projectId: "af-de-mahe",
    storageBucket: "af-de-mahe.appspot.com",
    messagingSenderId: "129368052704"
};
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */] },
    { path: 'courses', component: __WEBPACK_IMPORTED_MODULE_9__courses_courses_component__["a" /* CoursesComponent */] },
    { path: 'gallery', component: __WEBPACK_IMPORTED_MODULE_6__gallery_gallery_component__["a" /* GalleryComponent */] },
    { path: 'events', component: __WEBPACK_IMPORTED_MODULE_8__events_events_component__["a" /* EventsComponent */] },
    { path: 'contacts', component: __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__["a" /* ContactComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */] },
    { path: 'adddata', component: __WEBPACK_IMPORTED_MODULE_25__adddata_adddata_component__["a" /* AdddataComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__gallery_gallery_component__["a" /* GalleryComponent */],
                __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_8__events_events_component__["a" /* EventsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__courses_courses_component__["a" /* CoursesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_25__adddata_adddata_component__["a" /* AdddataComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_15_angular_image_slider__["a" /* SliderModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng_simple_slideshow__["a" /* SlideshowModule */],
                __WEBPACK_IMPORTED_MODULE_21_ngx_gallery__["NgxGalleryModule"],
                __WEBPACK_IMPORTED_MODULE_20_angular2_image_gallery__["a" /* Angular2ImageGalleryModule */],
                __WEBPACK_IMPORTED_MODULE_19_angular_modal_gallery__["a" /* ModalGalleryModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_14__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_23_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_22_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_24_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_28_angularfire2_storage__["b" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_forms__["a" /* FormsModule */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
            providers: [__WEBPACK_IMPORTED_MODULE_18_angular2_google_login__["b" /* AuthService */], __WEBPACK_IMPORTED_MODULE_24_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_22_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_27_angularfire2_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_13__app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_29__uploadphoto_service__["a" /* UploadphotoService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_storage__ = __webpack_require__("../../../../angularfire2/storage/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppService = /** @class */ (function () {
    function AppService(af, db) {
        var _this = this;
        this.af = af;
        this.db = db;
        this.basePath = '/events';
        this.db.list('/photos/').snapshotChanges().map(function (list) { return list.length; }).subscribe(function (length) { return _this.rows = Math.floor(length / 5) + 1; });
    }
    AppService.prototype.pushUpload = function (upload) {
        var _this = this;
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        var uploadTask = storageRef.child(this.basePath + "/" + upload.file.name).put(upload.file);
        uploadTask.on(__WEBPACK_IMPORTED_MODULE_2_firebase__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
            upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
            console.log(upload.progress);
        }, function (error) {
            // upload failed
            console.log(error);
        }, function () {
            // upload success
            upload.url = uploadTask.snapshot.downloadURL;
            upload.name = upload.file.name;
            upload.title = _this.title;
            upload.descr = _this.desc;
            _this.saveFileData(upload);
            console.log(upload.url);
        });
    };
    // Writes the file details to the realtime db
    AppService.prototype.saveFileData = function (upload) {
        this.db.list(this.basePath + "/").push(upload);
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_storage__["a" /* AngularFireStorage */], __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"content\">\n  <!--<div #gmap style=”width:100%;height:400px;”></div>-->\n  <div id=\"map\" style=”width:100%;height:400px;”></div>\n  <!--<div class=\"map\">-->\n    <!--&lt;!&ndash;<div id=\"google-map\" data-latitude=\"11.706751\" data-longitude=\"75.536667\"></div>&ndash;&gt;-->\n    <!--<div #gmap style=”width:100%;height:400px”></div>-->\n  <!--</div>-->\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8 col-md-offset-2\">\n        <h2>Contact us <small>get in touch with us by filling form below</small></h2>\n        <hr class=\"colorgraph\">\n        <div id=\"sendmessage\">Your message has been sent. Thank you!</div>\n        <div id=\"errormessage\"></div>\n        <form action=\"\" method=\"post\" role=\"form\" class=\"contactForm\">\n          <div class=\"form-group\">\n            <input type=\"text\" name=\"name\" class=\"form-control\" id=\"name\" placeholder=\"Your Name\" data-rule=\"minlen:4\" data-msg=\"Please enter at least 4 chars\" />\n            <div class=\"validation\"></div>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"Your Email\" data-rule=\"email\" data-msg=\"Please enter a valid email\" />\n            <div class=\"validation\"></div>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" name=\"subject\" id=\"subject\" placeholder=\"Subject\" data-rule=\"minlen:4\" data-msg=\"Please enter at least 8 chars of subject\" />\n            <div class=\"validation\"></div>\n          </div>\n          <div class=\"form-group\">\n            <textarea class=\"form-control\" name=\"message\" rows=\"5\" data-rule=\"required\" data-msg=\"Please write something for us\" placeholder=\"Message\"></textarea>\n            <div class=\"validation\"></div>\n          </div>\n\n          <div class=\"text-center\"><button type=\"submit\" class=\"btn btn-theme btn-block btn-md\">Send Message</button></div>\n        </form>\n        <hr class=\"colorgraph\">\n\n      </div>\n    </div>\n  </div>\n</section>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet__ = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_leaflet__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
        var map = __WEBPACK_IMPORTED_MODULE_1_leaflet__["map"]('map').setView([51.505, -0.09], 13);
        map.panTo(new __WEBPACK_IMPORTED_MODULE_1_leaflet__["LatLng"](11.7058906, 75.5333635));
        __WEBPACK_IMPORTED_MODULE_1_leaflet__["tileLayer"]('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        // L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        //   attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        // }).addTo(map);
        var myIcon = __WEBPACK_IMPORTED_MODULE_1_leaflet__["icon"]({
            iconUrl: 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/map-marker-icon.png',
            iconSize: [40, 40],
            iconAnchor: [22, 94],
            popupAnchor: [-3, -76],
        });
        __WEBPACK_IMPORTED_MODULE_1_leaflet__["marker"]([11.706751, 75.536667], { icon: myIcon }).addTo(map)
            .bindPopup('Af de Mahe')
            .openPopup();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('gmap'),
        __metadata("design:type", Object)
    ], ContactComponent.prototype, "gmapElement", void 0);
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/courses/courses.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/courses/courses.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<body>\n\n<div id=\"wrapper\">\n  <!-- start header -->\n  <section id=\"content\">\n\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <h2 class=\"text-center\">Our <span class=\"highlight\"> Courses</span></h2>\n          <p>Click on the Course name for detail info.</p>\n          <div class=\"panel-group\" id=\"accordion\">\n            <div class=\"panel panel-default\" style=\"margin-top: 20px;\" *ngFor=\"let course of courses|async let number=index\"  (click)=\"split(course,number)\" >\n              <div class=\"panel-heading\">\n                <h4 class=\"panel-title\" style=\"padding-top: 11px;\">\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse{{number}}\">{{ course.title }}</a>\n                </h4>\n              </div>\n              <div id=\"collapse{{number}}\" class=\"panel-collapse collapse \"  >\n                <ul *ngFor=\"let str of splited\">\n                  <li *ngIf=\"str!=''\" style=\"padding-top: 10px;\">{{ str }}</li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section id=\"content1\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-\">\n          <h2 class=\"text-center\">Our <span class=\"highlight\">Activities</span></h2>\n          <br>\n          <ul *ngFor=\"let activity of activities|async let number=index\">\n            <li><h4>{{ activity.title }}</h4></li>\n\n          </ul>\n        </div>\n      </div>\n    </div>\n  </section>\n\n</div>\n<a href=\"#\" class=\"scrollup\"><i class=\"fa fa-angle-up active\"></i></a>\n</body>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/courses/courses.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CoursesComponent = /** @class */ (function () {
    function CoursesComponent(db) {
        this.db = db;
        this.courses = db.list('/courses').valueChanges();
        this.activities = db.list('/activities').valueChanges();
        // this.courses = db.object('/events').valueChanges();
        // console.log(JSON.stringify(this.courses));
        // const leavedate = this.db.collection('/events');
        // console.log(leavedate);
    }
    CoursesComponent.prototype.ngOnInit = function () {
    };
    CoursesComponent.prototype.split = function (input, number) {
        this.string = input.desc;
        // this.email.Tos.split(",");
        this.splited = this.string.split(".");
        debugger;
        this.length = number;
        console.log(this.splited);
        console.log(this.length);
    };
    CoursesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-courses',
            template: __webpack_require__("../../../../../src/app/courses/courses.component.html"),
            styles: [__webpack_require__("../../../../../src/app/courses/courses.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], CoursesComponent);
    return CoursesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/events/events.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/events/events.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n\n<body>\n\n<section id=\"content\">\n  <div class=\"container\"  *ngFor=\"let course of courses|async let number=index\">\n    <div class=\"row\">\n      <div class=\"col-lg-8\">\n\n        <article>\n          <h3>{{course.title}}</h3>\n          <img src={{course.url}} alt=\"\" class=\"img-responsive\" />\n\n          <p>\n            {{course.descr}}\n          </p>\n          <div class=\"bottom-article\">\n            <ul class=\"meta-post\">\n              <!--<li><i class=\"fa fa-calendar\"></i><a href=\"#\">{{course.descr}}</a></li>-->\n            </ul>\n          </div>\n        </article>\n      </div>\n    </div>\n\n\n  </div>\n</section>\n\n<a href=\"#\" class=\"scrollup\"><i class=\"fa fa-angle-up active\"></i></a>\n\n\n\n</body>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/events/events.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventsComponent = /** @class */ (function () {
    function EventsComponent(db) {
        this.db = db;
        this.courses = db.list('/events').valueChanges();
    }
    EventsComponent.prototype.ngOnInit = function () {
    };
    EventsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-events',
            template: __webpack_require__("../../../../../src/app/events/events.component.html"),
            styles: [__webpack_require__("../../../../../src/app/events/events.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-3 col-lg-3\">\n        <div class=\"widget\">\n          <h4>Get in touch with us</h4>\n          <address>\n            <strong>Alliance Française de Mahe</strong>\n            <br>\n            Nainas Complex\n            <br>\n            Hareeswara Temple Road,\n            <br>\n            Near Old Post Office,\n            <br>\n            Mundock, Mahe-673310\n          </address>\n          <p>\n            <i class=\"icon-phone\"></i> (0490) 2337418 <br>\n            <i class=\"icon-phone\"></i> (91) 9947588432<br>\n            <i class=\"icon-phone\"></i> (91) 9447517046<br>\n\n            <i class=\"icon-envelope-alt\"></i> afdemaheinde@gmail.com\n          </p>\n        </div>\n      </div>\n      <div class=\"col-sm-3 col-lg-3\">\n        <div class=\"widget\">\n          <h4>Information</h4>\n          <ul class=\"social-network\">\n            <li><a href=\"https://www.facebook.com/afmahe/\" data-placement=\"top\" title=\"Facebook\"><i class=\"fa fa-facebook\"></i></a></li>\n            <li><a href=\"#\" data-placement=\"top\" title=\"Twitter\"><i class=\"fa fa-twitter\"></i></a></li>\n            <li><a href=\"#\" data-placement=\"top\" title=\"Linkedin\"><i class=\"fa fa-linkedin\"></i></a></li>\n            <li><a href=\"#\" data-placement=\"top\" title=\"Pinterest\"><i class=\"fa fa-pinterest\"></i></a></li>\n            <li><a href=\"#\" data-placement=\"top\" title=\"Google plus\"><i class=\"fa fa-google-plus\"></i></a></li>\n          </ul>\n        </div>\n\n      </div>\n      <div class=\"col-sm-3 col-lg-3\">\n        <div class=\"widget\">\n          <h4>Pages</h4>\n          <ul class=\"link-list\">\n            <li><a href=\"#\">Press release</a></li>\n            <li><a href=\"#\">Terms and conditions</a></li>\n            <li><a href=\"#\">Privacy policy</a></li>\n            <li><a href=\"#\">Career center</a></li>\n            <li><a href=\"#\">Contact us</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-sm-3 col-lg-3\">\n        <div class=\"widget\">\n          <h4>Newsletter</h4>\n          <p>Fill your email and sign up for monthly newsletter to keep updated</p>\n          <div class=\"form-group multiple-form-group input-group\">\n            <input type=\"email\" name=\"email\" class=\"form-control\">\n            <span class=\"input-group-btn\">\n                            <button type=\"button\" class=\"btn btn-theme btn-add\">Subscribe</button>\n                        </span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div id=\"sub-footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-6\">\n        </div>\n        <div class=\"col-lg-6\">\n          <p (click)=\"navigate()\" style=\"float:right\"><strong>Alliance Française de Mahe</strong></p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n</footer>\n\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterComponent = /** @class */ (function () {
    function FooterComponent(router, appservice) {
        this.router = router;
        this.appservice = appservice;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.navigate = function () {
        this.router.navigateByUrl('/login');
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*::ng-deep .ngx-gallery-center{*/\r\n  /*!*bottom: 120px !important;*!*/\r\n  /*top : 0 !important;*/\r\n  /*bottom: 0 !important;*/\r\n\r\n/*}*/\r\n#content img {\r\n  margin-bottom: 0 !important;\r\n}\r\n::ng-deep ngx-gallery-thumbnails {\r\nposition: absolute !important;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n\n\n\n<div id=\"wrapper\">\n\n\n  <section id=\"content\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <h4 class=\"heading\">Gallery</h4>\n          <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\" ></ngx-gallery>\n        </div>\n      </div>\n    </div>\n  </section>\n\n</div>\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_gallery__ = __webpack_require__("../../../../ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_gallery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ngx_gallery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(db, appservice) {
        // db.list('/photos/').snapshotChanges().map(list =>list.length).subscribe(length=> {
        //   this.rows = Math.floor(length/5) + 1;
        //   console.log("local" + this.rows);
        // });
        this.db = db;
        this.appservice = appservice;
        this.i = 0;
        this.itemsRef = db.list('/photos/');
        // this.db.list('/photos').map(list=>list.length).subscribe(length=>console.log("hello" + length))
        this.galleryImages = [];
        this.galleryOptions = [];
    }
    GalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.db.list('/photos/').snapshotChanges().map(function (list) { return list.length; }).subscribe(function (length) {
            _this.rows = Math.floor(length / 5) + 1;
        });
        this.accCheck();
    };
    GalleryComponent.prototype.getGalleryOptions = function () {
        var _this = this;
        this.db.list('/photos/').snapshotChanges().map(function (list) { return list.length; }).subscribe(function (length) {
            _this.rows = Math.floor(length / 5) + 1;
        });
        // this.rows = Math.floor(this.i/5) + 1;
        // console.log("length" +this.rows);
        this.galleryOptions = [
            {
                image: false,
                width: '100%',
                height: '400px',
                thumbnailsRows: this.appservice.rows,
                thumbnailsColumns: 5,
                imageDescription: true,
                // fullWidth: true,
                imageAnimation: __WEBPACK_IMPORTED_MODULE_1_ngx_gallery__["NgxGalleryAnimation"].Slide,
            },
            // max-width 800
            {
                thumbnailsRows: this.rows,
                thumbnailsColumns: 5,
                breakpoint: 800,
                width: '200px',
                height: '300px',
                imagePercent: 80,
                thumbnailsPercent: 100,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];
    };
    GalleryComponent.prototype.accCheck = function () {
        var _this = this;
        this.itemsRef.snapshotChanges(['child_added'])
            .subscribe(function (actions) {
            actions.forEach(function (action) {
                _this.photoList = Object.values(action.payload.val());
                _this.getGalleryImages((action.payload.val()));
            });
        });
        this.getGalleryOptions();
        // this.getGalleryOptions();
    };
    GalleryComponent.prototype.getGalleryImages = function (input) {
        // this.galleryImages[this.i].small=input.url;
        this.galleryImages.push({
            small: input.url,
            big: input.url,
            description: input.title
        });
        this.i++;
        // console.log("length" + this.i);
        // this.getGalleryOptions();
    };
    GalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__("../../../../../src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* AppService */]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pointer {cursor: pointer;}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n\n  <div class=\"navbar navbar-default navbar-static-top\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\"  (click)=\"navTab(0)\" ><img src=\"../../assets/img/logo.png\" alt=\"\" width=\"199\" height=\"66\" /></a>\n      </div>\n      <div class=\"navbar-collapse collapse\" style=\"padding-bottom:10px\">\n        <ul class=\"nav navbar-nav\">\n          <li class=\"dropdown active pointer\">\n            <a  (click)=\"navTab(0)\">Home</a>\n          </li>\n          <li><a class=\"pointer\" (click)=\"navTab(1)\">Courses</a></li>\n          <li><a class=\"pointer\" (click)=\"navTab(2)\">Gallery</a></li>\n          <li><a class=\"pointer\" (click)=\"navTab(3)\">Events</a></li>\n          <li><a class=\"pointer\" (click)=\"navTab(4)\">Contact</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, db, appservice) {
        this.router = router;
        this.db = db;
        this.appservice = appservice;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.db.list('/photos/').snapshotChanges().map(function (list) { return list.length; }).subscribe(function (length) { return _this.appservice.rows = Math.floor(length / 5) + 1; });
    };
    HeaderComponent.prototype.navTab = function (input) {
        if (input === 0) {
            this.router.navigateByUrl('/home');
        }
        if (input === 1) {
            this.router.navigateByUrl('/courses');
        }
        if (input === 2) {
            this.router.navigateByUrl('/gallery');
        }
        if (input === 3) {
            this.router.navigateByUrl('/events');
        }
        if (input === 4) {
            this.router.navigateByUrl('/contacts');
        }
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* AppService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n\n\n\n<div id=\"wrapper\">\n  <!-- start header -->\n\n  <!-- end header -->\n  <section id=\"featured\" class=\"bg\">\n    <!-- start slider -->\n\n\n    <!-- start slider -->\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <!-- Slider -->\n          <div id=\"main-slider\" class=\"main-slider flexslider\">\n            <slideshow [height]=\"height\"\n                       [autoPlay]=\"true\"\n                       [showArrows]=\"true\"\n                       [imageUrls]=\"imageUrls\"\n                       [lazyLoad]=\"imageUrls?.length > 1\"\n                       [autoPlayWaitForLazyLoad]=\"true\">\n            </slideshow>\n          </div>\n          <!-- end slider -->\n        </div>\n      </div>\n    </div>\n\n\n  </section>\n  <section class=\"callaction\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-8\">\n          <div class=\"cta-text\">\n            <h2>Welcome to <span>Alliance Française</span> de Mahe</h2>\n            <p> Check out AF Mahe Alerts here!</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section id=\"content\">\n\n\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"about-content\">\n            <h2 class=\"text-center\">About our <span class=\"highlight\">Organisation</span></h2>\n            <br>\n            <h3><strong>AllianceFrancaise de Mahe</strong> </h3>\n            <p>\n              Alliance Francaise de Mahe was started originally as a Centre for the\n              study of French language on the <strong> 1st of May 1982 </strong>. It was then an\n              affiliated unit of the Alliance Francaise of Pondicherry.\n              From <strong> 5th Ocober 2000 Alliance Francaise Mahe became an independent\n              member of the International Alliance Francaise family </strong> with due\n              recognition from the Secretary General of Alliance Francaise, Paris.\n              We have at present 209 members on our rolls out of which 101 are Life-members.\n              This Institution is situated at present on the Old Post Office Road,\n              Mundock Mahe.\n            </p>\n            <br>\n            <h3>Aims and Objectives : </h3>\n            <p>\n              The AF basically aims to teach the French language and prepare\n              students to acquire proficiency in the language at various levels.\n              It also imparts coaching for International Competitive exams like\n              DELF to help students to seek opportunities for higher education and\n              employment in Francophone countries.\n            </p>\n            <p>\n              The AF strives to promote friendship and harmony among nations through\n              dissemination of French culture and liberal values\n              The <strong>French National Day, July 14th </strong>is celebrated every year at this Centre\n              Screening of classic films in French and Indian languages is always encouraged.\n              AF seeks to nurture the flair for music and fine arts among its members.\n              Painting exhibitions are held and reputed artists are invited to visit\n              the Centre, demonstrate their skill and interact with our students and\n              members.\n            </p>\n            <p>\n              With this end in view music festivals are held annually to motivate\n              students to participate in the `French Nightingale' contest held at\n              the national level.\n            </p>\n            <p>\n              Literary and oratorical skills in French are encouraged through healthy competition among the students.\n            </p>\n            <p>\n              An Annual book exhibition by name <strong>` Lire en fete'</strong> is held to reinforce\n              the reading habit among the youth.\n              A well-stacked library with around 2260 titles in French language is a\n              valuable resource of this Centre..\n              We have an impressive collection of audio- video equipment for the\n              benefit of the teachers and the taught.\n            </p>\n            <p>\n            <p>\n              Our <strong>founder-President Prof. Palery Damodaran </strong>, the former Chief\n              Educational Officer of Mahe was a legendary figure who continues to\n              inspire us till today. He was a doyen of English education in Mahe who\n              later turned to popularising French education in Mahe with an\n              evangelizing zeal\n              It was as a consequence of his untiring efforts that Alliance\n              Francaise Mahe has blossomed into a full-fledged Centre for French\n              studies.\n              Some of the stalwarts who had served this institution with credit are\n              remembered with deep gratitude. Some of them are no more but their\n              contribution lives through the students they had helped to mould for\n              life.\n              <strong>\n                Mr. Kayanadath Raghavan\n                Mr. V. P. Divakaran\n                Mr.N. Purushothaman\n                Mr. V.P. Balachandran\n                Mr. Pandaradathil Ravindranathan\n                Mr. Maniyambath Raghavan\n              </strong>\n              and many more..\n\n              The list above is far from complete and we pay our humble homage to\n              the sacred memory of all those self-less souls who had contributed\n              their mite to raise this Centre of learning and culture to its present\n              stature.\n            <p>\n              The present set of officers-bearers keeps the banner of Alliance\n              Francaise Mahe flying full mast under the dynamic leadership of\n            </p>\n            <strong>\n              <ul>\n                <li>Adv. Syra Satheesh - President</li>\n                <li>Mr. Adiery kanakarajan - Vice-president</li>\n                <li>Mr. M. Sivadas - Secretary</li>\n                <li>Mrs. Ajita Cacatte - Treasurer</li>\n              </ul>\n            </strong>\n            <p>\n              Rest of present committee members are\n            </p>\n            <ul>\n              <li>Mr. Uthamaraj</li>\n              <li>Mr. K. B. Mammootty</li>\n              <li>Mr. Dr Antony Fernandez</li>\n              <li>Mr. A. Gangadharan</li>\n              <li>Mr. E. N. Viswanathan</li>\n              <li>Mr. T. Ramesh</li>\n              <li>Mrs. C. E. Rasitha</li>\n            </ul>\n\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- divider -->\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"blankline\">\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- end divider -->\n\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"text-center\">\n            <h2>Our <span class=\"highlight\">Courses</span> and <span class=\"highlight\">Activities</span></h2>\n            <br>\n            <p>We have a wide range of short courses and qualification courses, activities, events, MakerSpaces and social groups.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"row\">\n            <div class=\"col-sm-3 col-md-3 col-lg-3\">\n              <div class=\"box\">\n                <div class=\"aligncenter\">\n                  <div class=\"icon\">\n                    <i class=\"fa fa-book fa-5x\"></i>\n                  </div>\n                  <h4>Library of French books</h4>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-3 col-md-3 col-lg-3\">\n              <div class=\"box\">\n                <div class=\"aligncenter\">\n                  <div class=\"icon\">\n                    <i class=\"fa fa-graduation-cap fa-5x\"></i>\n                  </div>\n                  <h4>Classes in French cuisine</h4>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-3 col-md-3 col-lg-3\">\n              <div class=\"box\">\n                <div class=\"aligncenter\">\n                  <div class=\"icon\">\n                    <i class=\"fa fa-language fa-5x\"></i>\n                  </div>\n                  <h4>Translation services</h4>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-3 col-md-3 col-lg-3\">\n              <div class=\"box\">\n                <div class=\"aligncenter\">\n                  <div class=\"icon\">\n                    <i class=\"fa fa-file-image-o fa-5x\"></i>\n                  </div>\n                  <h4>Cultural Fest</h4>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- divider -->\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"blankline\">\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- end divider -->\n\n    <!-- parallax  -->\n    <div id=\"parallax1\" class=\"parallax text-light text-center marginbot50\" data-stellar-background-ratio=\"0.5\">\n      <div class=\"container\">\n        <div class=\"row appear stats\">\n          <div class=\"col-lg-9\">\n            <div class=\"cta-btn\">\n              <a href=\"http://afmagazine.in/home/\" target=\"_blank\" class=\"btn btn-theme btn-lg\">Grab it now <i class=\"fa fa-angle-right\"></i></a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n\n    <!-- divider -->\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"solidline\">\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n\n    <!-- divider -->\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"solidline\">\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- end divider -->\n\n    <!-- clients -->\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-xs-6 col-md-3 aligncenter client\">\n          <img alt=\"logo\" src=\"../../assets/img/clients/logo1.png\" class=\"img-responsive imagealigncenter\" />\n        </div>\n\n        <div class=\"col-xs-6 col-md-3 aligncenter client\">\n          <img alt=\"logo\" src=\"../../assets/img/clients/logo2.png\" class=\"img-responsive imagealigncenter\" />\n        </div>\n\n        <div class=\"col-xs-6 col-md-3 aligncenter client\">\n          <img alt=\"logo\" src=\"../../assets/img/clients/logo3.png\" class=\"img-responsive imagealigncenter\" />\n        </div>\n\n        <div class=\"col-xs-6 col-md-3 aligncenter client\">\n          <img alt=\"logo\" src=\"../../assets/img/clients/logo4.png\" class=\"img-responsive imagealigncenter\" />\n        </div>\n\n      </div>\n    </div>\n\n  </section>\n\n</div>\n<a href=\"#\" class=\"scrollup\"><i class=\"fa fa-angle-up active\"></i></a>\n\n\n\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(db, appservice) {
        this.db = db;
        this.appservice = appservice;
        this.imageUrls = [
            { url: '../../assets/img/slides/flexslider/5.jpg' },
            { url: '../../assets/img/slides/flexslider/1.jpg' },
            { url: '../../assets/img/slides/flexslider/2.jpg' },
            { url: './../assets/img/slides/flexslider/3.jpg' },
        ];
        this.height = '400px';
        this.arrowSize = '30px';
        this.showArrows = true;
        this.disableSwiping = false;
        this.autoPlay = true;
        this.autoPlayInterval = 3333;
        this.stopAutoPlayOnSlide = true;
        this.debug = true;
        this.backgroundSize = 'cover';
        this.backgroundPosition = 'center center';
        this.backgroundRepeat = 'no-repeat';
        this.showDots = true;
        this.dotColor = '#FFF';
        this.showCaptions = true;
        this.captionColor = '#FFF';
        this.captionBackground = 'rgba(0, 0, 0, .35)';
        this.lazyLoad = false;
        this.width = '100%';
    }
    // public imagesUrl;
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.db.list('/photos/').snapshotChanges().map(function (list) { return list.length; }).subscribe(function (length) { return _this.appservice.rows = Math.floor(length / 5) + 1; });
        // this.imagesUrl = [
        //   '../../assets/img/slides/flexslider/1.jpg',
        //   '../../assets/img/slides/flexslider/2.jpg',
        //   './../assets/img/slides/flexslider/3.jpg',
        // ];
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body { padding: 2em; }\r\n\r\n\r\n/* Shared */\r\n.loginBtn {\r\n  box-sizing: border-box;\r\n  position: relative;\r\n  /* width: 13em;  - apply for fixed size */\r\n  margin: 0.2em;\r\n  padding: 0 15px 0 46px;\r\n  border: none;\r\n  text-align: left;\r\n  line-height: 34px;\r\n  white-space: nowrap;\r\n  border-radius: 0.2em;\r\n  font-size: 16px;\r\n  color: #FFF;\r\n}\r\n.loginBtn:before {\r\n  content: \"\";\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 34px;\r\n  height: 100%;\r\n}\r\n.loginBtn:focus {\r\n  outline: none;\r\n}\r\n.loginBtn:active {\r\n  box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);\r\n}\r\n\r\n\r\n/* Google */\r\n.loginBtn--google {\r\n  /*font-family: \"Roboto\", Roboto, arial, sans-serif;*/\r\n  background: #DD4B39;\r\n}\r\n.loginBtn--google:before {\r\n  border-right: #BB3F30 1px solid;\r\n  /*background: url('../../assets/img/googlelogo.png') 6px 6px no-repeat;*/\r\n}\r\n.loginBtn--google:hover,\r\n.loginBtn--google:focus {\r\n  background: #E74B37;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"google-login-page \">\n  <div style=\"font-weight:100;font-size:20px; text-align:center;background-color: white;padding-top: 200px;padding-bottom: 200px; \">\n    <!--<img *ngIf=\"!email\" src=\"assets\\img\\googlelogo.png\" class=\"w3-img\"style=\"width:2%;margin-top:10px\">-->\n    <!--<br />-->\n    <!--<div class=\"w3-btn \" *ngIf=\"!email\" id=\"google-login-button\" (click)=\"googleAuthenticate()\">-->\n      <!--Sign-In</div>-->\n    <button *ngIf=\"!email\"  id=\"google-login-button\" class=\"loginBtn loginBtn--google\" (click)=\"googleAuthenticate()\">\n      Login with Google\n    </button>\n    <button *ngIf=\"!email\"  id=\"google-login-button1\" class=\"loginBtn loginBtn--google\" (click)=\"logout()\">\n      Log Out\n    </button>\n\n    <!--<div class=\"panel-group\" *ngFor=\"let course of adminlevel|async\">-->\n      <!--<div class=\"panel panel-default\">-->\n        <!--<div class=\"panel-heading\">-->\n          <!--<h4 class=\"panel-title\" >-->\n            <!--<a data-toggle=\"collapse\" href=\"#collapse1\">{{ course.email}}</a>-->\n          <!--</h4>-->\n        <!--</div>-->\n        <!--<div id=\"collapse1\" class=\"panel-collapse collapse\">-->\n          <!--<ul class=\"list-group\">-->\n            <!--<li class=\"list-group-item\">One</li>-->\n          <!--</ul>-->\n          <!--<div class=\"panel-footer\">Footer</div>-->\n        <!--</div>-->\n      <!--</div>-->\n    <!--</div>-->\n\n    <div *ngIf=\"email\" class=\"w3-animate-zoom-slow\">\n      <img src=\"{{imageURL}}\" style=\"border-radius:100%;width:30%; margin:10px 10px 10px 5px\" >\n      <!-- <img *ngIf=\"email\" src=\"assets\\img\\logo.png\" class=\"w3-img\"style=\"z-index: 1;\n      width: 8%;\n      margin-left: -35px;\n      margin-bottom: 50px;\"> -->\n      <div style=\" text-align:center\">{{name}}\n      </div>\n      <button class=\"w3-btn btn-danger \" style=\"font-weight:100;font-size:20px\" (click)=\"logout()\">Logout</button>\n    </div>\n    <!-- <b>TOKEN: </b>\n    <p>{{token}}</p> -->\n    <!-- <b>NAME: </b> -->\n\n    <!-- <b>EMAIL: </b> -->\n    <!-- <p>{{email}}</p> -->\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_google_login__ = __webpack_require__("../../../../angular2-google-login/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, zone, af, router, appservice) {
        var _this = this;
        this.auth = auth;
        this.zone = zone;
        this.af = af;
        this.router = router;
        this.appservice = appservice;
        this.loginacc = "";
        this.adminacc = "";
        this.empacc = "";
        this.i = 0;
        this.admin = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.gId = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.googleAuthenticate();
        // this.adminlevel = af.list('/adminlevel/emai');
        this.itemsRef = af.list('/adminlevel/');
        af.object('/adminlevel/').snapshotChanges().map(function (action) {
            var $key = action.payload.key;
            _this.adminlevel1 = af.list('/adminlevel/');
            _this.adminlevel = _this.adminlevel1.valueChanges();
            _this.adminlevel = _this.adminlevel1.snapshotChanges().map(function (changes) {
                return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
            });
            // this.adminlevel.subscribe(
            //   competitors => {
            //     competitors.map(competitor =>
            //       this.adminList = competitor.email
            //     );
            //   });
            var data = __assign({ $key: $key }, action.payload.val());
            console.log(_this.adminList);
            console.log(_this.adminlevel1);
            // this.adminList = af.list('/adminlevel' + data.$key);
            return data;
        }).subscribe(function (item) { return console.log(item.$key); });
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_angular2_google_login__["a" /* AppGlobals */].GOOGLE_CLIENT_ID = '129368052704-pfa1ockbgq5slqp0g3qkv7hr8kj8a4ek.apps.googleusercontent.com';
        setTimeout(function () { _this.googleAuthenticate(); }, 50);
    };
    LoginComponent.prototype.googleAuthenticate = function () {
        var _this = this;
        this.auth.authenticateUser(function (result) {
            _this.zone.run(function () {
                _this.getData();
            });
        });
    };
    LoginComponent.prototype.getData = function () {
        this.token = localStorage.getItem('token');
        this.imageURL = localStorage.getItem('image');
        this.name = localStorage.getItem('name');
        this.email = localStorage.getItem('email');
        this.gId.emit(this.email);
        this.accCheck();
        console.log(this.email);
        console.log(this.adminList);
        // this.gId.emit(this.email);
        this.accCheck();
        // Path=this.email.slice(0, -4);
    };
    LoginComponent.prototype.accCheck = function () {
        var _this = this;
        console.log(this.adminList);
        this.itemsRef.snapshotChanges(['child_added'])
            .subscribe(function (actions) {
            actions.forEach(function (action) {
                console.log(action.type);
                console.log(action.key);
                console.log(action.payload.val());
                _this.adminList = Object.values(action.payload.val());
                console.log(action.payload.val().email);
                console.log(_this.adminList);
                if (_this.email == action.payload.val().email) {
                    _this.adminacc = 'admin';
                    _this.appservice.warning = true;
                    _this.router.navigateByUrl('/adddata');
                    _this.admin.emit(_this.adminacc);
                    return;
                }
            });
        });
        // this.af.list('/adminlevel/', { preserveSnapshot: true}).subscribe(snapshots=>{
        //   snapshots.forEach(snapshot => {
        //     if(this.email == snapshot.val()){
        //       this.adminacc = 'admin';
        //       debugger;
        //       this.router.navigateByUrl('/adddata');
        //       this.admin.emit(this.adminacc);
        //       return;
        //     }
        //   });
        //   if(this.adminacc!="admin" && this.empacc=="no"){
        //     console.log("Invalid user");
        //     this.logout();
        //   }
        //   else if(this.empacc=="employee" && this.adminacc!="admin"){
        //     this.admin.emit(this.empacc);
        //   }
        // });
    };
    LoginComponent.prototype.logout = function () {
        // redirection path defined in auth.services.ts --> userLogout()
        var scopeReference = this;
        this.auth.userLogout(function () {
            scopeReference.clearLocalStorage();
        });
    };
    LoginComponent.prototype.clearLocalStorage = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('image');
        localStorage.removeItem('name');
        localStorage.removeItem('email');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], LoginComponent.prototype, "admin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], LoginComponent.prototype, "gId", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_google_login__["b" /* AuthService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* AppService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/upload.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Upload; });
var Upload = /** @class */ (function () {
    function Upload(file) {
        this.createdAt = new Date();
        this.file = file;
    }
    return Upload;
}());



/***/ }),

/***/ "../../../../../src/app/uploadphoto.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadphotoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_storage__ = __webpack_require__("../../../../angularfire2/storage/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadphotoService = /** @class */ (function () {
    function UploadphotoService(af, db) {
        this.af = af;
        this.db = db;
        this.basePath = '/photos';
    }
    UploadphotoService.prototype.pushUpload = function (upload) {
        var _this = this;
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        var uploadTask = storageRef.child(this.basePath + "/" + upload.file.name).put(upload.file);
        uploadTask.on(__WEBPACK_IMPORTED_MODULE_2_firebase__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
            upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
            console.log(upload.progress);
        }, function (error) {
            // upload failed
            console.log(error);
        }, function () {
            // upload success
            upload.url = uploadTask.snapshot.downloadURL;
            upload.name = upload.file.name;
            upload.title = _this.title;
            _this.saveFileData(upload);
            console.log(upload.url);
        });
    };
    // Writes the file details to the realtime db
    UploadphotoService.prototype.saveFileData = function (upload) {
        this.db.list(this.basePath + "/").push(upload);
    };
    UploadphotoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_storage__["a" /* AngularFireStorage */], __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], UploadphotoService);
    return UploadphotoService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../angular2-google-login/node_modules/@angular/core/src/linker lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../angular2-google-login/node_modules/@angular/core/src/linker lazy recursive";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map