(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-bar></app-nav-bar>\r\n<router-outlet></router-outlet>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"authContainer\">\r\n  <h3>Log In</h3>\r\n  <hr>\r\n  <form [formGroup]=\"formGrp\" (submit)=\"onSubmission()\" >\r\n      <div class=\"form-group\">\r\n        <label for=\"email\">Email address</label>\r\n        <input type=\"email\" class=\"form-control\" id=\"email\"  placeholder=\"Enter email\"\r\n         formControlName=\"email\"\r\n        >\r\n        <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"password\">Password</label>\r\n        <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\"\r\n        formControlName=\"password\"\r\n        >\r\n      </div>\r\n     \r\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!formGrp.valid\">Log In</button>\r\n    </form>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signin/signin.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signin/signin.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"authContainer\">\r\n    <h3>Sign In</h3>\r\n    <hr>\r\n    <form [formGroup]=\"formGrp\" (submit)=\"onSubmission()\" >\r\n        <div class=\"form-group\">\r\n          <label for=\"email\">Email address</label>\r\n          <input type=\"email\" class=\"form-control\" id=\"email\"  placeholder=\"Enter email\"\r\n           formControlName=\"email\"\r\n          >\r\n          <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"password\">Password</label>\r\n          <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\"\r\n          formControlName=\"password\"\r\n          >\r\n        </div>\r\n       \r\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!formGrp.valid\">Sign In</button>\r\n      </form>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/file-import/file-import.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/file-import/file-import.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"jumbotron\">\r\n            \r\n        <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger1\">\r\n            <thead>\r\n              <tr>\r\n                <th>#</th>\r\n                <th>File Name</th>\r\n                <th>User</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let item of Filelist; let i = index;\">\r\n                <th scope=\"row\"><input type=\"checkbox\" name=\"idd\" [value]=\"item.filename\" (change)=\"addtoList($event)\"></th>\r\n                <td><a  class=\"fileName\">{{item.filename}}</a></td>\r\n                <td>user-{{i+1}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n\r\n        <button class=\"btn btn-primary mt-3\" type=\"button\" (click)=\"importFile()\">import File</button>\r\n    </div>\r\n    \r\n\r\n    \r\n</div>\r\n\r\n<!-- Custom modal setup -->\r\n<div  [ngClass]=\"{'modal-container': true, 'hidden': NoImport}\">\r\n    <span class=\"closePop\" (click)=\"removeModal()\">X</span>\r\n   <div class=\"pop-container\">\r\n    <div class=\"d-flex justify-content-around py-3\">\r\n      <strong *ngIf=\"!importStatus\">Import In progress...</strong>\r\n      <div *ngIf=\"!importStatus\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></div>\r\n      <strong *ngIf=\"importStatus\">All rows imported Succesfully </strong>\r\n      <!-- <img *ngIf=\"importStatus\" src=\"../../assets/iconmonstr-check-mark-1.svg\" > -->\r\n    </div>\r\n       <div class=\"row\" *ngFor=\"let item of importResultArray; let i=index\">\r\n          <div class=\"col text-center\">\r\n              <p class=\"text-muted font-weight-lighter font-italic\">Row {{i+1}} Imported succesfully.</p>\r\n          </div>\r\n       </div>\r\n   </div>\r\n</div>\r\n<div  (click)=\"removeModal()\" [ngClass]=\"{'overlay': true, 'hidden': NoImport}\"></div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/file-uploader2/file-uploader2.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/file-uploader2/file-uploader2.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form  enctype=\"multipart/form-data\" [formGroup]=\"form2\">\r\n    <div class=\"fileContainer p-3 m-3 bg-light\">\r\n        \r\n            <div class=\"row mt-3\">\r\n                <div class=\"col-md-12\">\r\n                    <label for=\"upload\">Upload a csv file</label>\r\n                    <input  type=\"file\" accept=\".csv\" class=\"form-control-file\" formControlName=\"fileInput\"  id=\"upload\" (change)=\"onFileSelect($event)\" #fileInput>\r\n                </div>\r\n            </div>\r\n            <div class=\"row mt-3\">\r\n                <div class=\"col-md-12\">    \r\n                    <button class=\"btn btn-primary\"  type=\"button\" (click)=\"checkFile()\">upload</button>  \r\n            </div>\r\n            </div>\r\n    </div>\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/file-upoader/file-upoader.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/file-upoader/file-upoader.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <br>\r\n            <form>\r\n                <div class=\"form-group\">\r\n                    <label for=\"multiple\">Choose file(s)</label>\r\n                    <input type=\"file\" class=\"form-control\" name=\"multiple\" ng2FileSelect [uploader]=\"uploader\" multiple  />\r\n                </div>            \r\n            </form>\r\n        </div>\r\n        </div>\r\n        <br>\r\n        \r\n        <div class=\"col-md-8\">\r\n             File(s) Selected: {{ uploader?.queue?.length }}\r\n            <table class=\"table\">\r\n                <thead>\r\n                <tr>\r\n                    <th width=\"50%\">Name</th>\r\n                    <th>Size</th>\r\n                    <th>Progress</th>\r\n                    <th>Status</th>\r\n                    <th>Actions</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let item of uploader.queue\">\r\n                    <td><strong>{{ item.file.name }}</strong></td>\r\n                    <td nowrap>{{ item.file.size/1024/1024 | number:'.2' }} MB</td>\r\n                    <td>\r\n                        <div class=\"progress\" style=\"margin-bottom: 0;\">\r\n                            <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        <span *ngIf=\"item.isSuccess\"><i class=\"fa fa-check\"></i></span>\r\n                        <span *ngIf=\"item.isCancel\"><i class=\"fa fa-ban\"></i></span>\r\n                        <span *ngIf=\"item.isError\"><i class=\"fa fa-times\"></i></span>\r\n                    </td>\r\n                    <td nowrap>\r\n                        <button type=\"button\" class=\"btn btn-success btn-xs\"\r\n                                (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\r\n                            <span class=\"fa fa-upload\"></span> Upload\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-warning btn-xs\"\r\n                                (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\r\n                            <span class=\"fa fa-ban\"></span> Cancel\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-danger btn-xs\"\r\n                                (click)=\"item.remove()\">\r\n                            <span class=\"fa fa-trash\"></span> Remove\r\n                        </button>\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n  \r\n            <div>\r\n                <hr>\r\n\r\n                <div>\r\n                    Total progress:\r\n                    <div class=\"progress\">\r\n                        <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\r\n                    </div>\r\n                    <hr>\r\n                </div>\r\n\r\n\r\n                <button type=\"button\" class=\"btn btn-success btn-s\"\r\n                        (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\r\n                    <span class=\"fa fa-upload\"></span> Upload all\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-warning btn-s\"\r\n                        (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\r\n                    <span class=\"fa fa-ban\"></span> Cancel all\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-danger btn-s\"\r\n                        (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\r\n                    <span class=\"fa fa-trash\"></span> Remove all\r\n                </button>\r\n            </div>\r\n        </div>\r\n\r\n    \r\n  </div>\r\n  <hr>\r\n  <!--\r\n  <div class=\"container\">\r\n      <table class=\"table table-hover\">\r\n          <thead>\r\n            <tr>\r\n              <th>File Name</th>\r\n              <th>Link</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let file of files\">\r\n              <td>{{ file.originalname }}</td>\r\n              <td><button class=\"btn btn-primary button\" (click)=\"downloadPdf(file.filename, file.contentType)\">Download</button></td>\r\n            </tr>   \r\n          </tbody>\r\n        </table>\r\n    </div>\r\n\r\n-->\r\n    \r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"nav d-flex\">\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link active\" [routerLink]=\"['/']\" >userManagement</a>\r\n  </li>\r\n  <li class=\"nav-item\" >\r\n    <a class=\"nav-link\" [routerLink]=\"['/upload']\"  tabindex=\"-1\" >FileManagement</a>\r\n  </li>\r\n  <li class=\"nav-item\" >\r\n      <a class=\"nav-link\" [routerLink]=\"['/import']\"  tabindex=\"-1\" >Import</a>\r\n    </li>\r\n</nav>\r\n<router-outlet></router-outlet>\r\n\r\n\r\n \r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white border-bottom shadow-sm\">\r\n    <h5 class=\"my-0 mr-md-auto font-weight-normal\">IDevelop❤</h5>\r\n    <nav class=\"my-2 my-md-0 mr-md-3\">\r\n\r\n      <a class=\"p-2 text-dark\" href=\"#\">Contact</a>\r\n      <a class=\"p-2 text-dark\" href=\"#\">About us!</a>\r\n    </nav>\r\n    <a *ngIf=\"isUserAuthenticated\" class=\"btn btn-outline-primary auth\" href=\"#\" [routerLink]=\"['/']\">Home</a>\r\n    <a *ngIf=\"isUserAuthenticated\" class=\"btn btn-outline-primary auth\" href=\"#\" (click)=\"userLogout()\">Logout</a>\r\n    <a *ngIf=\"!isUserAuthenticated\" class=\"btn btn-outline-primary auth\" href=\"#\" [routerLink]=\"['/login']\">Login</a>\r\n    <a *ngIf=\"!isUserAuthenticated\" class=\"btn btn-outline-primary auth\" href=\"#\" [routerLink]=\"['/signin']\">Sign up</a>\r\n  </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-file-upload/user-file-upload.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-file-upload/user-file-upload.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <app-file-uploader2></app-file-uploader2>\r\n    \r\n    <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\r\n            <thead>\r\n              <tr>\r\n                <th>#</th>\r\n                <th>File Name</th>\r\n                <th>User</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let item of Filelist; let i = index;\">\r\n                <th scope=\"row\">{{i+1}}</th>\r\n                <td><a (click)=\"downloadFile(item.filename)\" class=\"fileName\">{{item.filename}}</a></td>\r\n                <td>user-{{i+1}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-management/user-management.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-management/user-management.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form  #f=\"ngForm\" (submit)=\"mode == 'edit' ? updateUser(f) : regUsers(f)\">\r\n    <h2 class=\"formHead\">USER Management</h2>\r\n    \r\n    <div class=\"container\">\r\n        <hr>\r\n    <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n            <label >Name</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"userName\" required ngModel [(ngModel)]=\"userN\">\r\n          </div>\r\n  \r\n      <div class=\"form-group col-md-6\">\r\n        <label>Email</label>\r\n        <input type=\"email\" class=\"form-control\" name=\"email\" ngModel placeholder=\"Email\" required ngModel [(ngModel)]=\"userE\">\r\n      </div>\r\n      \r\n    </div>\r\n  \r\n    <div class=\"form-row\">\r\n  \r\n        <div class=\"form-group col-md-6\">\r\n            <label >Role</label>\r\n            <select name=\"role\" class=\"form-control\" ngModel required ngModel [(ngModel)]=\"userR\">\r\n              <option selected>select any role</option>\r\n              <option>CBN Admin</option>\r\n              <option>DSO</option>\r\n            </select>\r\n          </div>\r\n      \r\n      <div class=\"form-group col-md-6\">\r\n        <label >Application</label>\r\n        <select name=\"appName\" class=\"form-control\" ngModel required ngModel [(ngModel)]=\"userA\">\r\n          <option selected>Choose...</option>\r\n          <option>VTS CUP</option>\r\n          <option>DNSO</option>\r\n          <option>Portal X</option>\r\n        </select>\r\n      </div>\r\n  \r\n  \r\n    </div>\r\n  \r\n    <button *ngIf= \"mode !='edit'\" type=\"submit\" class=\"btn btn-primary registerBtn\" [disabled]=\"!f.valid\">Register user</button>\r\n    <button *ngIf= \"mode =='edit'\" type=\"submit\" class=\"btn btn-primary registerBtn\" [disabled]=\"!f.valid\">Edit user</button>\r\n    <button *ngIf= \"mode =='edit'\" type=\"button\" class=\"btn btn-primary cancelbtn\" (click)=\"f.reset();mode='reg'\" >cancel</button>\r\n    \r\n\r\n  </div>\r\n   \r\n  \r\n\r\n  </form>\r\n\r\n  <div class=\"container\">\r\n  \r\n    <p *ngIf= \"usersArr.length == 0\">No users found...please add</p>\r\n    <table class=\"table table-striped\" *ngIf= \"usersArr.length != 0\">\r\n        <thead>\r\n          <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">Email</th>\r\n            <th scope=\"col\">Application</th>\r\n            <th scope=\"col\">Role</th>\r\n            <th></th>\r\n            <th></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let i of usersArr; index as j\">\r\n            <th scope=\"row\">{{j+1}}</th>\r\n            <td>{{i.userName}}</td>\r\n            <td>{{i.mailID}}</td>\r\n            <td>{{i.aplicationName}}</td>\r\n            <td>{{i.role}}</td>\r\n            <td><button class=\"btn btn-primary\" (click)=\"editUser(i.id)\">Edit</button></td>\r\n            <td><button class=\"btn btn-danger\" (click)=\"deleteUser(i.id)\">delete</button></td>\r\n          </tr>\r\n          \r\n        </tbody>\r\n      </table>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-management/user-management.component */ "./src/app/user-management/user-management.component.ts");
/* harmony import */ var _user_file_upload_user_file_upload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-file-upload/user-file-upload.component */ "./src/app/user-file-upload/user-file-upload.component.ts");
/* harmony import */ var _file_import_file_import_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./file-import/file-import.component */ "./src/app/file-import/file-import.component.ts");









const routes = [
    // routeGuard is not needed as we r not saving anything in localstorage. we r using cookie
    // {path:'', component: HomeComponent, canActivate: [authGuard]},
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        children: [
            { path: '', component: _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_6__["UserManagementComponent"] },
            { path: 'upload', component: _user_file_upload_user_file_upload_component__WEBPACK_IMPORTED_MODULE_7__["UserFileUploadComponent"] },
            { path: 'import', component: _file_import_file_import_component__WEBPACK_IMPORTED_MODULE_8__["FileImportComponent"] }
        ]
    },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'signin', component: _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"] },
    { path: '**', redirectTo: 'login' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _file_upoader_file_upoader_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./file-upoader/file-upoader.component */ "./src/app/file-upoader/file-upoader.component.ts");
/* harmony import */ var _file_upload_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./file-upload.service */ "./src/app/file-upload.service.ts");
/* harmony import */ var _file_uploader2_file_uploader2_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./file-uploader2/file-uploader2.component */ "./src/app/file-uploader2/file-uploader2.component.ts");
/* harmony import */ var _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user-management/user-management.component */ "./src/app/user-management/user-management.component.ts");
/* harmony import */ var _user_file_upload_user_file_upload_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user-file-upload/user-file-upload.component */ "./src/app/user-file-upload/user-file-upload.component.ts");
/* harmony import */ var _file_import_file_import_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./file-import/file-import.component */ "./src/app/file-import/file-import.component.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");




















const config = { url: 'http://localhost:3000/', options: {} };
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__["NavBarComponent"],
            _auth_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
            _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_11__["SigninComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
            _file_upoader_file_upoader_component__WEBPACK_IMPORTED_MODULE_13__["FileUpoaderComponent"],
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileSelectDirective"],
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileDropDirective"],
            _file_uploader2_file_uploader2_component__WEBPACK_IMPORTED_MODULE_15__["FileUploader2Component"],
            _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_16__["UserManagementComponent"],
            _user_file_upload_user_file_upload_component__WEBPACK_IMPORTED_MODULE_17__["UserFileUploadComponent"],
            _file_import_file_import_component__WEBPACK_IMPORTED_MODULE_18__["FileImportComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"],
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_19__["SocketIoModule"].forRoot(config)
        ],
        providers: [_file_upload_service__WEBPACK_IMPORTED_MODULE_14__["FileUploadService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);

// SocketIoModule.forRoot(config)


/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".authContainer {\r\n    width: 30%;\r\n    margin: 3em auto;\r\n    padding: 3em;\r\n    background-color: rgba(248, 229, 205, 0.877);\r\n    border-radius: 2em;\r\n \r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osNENBQTRDO0lBQzVDLGtCQUFrQjs7Q0FFckIiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aENvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luOiAzZW0gYXV0bztcclxuICAgIHBhZGRpbmc6IDNlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAyMjksIDIwNSwgMC44NzcpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMmVtO1xyXG4gXHJcbiB9Il19 */");

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_lb_call_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/lb-call.service */ "./src/app/lb-call.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LoginComponent = class LoginComponent {
    constructor(fb, serv, router) {
        this.fb = fb;
        this.serv = serv;
        this.router = router;
    }
    ngOnInit() {
        this.formGrp = this.fb.group({
            'email': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    onSubmission() {
        //  console.log(this.formGrp.value);
        this.serv.loginIdevUser(this.formGrp.value)
            .subscribe((res) => {
            this.formGrp.reset();
            this.router.navigate(['/']);
            console.log(res);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_lb_call_service__WEBPACK_IMPORTED_MODULE_3__["LbCallService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/auth/signin/signin.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signin/signin.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".authContainer {\r\n   width: 30%;\r\n   margin: 3em auto;\r\n   padding: 3em;\r\n   background-color: rgba(248, 229, 205, 0.877);\r\n   border-radius: 2em;\r\n\r\n}\r\n\r\n Input.ng-invalid.ng-touched {\r\n   border: coral 1px solid;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyxVQUFVO0dBQ1YsZ0JBQWdCO0dBQ2hCLFlBQVk7R0FDWiw0Q0FBNEM7R0FDNUMsa0JBQWtCOztBQUVyQjs7Q0FFQztHQUNFLHVCQUF1QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dGhDb250YWluZXIge1xyXG4gICB3aWR0aDogMzAlO1xyXG4gICBtYXJnaW46IDNlbSBhdXRvO1xyXG4gICBwYWRkaW5nOiAzZW07XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAyMjksIDIwNSwgMC44NzcpO1xyXG4gICBib3JkZXItcmFkaXVzOiAyZW07XHJcblxyXG59XHJcblxyXG4gSW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICAgYm9yZGVyOiBjb3JhbCAxcHggc29saWQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/auth/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_lb_call_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/lb-call.service */ "./src/app/lb-call.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





// also u can create using FormControl & FormGroup
let SigninComponent = class SigninComponent {
    constructor(fb, serv, router) {
        this.fb = fb;
        this.serv = serv;
        this.router = router;
    }
    ngOnInit() {
        this.formGrp = this.fb.group({
            'email': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    onSubmission() {
        //  console.log(this.formGrp.value);
        this.serv.addIdevUsers(this.formGrp.value)
            .subscribe((res) => {
            this.formGrp.reset();
            this.router.navigate(['/login']);
            console.log(res);
        });
    }
};
SigninComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_lb_call_service__WEBPACK_IMPORTED_MODULE_3__["LbCallService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signin/signin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signin.component.css */ "./src/app/auth/signin/signin.component.css")).default]
    })
], SigninComponent);



/***/ }),

/***/ "./src/app/file-import/file-import.component.css":
/*!*******************************************************!*\
  !*** ./src/app/file-import/file-import.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hidden {\r\n    display: none;\r\n}\r\n\r\n.modal-container {\r\n    background-color: rgb(255, 255, 255);\r\n    width: 30%;\r\n     height: 20em; \r\n    /* height: auto; */\r\n    position: fixed;\r\n    left: 35%;\r\n    top: 20%;\r\n    box-shadow: 0px 0px 5px .5px rgba(0, 0, 0, 0.493);\r\n    z-index: 100;\r\n    overflow: auto;\r\n    \r\n}\r\n\r\n.overlay {\r\n    background-color: rgba(56, 53, 53, 0.564);\r\n    position: absolute;\r\n    top: 0px;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 99;\r\n    \r\n}\r\n\r\n.pop-container {\r\n    position: absolute;\r\n    top:0;\r\n    width:90%;\r\n    margin-top: 15px;\r\n    text-align: center;\r\n    font-weight: 600;\r\n    \r\n}\r\n\r\n.closePop {\r\n    position: absolute;\r\n    right: 2px;\r\n    top: -3px;\r\n    font-weight: 700;\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsZS1pbXBvcnQvZmlsZS1pbXBvcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsVUFBVTtLQUNULFlBQVk7SUFDYixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFNBQVM7SUFDVCxRQUFRO0lBQ1IsaURBQWlEO0lBQ2pELFlBQVk7SUFDWixjQUFjOztBQUVsQjs7QUFFQTtJQUNJLHlDQUF5QztJQUN6QyxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVzs7QUFFZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixLQUFLO0lBQ0wsU0FBUztJQUNULGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvZmlsZS1pbXBvcnQvZmlsZS1pbXBvcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgIGhlaWdodDogMjBlbTsgXHJcbiAgICAvKiBoZWlnaHQ6IGF1dG87ICovXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAzNSU7XHJcbiAgICB0b3A6IDIwJTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IC41cHggcmdiYSgwLCAwLCAwLCAwLjQ5Myk7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIFxyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU2LCA1MywgNTMsIDAuNTY0KTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIFxyXG59XHJcblxyXG4ucG9wLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6MDtcclxuICAgIHdpZHRoOjkwJTtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgXHJcbn1cclxuXHJcbi5jbG9zZVBvcCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMnB4O1xyXG4gICAgdG9wOiAtM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/file-import/file-import.component.ts":
/*!******************************************************!*\
  !*** ./src/app/file-import/file-import.component.ts ***!
  \******************************************************/
/*! exports provided: FileImportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileImportComponent", function() { return FileImportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _file_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../file-upload.service */ "./src/app/file-upload.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../socket.service */ "./src/app/socket.service.ts");






// import { UserFileUploadComponent } from '../user-file-upload/user-file-upload.component'
let FileImportComponent = class FileImportComponent {
    constructor(fileService, http, socketServices) {
        this.fileService = fileService;
        this.http = http;
        this.socketServices = socketServices;
        this.Filelist = [];
        this.selectionList = [];
        this.dtOptions = {};
        this.dtTrigger1 = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.NoImport = true;
        this.importStatus = false;
        this.importResultArray = [];
        this.socketServices.getMessage().subscribe((data) => {
            //  console.log('message from server----');
            //  console.log(data);
            this.importResultArray.push(data);
        });
    }
    ngOnInit() {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 2
        };
        this.http.get('http://localhost:3000/api/FILE/files')
            .subscribe((fileData) => {
            this.Filelist = fileData.files;
            this.dtTrigger1.next();
        });
    }
    importFile() {
        //  console.log(this.selectionList);
        this.NoImport = false;
        this.importStatus = false;
        this.importResultArray = [];
        setTimeout(() => {
            this.fileService.importFile(this.selectionList[0])
                .subscribe((data) => {
                console.log(' from import subscription');
                this.importStatus = true;
            });
        }, 2000);
    }
    ngOnDestroy() {
        this.dtTrigger1.unsubscribe();
    }
    addtoList(evnt) {
        let selectionStats = evnt.target.checked;
        let valIndx = this.selectionList.indexOf('evnt.target.value');
        let valStats = valIndx == -1;
        // console.log(evnt.target.value);
        if (selectionStats && valStats) {
            this.selectionList.push(evnt.target.value);
        }
        else {
            this.selectionList.splice(valIndx, 1);
        }
        //  console.log(this.selectionList);
        if (this.selectionList.length > 1) {
            alert('please select a single file for import!');
            evnt.target.checked = false;
            this.selectionList.splice(valIndx, 1);
        }
    }
    removeModal() {
        // console.log('In')
        this.NoImport = true;
    }
};
FileImportComponent.ctorParameters = () => [
    { type: _file_upload_service__WEBPACK_IMPORTED_MODULE_2__["FileUploadService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"] }
];
FileImportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-file-import',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./file-import.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/file-import/file-import.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./file-import.component.css */ "./src/app/file-import/file-import.component.css")).default]
    })
], FileImportComponent);



/***/ }),

/***/ "./src/app/file-upload.service.ts":
/*!****************************************!*\
  !*** ./src/app/file-upload.service.ts ***!
  \****************************************/
/*! exports provided: FileUploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadService", function() { return FileUploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let FileUploadService = class FileUploadService {
    constructor(http) {
        this.http = http;
        this.fileUploadIndicator = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'Blob',
            })
        };
    }
    uploadFile(formData) {
        const url = 'http://localhost:3000/yo';
        return this.http.post(url, formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this.fileUploadIndicator.next(res);
        }));
    }
    uploadIndicator() {
        return this.fileUploadIndicator.asObservable();
    }
    downloadPDF(filename) {
        return this.http.get('http://localhost:3000/api/FILE/files/' + filename, { observe: 'response', responseType: 'blob' });
    }
    showFileNames() {
        return this.http.get('http://localhost:3000/api/Files');
    }
    importFile(filename) {
        return this.http.get('http://localhost:3000/api/FILE/import/' + filename);
    }
};
FileUploadService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FileUploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], FileUploadService);



/***/ }),

/***/ "./src/app/file-uploader2/file-uploader2.component.css":
/*!*************************************************************!*\
  !*** ./src/app/file-uploader2/file-uploader2.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGUtdXBsb2FkZXIyL2ZpbGUtdXBsb2FkZXIyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/file-uploader2/file-uploader2.component.ts":
/*!************************************************************!*\
  !*** ./src/app/file-uploader2/file-uploader2.component.ts ***!
  \************************************************************/
/*! exports provided: FileUploader2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploader2Component", function() { return FileUploader2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _file_upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../file-upload.service */ "./src/app/file-upload.service.ts");





let FileUploader2Component = class FileUploader2Component {
    // @ViewChild('fileInput', { read: ElementRef, static: true }) private fileInput: ElementRef;
    constructor(formBuilder, http, fileService) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.fileService = fileService;
        this.mimeTye = '';
    }
    ngOnInit() {
        this.form2 = this.formBuilder.group({
            // fileInput: ['',[Validators.required, this.myValidator.bind(this)]],
            fileInput: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            filename: null
        });
    }
    myValidator(el) {
        console.log(el);
    }
    onFileSelect(event) {
        //  console.log('change detected');
        // console.log((<HTMLInputElement>event.target).files[0])
        const file = event.target.files[0];
        this.mimeTye = file.type;
        this.form2.patchValue({ filename: file });
    }
    checkFile() {
        if (this.form2.invalid) {
            alert('Please select a csv file');
            return false;
        }
        else {
            console.log(this.form2.get('filename').value);
            const formData = new FormData();
            formData.append('fileLoaded', this.form2.get('filename').value);
            // const url = 'http://localhost:3000/yo';
            // this.http.post(url, formData)
            this.fileService.uploadFile(formData)
                .subscribe((data) => {
                alert('File uploaded succesfully');
            });
        }
    }
};
FileUploader2Component.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _file_upload_service__WEBPACK_IMPORTED_MODULE_4__["FileUploadService"] }
];
FileUploader2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-file-uploader2',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./file-uploader2.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/file-uploader2/file-uploader2.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./file-uploader2.component.css */ "./src/app/file-uploader2/file-uploader2.component.css")).default]
    })
], FileUploader2Component);



/***/ }),

/***/ "./src/app/file-upoader/file-upoader.component.css":
/*!*********************************************************!*\
  !*** ./src/app/file-upoader/file-upoader.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGUtdXBvYWRlci9maWxlLXVwb2FkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/file-upoader/file-upoader.component.ts":
/*!********************************************************!*\
  !*** ./src/app/file-upoader/file-upoader.component.ts ***!
  \********************************************************/
/*! exports provided: FileUpoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUpoaderComponent", function() { return FileUpoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
/* harmony import */ var _file_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../file-upload.service */ "./src/app/file-upload.service.ts");




let FileUpoaderComponent = class FileUpoaderComponent {
    constructor(uploadService) {
        this.uploadService = uploadService;
        this.files = [];
        this.url = 'http://localhost:3000/api/upload';
    }
    ngOnInit() {
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({ url: this.url });
    }
};
FileUpoaderComponent.ctorParameters = () => [
    { type: _file_upload_service__WEBPACK_IMPORTED_MODULE_3__["FileUploadService"] }
];
FileUpoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-file-upoader',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./file-upoader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/file-upoader/file-upoader.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./file-upoader.component.css */ "./src/app/file-upoader/file-upoader.component.css")).default]
    })
], FileUpoaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.container {\r\n    width: 80%;\r\n    margin-top: 2em;\r\n}\r\n\r\n.formHead {\r\n    text-align: center;\r\n    margin: 1em;\r\n}\r\n\r\n.registerBtn {\r\n    width: 30%;\r\n}\r\n\r\n.cancelbtn {\r\n    margin-left: 1em;\r\n}\r\n\r\n@media screen and (max-width: 550px) {\r\n    .registerBtn {\r\n        width: 70%;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi10b3A6IDJlbTtcclxufVxyXG5cclxuLmZvcm1IZWFkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMWVtO1xyXG59XHJcblxyXG4ucmVnaXN0ZXJCdG4ge1xyXG4gICAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxuLmNhbmNlbGJ0biB7XHJcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xyXG4gICAgLnJlZ2lzdGVyQnRuIHtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/lb-call.service.ts":
/*!************************************!*\
  !*** ./src/app/lb-call.service.ts ***!
  \************************************/
/*! exports provided: LbCallService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LbCallService", function() { return LbCallService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let LbCallService = class LbCallService {
    constructor(http) {
        this.http = http;
        this.userArray = [];
        this.userChangeFound = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.userAuthenticated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    getUserAuth() {
        return this.userAuthenticated.asObservable();
    }
    getuser(ID) {
        return this.http.get(`http://localhost:3000/api/CBNUsers/${ID}`);
    }
    gettingUsers() {
        return this.http.get('http://localhost:3000/api/Users')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((itm) => {
            this.userAuthenticated.next(true);
            this.userArray = itm;
            this.userChangeFound.next([...this.userArray]);
        }));
    }
    subscribeTouserChanges() {
        return this.userChangeFound.asObservable();
    }
    addUser(user) {
        const usr = {
            "mailID": user.email,
            "aplicationName": user.appName,
            "role": user.role,
            "userName": user.userName
        };
        return this.http.post('http://localhost:3000/api/Users', usr).subscribe((res) => {
            //  console.log('User Added');
            this.gettingUsers();
        });
    }
    editUser(user, id) {
        const usr = {
            "mailID": user.email,
            "aplicationName": user.appName,
            "role": user.role,
            "userName": user.userName
        };
        return this.http.patch(`http://localhost:3000/api/CBNUsers/${id}`, usr).subscribe((res) => {
            this.gettingUsers();
        });
    }
    DeleteUser(id) {
        this.http.delete(`http://localhost:3000/api/CBNUsers/${id}`)
            .subscribe((delRes) => {
            this.gettingUsers();
        });
    }
    // for IdevUsers
    addIdevUsers(iuser) {
        // console.log(iuser);
        return this.http.post('http://localhost:3000/api/Idev_user/signup', iuser);
    }
    loginIdevUser(iuser) {
        // console.log(iuser);
        return this.http.post('http://localhost:3000/api/Idev_user/login', iuser);
    }
    logoutIdevUser() {
        return this.http.get('http://localhost:3000/api/Idev_user/logout')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((res) => {
            this.userAuthenticated.next(false);
        }));
    }
};
LbCallService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LbCallService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LbCallService);



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* nav {\r\n    background-color: rgb(56, 50, 50);\r\n} */\r\n\r\n.auth {\r\n    margin-left: 1em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7O0FBRUg7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIG5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTYsIDUwLCA1MCk7XHJcbn0gKi9cclxuXHJcbi5hdXRoIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _lb_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lb-call.service */ "./src/app/lb-call.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let NavBarComponent = class NavBarComponent {
    constructor(angService, routr) {
        this.angService = angService;
        this.routr = routr;
        this.isUserAuthenticated = false;
    }
    ngOnInit() {
        this.angService.getUserAuth()
            .subscribe((auth) => {
            this.isUserAuthenticated = auth;
        });
    }
    userLogout() {
        this.angService.logoutIdevUser()
            .subscribe((data) => {
            this.routr.navigate(['/login']);
        });
    }
};
NavBarComponent.ctorParameters = () => [
    { type: _lb_call_service__WEBPACK_IMPORTED_MODULE_2__["LbCallService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")).default]
    })
], NavBarComponent);



/***/ }),

/***/ "./src/app/socket.service.ts":
/*!***********************************!*\
  !*** ./src/app/socket.service.ts ***!
  \***********************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let SocketService = class SocketService {
    constructor(socket) {
        this.socket = socket;
    }
    getMessage() {
        return this.socket
            .fromEvent("import")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data));
    }
};
SocketService.ctorParameters = () => [
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"] }
];
SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SocketService);



/***/ }),

/***/ "./src/app/user-file-upload/user-file-upload.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/user-file-upload/user-file-upload.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fileName:hover {\r\n   text-decoration: underline!important;\r\n   color: blue!important;\r\n   cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1maWxlLXVwbG9hZC91c2VyLWZpbGUtdXBsb2FkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyxvQ0FBb0M7R0FDcEMscUJBQXFCO0dBQ3JCLGVBQWU7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC91c2VyLWZpbGUtdXBsb2FkL3VzZXItZmlsZS11cGxvYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxlTmFtZTpob3ZlciB7XHJcbiAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIWltcG9ydGFudDtcclxuICAgY29sb3I6IGJsdWUhaW1wb3J0YW50O1xyXG4gICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/user-file-upload/user-file-upload.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/user-file-upload/user-file-upload.component.ts ***!
  \****************************************************************/
/*! exports provided: UserFileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFileUploadComponent", function() { return UserFileUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _file_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../file-upload.service */ "./src/app/file-upload.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let UserFileUploadComponent = class UserFileUploadComponent {
    constructor(http, fileService) {
        this.http = http;
        this.fileService = fileService;
        this.Filelist = [];
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ngOnInit() {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 2
        };
        this.getFiles();
        this.fileService.uploadIndicator()
            .subscribe((indRes) => {
            this.getFiles();
        });
    }
    downloadFile(fileName) {
        this.fileService.downloadPDF(fileName)
            .subscribe((fileData) => {
            console.log(fileData);
            //  const filename = fileData.headers.get('file_name');
            const fileURL = URL.createObjectURL(fileData.body);
            // window.open(fileURL);
            // const filename = 'testFile'
            const anchor = document.createElement("a");
            anchor.download = fileName;
            anchor.href = fileURL;
            anchor.click();
            URL.revokeObjectURL(fileURL);
        });
    }
    ngOnDestroy() {
        this.dtTrigger.unsubscribe();
    }
    getFiles() {
        this.http.get('http://localhost:3000/api/FILE/files')
            .subscribe((fileData) => {
            this.Filelist = fileData.files;
            this.dtTrigger.next();
        });
    }
};
UserFileUploadComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _file_upload_service__WEBPACK_IMPORTED_MODULE_3__["FileUploadService"] }
];
UserFileUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-file-upload',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-file-upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-file-upload/user-file-upload.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-file-upload.component.css */ "./src/app/user-file-upload/user-file-upload.component.css")).default]
    })
], UserFileUploadComponent);



/***/ }),

/***/ "./src/app/user-management/user-management.component.css":
/*!***************************************************************!*\
  !*** ./src/app/user-management/user-management.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/user-management/user-management.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/user-management/user-management.component.ts ***!
  \**************************************************************/
/*! exports provided: UserManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementComponent", function() { return UserManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _lb_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lb-call.service */ "./src/app/lb-call.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let UserManagementComponent = class UserManagementComponent {
    constructor(lbService, rtr) {
        this.lbService = lbService;
        this.rtr = rtr;
        this.title = 'sampleApp';
        this.mode = '';
        this.userN = '';
        this.userE = '';
        this.userR = '';
        this.userA = '';
        this.usersArr = [];
        this.subSub = this.lbService.subscribeTouserChanges().subscribe((usrs) => {
            this.usersArr = usrs;
            console.log('Inside subscription');
            // console.log(this.usersArr);
        });
    }
    ngOnInit() {
        console.log('on init');
        this.lbService.gettingUsers()
            .subscribe((rs) => {
            console.log(rs);
        }, (err) => {
            console.log(err);
            if (err.status == 401) {
                alert('Please login!');
                this.rtr.navigate(['/login']);
            }
        });
    }
    regUsers(frm) {
        this.mode = 'reg';
        // this.lbService.gettingUsers().subscribe((res)=> {
        //   console.log(res);
        // });
        //  console.log(frm.value);
        this.lbService.addUser(frm.value);
        frm.reset();
    }
    updateUser(frm) {
        this.lbService.editUser(frm.value, this.userI);
        this.mode = 'reg';
        frm.reset();
    }
    deleteUser(ID) {
        if (!confirm('Are you sure want to delete this user?'))
            return false;
        this.lbService.DeleteUser(ID);
    }
    editUser(ID) {
        this.mode = 'edit';
        this.lbService.getuser(ID).subscribe((editres) => {
            this.userN = editres.userName;
            this.userE = editres.mailID;
            this.userR = editres.role;
            this.userA = editres.aplicationName;
            this.userI = editres.id;
        });
    }
    ngOnDestroy() {
        this.subSub.unsubscribe();
    }
};
UserManagementComponent.ctorParameters = () => [
    { type: _lb_call_service__WEBPACK_IMPORTED_MODULE_2__["LbCallService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
UserManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-management',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-management/user-management.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-management.component.css */ "./src/app/user-management/user-management.component.css")).default]
    })
], UserManagementComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Anoopkumars\Desktop\Projects\jwt\sampleMEAN\meandemo-1\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map