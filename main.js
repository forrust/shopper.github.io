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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_recipes_recipes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/recipes/recipes.component */ "./src/app/components/recipes/recipes.component.ts");
/* harmony import */ var _components_shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/shopping-list/shopping-list.component */ "./src/app/components/shopping-list/shopping-list.component.ts");
/* harmony import */ var _components_recipes_recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/recipes/recipe-start/recipe-start.component */ "./src/app/components/recipes/recipe-start/recipe-start.component.ts");
/* harmony import */ var _components_recipes_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/recipes/recipe-detail/recipe-detail.component */ "./src/app/components/recipes/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var _components_recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/recipes/recipe-edit/recipe-edit.component */ "./src/app/components/recipes/recipe-edit/recipe-edit.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/auth/login/login.component */ "./src/app/components/auth/login/login.component.ts");
/* harmony import */ var _components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/auth/register/register.component */ "./src/app/components/auth/register/register.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_auth_verify_verify_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/auth/verify/verify.component */ "./src/app/components/auth/verify/verify.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { 'path': '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], pathMatch: 'full', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { 'path': 'recipes', component: _components_recipes_recipes_component__WEBPACK_IMPORTED_MODULE_2__["RecipesComponent"], children: [
            { 'path': '', component: _components_recipes_recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_4__["RecipeStartComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
            { 'path': 'new', component: _components_recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_6__["RecipeEditComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
            { 'path': ':id', component: _components_recipes_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_5__["RecipeDetailComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
            { 'path': ':id/edit', component: _components_recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_6__["RecipeEditComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] }
        ] },
    { 'path': 'shopping', component: _components_shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_3__["ShoppingListComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { 'path': 'login', component: _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { 'path': 'register', component: _components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"] },
    { 'path': 'verify', component: _components_auth_verify_verify_component__WEBPACK_IMPORTED_MODULE_12__["VerifyComponent"] },
    { 'path': '**', component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            providers: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container\">\r\n    <flash-messages></flash-messages>\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"

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
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/shopping-list/shopping-list.component */ "./src/app/components/shopping-list/shopping-list.component.ts");
/* harmony import */ var _components_shopping_list_shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/shopping-list/shopping-edit/shopping-edit.component */ "./src/app/components/shopping-list/shopping-edit/shopping-edit.component.ts");
/* harmony import */ var _components_recipes_recipes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/recipes/recipes.component */ "./src/app/components/recipes/recipes.component.ts");
/* harmony import */ var _components_recipes_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/recipes/recipe-detail/recipe-detail.component */ "./src/app/components/recipes/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var _components_recipes_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/recipes/recipe-list/recipe-list.component */ "./src/app/components/recipes/recipe-list/recipe-list.component.ts");
/* harmony import */ var _components_recipes_recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/recipes/recipe-list/recipe-item/recipe-item.component */ "./src/app/components/recipes/recipe-list/recipe-item/recipe-item.component.ts");
/* harmony import */ var _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/dropdown.directive */ "./src/app/directives/dropdown.directive.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_recipes_recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/recipes/recipe-start/recipe-start.component */ "./src/app/components/recipes/recipe-start/recipe-start.component.ts");
/* harmony import */ var _components_recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/recipes/recipe-edit/recipe-edit.component */ "./src/app/components/recipes/recipe-edit/recipe-edit.component.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var angularfire2_fireStore__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angularfire2/fireStore */ "./node_modules/angularfire2/fireStore/index.js");
/* harmony import */ var angularfire2_fireStore__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(angularfire2_fireStore__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/auth/login/login.component */ "./src/app/components/auth/login/login.component.ts");
/* harmony import */ var _components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/auth/register/register.component */ "./src/app/components/auth/register/register.component.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_auth_verify_verify_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/auth/verify/verify.component */ "./src/app/components/auth/verify/verify.component.ts");
/* harmony import */ var _components_home_modal_modal_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/home/modal/modal.component */ "./src/app/components/home/modal/modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















// import { AngularFireModule } from '@angular/fire';
// import { environment } from '../environments/environment';
// import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _components_shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_7__["ShoppingListComponent"],
                _components_shopping_list_shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_8__["ShoppingEditComponent"],
                _components_recipes_recipes_component__WEBPACK_IMPORTED_MODULE_9__["RecipesComponent"],
                _components_recipes_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_10__["RecipeDetailComponent"],
                _components_recipes_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_11__["RecipeListComponent"],
                _components_recipes_recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_12__["RecipeItemComponent"],
                _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_13__["DropdownDirective"],
                _components_recipes_recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_15__["RecipeStartComponent"],
                _components_recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_16__["RecipeEditComponent"],
                _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
                _components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_23__["RegisterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_25__["HomeComponent"],
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_26__["NotFoundComponent"],
                _components_auth_verify_verify_component__WEBPACK_IMPORTED_MODULE_27__["VerifyComponent"],
                _components_home_modal_modal_component__WEBPACK_IMPORTED_MODULE_28__["ModalComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_19__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].firebase, 'Shopper'),
                angularfire2_fireStore__WEBPACK_IMPORTED_MODULE_20__["AngularFirestoreModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_21__["AngularFireAuthModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_24__["FlashMessagesModule"].forRoot()
            ],
            providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_17__["DataService"], angularfire2_fireStore__WEBPACK_IMPORTED_MODULE_20__["AngularFirestore"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/auth/login/login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/auth/login/login.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/auth/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/auth/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-8 col-lg-6 mx-auto\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h1 class=\"text-center pb-4 pr-3 text-info\">Shopper Login</h1>\r\n        <form (submit)=\"onSubmit()\">\r\n          <div class=\"form-group\">\r\n            <label for=\"email\">Email</label>\r\n            <input type=\"email\" name=\"email\" [(ngModel)]=\"email\" required class=\"form-control\">  \r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"password\">Password</label>\r\n            <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" required class=\"form-control\"> \r\n          </div>\r\n          <input type=\"submit\" value=\"Login\" class=\"btn btn-primary\">\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/auth/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/auth/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, flash, router) {
        this.authService = authService;
        this.flash = flash;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.router.navigate(['/']);
            }
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.login(this.email, this.password).then(function (res) {
            _this.flash.show('Logged in', { cssClass: 'alert-success', timeout: 4000 });
            _this.router.navigate(['/']);
        }).catch(function (err) {
            _this.flash.show(err.message, { cssClass: 'alert-danger', timeout: 4000 });
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/auth/register/register.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/auth/register/register.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/auth/register/register.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/auth/register/register.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-8 col-lg-6 mx-auto\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h1 class=\"text-center pb-4 pr-3 text-info\">Shopper Register</h1>\r\n        <form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\r\n          <div class=\"form-group\">\r\n            <label for=\"name\">Name</label>            \r\n            <input id=\"name\" formControlName=\"name\" type=\"text\" class=\"form-control\" placeholder=\"John Doe\" [ngClass]=\"{'is-invalid': userForm.get('name').invalid && userForm.get('name').touched}\">\r\n            <div class=\"invalid-feedback\" *ngIf=\"userForm.get('name').hasError('required') && userForm.get('name').touched\">\r\n              Name is required...\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <label for=\"email\">Email</label>\r\n              <input id=\"email\" formControlName=\"email\" type=\"email\" class=\"form-control\" placeholder=\"email@example.com\" [ngClass]=\"{'is-invalid': userForm.get('email').invalid && userForm.get('email').touched}\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"userForm.get('email').hasError('required') && userForm.get('email').touched\">\r\n                Email is required...\r\n              </div>\r\n              <div class=\"invalid-feedback\" *ngIf=\"userForm.get('email').hasError('email') && userForm.get('email').touched\">\r\n                Email is invalid...\r\n              </div>\r\n            </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"password\">Password</label>\r\n              <input id=\"password\" formControlName=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Minimal 6 characters\" [ngClass]=\"{'is-invalid': userForm.get('password').invalid && userForm.get('password').touched}\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"userForm.get('password').hasError('required') && userForm.get('password').touched\">\r\n                Password is required...\r\n              </div>\r\n              <div class=\"invalid-feedback\" *ngIf=\"userForm.get('password').hasError('password') && userForm.get('password').touched\">\r\n                Password is invalid...\r\n              </div>\r\n          </div>\r\n          <input [disabled]=\"!userForm.valid\" [title]=\"!userForm.valid ? 'Fill in the required fields first':''\" type=\"submit\" value=\"Register\" class=\"btn btn-primary btn-block\">\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/auth/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/auth/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, flash, router) {
        this.authService = authService;
        this.flash = flash;
        this.router = router;
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.router.navigate(['/']);
            }
        });
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.userForm.value);
        this.authService.register(this.userForm.value.email, this.userForm.value.password, this.userForm.value.name).then(function (res) {
            _this.flash.show('You are registered and logged in', { cssClass: 'alert-success', timeout: 4000 });
            _this.router.navigate(['/']).catch(function (err) {
                _this.flash.show(err.message, { cssClass: 'alert-danger', timeout: 4000 });
            });
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/auth/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/auth/verify/verify.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/auth/verify/verify.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/auth/verify/verify.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/auth/verify/verify.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-8 col-lg-6 mx-auto\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h1 class=\"text-center pb-4 pr-3 text-info\">Email verification</h1>\r\n        <p>{{email}} has not yet been verified. If you want to request a new link <a (click)=\"onRequestNewLink()\" class=\"clickable text-primary\">click here</a></p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/auth/verify/verify.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/auth/verify/verify.component.ts ***!
  \************************************************************/
/*! exports provided: VerifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyComponent", function() { return VerifyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VerifyComponent = /** @class */ (function () {
    function VerifyComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    VerifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            if (!auth) {
                _this.router.navigate(['/login']);
            }
            else if (auth.emailVerified) {
                _this.router.navigate(['/']);
            }
            else {
                _this.email = auth.email;
            }
        });
    };
    VerifyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-verify',
            template: __webpack_require__(/*! ./verify.component.html */ "./src/app/components/auth/verify/verify.component.html"),
            styles: [__webpack_require__(/*! ./verify.component.css */ "./src/app/components/auth/verify/verify.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], VerifyComponent);
    return VerifyComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light mb-3\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand clickable\" [routerLink]=\"['/']\">Shopper</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <ul *ngIf=\"isLoggedIn\" class=\"navbar-nav mr-auto\">\r\n        <li routerLinkActive=\"active\" class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/recipes']\" routerLinkActive=\"router-link-active\" >My recipes</a>\r\n        </li>\r\n      </ul>\r\n      <ul *ngIf=\"isLoggedIn\" class=\"navbar-nav ml-auto\">\r\n        <li ngbDropdown class=\"nav-item dropdown\">\r\n          <a ngbDropdownToggle class=\"nav-link dropdown-toggle clickable\"  id=\"userInfo\">\r\n            {{loggedInUser}}\r\n          </a>\r\n          <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"userInfo\">\r\n            <a [routerLink]=\"['/settings']\"  class=\"dropdown-item clickable\" >Settings</a>\r\n            <a (click)=\"onLogoutClick()\" class=\"dropdown-item clickable\" >Logout</a>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n      <ul *ngIf=\"!isLoggedIn\" class=\"navbar-nav ml-auto\">\r\n        <li routerLinkActive=\"active\" class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/register']\" routerLinkActive=\"router-link-active\" >Register</a>\r\n        </li>\r\n        <li routerLinkActive=\"active\" class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/login']\" routerLinkActive=\"router-link-active\" >Login</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, router, route, flash) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.flash = flash;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.isLoggedIn = true;
                _this.loggedInUser = auth.displayName;
            }
        });
    };
    HeaderComponent.prototype.onLogoutClick = function () {
        this.isLoggedIn = false;
        this.authService.logout();
        this.flash.show('You are now logged out', { cssClass: 'alert-success', timeout: 4000 });
        this.router.navigate(['/login']);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div *ngFor=\"let recipe of recipes\" class=\"col-md-4\">\r\n    <div (click)=\"onClickOpenModal(recipe.id, content)\" class=\"card mb-3 clickable\">\r\n      <div class=\"card-header\"><h4>{{recipe.name}}</h4></div>\r\n      <div class=\"card-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\"><img [src]=\"recipe.imagePath\" [alt]=\"recipe.name\" class=\"img img-fluid\"></div>\r\n          <div class=\"col-md-8\">{{recipe.description | slice:0:40}}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer small\">added on {{recipe.dateAdded.toDate() | date: 'dd-MM-yyyy HH:mm'}} by {{recipe.username}}</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #content let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{selectedRecipe.name}}</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\"><p>{{selectedRecipe.description}}</p></div>\r\n      <div class=\"col-md-6\"><img [src]=\"selectedRecipe.imagePath\" [alt]=\"selectedRecipe.name\" class=\"img img-fluid\"></div>\r\n    </div>\r\n    <div *ngIf=\"selectedRecipe.ingredients.length > 0\" class=\"row\">\r\n      <div class=\"col-12 mt-2\">\r\n        <h5>Ingredients</h5>\r\n        <ul class=\"list-group\">\r\n          <li *ngFor=\"let ingredient of selectedRecipe.ingredients\" class=\"list-group-item\">{{ingredient.amount}} x {{ingredient.name}}</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Close</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(dataService, modalService) {
        this.dataService = dataService;
        this.modalService = modalService;
        this.selectedRecipe = { imagePath: '', ingredients: [] };
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.dataService.getAllRecipes().subscribe(function (recipes) { _this.recipes = recipes; });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    HomeComponent.prototype.onClickOpenModal = function (id, content) {
        var _this = this;
        this.dataService.getRecipe(id).subscribe(function (recipe) { _this.selectedRecipe = recipe; });
        this.modalService.open(content, { size: 'lg' });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/home/modal/modal.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/home/modal/modal.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/modal/modal.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/home/modal/modal.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\" id=\"modal-basic-title\">{{name}}</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <label for=\"dateOfBirth\">Date of birth</label>\r\n      <div class=\"input-group\">\r\n        <input id=\"dateOfBirth\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" ngbDatepicker #dp=\"ngbDatepicker\">\r\n        <div class=\"input-group-append\">\r\n          <button class=\"btn btn-outline-secondary calendar\" (click)=\"dp.toggle()\" type=\"button\"></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Save</button>\r\n</div>"

/***/ }),

/***/ "./src/app/components/home/modal/modal.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/home/modal/modal.component.ts ***!
  \**********************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/components/home/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.css */ "./src/app/components/home/modal/modal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12 text-center\">\r\n    <h3>404 Page not found</h3>\r\n    <p>The page cannot be loaded...</p>\r\n  </div>\r\n</div> "

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/components/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/recipes/recipe-detail/recipe-detail.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/recipes/recipe-detail/recipe-detail.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/recipes/recipe-detail/recipe-detail.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/recipes/recipe-detail/recipe-detail.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"btn-group  mb-3 float-right\">\r\n      <button (click)=\"onEdit()\" class=\"btn btn-outline-primary btn-sm clickable\">Edit</button>\r\n      <button (click)=\"onDelete()\" class=\"btn btn-outline-danger btn-sm clickable\">Delete</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-8\">\r\n    <h2>{{recipe.name}}</h2>\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        {{recipe.description}}\r\n      </div>\r\n    </div>\r\n    <hr>\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <h4 class=\"\">Ingredients</h4>\r\n        <ul class=\"list-group\">\r\n          <li class=\"list-group-item\" *ngFor=\"let ingredient of recipe.ingredients\">\r\n            {{ingredient.amount}} x {{ingredient.name}}\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-4\">\r\n    <img [src]=\"recipe.imagePath\" alt=\"\" class=\"img img-fluid\">\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/recipes/recipe-detail/recipe-detail.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/recipes/recipe-detail/recipe-detail.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RecipeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailComponent", function() { return RecipeDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_recipe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/recipe.service */ "./src/app/services/recipe.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecipeDetailComponent = /** @class */ (function () {
    function RecipeDetailComponent(recipeService, route, router, dataService) {
        this.recipeService = recipeService;
        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.recipe = { name: '', description: '', id: '', ingredients: [], imagePath: '' };
    }
    RecipeDetailComponent.prototype.addToList = function () {
        this.recipeService.addToList(this.recipe.ingredients);
    };
    RecipeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = params['id'];
            // this.recipe = this.recipeService.getRecipe(this.id);
            _this.dataService.getRecipe(_this.id).subscribe(function (recipe) { _this.recipe = recipe; });
        });
    };
    RecipeDetailComponent.prototype.onEdit = function () {
        this.router.navigate(['edit'], { relativeTo: this.route });
    };
    RecipeDetailComponent.prototype.onDelete = function () {
        // this.recipeService.deleteRecipe(this.id);
        this.dataService.deleteRecipe(this.id);
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    RecipeDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recipe-detail',
            template: __webpack_require__(/*! ./recipe-detail.component.html */ "./src/app/components/recipes/recipe-detail/recipe-detail.component.html"),
            styles: [__webpack_require__(/*! ./recipe-detail.component.css */ "./src/app/components/recipes/recipe-detail/recipe-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_services_recipe_service__WEBPACK_IMPORTED_MODULE_1__["RecipeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], RecipeDetailComponent);
    return RecipeDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/recipes/recipe-edit/recipe-edit.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/recipes/recipe-edit/recipe-edit.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/recipes/recipe-edit/recipe-edit.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/recipes/recipe-edit/recipe-edit.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <form [formGroup]=\"recipeForm\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <div class=\"btn-group float-right mb-3\">\r\n            <button [disabled]=\"!recipeForm.valid\" class=\"btn btn-outline-success btn-sm\" type=\"submit\">Save</button>\r\n            <button (click)=\"onCancel()\" class=\"btn btn-outline-danger btn-sm\" type=\"button\">Cancel</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"name\">Name</label>\r\n            <input id=\"name\" formControlName=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Name recipe\" [ngClass]=\"{'is-invalid': recipeForm.get('name').invalid && recipeForm.get('name').touched}\">\r\n            <div class=\"invalid-feedback\" *ngIf=\"recipeForm.get('name').hasError('required') && recipeForm.get('name').touched\">\r\n              Name is required...\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"row\">\r\n        <div class=\"col-md-9\">\r\n          <div class=\"form-group\">\r\n            <label for=\"imagePath\">Url of image</label>\r\n            <textarea id=\"imagePath\" rows=\"3\" formControlName=\"imagePath\" type=\"text\" class=\"form-control\" placeholder=\"Url of picture\" [ngClass]=\"{'is-invalid': recipeForm.get('imagePath').invalid && recipeForm.get('imagePath').touched}\"></textarea>\r\n            <div class=\"invalid-feedback\" *ngIf=\"recipeForm.get('imagePath').hasError('required') && recipeForm.get('imagePath').touched\">\r\n              Url is required...\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <img [src]=\"recipeForm.get('imagePath').value\" class=\"img img-fluid img-round mt-4\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"description\">Description</label>\r\n            <textarea id=\"description\" rows=\"5\" formControlName=\"description\" type=\"text\" class=\"form-control\" placeholder=\"Description\" [ngClass]=\"{'is-invalid': recipeForm.get('description').invalid && recipeForm.get('description').touched}\"></textarea>\r\n            <div class=\"invalid-feedback\" *ngIf=\"recipeForm.get('description').hasError('required') && recipeForm.get('description').touched\">\r\n              Description is required...\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      \r\n\r\n      \r\n      <hr>\r\n      <div class=\"form-group\" formArrayName=\"ingredients\">\r\n        <div class=\"btn-toolbar mt-1\" *ngFor=\"let ing of recipeForm.get('ingredients').controls; let i =index\"\r\n          [formGroupName]=\"i\">\r\n          <div class=\"input-group\">\r\n            <input type=\"text\" formControlName=\"name\" placeholder=\"Product\" class=\"form-control col-10\" >\r\n            <input type=\"number\" formControlName=\"amount\" placeholder=\"x\" class=\"form-control col-2\" >\r\n          </div>\r\n          <div class=\"btn-group ml-4\">\r\n            <button (click)=\"onDeleteIngredient(i)\" class=\"btn btn-outline-danger\" type=\"button\"><i class=\"fa fa-remove\"></i></button>\r\n          </div>\r\n        </div>\r\n        <button (click)=\"addNewRecipe()\" class=\"btn btn-outline-success mt-4\" type=\"button\"><i class=\"fa fa-plus\"></i>\r\n          Add new ingredient</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/recipes/recipe-edit/recipe-edit.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/recipes/recipe-edit/recipe-edit.component.ts ***!
  \*************************************************************************/
/*! exports provided: RecipeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeEditComponent", function() { return RecipeEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecipeEditComponent = /** @class */ (function () {
    function RecipeEditComponent(route, router, dataService) {
        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.editMode = false;
        this.recipe = { userId: '', name: '', description: '', id: '', ingredients: [], imagePath: '' };
    }
    RecipeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.editMode = params['id'] != null;
            _this.initForm();
            if (_this.editMode) {
                _this.dataService.getRecipe(_this.id).subscribe(function (recipe) { _this.recipe = recipe, _this.initForm(); });
            }
        });
    };
    RecipeEditComponent.prototype.initForm = function () {
        var recipeName = '';
        var recipeImg = '';
        var recipeDesc = '';
        var recipeIngredients = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
        if (this.editMode) {
            recipeName = this.recipe.name;
            recipeImg = this.recipe.imagePath;
            recipeDesc = this.recipe.description;
            if (this.recipe['ingredients']) {
                for (var _i = 0, _a = this.recipe.ingredients; _i < _a.length; _i++) {
                    var ingredient = _a[_i];
                    recipeIngredients.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](ingredient.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                        'amount': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](ingredient.amount, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[1-9]+[0-9]*$/)])
                    }));
                }
            }
        }
        this.recipeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](recipeName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'imagePath': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](recipeImg, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](recipeDesc, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'ingredients': recipeIngredients
        });
    };
    RecipeEditComponent.prototype.addNewRecipe = function () {
        this.recipeForm.get('ingredients').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'amount': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[1-9]+[0-9]*$/)])
        }));
    };
    RecipeEditComponent.prototype.onSubmit = function () {
        // const newRecipe = new Recipe(this.recipeForm.value['name'],this.recipeForm.value['description'],this.recipeForm.value['imagePath'],this.recipeForm.value['ingredients']);
        if (this.editMode) {
            // this.recipeService.updateRecipe(this.id, this.recipeForm.value);
            this.dataService.updateRecipe(this.id, this.recipeForm.value);
        }
        else {
            // this.recipeService.addRecipe(this.recipeForm.value);
            this.dataService.addNewRecipe(this.recipeForm.value);
        }
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    RecipeEditComponent.prototype.onDeleteIngredient = function (index) {
        this.recipeForm.get('ingredients').removeAt(index);
    };
    RecipeEditComponent.prototype.onCancel = function () {
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    RecipeEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recipe-edit',
            template: __webpack_require__(/*! ./recipe-edit.component.html */ "./src/app/components/recipes/recipe-edit/recipe-edit.component.html"),
            styles: [__webpack_require__(/*! ./recipe-edit.component.css */ "./src/app/components/recipes/recipe-edit/recipe-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], RecipeEditComponent);
    return RecipeEditComponent;
}());



/***/ }),

/***/ "./src/app/components/recipes/recipe-list/recipe-item/recipe-item.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/recipes/recipe-list/recipe-item/recipe-item.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/recipes/recipe-list/recipe-item/recipe-item.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/recipes/recipe-list/recipe-item/recipe-item.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-2 clickable\" [routerLink]=\"[id]\"  routerLinkActive=\" bg-light border-primary \">\r\n    <div class=\"card-header\">\r\n        <h4>{{recipe.name}}</h4>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-6\">\r\n                {{recipe.description | slice:0:40}}\r\n            </div>\r\n            <div class=\"col-6\">\r\n                <img [src]=\"recipe.imagePath\" [alt]=\"recipe.name\" class=\"img img-fluid\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/recipes/recipe-list/recipe-item/recipe-item.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/recipes/recipe-list/recipe-item/recipe-item.component.ts ***!
  \*************************************************************************************/
/*! exports provided: RecipeItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeItemComponent", function() { return RecipeItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_recipe_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/recipe.model */ "./src/app/models/recipe.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecipeItemComponent = /** @class */ (function () {
    function RecipeItemComponent() {
    }
    RecipeItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_recipe_model__WEBPACK_IMPORTED_MODULE_1__["Recipe"])
    ], RecipeItemComponent.prototype, "recipe", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RecipeItemComponent.prototype, "id", void 0);
    RecipeItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recipe-item',
            template: __webpack_require__(/*! ./recipe-item.component.html */ "./src/app/components/recipes/recipe-list/recipe-item/recipe-item.component.html"),
            styles: [__webpack_require__(/*! ./recipe-item.component.css */ "./src/app/components/recipes/recipe-list/recipe-item/recipe-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RecipeItemComponent);
    return RecipeItemComponent;
}());



/***/ }),

/***/ "./src/app/components/recipes/recipe-list/recipe-list.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/recipes/recipe-list/recipe-list.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/recipes/recipe-list/recipe-list.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/recipes/recipe-list/recipe-list.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-3\">\r\n    <div class=\"col-12\">\r\n        <button (click)=\"onNew()\" routerLinkActive=\"router-link-active\"  class=\"btn btn-primary btn-sm\">New recipe</button>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-12\" style=\"overflow-y:scroll ; height:600px\">\r\n        <app-recipe-item *ngFor=\"let element of recipes; let i = index\" [recipe]=\"element\" [id]=\"element.id\"></app-recipe-item>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/recipes/recipe-list/recipe-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/recipes/recipe-list/recipe-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: RecipeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeListComponent", function() { return RecipeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecipeListComponent = /** @class */ (function () {
    function RecipeListComponent(router, route, dataService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        // recipes: Recipe[]=[];
        this.recipes = [];
    }
    RecipeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.recipes = this.recipeService.getRecipes();
        // this.subscription = this.recipeService.recipeChanged
        //   .subscribe((recipes: Recipe[]) => {
        //     this.recipes = recipes;
        //   });
        this.subscription = this.dataService.getUserRecipes().subscribe(function (recipes) { _this.recipes = recipes; });
    };
    RecipeListComponent.prototype.onNew = function () {
        this.router.navigate(['new'], { relativeTo: this.route });
    };
    RecipeListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    RecipeListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recipe-list',
            template: __webpack_require__(/*! ./recipe-list.component.html */ "./src/app/components/recipes/recipe-list/recipe-list.component.html"),
            styles: [__webpack_require__(/*! ./recipe-list.component.css */ "./src/app/components/recipes/recipe-list/recipe-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], RecipeListComponent);
    return RecipeListComponent;
}());



/***/ }),

/***/ "./src/app/components/recipes/recipe-start/recipe-start.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/recipes/recipe-start/recipe-start.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/recipes/recipe-start/recipe-start.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/recipes/recipe-start/recipe-start.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Please select a recipe</h3>"

/***/ }),

/***/ "./src/app/components/recipes/recipe-start/recipe-start.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/recipes/recipe-start/recipe-start.component.ts ***!
  \***************************************************************************/
/*! exports provided: RecipeStartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeStartComponent", function() { return RecipeStartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecipeStartComponent = /** @class */ (function () {
    function RecipeStartComponent() {
    }
    RecipeStartComponent.prototype.ngOnInit = function () {
    };
    RecipeStartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recipe-start',
            template: __webpack_require__(/*! ./recipe-start.component.html */ "./src/app/components/recipes/recipe-start/recipe-start.component.html"),
            styles: [__webpack_require__(/*! ./recipe-start.component.css */ "./src/app/components/recipes/recipe-start/recipe-start.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RecipeStartComponent);
    return RecipeStartComponent;
}());



/***/ }),

/***/ "./src/app/components/recipes/recipes.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/recipes/recipes.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/recipes/recipes.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/recipes/recipes.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-5\">\r\n    <app-recipe-list></app-recipe-list>\r\n  </div>\r\n  <div class=\"col-md-7\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/recipes/recipes.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/recipes/recipes.component.ts ***!
  \*********************************************************/
/*! exports provided: RecipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesComponent", function() { return RecipesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecipesComponent = /** @class */ (function () {
    function RecipesComponent() {
    }
    RecipesComponent.prototype.ngOnInit = function () { };
    RecipesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recipes',
            template: __webpack_require__(/*! ./recipes.component.html */ "./src/app/components/recipes/recipes.component.html"),
            styles: [__webpack_require__(/*! ./recipes.component.css */ "./src/app/components/recipes/recipes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RecipesComponent);
    return RecipesComponent;
}());



/***/ }),

/***/ "./src/app/components/shopping-list/shopping-edit/shopping-edit.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/shopping-list/shopping-edit/shopping-edit.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shopping-list/shopping-edit/shopping-edit.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/shopping-list/shopping-edit/shopping-edit.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <form (ngSubmit)=\"onAdd(f)\" #f=\"ngForm\" class=\"form\">\r\n      <div class=\"btn-toolbar\">\r\n        <div class=\"input-group\">\r\n          <input \r\n            name=\"amount\" \r\n            id=\"amount\" \r\n            type=\"number\" \r\n            class=\"form-control\"\r\n            ngModel\r\n            required\r\n            [pattern]=\"'^[1-9]+[0-9]*$'\"\r\n            placeholder=\"Amount\"\r\n          >\r\n          <input \r\n            name=\"name\" \r\n            id=\"name\" \r\n            type=\"text\" \r\n            class=\"form-control\"\r\n            ngModel\r\n            required\r\n            placeholder=\"Product\"\r\n          >\r\n        </div>\r\n        <div class=\"input-group\">\r\n          <div class=\"btn-group ml-4\">            \r\n            <button [disabled]=\"!f.valid\" class=\"btn btn-outline-success\" type=\"submit\">{{ editMode ? 'Update' : 'Add'}}</button>\r\n            <button *ngIf=\"editMode\" (click)=\"onDelete()\" class=\"btn btn-outline-danger\" type=\"button\">Delete</button>\r\n            <button (click)=\"onClear()\" class=\"btn btn-outline-secondary\" type=\"button\">Cancel</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/shopping-list/shopping-edit/shopping-edit.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/shopping-list/shopping-edit/shopping-edit.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ShoppingEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingEditComponent", function() { return ShoppingEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shopping_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/shopping.service */ "./src/app/services/shopping.service.ts");
/* harmony import */ var _models_ingredient_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/ingredient.model */ "./src/app/models/ingredient.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShoppingEditComponent = /** @class */ (function () {
    function ShoppingEditComponent(shoppingService) {
        this.shoppingService = shoppingService;
        this.editMode = false;
    }
    ShoppingEditComponent.prototype.onAdd = function (form) {
        if (this.editMode) {
            this.shoppingService.updateIngredient(this.editId, new _models_ingredient_model__WEBPACK_IMPORTED_MODULE_2__["Ingredient"](form.value.name, form.value.amount));
        }
        else {
            this.shoppingService.addIngredient(new _models_ingredient_model__WEBPACK_IMPORTED_MODULE_2__["Ingredient"](form.value.name, form.value.amount));
        }
        this.onClear();
    };
    ShoppingEditComponent.prototype.onDelete = function () {
        this.shoppingService.deleteIngredient(this.editId);
        this.onClear();
    };
    ShoppingEditComponent.prototype.onClear = function () {
        this.shopForm.reset();
        this.editMode = false;
    };
    ShoppingEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.shoppingService.startEdit.subscribe(function (index) {
            _this.editMode = true;
            _this.editId = index;
            _this.editItem = _this.shoppingService.getIngredient(index);
            _this.shopForm.setValue({
                name: _this.editItem.name,
                amount: _this.editItem.amount
            });
        });
    };
    ShoppingEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], ShoppingEditComponent.prototype, "shopForm", void 0);
    ShoppingEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping-edit',
            template: __webpack_require__(/*! ./shopping-edit.component.html */ "./src/app/components/shopping-list/shopping-edit/shopping-edit.component.html"),
            styles: [__webpack_require__(/*! ./shopping-edit.component.css */ "./src/app/components/shopping-list/shopping-edit/shopping-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shopping_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingService"]])
    ], ShoppingEditComponent);
    return ShoppingEditComponent;
}());



/***/ }),

/***/ "./src/app/components/shopping-list/shopping-list.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/shopping-list/shopping-list.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shopping-list/shopping-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/shopping-list/shopping-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-10\">\r\n    <app-shopping-edit></app-shopping-edit>\r\n    <hr>\r\n    <ul *ngFor=\"let ingredient of ingredients; let i = index\" class=\"list-group clickable\">\r\n      <li (click)=\"onEditItem(i)\" class=\"list-group-item\">{{ingredient.amount}} x {{ingredient.name}}</li>\r\n    </ul>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/shopping-list/shopping-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/shopping-list/shopping-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: ShoppingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListComponent", function() { return ShoppingListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shopping_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/shopping.service */ "./src/app/services/shopping.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingListComponent = /** @class */ (function () {
    function ShoppingListComponent(shoppingService) {
        this.shoppingService = shoppingService;
    }
    ShoppingListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ingredients = this.shoppingService.getIngredients();
        this.subscription = this.shoppingService.ingredientChanged
            .subscribe(function (ingredients) {
            _this.ingredients = ingredients;
        });
    };
    ShoppingListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ShoppingListComponent.prototype.onEditItem = function (index) {
        this.shoppingService.startEdit.next(index);
    };
    ShoppingListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping-list',
            template: __webpack_require__(/*! ./shopping-list.component.html */ "./src/app/components/shopping-list/shopping-list.component.html"),
            styles: [__webpack_require__(/*! ./shopping-list.component.css */ "./src/app/components/shopping-list/shopping-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shopping_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingService"]])
    ], ShoppingListComponent);
    return ShoppingListComponent;
}());



/***/ }),

/***/ "./src/app/directives/dropdown.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/directives/dropdown.directive.ts ***!
  \**************************************************/
/*! exports provided: DropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownDirective = /** @class */ (function () {
    function DropdownDirective(render, elementRef) {
        this.render = render;
        this.elementRef = elementRef;
        this.isOpen = false;
    }
    DropdownDirective.prototype.toggleDropdown = function (event) {
        this.isOpen = !this.isOpen;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.open'),
        __metadata("design:type", Object)
    ], DropdownDirective.prototype, "isOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], DropdownDirective.prototype, "toggleDropdown", null);
    DropdownDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appDropdown]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], DropdownDirective);
    return DropdownDirective;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
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




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, afAuth) {
        this.router = router;
        this.afAuth = afAuth;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (auth) {
            if (!auth) {
                _this.router.navigate(['/login']);
                return false;
            }
            else if (!auth.emailVerified) {
                _this.router.navigate(['/verify']);
                return false;
            }
            else {
                return true;
            }
        }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/models/ingredient.model.ts":
/*!********************************************!*\
  !*** ./src/app/models/ingredient.model.ts ***!
  \********************************************/
/*! exports provided: Ingredient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ingredient", function() { return Ingredient; });
var Ingredient = /** @class */ (function () {
    function Ingredient(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    return Ingredient;
}());



/***/ }),

/***/ "./src/app/models/recipe.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/recipe.model.ts ***!
  \****************************************/
/*! exports provided: Recipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recipe", function() { return Recipe; });
var Recipe = /** @class */ (function () {
    function Recipe(username, dateAdded, userId, id, name, description, imagePath, ingredients) {
        this.username = username;
        this.dateAdded = dateAdded;
        this.userId = userId;
        this.id = id;
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
    return Recipe;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        this.afAuth = afAuth;
    }
    AuthService.prototype.register = function (email, password, name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(function (userData) {
                userData.user.updateProfile({ displayName: name, photoURL: '' });
                userData.user.sendEmailVerification().then();
                resolve(userData);
            }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.signInWithEmailAndPassword(email, password).then(function (userData) { resolve(userData); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.getAuth = function () {
        return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (auth) { return auth; }));
    };
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = /** @class */ (function () {
    function DataService(db, authService) {
        var _this = this;
        this.db = db;
        this.authService = authService;
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.userId = auth.uid;
                _this.recipesCollection = _this.db.collection('recipes', function (ref) { return ref.where('userId', '==', _this.userId); });
            }
        });
    }
    DataService.prototype.getUser = function (uid) {
        var user = this.db.collection('users', function (ref) { return ref.where('userId', '==', uid); }).valueChanges();
        this.username = 'Naam';
        return user;
    };
    DataService.prototype.deleteRecipe = function (id) {
        this.recipeDoc = this.db.doc("recipes/" + id);
        this.recipeDoc.delete();
    };
    DataService.prototype.addNewRecipe = function (recipe) {
        recipe.userId = this.userId;
        recipe.dateAdded = new Date();
        this.recipesCollection.add(recipe);
    };
    DataService.prototype.updateRecipe = function (id, recipe) {
        this.recipeDoc = this.db.doc("recipes/" + id);
        this.recipeDoc.update(recipe);
    };
    DataService.prototype.getRecipe = function (id) {
        return this.db.doc("recipes/" + id).valueChanges();
    };
    DataService.prototype.getAllRecipes = function () {
        var _this = this;
        return this.recipesCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                // console.log(this.getUser(data.userId))
                _this.getUser(data.userId).subscribe(function (user) { data.username = _this.username; });
                // sub.unsubscribe();
                return data;
            });
        }));
    };
    DataService.prototype.getUserRecipes = function () {
        return this.db.collection('recipes').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/recipe.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/recipe.service.ts ***!
  \********************************************/
/*! exports provided: RecipeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeService", function() { return RecipeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shopping_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopping.service */ "./src/app/services/shopping.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecipeService = /** @class */ (function () {
    function RecipeService(shopping) {
        this.shopping = shopping;
        this.recipes = [];
        this.recipeChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    RecipeService.prototype.addRecipe = function (recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    };
    RecipeService.prototype.updateRecipe = function (index, recipe) {
        this.recipes[index] = recipe;
        this.recipeChanged.next(this.recipes.slice());
    };
    RecipeService.prototype.deleteRecipe = function (index) {
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    };
    RecipeService.prototype.getRecipes = function () {
        return this.recipes.slice();
    };
    RecipeService.prototype.getRecipe = function (id) {
        return this.recipes[id];
    };
    RecipeService.prototype.addToList = function (ingredients) {
        this.shopping.addToList(ingredients);
    };
    RecipeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shopping_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingService"]])
    ], RecipeService);
    return RecipeService;
}());



/***/ }),

/***/ "./src/app/services/shopping.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/shopping.service.ts ***!
  \**********************************************/
/*! exports provided: ShoppingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingService", function() { return ShoppingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_ingredient_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/ingredient.model */ "./src/app/models/ingredient.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShoppingService = /** @class */ (function () {
    function ShoppingService() {
        // public ingredientChanged = new EventEmitter<Ingredient[]>();
        this.ingredientChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.startEdit = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.ingredients = [
            new _models_ingredient_model__WEBPACK_IMPORTED_MODULE_1__["Ingredient"]('Apples', 5),
            new _models_ingredient_model__WEBPACK_IMPORTED_MODULE_1__["Ingredient"]('Tomatoes', 15),
        ];
    }
    ShoppingService.prototype.addIngredient = function (ingredient) {
        this.ingredients.unshift(ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    };
    ShoppingService.prototype.updateIngredient = function (index, ingredient) {
        this.ingredients[index] = ingredient;
        this.ingredientChanged.next(this.ingredients.slice());
    };
    ShoppingService.prototype.deleteIngredient = function (index) {
        this.ingredients.splice(index, 1);
        this.ingredientChanged.next(this.ingredients.slice());
    };
    ShoppingService.prototype.getIngredients = function () {
        return this.ingredients.slice();
    };
    ShoppingService.prototype.getIngredient = function (index) {
        return this.ingredients[index];
    };
    ShoppingService.prototype.addToList = function (ingredients) {
        var _a;
        //for(let ingredient of ingredients){}
        (_a = this.ingredients).push.apply(_a, ingredients);
        this.ingredientChanged.next(this.ingredients.slice());
    };
    ShoppingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ShoppingService);
    return ShoppingService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyD1pBUUH9X2hEoLoGe8tmZBIFyqWD_ngz4",
        authDomain: "shopper-755b7.firebaseapp.com",
        databaseURL: "https://shopper-755b7.firebaseio.com",
        projectId: "shopper-755b7",
        storageBucket: "shopper-755b7.appspot.com",
        messagingSenderId: "660072488579"
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\Shopper\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map