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

module.exports = "p {\n    display: inline-block;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Restful CRUD</h1>\n<!-- waiting for a click on the button, which will invoke the getAll function in the class (aka component's .ts)file -->\n<form (submit)=\"onSubmit()\">\n  <!-- use the json pipe to see how newTask changes in real time -->\n  <!--<p> {{ newTask | json }} </p>-->\n  <input type=\"text\" name=\"newTask.title\" [(ngModel)]=\"newTask.title\" />\n  <input type=\"text\" name=\"newTask.description\" [(ngModel)]=\"newTask.description\" />\n  <input type=\"submit\" value=\"Create Task\" />\n</form>\n\n<button (click)=\"getAll()\">Click me to get all tasks</button>\n<!-- Be able to read all the JSON data in the task object -->\n{{task | json}}\n<!-- Loop through an array of tasks, calling each task t -->\n<div *ngFor=\"let t of tasks\">\n  <!-- Display each task's title -->\n<p>{{t.title}}</p>\n<!-- a button click will invoke getOne and pass it the task's _id and define what selectedTask is-->\n<button (click)=\"getOne(t._id)\">Display task details</button>\n<button (click)=\"editTask(t._id)\">Edit</button>\n<div *ngIf=\"TaskEdit\">\n  <!-- display the title and description of the selectedTask -->\n  <form (submit)=\"onSubmitedit()\">\n    <!-- use the json pipe to see how newTask changes in real time -->\n    <!--<p> {{ newTask | json }} </p>-->\n    <input type=\"text\" name=\"editThisTask.title\" [(ngModel)]=\"editThisTask.title\" />\n    <input type=\"text\" name=\"editThisTask.description\" [(ngModel)]=\"editThisTask.description\" />\n    <input type=\"submit\" value=\"Edit\" />\n    <button (click)=\"editSave(t._id, data)\">Edit</button>\n    \n  </form>\n\n</div>\n\n<button (click)=\"deleteTask(t._id)\">Delete</button>\n\n\n<!-- alternatively, this button also listens for a click and invokes choose() and passes it the entire task -->\n<button (click)=\"choose(t)\">Choose a task</button>\n</div>\n<!-- check if selectedTask exists - -->\n<div *ngIf=\"selectedTask\">\n  <!-- display the title and description of the selectedTask -->\n  <p>Task Details</p><br>\n  <p>{{selectedTask.title}}</p>\n  <p>{{selectedTask.description}}</p>\n</div>\n<div *ngIf=\"TaskDelete\">\n  <!-- display the title and description of the selectedTask -->\n  <p>The below task has been successfully deleted <p>\n  <p>{{TaskDelete.title}}</p>\n  <p>{{TaskDelete.description}}</p>\n  \n</div>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
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
    // dependency injection - this is how our component will talk to the model (the service)
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        // declare the tasks property to be an array - it will be reassigned when we get data from the server
        this.tasks = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.getOne("5a7c8edfe2c0e253ad3e4a2b");
        this.newTask = { title: "", description: "" };
    };
    AppComponent.prototype.onSubmit = function () {
        // Code to send off the form data (this.newTask) to the Servicecopy
        //this.newTask = { title: this.newTask.title, description: this.newTask.description }
        this.addTask(this.newTask);
        // Reset this.newTask to a new, clean object.
        this.newTask = { title: "", description: "" };
    };
    AppComponent.prototype.onSubmitedit = function () {
        // Code to send off the form data (this.newTask) to the Servicecopy
        // this.editThisTask = { title: this.editThisTask.title, description: this.editThisTask.description }
        //this.editThisTask = { title: this.newTask.title, description: this.newTask.description }
        // this.editTask(,this.editThisTask)
        // Reset this.newTask to a new, clean object.
        this.editThisTask = { title: "", description: "" };
    };
    AppComponent.prototype.addTask = function (newTask) {
        var obs = this._httpService.addTask(newTask);
        obs.subscribe(function (res) {
            console.log("sucessfully added task", res);
        });
    };
    AppComponent.prototype.editTask = function (id, data) {
        var _this = this;
        var obs = this._httpService.editTask(id, data);
        obs.subscribe(function (res) {
            if (res['message'] == "Success") {
                _this.TaskEdit = res['task'];
            }
            else {
                console.log("sucessfully deleted task", res);
            }
        });
    };
    AppComponent.prototype.deleteTask = function (id) {
        var _this = this;
        var obs = this._httpService.deleteTask(id);
        obs.subscribe(function (res) {
            if (res['message'] == "Success") {
                _this.TaskDelete = res['task'];
            }
            else {
                console.log("sucessfully deleted task", res);
            }
        });
    };
    // user picks one task without another request to the server
    AppComponent.prototype.choose = function (task) {
        this.selectedTask = task;
    };
    // user picks one and it uses the id to make a request to the server
    AppComponent.prototype.getOne = function (id) {
        var _this = this;
        var obs = this._httpService.getOne(id);
        obs.subscribe(function (res) {
            console.log("Got a response from get one", res);
            if (res['message'] == "Success") {
                _this.selectedTask = res['task'];
            }
            else {
                console.log("Error getting one task");
            }
        });
    };
    // get all the data
    AppComponent.prototype.getAll = function () {
        var _this = this;
        // make the variable 'observable' and assign it to whatever is returned by the getAll method in the service
        var observable = this._httpService.getAll();
        // subscribe to the observable
        observable.subscribe(function (res) {
            // check if the response has a message of "success"
            if (res['message'] == "Success") {
                console.log("We got a success");
                // assign our property of tasks to the array in the response
                _this.tasks = res['tasks'];
            }
            else {
                console.log("There was an error", res['error']);
            }
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [
                _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
    // give our service the module so that we can perform HTTP requests
    function HttpService(_http) {
        this._http = _http;
        console.log("Service is working");
    }
    // makes a request to the server on route /tasks
    HttpService.prototype.getAll = function () {
        return this._http.get('/tasks');
    };
    // makes a request to the server on route /task/:id
    HttpService.prototype.getOne = function (id) {
        return this._http.get("/task/" + id);
    };
    HttpService.prototype.addTask = function (newtask) {
        return this._http.post('/task', newtask);
    };
    HttpService.prototype.editTask = function (id, data) {
        return this._http.put("/task/" + id, data);
    };
    HttpService.prototype.deleteTask = function (id) {
        return this._http.delete("/task/" + id);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
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

module.exports = __webpack_require__(/*! /Users/bettychina/Documents/MEAN/ANGULAR/restful_crud/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map