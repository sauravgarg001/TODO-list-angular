function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'TODO-list';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _user_user_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user/user.module */
    "./src/app/user/user.module.ts");
    /* harmony import */


    var _list_list_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./list/list.module */
    "./src/app/list/list.module.ts");
    /* harmony import */


    var _user_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./user/login/login.component */
    "./src/app/user/login/login.component.ts");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _list_list_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./list/list.service */
    "./src/app/list/list.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_app_service__WEBPACK_IMPORTED_MODULE_8__["AppService"], _list_list_service__WEBPACK_IMPORTED_MODULE_9__["ListService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _user_user_module__WEBPACK_IMPORTED_MODULE_5__["UserModule"], _list_list_module__WEBPACK_IMPORTED_MODULE_6__["ListModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([{
        path: 'login',
        component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
        pathMatch: 'full'
      }, {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }, {
        path: '*',
        redirectTo: 'login'
      }, {
        path: '**',
        redirectTo: 'login'
      }]), _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _user_user_module__WEBPACK_IMPORTED_MODULE_5__["UserModule"], _list_list_module__WEBPACK_IMPORTED_MODULE_6__["ListModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _user_user_module__WEBPACK_IMPORTED_MODULE_5__["UserModule"], _list_list_module__WEBPACK_IMPORTED_MODULE_6__["ListModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([{
            path: 'login',
            component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
            pathMatch: 'full'
          }, {
            path: '',
            redirectTo: 'login',
            pathMatch: 'full'
          }, {
            path: '*',
            redirectTo: 'login'
          }, {
            path: '**',
            redirectTo: 'login'
          }]), _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
          providers: [_app_service__WEBPACK_IMPORTED_MODULE_8__["AppService"], _list_list_service__WEBPACK_IMPORTED_MODULE_9__["ListService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.service.ts":
  /*!********************************!*\
    !*** ./src/app/app.service.ts ***!
    \********************************/

  /*! exports provided: AppService */

  /***/
  function srcAppAppServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppService", function () {
      return AppService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);

    var AppService = /*#__PURE__*/function () {
      function AppService(http) {
        _classCallCheck(this, AppService);

        this.http = http;
        this.url = 'http://ec2-54-167-94-143.compute-1.amazonaws.com:3000/api/v1/users';
      }

      _createClass(AppService, [{
        key: "handleError",
        value: function handleError(err) {
          return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]["throw"](err.message);
        }
      }, {
        key: "signup",
        value: function signup(data) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('firstName', data.firstName).set('lastName', data.lastName).set('mobileNumber', data.mobileNumber).set('email', data.email).set('password', data.password).set('countryCode', data.countryCode);
          return this.http.post("".concat(this.url, "/signup"), params);
        }
      }, {
        key: "login",
        value: function login(data) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('email', data.email).set('password', data.password);
          return this.http.post("".concat(this.url, "/login"), params);
        }
      }, {
        key: "forgotPassword",
        value: function forgotPassword(data) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('email', data.email);
          return this.http.post("".concat(this.url, "/forgot/password"), params);
        }
      }, {
        key: "changePassword",
        value: function changePassword(data) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('email', data.email).set('OTP', data.OTP).set('newPassword', data.newPassword);
          return this.http.put("".concat(this.url, "/change/password"), params);
        }
      }, {
        key: "logout",
        value: function logout() {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken'));
          return this.http.post("".concat(this.url, "/logout"), params);
        }
      }, {
        key: "getUser",
        value: function getUser() {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken'));
          return this.http.get("".concat(this.url, "/"), {
            params: params
          });
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken'));
          return this.http.get("".concat(this.url, "/all"), {
            params: params
          });
        }
      }, {
        key: "sendFriendRequest",
        value: function sendFriendRequest(data) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken')).set('email', data.email);
          return this.http.post("".concat(this.url, "/request/send"), params);
        }
      }, {
        key: "acceptFriendRequest",
        value: function acceptFriendRequest(data) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken')).set('email', data.email);
          return this.http.put("".concat(this.url, "/request/accept"), params);
        }
      }, {
        key: "declineFriendRequest",
        value: function declineFriendRequest(data) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken')).set('email', data.email);
          return this.http["delete"]("".concat(this.url, "/request/decline"), {
            params: params
          });
        }
      }, {
        key: "removeFriend",
        value: function removeFriend(data) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken')).set('email', data.email);
          return this.http["delete"]("".concat(this.url, "/friend/remove"), {
            params: params
          });
        }
      }, {
        key: "getUserInfoFromLocalStorage",
        value: function getUserInfoFromLocalStorage() {
          return JSON.parse(localStorage.getItem('userInfo'));
        }
      }, {
        key: "setUserInfoInLocalStorage",
        value: function setUserInfoInLocalStorage(data) {
          return localStorage.setItem('userInfo', JSON.stringify(data));
        }
      }, {
        key: "getCountryCode",
        value: function getCountryCode() {
          return this.http.get("http://country.io/phone.json");
        }
      }]);

      return AppService;
    }();

    AppService.ɵfac = function AppService_Factory(t) {
      return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AppService,
      factory: AppService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/list/dashboard/dashboard.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/list/dashboard/dashboard.component.ts ***!
    \*******************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppListDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var src_app_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/socket.service */
    "./src/app/socket.service.ts");
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../list.service */
    "./src/app/list/list.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _subTask_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./subTask.component */
    "./src/app/list/dashboard/subTask.component.ts");
    /* harmony import */


    var _friends_filter_friends_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../friends/filter-friends.pipe */
    "./src/app/list/friends/filter-friends.pipe.ts");

    function DashboardComponent_span_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r25.list.name);
      }
    }

    function DashboardComponent_span_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "TODO List");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        active: a0
      };
    };

    function DashboardComponent_button_28_Template(rf, ctx) {
      if (rf & 1) {
        var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_button_28_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

          var list_r32 = ctx.$implicit;

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r33.selectList(list_r32.listId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "fa-icon", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_button_28_Template_fa_icon_click_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

          var list_r32 = ctx.$implicit;

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r35.deleteList($event, list_r32.listId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var list_r32 = ctx.$implicit;

        var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, list_r32.isActive));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", list_r32.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r27.faTimes);
      }
    }

    function DashboardComponent_div_35_div_12_fa_icon_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 47);
      }

      if (rf & 2) {
        var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r39.faCircle);
      }
    }

    function DashboardComponent_div_35_div_12_span_4_fa_icon_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fa-icon", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_35_div_12_span_4_fa_icon_1_Template_fa_icon_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

          var contributer_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r49.addToContributor(contributer_r37.user_id.email, false);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r44.faEye);
      }
    }

    function DashboardComponent_div_35_div_12_span_4_fa_icon_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fa-icon", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_35_div_12_span_4_fa_icon_2_Template_fa_icon_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

          var contributer_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r52.addToContributor(contributer_r37.user_id.email, true);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r45.faPen);
      }
    }

    function DashboardComponent_div_35_div_12_span_4_fa_icon_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fa-icon", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_35_div_12_span_4_fa_icon_3_Template_fa_icon_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

          var contributer_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r55.grantAccessToEdit(contributer_r37.user_id.email);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r46.faPen);
      }
    }

    function DashboardComponent_div_35_div_12_span_4_fa_icon_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fa-icon", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_35_div_12_span_4_fa_icon_4_Template_fa_icon_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60);

          var contributer_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r58.grantAccessToRead(contributer_r37.user_id.email);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r47.faRemoveFormat);
      }
    }

    function DashboardComponent_div_35_div_12_span_4_fa_icon_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fa-icon", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_35_div_12_span_4_fa_icon_5_Template_fa_icon_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63);

          var contributer_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r61.removeFromContributor(contributer_r37.user_id.email);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r48.faMinus);
      }
    }

    function DashboardComponent_div_35_div_12_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_35_div_12_span_4_fa_icon_1_Template, 1, 1, "fa-icon", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_div_35_div_12_span_4_fa_icon_2_Template, 1, 1, "fa-icon", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DashboardComponent_div_35_div_12_span_4_fa_icon_3_Template, 1, 1, "fa-icon", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardComponent_div_35_div_12_span_4_fa_icon_4_Template, 1, 1, "fa-icon", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DashboardComponent_div_35_div_12_span_4_fa_icon_5_Template, 1, 1, "fa-icon", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var contributer_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", contributer_r37.isFriend);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", contributer_r37.isFriend);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !contributer_r37.canEdit && !contributer_r37.isFriend);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", contributer_r37.canEdit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !contributer_r37.isFriend);
      }
    }

    function DashboardComponent_div_35_div_12_small_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Owner ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DashboardComponent_div_35_div_12_small_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Editor ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DashboardComponent_div_35_div_12_small_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Viewer ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DashboardComponent_div_35_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_35_div_12_fa_icon_1_Template, 1, 1, "fa-icon", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardComponent_div_35_div_12_span_4_Template, 6, 5, "span", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DashboardComponent_div_35_div_12_small_5_Template, 2, 0, "small", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DashboardComponent_div_35_div_12_small_6_Template, 2, 0, "small", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DashboardComponent_div_35_div_12_small_7_Template, 2, 0, "small", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var contributer_r37 = ctx.$implicit;
        var i_r38 = ctx.index;

        var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-index", i_r38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", contributer_r37.isOnline);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", contributer_r37.user_id.firstName, " ", contributer_r37.user_id.lastName, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !contributer_r37.isSelf && ctx_r36.list.isOwner);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", contributer_r37.isOwner);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !contributer_r37.isOwner && contributer_r37.canEdit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !contributer_r37.canEdit && !contributer_r37.isFriend);
      }
    }

    function DashboardComponent_div_35_Template(rf, ctx) {
      if (rf & 1) {
        var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "fa-icon", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Share ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_div_35_Template_input_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66);

          var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r65.searchFriend = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DashboardComponent_div_35_div_12_Template, 8, 8, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "filterFriends");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r29.faShareSquare);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r29.searchFriend);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 3, ctx_r29.list.contributers, ctx_r29.searchFriend));
      }
    }

    function DashboardComponent_div_36_button_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_36_button_4_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

          var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r69.addTask();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Task ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r67.faPlus);
      }
    }

    function DashboardComponent_div_36_button_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_36_button_6_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72);

          var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r71.undoChanges();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Undo ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r68.faUndo);
      }
    }

    function DashboardComponent_div_36_Template(rf, ctx) {
      if (rf & 1) {
        var _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_div_36_Template_input_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74);

          var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r73.search = $event;
        })("keyup.enter", function DashboardComponent_div_36_Template_input_keyup_enter_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74);

          var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r75.addTask();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardComponent_div_36_button_4_Template, 3, 1, "button", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DashboardComponent_div_36_button_6_Template, 3, 1, "button", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r30.search);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.list.canEdit == true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.list.canEdit == true);
      }
    }

    function DashboardComponent_div_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "subtask", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("search", ctx_r31.search)("taskCounter", "")("list", ctx_r31.list)("tasks", ctx_r31.list.tasks)("email", ctx_r31.email);
      }
    }

    var _c1 = function _c1() {
      return ["/dashboard"];
    };

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(appService, listService, socketService, router) {
        _classCallCheck(this, DashboardComponent);

        this.appService = appService;
        this.listService = listService;
        this.socketService = socketService;
        this.router = router; //Font Awesome Icons

        this.faCheckSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCheckSquare"];
        this.faSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSquare"];
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTimes"];
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPlus"];
        this.faShareSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faShareSquare"];
        this.faShare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faShare"];
        this.faEye = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEye"];
        this.faMinus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faMinus"];
        this.faPen = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPen"];
        this.faRemoveFormat = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faRemoveFormat"];
        this.faUndo = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUndo"];
        this.faCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCircle"];
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('authToken');
          this.userId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('userId');
          if (!this.authToken || !this.userId) this.router.navigate(['/login']);else {
            //verify user
            this.authError();
            this.verifyUserConfirmation();

            var getLists = function getLists() {
              return new Promise(function (resolve, reject) {
                _this.listService.getLists().subscribe(function (apiResponse) {
                  console.log(apiResponse);

                  if (apiResponse.status === 200) {
                    _this.lists = apiResponse.data;
                    resolve();
                  } else {
                    reject(apiResponse.message);
                  }
                }, function (err) {
                  reject(err.error.message);
                });
              });
            };

            var getFriends = function getFriends() {
              return new Promise(function (resolve, reject) {
                _this.appService.getUser().subscribe(function (apiResponse) {
                  console.log(apiResponse);

                  if (apiResponse.status === 200) {
                    var user = apiResponse.data;
                    _this.firstName = user.firstName;
                    _this.lastName = user.lastName;
                    _this.email = user.email;
                    _this.friends = user.friends;

                    _this.getAddedFriend();

                    _this.getRemovedFriend();

                    _this.getOnlineUsers();

                    _this.getAddedOnlineUser();

                    _this.getRemovedOnlineUser();

                    resolve();
                  } else {
                    reject(apiResponse.message);
                  }
                }, function (err) {
                  reject(err.error.message);
                });
              });
            };

            var getList = function getList() {
              return new Promise(function (resolve, reject) {
                if (!_this.lists) return;

                var _iterator = _createForOfIteratorHelper(_this.lists),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var list = _step.value;

                    if (list.isActive) {
                      _this.listService.getList({
                        listId: list.listId
                      }).subscribe(function (apiResponse) {
                        if (apiResponse.status === 200) {
                          _this.list = apiResponse.data;
                          var selfFlag = true;
                          var totalContributers = _this.list.contributers.length;

                          for (var i = 0; i < _this.friends.length; i++) {
                            var flag = true;

                            for (var j = 0; j < totalContributers; j++) {
                              if (_this.list.contributers[j].user_id.userId == _this.userId && selfFlag) {
                                _this.list.contributers[j].isSelf = true;
                                console.log("Edit Access:" + _this.list.contributers[j].canEdit);
                                _this.list.canEdit = _this.list.contributers[j].canEdit;
                                if (_this.list.contributers[j].isOwner) _this.list.isOwner = true;else _this.list.isOwner = false;
                                selfFlag = false;
                              } else if (_this.list.contributers[j].user_id.email == _this.friends[i].user_id.email) {
                                flag = false;
                                if (!selfFlag) break;
                              }
                            }

                            if (flag) {
                              _this.list.contributers.push({
                                isFriend: true,
                                user_id: {
                                  email: _this.friends[i].user_id.email,
                                  firstName: _this.friends[i].user_id.firstName,
                                  lastName: _this.friends[i].user_id.lastName
                                }
                              });
                            }
                          }

                          resolve('Initialization Done');
                        } else {
                          reject(apiResponse.message);
                        }
                      }, function (err) {
                        reject(err.error.message);
                      });

                      break;
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              });
            };

            var addUndoOnKeypress = function addUndoOnKeypress(event) {
              if (event.keyCode == 90 && event.ctrlKey) _this.undoChanges();
            };

            getLists().then(getFriends).then(getList).then(function (msg) {
              console.info(msg);
              document.onkeydown = addUndoOnKeypress;

              _this.getAddedContributer();

              _this.getRemovedContributer();

              _this.getChangedAccessContributer();

              _this.getTasks();
            })["catch"](function (err) {
              alert(err);
            });
          }
        }
      }, {
        key: "goToFriends",
        value: function goToFriends() {
          var _this2 = this;

          this.socketService.exitSocket();
          setTimeout(function () {
            _this2.router.navigate(['/friends']);
          }, 500);
        }
      }, {
        key: "verifyUserConfirmation",
        value: function verifyUserConfirmation() {
          var _this3 = this;

          this.socketService.verifyUser().subscribe(function () {
            _this3.socketService.setUser();
          });
        }
      }, {
        key: "getOnlineUsers",
        value: function getOnlineUsers() {
          var _this4 = this;

          this.socketService.getOnlineUsers().subscribe(function (onlineFriends) {
            for (var i = 0; i < onlineFriends.length; i++) {
              for (var j = 0; j < _this4.friends.length; j++) {
                if (onlineFriends[i] == _this4.friends[j].user_id.email) {
                  _this4.friends[j].isOnline = true;

                  if (_this4.list) {
                    for (var k = 0; k < _this4.list.contributers.length; k++) {
                      if (onlineFriends[i] == _this4.list.contributers[k].user_id.email) {
                        _this4.list.contributers[k].isOnline = true;
                        break;
                      }
                    }
                  }

                  break;
                }
              }
            }
          });
        }
      }, {
        key: "getAddedOnlineUser",
        value: function getAddedOnlineUser() {
          var _this5 = this;

          this.socketService.getAddedOnlineUser().subscribe(function (onlineFriend) {
            for (var j = 0; j < _this5.friends.length; j++) {
              if (onlineFriend == _this5.friends[j].user_id.email) {
                _this5.friends[j].isOnline = true;

                if (_this5.list) {
                  for (var k = 0; k < _this5.list.contributers.length; k++) {
                    if (onlineFriend == _this5.list.contributers[k].user_id.email) {
                      _this5.list.contributers[k].isOnline = true;
                      break;
                    }
                  }
                }

                break;
              }
            }
          });
        }
      }, {
        key: "getRemovedOnlineUser",
        value: function getRemovedOnlineUser() {
          var _this6 = this;

          this.socketService.getRemovedOnlineUser().subscribe(function (onlineFriend) {
            for (var j = 0; j < _this6.friends.length; j++) {
              if (onlineFriend == _this6.friends[j].user_id.email) {
                delete _this6.friends[j].isOnline;

                if (_this6.list) {
                  for (var k = 0; k < _this6.list.contributers.length; k++) {
                    if (onlineFriend == _this6.list.contributers[k].user_id.email) {
                      _this6.list.contributers[k].isOnline = false;
                      break;
                    }
                  }
                }

                break;
              }
            }
          });
        }
      }, {
        key: "authError",
        value: function authError() {
          var _this7 = this;

          this.socketService.authError().subscribe(function (data) {
            setTimeout(function () {
              _this7.logout(data.error);
            }, 200);
          });
        }
      }, {
        key: "disconnectedSocket",
        value: function disconnectedSocket() {
          this.socketService.disconnectedSocket().subscribe(function () {
            location.reload();
          });
        }
      }, {
        key: "logout",
        value: function logout(err) {
          this.socketService.exitSocket();
          this.appService.logout().subscribe(function (apiResponse) {
            console.log(apiResponse);

            if (apiResponse.status === 200) {
              alert(err || apiResponse.message);
            } else {
              alert(err || apiResponse.message);
            }
          }, function (err) {
            alert(err || err.error.message);
          });
          ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"]["delete"]('authToken');
          ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"]["delete"]('userId');
          this.router.navigate(['/login']);
        }
      }, {
        key: "getAddedFriend",
        value: function getAddedFriend() {
          var _this8 = this;

          this.socketService.getAddedContributer().subscribe(function (data) {
            _this8.friends.push({
              createdOn: data.createdOn,
              user_id: {
                email: data.email,
                firstName: data.firstName,
                lastName: data.lastName
              }
            });

            var flag = true;

            for (var i = 0; i < _this8.list.contributers.length; i++) {
              if (_this8.list.contributers[i].user_id.email == data.email) {
                flag = false;
                break;
              }
            }

            if (flag) {
              _this8.list.contributers.push({
                isFriend: true,
                user_id: {
                  email: data.email,
                  firstName: data.firstName,
                  lastName: data.lastName
                }
              });
            }
          });
        }
      }, {
        key: "getRemovedFriend",
        value: function getRemovedFriend() {
          var _this9 = this;

          this.socketService.getRemovedFriend().subscribe(function (data) {
            for (var i = 0; i < _this9.friends.length; i++) {
              if (_this9.friends.user_id.email == data.email) {
                _this9.friends.splice(i, 1);

                break;
              }
            }

            for (var _i = 0; _i < _this9.list.contributers.length; _i++) {
              if (_this9.list.contributers[_i].user_id.email == data.email && _this9.list.contributers[_i].isFriend) {
                delete _this9.list.contributers[_i].isFriend;
                break;
              }
            }
          });
        }
      }, {
        key: "createList",
        value: function createList(listName) {
          var _this10 = this;

          if (!listName.value) {
            alert('Enter required fields!');
            return;
          }

          var data = {
            name: listName.value
          };
          this.listService.createList(data).subscribe(function (apiResponse) {
            console.log(apiResponse);

            if (apiResponse.status === 200) {
              var list = apiResponse.data;
              if (!_this10.lists) _this10.lists = Array();

              _this10.lists.push(list);

              listName.value = '';

              _this10.selectList(list.listId);
            } else {
              alert(apiResponse.message);
            }
          }, function (err) {
            alert(err.error.message);
          });
        }
      }, {
        key: "deleteList",
        value: function deleteList(event, listId) {
          var _this11 = this;

          event.stopPropagation();
          var data = {
            listId: listId
          };
          var index = -1;

          for (var i = 0; i < this.lists.length; i++) {
            if (this.lists[i].listId == listId) {
              index = i;
              break;
            }
          } //RTC


          this.listService.getList({
            listId: listId
          }).subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
              var list = apiResponse.data;

              for (var _i2 = 0; _i2 < list.contributers.length; _i2++) {
                if (list.contributers[_i2].user_id.email != _this11.email) {
                  _this11.socketService.setUpdates({
                    eventName: 'remove-contributer',
                    listId: listId,
                    email: list.contributers[_i2].user_id.email
                  });
                }
              }
            } else {
              alert(apiResponse.message);
            }
          }, function (err) {
            alert(err.error.message);
          });
          this.listService.removeList(data).subscribe(function (apiResponse) {
            console.log(apiResponse);

            if (apiResponse.status === 200) {
              _this11.lists.splice(index, 1);

              if (_this11.list && _this11.list.listId == listId) _this11.list = undefined;
            } else {
              alert(apiResponse.message);
            }
          }, function (err) {
            alert(err.error.message);
          });
        }
      }, {
        key: "selectList",
        value: function selectList(listId) {
          var _this12 = this;

          var data = {
            listId: listId
          };
          this.listService.markListAsActive(data).subscribe(function (apiResponse) {
            console.log(apiResponse);

            if (apiResponse.status === 200) {
              _this12.list = apiResponse.data;
              var selfFlag = true;

              for (var i = 0; i < _this12.friends.length; i++) {
                var flag = true;

                for (var j = 0; j < _this12.list.contributers.length; j++) {
                  if (_this12.list.contributers[j].user_id.userId == _this12.userId && selfFlag) {
                    _this12.list.contributers[j].isSelf = true;
                    _this12.list.canEdit = _this12.list.contributers[j].canEdit;
                    if (_this12.list.contributers[j].isOwner) _this12.list.isOwner = true;else _this12.list.isOwner = false;
                    selfFlag = false;
                  } else if (_this12.list.contributers[j].user_id.email == _this12.friends[i].user_id.email) {
                    flag = false;
                    break;
                  }
                }

                if (flag) {
                  _this12.list.contributers.push({
                    isFriend: true,
                    user_id: {
                      email: _this12.friends[i].user_id.email,
                      firstName: _this12.friends[i].user_id.firstName,
                      lastName: _this12.friends[i].user_id.lastName
                    }
                  });
                }
              } //change active list


              for (var _i3 = 0; _i3 < _this12.lists.length; _i3++) {
                if (_this12.lists[_i3].listId == listId) {
                  _this12.lists[_i3].isActive = true;
                } else if (_this12.lists[_i3].isActive) {
                  _this12.lists[_i3].isActive = false;
                }
              }
            } else {
              alert(apiResponse.message);
            }
          }, function (err) {
            alert(err.error.message);
          });
        }
      }, {
        key: "addTask",
        value: function addTask() {
          var _this13 = this;

          if (!this.search || !this.list.canEdit) return;
          var data = {
            text: this.search,
            listId: this.list.listId,
            index: -1
          };
          this.listService.addTask(data).subscribe(function (apiResponse) {
            console.log(apiResponse);

            if (apiResponse.status === 200) {
              _this13.list.tasks.push({
                text: data.text,
                subTasks: [],
                isOpen: true,
                createdOn: Date.now(),
                modifiedOn: Date.now()
              }); //RTC


              for (var i = 0; i < _this13.list.contributers.length; i++) {
                if (_this13.list.contributers[i].user_id.email != _this13.email && !_this13.list.contributers[i].isFriend) {
                  _this13.socketService.setUpdates({
                    eventName: 'tasks',
                    listId: _this13.list.listId,
                    email: _this13.list.contributers[i].user_id.email,
                    tasks: _this13.list.tasks
                  });
                }
              }

              _this13.search = '';
            } else {
              alert(apiResponse.message);
            }
          }, function (err) {
            alert(err.error.message);
          });
        }
      }, {
        key: "addToContributor",
        value: function addToContributor(email, canEdit) {
          var _this14 = this;

          var data = {
            email: email,
            canEdit: canEdit,
            listId: this.list.listId,
            name: this.list.name
          };
          this.listService.addContributor(data).subscribe(function (apiResponse) {
            console.log(apiResponse);

            if (apiResponse.status === 200) {
              for (var i = 0; i < _this14.list.contributers.length; i++) {
                if (_this14.list.contributers[i].user_id.email == email) {
                  delete _this14.list.contributers[i].isFriend;

                  _this14.socketService.setUpdates({
                    eventName: 'add-contributer',
                    listId: _this14.list.listId,
                    email: _this14.list.contributers[i].user_id.email,
                    createdOn: Date.now(),
                    name: _this14.list.name,
                    canEdit: canEdit
                  });

                  _this14.list.contributers[i].canEdit = canEdit;
                  break;
                }
              }
            } else {
              alert(apiResponse.message);
            }
          }, function (err) {
            alert(err.error.message);
          });
        }
      }, {
        key: "getAddedContributer",
        value: function getAddedContributer() {
          var _this15 = this;

          this.socketService.getAddedContributer().subscribe(function (data) {
            if (data.email == _this15.email) {
              _this15.lists.push({
                createdOn: data.createdOn,
                isActive: false,
                listId: data.listId,
                modifiedOn: data.createdOn,
                name: data.name
              });
            } else if (_this15.list && _this15.list.listId == data.listId) {
              for (var i = 0; i < _this15.list.contributers.length; i++) {
                if (_this15.list.contributers[i].user_id.email == data.email) {
                  delete _this15.list.contributers[i].isFriend;
                  _this15.list.contributers[i].canEdit = data.canEdit;
                  break;
                }
              }
            }
          });
        }
      }, {
        key: "removeFromContributor",
        value: function removeFromContributor(email) {
          var _this16 = this;

          var data = {
            email: email,
            listId: this.list.listId
          };
          this.listService.removeContributor(data).subscribe(function (apiResponse) {
            console.log(apiResponse);

            if (apiResponse.status === 200) {
              for (var i = 0; i < _this16.list.contributers.length; i++) {
                if (_this16.list.contributers[i].user_id.email == email) {
                  _this16.list.contributers[i].isFriend = true;

                  _this16.socketService.setUpdates({
                    eventName: 'remove-contributer',
                    listId: _this16.list.listId,
                    email: _this16.list.contributers[i].user_id.email
                  });

                  delete _this16.list.contributers[i].canEdit;
                  break;
                }
              }
            } else {
              alert(apiResponse.message);
            }
          }, function (err) {
            alert(err.error.message);
          });
        }
      }, {
        key: "getRemovedContributer",
        value: function getRemovedContributer() {
          var _this17 = this;

          this.socketService.getRemovedContributer().subscribe(function (data) {
            if (data.email == _this17.email) {
              for (var i = 0; i < _this17.lists.length; i++) {
                if (_this17.lists[i].listId == data.listId) {
                  if (_this17.lists[i].isActive) _this17.list = undefined;

                  _this17.lists.splice(i, 1);

                  break;
                }
              }
            } else if (_this17.list.listId == data.listId) {
              for (var _i4 = 0; _i4 < _this17.list.contributers.length; _i4++) {
                if (_this17.list.contributers[_i4].user_id.email == data.email) {
                  if (_this17.list.contributers[_i4].isOwner) {
                    for (var j = 0; j < _this17.lists.length; j++) {
                      if (_this17.lists[j].listId == data.listId) {
                        if (_this17.lists[j].isActive) _this17.list = undefined;

                        _this17.lists.splice(j, 1);

                        break;
                      }
                    }

                    break;
                  } else {
                    _this17.list.contributers[_i4].isFriend = true;
                    delete _this17.list.contributers[_i4].canEdit;
                    break;
                  }
                }
              }
            }
          });
        }
      }, {
        key: "grantAccessToEdit",
        value: function grantAccessToEdit(email) {
          var _this18 = this;

          var data = {
            email: email,
            listId: this.list.listId
          };
          this.listService.grantAccessToEdit(data).subscribe(function (apiResponse) {
            console.log(apiResponse);

            if (apiResponse.status === 200) {
              for (var i = 0; i < _this18.list.contributers.length; i++) {
                if (_this18.list.contributers[i].user_id.email == email) {
                  _this18.socketService.setUpdates({
                    eventName: 'change-contributer',
                    listId: _this18.list.listId,
                    email: _this18.list.contributers[i].user_id.email,
                    modifiedOn: Date.now(),
                    canEdit: true
                  });

                  _this18.list.contributers[i].canEdit = true;
                  break;
                }
              }
            } else {
              alert(apiResponse.message);
            }
          }, function (err) {
            alert(err.error.message);
          });
        }
      }, {
        key: "grantAccessToRead",
        value: function grantAccessToRead(email) {
          var _this19 = this;

          var data = {
            email: email,
            listId: this.list.listId
          };
          this.listService.grantAccessToRead(data).subscribe(function (apiResponse) {
            console.log(apiResponse);

            if (apiResponse.status === 200) {
              for (var i = 0; i < _this19.list.contributers.length; i++) {
                if (_this19.list.contributers[i].user_id.email == email) {
                  _this19.socketService.setUpdates({
                    eventName: 'change-contributer',
                    listId: _this19.list.listId,
                    email: _this19.list.contributers[i].user_id.email,
                    modifiedOn: Date.now(),
                    canEdit: false
                  });

                  _this19.list.contributers[i].canEdit = false;
                  break;
                }
              }
            } else {
              alert(apiResponse.message);
            }
          }, function (err) {
            alert(err.error.message);
          });
        }
      }, {
        key: "getChangedAccessContributer",
        value: function getChangedAccessContributer() {
          var _this20 = this;

          this.socketService.getChangedAccessContributer().subscribe(function (data) {
            if (_this20.list.listId == data.listId) {
              for (var i = 0; i < _this20.list.contributers.length; i++) {
                if (_this20.list.contributers[i].user_id.email == data.email) {
                  _this20.list.contributers[i].canEdit = data.canEdit;
                  _this20.list.contributers[i].modifiedOn = data.modifiedOn;

                  if (_this20.list.contributers[i].isSelf) {
                    _this20.list.canEdit = data.canEdit;
                  }

                  break;
                }
              }
            }
          });
        }
      }, {
        key: "undoChanges",
        value: function undoChanges() {
          var _this21 = this;

          if (!this.list || !this.list.canEdit) return;
          var data = {
            listId: this.list.listId
          };
          this.listService.undo(data).subscribe(function (apiResponse) {
            console.log(apiResponse);

            if (apiResponse.status === 200) {
              _this21.list.tasks = apiResponse.data; //RTC

              for (var i = 0; i < _this21.list.contributers.length; i++) {
                if (_this21.list.contributers[i].user_id.email != _this21.email && !_this21.list.contributers[i].isFriend) {
                  _this21.socketService.setUpdates({
                    eventName: 'tasks',
                    listId: _this21.list.listId,
                    email: _this21.list.contributers[i].user_id.email,
                    tasks: _this21.list.tasks
                  });
                }
              }
            } else {
              alert(apiResponse.message);
            }
          }, function (err) {
            alert(err.error.message);
          });
        }
      }, {
        key: "getTasks",
        value: function getTasks() {
          var _this22 = this;

          this.socketService.getUpdatedTasks().subscribe(function (data) {
            if (_this22.list.listId == data.listId) _this22.list.tasks = data.tasks;
          });
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([src_app_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]])],
      decls: 38,
      vars: 8,
      consts: [[1, "container-fluid", "p-0"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarTogglerDemo03", "aria-controls", "navbarTogglerDemo03", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarTogglerDemo03", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto", "mt-2", "mt-lg-0"], [1, "nav-item", "active"], [1, "nav-link", 3, "routerLink"], [1, "sr-only"], [1, "nav-item"], [1, "nav-link", 3, "click"], [1, "form-inline", "my-2", "my-lg-0"], ["type", "button", 1, "btn", "btn-outline-danger", "my-2", "my-sm-0", 3, "click"], [1, "jumbotron", "jumbotron-fluid"], [1, "container"], [1, "display-4", "text-center"], [4, "ngIf"], [1, "form-row", "mb-3", "mt-5"], [1, "col-md-10"], [1, "dropdown"], ["type", "button", "id", "dropdownMenuLists", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-dark", "dropdown-toggle", "btn-block"], ["aria-labelledby", "dropdownMenuLists", 1, "dropdown-menu", "dropdown-menu-right"], ["class", "dropdown-item", "type", "button", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "input-group"], ["type", "text", 1, "form-control"], ["newListName", ""], [1, "input-group-append"], ["type", "button", 1, "form-control", "btn-block", "btn-secondary", "input-group-text", 3, "click"], ["class", "col-md-2", 4, "ngIf"], ["class", "form-row mb-3 mt-5", 4, "ngIf"], ["class", "form-row", 4, "ngIf"], ["type", "button", 1, "dropdown-item", 3, "ngClass", "click"], [1, "text-danger", "float-right", 2, "cursor", "pointer", 3, "icon", "click"], [1, "col-md-2"], ["type", "button", "id", "dropdownMenuLists2", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-primary", "dropdown-toggle", "btn-block"], [1, "mr-2", 3, "icon"], ["aria-labelledby", "dropdownMenuLists2", 1, "dropdown-menu"], [1, "form-row"], [1, "col-12"], ["type", "search", "name", "searchFriend", "placeholder", "Search friends", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], ["class", "text-success", "data-toggle", "tooltip", "data-placement", "top", "title", "Online", 3, "icon", 4, "ngIf"], [1, "text"], ["class", "float-right", 4, "ngIf"], ["class", "float-right text-muted", 4, "ngIf"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Online", 1, "text-success", 3, "icon"], [1, "float-right"], ["style", "cursor: pointer;", "data-toggle", "tooltip", "data-placement", "top", "title", "Make viewer", 3, "icon", "click", 4, "ngIf"], ["style", "cursor: pointer;", "data-toggle", "tooltip", "data-placement", "top", "title", "Make editor", 3, "icon", "click", 4, "ngIf"], ["style", "cursor: pointer;", "data-toggle", "tooltip", "data-placement", "top", "title", "Make viewer only", 3, "icon", "click", 4, "ngIf"], ["style", "cursor: pointer;", "data-toggle", "tooltip", "data-placement", "top", "title", "Remove from contributers", 3, "icon", "click", 4, "ngIf"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Make viewer", 2, "cursor", "pointer", 3, "icon", "click"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Make editor", 2, "cursor", "pointer", 3, "icon", "click"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Make viewer only", 2, "cursor", "pointer", 3, "icon", "click"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Remove from contributers", 2, "cursor", "pointer", 3, "icon", "click"], [1, "float-right", "text-muted"], [1, "col-md-8"], ["type", "search", "name", "search", "placeholder", "Search or add new task", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "keyup.enter"], ["type", "button", "style", "cursor: pointer;", "class", "form-control form-control-sm btn-block btn-dark btn-sm", 3, "click", 4, "ngIf"], ["type", "button", "style", "cursor: pointer;", "class", "form-control form-control-sm btn-block btn-danger btn-sm", 3, "click", 4, "ngIf"], ["type", "button", 1, "form-control", "form-control-sm", "btn-block", "btn-dark", "btn-sm", 2, "cursor", "pointer", 3, "click"], ["type", "button", 1, "form-control", "form-control-sm", "btn-block", "btn-danger", "btn-sm", 2, "cursor", "pointer", 3, "click"], ["id", "todo-list", 1, "col"], [3, "search", "taskCounter", "list", "tasks", "email"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_12_listener() {
            return ctx.goToFriends();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Friends");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_15_listener() {
            return ctx.logout(null);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DashboardComponent_span_20_Template, 2, 1, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DashboardComponent_span_21_Template, 2, 0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Lists ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, DashboardComponent_button_28_Template, 3, 5, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 24, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_33_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76);

            var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);

            return ctx.createList(_r28);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Create new List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, DashboardComponent_div_35_Template, 14, 6, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, DashboardComponent_div_36_Template, 7, 3, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, DashboardComponent_div_37_Template, 3, 5, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.list);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lists);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FaIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _subTask_component__WEBPACK_IMPORTED_MODULE_10__["SubtaskComponent"]],
      pipes: [_friends_filter_friends_pipe__WEBPACK_IMPORTED_MODULE_11__["FilterFriendsPipe"]],
      styles: [".isDone[_ngcontent-%COMP%], .isOpen[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n\r\n.isOpen[_ngcontent-%COMP%] > .open[_ngcontent-%COMP%] {\r\n    display: unset;\r\n}\r\n\r\n.isOpen[_ngcontent-%COMP%] > .done[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.isOpen[_ngcontent-%COMP%] > .text[_ngcontent-%COMP%] {\r\n    text-decoration: none !important;\r\n}\r\n\r\n.isDone[_ngcontent-%COMP%] > .open[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.isDone[_ngcontent-%COMP%] > .done[_ngcontent-%COMP%] {\r\n    display: unset;\r\n}\r\n\r\n.isDone[_ngcontent-%COMP%] > .text[_ngcontent-%COMP%] {\r\n    text-decoration: line-through !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx3Q0FBd0M7QUFDNUMiLCJmaWxlIjoic3JjL2FwcC9saXN0L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pc0RvbmUsXHJcbi5pc09wZW4ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaXNPcGVuPi5vcGVuIHtcclxuICAgIGRpc3BsYXk6IHVuc2V0O1xyXG59XHJcblxyXG4uaXNPcGVuPi5kb25lIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5pc09wZW4+LnRleHQge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pc0RvbmU+Lm9wZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmlzRG9uZT4uZG9uZSB7XHJcbiAgICBkaXNwbGF5OiB1bnNldDtcclxufVxyXG5cclxuLmlzRG9uZT4udGV4dCB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaCAhaW1wb3J0YW50O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.css'],
          providers: [src_app_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]]
        }]
      }], function () {
        return [{
          type: src_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]
        }, {
          type: _list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"]
        }, {
          type: src_app_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/list/dashboard/search.pipe.ts":
  /*!***********************************************!*\
    !*** ./src/app/list/dashboard/search.pipe.ts ***!
    \***********************************************/

  /*! exports provided: SearchPipe */

  /***/
  function srcAppListDashboardSearchPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchPipe", function () {
      return SearchPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SearchPipe = /*#__PURE__*/function () {
      function SearchPipe() {
        _classCallCheck(this, SearchPipe);
      }

      _createClass(SearchPipe, [{
        key: "transform",
        value: function transform(tasks, filter) {
          var _this23 = this;

          if (!tasks || !filter) {
            return tasks;
          }

          return tasks.filter(function (task) {
            return task.text.indexOf(filter) != -1 || _this23.checkSubtasks(task.subTasks, filter);
          });
        }
      }, {
        key: "checkSubtasks",
        value: function checkSubtasks(tasks, filter) {
          if (!tasks) return false;

          var _iterator2 = _createForOfIteratorHelper(tasks),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var task = _step2.value;
              if (task.text.indexOf(filter) != -1 || this.checkSubtasks(task.subTasks, filter)) return true;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          return false;
        }
      }]);

      return SearchPipe;
    }();

    SearchPipe.ɵfac = function SearchPipe_Factory(t) {
      return new (t || SearchPipe)();
    };

    SearchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "search",
      type: SearchPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'search'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/list/dashboard/subTask.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/list/dashboard/subTask.component.ts ***!
    \*****************************************************/

  /*! exports provided: SubtaskComponent */

  /***/
  function srcAppListDashboardSubTaskComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubtaskComponent", function () {
      return SubtaskComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../list.service */
    "./src/app/list/list.service.ts");
    /* harmony import */


    var src_app_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/socket.service */
    "./src/app/socket.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _search_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./search.pipe */
    "./src/app/list/dashboard/search.pipe.ts");

    function SubtaskComponent_div_0_div_1_fa_icon_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fa-icon", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubtaskComponent_div_0_div_1_fa_icon_6_Template_fa_icon_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85);

          var i_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r84.removeTask($event, ctx_r84.taskCounter + i_r80);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r81.faTimes);
      }
    }

    function SubtaskComponent_div_0_div_1_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 13, 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function SubtaskComponent_div_0_div_1_div_7_Template_input_keyup_enter_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89);

          var _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var i_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r88.addSubTask($event, ctx_r88.taskCounter + i_r80, _r87);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubtaskComponent_div_0_div_1_div_7_Template_span_click_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89);

          var _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var i_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r91.addSubTask($event, ctx_r91.taskCounter + i_r80, _r87);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "fa-icon", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r82.faPlus);
      }
    }

    function SubtaskComponent_div_0_div_1_subtask_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "subtask", 18);
      }

      if (rf & 2) {
        var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var i_r80 = ctx_r93.index;
        var task_r79 = ctx_r93.$implicit;

        var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("search", ctx_r83.search)("list", ctx_r83.list)("taskCounter", ctx_r83.taskCounter + i_r80 + ".")("tasks", task_r79.subTasks)("email", ctx_r83.email);
      }
    }

    var _c0 = function _c0(a0, a1) {
      return {
        isOpen: a0,
        isDone: a1
      };
    };

    function SubtaskComponent_div_0_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubtaskComponent_div_0_div_1_Template_span_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95);

          var i_r80 = ctx.index;

          var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r94.toggleTaskStatus($event, ctx_r94.taskCounter + i_r80);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "fa-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SubtaskComponent_div_0_div_1_fa_icon_6_Template, 1, 1, "fa-icon", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SubtaskComponent_div_0_div_1_div_7_Template, 6, 1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SubtaskComponent_div_0_div_1_subtask_8_Template, 1, 5, "subtask", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var task_r79 = ctx.$implicit;
        var i_r80 = ctx.index;

        var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-index", i_r80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c0, task_r79.isOpen, !task_r79.isOpen));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r78.faSquare);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r78.faCheckSquare);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r79.text);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r78.search && ctx_r78.list.canEdit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r78.search && ctx_r78.list.canEdit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r79.subTasks);
      }
    }

    function SubtaskComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SubtaskComponent_div_0_div_1_Template, 9, 11, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "search");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r77.tasks, ctx_r77.search));
      }
    }

    var SubtaskComponent = /*#__PURE__*/function () {
      function SubtaskComponent(appService, listService, socketService, router) {
        _classCallCheck(this, SubtaskComponent);

        this.appService = appService;
        this.listService = listService;
        this.socketService = socketService;
        this.router = router; //Font Awesome Icons

        this.faCheckSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCheckSquare"];
        this.faSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSquare"];
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTimes"];
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlus"];
      }

      _createClass(SubtaskComponent, [{
        key: "toggleTaskStatus",
        value: function toggleTaskStatus(event, taskNumber) {
          var _this24 = this;

          if (!this.list.canEdit) {
            alert('Only Read Access');
            return;
          }

          if (this.search) {
            alert("Clear search first!");
            return;
          }

          event.stopPropagation();
          var tempTaskNumber = taskNumber;
          var tasks = this.list.tasks;
          var task;

          while (tempTaskNumber.indexOf('.') != -1) {
            task = tasks[parseInt(tempTaskNumber.substring(0, tempTaskNumber.indexOf('.')))];
            tasks = task.subTasks;
            tempTaskNumber = tempTaskNumber.substring(tempTaskNumber.indexOf('.') + 1);
          }

          task = tasks[parseInt(tempTaskNumber)];

          if (task.isOpen) {
            var data = {
              listId: this.list.listId,
              index: taskNumber
            };
            this.listService.markTaskAsDone(data).subscribe(function (apiResponse) {
              console.log(apiResponse);

              if (apiResponse.status === 200) {
                task.isOpen = false; //RTC

                for (var i = 0; i < _this24.list.contributers.length; i++) {
                  if (_this24.list.contributers[i].user_id.email != _this24.email && !_this24.list.contributers[i].isFriend) {
                    _this24.socketService.setUpdates({
                      eventName: 'tasks',
                      listId: _this24.list.listId,
                      email: _this24.list.contributers[i].user_id.email,
                      tasks: _this24.list.tasks
                    });
                  }
                }
              } else {
                alert(apiResponse.message);
              }
            }, function (err) {
              alert(err.error.message);
            });
          } else {
            var _data = {
              listId: this.list.listId,
              index: taskNumber
            };
            this.listService.markTaskAsOpen(_data).subscribe(function (apiResponse) {
              console.log(apiResponse);

              if (apiResponse.status === 200) {
                task.isOpen = true; //RTC

                for (var i = 0; i < _this24.list.contributers.length; i++) {
                  if (_this24.list.contributers[i].user_id.email != _this24.email && !_this24.list.contributers[i].isFriend) {
                    _this24.socketService.setUpdates({
                      eventName: 'tasks',
                      listId: _this24.list.listId,
                      email: _this24.list.contributers[i].user_id.email,
                      tasks: _this24.list.tasks
                    });
                  }
                }
              } else {
                alert(apiResponse.message);
              }
            }, function (err) {
              alert(err.error.message);
            });
          }
        }
      }, {
        key: "removeTask",
        value: function removeTask(event, taskNumber) {
          var _this25 = this;

          event.stopPropagation();
          var data = {
            listId: this.list.listId,
            index: taskNumber
          };
          this.listService.removeTask(data).subscribe(function (apiResponse) {
            console.log(apiResponse);

            if (apiResponse.status === 200) {
              var tempTaskNumber = taskNumber;
              var tasks = _this25.list.tasks;
              var task;

              while (tempTaskNumber.indexOf('.') != -1) {
                task = tasks[parseInt(tempTaskNumber.substring(0, tempTaskNumber.indexOf('.')))];
                tasks = task.subTasks;
                tempTaskNumber = tempTaskNumber.substring(tempTaskNumber.indexOf('.') + 1);
              }

              tasks.splice(tempTaskNumber, 1); //RTC

              for (var i = 0; i < _this25.list.contributers.length; i++) {
                if (_this25.list.contributers[i].user_id.email != _this25.email && !_this25.list.contributers[i].isFriend) {
                  _this25.socketService.setUpdates({
                    eventName: 'tasks',
                    listId: _this25.list.listId,
                    email: _this25.list.contributers[i].user_id.email,
                    tasks: _this25.list.tasks
                  });
                }
              }
            } else {
              alert(apiResponse.message);
            }
          }, function (err) {
            alert(err.error.message);
          });
        }
      }, {
        key: "addSubTask",
        value: function addSubTask(event, taskNumber, text) {
          var _this26 = this;

          event.stopPropagation();
          if (!text.value) return;
          var data = {
            text: text.value,
            listId: this.list.listId,
            index: taskNumber
          };
          this.listService.addTask(data).subscribe(function (apiResponse) {
            console.log(apiResponse);

            if (apiResponse.status === 200) {
              var tempTaskNumber = taskNumber;
              var tasks = _this26.list.tasks;
              var task;

              while (tempTaskNumber.indexOf('.') != -1) {
                task = tasks[parseInt(tempTaskNumber.substring(0, tempTaskNumber.indexOf('.')))];
                tasks = task.subTasks;
                tempTaskNumber = tempTaskNumber.substring(tempTaskNumber.indexOf('.') + 1);
              }

              task = tasks[parseInt(tempTaskNumber)];
              console.log(task);
              task.subTasks.push({
                text: data.text,
                subTasks: [],
                isOpen: true,
                createdOn: Date.now(),
                modifiedOn: Date.now()
              });
              text.value = ''; //RTC

              for (var i = 0; i < _this26.list.contributers.length; i++) {
                if (_this26.list.contributers[i].user_id.email != _this26.email && !_this26.list.contributers[i].isFriend) {
                  _this26.socketService.setUpdates({
                    eventName: 'tasks',
                    listId: _this26.list.listId,
                    email: _this26.list.contributers[i].user_id.email,
                    tasks: _this26.list.tasks
                  });
                }
              }
            } else {
              alert(apiResponse.message);
            }
          }, function (err) {
            alert(err.error.message);
          });
        }
      }, {
        key: "stopBubbling",
        value: function stopBubbling(event) {
          event.stopPropagation();
        }
      }]);

      return SubtaskComponent;
    }();

    SubtaskComponent.ɵfac = function SubtaskComponent_Factory(t) {
      return new (t || SubtaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_list_service__WEBPACK_IMPORTED_MODULE_3__["ListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    SubtaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SubtaskComponent,
      selectors: [["subtask"]],
      inputs: {
        list: "list",
        tasks: "tasks",
        search: "search",
        taskCounter: "taskCounter",
        email: "email"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "list-group", 4, "ngIf"], [1, "list-group"], ["class", "list-group-item list-group-item-action", 4, "ngFor", "ngForOf"], [1, "list-group-item", "list-group-item-action"], [3, "ngClass", "click"], [1, "mr-2", "open", 3, "icon"], [1, "mr-2", "done", 3, "icon"], [1, "text"], ["style", "cursor: pointer;", "class", "text-danger float-right", 3, "icon", "click", 4, "ngIf"], ["class", "input-group", 4, "ngIf"], [3, "search", "list", "taskCounter", "tasks", "email", 4, "ngIf"], [1, "text-danger", "float-right", 2, "cursor", "pointer", 3, "icon", "click"], [1, "input-group"], ["type", "text", "placeholder", "Enter sub task", 1, "form-control", 3, "keyup.enter"], ["ref", ""], [1, "input-group-append"], [1, "input-group-text", 2, "cursor", "pointer", 3, "click"], [3, "icon"], [3, "search", "list", "taskCounter", "tasks", "email"]],
      template: function SubtaskComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SubtaskComponent_div_0_Template, 3, 4, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tasks);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FaIconComponent"], SubtaskComponent],
      pipes: [_search_pipe__WEBPACK_IMPORTED_MODULE_8__["SearchPipe"]],
      styles: [".isDone[_ngcontent-%COMP%], .isOpen[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n\r\n.isOpen[_ngcontent-%COMP%] > .open[_ngcontent-%COMP%] {\r\n    display: unset;\r\n}\r\n\r\n.isOpen[_ngcontent-%COMP%] > .done[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.isOpen[_ngcontent-%COMP%] > .text[_ngcontent-%COMP%] {\r\n    text-decoration: none !important;\r\n}\r\n\r\n.isDone[_ngcontent-%COMP%] > .open[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.isDone[_ngcontent-%COMP%] > .done[_ngcontent-%COMP%] {\r\n    display: unset;\r\n}\r\n\r\n.isDone[_ngcontent-%COMP%] > .text[_ngcontent-%COMP%] {\r\n    text-decoration: line-through !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx3Q0FBd0M7QUFDNUMiLCJmaWxlIjoic3JjL2FwcC9saXN0L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pc0RvbmUsXHJcbi5pc09wZW4ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaXNPcGVuPi5vcGVuIHtcclxuICAgIGRpc3BsYXk6IHVuc2V0O1xyXG59XHJcblxyXG4uaXNPcGVuPi5kb25lIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5pc09wZW4+LnRleHQge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pc0RvbmU+Lm9wZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmlzRG9uZT4uZG9uZSB7XHJcbiAgICBkaXNwbGF5OiB1bnNldDtcclxufVxyXG5cclxuLmlzRG9uZT4udGV4dCB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaCAhaW1wb3J0YW50O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubtaskComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'subtask',
          templateUrl: './subtask.component.html',
          styleUrls: ['./dashboard.component.css']
        }]
      }], function () {
        return [{
          type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
        }, {
          type: _list_service__WEBPACK_IMPORTED_MODULE_3__["ListService"]
        }, {
          type: src_app_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, {
        list: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tasks: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        search: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        taskCounter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        email: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/list/friends/filter-friends.pipe.ts":
  /*!*****************************************************!*\
    !*** ./src/app/list/friends/filter-friends.pipe.ts ***!
    \*****************************************************/

  /*! exports provided: FilterFriendsPipe */

  /***/
  function srcAppListFriendsFilterFriendsPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterFriendsPipe", function () {
      return FilterFriendsPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FilterFriendsPipe = /*#__PURE__*/function () {
      function FilterFriendsPipe() {
        _classCallCheck(this, FilterFriendsPipe);
      }

      _createClass(FilterFriendsPipe, [{
        key: "transform",
        value: function transform(users, filterText) {
          var _this27 = this;

          if (!users || !filterText) {
            return users;
          }

          return users.filter(function (user) {
            return _this27.checkUser(user, filterText);
          });
        }
      }, {
        key: "checkUser",
        value: function checkUser(user, filterText) {
          var name = user.user_id.firstName + ' ' + user.user_id.lastName;
          if (user.user_id.email.indexOf(filterText) != -1 || name.indexOf(filterText) != -1) return true;
          return false;
        }
      }]);

      return FilterFriendsPipe;
    }();

    FilterFriendsPipe.ɵfac = function FilterFriendsPipe_Factory(t) {
      return new (t || FilterFriendsPipe)();
    };

    FilterFriendsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "filterFriends",
      type: FilterFriendsPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterFriendsPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'filterFriends'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/list/friends/filter.pipe.ts":
  /*!*********************************************!*\
    !*** ./src/app/list/friends/filter.pipe.ts ***!
    \*********************************************/

  /*! exports provided: FilterPipe */

  /***/
  function srcAppListFriendsFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterPipe", function () {
      return FilterPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FilterPipe = /*#__PURE__*/function () {
      function FilterPipe() {
        _classCallCheck(this, FilterPipe);
      }

      _createClass(FilterPipe, [{
        key: "transform",
        value: function transform(users, filterText) {
          var _this28 = this;

          if (!users || !filterText) {
            return users;
          }

          return users.filter(function (user) {
            return _this28.checkUser(user, filterText);
          });
        }
      }, {
        key: "checkUser",
        value: function checkUser(user, filterText) {
          var name = user.firstName + ' ' + user.lastName;
          if (user.email.indexOf(filterText) != -1 || name.indexOf(filterText) != -1) return true;
          return false;
        }
      }]);

      return FilterPipe;
    }();

    FilterPipe.ɵfac = function FilterPipe_Factory(t) {
      return new (t || FilterPipe)();
    };

    FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "filter",
      type: FilterPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'filter'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/list/friends/friends.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/list/friends/friends.component.ts ***!
    \***************************************************/

  /*! exports provided: FriendsComponent */

  /***/
  function srcAppListFriendsFriendsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FriendsComponent", function () {
      return FriendsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var src_app_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/socket.service */
    "./src/app/socket.service.ts");
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _filter_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./filter.pipe */
    "./src/app/list/friends/filter.pipe.ts");
    /* harmony import */


    var _filter_friends_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./filter-friends.pipe */
    "./src/app/list/friends/filter-friends.pipe.ts");

    function FriendsComponent_div_22_div_5_span_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FriendsComponent_div_22_div_5_span_3_Template_span_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r105);

          var user_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r103.sendFriendRequest(user_r100.email);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r102.faPlus);
      }
    }

    function FriendsComponent_div_22_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FriendsComponent_div_22_div_5_span_3_Template, 2, 1, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r100 = ctx.$implicit;
        var i_r101 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-index", i_r101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", user_r100.firstName, " ", user_r100.lastName, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !user_r100.noRequest);
      }
    }

    function FriendsComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FriendsComponent_div_22_Template_input_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r107);

          var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r106.searchUser = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FriendsComponent_div_22_div_5_Template, 4, 4, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "filter");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r96.searchUser);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 2, ctx_r96.users, ctx_r96.searchUser));
      }
    }

    function FriendsComponent_div_24_div_9_fa_icon_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 33);
      }

      if (rf & 2) {
        var ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r111.faCircle);
      }
    }

    function FriendsComponent_div_24_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FriendsComponent_div_24_div_9_fa_icon_1_Template, 1, 1, "fa-icon", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FriendsComponent_div_24_div_9_Template_span_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r113);

          var friend_r109 = ctx.$implicit;

          var ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r112.removeFriend(friend_r109.user_id.email);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "fa-icon", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var friend_r109 = ctx.$implicit;
        var i_r110 = ctx.index;

        var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-index", i_r110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", friend_r109.isOnline);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", friend_r109.user_id.firstName, " ", friend_r109.user_id.lastName, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r108.faTimesCircle);
      }
    }

    function FriendsComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Friends ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FriendsComponent_div_24_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115);

          var ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r114.searchFriend = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FriendsComponent_div_24_div_9_Template, 6, 5, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "filterFriends");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r97.searchFriend);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 2, ctx_r97.friends, ctx_r97.searchFriend));
      }
    }

    function FriendsComponent_div_25_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FriendsComponent_div_25_div_9_Template_span_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r120);

          var friendRequest_r117 = ctx.$implicit;

          var ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r119.acceptFriendRequest(friendRequest_r117.user_id.email);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FriendsComponent_div_25_div_9_Template_span_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r120);

          var friendRequest_r117 = ctx.$implicit;

          var ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r121.declineFriendRequest(friendRequest_r117.user_id.email);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "fa-icon", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var friendRequest_r117 = ctx.$implicit;
        var i_r118 = ctx.index;

        var ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-index", i_r118);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r116.faCheckCircle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r116.faTimesCircle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", friendRequest_r117.user_id.firstName, " ", friendRequest_r117.user_id.lastName, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 6, friendRequest_r117.createdOn, "h:mm a, d MMM y"));
      }
    }

    function FriendsComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Friend Requets ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FriendsComponent_div_25_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r123);

          var ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r122.searchFriendRequest = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FriendsComponent_div_25_div_9_Template, 10, 9, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "filterFriends");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r98.searchFriendRequest);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 2, ctx_r98.friendRequests, ctx_r98.searchFriendRequest));
      }
    }

    var _c0 = function _c0() {
      return ["/friends"];
    };

    var FriendsComponent = /*#__PURE__*/function () {
      function FriendsComponent(appService, socketService, router) {
        _classCallCheck(this, FriendsComponent);

        this.appService = appService;
        this.socketService = socketService;
        this.router = router; //Font Awesome Icons

        this.faCheckSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCheckSquare"];
        this.faSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSquare"];
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTimes"];
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlus"];
        this.faTimesCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTimesCircle"];
        this.faCheckCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCheckCircle"];
        this.faCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCircle"];
      }

      _createClass(FriendsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this29 = this;

          this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authToken');
          this.userId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('userId');
          if (!this.authToken || !this.userId) this.router.navigate(['/login']);else {
            //verify user
            this.authError();
            this.verifyUserConfirmation();
            this.appService.getUsers().subscribe(function (apiResponse) {
              console.log(apiResponse);

              if (apiResponse.status === 200) {
                _this29.users = apiResponse.data;
              } else {
                alert(apiResponse.message);
              }
            }, function (err) {
              alert(err.error.message);
            });
            this.appService.getUser().subscribe(function (apiResponse) {
              console.log(apiResponse);

              if (apiResponse.status === 200) {
                var user = apiResponse.data;
                _this29.firstName = user.firstName;
                _this29.lastName = user.lastName;
                _this29.email = user.email;
                _this29.friends = user.friends;

                _this29.getAddedFriend();

                _this29.getRemovedFriend();

                _this29.getOnlineUsers();

                _this29.getAddedOnlineUser();

                _this29.getRemovedOnlineUser();

                _this29.getFriendRequest();

                if (_this29.friends.length == 0) _this29.friends = undefined;else {
                  var _iterator3 = _createForOfIteratorHelper(_this29.friends),
                      _step3;

                  try {
                    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                      var friend = _step3.value;

                      for (var i = 0; i < _this29.users.length; i++) {
                        if (_this29.users[i].email == friend.user_id.email) {
                          _this29.users[i].noRequest = true;
                          break;
                        }
                      }
                    }
                  } catch (err) {
                    _iterator3.e(err);
                  } finally {
                    _iterator3.f();
                  }
                }
                _this29.friendRequests = user.friendRequests;
                if (_this29.friendRequests.length == 0) _this29.friendRequests = undefined;else {
                  var _iterator4 = _createForOfIteratorHelper(_this29.friendRequests),
                      _step4;

                  try {
                    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                      var friendRequest = _step4.value;

                      for (var _i5 = 0; _i5 < _this29.users.length; _i5++) {
                        if (_this29.users[_i5].email == friendRequest.user_id.email) {
                          _this29.users[_i5].noRequest = true;
                          break;
                        }
                      }
                    }
                  } catch (err) {
                    _iterator4.e(err);
                  } finally {
                    _iterator4.f();
                  }
                }
              } else {
                alert(apiResponse.message);
              }
            }, function (err) {
              alert(err.error.message);
            });
          }
        }
      }, {
        key: "goToHome",
        value: function goToHome() {
          var _this30 = this;

          this.socketService.exitSocket();
          setTimeout(function () {
            _this30.router.navigate(['/dashboard']);
          }, 500);
        }
      }, {
        key: "verifyUserConfirmation",
        value: function verifyUserConfirmation() {
          var _this31 = this;

          this.socketService.verifyUser().subscribe(function () {
            _this31.socketService.setUser();
          });
        }
      }, {
        key: "authError",
        value: function authError() {
          var _this32 = this;

          this.socketService.authError().subscribe(function (data) {
            setTimeout(function () {
              _this32.logout(data.error);
            }, 200);
          });
        }
      }, {
        key: "logout",
        value: function logout(err) {
          var _this33 = this;

          this.socketService.exitSocket();
          this.appService.logout().subscribe(function (apiResponse) {
            console.log(apiResponse);

            if (apiResponse.status === 200) {
              alert(err || apiResponse.message);
            } else {
              alert(err || apiResponse.message);
            }

            ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"]["delete"]('authToken');
            ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"]["delete"]('userId');

            _this33.router.navigate(['/login']);
          }, function (err) {
            alert(err || err.error.message);
            ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"]["delete"]('authToken');
            ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"]["delete"]('userId');

            _this33.router.navigate(['/login']);
          });
        }
      }, {
        key: "sendFriendRequest",
        value: function sendFriendRequest(email) {
          var _this34 = this;

          this.appService.sendFriendRequest({
            email: email
          }).subscribe(function (apiResponse) {
            console.log(apiResponse);

            if (apiResponse.status === 200) {
              alert(apiResponse.message);

              _this34.socketService.setUpdates({
                eventName: 'add-friend-request',
                email: email,
                createdOn: Date.now(),
                firstName: _this34.firstName,
                lastName: _this34.lastName
              });
            } else {
              alert(apiResponse.message);
            }
          }, function (err) {
            alert(err.error.message);
          });
        }
      }, {
        key: "acceptFriendRequest",
        value: function acceptFriendRequest(email) {
          var _this35 = this;

          var index = -1;

          for (var i = 0; i < this.friendRequests.length; i++) {
            if (this.friendRequests[i].user_id.email == email) {
              index = i;
              break;
            }
          }

          var user = this.friendRequests[index];
          this.appService.acceptFriendRequest({
            email: email
          }).subscribe(function (apiResponse) {
            console.log(apiResponse);

            if (apiResponse.status === 200) {
              if (!_this35.friends) _this35.friends = Array();

              _this35.friends.push({
                createdOn: Date.now(),
                user_id: {
                  email: email,
                  firstName: _this35.firstName,
                  lastName: _this35.lastName
                }
              });

              _this35.friendRequests.splice(index, 1);

              _this35.socketService.setUpdates({
                eventName: 'add-friend',
                email: email,
                createdOn: Date.now(),
                firstName: _this35.firstName,
                lastName: _this35.lastName
              });
            } else {
              alert(apiResponse.message);
            }
          }, function (err) {
            alert(err.error.message);
          });
        }
      }, {
        key: "declineFriendRequest",
        value: function declineFriendRequest(email) {
          var _this36 = this;

          var index = -1;

          for (var i = 0; i < this.friendRequests.length; i++) {
            if (this.friendRequests[i].user_id.email == email) {
              index = i;
              break;
            }
          }

          var userIndex = -1;

          for (var _i6 = 0; _i6 < this.users.length; _i6++) {
            if (this.users[_i6].email == email) {
              userIndex = _i6;
              break;
            }
          }

          this.appService.declineFriendRequest({
            email: email
          }).subscribe(function (apiResponse) {
            console.log(apiResponse);

            if (apiResponse.status === 200) {
              _this36.friendRequests.splice(index, 1);

              delete _this36.users[userIndex].noRequest;
            } else {
              alert(apiResponse.message);
            }
          }, function (err) {
            alert(err.error.message);
          });
        }
      }, {
        key: "removeFriend",
        value: function removeFriend(email) {
          var _this37 = this;

          var index = -1;

          for (var i = 0; i < this.friends.length; i++) {
            if (this.friends[i].user_id.email == email) {
              index = i;
              break;
            }
          }

          var userIndex = -1;

          for (var _i7 = 0; _i7 < this.users.length; _i7++) {
            if (this.users[_i7].email == email) {
              userIndex = _i7;
              break;
            }
          }

          this.appService.removeFriend({
            email: email
          }).subscribe(function (apiResponse) {
            console.log(apiResponse);

            if (apiResponse.status === 200) {
              delete _this37.users[userIndex].noRequest;

              _this37.friends.splice(index, 1);

              _this37.socketService.setUpdates({
                eventName: 'remove-friend',
                email: email
              });
            } else {
              alert(apiResponse.message);
            }
          }, function (err) {
            alert(err.error.message);
          });
        }
      }, {
        key: "getAddedFriend",
        value: function getAddedFriend() {
          var _this38 = this;

          this.socketService.getAddedFriend().subscribe(function (data) {
            if (!_this38.friends) _this38.friends = Array();

            _this38.friends.push({
              createdOn: data.createdOn,
              user_id: {
                email: data.email,
                firstName: data.firstName,
                lastName: data.lastName,
                isOnline: true
              }
            });
          });
        }
      }, {
        key: "getFriendRequest",
        value: function getFriendRequest() {
          var _this39 = this;

          this.socketService.getFriendRequest().subscribe(function (data) {
            for (var i = 0; i < _this39.friendRequests.length; i++) {
              if (_this39.friendRequests[i].user_id.email == data.email) {
                _this39.friendRequests.splice(i, 1);

                break;
              }
            }

            if (!_this39.friendRequests) _this39.friendRequests = Array();

            _this39.friendRequests.push({
              createdOn: data.createdOn,
              user_id: {
                email: data.email,
                firstName: data.firstName,
                lastName: data.lastName
              }
            });
          });
        }
      }, {
        key: "getRemovedFriend",
        value: function getRemovedFriend() {
          var _this40 = this;

          this.socketService.getRemovedFriend().subscribe(function (data) {
            for (var i = 0; i < _this40.friends.length; i++) {
              if (_this40.friends[i].user_id.email == data.email) {
                _this40.friends.splice(i, 1);

                break;
              }
            }
          });
        }
      }, {
        key: "getOnlineUsers",
        value: function getOnlineUsers() {
          var _this41 = this;

          this.socketService.getOnlineUsers().subscribe(function (onlineFriends) {
            console.log(onlineFriends);

            for (var i = 0; i < onlineFriends.length; i++) {
              for (var j = 0; j < _this41.friends.length; j++) {
                if (onlineFriends[i] == _this41.friends[j].user_id.email) {
                  _this41.friends[j].isOnline = true;
                  break;
                }
              }
            }
          });
        }
      }, {
        key: "getAddedOnlineUser",
        value: function getAddedOnlineUser() {
          var _this42 = this;

          this.socketService.getAddedOnlineUser().subscribe(function (onlineFriend) {
            for (var j = 0; j < _this42.friends.length; j++) {
              if (onlineFriend == _this42.friends[j].user_id.email) {
                _this42.friends[j].isOnline = true;
                break;
              }
            }
          });
        }
      }, {
        key: "getRemovedOnlineUser",
        value: function getRemovedOnlineUser() {
          var _this43 = this;

          this.socketService.getRemovedOnlineUser().subscribe(function (onlineFriend) {
            for (var j = 0; j < _this43.friends.length; j++) {
              if (onlineFriend == _this43.friends[j].user_id.email) {
                delete _this43.friends[j].isOnline;
                break;
              }
            }
          });
        }
      }]);

      return FriendsComponent;
    }();

    FriendsComponent.ɵfac = function FriendsComponent_Factory(t) {
      return new (t || FriendsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    FriendsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FriendsComponent,
      selectors: [["app-friends"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([src_app_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]])],
      decls: 26,
      vars: 5,
      consts: [[1, "container-fluid", "p-0"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarTogglerDemo03", "aria-controls", "navbarTogglerDemo03", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarTogglerDemo03", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto", "mt-2", "mt-lg-0"], [1, "nav-item"], [1, "nav-link", 3, "click"], [1, "nav-item", "active"], [1, "nav-link", 3, "routerLink"], [1, "sr-only"], [1, "form-inline", "my-2", "my-lg-0"], ["type", "button", 1, "btn", "btn-outline-danger", "my-2", "my-sm-0", 3, "click"], [1, "jumbotron", "jumbotron-fluid"], [1, "container"], [1, "display-4", "text-center"], ["class", "form-row mb-3 mt-5", 4, "ngIf"], [1, "form-row", "mb-3", "mt-5"], ["class", "col-md-6", 4, "ngIf"], [1, "col-12"], ["type", "search", "name", "searchUser", "placeholder", "Find friends", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], [1, "list-group"], ["class", "list-group-item list-group-item-action", 4, "ngFor", "ngForOf"], [1, "list-group-item", "list-group-item-action"], [1, "text"], ["class", "float-right", 3, "click", 4, "ngIf"], [1, "float-right", 3, "click"], [3, "icon"], [1, "col-md-6"], [1, "form-row"], ["type", "search", "name", "searchFriend", "placeholder", "Search friends", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["class", "text-success", "data-toggle", "tooltip", "data-placement", "top", "title", "Online", 3, "icon", 4, "ngIf"], [1, "text-danger", 2, "font-size", "1.5rem", 3, "icon"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Online", 1, "text-success", 3, "icon"], ["type", "search", "name", "searchFriendRequest", "placeholder", "Search friend requests", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], [3, "click"], [1, "text-primary", 2, "font-size", "1.5rem", 3, "icon"], [1, "ml-4", "align-top", 2, "font-size", "1.2rem"], [1, "float-right", "text-muted"]],
      template: function FriendsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FriendsComponent_Template_a_click_7_listener() {
            return ctx.goToHome();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Friends");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FriendsComponent_Template_button_click_15_listener() {
            return ctx.logout(null);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Friends List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, FriendsComponent_div_22_Template, 7, 5, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, FriendsComponent_div_24_Template, 11, 5, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, FriendsComponent_div_25_Template, 11, 5, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.users);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.friends);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.friendRequests);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FaIconComponent"]],
      pipes: [_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["FilterPipe"], _filter_friends_pipe__WEBPACK_IMPORTED_MODULE_10__["FilterFriendsPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QvZnJpZW5kcy9mcmllbmRzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FriendsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-friends',
          templateUrl: './friends.component.html',
          styleUrls: ['./friends.component.css'],
          providers: [src_app_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]]
        }]
      }], function () {
        return [{
          type: src_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]
        }, {
          type: src_app_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/list/list.module.ts":
  /*!*************************************!*\
    !*** ./src/app/list/list.module.ts ***!
    \*************************************/

  /*! exports provided: ListModule */

  /***/
  function srcAppListListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListModule", function () {
      return ListModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/list/dashboard/dashboard.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _dashboard_subTask_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashboard/subTask.component */
    "./src/app/list/dashboard/subTask.component.ts");
    /* harmony import */


    var _dashboard_search_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./dashboard/search.pipe */
    "./src/app/list/dashboard/search.pipe.ts");
    /* harmony import */


    var _list_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./list.service */
    "./src/app/list/list.service.ts");
    /* harmony import */


    var _friends_friends_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./friends/friends.component */
    "./src/app/list/friends/friends.component.ts");
    /* harmony import */


    var _friends_filter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./friends/filter.pipe */
    "./src/app/list/friends/filter.pipe.ts");
    /* harmony import */


    var _friends_filter_friends_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./friends/filter-friends.pipe */
    "./src/app/list/friends/filter-friends.pipe.ts");

    var ListModule = function ListModule() {
      _classCallCheck(this, ListModule);
    };

    ListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ListModule
    });
    ListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ListModule_Factory(t) {
        return new (t || ListModule)();
      },
      providers: [_list_service__WEBPACK_IMPORTED_MODULE_8__["ListService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
      }, {
        path: 'friends',
        component: _friends_friends_component__WEBPACK_IMPORTED_MODULE_9__["FriendsComponent"]
      }]), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ListModule, {
        declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], _dashboard_subTask_component__WEBPACK_IMPORTED_MODULE_6__["SubtaskComponent"], _dashboard_search_pipe__WEBPACK_IMPORTED_MODULE_7__["SearchPipe"], _friends_friends_component__WEBPACK_IMPORTED_MODULE_9__["FriendsComponent"], _friends_filter_pipe__WEBPACK_IMPORTED_MODULE_10__["FilterPipe"], _friends_filter_friends_pipe__WEBPACK_IMPORTED_MODULE_11__["FilterFriendsPipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], _dashboard_subTask_component__WEBPACK_IMPORTED_MODULE_6__["SubtaskComponent"], _dashboard_search_pipe__WEBPACK_IMPORTED_MODULE_7__["SearchPipe"], _friends_friends_component__WEBPACK_IMPORTED_MODULE_9__["FriendsComponent"], _friends_filter_pipe__WEBPACK_IMPORTED_MODULE_10__["FilterPipe"], _friends_filter_friends_pipe__WEBPACK_IMPORTED_MODULE_11__["FilterFriendsPipe"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
            path: 'dashboard',
            component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
          }, {
            path: 'friends',
            component: _friends_friends_component__WEBPACK_IMPORTED_MODULE_9__["FriendsComponent"]
          }]), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"]],
          providers: [_list_service__WEBPACK_IMPORTED_MODULE_8__["ListService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/list/list.service.ts":
  /*!**************************************!*\
    !*** ./src/app/list/list.service.ts ***!
    \**************************************/

  /*! exports provided: ListService */

  /***/
  function srcAppListListServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListService", function () {
      return ListService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);

    var ListService = /*#__PURE__*/function () {
      function ListService(http) {
        _classCallCheck(this, ListService);

        this.http = http;
        this.url = 'http://ec2-54-167-94-143.compute-1.amazonaws.com:3000/api/v1/lists';
      }

      _createClass(ListService, [{
        key: "handleError",
        value: function handleError(err) {
          return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]["throw"](err.message);
        }
      }, {
        key: "createList",
        value: function createList(data) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken')).set('name', data.name);
          return this.http.post("".concat(this.url, "/"), params);
        }
      }, {
        key: "removeList",
        value: function removeList(data) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken')).set('listId', data.listId);
          return this.http["delete"]("".concat(this.url, "/"), {
            params: params
          });
        }
      }, {
        key: "getList",
        value: function getList(data) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken')).set('listId', data.listId);
          return this.http.get("".concat(this.url, "/"), {
            params: params
          });
        }
      }, {
        key: "getLists",
        value: function getLists() {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken'));
          return this.http.get("".concat(this.url, "/all"), {
            params: params
          });
        }
      }, {
        key: "markListAsActive",
        value: function markListAsActive(data) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken')).set('listId', data.listId);
          return this.http.put("".concat(this.url, "/mark/active"), params);
        }
      }, {
        key: "addTask",
        value: function addTask(data) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken')).set('text', data.text).set('listId', data.listId).set('index', data.index);
          return this.http.post("".concat(this.url, "/task"), params);
        }
      }, {
        key: "removeTask",
        value: function removeTask(data) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken')).set('listId', data.listId).set('index', data.index);
          return this.http["delete"]("".concat(this.url, "/task"), {
            params: params
          });
        }
      }, {
        key: "markTaskAsDone",
        value: function markTaskAsDone(data) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken')).set('listId', data.listId).set('index', data.index);
          return this.http.put("".concat(this.url, "/task/mark/done"), params);
        }
      }, {
        key: "markTaskAsOpen",
        value: function markTaskAsOpen(data) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken')).set('listId', data.listId).set('index', data.index);
          return this.http.put("".concat(this.url, "/task/mark/open"), params);
        }
      }, {
        key: "addContributor",
        value: function addContributor(data) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken')).set('email', data.email).set('listId', data.listId).set('name', data.name).set('canEdit', data.canEdit);
          return this.http.post("".concat(this.url, "/contributers"), params);
        }
      }, {
        key: "removeContributor",
        value: function removeContributor(data) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken')).set('listId', data.listId).set('email', data.email);
          return this.http["delete"]("".concat(this.url, "/contributers"), {
            params: params
          });
        }
      }, {
        key: "grantAccessToEdit",
        value: function grantAccessToEdit(data) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken')).set('listId', data.listId).set('email', data.email);
          return this.http.put("".concat(this.url, "/contributers/access/edit"), params);
        }
      }, {
        key: "grantAccessToRead",
        value: function grantAccessToRead(data) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken')).set('listId', data.listId).set('email', data.email);
          return this.http.put("".concat(this.url, "/contributers/access/read"), params);
        }
      }, {
        key: "undo",
        value: function undo(data) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken')).set('listId', data.listId);
          return this.http.put("".concat(this.url, "/undo"), params);
        }
      }]);

      return ListService;
    }();

    ListService.ɵfac = function ListService_Factory(t) {
      return new (t || ListService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ListService,
      factory: ListService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/socket.service.ts":
  /*!***********************************!*\
    !*** ./src/app/socket.service.ts ***!
    \***********************************/

  /*! exports provided: SocketService */

  /***/
  function srcAppSocketServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocketService", function () {
      return SocketService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var SocketService = /*#__PURE__*/function () {
      function SocketService(http) {
        _classCallCheck(this, SocketService);

        this.http = http;
        this.baseUrl = 'http://ec2-54-167-94-143.compute-1.amazonaws.com:3000'; //handshake

        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(this.baseUrl);
      }

      _createClass(SocketService, [{
        key: "verifyUser",
        value: function verifyUser() {
          var _this44 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this44.socket.on('verifyUser', function (data) {
              observer.next(data);
            });
          });
        }
      }, {
        key: "setUser",
        value: function setUser() {
          var data = {
            userId: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('userId'),
            authToken: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken')
          };
          this.socket.emit('set-user', data);
        }
      }, {
        key: "setUpdates",
        value: function setUpdates(data) {
          data.userId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('userId');
          var eventName = data.eventName;
          delete data.eventName;
          this.socket.emit(eventName, data);
        }
      }, {
        key: "authError",
        value: function authError() {
          var _this45 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this45.socket.on('auth-error@' + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken'), function (data) {
              observer.next(data);
            });
          });
        }
      }, {
        key: "disconnectedSocket",
        value: function disconnectedSocket() {
          var _this46 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this46.socket.on('disconnect', function () {
              observer.next();
            });
          });
        }
      }, {
        key: "getOnlineUsers",
        value: function getOnlineUsers() {
          var _this47 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this47.socket.on('online-users', function (data) {
              observer.next(data);
            });
          });
        }
      }, {
        key: "getAddedOnlineUser",
        value: function getAddedOnlineUser() {
          var _this48 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this48.socket.on('online-user-add@' + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken'), function (data) {
              observer.next(data);
            });
          });
        }
      }, {
        key: "getRemovedOnlineUser",
        value: function getRemovedOnlineUser() {
          var _this49 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this49.socket.on('online-user-remove@' + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken'), function (data) {
              observer.next(data);
            });
          });
        }
      }, {
        key: "getUpdatedTasks",
        value: function getUpdatedTasks() {
          var _this50 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this50.socket.on('tasks@' + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken'), function (data) {
              observer.next(data);
            });
          });
        }
      }, {
        key: "getAddedContributer",
        value: function getAddedContributer() {
          var _this51 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this51.socket.on('add-contributer@' + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken'), function (data) {
              observer.next(data);
            });
          });
        }
      }, {
        key: "getRemovedContributer",
        value: function getRemovedContributer() {
          var _this52 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this52.socket.on('remove-contributer@' + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken'), function (data) {
              observer.next(data);
            });
          });
        }
      }, {
        key: "getChangedAccessContributer",
        value: function getChangedAccessContributer() {
          var _this53 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this53.socket.on('change-contributer@' + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken'), function (data) {
              observer.next(data);
            });
          });
        }
      }, {
        key: "getAddedFriend",
        value: function getAddedFriend() {
          var _this54 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this54.socket.on('add-friend@' + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken'), function (data) {
              observer.next(data);
            });
          });
        }
      }, {
        key: "getFriendRequest",
        value: function getFriendRequest() {
          var _this55 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this55.socket.on('add-friend-request@' + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken'), function (data) {
              observer.next(data);
            });
          });
        }
      }, {
        key: "getRemovedFriend",
        value: function getRemovedFriend() {
          var _this56 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this56.socket.on('remove-friend@' + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken'), function (data) {
              observer.next(data);
            });
          });
        }
      }, {
        key: "exitSocket",
        value: function exitSocket() {
          this.socket.disconnect();
        }
      }, {
        key: "handleError",
        value: function handleError(err) {
          var errorMessage = '';

          if (err.error instanceof Error) {
            errorMessage = "An error occured: ".concat(err.error.message);
          } else {
            errorMessage = "Server returned code: ".concat(err.status, ", error message is: ").concat(err.error.message);
          }

          console.error(errorMessage);
          return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]["throw"](errorMessage);
        }
      }]);

      return SocketService;
    }();

    SocketService.ɵfac = function SocketService_Factory(t) {
      return new (t || SocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    SocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SocketService,
      factory: SocketService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/login/login.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/user/login/login.component.ts ***!
    \***********************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppUserLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_17_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.forgotPassword();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Forgot Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 25, 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_17_Template_input_ngModelChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.password = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Enter your password? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !_r15.valid && !_r15.pristine)("is-valid", _r15.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r11.password);
      }
    }

    function LoginComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "OTP");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 28, 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_18_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21.OTP = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Enter OTP send to you registered email? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "New Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_18_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.forgotPassword();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Goto Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 25, 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_18_Template_input_ngModelChange_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.password = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Enter your new password? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !_r19.valid && !_r19.pristine)("is-valid", _r20.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r12.OTP);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !_r20.valid && !_r20.pristine)("is-valid", _r20.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r12.password);
      }
    }

    function LoginComponent_button_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r9.form.valid);
      }
    }

    function LoginComponent_button_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Change Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r9.form.valid);
      }
    }

    var _c0 = function _c0() {
      return ["/signup"];
    };

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(appService, router) {
        _classCallCheck(this, LoginComponent);

        this.appService = appService;
        this.router = router;
        this.isForgotPassword = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('authToken') && ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('userId')) this.router.navigate(['/dashboard']);
        }
      }, {
        key: "login",
        value: function login() {
          var _this57 = this;

          if (this.isForgotPassword) {
            var data = {
              email: this.email,
              newPassword: this.password,
              OTP: this.OTP
            };
            this.appService.changePassword(data).subscribe(function (apiResponse) {
              console.log(apiResponse);

              if (apiResponse.status === 200) {
                alert(apiResponse.message);
                _this57.isForgotPassword = false;
              } else {
                alert(apiResponse.message);
              }
            }, function (err) {
              alert(err.error.message);
            });
          } else {
            var _data2 = {
              email: this.email,
              password: this.password
            };
            this.appService.login(_data2).subscribe(function (apiResponse) {
              console.log(apiResponse);

              if (apiResponse.status === 200) {
                ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].set('authToken', apiResponse.data.authToken);
                ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].set('userId', apiResponse.data.userId);

                _this57.appService.setUserInfoInLocalStorage(apiResponse.data);

                _this57.router.navigate(['/dashboard']);
              } else {
                alert(apiResponse.message);
              }
            }, function (err) {
              alert(err.error.message);
            });
          }
        }
      }, {
        key: "validateEmail",
        value: function validateEmail(email) {
          var patt = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

          if (patt.test(email)) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "forgotPassword",
        value: function forgotPassword() {
          var _this58 = this;

          if (this.isForgotPassword) this.isForgotPassword = false;else {
            var data = {
              email: this.email
            };
            this.appService.forgotPassword(data).subscribe(function (apiResponse) {
              console.log(apiResponse);

              if (apiResponse.status === 200) {
                alert(apiResponse.message);
                _this58.isForgotPassword = true;
              } else {
                alert(apiResponse.message);
              }
            }, function (err) {
              alert(err.error.message);
            });
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 30,
      vars: 11,
      consts: [[1, "container"], [1, "row", "mt-5"], [1, "col-lg-6", "col-md-8", "offset-md-2", "offset-lg-3"], [1, "border-primary", "p-4", 2, "border", "7px solid white", 3, "ngSubmit"], ["loginForm", "ngForm"], [1, "form-row"], [1, "col-md-12"], [2, "font-size", "1.5rem"], [1, "form-row", "mt-3"], [1, "col-md-12", "mb-3"], ["for", "email", 1, "font-weight-bold"], ["type", "email", "id", "email", "name", "email", "placeholder", "Email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["_email", "ngModel"], [1, "invalid-tooltip"], ["class", "form-row", 4, "ngIf"], ["class", "btn btn-danger form-control mt-5", "type", "submit", 3, "disabled", 4, "ngIf"], ["class", "btn btn-info form-control mt-5", "type", "submit", 3, "disabled", 4, "ngIf"], [1, "form-row", "mt-5"], [1, "col-md-4"], [1, "col-md-4", "text-center"], [1, "btn", "btn-primary", "form-control", "mt-5", 3, "routerLink"], [1, "col-md-6"], ["for", "password", 1, "font-weight-bold"], [1, "col-md-6", "form-inline", 2, "justify-content", "flex-end"], ["type", "button", 1, "btn", "btn-link", 3, "click"], ["type", "password", "id", "password", "name", "password", "placeholder", "Password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["_password", "ngModel"], ["for", "otp", 1, "font-weight-bold"], ["type", "number", "id", "otp", "name", "OTP", "placeholder", "OTP", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["_otp", "ngModel"], ["type", "submit", 1, "btn", "btn-danger", "form-control", "mt-5", 3, "disabled"], ["type", "submit", 1, "btn", "btn-info", "form-control", "mt-5", 3, "disabled"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Enter a valid email! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LoginComponent_div_17_Template, 13, 5, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LoginComponent_div_18_Template, 20, 10, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LoginComponent_button_19_Template, 2, 1, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LoginComponent_button_20_Template, 2, 1, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " What new? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx.validateEmail(ctx.email) && !_r10.pristine)("is-valid", _r10.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isForgotPassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isForgotPassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isForgotPassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isForgotPassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/signup/signup.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/user/signup/signup.component.ts ***!
    \*************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppUserSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SignupComponent_option_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var code_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", code_r8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](code_r8);
      }
    }

    var _c0 = function _c0() {
      return ["/login"];
    };

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent(appService, router) {
        _classCallCheck(this, SignupComponent);

        this.appService = appService;
        this.router = router;
        this.countryCode = "";
        this.phones = {
          "BD": "880",
          "BE": "32",
          "BF": "226",
          "BG": "359",
          "BA": "387",
          "BB": "+1-246",
          "WF": "681",
          "BL": "590",
          "BM": "+1-441",
          "BN": "673",
          "BO": "591",
          "BH": "973",
          "BI": "257",
          "BJ": "229",
          "BT": "975",
          "JM": "+1-876",
          "BV": "",
          "BW": "267",
          "WS": "685",
          "BQ": "599",
          "BR": "55",
          "BS": "+1-242",
          "JE": "+44-1534",
          "BY": "375",
          "BZ": "501",
          "RU": "7",
          "RW": "250",
          "RS": "381",
          "TL": "670",
          "RE": "262",
          "TM": "993",
          "TJ": "992",
          "RO": "40",
          "TK": "690",
          "GW": "245",
          "GU": "+1-671",
          "GT": "502",
          "GS": "",
          "GR": "30",
          "GQ": "240",
          "GP": "590",
          "JP": "81",
          "GY": "592",
          "GG": "+44-1481",
          "GF": "594",
          "GE": "995",
          "GD": "+1-473",
          "GB": "44",
          "GA": "241",
          "SV": "503",
          "GN": "224",
          "GM": "220",
          "GL": "299",
          "GI": "350",
          "GH": "233",
          "OM": "968",
          "TN": "216",
          "JO": "962",
          "HR": "385",
          "HT": "509",
          "HU": "36",
          "HK": "852",
          "HN": "504",
          "HM": " ",
          "VE": "58",
          "PR": "+1-787 and 1-939",
          "PS": "970",
          "PW": "680",
          "PT": "351",
          "SJ": "47",
          "PY": "595",
          "IQ": "964",
          "PA": "507",
          "PF": "689",
          "PG": "675",
          "PE": "51",
          "PK": "92",
          "PH": "63",
          "PN": "870",
          "PL": "48",
          "PM": "508",
          "ZM": "260",
          "EH": "212",
          "EE": "372",
          "EG": "20",
          "ZA": "27",
          "EC": "593",
          "IT": "39",
          "VN": "84",
          "SB": "677",
          "ET": "251",
          "SO": "252",
          "ZW": "263",
          "SA": "966",
          "ES": "34",
          "ER": "291",
          "ME": "382",
          "MD": "373",
          "MG": "261",
          "MF": "590",
          "MA": "212",
          "MC": "377",
          "UZ": "998",
          "MM": "95",
          "ML": "223",
          "MO": "853",
          "MN": "976",
          "MH": "692",
          "MK": "389",
          "MU": "230",
          "MT": "356",
          "MW": "265",
          "MV": "960",
          "MQ": "596",
          "MP": "+1-670",
          "MS": "+1-664",
          "MR": "222",
          "IM": "+44-1624",
          "UG": "256",
          "TZ": "255",
          "MY": "60",
          "MX": "52",
          "IL": "972",
          "FR": "33",
          "IO": "246",
          "SH": "290",
          "FI": "358",
          "FJ": "679",
          "FK": "500",
          "FM": "691",
          "FO": "298",
          "NI": "505",
          "NL": "31",
          "NO": "47",
          "NA": "264",
          "VU": "678",
          "NC": "687",
          "NE": "227",
          "NF": "672",
          "NG": "234",
          "NZ": "64",
          "NP": "977",
          "NR": "674",
          "NU": "683",
          "CK": "682",
          "XK": "",
          "CI": "225",
          "CH": "41",
          "CO": "57",
          "CN": "86",
          "CM": "237",
          "CL": "56",
          "CC": "61",
          "CA": "1",
          "CG": "242",
          "CF": "236",
          "CD": "243",
          "CZ": "420",
          "CY": "357",
          "CX": "61",
          "CR": "506",
          "CW": "599",
          "CV": "238",
          "CU": "53",
          "SZ": "268",
          "SY": "963",
          "SX": "599",
          "KG": "996",
          "KE": "254",
          "SS": "211",
          "SR": "597",
          "KI": "686",
          "KH": "855",
          "KN": "+1-869",
          "KM": "269",
          "ST": "239",
          "SK": "421",
          "KR": "82",
          "SI": "386",
          "KP": "850",
          "KW": "965",
          "SN": "221",
          "SM": "378",
          "SL": "232",
          "SC": "248",
          "KZ": "7",
          "KY": "+1-345",
          "SG": "65",
          "SE": "46",
          "SD": "249",
          "DO": "+1-809 and 1-829",
          "DM": "+1-767",
          "DJ": "253",
          "DK": "45",
          "VG": "+1-284",
          "DE": "49",
          "YE": "967",
          "DZ": "213",
          "US": "1",
          "UY": "598",
          "YT": "262",
          "UM": "1",
          "LB": "961",
          "LC": "+1-758",
          "LA": "856",
          "TV": "688",
          "TW": "886",
          "TT": "+1-868",
          "TR": "90",
          "LK": "94",
          "LI": "423",
          "LV": "371",
          "TO": "676",
          "LT": "370",
          "LU": "352",
          "LR": "231",
          "LS": "266",
          "TH": "66",
          "TF": "",
          "TG": "228",
          "TD": "235",
          "TC": "+1-649",
          "LY": "218",
          "VA": "379",
          "VC": "+1-784",
          "AE": "971",
          "AD": "376",
          "AG": "+1-268",
          "AF": "93",
          "AI": "+1-264",
          "VI": "+1-340",
          "IS": "354",
          "IR": "98",
          "AM": "374",
          "AL": "355",
          "AO": "244",
          "AQ": "",
          "AS": "+1-684",
          "AR": "54",
          "AU": "61",
          "AT": "43",
          "AW": "297",
          "IN": "91",
          "AX": "+358-18",
          "AZ": "994",
          "IE": "353",
          "ID": "62",
          "UA": "380",
          "QA": "974",
          "MZ": "258"
        };
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // this.appService.getCountryCode().subscribe(
          //   (apiResponse) => {
          //     if (apiResponse)
          //       this.phones = apiResponse;
          //   },
          //   (err) => {
          //     console.log(err.error.message);
          //   });
          this.codes = Object.keys(this.phones);
        }
      }, {
        key: "signup",
        value: function signup() {
          var _this59 = this;

          var countryCode = this.phones[this.countryCode.trim()];
          var data = {
            firstName: this.firstName,
            lastName: this.lastName,
            mobileNumber: this.mobileNumber,
            email: this.email,
            password: this.password,
            countryCode: countryCode
          };
          this.appService.signup(data).subscribe(function (apiResponse) {
            console.log(apiResponse);

            if (apiResponse.status === 200) {
              alert(apiResponse.message);
              setTimeout(function () {
                _this59.router.navigate(['/login']);
              }, 2000);
            } else {
              alert(apiResponse.message);
            }
          }, function (err) {
            alert(err.error.message);
          });
        }
      }, {
        key: "validateEmail",
        value: function validateEmail(email) {
          var patt = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

          if (patt.test(email)) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "validateMobile",
        value: function validateMobile(mobileNumber) {
          if (!this.countryCode || !mobileNumber) return false;else if (this.countryCode == 'IN') {
            var mobileNumberRegex = /^[6-9]\d{9}$/;
            /* 10 digits starts with 6-9 for India*/

            if (mobileNumber.toString().match(mobileNumberRegex)) {
              return true;
            } else {
              return false;
            }
          } else {
            return true;
          }
        }
      }, {
        key: "validatePassword",
        value: function validatePassword(password) {
          var patt = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

          if (patt.test(password)) {
            return true;
          } else {
            return false;
          }
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["app-signup"]],
      decls: 72,
      vars: 37,
      consts: [[1, "container"], [1, "row", "mt-3"], [1, "col-lg-6", "col-md-8", "offset-md-2", "offset-lg-3"], [1, "border-primary", "p-4", 2, "border", "7px solid white", 3, "ngSubmit"], ["signupForm", "ngForm"], [1, "form-row"], [1, "col-md-12"], [2, "font-size", "1.5rem"], [1, "form-row", "mt-3"], [1, "col-md-6", "mb-3"], ["for", "firstName", 1, "font-weight-bold"], ["type", "text", "id", "firstName", "name", "firstName", "placeholder", "First name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["_firstName", "ngModel"], [1, "invalid-feedback"], ["for", "lastName", 1, "font-weight-bold"], ["type", "text", "id", "lastName", "name", "lastName", "placeholder", "Last name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["_lastName", "ngModel"], [1, "col-md-12", "mb-3"], ["for", "email", 1, "font-weight-bold"], ["type", "email", "id", "email", "name", "email", "placeholder", "Email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["_email", "ngModel"], [1, "invalid-feedback", 3, "hidden"], [1, "col-md-3", "mb-3"], ["for", "countryCode", 1, "font-weight-bold"], ["id", "countryCode", "name", "countryCode", 1, "form-control", 3, "ngModel", "ngModelChange"], ["_countryCode", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-9", "mb-3"], ["for", "mobileNumber", 1, "font-weight-bold"], ["type", "number", "id", "mobileNumber", "name", "mobileNumber", "placeholder", "Mobile number", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["_mobileNumber", "ngModel"], ["for", "password", 1, "font-weight-bold"], ["type", "password", "id", "password", "name", "password", "placeholder", "Password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["_password", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "form-control", "mt-3", 3, "disabled"], [1, "btn", "btn-danger", "form-control", "mt-3", "mb-5", 3, "routerLink"], [3, "value"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_3_listener() {
            return ctx.signup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "First name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.firstName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Enter your first name? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Last name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 15, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_20_listener($event) {
            return ctx.lastName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Enter your last name? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 19, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_28_listener($event) {
            return ctx.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Enter a valid email! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Country Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "select", 24, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_select_ngModelChange_36_listener($event) {
            return ctx.countryCode = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, SignupComponent_option_40_Template, 2, 2, "option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Select a country code? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Mobile number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 30, 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_46_listener($event) {
            return ctx.mobileNumber = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Enter a valid mobile number! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "input", 33, 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_54_listener($event) {
            return ctx.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Enter password with atleast: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " 1 capital letter ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " 1 special character");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " 1 digit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " 1 small letter ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Total of 8 characters. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Back to Login Page");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !_r1.valid && !_r1.pristine)("is-valid", _r1.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.firstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !_r2.valid && !_r2.pristine)("is-valid", _r2.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx.validateEmail(ctx.email) && !_r3.pristine)("is-valid", ctx.validateEmail(ctx.email));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.validateEmail(ctx.email) && _r3.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.countryCode == "" && _r4.touched)("is-valid", ctx.countryCode != "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.countryCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.codes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx.validateMobile(ctx.mobileNumber) && !_r6.pristine)("is-valid", ctx.validateMobile(ctx.mobileNumber));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mobileNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.validateMobile(ctx.mobileNumber) && _r6.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx.validatePassword(ctx.password) && !_r7.pristine)("is-valid", ctx.validatePassword(ctx.password));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.validatePassword(ctx.password) && _r7.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid || !ctx.validateEmail(ctx.email) || !ctx.validateMobile(ctx.mobileNumber) || !ctx.validatePassword(ctx.password));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c0));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signup',
          templateUrl: './signup.component.html',
          styleUrls: ['./signup.component.css']
        }]
      }], function () {
        return [{
          type: src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/user.module.ts":
  /*!*************************************!*\
    !*** ./src/app/user/user.module.ts ***!
    \*************************************/

  /*! exports provided: UserModule */

  /***/
  function srcAppUserUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserModule", function () {
      return UserModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/user/signup/signup.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/user/login/login.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var UserModule = function UserModule() {
      _classCallCheck(this, UserModule);
    };

    UserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UserModule
    });
    UserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UserModule_Factory(t) {
        return new (t || UserModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"]
      }]), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserModule, {
        declarations: [_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
            path: 'signup',
            component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"]
          }]), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Study\Web\edWisor.com\Project 1\TODO-list\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map