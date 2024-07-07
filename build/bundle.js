/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/ui/aboutPage/aboutPage.css":
/*!****************************************!*\
  !*** ./src/ui/aboutPage/aboutPage.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/ui/chatPage/chatBox/footer/footer.css":
/*!***************************************************!*\
  !*** ./src/ui/chatPage/chatBox/footer/footer.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/ui/chatPage/chatBox/header/header.css":
/*!***************************************************!*\
  !*** ./src/ui/chatPage/chatBox/header/header.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/ui/chatPage/chatBox/main/chat.css":
/*!***********************************************!*\
  !*** ./src/ui/chatPage/chatBox/main/chat.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/ui/chatPage/chatPage.css":
/*!**************************************!*\
  !*** ./src/ui/chatPage/chatPage.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/ui/loginPage/loginPage.css":
/*!****************************************!*\
  !*** ./src/ui/loginPage/loginPage.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/ui/popups/connectionPopup/connectionPopup.css":
/*!***********************************************************!*\
  !*** ./src/ui/popups/connectionPopup/connectionPopup.css ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/ui/popups/loginErrorPopup/loginErrorPopup.css":
/*!***********************************************************!*\
  !*** ./src/ui/popups/loginErrorPopup/loginErrorPopup.css ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/api/api.singleton.ts":
/*!**********************************!*\
  !*** ./src/api/api.singleton.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Server: () => (/* binding */ Server)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/api/api.ts");

var Server = new _api__WEBPACK_IMPORTED_MODULE_0__["default"]();


/***/ }),

/***/ "./src/api/api.ts":
/*!************************!*\
  !*** ./src/api/api.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_serverConstant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/serverConstant */ "./src/constants/serverConstant.ts");
/* harmony import */ var _controller_apiController_apiController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/apiController/apiController */ "./src/controller/apiController/apiController.ts");
/* harmony import */ var _ui_popups_connectionPopup_connectionPopup_singleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/popups/connectionPopup/connectionPopup.singleton */ "./src/ui/popups/connectionPopup/connectionPopup.singleton.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
};



var Api = /** @class */ (function () {
    function Api() {
        var _this = this;
        this.serverURL = _constants_serverConstant__WEBPACK_IMPORTED_MODULE_0__.SERVER_URL;
        this.apiController = new _controller_apiController_apiController__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.reconnectionAttempt = 0;
        this.socket = new WebSocket(this.serverURL);
        this.socket.onerror = function () {
            _this.connect();
        };
    }
    Api.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.socket.onopen = function () {
                    _ui_popups_connectionPopup_connectionPopup_singleton__WEBPACK_IMPORTED_MODULE_2__.ConnectionPopUp.close();
                    _this.reconnectionAttempt = 0;
                    _this.apiController.reestablishLoginForLoggedInUser();
                };
                this.socket.onmessage = function (event) {
                    (function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.handleMessage(event)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })();
                };
                this.socket.onerror = function () {
                    _this.socket = new WebSocket(_this.serverURL);
                    _this.reconnect();
                };
                this.socket.onclose = function () {
                    _this.socket = new WebSocket(_this.serverURL);
                    _this.reconnect();
                };
                return [2 /*return*/];
            });
        });
    };
    Api.prototype.reconnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.reconnectionAttempt < 1) {
                            _ui_popups_connectionPopup_connectionPopup_singleton__WEBPACK_IMPORTED_MODULE_2__.ConnectionPopUp.initialize();
                            _ui_popups_connectionPopup_connectionPopup_singleton__WEBPACK_IMPORTED_MODULE_2__.ConnectionPopUp.open();
                        }
                        this.reconnectionAttempt += 1;
                        return [4 /*yield*/, this.connect()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Api.prototype.handleMessage = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var response, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        response = JSON.parse(event.data);
                        _a = response.type;
                        switch (_a) {
                            case "USER_LOGIN" /* MessageTypes.USER_LOGIN */: return [3 /*break*/, 1];
                            case "USER_LOGOUT" /* MessageTypes.USER_LOGOUT */: return [3 /*break*/, 3];
                            case "USER_EXTERNAL_LOGIN" /* MessageTypes.USER_EXTERNAL_LOGIN */: return [3 /*break*/, 5];
                            case "USER_EXTERNAL_LOGOUT" /* MessageTypes.USER_EXTERNAL_LOGOUT */: return [3 /*break*/, 7];
                            case "USER_ACTIVE" /* MessageTypes.USER_ACTIVE */: return [3 /*break*/, 9];
                            case "USER_INACTIVE" /* MessageTypes.USER_INACTIVE */: return [3 /*break*/, 11];
                            case "MSG_SEND" /* MessageTypes.MSG_SEND */: return [3 /*break*/, 13];
                            case "MSG_FROM_USER" /* MessageTypes.MSG_FROM_USER */: return [3 /*break*/, 15];
                            case "MSG_DELIVER" /* MessageTypes.MSG_DELIVER */: return [3 /*break*/, 17];
                            case "MSG_READ" /* MessageTypes.MSG_READ */: return [3 /*break*/, 19];
                            case "MSG_DELETE" /* MessageTypes.MSG_DELETE */: return [3 /*break*/, 21];
                            case "ERROR" /* MessageTypes.ERROR */: return [3 /*break*/, 23];
                        }
                        return [3 /*break*/, 25];
                    case 1: return [4 /*yield*/, this.apiController.handleLoginResponse(response)];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 26];
                    case 3: return [4 /*yield*/, this.apiController.handleLogoutResponse(response)];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 26];
                    case 5: return [4 /*yield*/, this.apiController.handleExternalLogin(response)];
                    case 6:
                        _b.sent();
                        return [3 /*break*/, 26];
                    case 7: return [4 /*yield*/, this.apiController.handleExternalLogout(response)];
                    case 8:
                        _b.sent();
                        return [3 /*break*/, 26];
                    case 9: return [4 /*yield*/, this.apiController.handleGetActiveUsersResponse(response)];
                    case 10:
                        _b.sent();
                        return [3 /*break*/, 26];
                    case 11: return [4 /*yield*/, this.apiController.handleGetInactiveUsersResponse(response)];
                    case 12:
                        _b.sent();
                        return [3 /*break*/, 26];
                    case 13: return [4 /*yield*/, this.apiController.handleSendMessageToUserResponse(response)];
                    case 14:
                        _b.sent();
                        return [3 /*break*/, 26];
                    case 15: return [4 /*yield*/, this.apiController.handleGetMessageHistoryResponse(response)];
                    case 16:
                        _b.sent();
                        return [3 /*break*/, 26];
                    case 17: return [4 /*yield*/, this.apiController.handleChangeMessageDeliveryStatus()];
                    case 18:
                        _b.sent();
                        return [3 /*break*/, 26];
                    case 19: return [4 /*yield*/, this.apiController.handleChangeMessageReadStatusResponse()];
                    case 20:
                        _b.sent();
                        return [3 /*break*/, 26];
                    case 21: return [4 /*yield*/, this.apiController.handleMessageDeletionResponse(response)];
                    case 22:
                        _b.sent();
                        return [3 /*break*/, 26];
                    case 23: return [4 /*yield*/, this.apiController.handleServerError(response)];
                    case 24:
                        _b.sent();
                        return [3 /*break*/, 26];
                    case 25: return [3 /*break*/, 26];
                    case 26: return [2 /*return*/];
                }
            });
        });
    };
    Api.prototype.sendMessage = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        if (_this.socket.readyState === WebSocket.OPEN) {
                            _this.socket.send(JSON.stringify(request));
                            resolve();
                        }
                    })];
            });
        });
    };
    Api.prototype.loginUser = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = {
                            id: "USER_LOGIN" /* MessageTypes.USER_LOGIN */,
                            type: "USER_LOGIN" /* MessageTypes.USER_LOGIN */,
                            payload: {
                                user: user,
                            },
                        };
                        return [4 /*yield*/, this.sendMessage(request)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Api.prototype.logoutUser = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = {
                            id: "USER_LOGOUT" /* MessageTypes.USER_LOGOUT */,
                            type: "USER_LOGOUT" /* MessageTypes.USER_LOGOUT */,
                            payload: {
                                user: user,
                            },
                        };
                        return [4 /*yield*/, this.sendMessage(request)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Api.prototype.getActiveUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = {
                            id: "USER_ACTIVE" /* MessageTypes.USER_ACTIVE */,
                            type: "USER_ACTIVE" /* MessageTypes.USER_ACTIVE */,
                            payload: null,
                        };
                        return [4 /*yield*/, this.sendMessage(request)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Api.prototype.getInactiveUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = {
                            id: "USER_INACTIVE" /* MessageTypes.USER_INACTIVE */,
                            type: "USER_INACTIVE" /* MessageTypes.USER_INACTIVE */,
                            payload: null,
                        };
                        return [4 /*yield*/, this.sendMessage(request)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Api.prototype.sendMessageToUser = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = {
                            id: "MSG_SEND" /* MessageTypes.MSG_SEND */,
                            type: "MSG_SEND" /* MessageTypes.MSG_SEND */,
                            payload: {
                                message: message,
                            },
                        };
                        return [4 /*yield*/, this.sendMessage(request)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Api.prototype.getMessageHistory = function (userLogin) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = {
                            id: "MSG_FROM_USER" /* MessageTypes.MSG_FROM_USER */,
                            type: "MSG_FROM_USER" /* MessageTypes.MSG_FROM_USER */,
                            payload: {
                                user: {
                                    login: userLogin,
                                },
                            },
                        };
                        return [4 /*yield*/, this.sendMessage(request)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Api.prototype.setMessageReadStatus = function (messageId) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = {
                            id: "MSG_READ" /* MessageTypes.MSG_READ */,
                            type: "MSG_READ" /* MessageTypes.MSG_READ */,
                            payload: {
                                message: {
                                    id: messageId,
                                },
                            },
                        };
                        return [4 /*yield*/, this.sendMessage(request)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Api.prototype.deleteMessage = function (messageId) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = {
                            id: "MSG_DELETE" /* MessageTypes.MSG_DELETE */,
                            type: "MSG_DELETE" /* MessageTypes.MSG_DELETE */,
                            payload: {
                                message: {
                                    id: messageId,
                                },
                            },
                        };
                        return [4 /*yield*/, this.sendMessage(request)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Api;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Api);


/***/ }),

/***/ "./src/app/app.ts":
/*!************************!*\
  !*** ./src/app/app.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_api_singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/api.singleton */ "./src/api/api.singleton.ts");
/* harmony import */ var _router_router_singleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router/router.singleton */ "./src/router/router.singleton.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
};


var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _api_api_singleton__WEBPACK_IMPORTED_MODULE_0__.Server.connect()];
                    case 1:
                        _a.sent();
                        _router_router_singleton__WEBPACK_IMPORTED_MODULE_1__.PagesRouter.routeToPage("login" /* PageIDs.LOGIN_PAGE */);
                        return [2 /*return*/];
                }
            });
        });
    };
    return App;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./src/constants/aboutPageConstants.ts":
/*!*********************************************!*\
  !*** ./src/constants/aboutPageConstants.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ABOUT_BOX_TEXT_CONTENT: () => (/* binding */ ABOUT_BOX_TEXT_CONTENT)
/* harmony export */ });
/* harmony import */ var _pagesConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagesConstants */ "./src/constants/pagesConstants.ts");

var ABOUT_BOX_TEXT_CONTENT = "".concat(_pagesConstants__WEBPACK_IMPORTED_MODULE_0__.APP_NAME, " - app for communication.<br>Log into dialogue chats and send messages to your friends!");


/***/ }),

/***/ "./src/constants/chatPageConstants.ts":
/*!********************************************!*\
  !*** ./src/constants/chatPageConstants.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DELETE_ICON: () => (/* binding */ DELETE_ICON),
/* harmony export */   NOTIFICATION_ICON: () => (/* binding */ NOTIFICATION_ICON),
/* harmony export */   SEARCH_ICON: () => (/* binding */ SEARCH_ICON),
/* harmony export */   SEND_ICON_STRING_SVG_ELEMENT: () => (/* binding */ SEND_ICON_STRING_SVG_ELEMENT)
/* harmony export */ });
var NOTIFICATION_ICON = '💬';
var SEARCH_ICON = '🔍︎';
var DELETE_ICON = '🗑️';
var SEND_ICON_STRING_SVG_ELEMENT = "<svg viewBox=\"0 0 28 28\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g id=\"ic_fluent_send_28_filled\" fill=\"#212121\" fill-rule=\"nonzero\">\n            <path d=\"M3.78963301,2.77233335 L24.8609339,12.8499121 C25.4837277,13.1477699 25.7471402,13.8941055 25.4492823,14.5168992 C25.326107,14.7744476 25.1184823,14.9820723 24.8609339,15.1052476 L3.78963301,25.1828263 C3.16683929,25.4806842 2.42050372,25.2172716 2.12264586,24.5944779 C1.99321184,24.3238431 1.96542524,24.015685 2.04435886,23.7262618 L4.15190935,15.9983421 C4.204709,15.8047375 4.36814355,15.6614577 4.56699265,15.634447 L14.7775879,14.2474874 C14.8655834,14.2349166 14.938494,14.177091 14.9721837,14.0981464 L14.9897199,14.0353553 C15.0064567,13.9181981 14.9390703,13.8084248 14.8334007,13.7671556 L14.7775879,13.7525126 L4.57894108,12.3655968 C4.38011873,12.3385589 4.21671819,12.1952832 4.16392965,12.0016992 L2.04435886,4.22889788 C1.8627142,3.56286745 2.25538645,2.87569101 2.92141688,2.69404635 C3.21084015,2.61511273 3.51899823,2.64289932 3.78963301,2.77233335 Z\"></path>\n        </g>\n    </g>\n</svg>";


/***/ }),

/***/ "./src/constants/loginPageConstants.ts":
/*!*********************************************!*\
  !*** ./src/constants/loginPageConstants.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ERROR_ICON: () => (/* binding */ ERROR_ICON),
/* harmony export */   ValidationPatterns: () => (/* binding */ ValidationPatterns)
/* harmony export */ });
var ValidationPatterns = {
    englishLettersAndDigitsOnly: /^[A-Za-z0-9]+$/,
    firstLetterIsUppercase: /^[A-Z]/,
};
var ERROR_ICON = '⚠️';


/***/ }),

/***/ "./src/constants/pagesConstants.ts":
/*!*****************************************!*\
  !*** ./src/constants/pagesConstants.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ABOUT_ICON_STRING_SVG_ELEMENT: () => (/* binding */ ABOUT_ICON_STRING_SVG_ELEMENT),
/* harmony export */   APP_NAME: () => (/* binding */ APP_NAME),
/* harmony export */   CLOSE_ICON_STRING_SVG_ELEMENT: () => (/* binding */ CLOSE_ICON_STRING_SVG_ELEMENT),
/* harmony export */   GITHUB_LINK: () => (/* binding */ GITHUB_LINK),
/* harmony export */   GITHUB_LOGO_STRING_SVG_ELEMENT: () => (/* binding */ GITHUB_LOGO_STRING_SVG_ELEMENT),
/* harmony export */   SCHOOL_LINK: () => (/* binding */ SCHOOL_LINK),
/* harmony export */   SCHOOL_LOGO_STRING_SVG_ELEMENT: () => (/* binding */ SCHOOL_LOGO_STRING_SVG_ELEMENT),
/* harmony export */   USER_ICON_STRING_SVG_ELEMENT: () => (/* binding */ USER_ICON_STRING_SVG_ELEMENT)
/* harmony export */ });
var GITHUB_LINK = 'https://github.com/ViolettaStolarova';
var SCHOOL_LINK = 'https://rs.school/';
var APP_NAME = 'Fun Chat';
var USER_ICON_STRING_SVG_ELEMENT = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" viewBox=\"0 0 256 256\" xml:space=\"preserve\">\n<g style=\"stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;\" transform=\"translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)\" >\n\t<path d=\"M 45 0 C 20.147 0 0 20.147 0 45 c 0 24.853 20.147 45 45 45 s 45 -20.147 45 -45 C 90 20.147 69.853 0 45 0 z M 45 22.007 c 8.899 0 16.14 7.241 16.14 16.14 c 0 8.9 -7.241 16.14 -16.14 16.14 c -8.9 0 -16.14 -7.24 -16.14 -16.14 C 28.86 29.248 36.1 22.007 45 22.007 z M 45 83.843 c -11.135 0 -21.123 -4.885 -27.957 -12.623 c 3.177 -5.75 8.144 -10.476 14.05 -13.341 c 2.009 -0.974 4.354 -0.958 6.435 0.041 c 2.343 1.126 4.857 1.696 7.473 1.696 c 2.615 0 5.13 -0.571 7.473 -1.696 c 2.083 -1 4.428 -1.015 6.435 -0.041 c 5.906 2.864 10.872 7.591 14.049 13.341 C 66.123 78.957 56.135 83.843 45 83.843 z\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;\" transform=\" matrix(1 0 0 1 0 0) \" stroke-linecap=\"round\" />\n</g>\n</svg>";
var ABOUT_ICON_STRING_SVG_ELEMENT = "<?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n\t viewBox=\"0 0 490.318 490.318\"\n\t xml:space=\"preserve\">\n<g>\n\t<g>\n\t\t<g>\n\t\t\t<path d=\"M245.148,0C109.967,0,0.009,109.98,0.009,245.162c0,135.182,109.958,245.156,245.139,245.156\n\t\t\t\tc135.186,0,245.162-109.978,245.162-245.156C490.31,109.98,380.333,0,245.148,0z M245.148,438.415\n\t\t\t\tc-106.555,0-193.234-86.698-193.234-193.253c0-106.555,86.68-193.258,193.234-193.258c106.559,0,193.258,86.703,193.258,193.258\n\t\t\t\tC438.406,351.717,351.706,438.415,245.148,438.415z\"/>\n\t\t\t<path d=\"M270.036,221.352h-49.771c-8.351,0-15.131,6.78-15.131,15.118v147.566c0,8.352,6.78,15.119,15.131,15.119h49.771\n\t\t\t\tc8.351,0,15.131-6.77,15.131-15.119V236.471C285.167,228.133,278.387,221.352,270.036,221.352z\"/>\n\t\t\t<path d=\"M245.148,91.168c-24.48,0-44.336,19.855-44.336,44.336c0,24.484,19.855,44.34,44.336,44.34\n\t\t\t\tc24.485,0,44.342-19.855,44.342-44.34C289.489,111.023,269.634,91.168,245.148,91.168z\"/>\n\t\t</g>\n\t</g>\n</g>\n</svg>";
var SCHOOL_LOGO_STRING_SVG_ELEMENT = "<svg version=\"1.0\" xmlns=\"http://www.w3.org/2000/svg\"\nviewBox=\"0 0 368.000000 137.000000\"\npreserveAspectRatio=\"xMidYMid meet\">\n<g transform=\"translate(0.000000,137.000000) scale(0.100000,-0.100000)\"\nstroke=\"none\">\n<path d=\"M2058 1310 c-137 -41 -178 -183 -79 -273 37 -33 70 -47 193 -81 64\n-18 88 -37 88 -70 0 -41 -37 -61 -108 -57 -27 1 -69 44 -74 73 -3 20 -9 21\n-88 19 -47 -1 -86 -4 -88 -6 -8 -7 20 -84 41 -116 37 -55 95 -81 196 -87 105\n-6 184 14 234 58 l34 29 16 -53 c9 -28 33 -71 52 -93 39 -46 143 -103 187\n-103 15 0 28 -2 28 -5 0 -2 -13 -25 -29 -50 -36 -57 -56 -155 -46 -233 18\n-149 97 -231 244 -252 144 -20 255 20 319 114 l32 48 0 -81 0 -81 235 0 235 0\n0 75 0 75 -145 0 -145 0 0 225 0 225 -90 0 -90 0 0 -82 0 -82 -30 47 c-34 54\n-104 102 -161 112 -21 4 -39 10 -38 13 0 4 21 23 47 43 129 98 194 291 146\n432 -62 182 -296 249 -506 145 -75 -37 -184 -143 -212 -206 -10 -23 -22 -42\n-26 -42 -3 0 -16 13 -27 29 -26 34 -85 63 -178 85 -38 10 -78 19 -87 22 -20 6\n-48 31 -48 44 0 20 34 40 66 40 46 0 73 -15 85 -47 9 -24 11 -25 88 -22 44 2\n82 7 85 10 3 3 1 22 -5 42 -14 52 -67 102 -122 116 -52 13 -188 13 -229 1z\nm937 -57 c69 -22 146 -101 170 -172 56 -170 -56 -386 -249 -477 -293 -139\n-565 57 -480 347 28 95 68 149 166 226 128 98 252 122 393 76z m-20 -789 c46\n-22 66 -69 66 -154 0 -71 -16 -125 -44 -149 -27 -22 -99 -26 -135 -7 -46 24\n-64 67 -65 150 -1 142 75 209 178 160z\"/>\n<path d=\"M2824 1111 c-127 -78 -73 -203 63 -146 43 18 63 14 63 -14 0 -28 -34\n-45 -60 -31 -16 8 -26 7 -45 -7 -32 -24 -31 -38 4 -53 42 -17 86 -4 132 39 46\n44 53 92 19 129 -25 26 -59 28 -124 6 -31 -11 -51 -13 -57 -7 -16 16 20 45 46\n39 15 -4 32 2 50 16 26 20 27 22 9 35 -25 18 -64 16 -100 -6z\"/>\n<path d=\"M2643 983 c-13 -8 -23 -20 -23 -25 0 -5 23 -41 50 -80 28 -39 50 -77\n50 -84 0 -17 -21 -23 -43 -12 -14 7 -25 4 -43 -13 -31 -29 -30 -34 11 -53 30\n-15 38 -15 68 -2 94 39 101 96 25 208 -29 43 -57 77 -63 77 -5 0 -20 -7 -32\n-16z\"/>\n<path d=\"M40 1016 l0 -296 95 0 95 0 0 120 c0 111 1 120 19 120 32 0 59 -32\n114 -135 l53 -100 102 -3 c56 -1 102 0 102 3 0 13 -85 172 -107 202 -14 18\n-33 35 -44 38 -28 9 -23 18 24 40 80 38 112 163 60 233 -49 66 -54 67 -294 70\nl-219 3 0 -295z m334 161 c22 -16 24 -63 3 -84 -9 -9 -41 -17 -81 -20 l-66 -6\n0 62 0 61 63 0 c37 0 71 -6 81 -13z\"/>\n<path d=\"M210 613 c-120 -13 -201 -99 -185 -194 13 -77 72 -122 212 -160 100\n-27 123 -41 123 -79 0 -63 -98 -83 -151 -31 -16 16 -29 39 -29 52 0 20 -3 21\n-52 15 -29 -3 -70 -6 -91 -6 -38 0 -39 0 -32 -33 11 -50 51 -113 87 -135 44\n-27 157 -46 225 -38 74 9 148 42 178 80 l24 31 38 -37 c46 -45 89 -64 169 -73\n131 -15 232 27 284 117 43 77 41 83 -39 107 -38 12 -73 21 -78 21 -5 0 -15\n-16 -22 -35 -16 -45 -55 -75 -97 -75 -79 0 -113 41 -121 145 -10 118 28 183\n112 192 43 5 48 4 85 -36 l40 -42 75 16 c41 10 75 19 75 22 0 14 -37 73 -64\n101 -42 45 -77 62 -151 73 -114 16 -217 -13 -283 -80 -23 -24 -36 -32 -39 -23\n-11 29 -55 71 -90 85 -41 16 -148 27 -203 20z m108 -125 c8 -7 18 -23 23 -37\n9 -23 12 -24 74 -18 71 7 69 8 59 -55 -6 -35 -8 -36 -28 -23 -11 8 -70 27\n-130 43 -60 17 -112 36 -117 43 -33 51 67 90 119 47z\"/>\n<path d=\"M2045 610 c-84 -12 -166 -67 -203 -135 -9 -16 -11 -4 -12 58 l0 77\n-90 0 -90 0 0 -105 0 -105 -105 0 -105 0 0 105 0 105 -90 0 -90 0 0 -300 0\n-300 90 0 90 0 0 120 0 120 105 0 105 0 0 -120 0 -120 90 0 90 0 0 78 0 77 19\n-30 c52 -84 134 -126 254 -128 115 -3 170 15 233 77 61 60 84 121 84 226 0\n127 -51 224 -141 270 -32 17 -146 42 -174 39 -5 -1 -33 -5 -60 -9z m136 -153\nc39 -26 58 -71 58 -142 2 -112 -43 -175 -123 -175 -81 0 -126 61 -126 170 0\n76 20 124 62 150 43 26 87 25 129 -3z\"/>\n</g>\n</svg>";
var GITHUB_LOGO_STRING_SVG_ELEMENT = "<svg viewBox=\"0 0 1024 1024\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z\" transform=\"scale(64)\"/>\n</svg>";
var CLOSE_ICON_STRING_SVG_ELEMENT = "<?xml version=\"1.0\" encoding=\"utf-8\"?><svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 121.31 122.876\" enable-background=\"new 0 0 121.31 122.876\" xml:space=\"preserve\"><g><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M90.914,5.296c6.927-7.034,18.188-7.065,25.154-0.068 c6.961,6.995,6.991,18.369,0.068,25.397L85.743,61.452l30.425,30.855c6.866,6.978,6.773,18.28-0.208,25.247 c-6.983,6.964-18.21,6.946-25.074-0.031L60.669,86.881L30.395,117.58c-6.927,7.034-18.188,7.065-25.154,0.068 c-6.961-6.995-6.992-18.369-0.068-25.397l30.393-30.827L5.142,30.568c-6.867-6.978-6.773-18.28,0.208-25.247 c6.983-6.963,18.21-6.946,25.074,0.031l30.217,30.643L90.914,5.296L90.914,5.296z\"/></g></svg>";


/***/ }),

/***/ "./src/constants/serverConstant.ts":
/*!*****************************************!*\
  !*** ./src/constants/serverConstant.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SERVER_URL: () => (/* binding */ SERVER_URL)
/* harmony export */ });
var SERVER_URL = 'ws://localhost:4000';


/***/ }),

/***/ "./src/controller/aboutIconController/aboutIconController.ts":
/*!*******************************************************************!*\
  !*** ./src/controller/aboutIconController/aboutIconController.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _router_router_singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../router/router.singleton */ "./src/router/router.singleton.ts");

var AboutIconController = /** @class */ (function () {
    function AboutIconController() {
    }
    AboutIconController.prototype.addChatAboutIconEventListener = function (container) {
        var icon = container.querySelector('.chat-about-icon');
        icon.addEventListener('click', function () {
            _router_router_singleton__WEBPACK_IMPORTED_MODULE_0__.PagesRouter.routeToPage("about" /* PageIDs.ABOUT_PAGE */);
        });
    };
    AboutIconController.prototype.addLoginAboutIconEventListener = function (container) {
        var icon = container.querySelector('.about-icon');
        icon.addEventListener('click', function () {
            _router_router_singleton__WEBPACK_IMPORTED_MODULE_0__.PagesRouter.routeToPage("about" /* PageIDs.ABOUT_PAGE */);
        });
    };
    return AboutIconController;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutIconController);


/***/ }),

/***/ "./src/controller/apiController/apiController.ts":
/*!*******************************************************!*\
  !*** ./src/controller/apiController/apiController.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_api_singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/api.singleton */ "./src/api/api.singleton.ts");
/* harmony import */ var _eventBus_eventBus_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../eventBus/eventBus.interface */ "./src/eventBus/eventBus.interface.ts");
/* harmony import */ var _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../eventBus/eventBus.singleton */ "./src/eventBus/eventBus.singleton.ts");
/* harmony import */ var _router_router_singleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../router/router.singleton */ "./src/router/router.singleton.ts");
/* harmony import */ var _sessionStorage_sessionStorage_singleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sessionStorage/sessionStorage.singleton */ "./src/sessionStorage/sessionStorage.singleton.ts");
/* harmony import */ var _ui_popups_loginErrorPopup_loginErrorPopup_singleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/popups/loginErrorPopup/loginErrorPopup.singleton */ "./src/ui/popups/loginErrorPopup/loginErrorPopup.singleton.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
};






var ApiController = /** @class */ (function () {
    function ApiController() {
        this.messages = [];
    }
    ApiController.prototype.handleServerError = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var errorMessage;
            var _a;
            return __generator(this, function (_b) {
                errorMessage = (_a = response.payload) === null || _a === void 0 ? void 0 : _a.error;
                switch (errorMessage) {
                    case "a user with this login is already authorized" /* ServerErrorMessages.USER_ALREADY_AUTHORIZED */:
                        _ui_popups_loginErrorPopup_loginErrorPopup_singleton__WEBPACK_IMPORTED_MODULE_5__.LoginErrorPopUp.initialize();
                        _ui_popups_loginErrorPopup_loginErrorPopup_singleton__WEBPACK_IMPORTED_MODULE_5__.LoginErrorPopUp.open("Choose another Username and try again" /* LoginErrorMessages.CHOOSE_ANOTHER_USERNAME */);
                        break;
                    case "incorrect password" /* ServerErrorMessages.INCORRECT_PASSWORD */:
                        _ui_popups_loginErrorPopup_loginErrorPopup_singleton__WEBPACK_IMPORTED_MODULE_5__.LoginErrorPopUp.initialize();
                        _ui_popups_loginErrorPopup_loginErrorPopup_singleton__WEBPACK_IMPORTED_MODULE_5__.LoginErrorPopUp.open("Incorrect Password, try again" /* LoginErrorMessages.INCORRECT_PASSWORD */);
                        break;
                    default:
                        break;
                }
                return [2 /*return*/];
            });
        });
    };
    ApiController.prototype.reestablishLoginForLoggedInUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!_sessionStorage_sessionStorage_singleton__WEBPACK_IMPORTED_MODULE_4__["default"].getUserStatus()) return [3 /*break*/, 2];
                        user = _sessionStorage_sessionStorage_singleton__WEBPACK_IMPORTED_MODULE_4__["default"].getUser();
                        return [4 /*yield*/, _api_api_singleton__WEBPACK_IMPORTED_MODULE_0__.Server.loginUser(user)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ApiController.prototype.handleLoginResponse = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _sessionStorage_sessionStorage_singleton__WEBPACK_IMPORTED_MODULE_4__["default"].setUserStatus((_a = response.payload) === null || _a === void 0 ? void 0 : _a.user.isLogined);
                        _router_router_singleton__WEBPACK_IMPORTED_MODULE_3__.PagesRouter.routeToPage("chat" /* PageIDs.CHAT_PAGE */);
                        return [4 /*yield*/, _api_api_singleton__WEBPACK_IMPORTED_MODULE_0__.Server.getActiveUsers()];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, _api_api_singleton__WEBPACK_IMPORTED_MODULE_0__.Server.getInactiveUsers()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ApiController.prototype.handleLogoutResponse = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                _sessionStorage_sessionStorage_singleton__WEBPACK_IMPORTED_MODULE_4__["default"].setUserStatus((_a = response.payload) === null || _a === void 0 ? void 0 : _a.user.isLogined);
                _router_router_singleton__WEBPACK_IMPORTED_MODULE_3__.PagesRouter.routeToPage("login" /* PageIDs.LOGIN_PAGE */);
                return [2 /*return*/];
            });
        });
    };
    ApiController.prototype.handleExternalLogin = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_eventBus_eventBus_interface__WEBPACK_IMPORTED_MODULE_1__.EventBusEvents.EVENT_ADD_USER, (_a = response.payload) === null || _a === void 0 ? void 0 : _a.user);
                _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_eventBus_eventBus_interface__WEBPACK_IMPORTED_MODULE_1__.EventBusEvents.EVENT_UPDATE_DIALOGUE_HEADER_USER_STATUS, (_b = response.payload) === null || _b === void 0 ? void 0 : _b.user);
                return [2 /*return*/];
            });
        });
    };
    ApiController.prototype.handleExternalLogout = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_eventBus_eventBus_interface__WEBPACK_IMPORTED_MODULE_1__.EventBusEvents.EVENT_DELETE_USER, (_a = response.payload) === null || _a === void 0 ? void 0 : _a.user);
                _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_eventBus_eventBus_interface__WEBPACK_IMPORTED_MODULE_1__.EventBusEvents.EVENT_ADD_USER, (_b = response.payload) === null || _b === void 0 ? void 0 : _b.user);
                _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_eventBus_eventBus_interface__WEBPACK_IMPORTED_MODULE_1__.EventBusEvents.EVENT_UPDATE_DIALOGUE_HEADER_USER_STATUS, (_c = response.payload) === null || _c === void 0 ? void 0 : _c.user);
                return [2 /*return*/];
            });
        });
    };
    ApiController.prototype.handleGetActiveUsersResponse = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                (_a = response.payload) === null || _a === void 0 ? void 0 : _a.users.forEach(function (user) { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                if (!(user.login !== ((_a = _sessionStorage_sessionStorage_singleton__WEBPACK_IMPORTED_MODULE_4__["default"].getUser()) === null || _a === void 0 ? void 0 : _a.login))) return [3 /*break*/, 2];
                                return [4 /*yield*/, _api_api_singleton__WEBPACK_IMPORTED_MODULE_0__.Server.getMessageHistory(user.login)];
                            case 1:
                                _b.sent();
                                _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_eventBus_eventBus_interface__WEBPACK_IMPORTED_MODULE_1__.EventBusEvents.EVENT_ADD_USER, user);
                                _b.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    ApiController.prototype.handleGetInactiveUsersResponse = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                (_a = response.payload) === null || _a === void 0 ? void 0 : _a.users.forEach(function (user) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, _api_api_singleton__WEBPACK_IMPORTED_MODULE_0__.Server.getMessageHistory(user.login)];
                            case 1:
                                _a.sent();
                                _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_eventBus_eventBus_interface__WEBPACK_IMPORTED_MODULE_1__.EventBusEvents.EVENT_ADD_USER, user);
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    ApiController.prototype.handleSendMessageToUserResponse = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var isMessageToCurrentUser, messagesBeforeSendMessage;
            var _this = this;
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            return __generator(this, function (_l) {
                switch (_l.label) {
                    case 0:
                        if (response.id === null) {
                            isMessageToCurrentUser = ((_a = response.payload) === null || _a === void 0 ? void 0 : _a.message.to) === ((_b = _sessionStorage_sessionStorage_singleton__WEBPACK_IMPORTED_MODULE_4__["default"].getUser()) === null || _b === void 0 ? void 0 : _b.login);
                            if (isMessageToCurrentUser) {
                                _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_eventBus_eventBus_interface__WEBPACK_IMPORTED_MODULE_1__.EventBusEvents.EVENT_SHOW_MESSAGE_RECEIVED_NOTIFICATION, (_c = response.payload) === null || _c === void 0 ? void 0 : _c.message);
                            }
                            this.messages.push((_d = response.payload) === null || _d === void 0 ? void 0 : _d.message);
                            _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_eventBus_eventBus_interface__WEBPACK_IMPORTED_MODULE_1__.EventBusEvents.EVENT_ADD_RECEIVED_MESSAGE, (_e = response.payload) === null || _e === void 0 ? void 0 : _e.message);
                            _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_eventBus_eventBus_interface__WEBPACK_IMPORTED_MODULE_1__.EventBusEvents.EVENT_SHOW_NEW_MESSAGES_LINE, (_f = response.payload) === null || _f === void 0 ? void 0 : _f.message);
                            return [2 /*return*/];
                        }
                        this.messages.push((_g = response.payload) === null || _g === void 0 ? void 0 : _g.message);
                        messagesBeforeSendMessage = this.findMessagesBeforeSpecified((_h = response.payload) === null || _h === void 0 ? void 0 : _h.message.id);
                        return [4 /*yield*/, Promise.all(messagesBeforeSendMessage.map(function (message) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(message.status.isReaded === false)) return [3 /*break*/, 2];
                                            return [4 /*yield*/, _api_api_singleton__WEBPACK_IMPORTED_MODULE_0__.Server.setMessageReadStatus(message.id)];
                                        case 1:
                                            _a.sent();
                                            _a.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 1:
                        _l.sent();
                        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_eventBus_eventBus_interface__WEBPACK_IMPORTED_MODULE_1__.EventBusEvents.EVENT_DELETE_NEW_MESSAGES_LINE, '');
                        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_eventBus_eventBus_interface__WEBPACK_IMPORTED_MODULE_1__.EventBusEvents.EVENT_ADD_MESSAGE, (_j = response.payload) === null || _j === void 0 ? void 0 : _j.message);
                        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_eventBus_eventBus_interface__WEBPACK_IMPORTED_MODULE_1__.EventBusEvents.EVENT_DELETE_MESSAGE_RECEIVED_NOTIFICATION, (_k = response.payload) === null || _k === void 0 ? void 0 : _k.message.to);
                        return [2 /*return*/];
                }
            });
        });
    };
    ApiController.prototype.findMessagesBeforeSpecified = function (messageId) {
        var messageIndex = this.messages.findIndex(function (message) { return message.id === messageId; });
        if (messageIndex === -1) {
            return [];
        }
        return this.messages.slice(0, messageIndex);
    };
    ApiController.prototype.handleGetMessageHistoryResponse = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var userName, isMessageHistoryEmpty, firstUnreadMessage, isFirstUnreadMessageIsCurrentUserMessage;
            var _this = this;
            var _a, _b, _c, _d, _e;
            return __generator(this, function (_f) {
                this.messages = [];
                userName = (_a = document.querySelector('.user-name')) === null || _a === void 0 ? void 0 : _a.textContent;
                isMessageHistoryEmpty = ((_b = response.payload) === null || _b === void 0 ? void 0 : _b.messages.length) === 0;
                _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_eventBus_eventBus_interface__WEBPACK_IMPORTED_MODULE_1__.EventBusEvents.EVENT_OPEN_DIALOGUE_BOX, isMessageHistoryEmpty);
                (_c = response.payload) === null || _c === void 0 ? void 0 : _c.messages.forEach(function (message) { return __awaiter(_this, void 0, void 0, function () {
                    var isDialogueWithUserOpen;
                    return __generator(this, function (_a) {
                        isDialogueWithUserOpen = message.to === userName || message.from === userName;
                        if (!isDialogueWithUserOpen) {
                            return [2 /*return*/];
                        }
                        this.messages.push(message);
                        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_eventBus_eventBus_interface__WEBPACK_IMPORTED_MODULE_1__.EventBusEvents.EVENT_ADD_MESSAGE, message);
                        return [2 /*return*/];
                    });
                }); });
                firstUnreadMessage = (_d = response.payload) === null || _d === void 0 ? void 0 : _d.messages.find(function (message) { return message.status.isReaded === false; });
                isFirstUnreadMessageIsCurrentUserMessage = (firstUnreadMessage === null || firstUnreadMessage === void 0 ? void 0 : firstUnreadMessage.from) === ((_e = _sessionStorage_sessionStorage_singleton__WEBPACK_IMPORTED_MODULE_4__["default"].getUser()) === null || _e === void 0 ? void 0 : _e.login);
                if (firstUnreadMessage && !isFirstUnreadMessageIsCurrentUserMessage) {
                    _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_eventBus_eventBus_interface__WEBPACK_IMPORTED_MODULE_1__.EventBusEvents.EVENT_SHOW_NEW_MESSAGES_LINE, firstUnreadMessage);
                    _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_eventBus_eventBus_interface__WEBPACK_IMPORTED_MODULE_1__.EventBusEvents.EVENT_SHOW_MESSAGE_RECEIVED_NOTIFICATION, firstUnreadMessage);
                }
                return [2 /*return*/];
            });
        });
    };
    ApiController.prototype.handleChangeMessageDeliveryStatus = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userName;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        userName = (_a = document.querySelector('.user-name')) === null || _a === void 0 ? void 0 : _a.textContent;
                        if (!userName) return [3 /*break*/, 2];
                        return [4 /*yield*/, _api_api_singleton__WEBPACK_IMPORTED_MODULE_0__.Server.getMessageHistory(userName)];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ApiController.prototype.handleChangeMessageReadStatusResponse = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userName;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        userName = (_a = document.querySelector('.user-name')) === null || _a === void 0 ? void 0 : _a.textContent;
                        if (!userName) return [3 /*break*/, 2];
                        return [4 /*yield*/, _api_api_singleton__WEBPACK_IMPORTED_MODULE_0__.Server.getMessageHistory(userName)];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2:
                        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_eventBus_eventBus_interface__WEBPACK_IMPORTED_MODULE_1__.EventBusEvents.EVENT_DELETE_NEW_MESSAGES_LINE, '');
                        return [2 /*return*/];
                }
            });
        });
    };
    ApiController.prototype.handleMessageDeletionResponse = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var userName;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(response.id === null)) return [3 /*break*/, 2];
                        userName = (_a = document.querySelector('.user-name')) === null || _a === void 0 ? void 0 : _a.textContent;
                        if (!userName) return [3 /*break*/, 2];
                        return [4 /*yield*/, _api_api_singleton__WEBPACK_IMPORTED_MODULE_0__.Server.getMessageHistory(userName)];
                    case 1:
                        _c.sent();
                        _c.label = 2;
                    case 2:
                        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_eventBus_eventBus_interface__WEBPACK_IMPORTED_MODULE_1__.EventBusEvents.EVENT_DELETE_MESSAGE, (_b = response.payload) === null || _b === void 0 ? void 0 : _b.message.id);
                        return [2 /*return*/];
                }
            });
        });
    };
    return ApiController;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApiController);


/***/ }),

/***/ "./src/controller/buttonControllers/deleteMessageButtonController/deleteMessageButtonController.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/controller/buttonControllers/deleteMessageButtonController/deleteMessageButtonController.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_api_singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../api/api.singleton */ "./src/api/api.singleton.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
};

var DeleteMessageButtonController = /** @class */ (function () {
    function DeleteMessageButtonController() {
    }
    DeleteMessageButtonController.prototype.addDeleteMessageButtonEventListener = function (button) {
        var _this = this;
        button.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
            var deleteButtonId, messageId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        deleteButtonId = button.id;
                        messageId = deleteButtonId.substring(deleteButtonId.indexOf('-') + 1);
                        return [4 /*yield*/, _api_api_singleton__WEBPACK_IMPORTED_MODULE_0__.Server.deleteMessage(messageId)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    return DeleteMessageButtonController;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteMessageButtonController);


/***/ }),

/***/ "./src/controller/buttonControllers/logoutButtonController/logoutButtonController.ts":
/*!*******************************************************************************************!*\
  !*** ./src/controller/buttonControllers/logoutButtonController/logoutButtonController.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_api_singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../api/api.singleton */ "./src/api/api.singleton.ts");
/* harmony import */ var _sessionStorage_sessionStorage_singleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../sessionStorage/sessionStorage.singleton */ "./src/sessionStorage/sessionStorage.singleton.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
};


var LogoutButtonController = /** @class */ (function () {
    function LogoutButtonController() {
    }
    LogoutButtonController.prototype.addLogoutButtonEventListener = function (container) {
        var _this = this;
        var button = container.querySelector('.logout-btn');
        button.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = _sessionStorage_sessionStorage_singleton__WEBPACK_IMPORTED_MODULE_1__["default"].getUser();
                        return [4 /*yield*/, _api_api_singleton__WEBPACK_IMPORTED_MODULE_0__.Server.logoutUser(user)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    return LogoutButtonController;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LogoutButtonController);


/***/ }),

/***/ "./src/controller/buttonControllers/returnButtonController/returnButtonController.ts":
/*!*******************************************************************************************!*\
  !*** ./src/controller/buttonControllers/returnButtonController/returnButtonController.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_api_singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../api/api.singleton */ "./src/api/api.singleton.ts");
/* harmony import */ var _router_router_singleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../router/router.singleton */ "./src/router/router.singleton.ts");
/* harmony import */ var _sessionStorage_sessionStorage_singleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../sessionStorage/sessionStorage.singleton */ "./src/sessionStorage/sessionStorage.singleton.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
};



var ReturnButtonController = /** @class */ (function () {
    function ReturnButtonController() {
    }
    ReturnButtonController.prototype.addReturnButtonEventListener = function (container) {
        var _this = this;
        var returnButton = container.querySelector('.return-btn');
        returnButton.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!_sessionStorage_sessionStorage_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].getUserStatus()) return [3 /*break*/, 3];
                        _router_router_singleton__WEBPACK_IMPORTED_MODULE_1__.PagesRouter.routeToPage("chat" /* PageIDs.CHAT_PAGE */);
                        return [4 /*yield*/, _api_api_singleton__WEBPACK_IMPORTED_MODULE_0__.Server.getActiveUsers()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, _api_api_singleton__WEBPACK_IMPORTED_MODULE_0__.Server.getInactiveUsers()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _router_router_singleton__WEBPACK_IMPORTED_MODULE_1__.PagesRouter.routeToPage("login" /* PageIDs.LOGIN_PAGE */);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    };
    return ReturnButtonController;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReturnButtonController);


/***/ }),

/***/ "./src/controller/chatController/chatController.ts":
/*!*********************************************************!*\
  !*** ./src/controller/chatController/chatController.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_api_singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/api.singleton */ "./src/api/api.singleton.ts");
/* harmony import */ var _eventBus_eventBus_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../eventBus/eventBus.interface */ "./src/eventBus/eventBus.interface.ts");
/* harmony import */ var _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../eventBus/eventBus.singleton */ "./src/eventBus/eventBus.singleton.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
};



var ChatController = /** @class */ (function () {
    function ChatController() {
    }
    ChatController.prototype.addChatEventListener = function (container) {
        var _this = this;
        var dialogueBox = container.querySelector('.dialogue-box');
        var handleMessages = function () { return __awaiter(_this, void 0, void 0, function () {
            var messages, messagesIds, userItemName;
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        messages = dialogueBox.querySelectorAll('.message');
                        messagesIds = [];
                        userItemName = (_a = container.querySelector('.user-name')) === null || _a === void 0 ? void 0 : _a.textContent;
                        if (userItemName) {
                            _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_eventBus_eventBus_interface__WEBPACK_IMPORTED_MODULE_1__.EventBusEvents.EVENT_DELETE_MESSAGE_RECEIVED_NOTIFICATION, userItemName);
                        }
                        if (messages.length === 0) {
                            return [2 /*return*/];
                        }
                        messages.forEach(function (message) {
                            var messageId = message.getAttribute('id');
                            if (messageId) {
                                messagesIds.push(messageId);
                            }
                        });
                        return [4 /*yield*/, Promise.all(messagesIds.map(function (messageId) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, _api_api_singleton__WEBPACK_IMPORTED_MODULE_0__.Server.setMessageReadStatus(messageId)];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        dialogueBox.addEventListener('click', handleMessages);
    };
    return ChatController;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatController);


/***/ }),

/***/ "./src/controller/eventsController/eventsController.ts":
/*!*************************************************************!*\
  !*** ./src/controller/eventsController/eventsController.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_chatPageConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/chatPageConstants */ "./src/constants/chatPageConstants.ts");
/* harmony import */ var _eventBus_eventBus_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../eventBus/eventBus.interface */ "./src/eventBus/eventBus.interface.ts");
/* harmony import */ var _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../eventBus/eventBus.singleton */ "./src/eventBus/eventBus.singleton.ts");
/* harmony import */ var _sessionStorage_sessionStorage_singleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sessionStorage/sessionStorage.singleton */ "./src/sessionStorage/sessionStorage.singleton.ts");
/* harmony import */ var _ui_chatPage_chatBox_main_usersSidebar_usersList_usersListItem_usersListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/chatPage/chatBox/main/usersSidebar/usersList/usersListItem/usersListItem */ "./src/ui/chatPage/chatBox/main/usersSidebar/usersList/usersListItem/usersListItem.ts");
/* harmony import */ var _ui_chatPage_chatBox_main_chat_messageItems_messageItem_messageItemView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/chatPage/chatBox/main/chat/messageItems/messageItem/messageItemView */ "./src/ui/chatPage/chatBox/main/chat/messageItems/messageItem/messageItemView.ts");
/* harmony import */ var _ui_chatPage_chatBox_main_chat_chatView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/chatPage/chatBox/main/chat/chatView */ "./src/ui/chatPage/chatBox/main/chat/chatView.ts");
/* harmony import */ var _ui_chatPage_chatBox_main_chat_messageItems_newMessagesLine_newMessagesLineView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/chatPage/chatBox/main/chat/messageItems/newMessagesLine/newMessagesLineView */ "./src/ui/chatPage/chatBox/main/chat/messageItems/newMessagesLine/newMessagesLineView.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
};








var EventsController = /** @class */ (function () {
    function EventsController() {
        this.unregisterAddUserEvent = function () { };
        this.unregisterDeleteUserEvent = function () { };
        this.unregisterAddMessageEvent = function () { };
        this.unregisterDeleteMessageEvent = function () { };
        this.unregisterShowMessageReceivedNotificationEvent = function () { };
        this.unregisterDeleteMessageReceivedNotificationEvent = function () { };
        this.unregisterAddReceivedMessageEvent = function () { };
        this.unregisterSetCurrentUserNameEvent = function () { };
        this.unregisterShowNewMessagesLineEvent = function () { };
        this.unregisterDeleteNewMessagesLineEvent = function () { };
    }
    EventsController.prototype.initialize = function () {
        var _a;
        this.subscribeSetCurrentUserNameEvent();
        this.subscribeAddUserEvent();
        this.subscribeDeleteUserEvent();
        this.subscribeDeleteMessageEvent();
        this.subscribeUpdateDialogueHeaderEvent();
        this.subscribeUpdateDialogueHeaderStatusEvent();
        this.subscribeOpenDialogueBoxEvent();
        this.subscribeAddMessageEvent();
        this.subscribeAddReceivedMessageEvent();
        this.subscribeShowMessageReceivedNotificationEvent();
        this.subscribeDeleteMessageReceivedNotificationEvent();
        this.subscribeShowNewMessagesLineEvent();
        this.subscribeDeleteNewMessagesLineEvent();
        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_eventBus_eventBus_interface__WEBPACK_IMPORTED_MODULE_1__.EventBusEvents.EVENT_SET_CURRENT_USERNAME, (_a = _sessionStorage_sessionStorage_singleton__WEBPACK_IMPORTED_MODULE_3__["default"].getUser()) === null || _a === void 0 ? void 0 : _a.login);
    };
    EventsController.prototype.destruct = function () {
        this.unregisterSetCurrentUserNameEvent();
        this.unregisterAddUserEvent();
        this.unregisterDeleteUserEvent();
        this.unregisterDeleteMessageEvent();
        this.unregisterShowMessageReceivedNotificationEvent();
        this.unregisterDeleteMessageReceivedNotificationEvent();
        this.unregisterAddMessageEvent();
        this.unregisterAddReceivedMessageEvent();
        this.unregisterShowNewMessagesLineEvent();
        this.unregisterDeleteNewMessagesLineEvent();
    };
    EventsController.prototype.subscribeSetCurrentUserNameEvent = function () {
        this.unregisterSetCurrentUserNameEvent = _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].register(_eventBus_eventBus_interface__WEBPACK_IMPORTED_MODULE_1__.EventBusEvents.EVENT_SET_CURRENT_USERNAME, function (userName) {
            var currentUserName = document.querySelector('.current-userName');
            if (currentUserName) {
                currentUserName.innerHTML = userName;
            }
        }).unregister;
    };
    EventsController.prototype.subscribeAddUserEvent = function () {
        var _this = this;
        this.unregisterAddUserEvent = _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].register(_eventBus_eventBus_interface__WEBPACK_IMPORTED_MODULE_1__.EventBusEvents.EVENT_ADD_USER, function (user) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_eventBus_eventBus_interface__WEBPACK_IMPORTED_MODULE_1__.EventBusEvents.EVENT_DELETE_USER, user);
                new _ui_chatPage_chatBox_main_usersSidebar_usersList_usersListItem_usersListItem__WEBPACK_IMPORTED_MODULE_4__["default"](user);
                return [2 /*return*/];
            });
        }); }).unregister;
    };
    EventsController.prototype.subscribeDeleteUserEvent = function () {
        this.unregisterDeleteUserEvent = _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].register(_eventBus_eventBus_interface__WEBPACK_IMPORTED_MODULE_1__.EventBusEvents.EVENT_DELETE_USER, function (user) {
            var usersContainer = document.querySelector('.users-container');
            if (!usersContainer) {
                return;
            }
            var userItem = usersContainer.querySelector(".user-item-".concat(user.login));
            if (!userItem) {
                return;
            }
            usersContainer.removeChild(userItem);
        }).unregister;
    };
    EventsController.prototype.subscribeUpdateDialogueHeaderEvent = function () {
        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].register(_eventBus_eventBus_interface__WEBPACK_IMPORTED_MODULE_1__.EventBusEvents.EVENT_UPDATE_DIALOGUE_HEADER, function (user) {
            var userName = document.querySelector('.user-name');
            userName.innerHTML = user.login;
            var userStatus = document.querySelector('.user-status');
            userStatus.innerHTML = user.isLogined ? "Online" /* UserStatuses.ONLINE */ : "Offline" /* UserStatuses.OFFLINE */;
        });
    };
    EventsController.prototype.subscribeUpdateDialogueHeaderStatusEvent = function () {
        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].register(_eventBus_eventBus_interface__WEBPACK_IMPORTED_MODULE_1__.EventBusEvents.EVENT_UPDATE_DIALOGUE_HEADER_USER_STATUS, function (user) {
            var userName = document.querySelector('.user-name');
            if (userName && userName.textContent === user.login) {
                var userStatus = document.querySelector('.user-status');
                userStatus.innerHTML = user.isLogined ? "Online" /* UserStatuses.ONLINE */ : "Offline" /* UserStatuses.OFFLINE */;
            }
        });
    };
    EventsController.prototype.subscribeOpenDialogueBoxEvent = function () {
        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].register(_eventBus_eventBus_interface__WEBPACK_IMPORTED_MODULE_1__.EventBusEvents.EVENT_OPEN_DIALOGUE_BOX, function (isMessageHistoryEmpty) {
            var userName = document.querySelector('.user-name');
            if (!userName.textContent) {
                return;
            }
            var dialogueBox = document.querySelector('.dialogue-box');
            dialogueBox.innerHTML = '';
            if (isMessageHistoryEmpty) {
                _ui_chatPage_chatBox_main_chat_chatView__WEBPACK_IMPORTED_MODULE_6__["default"].createWriteFirstMessageNotification();
            }
            var sendMessageInput = document.querySelector('.input-send');
            sendMessageInput.disabled = false;
        });
    };
    EventsController.prototype.subscribeAddMessageEvent = function () {
        this.unregisterAddMessageEvent = _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].register(_eventBus_eventBus_interface__WEBPACK_IMPORTED_MODULE_1__.EventBusEvents.EVENT_ADD_MESSAGE, function (message) {
            var _a;
            var dialogueBoxNotification = document.querySelector('.dialogue-box-notification');
            if (dialogueBoxNotification) {
                dialogueBoxNotification.innerHTML = '';
            }
            if (!message.text) {
                return;
            }
            var currentUser = (_a = _sessionStorage_sessionStorage_singleton__WEBPACK_IMPORTED_MODULE_3__["default"].getUser()) === null || _a === void 0 ? void 0 : _a.login;
            var cameFrom = '';
            if (message.from === currentUser) {
                cameFrom = 'current-user';
            }
            else {
                cameFrom = 'user';
            }
            new _ui_chatPage_chatBox_main_chat_messageItems_messageItem_messageItemView__WEBPACK_IMPORTED_MODULE_5__["default"](message, cameFrom);
        }).unregister;
    };
    EventsController.prototype.subscribeAddReceivedMessageEvent = function () {
        this.unregisterAddReceivedMessageEvent = _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].register(_eventBus_eventBus_interface__WEBPACK_IMPORTED_MODULE_1__.EventBusEvents.EVENT_ADD_RECEIVED_MESSAGE, function (message) {
            var _a;
            if (!message.text) {
                return;
            }
            var currentUser = (_a = _sessionStorage_sessionStorage_singleton__WEBPACK_IMPORTED_MODULE_3__["default"].getUser()) === null || _a === void 0 ? void 0 : _a.login;
            var cameFrom = 'user';
            var userName = document.querySelector('.user-name');
            if (userName.textContent === message.from && currentUser === message.to) {
                new _ui_chatPage_chatBox_main_chat_messageItems_messageItem_messageItemView__WEBPACK_IMPORTED_MODULE_5__["default"](message, cameFrom);
            }
        }).unregister;
    };
    EventsController.prototype.subscribeDeleteMessageEvent = function () {
        this.unregisterDeleteMessageEvent = _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].register(_eventBus_eventBus_interface__WEBPACK_IMPORTED_MODULE_1__.EventBusEvents.EVENT_DELETE_MESSAGE, function (messageId) {
            var dialogueBox = document.querySelector('.dialogue-box');
            var message = dialogueBox.querySelector("[id=\"".concat(messageId, "\"]"));
            if (!message) {
                return;
            }
            message.remove();
        }).unregister;
    };
    EventsController.prototype.subscribeShowMessageReceivedNotificationEvent = function () {
        this.unregisterShowMessageReceivedNotificationEvent = _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].register(_eventBus_eventBus_interface__WEBPACK_IMPORTED_MODULE_1__.EventBusEvents.EVENT_SHOW_MESSAGE_RECEIVED_NOTIFICATION, function (message) {
            var notification = document.querySelector(".notification-".concat(message.from));
            if (notification) {
                notification.innerHTML = _constants_chatPageConstants__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_ICON;
            }
        }).unregister;
    };
    EventsController.prototype.subscribeDeleteMessageReceivedNotificationEvent = function () {
        this.unregisterDeleteMessageReceivedNotificationEvent = _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].register(_eventBus_eventBus_interface__WEBPACK_IMPORTED_MODULE_1__.EventBusEvents.EVENT_DELETE_MESSAGE_RECEIVED_NOTIFICATION, function (userItemName) {
            var notification = document.querySelector(".notification-".concat(userItemName));
            if (notification) {
                notification.innerHTML = '';
            }
        }).unregister;
    };
    EventsController.prototype.subscribeShowNewMessagesLineEvent = function () {
        this.unregisterShowNewMessagesLineEvent = _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].register(_eventBus_eventBus_interface__WEBPACK_IMPORTED_MODULE_1__.EventBusEvents.EVENT_SHOW_NEW_MESSAGES_LINE, function (firstUnreadMessage) {
            var dialogueBox = document.querySelector('.dialogue-box');
            var newMessagesLine = document.querySelector('.new-messages-line');
            if (newMessagesLine) {
                var linePosition = newMessagesLine.offsetTop;
                dialogueBox.scrollTop = linePosition;
                return;
            }
            new _ui_chatPage_chatBox_main_chat_messageItems_newMessagesLine_newMessagesLineView__WEBPACK_IMPORTED_MODULE_7__["default"](firstUnreadMessage);
        }).unregister;
    };
    EventsController.prototype.subscribeDeleteNewMessagesLineEvent = function () {
        this.unregisterDeleteNewMessagesLineEvent = _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].register(_eventBus_eventBus_interface__WEBPACK_IMPORTED_MODULE_1__.EventBusEvents.EVENT_DELETE_NEW_MESSAGES_LINE, function () {
            var newMessagesLine = document.querySelector('.new-messages-line');
            if (newMessagesLine) {
                newMessagesLine.remove();
            }
        }).unregister;
    };
    return EventsController;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventsController);


/***/ }),

/***/ "./src/controller/inputControllers/loginFormController/loginFormController.ts":
/*!************************************************************************************!*\
  !*** ./src/controller/inputControllers/loginFormController/loginFormController.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_api_singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../api/api.singleton */ "./src/api/api.singleton.ts");
/* harmony import */ var _constants_loginPageConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/loginPageConstants */ "./src/constants/loginPageConstants.ts");
/* harmony import */ var _sessionStorage_sessionStorage_singleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../sessionStorage/sessionStorage.singleton */ "./src/sessionStorage/sessionStorage.singleton.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
};



var LoginFormController = /** @class */ (function () {
    function LoginFormController() {
    }
    LoginFormController.prototype.addLoginFormEventListeners = function (formContainer) {
        var _this = this;
        var loginForm = formContainer.querySelector('.login-form');
        if (loginForm) {
            loginForm.addEventListener('submit', function (event) {
                event.preventDefault();
                _this.submitForm(loginForm);
            });
            window.addEventListener('keydown', function (event) {
                if (event.key === 'Enter' || document.body.id === "login" /* PageIDs.LOGIN_PAGE */) {
                    _this.submitForm(loginForm);
                }
            });
            loginForm.addEventListener('input', function () {
                _this.validateFormInputsAndGetStatus(loginForm);
            });
        }
    };
    LoginFormController.prototype.submitForm = function (form) {
        return __awaiter(this, void 0, void 0, function () {
            var user, storeUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.validateFormInputsAndGetStatus(form)) return [3 /*break*/, 2];
                        user = {
                            login: this.getLoginInputValue(form),
                            password: this.getPasswordInputValue(form),
                        };
                        storeUser = _sessionStorage_sessionStorage_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].getUser();
                        if (user.login !== (storeUser === null || storeUser === void 0 ? void 0 : storeUser.login)) {
                            _sessionStorage_sessionStorage_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].setUser(user);
                        }
                        return [4 /*yield*/, _api_api_singleton__WEBPACK_IMPORTED_MODULE_0__.Server.loginUser(user)];
                    case 1:
                        _a.sent();
                        this.clearFormInputs(form);
                        this.disableLoginButton(form);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    LoginFormController.prototype.getLoginInputValue = function (form) {
        var userLoginInput = form.querySelector('.input-userLogin');
        var inputValue = userLoginInput.value;
        return inputValue;
    };
    LoginFormController.prototype.getPasswordInputValue = function (form) {
        var userPasswordInput = form.querySelector('.input-userPassword');
        var inputValue = userPasswordInput.value;
        return inputValue;
    };
    LoginFormController.prototype.clearFormInputs = function (form) {
        var inputs = form.querySelectorAll('input');
        inputs.forEach(function (input) {
            input.value = '';
        });
    };
    LoginFormController.prototype.disableLoginButton = function (form) {
        var loginButton = form.querySelector('.login-btn');
        loginButton.disabled = true;
    };
    LoginFormController.prototype.validateFormInputsAndGetStatus = function (form) {
        var userLoginInput = form.querySelector('.input-userLogin');
        var userPasswordInput = form.querySelector('.input-userPassword');
        var userLoginError = form.querySelector('.error-message-userLogin');
        var userPasswordError = form.querySelector('.error-message-userPassword');
        this.clearErrorMessages(userLoginError, userPasswordError);
        var isUserNameValid = this.validateInput(userLoginInput, userLoginError, _constants_loginPageConstants__WEBPACK_IMPORTED_MODULE_1__.ValidationPatterns.englishLettersAndDigitsOnly, _constants_loginPageConstants__WEBPACK_IMPORTED_MODULE_1__.ValidationPatterns.firstLetterIsUppercase, 4 /* ValidInputLength.USER_LOGIN_MIN_LENGTH */);
        var isUserSurnameValid = this.validateInput(userPasswordInput, userPasswordError, _constants_loginPageConstants__WEBPACK_IMPORTED_MODULE_1__.ValidationPatterns.englishLettersAndDigitsOnly, _constants_loginPageConstants__WEBPACK_IMPORTED_MODULE_1__.ValidationPatterns.firstLetterIsUppercase, 8 /* ValidInputLength.USER_PASSWORD_MIN_LENGTH */);
        var loginButton = form.querySelector('.login-btn');
        if (loginButton) {
            loginButton.disabled = !(isUserNameValid && isUserSurnameValid);
        }
        return isUserNameValid && isUserSurnameValid;
    };
    LoginFormController.prototype.clearErrorMessages = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        messages.forEach(function (message) {
            message.textContent = '';
        });
    };
    LoginFormController.prototype.validateInput = function (input, errorElement, lettersPattern, firstLetterPattern, minLength) {
        var isValid = true;
        if (!this.validatePattern(input.value, lettersPattern)) {
            errorElement.textContent = "".concat(_constants_loginPageConstants__WEBPACK_IMPORTED_MODULE_1__.ERROR_ICON, " ").concat("Only English letters and digits" /* InputErrorMessages.ENGLISH_LETTERS_AND_DIGITS */);
            isValid = false;
        }
        else if (!this.validatePattern(input.value[0], firstLetterPattern)) {
            errorElement.textContent = "".concat(_constants_loginPageConstants__WEBPACK_IMPORTED_MODULE_1__.ERROR_ICON, " ").concat("The first letter - uppercase" /* InputErrorMessages.FIRST_LETTER_UPPERCASE */);
            isValid = false;
        }
        else if (input.value.length < minLength) {
            errorElement.textContent = "".concat(_constants_loginPageConstants__WEBPACK_IMPORTED_MODULE_1__.ERROR_ICON, " ").concat("Minimum characters - " /* InputErrorMessages.MIN_LENGTH */, " ").concat(minLength, " ");
            isValid = false;
        }
        return isValid;
    };
    LoginFormController.prototype.validatePattern = function (value, pattern) {
        return pattern.test(value);
    };
    return LoginFormController;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginFormController);


/***/ }),

/***/ "./src/controller/inputControllers/searchFormController/searchFormController.ts":
/*!**************************************************************************************!*\
  !*** ./src/controller/inputControllers/searchFormController/searchFormController.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var SearchFormController = /** @class */ (function () {
    function SearchFormController() {
    }
    SearchFormController.prototype.addSearchFormEventListener = function (formContainer) {
        var searchInput = formContainer.querySelector('.input-search');
        searchInput.addEventListener('input', function () {
            var usersContainer = document.querySelector('.users-container');
            if (!usersContainer) {
                return;
            }
            var usersItems = usersContainer.querySelectorAll('.user-item');
            if (!usersItems) {
                return;
            }
            usersItems.forEach(function (item) {
                var searchText = searchInput.value.toLowerCase();
                var itemText = item.textContent.toLowerCase();
                if (itemText.includes(searchText)) {
                    item.style.display = 'flex';
                }
                else {
                    item.style.display = 'none';
                }
            });
        });
    };
    return SearchFormController;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchFormController);


/***/ }),

/***/ "./src/controller/inputControllers/sendFormController/sendFormController.ts":
/*!**********************************************************************************!*\
  !*** ./src/controller/inputControllers/sendFormController/sendFormController.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_api_singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../api/api.singleton */ "./src/api/api.singleton.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
};

var SendFormController = /** @class */ (function () {
    function SendFormController() {
    }
    SendFormController.prototype.addSendFormEventListeners = function (formContainer) {
        var _this = this;
        var sendForm = formContainer.querySelector('.send-form');
        var sendInput = formContainer.querySelector('.input-send');
        var sendButton = formContainer.querySelector('.send-btn');
        if (sendForm) {
            sendForm.addEventListener('submit', function (event) {
                event.preventDefault();
                _this.submitForm(sendForm);
                _this.toggleSendButton(sendInput, sendButton);
            });
            sendButton.addEventListener('click', function (event) {
                event.preventDefault();
                _this.submitForm(sendForm);
                _this.toggleSendButton(sendInput, sendButton);
            });
            window.addEventListener('keydown', function (event) {
                if (event.key === 'Enter' || document.body.id === "chat" /* PageIDs.CHAT_PAGE */) {
                    _this.submitForm(sendForm);
                    _this.toggleSendButton(sendInput, sendButton);
                }
            });
            sendInput.addEventListener('input', function () {
                _this.toggleSendButton(sendInput, sendButton);
            });
        }
    };
    SendFormController.prototype.toggleSendButton = function (input, button) {
        if (input.value.trim() === '') {
            button.disabled = true;
        }
        else {
            button.disabled = false;
        }
    };
    SendFormController.prototype.submitForm = function (form) {
        return __awaiter(this, void 0, void 0, function () {
            var messageText, message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        messageText = this.getMessageInput(form);
                        if (!messageText) {
                            return [2 /*return*/];
                        }
                        message = {
                            to: this.getRecipient(),
                            text: messageText,
                        };
                        this.clearMessageInput(form);
                        return [4 /*yield*/, _api_api_singleton__WEBPACK_IMPORTED_MODULE_0__.Server.sendMessageToUser(message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SendFormController.prototype.getMessageInput = function (form) {
        var sendInput = form.querySelector('.input-send');
        return sendInput.value;
    };
    SendFormController.prototype.clearMessageInput = function (form) {
        var input = form.querySelector('.input-send');
        input.value = '';
    };
    SendFormController.prototype.getRecipient = function () {
        var userToSendMessage = document.querySelector('.user-name');
        return userToSendMessage.textContent;
    };
    return SendFormController;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SendFormController);


/***/ }),

/***/ "./src/controller/userItemController/userItemController.ts":
/*!*****************************************************************!*\
  !*** ./src/controller/userItemController/userItemController.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_api_singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/api.singleton */ "./src/api/api.singleton.ts");
/* harmony import */ var _eventBus_eventBus_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../eventBus/eventBus.interface */ "./src/eventBus/eventBus.interface.ts");
/* harmony import */ var _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../eventBus/eventBus.singleton */ "./src/eventBus/eventBus.singleton.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
};



var UserItemController = /** @class */ (function () {
    function UserItemController() {
    }
    UserItemController.prototype.addUserItemEventListener = function (userItem, user) {
        var _this = this;
        userItem.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _api_api_singleton__WEBPACK_IMPORTED_MODULE_0__.Server.getMessageHistory(user.login)];
                    case 1:
                        _a.sent();
                        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_eventBus_eventBus_interface__WEBPACK_IMPORTED_MODULE_1__.EventBusEvents.EVENT_UPDATE_DIALOGUE_HEADER, user);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    return UserItemController;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserItemController);


/***/ }),

/***/ "./src/eventBus/eventBus.interface.ts":
/*!********************************************!*\
  !*** ./src/eventBus/eventBus.interface.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventBusEvents: () => (/* binding */ EventBusEvents)
/* harmony export */ });
var EventBusEvents;
(function (EventBusEvents) {
    EventBusEvents["EVENT_SET_CURRENT_USERNAME"] = "EventSetCurrentUsername";
    EventBusEvents["EVENT_ADD_USER"] = "EventAddUser";
    EventBusEvents["EVENT_DELETE_USER"] = "EventDeleteUser";
    EventBusEvents["EVENT_UPDATE_DIALOGUE_HEADER"] = "EventUpdateDialogueHeader";
    EventBusEvents["EVENT_UPDATE_DIALOGUE_HEADER_USER_STATUS"] = "EventUpdateDialogueHeaderUserStatus";
    EventBusEvents["EVENT_OPEN_DIALOGUE_BOX"] = "EventOpenDialogueBox";
    EventBusEvents["EVENT_SHOW_WRITE_FIRST_MESSAGE_NOTIFICATION"] = "EventShowWriteFirstMessageNotification";
    EventBusEvents["EVENT_SHOW_NEW_MESSAGES_LINE"] = "EventShowNewMessagesLine";
    EventBusEvents["EVENT_DELETE_NEW_MESSAGES_LINE"] = "EventDeleteNewMessagesLine";
    EventBusEvents["EVENT_ADD_MESSAGE"] = "EventAddMessage";
    EventBusEvents["EVENT_ADD_RECEIVED_MESSAGE"] = "EventAddReceivedMessage";
    EventBusEvents["EVENT_DELETE_MESSAGE"] = "EventDeleteMessage";
    EventBusEvents["EVENT_CHANGE_MESSAGE_READ_STATUS"] = "EventChangeMessageReadStatus";
    EventBusEvents["EVENT_SHOW_MESSAGE_RECEIVED_NOTIFICATION"] = "EventShowMessageReceivedNotification";
    EventBusEvents["EVENT_DELETE_MESSAGE_RECEIVED_NOTIFICATION"] = "EventDeleteMessageReceivedNotification";
})(EventBusEvents || (EventBusEvents = {}));


/***/ }),

/***/ "./src/eventBus/eventBus.singleton.ts":
/*!********************************************!*\
  !*** ./src/eventBus/eventBus.singleton.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _eventBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventBus */ "./src/eventBus/eventBus.ts");

var eventBus = new _eventBus__WEBPACK_IMPORTED_MODULE_0__["default"]();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventBus);


/***/ }),

/***/ "./src/eventBus/eventBus.ts":
/*!**********************************!*\
  !*** ./src/eventBus/eventBus.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var EventBus = /** @class */ (function () {
    function EventBus() {
        this.subscribers = {};
    }
    EventBus.prototype.dispatch = function (event, arg) {
        var subscriber = this.subscribers[event];
        if (subscriber === undefined) {
            return;
        }
        Object.keys(subscriber).forEach(function (key) {
            if (arg !== undefined) {
                subscriber[key](arg);
            }
        });
    };
    EventBus.prototype.register = function (event, callback) {
        var _this = this;
        var id = this.getNextId();
        if (!this.subscribers[event]) {
            this.subscribers[event] = {};
        }
        this.subscribers[event][id] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (args.length > 0) {
                var arg = args[0];
                callback(arg);
            }
        };
        return {
            unregister: function () {
                delete _this.subscribers[event][id];
                if (Object.keys(_this.subscribers[event]).length === 0) {
                    delete _this.subscribers[event];
                }
            },
        };
    };
    EventBus.prototype.getNextId = function () {
        EventBus.nextId += 1;
        return EventBus.nextId;
    };
    EventBus.nextId = 0;
    return EventBus;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventBus);


/***/ }),

/***/ "./src/router/router.singleton.ts":
/*!****************************************!*\
  !*** ./src/router/router.singleton.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagesRouter: () => (/* binding */ PagesRouter)
/* harmony export */ });
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ "./src/router/router.ts");

var PagesRouter = new _router__WEBPACK_IMPORTED_MODULE_0__["default"]();


/***/ }),

/***/ "./src/router/router.ts":
/*!******************************!*\
  !*** ./src/router/router.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ui_aboutPage_aboutPageView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/aboutPage/aboutPageView */ "./src/ui/aboutPage/aboutPageView.ts");
/* harmony import */ var _ui_chatPage_chatPageView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/chatPage/chatPageView */ "./src/ui/chatPage/chatPageView.ts");
/* harmony import */ var _ui_loginPage_loginPageView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/loginPage/loginPageView */ "./src/ui/loginPage/loginPageView.ts");
/* harmony import */ var _sessionStorage_sessionStorage_singleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sessionStorage/sessionStorage.singleton */ "./src/sessionStorage/sessionStorage.singleton.ts");
/* harmony import */ var _controller_eventsController_eventsController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controller/eventsController/eventsController */ "./src/controller/eventsController/eventsController.ts");





var Router = /** @class */ (function () {
    function Router() {
        this.container = document.body;
        this.eventsController = new _controller_eventsController_eventsController__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this.initialize();
    }
    Router.prototype.routeToPage = function (pageId) {
        this.clearContainer();
        var page = null;
        switch (pageId) {
            case "login" /* PageIDs.LOGIN_PAGE */:
                if (!_sessionStorage_sessionStorage_singleton__WEBPACK_IMPORTED_MODULE_3__["default"].getUserStatus()) {
                    page = new _ui_loginPage_loginPageView__WEBPACK_IMPORTED_MODULE_2__["default"](pageId).render();
                    this.changeHash(pageId);
                }
                else {
                    page = new _ui_chatPage_chatPageView__WEBPACK_IMPORTED_MODULE_1__["default"]("chat" /* PageIDs.CHAT_PAGE */).render();
                    this.changeHash("chat" /* PageIDs.CHAT_PAGE */);
                }
                break;
            case "chat" /* PageIDs.CHAT_PAGE */:
                if (_sessionStorage_sessionStorage_singleton__WEBPACK_IMPORTED_MODULE_3__["default"].getUserStatus()) {
                    page = new _ui_chatPage_chatPageView__WEBPACK_IMPORTED_MODULE_1__["default"](pageId).render();
                    this.changeHash(pageId);
                }
                else {
                    page = new _ui_loginPage_loginPageView__WEBPACK_IMPORTED_MODULE_2__["default"]("login" /* PageIDs.LOGIN_PAGE */).render();
                    this.changeHash("login" /* PageIDs.LOGIN_PAGE */);
                }
                break;
            case "about" /* PageIDs.ABOUT_PAGE */:
                page = new _ui_aboutPage_aboutPageView__WEBPACK_IMPORTED_MODULE_0__["default"](pageId).render();
                this.changeHash(pageId);
                break;
            default:
                break;
        }
        if (page) {
            this.container.append(page);
            this.eventsController.destruct();
            this.eventsController.initialize();
        }
    };
    Router.prototype.clearContainer = function () {
        this.container.innerHTML = '';
    };
    Router.prototype.changeHash = function (newHash) {
        window.location.hash = newHash;
    };
    Router.prototype.initialize = function () {
        var _this = this;
        window.addEventListener('hashchange', function () {
            var newHash = window.location.hash.substring(1);
            _this.routeToPage(newHash);
        });
        var initialHash = window.location.hash.substring(1);
        if (initialHash) {
            this.routeToPage(initialHash);
        }
    };
    return Router;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Router);


/***/ }),

/***/ "./src/sessionStorage/sessionStorage.singleton.ts":
/*!********************************************************!*\
  !*** ./src/sessionStorage/sessionStorage.singleton.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sessionStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sessionStorage */ "./src/sessionStorage/sessionStorage.ts");

var SessionStorage = new _sessionStorage__WEBPACK_IMPORTED_MODULE_0__["default"]();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SessionStorage);


/***/ }),

/***/ "./src/sessionStorage/sessionStorage.ts":
/*!**********************************************!*\
  !*** ./src/sessionStorage/sessionStorage.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var SessionStore = /** @class */ (function () {
    function SessionStore() {
    }
    SessionStore.prototype.setUser = function (user) {
        sessionStorage.setItem('User', JSON.stringify(user));
    };
    SessionStore.prototype.getUser = function () {
        var user = sessionStorage.getItem('User');
        return JSON.parse(user);
    };
    SessionStore.prototype.setUserStatus = function (status) {
        sessionStorage.setItem('isLogined', JSON.stringify(status));
    };
    SessionStore.prototype.getUserStatus = function () {
        var isLogined = sessionStorage.getItem('isLogined');
        return isLogined ? JSON.parse(isLogined) : null;
    };
    SessionStore.prototype.clear = function () {
        sessionStorage.clear();
    };
    return SessionStore;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SessionStore);


/***/ }),

/***/ "./src/ui/aboutPage/aboutBox/aboutBoxContent/aboutBoxContentView.ts":
/*!**************************************************************************!*\
  !*** ./src/ui/aboutPage/aboutBox/aboutBoxContent/aboutBoxContentView.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utilities/createElement */ "./src/utilities/createElement.ts");
/* harmony import */ var _utilities_createLinkElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utilities/createLinkElement */ "./src/utilities/createLinkElement.ts");
/* harmony import */ var _constants_aboutPageConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../constants/aboutPageConstants */ "./src/constants/aboutPageConstants.ts");
/* harmony import */ var _constants_pagesConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../constants/pagesConstants */ "./src/constants/pagesConstants.ts");
/* harmony import */ var _controller_buttonControllers_returnButtonController_returnButtonController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../controller/buttonControllers/returnButtonController/returnButtonController */ "./src/controller/buttonControllers/returnButtonController/returnButtonController.ts");





var AboutBoxContentView = /** @class */ (function () {
    function AboutBoxContentView() {
        this.returnButtonController = new _controller_buttonControllers_returnButtonController_returnButtonController__WEBPACK_IMPORTED_MODULE_4__["default"]();
    }
    AboutBoxContentView.prototype.render = function () {
        var aboutBoxContent = this.createAboutBoxContent();
        this.returnButtonController.addReturnButtonEventListener(aboutBoxContent);
        return aboutBoxContent;
    };
    AboutBoxContentView.prototype.createAboutBoxContent = function () {
        var aboutBoxContent = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('div', {
            className: 'about-box-content',
        }).createElement();
        var title = this.createTitle();
        var textContent = this.createTextContent();
        var githubLink = this.createGithubLink();
        var returnButton = this.createReturnButton();
        aboutBoxContent.append(title, textContent, githubLink, returnButton);
        return aboutBoxContent;
    };
    AboutBoxContentView.prototype.createTitle = function () {
        var title = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('p', { className: 'about-box-title' }, _constants_pagesConstants__WEBPACK_IMPORTED_MODULE_3__.APP_NAME).createElement();
        return title;
    };
    AboutBoxContentView.prototype.createTextContent = function () {
        var textContent = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('p', { className: 'about-box-text' }, _constants_aboutPageConstants__WEBPACK_IMPORTED_MODULE_2__.ABOUT_BOX_TEXT_CONTENT).createElement();
        return textContent;
    };
    AboutBoxContentView.prototype.createGithubLink = function () {
        var githubLink = new _utilities_createLinkElement__WEBPACK_IMPORTED_MODULE_1__["default"]({
            href: _constants_pagesConstants__WEBPACK_IMPORTED_MODULE_3__.GITHUB_LINK,
            target: '_blank',
            className: 'github-link',
            innerHTML: _constants_pagesConstants__WEBPACK_IMPORTED_MODULE_3__.GITHUB_LOGO_STRING_SVG_ELEMENT,
        }).createElement();
        return githubLink;
    };
    AboutBoxContentView.prototype.createReturnButton = function () {
        var returnButton = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('button', { className: 'return-btn' }, 'Return').createElement();
        return returnButton;
    };
    return AboutBoxContentView;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutBoxContentView);


/***/ }),

/***/ "./src/ui/aboutPage/aboutBox/aboutBoxView.ts":
/*!***************************************************!*\
  !*** ./src/ui/aboutPage/aboutBox/aboutBoxView.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utilities/createElement */ "./src/utilities/createElement.ts");
/* harmony import */ var _aboutBoxContent_aboutBoxContentView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aboutBoxContent/aboutBoxContentView */ "./src/ui/aboutPage/aboutBox/aboutBoxContent/aboutBoxContentView.ts");


var AboutBoxView = /** @class */ (function () {
    function AboutBoxView() {
        this.aboutBoxContentView = new _aboutBoxContent_aboutBoxContentView__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    AboutBoxView.prototype.render = function () {
        var aboutBox = this.createAboutBox();
        return aboutBox;
    };
    AboutBoxView.prototype.createAboutBox = function () {
        var aboutBox = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('div', { className: 'about-box' }).createElement();
        var aboutBoxContent = this.aboutBoxContentView.render();
        aboutBox.append(aboutBoxContent);
        return aboutBox;
    };
    return AboutBoxView;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutBoxView);


/***/ }),

/***/ "./src/ui/aboutPage/aboutPageView.ts":
/*!*******************************************!*\
  !*** ./src/ui/aboutPage/aboutPageView.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/createElement */ "./src/utilities/createElement.ts");
/* harmony import */ var _aboutBox_aboutBoxView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aboutBox/aboutBoxView */ "./src/ui/aboutPage/aboutBox/aboutBoxView.ts");
/* harmony import */ var _aboutPage_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutPage.css */ "./src/ui/aboutPage/aboutPage.css");



var AboutPageView = /** @class */ (function () {
    function AboutPageView(containerId) {
        this.container = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('div', { id: containerId }).createElement();
        this.aboutBoxView = new _aboutBox_aboutBoxView__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    AboutPageView.prototype.render = function () {
        var aboutBox = this.aboutBoxView.render();
        this.container.append(aboutBox);
        return this.container;
    };
    return AboutPageView;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutPageView);


/***/ }),

/***/ "./src/ui/chatPage/chatBox/chatBoxView.ts":
/*!************************************************!*\
  !*** ./src/ui/chatPage/chatBox/chatBoxView.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _header_headerContentView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/headerContentView */ "./src/ui/chatPage/chatBox/header/headerContentView.ts");
/* harmony import */ var _footer_footerContentView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footerContentView */ "./src/ui/chatPage/chatBox/footer/footerContentView.ts");
/* harmony import */ var _utilities_createElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utilities/createElement */ "./src/utilities/createElement.ts");
/* harmony import */ var _main_mainContentView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/mainContentView */ "./src/ui/chatPage/chatBox/main/mainContentView.ts");




var ChatBoxView = /** @class */ (function () {
    function ChatBoxView() {
        this.headerView = new _header_headerContentView__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.mainView = new _main_mainContentView__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this.footerView = new _footer_footerContentView__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    ChatBoxView.prototype.render = function () {
        var chatBox = this.createChatBox();
        return chatBox;
    };
    ChatBoxView.prototype.createChatBox = function () {
        var chatBox = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_2__["default"]('div', {
            className: 'chat-box',
        }).createElement();
        var header = this.headerView.render();
        var main = this.mainView.render();
        var footer = this.footerView.render();
        chatBox.append(header, main, footer);
        return chatBox;
    };
    return ChatBoxView;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatBoxView);


/***/ }),

/***/ "./src/ui/chatPage/chatBox/footer/footerContentView.ts":
/*!*************************************************************!*\
  !*** ./src/ui/chatPage/chatBox/footer/footerContentView.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utilities/createElement */ "./src/utilities/createElement.ts");
/* harmony import */ var _utilities_createLinkElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utilities/createLinkElement */ "./src/utilities/createLinkElement.ts");
/* harmony import */ var _constants_pagesConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../constants/pagesConstants */ "./src/constants/pagesConstants.ts");
/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.css */ "./src/ui/chatPage/chatBox/footer/footer.css");




var FooterContentView = /** @class */ (function () {
    function FooterContentView() {
    }
    FooterContentView.prototype.render = function () {
        var footerContent = this.createFooterContent();
        return footerContent;
    };
    FooterContentView.prototype.createFooterContent = function () {
        var footerContent = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('footer', {
            className: 'footer-content',
        }).createElement();
        var schoolLogo = this.createSchoolLogoAndLink();
        var yearOfAppCreation = this.createYearOfAppCreation();
        var githubLogo = this.createGithubLogoAndLink();
        footerContent.append(schoolLogo, yearOfAppCreation, githubLogo);
        return footerContent;
    };
    FooterContentView.prototype.createSchoolLogoAndLink = function () {
        var schoolLogo = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('div', { className: 'school-logo' }).createElement();
        var schoolLink = new _utilities_createLinkElement__WEBPACK_IMPORTED_MODULE_1__["default"]({
            href: _constants_pagesConstants__WEBPACK_IMPORTED_MODULE_2__.SCHOOL_LINK,
            target: '_blank',
            className: 'school-link',
            innerHTML: _constants_pagesConstants__WEBPACK_IMPORTED_MODULE_2__.SCHOOL_LOGO_STRING_SVG_ELEMENT,
        }).createElement();
        schoolLogo.append(schoolLink);
        return schoolLogo;
    };
    FooterContentView.prototype.createGithubLogoAndLink = function () {
        var githubLogo = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('div', { className: 'github-logo' }).createElement();
        var githubLink = new _utilities_createLinkElement__WEBPACK_IMPORTED_MODULE_1__["default"]({
            href: _constants_pagesConstants__WEBPACK_IMPORTED_MODULE_2__.GITHUB_LINK,
            target: '_blank',
            className: 'github-link',
            innerHTML: _constants_pagesConstants__WEBPACK_IMPORTED_MODULE_2__.GITHUB_LOGO_STRING_SVG_ELEMENT,
        }).createElement();
        githubLogo.append(githubLink);
        return githubLogo;
    };
    FooterContentView.prototype.createYearOfAppCreation = function () {
        var yearOfAppCreation = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('div', {
            className: 'creation-year',
        }, '2024').createElement();
        return yearOfAppCreation;
    };
    return FooterContentView;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterContentView);


/***/ }),

/***/ "./src/ui/chatPage/chatBox/header/headerContentView.ts":
/*!*************************************************************!*\
  !*** ./src/ui/chatPage/chatBox/header/headerContentView.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utilities/createElement */ "./src/utilities/createElement.ts");
/* harmony import */ var _controller_buttonControllers_logoutButtonController_logoutButtonController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../controller/buttonControllers/logoutButtonController/logoutButtonController */ "./src/controller/buttonControllers/logoutButtonController/logoutButtonController.ts");
/* harmony import */ var _controller_aboutIconController_aboutIconController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../controller/aboutIconController/aboutIconController */ "./src/controller/aboutIconController/aboutIconController.ts");
/* harmony import */ var _constants_pagesConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../constants/pagesConstants */ "./src/constants/pagesConstants.ts");
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header.css */ "./src/ui/chatPage/chatBox/header/header.css");





var HeaderContentView = /** @class */ (function () {
    function HeaderContentView() {
        this.logoutButtonController = new _controller_buttonControllers_logoutButtonController_logoutButtonController__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.AboutIconController = new _controller_aboutIconController_aboutIconController__WEBPACK_IMPORTED_MODULE_2__["default"]();
    }
    HeaderContentView.prototype.render = function () {
        var headerContent = this.createHeaderContent();
        this.logoutButtonController.addLogoutButtonEventListener(headerContent);
        this.AboutIconController.addChatAboutIconEventListener(headerContent);
        return headerContent;
    };
    HeaderContentView.prototype.createHeaderContent = function () {
        var headerContent = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('header', {
            className: 'header-content',
        }).createElement();
        var currentUser = this.createCurrentUserDisplay();
        var createAppName = this.createAppName();
        var aboutIcon = this.createAboutIcon();
        var logoutButton = this.createLogoutButton();
        headerContent.append(currentUser, aboutIcon, createAppName, logoutButton);
        return headerContent;
    };
    HeaderContentView.prototype.createCurrentUserDisplay = function () {
        var currentUserDisplay = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('div', {
            className: 'current-user',
        }).createElement();
        var currentUserIcon = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('div', {
            className: 'user-icon',
        }, _constants_pagesConstants__WEBPACK_IMPORTED_MODULE_3__.USER_ICON_STRING_SVG_ELEMENT).createElement();
        var currentUserName = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('div', {
            className: 'current-userName',
        }).createElement();
        currentUserDisplay.append(currentUserIcon, currentUserName);
        return currentUserDisplay;
    };
    HeaderContentView.prototype.createAppName = function () {
        var appName = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('p', { className: 'app-name' }, _constants_pagesConstants__WEBPACK_IMPORTED_MODULE_3__.APP_NAME).createElement();
        return appName;
    };
    HeaderContentView.prototype.createAboutIcon = function () {
        var aboutIcon = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('div', { className: 'chat-about-icon' }, _constants_pagesConstants__WEBPACK_IMPORTED_MODULE_3__.ABOUT_ICON_STRING_SVG_ELEMENT).createElement();
        return aboutIcon;
    };
    HeaderContentView.prototype.createLogoutButton = function () {
        var logoutButton = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('button', { className: 'logout-btn' }, 'Logout').createElement();
        return logoutButton;
    };
    return HeaderContentView;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderContentView);


/***/ }),

/***/ "./src/ui/chatPage/chatBox/main/chat/chatView.ts":
/*!*******************************************************!*\
  !*** ./src/ui/chatPage/chatBox/main/chat/chatView.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _controller_chatController_chatController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../controller/chatController/chatController */ "./src/controller/chatController/chatController.ts");
/* harmony import */ var _utilities_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../utilities/createElement */ "./src/utilities/createElement.ts");
/* harmony import */ var _sendMessageForm_sendMessageFormView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sendMessageForm/sendMessageFormView */ "./src/ui/chatPage/chatBox/main/chat/sendMessageForm/sendMessageFormView.ts");



var ChatView = /** @class */ (function () {
    function ChatView() {
        this.sendForm = new _sendMessageForm_sendMessageFormView__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.chatController = new _controller_chatController_chatController__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
    ChatView.prototype.render = function () {
        var chat = this.createChat();
        this.chatController.addChatEventListener(chat);
        return chat;
    };
    ChatView.prototype.createChat = function () {
        var chat = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_1__["default"]('div', { className: 'chat' }).createElement();
        var dialogueHeader = this.createDialogueHeader();
        var dialogueBox = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_1__["default"]('div', { className: 'dialogue-box' }).createElement();
        var notification = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_1__["default"]('div', {
            className: 'dialogue-box-notification',
        }, "Select the user to start the dialog..." /* DialogueNotifications.SELECT_USER_NOTIFICATION */).createElement();
        var sendForm = this.sendForm.render();
        dialogueBox.append(notification);
        chat.append(dialogueHeader, dialogueBox, sendForm);
        return chat;
    };
    ChatView.prototype.createDialogueHeader = function () {
        var dialogueBoxHeader = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_1__["default"]('div', {
            className: 'dialogue-box-header',
        }).createElement();
        var userName = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_1__["default"]('div', {
            className: 'user-name',
        }).createElement();
        var userStatus = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_1__["default"]('div', {
            className: 'user-status',
        }).createElement();
        dialogueBoxHeader.append(userName, userStatus);
        return dialogueBoxHeader;
    };
    ChatView.createWriteFirstMessageNotification = function () {
        var dialogueBox = document.querySelector('.dialogue-box');
        var notification = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_1__["default"]('div', {
            className: 'dialogue-box-notification',
        }, "Write your first message..." /* DialogueNotifications.WRITE_FIRST_MESSAGE_NOTIFICATION */).createElement();
        dialogueBox.append(notification);
    };
    return ChatView;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatView);


/***/ }),

/***/ "./src/ui/chatPage/chatBox/main/chat/messageItems/messageItem/messageItemView.ts":
/*!***************************************************************************************!*\
  !*** ./src/ui/chatPage/chatBox/main/chat/messageItems/messageItem/messageItemView.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_chatPageConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../constants/chatPageConstants */ "./src/constants/chatPageConstants.ts");
/* harmony import */ var _controller_buttonControllers_deleteMessageButtonController_deleteMessageButtonController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../controller/buttonControllers/deleteMessageButtonController/deleteMessageButtonController */ "./src/controller/buttonControllers/deleteMessageButtonController/deleteMessageButtonController.ts");
/* harmony import */ var _utilities_createElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../utilities/createElement */ "./src/utilities/createElement.ts");



var MessageItemView = /** @class */ (function () {
    function MessageItemView(message, cameFrom) {
        this.deleteMessageButtonController = new _controller_buttonControllers_deleteMessageButtonController_deleteMessageButtonController__WEBPACK_IMPORTED_MODULE_1__["default"]();
        var dialogueBox = document.querySelector('.dialogue-box');
        var messageItem = this.createMessageItem(message, cameFrom);
        if (dialogueBox) {
            dialogueBox.append(messageItem);
        }
        this.scrollDialogueBoxToLastMessage(dialogueBox);
    }
    MessageItemView.prototype.scrollDialogueBoxToLastMessage = function (container) {
        container.scrollTop = container.scrollHeight;
    };
    MessageItemView.prototype.createMessageItem = function (message, cameFrom) {
        var messageItem = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_2__["default"]('div', {
            className: "message ".concat(cameFrom),
            id: message.id,
        }).createElement();
        var from = this.createFromElement(cameFrom, message);
        var dateTime = this.createDateTimeElement(message);
        var messageText = this.createMessageTextElement(message);
        var messageEditedStatus = this.createMessageEditedStatusElement(message);
        var messageDeliveredStatus = this.createMessageDeliveredStatusElement(message);
        var deleteMessageButton = this.createDeleteMessageButtonElement(message);
        if (cameFrom === 'current-user') {
            messageItem.append(from, dateTime, messageText, messageEditedStatus, messageDeliveredStatus, deleteMessageButton);
        }
        else {
            messageItem.append(from, dateTime, messageText, messageEditedStatus);
        }
        return messageItem;
    };
    MessageItemView.prototype.createFromElement = function (cameFrom, message) {
        var from = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_2__["default"]('p', { className: 'message-from' }, "".concat(cameFrom === 'current-user' ? 'You' : message.from)).createElement();
        return from;
    };
    MessageItemView.prototype.createDateTimeElement = function (message) {
        var formattedDateTime = this.formatDateTime(message.datetime);
        var dateTime = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_2__["default"]('p', { className: 'message-dateTime' }, "".concat(formattedDateTime)).createElement();
        return dateTime;
    };
    MessageItemView.prototype.createMessageTextElement = function (message) {
        var messageText = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_2__["default"]('p', {
            className: 'message-text',
        }, message.text).createElement();
        return messageText;
    };
    MessageItemView.prototype.createMessageEditedStatusElement = function (message) {
        var messageEditedStatus = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_2__["default"]('p', {
            className: 'message-edited-status',
        }, message.status.isEdited ? 'edited' : '').createElement();
        return messageEditedStatus;
    };
    MessageItemView.prototype.createMessageDeliveredStatusElement = function (message) {
        var deliveredStatusIcon = '';
        if (message.status.isReaded) {
            deliveredStatusIcon = "\u2713" /* MessageStatusesIcons.READED */;
        }
        else if (message.status.isDelivered) {
            deliveredStatusIcon = "\uD83D\uDCE8" /* MessageStatusesIcons.DELIVERED */;
        }
        else {
            deliveredStatusIcon = "\uD83D\uDCE9" /* MessageStatusesIcons.SENT */;
        }
        var messageDeliveredStatus = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_2__["default"]('p', {
            className: 'message-delivered-status',
        }, deliveredStatusIcon).createElement();
        return messageDeliveredStatus;
    };
    MessageItemView.prototype.createDeleteMessageButtonElement = function (message) {
        var deleteMessageButton = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_2__["default"]('button', { className: 'delete-btn', id: "deleteBtn-".concat(message.id) }, _constants_chatPageConstants__WEBPACK_IMPORTED_MODULE_0__.DELETE_ICON).createElement();
        this.deleteMessageButtonController.addDeleteMessageButtonEventListener(deleteMessageButton);
        return deleteMessageButton;
    };
    MessageItemView.prototype.formatDateTime = function (datetime) {
        var date = new Date(datetime);
        var formattedDateTime = "".concat(String(date.getDate()).padStart(2, '0'), ".").concat(String(date.getMonth() + 1).padStart(2, '0'), ".").concat(date.getFullYear(), ", ").concat(String(date.getHours()).padStart(2, '0'), ":").concat(String(date.getMinutes()).padStart(2, '0'), ":").concat(String(date.getSeconds()).padStart(2, '0'));
        return formattedDateTime;
    };
    return MessageItemView;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessageItemView);


/***/ }),

/***/ "./src/ui/chatPage/chatBox/main/chat/messageItems/newMessagesLine/newMessagesLineView.ts":
/*!***********************************************************************************************!*\
  !*** ./src/ui/chatPage/chatBox/main/chat/messageItems/newMessagesLine/newMessagesLineView.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../utilities/createElement */ "./src/utilities/createElement.ts");

var NewMessagesLine = /** @class */ (function () {
    function NewMessagesLine(firstUnreadMessage) {
        var dialogueBox = document.querySelector('.dialogue-box');
        var unreadMessage = dialogueBox.querySelector("[id=\"".concat(firstUnreadMessage.id, "\"]"));
        if (!unreadMessage) {
            return;
        }
        var newMessagesLine = this.createNewMessagesLine();
        if (dialogueBox) {
            dialogueBox.insertBefore(newMessagesLine, unreadMessage);
        }
        this.scrollDialogueBoxToLine(dialogueBox, newMessagesLine);
    }
    NewMessagesLine.prototype.scrollDialogueBoxToLine = function (container, line) {
        var linePosition = line.offsetTop;
        container.scrollTop = linePosition;
    };
    NewMessagesLine.prototype.createNewMessagesLine = function () {
        var newMessagesLine = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('div', {
            className: 'new-messages-line',
        }, 'new').createElement();
        return newMessagesLine;
    };
    return NewMessagesLine;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewMessagesLine);


/***/ }),

/***/ "./src/ui/chatPage/chatBox/main/chat/sendMessageForm/sendMessageFormView.ts":
/*!**********************************************************************************!*\
  !*** ./src/ui/chatPage/chatBox/main/chat/sendMessageForm/sendMessageFormView.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_chatPageConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../constants/chatPageConstants */ "./src/constants/chatPageConstants.ts");
/* harmony import */ var _controller_inputControllers_sendFormController_sendFormController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../controller/inputControllers/sendFormController/sendFormController */ "./src/controller/inputControllers/sendFormController/sendFormController.ts");
/* harmony import */ var _utilities_createElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../utilities/createElement */ "./src/utilities/createElement.ts");
/* harmony import */ var _utilities_createInputElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utilities/createInputElement */ "./src/utilities/createInputElement.ts");




var SendMessageFormView = /** @class */ (function () {
    function SendMessageFormView() {
        this.sendFormController = new _controller_inputControllers_sendFormController_sendFormController__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    SendMessageFormView.prototype.render = function () {
        var sendMessageFormContainer = this.createSendMessageFormContainer();
        this.sendFormController.addSendFormEventListeners(sendMessageFormContainer);
        return sendMessageFormContainer;
    };
    SendMessageFormView.prototype.createSendMessageFormContainer = function () {
        var sendMessageFormContainer = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_2__["default"]('div', {
            className: 'send-form-container',
        }).createElement();
        var sendMessageForm = this.createSendMessageForm();
        sendMessageFormContainer.append(sendMessageForm);
        return sendMessageFormContainer;
    };
    SendMessageFormView.prototype.createSendMessageForm = function () {
        var sendMessageForm = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_2__["default"]('form', {
            className: 'send-form',
        }).createElement();
        var formSendMessageInput = new _utilities_createInputElement__WEBPACK_IMPORTED_MODULE_3__["default"]({
            placeholder: 'Message...',
            className: "input-send",
        }).createElement();
        formSendMessageInput.disabled = true;
        var sendButton = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_2__["default"]('button', { className: 'send-btn' }, _constants_chatPageConstants__WEBPACK_IMPORTED_MODULE_0__.SEND_ICON_STRING_SVG_ELEMENT).createElement();
        sendButton.disabled = true;
        sendMessageForm.append(formSendMessageInput, sendButton);
        return sendMessageForm;
    };
    return SendMessageFormView;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SendMessageFormView);


/***/ }),

/***/ "./src/ui/chatPage/chatBox/main/mainContentView.ts":
/*!*********************************************************!*\
  !*** ./src/ui/chatPage/chatBox/main/mainContentView.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utilities/createElement */ "./src/utilities/createElement.ts");
/* harmony import */ var _usersSidebar_usersSidebarView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usersSidebar/usersSidebarView */ "./src/ui/chatPage/chatBox/main/usersSidebar/usersSidebarView.ts");
/* harmony import */ var _chat_chatView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat/chatView */ "./src/ui/chatPage/chatBox/main/chat/chatView.ts");
/* harmony import */ var _chat_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat.css */ "./src/ui/chatPage/chatBox/main/chat.css");




var MainContentView = /** @class */ (function () {
    function MainContentView() {
        this.usersSidebarView = new _usersSidebar_usersSidebarView__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.chatView = new _chat_chatView__WEBPACK_IMPORTED_MODULE_2__["default"]();
    }
    MainContentView.prototype.render = function () {
        var mainContent = this.createMainContent();
        return mainContent;
    };
    MainContentView.prototype.createMainContent = function () {
        var mainContent = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('main', {
            className: 'main-content',
        }).createElement();
        var usersSidebar = this.usersSidebarView.render();
        var chat = this.chatView.render();
        mainContent.append(usersSidebar, chat);
        return mainContent;
    };
    return MainContentView;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainContentView);


/***/ }),

/***/ "./src/ui/chatPage/chatBox/main/usersSidebar/searchForm/searchFormView.ts":
/*!********************************************************************************!*\
  !*** ./src/ui/chatPage/chatBox/main/usersSidebar/searchForm/searchFormView.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_chatPageConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../constants/chatPageConstants */ "./src/constants/chatPageConstants.ts");
/* harmony import */ var _controller_inputControllers_searchFormController_searchFormController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../controller/inputControllers/searchFormController/searchFormController */ "./src/controller/inputControllers/searchFormController/searchFormController.ts");
/* harmony import */ var _utilities_createElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../utilities/createElement */ "./src/utilities/createElement.ts");
/* harmony import */ var _utilities_createInputElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utilities/createInputElement */ "./src/utilities/createInputElement.ts");




var SearchFormView = /** @class */ (function () {
    function SearchFormView() {
        this.searchFormController = new _controller_inputControllers_searchFormController_searchFormController__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    SearchFormView.prototype.render = function () {
        var searchFormContainer = this.createSearchFormContainer();
        this.searchFormController.addSearchFormEventListener(searchFormContainer);
        return searchFormContainer;
    };
    SearchFormView.prototype.createSearchFormContainer = function () {
        var searchFormContainer = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_2__["default"]('div', {
            className: 'search-form-container',
        }).createElement();
        var searchForm = this.createSearchForm();
        searchFormContainer.append(searchForm);
        return searchFormContainer;
    };
    SearchFormView.prototype.createSearchForm = function () {
        var searchForm = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_2__["default"]('form', {
            className: 'search-form',
        }).createElement();
        var formSearchInput = new _utilities_createInputElement__WEBPACK_IMPORTED_MODULE_3__["default"]({
            placeholder: "".concat(_constants_chatPageConstants__WEBPACK_IMPORTED_MODULE_0__.SEARCH_ICON, " Search"),
            className: "input-search",
        }).createElement();
        searchForm.append(formSearchInput);
        return searchForm;
    };
    return SearchFormView;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchFormView);


/***/ }),

/***/ "./src/ui/chatPage/chatBox/main/usersSidebar/usersList/usersListItem/usersListItem.ts":
/*!********************************************************************************************!*\
  !*** ./src/ui/chatPage/chatBox/main/usersSidebar/usersList/usersListItem/usersListItem.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _controller_userItemController_userItemController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../controller/userItemController/userItemController */ "./src/controller/userItemController/userItemController.ts");
/* harmony import */ var _utilities_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../utilities/createElement */ "./src/utilities/createElement.ts");


var UsersListItemView = /** @class */ (function () {
    function UsersListItemView(user) {
        this.userItemController = new _controller_userItemController_userItemController__WEBPACK_IMPORTED_MODULE_0__["default"]();
        var userItem = this.createUserItem(user.login, user.isLogined);
        var usersContainer = document.querySelector('.users-container');
        if (usersContainer) {
            if (user.isLogined) {
                usersContainer.prepend(userItem);
            }
            else {
                usersContainer.append(userItem);
            }
            this.userItemController.addUserItemEventListener(userItem, user);
        }
    }
    UsersListItemView.prototype.createUserItem = function (login, status) {
        var userItem = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_1__["default"]('div', {
            className: "user-item user-item-".concat(login),
        }).createElement();
        var userName = this.createUserItemName(login);
        var notification = this.createUserNotification(login);
        var userStatus = this.createUserStatus(status);
        userItem.append(userName, notification, userStatus);
        return userItem;
    };
    UsersListItemView.prototype.createUserItemName = function (name) {
        var userName = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_1__["default"]('div', { className: 'user-item-name' }, name).createElement();
        return userName;
    };
    UsersListItemView.prototype.createUserStatus = function (status) {
        var userStatus = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_1__["default"]('div', {
            className: "user-item-status ".concat(status),
        }).createElement();
        return userStatus;
    };
    UsersListItemView.prototype.createUserNotification = function (userName) {
        var notification = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_1__["default"]('div', {
            className: "notification notification-".concat(userName),
        }).createElement();
        return notification;
    };
    return UsersListItemView;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UsersListItemView);


/***/ }),

/***/ "./src/ui/chatPage/chatBox/main/usersSidebar/usersList/usersListView.ts":
/*!******************************************************************************!*\
  !*** ./src/ui/chatPage/chatBox/main/usersSidebar/usersList/usersListView.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../utilities/createElement */ "./src/utilities/createElement.ts");

var UsersListView = /** @class */ (function () {
    function UsersListView() {
    }
    UsersListView.prototype.render = function () {
        var usersListContainer = this.createUsersContainer();
        return usersListContainer;
    };
    UsersListView.prototype.createUsersContainer = function () {
        var usersContainer = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('div', {
            className: 'users-container',
        }).createElement();
        return usersContainer;
    };
    return UsersListView;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UsersListView);


/***/ }),

/***/ "./src/ui/chatPage/chatBox/main/usersSidebar/usersSidebarView.ts":
/*!***********************************************************************!*\
  !*** ./src/ui/chatPage/chatBox/main/usersSidebar/usersSidebarView.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../utilities/createElement */ "./src/utilities/createElement.ts");
/* harmony import */ var _searchForm_searchFormView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchForm/searchFormView */ "./src/ui/chatPage/chatBox/main/usersSidebar/searchForm/searchFormView.ts");
/* harmony import */ var _usersList_usersListView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usersList/usersListView */ "./src/ui/chatPage/chatBox/main/usersSidebar/usersList/usersListView.ts");



var UsersSidebarView = /** @class */ (function () {
    function UsersSidebarView() {
        this.searchFormView = new _searchForm_searchFormView__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.usersListView = new _usersList_usersListView__WEBPACK_IMPORTED_MODULE_2__["default"]();
    }
    UsersSidebarView.prototype.render = function () {
        var usersSidebar = this.createUsersSidebar();
        return usersSidebar;
    };
    UsersSidebarView.prototype.createUsersSidebar = function () {
        var usersSidebar = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('div', { className: 'users-sidebar' }).createElement();
        var searchForm = this.searchFormView.render();
        var usersList = this.usersListView.render();
        usersSidebar.append(searchForm, usersList);
        return usersSidebar;
    };
    return UsersSidebarView;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UsersSidebarView);


/***/ }),

/***/ "./src/ui/chatPage/chatPageView.ts":
/*!*****************************************!*\
  !*** ./src/ui/chatPage/chatPageView.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/createElement */ "./src/utilities/createElement.ts");
/* harmony import */ var _chatBox_chatBoxView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chatBox/chatBoxView */ "./src/ui/chatPage/chatBox/chatBoxView.ts");
/* harmony import */ var _chatPage_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chatPage.css */ "./src/ui/chatPage/chatPage.css");



var ChatPageView = /** @class */ (function () {
    function ChatPageView(containerId) {
        this.container = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('div', { id: containerId }).createElement();
        this.chatBoxView = new _chatBox_chatBoxView__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    ChatPageView.prototype.render = function () {
        var chatBox = this.chatBoxView.render();
        this.container.append(chatBox);
        return this.container;
    };
    return ChatPageView;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatPageView);


/***/ }),

/***/ "./src/ui/loginPage/loginForm/loginFormView.ts":
/*!*****************************************************!*\
  !*** ./src/ui/loginPage/loginForm/loginFormView.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_pagesConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants/pagesConstants */ "./src/constants/pagesConstants.ts");
/* harmony import */ var _controller_aboutIconController_aboutIconController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../controller/aboutIconController/aboutIconController */ "./src/controller/aboutIconController/aboutIconController.ts");
/* harmony import */ var _controller_inputControllers_loginFormController_loginFormController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../controller/inputControllers/loginFormController/loginFormController */ "./src/controller/inputControllers/loginFormController/loginFormController.ts");
/* harmony import */ var _utilities_createElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utilities/createElement */ "./src/utilities/createElement.ts");
/* harmony import */ var _utilities_createInputElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utilities/createInputElement */ "./src/utilities/createInputElement.ts");





var LoginFormView = /** @class */ (function () {
    function LoginFormView() {
        this.loginFormController = new _controller_inputControllers_loginFormController_loginFormController__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.aboutIconController = new _controller_aboutIconController_aboutIconController__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    LoginFormView.prototype.render = function () {
        var loginFormContainer = this.createLoginFormContainer();
        this.loginFormController.addLoginFormEventListeners(loginFormContainer);
        this.aboutIconController.addLoginAboutIconEventListener(loginFormContainer);
        return loginFormContainer;
    };
    LoginFormView.prototype.createLoginFormContainer = function () {
        var loginFormContainer = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_3__["default"]('div', {
            className: 'login-form-container',
        }).createElement();
        var loginForm = this.createLoginForm();
        loginFormContainer.append(loginForm);
        return loginFormContainer;
    };
    LoginFormView.prototype.createLoginForm = function () {
        var loginForm = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_3__["default"]('form', {
            className: 'login-form',
        }).createElement();
        var userIcon = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_3__["default"]('div', { className: 'user-icon' }, _constants_pagesConstants__WEBPACK_IMPORTED_MODULE_0__.USER_ICON_STRING_SVG_ELEMENT).createElement();
        var aboutIcon = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_3__["default"]('div', { className: 'about-icon' }, _constants_pagesConstants__WEBPACK_IMPORTED_MODULE_0__.ABOUT_ICON_STRING_SVG_ELEMENT).createElement();
        var formLabelUserName = this.createFormLabel('Username:', 'userLogin', 'Enter username', 'text');
        var formLabelUserPassword = this.createFormLabel('Password:', 'userPassword', 'Enter password', 'password');
        var loginButton = this.createLoginButton();
        loginForm.append(userIcon, aboutIcon);
        loginForm.append(formLabelUserName, formLabelUserPassword, loginButton);
        return loginForm;
    };
    LoginFormView.prototype.createFormLabel = function (labelText, inputName, inputPlaceholder, inputType) {
        var label = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_3__["default"]('label', { className: "label-".concat(inputName) }, labelText).createElement();
        var input = new _utilities_createInputElement__WEBPACK_IMPORTED_MODULE_4__["default"]({
            placeholder: inputPlaceholder,
            type: inputType,
            required: true,
            className: "input-".concat(inputName),
        }).createElement();
        input.maxLength = 10;
        var errorMessage = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_3__["default"]('p', { className: "error-message-".concat(inputName) }, ' ').createElement();
        label.append(errorMessage, input);
        return label;
    };
    LoginFormView.prototype.createLoginButton = function () {
        var loginButton = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_3__["default"]('button', { className: 'login-btn' }, 'Login').createElement();
        loginButton.disabled = true;
        return loginButton;
    };
    return LoginFormView;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginFormView);


/***/ }),

/***/ "./src/ui/loginPage/loginPageView.ts":
/*!*******************************************!*\
  !*** ./src/ui/loginPage/loginPageView.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/createElement */ "./src/utilities/createElement.ts");
/* harmony import */ var _loginForm_loginFormView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginForm/loginFormView */ "./src/ui/loginPage/loginForm/loginFormView.ts");
/* harmony import */ var _loginPage_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loginPage.css */ "./src/ui/loginPage/loginPage.css");



var LoginPageView = /** @class */ (function () {
    function LoginPageView(containerId) {
        this.container = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('div', { id: containerId }).createElement();
        this.loginFormView = new _loginForm_loginFormView__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    LoginPageView.prototype.render = function () {
        var loginFormContainer = this.loginFormView.render();
        this.container.append(loginFormContainer);
        return this.container;
    };
    return LoginPageView;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginPageView);


/***/ }),

/***/ "./src/ui/popups/connectionPopup/connectionPopup.singleton.ts":
/*!********************************************************************!*\
  !*** ./src/ui/popups/connectionPopup/connectionPopup.singleton.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConnectionPopUp: () => (/* binding */ ConnectionPopUp)
/* harmony export */ });
/* harmony import */ var _connectionPopupView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connectionPopupView */ "./src/ui/popups/connectionPopup/connectionPopupView.ts");

var ConnectionPopUp = new _connectionPopupView__WEBPACK_IMPORTED_MODULE_0__["default"]();


/***/ }),

/***/ "./src/ui/popups/connectionPopup/connectionPopupView.ts":
/*!**************************************************************!*\
  !*** ./src/ui/popups/connectionPopup/connectionPopupView.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utilities/createElement */ "./src/utilities/createElement.ts");
/* harmony import */ var _connectionPopup_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connectionPopup.css */ "./src/ui/popups/connectionPopup/connectionPopup.css");


var ConnectionPopup = /** @class */ (function () {
    function ConnectionPopup() {
        this.popup = null;
    }
    ConnectionPopup.prototype.initialize = function () {
        this.popup = this.createPopupContainer();
        document.body.append(this.popup);
    };
    ConnectionPopup.prototype.createPopupContainer = function () {
        var popupContainer = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('div', {
            className: 'connection-popup-container',
        }).createElement();
        var popup = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('div', { className: 'connection-popup' }).createElement();
        var loaderWrapper = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('div', { className: 'loader-wrapper' }).createElement();
        var loader = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('div', {
            className: 'loader',
        }).createElement();
        var connectionMessage = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('div', {
            className: 'connection-message',
        }, 'Connection...').createElement();
        loaderWrapper.append(loader);
        popup.append(loaderWrapper, connectionMessage);
        popupContainer.append(popup);
        return popupContainer;
    };
    ConnectionPopup.prototype.open = function () {
        if (this.popup) {
            this.popup.style.display = 'flex';
        }
    };
    ConnectionPopup.prototype.close = function () {
        if (this.popup) {
            this.popup.style.display = 'none';
        }
    };
    return ConnectionPopup;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectionPopup);


/***/ }),

/***/ "./src/ui/popups/loginErrorPopup/loginErrorPopup.singleton.ts":
/*!********************************************************************!*\
  !*** ./src/ui/popups/loginErrorPopup/loginErrorPopup.singleton.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginErrorPopUp: () => (/* binding */ LoginErrorPopUp)
/* harmony export */ });
/* harmony import */ var _loginErrorPopupView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loginErrorPopupView */ "./src/ui/popups/loginErrorPopup/loginErrorPopupView.ts");

var LoginErrorPopUp = new _loginErrorPopupView__WEBPACK_IMPORTED_MODULE_0__["default"]();


/***/ }),

/***/ "./src/ui/popups/loginErrorPopup/loginErrorPopupView.ts":
/*!**************************************************************!*\
  !*** ./src/ui/popups/loginErrorPopup/loginErrorPopupView.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_pagesConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants/pagesConstants */ "./src/constants/pagesConstants.ts");
/* harmony import */ var _utilities_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utilities/createElement */ "./src/utilities/createElement.ts");
/* harmony import */ var _loginErrorPopup_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loginErrorPopup.css */ "./src/ui/popups/loginErrorPopup/loginErrorPopup.css");



var LoginErrorPopup = /** @class */ (function () {
    function LoginErrorPopup() {
        this.popup = null;
    }
    LoginErrorPopup.prototype.initialize = function () {
        this.popup = this.createPopupContainer();
        document.body.append(this.popup);
    };
    LoginErrorPopup.prototype.createPopupContainer = function () {
        var _this = this;
        var popupContainer = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_1__["default"]('div', {
            className: 'login-error-popup-container',
        }).createElement();
        var popup = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_1__["default"]('div', { className: 'login-error-popup' }).createElement();
        var errorMessage = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_1__["default"]('div', {
            className: 'login-error-message',
        }).createElement();
        var closeButton = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_1__["default"]('div', {
            className: 'close-btn',
        }, _constants_pagesConstants__WEBPACK_IMPORTED_MODULE_0__.CLOSE_ICON_STRING_SVG_ELEMENT).createElement();
        closeButton.addEventListener('click', function () {
            _this.close();
        });
        popup.append(closeButton, errorMessage);
        popupContainer.append(popup);
        return popupContainer;
    };
    LoginErrorPopup.prototype.setErrorMessage = function (message) {
        var _a;
        var errorMessage = (_a = this.popup) === null || _a === void 0 ? void 0 : _a.querySelector('.login-error-message');
        errorMessage.innerHTML = message;
    };
    LoginErrorPopup.prototype.open = function (message) {
        if (this.popup) {
            this.setErrorMessage(message);
            this.popup.style.display = 'flex';
        }
    };
    LoginErrorPopup.prototype.close = function () {
        if (this.popup) {
            this.popup.style.display = 'none';
        }
    };
    return LoginErrorPopup;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginErrorPopup);


/***/ }),

/***/ "./src/utilities/createElement.ts":
/*!****************************************!*\
  !*** ./src/utilities/createElement.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateElement: () => (/* binding */ CreateElement),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var CreateElement = /** @class */ (function () {
    function CreateElement(tag, attributes, innerHTML) {
        this.tag = tag;
        this.attributes = attributes;
        this.innerHTML = innerHTML;
    }
    CreateElement.prototype.createElement = function () {
        var _a, _b;
        var element = document.createElement(this.tag);
        if ((_a = this.attributes) === null || _a === void 0 ? void 0 : _a.className) {
            element.className = this.attributes.className;
        }
        if ((_b = this.attributes) === null || _b === void 0 ? void 0 : _b.id) {
            element.id = this.attributes.id;
        }
        if (this.innerHTML) {
            element.innerHTML = this.innerHTML;
        }
        return element;
    };
    return CreateElement;
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateElement);


/***/ }),

/***/ "./src/utilities/createInputElement.ts":
/*!*********************************************!*\
  !*** ./src/utilities/createInputElement.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/utilities/createElement.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CreateInputElement = /** @class */ (function (_super) {
    __extends(CreateInputElement, _super);
    function CreateInputElement(options) {
        var _this = _super.call(this, 'input', options.className ? { className: options.className } : undefined) || this;
        _this.placeholder = options.placeholder || '';
        _this.type = options.type || 'text';
        _this.required = options.required || false;
        return _this;
    }
    CreateInputElement.prototype.createElement = function () {
        var input = _super.prototype.createElement.call(this);
        input.placeholder = this.placeholder;
        input.type = this.type;
        input.required = this.required;
        return input;
    };
    return CreateInputElement;
}(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateInputElement);


/***/ }),

/***/ "./src/utilities/createLinkElement.ts":
/*!********************************************!*\
  !*** ./src/utilities/createLinkElement.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateLinkElement: () => (/* binding */ CreateLinkElement),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/utilities/createElement.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CreateLinkElement = /** @class */ (function (_super) {
    __extends(CreateLinkElement, _super);
    function CreateLinkElement(options) {
        var _this = _super.call(this, 'a', options.className ? { className: options.className } : undefined, options.innerHTML) || this;
        _this.href = options.href;
        _this.target = options.target || '_blank';
        return _this;
    }
    CreateLinkElement.prototype.createElement = function () {
        var link = _super.prototype.createElement.call(this);
        link.href = this.href;
        link.setAttribute('target', this.target);
        link.innerHTML = this.innerHTML || '';
        return link;
    };
    return CreateLinkElement;
}(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateLinkElement);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app */ "./src/app/app.ts");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");


var app = new _app_app__WEBPACK_IMPORTED_MODULE_0__["default"]();
app.start();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLFNBQVMsQ0FBQyxTQUFDO1FBQ2hHLEtBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztRQUN6QixLQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDOztJQUMzQyxDQUFDO0lBRUQseUNBQWEsR0FBYjtRQUNFLElBQU0sSUFBSSxHQUFHLGdCQUFLLENBQUMsYUFBYSxXQUFxQixDQUFDO1FBQ3RELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQztRQUN0QyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQ0FsQnNDLHNEQUFhLEdBa0JuRDs7QUFFRCxpRUFBZSxpQkFBaUIsRUFBQzs7Ozs7OztVQ3RCakM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNONEI7QUFFQTtBQUU1QixJQUFNLEdBQUcsR0FBRyxJQUFJLGdEQUFHLEVBQUUsQ0FBQztBQUN0QixHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdW4tY2hhdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzPzIzOTQiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvdWkvYWJvdXRQYWdlL2Fib3V0UGFnZS5jc3M/OTM0MSIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL3NyYy91aS9jaGF0UGFnZS9jaGF0Qm94L2Zvb3Rlci9mb290ZXIuY3NzPzQwNjAiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvdWkvY2hhdFBhZ2UvY2hhdEJveC9oZWFkZXIvaGVhZGVyLmNzcz84ODk3Iiwid2VicGFjazovL2Z1bi1jaGF0Ly4vc3JjL3VpL2NoYXRQYWdlL2NoYXRCb3gvbWFpbi9jaGF0LmNzcz83Y2MzIiwid2VicGFjazovL2Z1bi1jaGF0Ly4vc3JjL3VpL2NoYXRQYWdlL2NoYXRQYWdlLmNzcz82YjFjIiwid2VicGFjazovL2Z1bi1jaGF0Ly4vc3JjL3VpL2xvZ2luUGFnZS9sb2dpblBhZ2UuY3NzPzg3MTYiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvdWkvcG9wdXBzL2Nvbm5lY3Rpb25Qb3B1cC9jb25uZWN0aW9uUG9wdXAuY3NzPzdkZDgiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvdWkvcG9wdXBzL2xvZ2luRXJyb3JQb3B1cC9sb2dpbkVycm9yUG9wdXAuY3NzP2ExYWQiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvYXBpL2FwaS5zaW5nbGV0b24udHMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvYXBpL2FwaS50cyIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL3NyYy9hcHAvYXBwLnRzIiwid2VicGFjazovL2Z1bi1jaGF0Ly4vc3JjL2NvbnN0YW50cy9hYm91dFBhZ2VDb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvY29uc3RhbnRzL2NoYXRQYWdlQ29uc3RhbnRzLnRzIiwid2VicGFjazovL2Z1bi1jaGF0Ly4vc3JjL2NvbnN0YW50cy9sb2dpblBhZ2VDb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvY29uc3RhbnRzL3BhZ2VzQ29uc3RhbnRzLnRzIiwid2VicGFjazovL2Z1bi1jaGF0Ly4vc3JjL2NvbnN0YW50cy9zZXJ2ZXJDb25zdGFudC50cyIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL3NyYy9jb250cm9sbGVyL2Fib3V0SWNvbkNvbnRyb2xsZXIvYWJvdXRJY29uQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL3NyYy9jb250cm9sbGVyL2FwaUNvbnRyb2xsZXIvYXBpQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL3NyYy9jb250cm9sbGVyL2J1dHRvbkNvbnRyb2xsZXJzL2RlbGV0ZU1lc3NhZ2VCdXR0b25Db250cm9sbGVyL2RlbGV0ZU1lc3NhZ2VCdXR0b25Db250cm9sbGVyLnRzIiwid2VicGFjazovL2Z1bi1jaGF0Ly4vc3JjL2NvbnRyb2xsZXIvYnV0dG9uQ29udHJvbGxlcnMvbG9nb3V0QnV0dG9uQ29udHJvbGxlci9sb2dvdXRCdXR0b25Db250cm9sbGVyLnRzIiwid2VicGFjazovL2Z1bi1jaGF0Ly4vc3JjL2NvbnRyb2xsZXIvYnV0dG9uQ29udHJvbGxlcnMvcmV0dXJuQnV0dG9uQ29udHJvbGxlci9yZXR1cm5CdXR0b25Db250cm9sbGVyLnRzIiwid2VicGFjazovL2Z1bi1jaGF0Ly4vc3JjL2NvbnRyb2xsZXIvY2hhdENvbnRyb2xsZXIvY2hhdENvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvY29udHJvbGxlci9ldmVudHNDb250cm9sbGVyL2V2ZW50c0NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvY29udHJvbGxlci9pbnB1dENvbnRyb2xsZXJzL2xvZ2luRm9ybUNvbnRyb2xsZXIvbG9naW5Gb3JtQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL3NyYy9jb250cm9sbGVyL2lucHV0Q29udHJvbGxlcnMvc2VhcmNoRm9ybUNvbnRyb2xsZXIvc2VhcmNoRm9ybUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvY29udHJvbGxlci9pbnB1dENvbnRyb2xsZXJzL3NlbmRGb3JtQ29udHJvbGxlci9zZW5kRm9ybUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvY29udHJvbGxlci91c2VySXRlbUNvbnRyb2xsZXIvdXNlckl0ZW1Db250cm9sbGVyLnRzIiwid2VicGFjazovL2Z1bi1jaGF0Ly4vc3JjL2V2ZW50QnVzL2V2ZW50QnVzLmludGVyZmFjZS50cyIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL3NyYy9ldmVudEJ1cy9ldmVudEJ1cy5zaW5nbGV0b24udHMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvZXZlbnRCdXMvZXZlbnRCdXMudHMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvcm91dGVyL3JvdXRlci5zaW5nbGV0b24udHMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL3NyYy9zZXNzaW9uU3RvcmFnZS9zZXNzaW9uU3RvcmFnZS5zaW5nbGV0b24udHMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvc2Vzc2lvblN0b3JhZ2Uvc2Vzc2lvblN0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvdWkvYWJvdXRQYWdlL2Fib3V0Qm94L2Fib3V0Qm94Q29udGVudC9hYm91dEJveENvbnRlbnRWaWV3LnRzIiwid2VicGFjazovL2Z1bi1jaGF0Ly4vc3JjL3VpL2Fib3V0UGFnZS9hYm91dEJveC9hYm91dEJveFZpZXcudHMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvdWkvYWJvdXRQYWdlL2Fib3V0UGFnZVZpZXcudHMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvdWkvY2hhdFBhZ2UvY2hhdEJveC9jaGF0Qm94Vmlldy50cyIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL3NyYy91aS9jaGF0UGFnZS9jaGF0Qm94L2Zvb3Rlci9mb290ZXJDb250ZW50Vmlldy50cyIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL3NyYy91aS9jaGF0UGFnZS9jaGF0Qm94L2hlYWRlci9oZWFkZXJDb250ZW50Vmlldy50cyIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL3NyYy91aS9jaGF0UGFnZS9jaGF0Qm94L21haW4vY2hhdC9jaGF0Vmlldy50cyIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL3NyYy91aS9jaGF0UGFnZS9jaGF0Qm94L21haW4vY2hhdC9tZXNzYWdlSXRlbXMvbWVzc2FnZUl0ZW0vbWVzc2FnZUl0ZW1WaWV3LnRzIiwid2VicGFjazovL2Z1bi1jaGF0Ly4vc3JjL3VpL2NoYXRQYWdlL2NoYXRCb3gvbWFpbi9jaGF0L21lc3NhZ2VJdGVtcy9uZXdNZXNzYWdlc0xpbmUvbmV3TWVzc2FnZXNMaW5lVmlldy50cyIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL3NyYy91aS9jaGF0UGFnZS9jaGF0Qm94L21haW4vY2hhdC9zZW5kTWVzc2FnZUZvcm0vc2VuZE1lc3NhZ2VGb3JtVmlldy50cyIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL3NyYy91aS9jaGF0UGFnZS9jaGF0Qm94L21haW4vbWFpbkNvbnRlbnRWaWV3LnRzIiwid2VicGFjazovL2Z1bi1jaGF0Ly4vc3JjL3VpL2NoYXRQYWdlL2NoYXRCb3gvbWFpbi91c2Vyc1NpZGViYXIvc2VhcmNoRm9ybS9zZWFyY2hGb3JtVmlldy50cyIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL3NyYy91aS9jaGF0UGFnZS9jaGF0Qm94L21haW4vdXNlcnNTaWRlYmFyL3VzZXJzTGlzdC91c2Vyc0xpc3RJdGVtL3VzZXJzTGlzdEl0ZW0udHMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvdWkvY2hhdFBhZ2UvY2hhdEJveC9tYWluL3VzZXJzU2lkZWJhci91c2Vyc0xpc3QvdXNlcnNMaXN0Vmlldy50cyIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL3NyYy91aS9jaGF0UGFnZS9jaGF0Qm94L21haW4vdXNlcnNTaWRlYmFyL3VzZXJzU2lkZWJhclZpZXcudHMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvdWkvY2hhdFBhZ2UvY2hhdFBhZ2VWaWV3LnRzIiwid2VicGFjazovL2Z1bi1jaGF0Ly4vc3JjL3VpL2xvZ2luUGFnZS9sb2dpbkZvcm0vbG9naW5Gb3JtVmlldy50cyIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL3NyYy91aS9sb2dpblBhZ2UvbG9naW5QYWdlVmlldy50cyIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL3NyYy91aS9wb3B1cHMvY29ubmVjdGlvblBvcHVwL2Nvbm5lY3Rpb25Qb3B1cC5zaW5nbGV0b24udHMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvdWkvcG9wdXBzL2Nvbm5lY3Rpb25Qb3B1cC9jb25uZWN0aW9uUG9wdXBWaWV3LnRzIiwid2VicGFjazovL2Z1bi1jaGF0Ly4vc3JjL3VpL3BvcHVwcy9sb2dpbkVycm9yUG9wdXAvbG9naW5FcnJvclBvcHVwLnNpbmdsZXRvbi50cyIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL3NyYy91aS9wb3B1cHMvbG9naW5FcnJvclBvcHVwL2xvZ2luRXJyb3JQb3B1cFZpZXcudHMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvdXRpbGl0aWVzL2NyZWF0ZUVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvdXRpbGl0aWVzL2NyZWF0ZUlucHV0RWxlbWVudC50cyIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL3NyYy91dGlsaXRpZXMvY3JlYXRlTGlua0VsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Z1bi1jaGF0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgQXBpIGZyb20gJy4vYXBpJztcblxuZXhwb3J0IGNvbnN0IFNlcnZlciA9IG5ldyBBcGkoKTtcbiIsImltcG9ydCB7IFNFUlZFUl9VUkwgfSBmcm9tICcuLi9jb25zdGFudHMvc2VydmVyQ29uc3RhbnQnO1xuaW1wb3J0IEFwaUNvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlci9hcGlDb250cm9sbGVyL2FwaUNvbnRyb2xsZXInO1xuaW1wb3J0IHsgQ29ubmVjdGlvblBvcFVwIH0gZnJvbSAnLi4vdWkvcG9wdXBzL2Nvbm5lY3Rpb25Qb3B1cC9jb25uZWN0aW9uUG9wdXAuc2luZ2xldG9uJztcbmltcG9ydCBVc2VyLCB7IFVzZXJNZXNzYWdlLCBNZXNzYWdlVHlwZXMsIEdlbmVyYWxSZXF1ZXN0LCBJQXBpIH0gZnJvbSAnLi9hcGkuaW50ZXJmYWNlcyc7XG5cbmNsYXNzIEFwaSBpbXBsZW1lbnRzIElBcGkge1xuICBwcml2YXRlIHNlcnZlclVSTDogc3RyaW5nID0gU0VSVkVSX1VSTDtcblxuICBwcml2YXRlIGFwaUNvbnRyb2xsZXIgPSBuZXcgQXBpQ29udHJvbGxlcigpO1xuXG4gIHByaXZhdGUgc29ja2V0OiBXZWJTb2NrZXQ7XG5cbiAgcHJpdmF0ZSByZWNvbm5lY3Rpb25BdHRlbXB0ID0gMDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNvY2tldCA9IG5ldyBXZWJTb2NrZXQodGhpcy5zZXJ2ZXJVUkwpO1xuXG4gICAgdGhpcy5zb2NrZXQub25lcnJvciA9ICgpID0+IHtcbiAgICAgIHRoaXMuY29ubmVjdCgpO1xuICAgIH07XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgY29ubmVjdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLnNvY2tldC5vbm9wZW4gPSAoKSA9PiB7XG4gICAgICBDb25uZWN0aW9uUG9wVXAuY2xvc2UoKTtcblxuICAgICAgdGhpcy5yZWNvbm5lY3Rpb25BdHRlbXB0ID0gMDtcblxuICAgICAgdGhpcy5hcGlDb250cm9sbGVyLnJlZXN0YWJsaXNoTG9naW5Gb3JMb2dnZWRJblVzZXIoKTtcbiAgICB9O1xuXG4gICAgdGhpcy5zb2NrZXQub25tZXNzYWdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCB0aGlzLmhhbmRsZU1lc3NhZ2UoZXZlbnQpO1xuICAgICAgfSkoKTtcbiAgICB9O1xuXG4gICAgdGhpcy5zb2NrZXQub25lcnJvciA9ICgpID0+IHtcbiAgICAgIHRoaXMuc29ja2V0ID0gbmV3IFdlYlNvY2tldCh0aGlzLnNlcnZlclVSTCk7XG5cbiAgICAgIHRoaXMucmVjb25uZWN0KCk7XG4gICAgfTtcblxuICAgIHRoaXMuc29ja2V0Lm9uY2xvc2UgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNvY2tldCA9IG5ldyBXZWJTb2NrZXQodGhpcy5zZXJ2ZXJVUkwpO1xuXG4gICAgICB0aGlzLnJlY29ubmVjdCgpO1xuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHJlY29ubmVjdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAodGhpcy5yZWNvbm5lY3Rpb25BdHRlbXB0IDwgMSkge1xuICAgICAgQ29ubmVjdGlvblBvcFVwLmluaXRpYWxpemUoKTtcbiAgICAgIENvbm5lY3Rpb25Qb3BVcC5vcGVuKCk7XG4gICAgfVxuXG4gICAgdGhpcy5yZWNvbm5lY3Rpb25BdHRlbXB0ICs9IDE7XG5cbiAgICBhd2FpdCB0aGlzLmNvbm5lY3QoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgaGFuZGxlTWVzc2FnZShldmVudDogTWVzc2FnZUV2ZW50KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuXG4gICAgc3dpdGNoIChyZXNwb25zZS50eXBlKSB7XG4gICAgICBjYXNlIE1lc3NhZ2VUeXBlcy5VU0VSX0xPR0lOOlxuICAgICAgICBhd2FpdCB0aGlzLmFwaUNvbnRyb2xsZXIuaGFuZGxlTG9naW5SZXNwb25zZShyZXNwb25zZSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIE1lc3NhZ2VUeXBlcy5VU0VSX0xPR09VVDpcbiAgICAgICAgYXdhaXQgdGhpcy5hcGlDb250cm9sbGVyLmhhbmRsZUxvZ291dFJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgTWVzc2FnZVR5cGVzLlVTRVJfRVhURVJOQUxfTE9HSU46XG4gICAgICAgIGF3YWl0IHRoaXMuYXBpQ29udHJvbGxlci5oYW5kbGVFeHRlcm5hbExvZ2luKHJlc3BvbnNlKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgTWVzc2FnZVR5cGVzLlVTRVJfRVhURVJOQUxfTE9HT1VUOlxuICAgICAgICBhd2FpdCB0aGlzLmFwaUNvbnRyb2xsZXIuaGFuZGxlRXh0ZXJuYWxMb2dvdXQocmVzcG9uc2UpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBNZXNzYWdlVHlwZXMuVVNFUl9BQ1RJVkU6XG4gICAgICAgIGF3YWl0IHRoaXMuYXBpQ29udHJvbGxlci5oYW5kbGVHZXRBY3RpdmVVc2Vyc1Jlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgTWVzc2FnZVR5cGVzLlVTRVJfSU5BQ1RJVkU6XG4gICAgICAgIGF3YWl0IHRoaXMuYXBpQ29udHJvbGxlci5oYW5kbGVHZXRJbmFjdGl2ZVVzZXJzUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBNZXNzYWdlVHlwZXMuTVNHX1NFTkQ6XG4gICAgICAgIGF3YWl0IHRoaXMuYXBpQ29udHJvbGxlci5oYW5kbGVTZW5kTWVzc2FnZVRvVXNlclJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgTWVzc2FnZVR5cGVzLk1TR19GUk9NX1VTRVI6XG4gICAgICAgIGF3YWl0IHRoaXMuYXBpQ29udHJvbGxlci5oYW5kbGVHZXRNZXNzYWdlSGlzdG9yeVJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgTWVzc2FnZVR5cGVzLk1TR19ERUxJVkVSOlxuICAgICAgICBhd2FpdCB0aGlzLmFwaUNvbnRyb2xsZXIuaGFuZGxlQ2hhbmdlTWVzc2FnZURlbGl2ZXJ5U3RhdHVzKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIE1lc3NhZ2VUeXBlcy5NU0dfUkVBRDpcbiAgICAgICAgYXdhaXQgdGhpcy5hcGlDb250cm9sbGVyLmhhbmRsZUNoYW5nZU1lc3NhZ2VSZWFkU3RhdHVzUmVzcG9uc2UoKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgTWVzc2FnZVR5cGVzLk1TR19ERUxFVEU6XG4gICAgICAgIGF3YWl0IHRoaXMuYXBpQ29udHJvbGxlci5oYW5kbGVNZXNzYWdlRGVsZXRpb25SZXNwb25zZShyZXNwb25zZSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIE1lc3NhZ2VUeXBlcy5FUlJPUjpcbiAgICAgICAgYXdhaXQgdGhpcy5hcGlDb250cm9sbGVyLmhhbmRsZVNlcnZlckVycm9yKHJlc3BvbnNlKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc2VuZE1lc3NhZ2UocmVxdWVzdDogb2JqZWN0KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZiAodGhpcy5zb2NrZXQucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0Lk9QRU4pIHtcbiAgICAgICAgdGhpcy5zb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeShyZXF1ZXN0KSk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBsb2dpblVzZXIodXNlcjogVXNlcik6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHJlcXVlc3Q6IEdlbmVyYWxSZXF1ZXN0ID0ge1xuICAgICAgaWQ6IE1lc3NhZ2VUeXBlcy5VU0VSX0xPR0lOLFxuICAgICAgdHlwZTogTWVzc2FnZVR5cGVzLlVTRVJfTE9HSU4sXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIHVzZXIsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKHJlcXVlc3QpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGxvZ291dFVzZXIodXNlcjogVXNlcik6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHJlcXVlc3Q6IEdlbmVyYWxSZXF1ZXN0ID0ge1xuICAgICAgaWQ6IE1lc3NhZ2VUeXBlcy5VU0VSX0xPR09VVCxcbiAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlcy5VU0VSX0xPR09VVCxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgdXNlcixcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UocmVxdWVzdCk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZ2V0QWN0aXZlVXNlcnMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgcmVxdWVzdDogR2VuZXJhbFJlcXVlc3QgPSB7XG4gICAgICBpZDogTWVzc2FnZVR5cGVzLlVTRVJfQUNUSVZFLFxuICAgICAgdHlwZTogTWVzc2FnZVR5cGVzLlVTRVJfQUNUSVZFLFxuICAgICAgcGF5bG9hZDogbnVsbCxcbiAgICB9O1xuXG4gICAgYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShyZXF1ZXN0KTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBnZXRJbmFjdGl2ZVVzZXJzKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHJlcXVlc3Q6IEdlbmVyYWxSZXF1ZXN0ID0ge1xuICAgICAgaWQ6IE1lc3NhZ2VUeXBlcy5VU0VSX0lOQUNUSVZFLFxuICAgICAgdHlwZTogTWVzc2FnZVR5cGVzLlVTRVJfSU5BQ1RJVkUsXG4gICAgICBwYXlsb2FkOiBudWxsLFxuICAgIH07XG5cbiAgICBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKHJlcXVlc3QpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHNlbmRNZXNzYWdlVG9Vc2VyKG1lc3NhZ2U6IFVzZXJNZXNzYWdlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgcmVxdWVzdDogR2VuZXJhbFJlcXVlc3QgPSB7XG4gICAgICBpZDogTWVzc2FnZVR5cGVzLk1TR19TRU5ELFxuICAgICAgdHlwZTogTWVzc2FnZVR5cGVzLk1TR19TRU5ELFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBtZXNzYWdlLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShyZXF1ZXN0KTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBnZXRNZXNzYWdlSGlzdG9yeSh1c2VyTG9naW46IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHJlcXVlc3Q6IEdlbmVyYWxSZXF1ZXN0ID0ge1xuICAgICAgaWQ6IE1lc3NhZ2VUeXBlcy5NU0dfRlJPTV9VU0VSLFxuICAgICAgdHlwZTogTWVzc2FnZVR5cGVzLk1TR19GUk9NX1VTRVIsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIHVzZXI6IHtcbiAgICAgICAgICBsb2dpbjogdXNlckxvZ2luLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShyZXF1ZXN0KTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBzZXRNZXNzYWdlUmVhZFN0YXR1cyhtZXNzYWdlSWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHJlcXVlc3Q6IEdlbmVyYWxSZXF1ZXN0ID0ge1xuICAgICAgaWQ6IE1lc3NhZ2VUeXBlcy5NU0dfUkVBRCxcbiAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlcy5NU0dfUkVBRCxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgIGlkOiBtZXNzYWdlSWQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH07XG5cbiAgICBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKHJlcXVlc3QpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGRlbGV0ZU1lc3NhZ2UobWVzc2FnZUlkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCByZXF1ZXN0OiBHZW5lcmFsUmVxdWVzdCA9IHtcbiAgICAgIGlkOiBNZXNzYWdlVHlwZXMuTVNHX0RFTEVURSxcbiAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlcy5NU0dfREVMRVRFLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgaWQ6IG1lc3NhZ2VJZCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UocmVxdWVzdCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBpO1xuIiwiaW1wb3J0IHsgU2VydmVyIH0gZnJvbSAnLi4vYXBpL2FwaS5zaW5nbGV0b24nO1xuaW1wb3J0IHsgUGFnZUlEcyB9IGZyb20gJy4uL2NvbnN0YW50cy9wYWdlc0NvbnN0YW50cyc7XG5pbXBvcnQgeyBQYWdlc1JvdXRlciB9IGZyb20gJy4uL3JvdXRlci9yb3V0ZXIuc2luZ2xldG9uJztcbmltcG9ydCB7IElBcHAgfSBmcm9tICcuL2FwcC5pbnRlcmZhY2UnO1xuXG5jbGFzcyBBcHAgaW1wbGVtZW50cyBJQXBwIHtcbiAgcHVibGljIGFzeW5jIHN0YXJ0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IFNlcnZlci5jb25uZWN0KCk7XG5cbiAgICBQYWdlc1JvdXRlci5yb3V0ZVRvUGFnZShQYWdlSURzLkxPR0lOX1BBR0UpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCB7IEFQUF9OQU1FIH0gZnJvbSAnLi9wYWdlc0NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBBQk9VVF9CT1hfVEVYVF9DT05URU5UID0gYCR7QVBQX05BTUV9IC0gYXBwIGZvciBjb21tdW5pY2F0aW9uLjxicj5Mb2cgaW50byBkaWFsb2d1ZSBjaGF0cyBhbmQgc2VuZCBtZXNzYWdlcyB0byB5b3VyIGZyaWVuZHMhYDtcbiIsImV4cG9ydCBjb25zdCBOT1RJRklDQVRJT05fSUNPTiA9ICfwn5KsJztcblxuZXhwb3J0IGNvbnN0IFNFQVJDSF9JQ09OID0gJ/CflI3vuI4nO1xuXG5leHBvcnQgY29uc3QgZW51bSBNZXNzYWdlU3RhdHVzZXNJY29ucyB7XG4gIFNFTlQgPSAn8J+TqScsXG4gIERFTElWRVJFRCA9ICfwn5OoJyxcbiAgUkVBREVEID0gJ+KckycsXG59XG5cbmV4cG9ydCBjb25zdCBlbnVtIFVzZXJTdGF0dXNlcyB7XG4gIE9OTElORSA9ICdPbmxpbmUnLFxuICBPRkZMSU5FID0gJ09mZmxpbmUnLFxufVxuXG5leHBvcnQgY29uc3QgZW51bSBEaWFsb2d1ZU5vdGlmaWNhdGlvbnMge1xuICBTRUxFQ1RfVVNFUl9OT1RJRklDQVRJT04gPSAnU2VsZWN0IHRoZSB1c2VyIHRvIHN0YXJ0IHRoZSBkaWFsb2cuLi4nLFxuICBXUklURV9GSVJTVF9NRVNTQUdFX05PVElGSUNBVElPTiA9ICdXcml0ZSB5b3VyIGZpcnN0IG1lc3NhZ2UuLi4nLFxufVxuXG5leHBvcnQgY29uc3QgREVMRVRFX0lDT04gPSAn8J+Xke+4jyc7XG5cbmV4cG9ydCBjb25zdCBTRU5EX0lDT05fU1RSSU5HX1NWR19FTEVNRU5UID0gYDxzdmcgdmlld0JveD1cIjAgMCAyOCAyOFwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI+XG4gICAgPGcgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj5cbiAgICAgICAgPGcgaWQ9XCJpY19mbHVlbnRfc2VuZF8yOF9maWxsZWRcIiBmaWxsPVwiIzIxMjEyMVwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIj5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMy43ODk2MzMwMSwyLjc3MjMzMzM1IEwyNC44NjA5MzM5LDEyLjg0OTkxMjEgQzI1LjQ4MzcyNzcsMTMuMTQ3NzY5OSAyNS43NDcxNDAyLDEzLjg5NDEwNTUgMjUuNDQ5MjgyMywxNC41MTY4OTkyIEMyNS4zMjYxMDcsMTQuNzc0NDQ3NiAyNS4xMTg0ODIzLDE0Ljk4MjA3MjMgMjQuODYwOTMzOSwxNS4xMDUyNDc2IEwzLjc4OTYzMzAxLDI1LjE4MjgyNjMgQzMuMTY2ODM5MjksMjUuNDgwNjg0MiAyLjQyMDUwMzcyLDI1LjIxNzI3MTYgMi4xMjI2NDU4NiwyNC41OTQ0Nzc5IEMxLjk5MzIxMTg0LDI0LjMyMzg0MzEgMS45NjU0MjUyNCwyNC4wMTU2ODUgMi4wNDQzNTg4NiwyMy43MjYyNjE4IEw0LjE1MTkwOTM1LDE1Ljk5ODM0MjEgQzQuMjA0NzA5LDE1LjgwNDczNzUgNC4zNjgxNDM1NSwxNS42NjE0NTc3IDQuNTY2OTkyNjUsMTUuNjM0NDQ3IEwxNC43Nzc1ODc5LDE0LjI0NzQ4NzQgQzE0Ljg2NTU4MzQsMTQuMjM0OTE2NiAxNC45Mzg0OTQsMTQuMTc3MDkxIDE0Ljk3MjE4MzcsMTQuMDk4MTQ2NCBMMTQuOTg5NzE5OSwxNC4wMzUzNTUzIEMxNS4wMDY0NTY3LDEzLjkxODE5ODEgMTQuOTM5MDcwMywxMy44MDg0MjQ4IDE0LjgzMzQwMDcsMTMuNzY3MTU1NiBMMTQuNzc3NTg3OSwxMy43NTI1MTI2IEw0LjU3ODk0MTA4LDEyLjM2NTU5NjggQzQuMzgwMTE4NzMsMTIuMzM4NTU4OSA0LjIxNjcxODE5LDEyLjE5NTI4MzIgNC4xNjM5Mjk2NSwxMi4wMDE2OTkyIEwyLjA0NDM1ODg2LDQuMjI4ODk3ODggQzEuODYyNzE0MiwzLjU2Mjg2NzQ1IDIuMjU1Mzg2NDUsMi44NzU2OTEwMSAyLjkyMTQxNjg4LDIuNjk0MDQ2MzUgQzMuMjEwODQwMTUsMi42MTUxMTI3MyAzLjUxODk5ODIzLDIuNjQyODk5MzIgMy43ODk2MzMwMSwyLjc3MjMzMzM1IFpcIj48L3BhdGg+XG4gICAgICAgIDwvZz5cbiAgICA8L2c+XG48L3N2Zz5gO1xuIiwiZXhwb3J0IGNvbnN0IFZhbGlkYXRpb25QYXR0ZXJucyA9IHtcbiAgZW5nbGlzaExldHRlcnNBbmREaWdpdHNPbmx5OiAvXltBLVphLXowLTldKyQvIGFzIFJlZ0V4cCxcbiAgZmlyc3RMZXR0ZXJJc1VwcGVyY2FzZTogL15bQS1aXS8gYXMgUmVnRXhwLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IGVudW0gVmFsaWRJbnB1dExlbmd0aCB7XG4gIFVTRVJfTE9HSU5fTUlOX0xFTkdUSCA9IDQsXG4gIFVTRVJfUEFTU1dPUkRfTUlOX0xFTkdUSCA9IDgsXG59XG5cbmV4cG9ydCBjb25zdCBlbnVtIElucHV0RXJyb3JNZXNzYWdlcyB7XG4gIEVOR0xJU0hfTEVUVEVSU19BTkRfRElHSVRTID0gJ09ubHkgRW5nbGlzaCBsZXR0ZXJzIGFuZCBkaWdpdHMnLFxuICBGSVJTVF9MRVRURVJfVVBQRVJDQVNFID0gJ1RoZSBmaXJzdCBsZXR0ZXIgLSB1cHBlcmNhc2UnLFxuICBNSU5fTEVOR1RIID0gJ01pbmltdW0gY2hhcmFjdGVycyAtICcsXG59XG5cbmV4cG9ydCBjb25zdCBFUlJPUl9JQ09OID0gJ+KaoO+4jyc7XG5cbmV4cG9ydCBjb25zdCBlbnVtIExvZ2luRXJyb3JNZXNzYWdlcyB7XG4gIElOQ09SUkVDVF9QQVNTV09SRCA9ICdJbmNvcnJlY3QgUGFzc3dvcmQsIHRyeSBhZ2FpbicsXG4gIENIT09TRV9BTk9USEVSX1VTRVJOQU1FID0gJ0Nob29zZSBhbm90aGVyIFVzZXJuYW1lIGFuZCB0cnkgYWdhaW4nLFxufVxuIiwiZXhwb3J0IGNvbnN0IGVudW0gUGFnZUlEcyB7XG4gIExPR0lOX1BBR0UgPSAnbG9naW4nLFxuICBDSEFUX1BBR0UgPSAnY2hhdCcsXG4gIEFCT1VUX1BBR0UgPSAnYWJvdXQnLFxufVxuXG5leHBvcnQgY29uc3QgR0lUSFVCX0xJTksgPSAnaHR0cHM6Ly9naXRodWIuY29tL1Zpb2xldHRhU3RvbGFyb3ZhJztcblxuZXhwb3J0IGNvbnN0IFNDSE9PTF9MSU5LID0gJ2h0dHBzOi8vcnMuc2Nob29sLyc7XG5cbmV4cG9ydCBjb25zdCBBUFBfTkFNRSA9ICdGdW4gQ2hhdCc7XG5cbmV4cG9ydCBjb25zdCBVU0VSX0lDT05fU1RSSU5HX1NWR19FTEVNRU5UID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHZlcnNpb249XCIxLjFcIiB2aWV3Qm94PVwiMCAwIDI1NiAyNTZcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPlxuPGcgc3R5bGU9XCJzdHJva2U6IG5vbmU7IHN0cm9rZS13aWR0aDogMDsgc3Ryb2tlLWRhc2hhcnJheTogbm9uZTsgc3Ryb2tlLWxpbmVjYXA6IGJ1dHQ7IHN0cm9rZS1saW5lam9pbjogbWl0ZXI7IHN0cm9rZS1taXRlcmxpbWl0OiAxMDsgZmlsbDogbm9uZTsgZmlsbC1ydWxlOiBub256ZXJvOyBvcGFjaXR5OiAxO1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxLjQwNjU5MzQwNjU5MzQwMTYgMS40MDY1OTM0MDY1OTM0MDE2KSBzY2FsZSgyLjgxIDIuODEpXCIgPlxuXHQ8cGF0aCBkPVwiTSA0NSAwIEMgMjAuMTQ3IDAgMCAyMC4xNDcgMCA0NSBjIDAgMjQuODUzIDIwLjE0NyA0NSA0NSA0NSBzIDQ1IC0yMC4xNDcgNDUgLTQ1IEMgOTAgMjAuMTQ3IDY5Ljg1MyAwIDQ1IDAgeiBNIDQ1IDIyLjAwNyBjIDguODk5IDAgMTYuMTQgNy4yNDEgMTYuMTQgMTYuMTQgYyAwIDguOSAtNy4yNDEgMTYuMTQgLTE2LjE0IDE2LjE0IGMgLTguOSAwIC0xNi4xNCAtNy4yNCAtMTYuMTQgLTE2LjE0IEMgMjguODYgMjkuMjQ4IDM2LjEgMjIuMDA3IDQ1IDIyLjAwNyB6IE0gNDUgODMuODQzIGMgLTExLjEzNSAwIC0yMS4xMjMgLTQuODg1IC0yNy45NTcgLTEyLjYyMyBjIDMuMTc3IC01Ljc1IDguMTQ0IC0xMC40NzYgMTQuMDUgLTEzLjM0MSBjIDIuMDA5IC0wLjk3NCA0LjM1NCAtMC45NTggNi40MzUgMC4wNDEgYyAyLjM0MyAxLjEyNiA0Ljg1NyAxLjY5NiA3LjQ3MyAxLjY5NiBjIDIuNjE1IDAgNS4xMyAtMC41NzEgNy40NzMgLTEuNjk2IGMgMi4wODMgLTEgNC40MjggLTEuMDE1IDYuNDM1IC0wLjA0MSBjIDUuOTA2IDIuODY0IDEwLjg3MiA3LjU5MSAxNC4wNDkgMTMuMzQxIEMgNjYuMTIzIDc4Ljk1NyA1Ni4xMzUgODMuODQzIDQ1IDgzLjg0MyB6XCIgc3R5bGU9XCJzdHJva2U6IG5vbmU7IHN0cm9rZS13aWR0aDogMTsgc3Ryb2tlLWRhc2hhcnJheTogbm9uZTsgc3Ryb2tlLWxpbmVjYXA6IGJ1dHQ7IHN0cm9rZS1saW5lam9pbjogbWl0ZXI7IHN0cm9rZS1taXRlcmxpbWl0OiAxMDsgZmlsbC1ydWxlOiBub256ZXJvOyBvcGFjaXR5OiAxO1wiIHRyYW5zZm9ybT1cIiBtYXRyaXgoMSAwIDAgMSAwIDApIFwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiAvPlxuPC9nPlxuPC9zdmc+YDtcblxuZXhwb3J0IGNvbnN0IEFCT1VUX0lDT05fU1RSSU5HX1NWR19FTEVNRU5UID0gYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cImlzby04ODU5LTFcIj8+XG48c3ZnIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcblx0IHZpZXdCb3g9XCIwIDAgNDkwLjMxOCA0OTAuMzE4XCJcblx0IHhtbDpzcGFjZT1cInByZXNlcnZlXCI+XG48Zz5cblx0PGc+XG5cdFx0PGc+XG5cdFx0XHQ8cGF0aCBkPVwiTTI0NS4xNDgsMEMxMDkuOTY3LDAsMC4wMDksMTA5Ljk4LDAuMDA5LDI0NS4xNjJjMCwxMzUuMTgyLDEwOS45NTgsMjQ1LjE1NiwyNDUuMTM5LDI0NS4xNTZcblx0XHRcdFx0YzEzNS4xODYsMCwyNDUuMTYyLTEwOS45NzgsMjQ1LjE2Mi0yNDUuMTU2QzQ5MC4zMSwxMDkuOTgsMzgwLjMzMywwLDI0NS4xNDgsMHogTTI0NS4xNDgsNDM4LjQxNVxuXHRcdFx0XHRjLTEwNi41NTUsMC0xOTMuMjM0LTg2LjY5OC0xOTMuMjM0LTE5My4yNTNjMC0xMDYuNTU1LDg2LjY4LTE5My4yNTgsMTkzLjIzNC0xOTMuMjU4YzEwNi41NTksMCwxOTMuMjU4LDg2LjcwMywxOTMuMjU4LDE5My4yNThcblx0XHRcdFx0QzQzOC40MDYsMzUxLjcxNywzNTEuNzA2LDQzOC40MTUsMjQ1LjE0OCw0MzguNDE1elwiLz5cblx0XHRcdDxwYXRoIGQ9XCJNMjcwLjAzNiwyMjEuMzUyaC00OS43NzFjLTguMzUxLDAtMTUuMTMxLDYuNzgtMTUuMTMxLDE1LjExOHYxNDcuNTY2YzAsOC4zNTIsNi43OCwxNS4xMTksMTUuMTMxLDE1LjExOWg0OS43NzFcblx0XHRcdFx0YzguMzUxLDAsMTUuMTMxLTYuNzcsMTUuMTMxLTE1LjExOVYyMzYuNDcxQzI4NS4xNjcsMjI4LjEzMywyNzguMzg3LDIyMS4zNTIsMjcwLjAzNiwyMjEuMzUyelwiLz5cblx0XHRcdDxwYXRoIGQ9XCJNMjQ1LjE0OCw5MS4xNjhjLTI0LjQ4LDAtNDQuMzM2LDE5Ljg1NS00NC4zMzYsNDQuMzM2YzAsMjQuNDg0LDE5Ljg1NSw0NC4zNCw0NC4zMzYsNDQuMzRcblx0XHRcdFx0YzI0LjQ4NSwwLDQ0LjM0Mi0xOS44NTUsNDQuMzQyLTQ0LjM0QzI4OS40ODksMTExLjAyMywyNjkuNjM0LDkxLjE2OCwyNDUuMTQ4LDkxLjE2OHpcIi8+XG5cdFx0PC9nPlxuXHQ8L2c+XG48L2c+XG48L3N2Zz5gO1xuXG5leHBvcnQgY29uc3QgU0NIT09MX0xPR09fU1RSSU5HX1NWR19FTEVNRU5UID0gYDxzdmcgdmVyc2lvbj1cIjEuMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxudmlld0JveD1cIjAgMCAzNjguMDAwMDAwIDEzNy4wMDAwMDBcIlxucHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIj5cbjxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLjAwMDAwMCwxMzcuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApXCJcbnN0cm9rZT1cIm5vbmVcIj5cbjxwYXRoIGQ9XCJNMjA1OCAxMzEwIGMtMTM3IC00MSAtMTc4IC0xODMgLTc5IC0yNzMgMzcgLTMzIDcwIC00NyAxOTMgLTgxIDY0XG4tMTggODggLTM3IDg4IC03MCAwIC00MSAtMzcgLTYxIC0xMDggLTU3IC0yNyAxIC02OSA0NCAtNzQgNzMgLTMgMjAgLTkgMjFcbi04OCAxOSAtNDcgLTEgLTg2IC00IC04OCAtNiAtOCAtNyAyMCAtODQgNDEgLTExNiAzNyAtNTUgOTUgLTgxIDE5NiAtODcgMTA1XG4tNiAxODQgMTQgMjM0IDU4IGwzNCAyOSAxNiAtNTMgYzkgLTI4IDMzIC03MSA1MiAtOTMgMzkgLTQ2IDE0MyAtMTAzIDE4N1xuLTEwMyAxNSAwIDI4IC0yIDI4IC01IDAgLTIgLTEzIC0yNSAtMjkgLTUwIC0zNiAtNTcgLTU2IC0xNTUgLTQ2IC0yMzMgMThcbi0xNDkgOTcgLTIzMSAyNDQgLTI1MiAxNDQgLTIwIDI1NSAyMCAzMTkgMTE0IGwzMiA0OCAwIC04MSAwIC04MSAyMzUgMCAyMzUgMFxuMCA3NSAwIDc1IC0xNDUgMCAtMTQ1IDAgMCAyMjUgMCAyMjUgLTkwIDAgLTkwIDAgMCAtODIgMCAtODIgLTMwIDQ3IGMtMzQgNTRcbi0xMDQgMTAyIC0xNjEgMTEyIC0yMSA0IC0zOSAxMCAtMzggMTMgMCA0IDIxIDIzIDQ3IDQzIDEyOSA5OCAxOTQgMjkxIDE0NlxuNDMyIC02MiAxODIgLTI5NiAyNDkgLTUwNiAxNDUgLTc1IC0zNyAtMTg0IC0xNDMgLTIxMiAtMjA2IC0xMCAtMjMgLTIyIC00MlxuLTI2IC00MiAtMyAwIC0xNiAxMyAtMjcgMjkgLTI2IDM0IC04NSA2MyAtMTc4IDg1IC0zOCAxMCAtNzggMTkgLTg3IDIyIC0yMCA2XG4tNDggMzEgLTQ4IDQ0IDAgMjAgMzQgNDAgNjYgNDAgNDYgMCA3MyAtMTUgODUgLTQ3IDkgLTI0IDExIC0yNSA4OCAtMjIgNDQgMlxuODIgNyA4NSAxMCAzIDMgMSAyMiAtNSA0MiAtMTQgNTIgLTY3IDEwMiAtMTIyIDExNiAtNTIgMTMgLTE4OCAxMyAtMjI5IDF6XG5tOTM3IC01NyBjNjkgLTIyIDE0NiAtMTAxIDE3MCAtMTcyIDU2IC0xNzAgLTU2IC0zODYgLTI0OSAtNDc3IC0yOTMgLTEzOVxuLTU2NSA1NyAtNDgwIDM0NyAyOCA5NSA2OCAxNDkgMTY2IDIyNiAxMjggOTggMjUyIDEyMiAzOTMgNzZ6IG0tMjAgLTc4OSBjNDZcbi0yMiA2NiAtNjkgNjYgLTE1NCAwIC03MSAtMTYgLTEyNSAtNDQgLTE0OSAtMjcgLTIyIC05OSAtMjYgLTEzNSAtNyAtNDYgMjRcbi02NCA2NyAtNjUgMTUwIC0xIDE0MiA3NSAyMDkgMTc4IDE2MHpcIi8+XG48cGF0aCBkPVwiTTI4MjQgMTExMSBjLTEyNyAtNzggLTczIC0yMDMgNjMgLTE0NiA0MyAxOCA2MyAxNCA2MyAtMTQgMCAtMjggLTM0XG4tNDUgLTYwIC0zMSAtMTYgOCAtMjYgNyAtNDUgLTcgLTMyIC0yNCAtMzEgLTM4IDQgLTUzIDQyIC0xNyA4NiAtNCAxMzIgMzkgNDZcbjQ0IDUzIDkyIDE5IDEyOSAtMjUgMjYgLTU5IDI4IC0xMjQgNiAtMzEgLTExIC01MSAtMTMgLTU3IC03IC0xNiAxNiAyMCA0NSA0NlxuMzkgMTUgLTQgMzIgMiA1MCAxNiAyNiAyMCAyNyAyMiA5IDM1IC0yNSAxOCAtNjQgMTYgLTEwMCAtNnpcIi8+XG48cGF0aCBkPVwiTTI2NDMgOTgzIGMtMTMgLTggLTIzIC0yMCAtMjMgLTI1IDAgLTUgMjMgLTQxIDUwIC04MCAyOCAtMzkgNTAgLTc3XG41MCAtODQgMCAtMTcgLTIxIC0yMyAtNDMgLTEyIC0xNCA3IC0yNSA0IC00MyAtMTMgLTMxIC0yOSAtMzAgLTM0IDExIC01MyAzMFxuLTE1IDM4IC0xNSA2OCAtMiA5NCAzOSAxMDEgOTYgMjUgMjA4IC0yOSA0MyAtNTcgNzcgLTYzIDc3IC01IDAgLTIwIC03IC0zMlxuLTE2elwiLz5cbjxwYXRoIGQ9XCJNNDAgMTAxNiBsMCAtMjk2IDk1IDAgOTUgMCAwIDEyMCBjMCAxMTEgMSAxMjAgMTkgMTIwIDMyIDAgNTkgLTMyXG4xMTQgLTEzNSBsNTMgLTEwMCAxMDIgLTMgYzU2IC0xIDEwMiAwIDEwMiAzIDAgMTMgLTg1IDE3MiAtMTA3IDIwMiAtMTQgMThcbi0zMyAzNSAtNDQgMzggLTI4IDkgLTIzIDE4IDI0IDQwIDgwIDM4IDExMiAxNjMgNjAgMjMzIC00OSA2NiAtNTQgNjcgLTI5NCA3MFxubC0yMTkgMyAwIC0yOTV6IG0zMzQgMTYxIGMyMiAtMTYgMjQgLTYzIDMgLTg0IC05IC05IC00MSAtMTcgLTgxIC0yMCBsLTY2IC02XG4wIDYyIDAgNjEgNjMgMCBjMzcgMCA3MSAtNiA4MSAtMTN6XCIvPlxuPHBhdGggZD1cIk0yMTAgNjEzIGMtMTIwIC0xMyAtMjAxIC05OSAtMTg1IC0xOTQgMTMgLTc3IDcyIC0xMjIgMjEyIC0xNjAgMTAwXG4tMjcgMTIzIC00MSAxMjMgLTc5IDAgLTYzIC05OCAtODMgLTE1MSAtMzEgLTE2IDE2IC0yOSAzOSAtMjkgNTIgMCAyMCAtMyAyMVxuLTUyIDE1IC0yOSAtMyAtNzAgLTYgLTkxIC02IC0zOCAwIC0zOSAwIC0zMiAtMzMgMTEgLTUwIDUxIC0xMTMgODcgLTEzNSA0NFxuLTI3IDE1NyAtNDYgMjI1IC0zOCA3NCA5IDE0OCA0MiAxNzggODAgbDI0IDMxIDM4IC0zNyBjNDYgLTQ1IDg5IC02NCAxNjkgLTczXG4xMzEgLTE1IDIzMiAyNyAyODQgMTE3IDQzIDc3IDQxIDgzIC0zOSAxMDcgLTM4IDEyIC03MyAyMSAtNzggMjEgLTUgMCAtMTVcbi0xNiAtMjIgLTM1IC0xNiAtNDUgLTU1IC03NSAtOTcgLTc1IC03OSAwIC0xMTMgNDEgLTEyMSAxNDUgLTEwIDExOCAyOCAxODNcbjExMiAxOTIgNDMgNSA0OCA0IDg1IC0zNiBsNDAgLTQyIDc1IDE2IGM0MSAxMCA3NSAxOSA3NSAyMiAwIDE0IC0zNyA3MyAtNjRcbjEwMSAtNDIgNDUgLTc3IDYyIC0xNTEgNzMgLTExNCAxNiAtMjE3IC0xMyAtMjgzIC04MCAtMjMgLTI0IC0zNiAtMzIgLTM5IC0yM1xuLTExIDI5IC01NSA3MSAtOTAgODUgLTQxIDE2IC0xNDggMjcgLTIwMyAyMHogbTEwOCAtMTI1IGM4IC03IDE4IC0yMyAyMyAtMzdcbjkgLTIzIDEyIC0yNCA3NCAtMTggNzEgNyA2OSA4IDU5IC01NSAtNiAtMzUgLTggLTM2IC0yOCAtMjMgLTExIDggLTcwIDI3XG4tMTMwIDQzIC02MCAxNyAtMTEyIDM2IC0xMTcgNDMgLTMzIDUxIDY3IDkwIDExOSA0N3pcIi8+XG48cGF0aCBkPVwiTTIwNDUgNjEwIGMtODQgLTEyIC0xNjYgLTY3IC0yMDMgLTEzNSAtOSAtMTYgLTExIC00IC0xMiA1OCBsMCA3N1xuLTkwIDAgLTkwIDAgMCAtMTA1IDAgLTEwNSAtMTA1IDAgLTEwNSAwIDAgMTA1IDAgMTA1IC05MCAwIC05MCAwIDAgLTMwMCAwXG4tMzAwIDkwIDAgOTAgMCAwIDEyMCAwIDEyMCAxMDUgMCAxMDUgMCAwIC0xMjAgMCAtMTIwIDkwIDAgOTAgMCAwIDc4IDAgNzcgMTlcbi0zMCBjNTIgLTg0IDEzNCAtMTI2IDI1NCAtMTI4IDExNSAtMyAxNzAgMTUgMjMzIDc3IDYxIDYwIDg0IDEyMSA4NCAyMjYgMFxuMTI3IC01MSAyMjQgLTE0MSAyNzAgLTMyIDE3IC0xNDYgNDIgLTE3NCAzOSAtNSAtMSAtMzMgLTUgLTYwIC05eiBtMTM2IC0xNTNcbmMzOSAtMjYgNTggLTcxIDU4IC0xNDIgMiAtMTEyIC00MyAtMTc1IC0xMjMgLTE3NSAtODEgMCAtMTI2IDYxIC0xMjYgMTcwIDBcbjc2IDIwIDEyNCA2MiAxNTAgNDMgMjYgODcgMjUgMTI5IC0zelwiLz5cbjwvZz5cbjwvc3ZnPmA7XG5cbmV4cG9ydCBjb25zdCBHSVRIVUJfTE9HT19TVFJJTkdfU1ZHX0VMRU1FTlQgPSBgPHN2ZyB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTggMEMzLjU4IDAgMCAzLjU4IDAgOEMwIDExLjU0IDIuMjkgMTQuNTMgNS40NyAxNS41OUM1Ljg3IDE1LjY2IDYuMDIgMTUuNDIgNi4wMiAxNS4yMUM2LjAyIDE1LjAyIDYuMDEgMTQuMzkgNi4wMSAxMy43MkM0IDE0LjA5IDMuNDggMTMuMjMgMy4zMiAxMi43OEMzLjIzIDEyLjU1IDIuODQgMTEuODQgMi41IDExLjY1QzIuMjIgMTEuNSAxLjgyIDExLjEzIDIuNDkgMTEuMTJDMy4xMiAxMS4xMSAzLjU3IDExLjcgMy43MiAxMS45NEM0LjQ0IDEzLjE1IDUuNTkgMTIuODEgNi4wNSAxMi42QzYuMTIgMTIuMDggNi4zMyAxMS43MyA2LjU2IDExLjUzQzQuNzggMTEuMzMgMi45MiAxMC42NCAyLjkyIDcuNThDMi45MiA2LjcxIDMuMjMgNS45OSAzLjc0IDUuNDNDMy42NiA1LjIzIDMuMzggNC40MSAzLjgyIDMuMzFDMy44MiAzLjMxIDQuNDkgMy4xIDYuMDIgNC4xM0M2LjY2IDMuOTUgNy4zNCAzLjg2IDguMDIgMy44NkM4LjcgMy44NiA5LjM4IDMuOTUgMTAuMDIgNC4xM0MxMS41NSAzLjA5IDEyLjIyIDMuMzEgMTIuMjIgMy4zMUMxMi42NiA0LjQxIDEyLjM4IDUuMjMgMTIuMyA1LjQzQzEyLjgxIDUuOTkgMTMuMTIgNi43IDEzLjEyIDcuNThDMTMuMTIgMTAuNjUgMTEuMjUgMTEuMzMgOS40NyAxMS41M0M5Ljc2IDExLjc4IDEwLjAxIDEyLjI2IDEwLjAxIDEzLjAxQzEwLjAxIDE0LjA4IDEwIDE0Ljk0IDEwIDE1LjIxQzEwIDE1LjQyIDEwLjE1IDE1LjY3IDEwLjU1IDE1LjU5QzEzLjcxIDE0LjUzIDE2IDExLjUzIDE2IDhDMTYgMy41OCAxMi40MiAwIDggMFpcIiB0cmFuc2Zvcm09XCJzY2FsZSg2NClcIi8+XG48L3N2Zz5gO1xuXG5leHBvcnQgY29uc3QgQ0xPU0VfSUNPTl9TVFJJTkdfU1ZHX0VMRU1FTlQgPSBgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwidXRmLThcIj8+PHN2ZyB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJMYXllcl8xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCAxMjEuMzEgMTIyLjg3NlwiIGVuYWJsZS1iYWNrZ3JvdW5kPVwibmV3IDAgMCAxMjEuMzEgMTIyLjg3NlwiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+PGc+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTkwLjkxNCw1LjI5NmM2LjkyNy03LjAzNCwxOC4xODgtNy4wNjUsMjUuMTU0LTAuMDY4IGM2Ljk2MSw2Ljk5NSw2Ljk5MSwxOC4zNjksMC4wNjgsMjUuMzk3TDg1Ljc0Myw2MS40NTJsMzAuNDI1LDMwLjg1NWM2Ljg2Niw2Ljk3OCw2Ljc3MywxOC4yOC0wLjIwOCwyNS4yNDcgYy02Ljk4Myw2Ljk2NC0xOC4yMSw2Ljk0Ni0yNS4wNzQtMC4wMzFMNjAuNjY5LDg2Ljg4MUwzMC4zOTUsMTE3LjU4Yy02LjkyNyw3LjAzNC0xOC4xODgsNy4wNjUtMjUuMTU0LDAuMDY4IGMtNi45NjEtNi45OTUtNi45OTItMTguMzY5LTAuMDY4LTI1LjM5N2wzMC4zOTMtMzAuODI3TDUuMTQyLDMwLjU2OGMtNi44NjctNi45NzgtNi43NzMtMTguMjgsMC4yMDgtMjUuMjQ3IGM2Ljk4My02Ljk2MywxOC4yMS02Ljk0NiwyNS4wNzQsMC4wMzFsMzAuMjE3LDMwLjY0M0w5MC45MTQsNS4yOTZMOTAuOTE0LDUuMjk2elwiLz48L2c+PC9zdmc+YDtcbiIsImV4cG9ydCBjb25zdCBTRVJWRVJfVVJMID0gJ3dzOi8vbG9jYWxob3N0OjQwMDAnO1xuIiwiaW1wb3J0IHsgSUFib3V0SWNvbkNvbnRyb2xsZXIgfSBmcm9tICcuL2Fib3V0SWNvbkNvbnRyb2xsZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IFBhZ2VJRHMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvcGFnZXNDb25zdGFudHMnO1xuaW1wb3J0IHsgUGFnZXNSb3V0ZXIgfSBmcm9tICcuLi8uLi9yb3V0ZXIvcm91dGVyLnNpbmdsZXRvbic7XG5cbmNsYXNzIEFib3V0SWNvbkNvbnRyb2xsZXIgaW1wbGVtZW50cyBJQWJvdXRJY29uQ29udHJvbGxlciB7XG4gIHB1YmxpYyBhZGRDaGF0QWJvdXRJY29uRXZlbnRMaXN0ZW5lcihjb250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgaWNvbiA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhdC1hYm91dC1pY29uJykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgUGFnZXNSb3V0ZXIucm91dGVUb1BhZ2UoUGFnZUlEcy5BQk9VVF9QQUdFKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRMb2dpbkFib3V0SWNvbkV2ZW50TGlzdGVuZXIoY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGljb24gPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmFib3V0LWljb24nKSBhcyBIVE1MRWxlbWVudDtcblxuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBQYWdlc1JvdXRlci5yb3V0ZVRvUGFnZShQYWdlSURzLkFCT1VUX1BBR0UpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0SWNvbkNvbnRyb2xsZXI7XG4iLCJpbXBvcnQgeyBJQXBpQ29udHJvbGxlciB9IGZyb20gJy4vYXBpQ29udHJvbGxlci5pbnRlcmZhY2UnO1xuaW1wb3J0IFVzZXIsIHtcbiAgR2VuZXJhbFJlc3BvbnNlLFxuICBTZXJ2ZXJFcnJvck1lc3NhZ2VzLFxuICBVc2VyRnJvbVNlcnZlcixcbiAgVXNlck1lc3NhZ2VGcm9tU2VydmVyLFxufSBmcm9tICcuLi8uLi9hcGkvYXBpLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgU2VydmVyIH0gZnJvbSAnLi4vLi4vYXBpL2FwaS5zaW5nbGV0b24nO1xuaW1wb3J0IHsgTG9naW5FcnJvck1lc3NhZ2VzIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2xvZ2luUGFnZUNvbnN0YW50cyc7XG5pbXBvcnQgeyBQYWdlSURzIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3BhZ2VzQ29uc3RhbnRzJztcbmltcG9ydCB7IEV2ZW50QnVzRXZlbnRzIH0gZnJvbSAnLi4vLi4vZXZlbnRCdXMvZXZlbnRCdXMuaW50ZXJmYWNlJztcbmltcG9ydCBFdmVudEJ1cyBmcm9tICcuLi8uLi9ldmVudEJ1cy9ldmVudEJ1cy5zaW5nbGV0b24nO1xuaW1wb3J0IHsgUGFnZXNSb3V0ZXIgfSBmcm9tICcuLi8uLi9yb3V0ZXIvcm91dGVyLnNpbmdsZXRvbic7XG5pbXBvcnQgU2Vzc2lvblN0b3JhZ2UgZnJvbSAnLi4vLi4vc2Vzc2lvblN0b3JhZ2Uvc2Vzc2lvblN0b3JhZ2Uuc2luZ2xldG9uJztcbmltcG9ydCB7IExvZ2luRXJyb3JQb3BVcCB9IGZyb20gJy4uLy4uL3VpL3BvcHVwcy9sb2dpbkVycm9yUG9wdXAvbG9naW5FcnJvclBvcHVwLnNpbmdsZXRvbic7XG5cbmNsYXNzIEFwaUNvbnRyb2xsZXIgaW1wbGVtZW50cyBJQXBpQ29udHJvbGxlciB7XG4gIHByaXZhdGUgbWVzc2FnZXM6IFVzZXJNZXNzYWdlRnJvbVNlcnZlcltdID0gW107XG5cbiAgcHVibGljIGFzeW5jIGhhbmRsZVNlcnZlckVycm9yKHJlc3BvbnNlOiBHZW5lcmFsUmVzcG9uc2U8J2Vycm9yJywgc3RyaW5nPik6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IHJlc3BvbnNlLnBheWxvYWQ/LmVycm9yO1xuXG4gICAgc3dpdGNoIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgIGNhc2UgU2VydmVyRXJyb3JNZXNzYWdlcy5VU0VSX0FMUkVBRFlfQVVUSE9SSVpFRDpcbiAgICAgICAgTG9naW5FcnJvclBvcFVwLmluaXRpYWxpemUoKTtcbiAgICAgICAgTG9naW5FcnJvclBvcFVwLm9wZW4oTG9naW5FcnJvck1lc3NhZ2VzLkNIT09TRV9BTk9USEVSX1VTRVJOQU1FKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU2VydmVyRXJyb3JNZXNzYWdlcy5JTkNPUlJFQ1RfUEFTU1dPUkQ6XG4gICAgICAgIExvZ2luRXJyb3JQb3BVcC5pbml0aWFsaXplKCk7XG4gICAgICAgIExvZ2luRXJyb3JQb3BVcC5vcGVuKExvZ2luRXJyb3JNZXNzYWdlcy5JTkNPUlJFQ1RfUEFTU1dPUkQpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFzeW5jIHJlZXN0YWJsaXNoTG9naW5Gb3JMb2dnZWRJblVzZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKFNlc3Npb25TdG9yYWdlLmdldFVzZXJTdGF0dXMoKSkge1xuICAgICAgY29uc3QgdXNlcjogVXNlciA9IFNlc3Npb25TdG9yYWdlLmdldFVzZXIoKSBhcyBVc2VyO1xuXG4gICAgICBhd2FpdCBTZXJ2ZXIubG9naW5Vc2VyKHVzZXIpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBoYW5kbGVMb2dpblJlc3BvbnNlKFxuICAgIHJlc3BvbnNlOiBHZW5lcmFsUmVzcG9uc2U8J3VzZXInLCBVc2VyRnJvbVNlcnZlcj5cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgU2Vzc2lvblN0b3JhZ2Uuc2V0VXNlclN0YXR1cyhyZXNwb25zZS5wYXlsb2FkPy51c2VyLmlzTG9naW5lZCBhcyBib29sZWFuKTtcblxuICAgIFBhZ2VzUm91dGVyLnJvdXRlVG9QYWdlKFBhZ2VJRHMuQ0hBVF9QQUdFKTtcblxuICAgIGF3YWl0IFNlcnZlci5nZXRBY3RpdmVVc2VycygpO1xuICAgIGF3YWl0IFNlcnZlci5nZXRJbmFjdGl2ZVVzZXJzKCk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgaGFuZGxlTG9nb3V0UmVzcG9uc2UoXG4gICAgcmVzcG9uc2U6IEdlbmVyYWxSZXNwb25zZTwndXNlcicsIFVzZXJGcm9tU2VydmVyPlxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBTZXNzaW9uU3RvcmFnZS5zZXRVc2VyU3RhdHVzKHJlc3BvbnNlLnBheWxvYWQ/LnVzZXIuaXNMb2dpbmVkIGFzIGJvb2xlYW4pO1xuXG4gICAgUGFnZXNSb3V0ZXIucm91dGVUb1BhZ2UoUGFnZUlEcy5MT0dJTl9QQUdFKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBoYW5kbGVFeHRlcm5hbExvZ2luKFxuICAgIHJlc3BvbnNlOiBHZW5lcmFsUmVzcG9uc2U8J3VzZXInLCBVc2VyRnJvbVNlcnZlcj5cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgRXZlbnRCdXMuZGlzcGF0Y2goRXZlbnRCdXNFdmVudHMuRVZFTlRfQUREX1VTRVIsIHJlc3BvbnNlLnBheWxvYWQ/LnVzZXIpO1xuICAgIEV2ZW50QnVzLmRpc3BhdGNoKFxuICAgICAgRXZlbnRCdXNFdmVudHMuRVZFTlRfVVBEQVRFX0RJQUxPR1VFX0hFQURFUl9VU0VSX1NUQVRVUyxcbiAgICAgIHJlc3BvbnNlLnBheWxvYWQ/LnVzZXJcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGhhbmRsZUV4dGVybmFsTG9nb3V0KFxuICAgIHJlc3BvbnNlOiBHZW5lcmFsUmVzcG9uc2U8J3VzZXInLCBVc2VyRnJvbVNlcnZlcj5cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgRXZlbnRCdXMuZGlzcGF0Y2goRXZlbnRCdXNFdmVudHMuRVZFTlRfREVMRVRFX1VTRVIsIHJlc3BvbnNlLnBheWxvYWQ/LnVzZXIpO1xuICAgIEV2ZW50QnVzLmRpc3BhdGNoKEV2ZW50QnVzRXZlbnRzLkVWRU5UX0FERF9VU0VSLCByZXNwb25zZS5wYXlsb2FkPy51c2VyKTtcbiAgICBFdmVudEJ1cy5kaXNwYXRjaChcbiAgICAgIEV2ZW50QnVzRXZlbnRzLkVWRU5UX1VQREFURV9ESUFMT0dVRV9IRUFERVJfVVNFUl9TVEFUVVMsXG4gICAgICByZXNwb25zZS5wYXlsb2FkPy51c2VyXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBoYW5kbGVHZXRBY3RpdmVVc2Vyc1Jlc3BvbnNlKFxuICAgIHJlc3BvbnNlOiBHZW5lcmFsUmVzcG9uc2U8J3VzZXJzJywgVXNlckZyb21TZXJ2ZXJbXT5cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmVzcG9uc2UucGF5bG9hZD8udXNlcnMuZm9yRWFjaChhc3luYyAodXNlcjogVXNlckZyb21TZXJ2ZXIpID0+IHtcbiAgICAgIGlmICh1c2VyLmxvZ2luICE9PSBTZXNzaW9uU3RvcmFnZS5nZXRVc2VyKCk/LmxvZ2luKSB7XG4gICAgICAgIGF3YWl0IFNlcnZlci5nZXRNZXNzYWdlSGlzdG9yeSh1c2VyLmxvZ2luIGFzIHN0cmluZyk7XG5cbiAgICAgICAgRXZlbnRCdXMuZGlzcGF0Y2goRXZlbnRCdXNFdmVudHMuRVZFTlRfQUREX1VTRVIsIHVzZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGhhbmRsZUdldEluYWN0aXZlVXNlcnNSZXNwb25zZShcbiAgICByZXNwb25zZTogR2VuZXJhbFJlc3BvbnNlPCd1c2VycycsIFVzZXJGcm9tU2VydmVyW10+XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJlc3BvbnNlLnBheWxvYWQ/LnVzZXJzLmZvckVhY2goYXN5bmMgKHVzZXI6IFVzZXJGcm9tU2VydmVyKSA9PiB7XG4gICAgICBhd2FpdCBTZXJ2ZXIuZ2V0TWVzc2FnZUhpc3RvcnkodXNlci5sb2dpbiBhcyBzdHJpbmcpO1xuXG4gICAgICBFdmVudEJ1cy5kaXNwYXRjaChFdmVudEJ1c0V2ZW50cy5FVkVOVF9BRERfVVNFUiwgdXNlcik7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgaGFuZGxlU2VuZE1lc3NhZ2VUb1VzZXJSZXNwb25zZShcbiAgICByZXNwb25zZTogR2VuZXJhbFJlc3BvbnNlPCdtZXNzYWdlJywgVXNlck1lc3NhZ2VGcm9tU2VydmVyPlxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAocmVzcG9uc2UuaWQgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGlzTWVzc2FnZVRvQ3VycmVudFVzZXIgPVxuICAgICAgICByZXNwb25zZS5wYXlsb2FkPy5tZXNzYWdlLnRvID09PSBTZXNzaW9uU3RvcmFnZS5nZXRVc2VyKCk/LmxvZ2luO1xuXG4gICAgICBpZiAoaXNNZXNzYWdlVG9DdXJyZW50VXNlcikge1xuICAgICAgICBFdmVudEJ1cy5kaXNwYXRjaChcbiAgICAgICAgICBFdmVudEJ1c0V2ZW50cy5FVkVOVF9TSE9XX01FU1NBR0VfUkVDRUlWRURfTk9USUZJQ0FUSU9OLFxuICAgICAgICAgIHJlc3BvbnNlLnBheWxvYWQ/Lm1lc3NhZ2VcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKHJlc3BvbnNlLnBheWxvYWQ/Lm1lc3NhZ2UgYXMgVXNlck1lc3NhZ2VGcm9tU2VydmVyKTtcblxuICAgICAgRXZlbnRCdXMuZGlzcGF0Y2goRXZlbnRCdXNFdmVudHMuRVZFTlRfQUREX1JFQ0VJVkVEX01FU1NBR0UsIHJlc3BvbnNlLnBheWxvYWQ/Lm1lc3NhZ2UpO1xuICAgICAgRXZlbnRCdXMuZGlzcGF0Y2goRXZlbnRCdXNFdmVudHMuRVZFTlRfU0hPV19ORVdfTUVTU0FHRVNfTElORSwgcmVzcG9uc2UucGF5bG9hZD8ubWVzc2FnZSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm1lc3NhZ2VzLnB1c2gocmVzcG9uc2UucGF5bG9hZD8ubWVzc2FnZSBhcyBVc2VyTWVzc2FnZUZyb21TZXJ2ZXIpO1xuXG4gICAgY29uc3QgbWVzc2FnZXNCZWZvcmVTZW5kTWVzc2FnZTogVXNlck1lc3NhZ2VGcm9tU2VydmVyW10gPSB0aGlzLmZpbmRNZXNzYWdlc0JlZm9yZVNwZWNpZmllZChcbiAgICAgIHJlc3BvbnNlLnBheWxvYWQ/Lm1lc3NhZ2UuaWQgYXMgc3RyaW5nXG4gICAgKTtcblxuICAgIGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgbWVzc2FnZXNCZWZvcmVTZW5kTWVzc2FnZS5tYXAoYXN5bmMgKG1lc3NhZ2U6IFVzZXJNZXNzYWdlRnJvbVNlcnZlcikgPT4ge1xuICAgICAgICBpZiAobWVzc2FnZS5zdGF0dXMuaXNSZWFkZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgYXdhaXQgU2VydmVyLnNldE1lc3NhZ2VSZWFkU3RhdHVzKG1lc3NhZ2UuaWQpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgICBFdmVudEJ1cy5kaXNwYXRjaChFdmVudEJ1c0V2ZW50cy5FVkVOVF9ERUxFVEVfTkVXX01FU1NBR0VTX0xJTkUsICcnKTtcbiAgICBFdmVudEJ1cy5kaXNwYXRjaChFdmVudEJ1c0V2ZW50cy5FVkVOVF9BRERfTUVTU0FHRSwgcmVzcG9uc2UucGF5bG9hZD8ubWVzc2FnZSk7XG4gICAgRXZlbnRCdXMuZGlzcGF0Y2goXG4gICAgICBFdmVudEJ1c0V2ZW50cy5FVkVOVF9ERUxFVEVfTUVTU0FHRV9SRUNFSVZFRF9OT1RJRklDQVRJT04sXG4gICAgICByZXNwb25zZS5wYXlsb2FkPy5tZXNzYWdlLnRvIGFzIHN0cmluZ1xuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGZpbmRNZXNzYWdlc0JlZm9yZVNwZWNpZmllZChtZXNzYWdlSWQ6IHN0cmluZyk6IFVzZXJNZXNzYWdlRnJvbVNlcnZlcltdIHtcbiAgICBjb25zdCBtZXNzYWdlSW5kZXggPSB0aGlzLm1lc3NhZ2VzLmZpbmRJbmRleCgobWVzc2FnZSkgPT4gbWVzc2FnZS5pZCA9PT0gbWVzc2FnZUlkKTtcblxuICAgIGlmIChtZXNzYWdlSW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMubWVzc2FnZXMuc2xpY2UoMCwgbWVzc2FnZUluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBoYW5kbGVHZXRNZXNzYWdlSGlzdG9yeVJlc3BvbnNlKFxuICAgIHJlc3BvbnNlOiBHZW5lcmFsUmVzcG9uc2U8J21lc3NhZ2VzJywgVXNlck1lc3NhZ2VGcm9tU2VydmVyW10+XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMubWVzc2FnZXMgPSBbXTtcbiAgICBjb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLW5hbWUnKT8udGV4dENvbnRlbnQgYXMgc3RyaW5nO1xuXG4gICAgY29uc3QgaXNNZXNzYWdlSGlzdG9yeUVtcHR5ID0gcmVzcG9uc2UucGF5bG9hZD8ubWVzc2FnZXMubGVuZ3RoID09PSAwO1xuICAgIEV2ZW50QnVzLmRpc3BhdGNoKEV2ZW50QnVzRXZlbnRzLkVWRU5UX09QRU5fRElBTE9HVUVfQk9YLCBpc01lc3NhZ2VIaXN0b3J5RW1wdHkpO1xuXG4gICAgcmVzcG9uc2UucGF5bG9hZD8ubWVzc2FnZXMuZm9yRWFjaChhc3luYyAobWVzc2FnZTogVXNlck1lc3NhZ2VGcm9tU2VydmVyKSA9PiB7XG4gICAgICBjb25zdCBpc0RpYWxvZ3VlV2l0aFVzZXJPcGVuID0gbWVzc2FnZS50byA9PT0gdXNlck5hbWUgfHwgbWVzc2FnZS5mcm9tID09PSB1c2VyTmFtZTtcblxuICAgICAgaWYgKCFpc0RpYWxvZ3VlV2l0aFVzZXJPcGVuKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuXG4gICAgICBFdmVudEJ1cy5kaXNwYXRjaChFdmVudEJ1c0V2ZW50cy5FVkVOVF9BRERfTUVTU0FHRSwgbWVzc2FnZSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBmaXJzdFVucmVhZE1lc3NhZ2UgPSByZXNwb25zZS5wYXlsb2FkPy5tZXNzYWdlcy5maW5kKFxuICAgICAgKG1lc3NhZ2U6IFVzZXJNZXNzYWdlRnJvbVNlcnZlcikgPT4gbWVzc2FnZS5zdGF0dXMuaXNSZWFkZWQgPT09IGZhbHNlXG4gICAgKTtcblxuICAgIGNvbnN0IGlzRmlyc3RVbnJlYWRNZXNzYWdlSXNDdXJyZW50VXNlck1lc3NhZ2UgPVxuICAgICAgZmlyc3RVbnJlYWRNZXNzYWdlPy5mcm9tID09PSBTZXNzaW9uU3RvcmFnZS5nZXRVc2VyKCk/LmxvZ2luO1xuXG4gICAgaWYgKGZpcnN0VW5yZWFkTWVzc2FnZSAmJiAhaXNGaXJzdFVucmVhZE1lc3NhZ2VJc0N1cnJlbnRVc2VyTWVzc2FnZSkge1xuICAgICAgRXZlbnRCdXMuZGlzcGF0Y2goRXZlbnRCdXNFdmVudHMuRVZFTlRfU0hPV19ORVdfTUVTU0FHRVNfTElORSwgZmlyc3RVbnJlYWRNZXNzYWdlKTtcblxuICAgICAgRXZlbnRCdXMuZGlzcGF0Y2goXG4gICAgICAgIEV2ZW50QnVzRXZlbnRzLkVWRU5UX1NIT1dfTUVTU0FHRV9SRUNFSVZFRF9OT1RJRklDQVRJT04sXG4gICAgICAgIGZpcnN0VW5yZWFkTWVzc2FnZVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgaGFuZGxlQ2hhbmdlTWVzc2FnZURlbGl2ZXJ5U3RhdHVzKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItbmFtZScpPy50ZXh0Q29udGVudDtcblxuICAgIGlmICh1c2VyTmFtZSkge1xuICAgICAgYXdhaXQgU2VydmVyLmdldE1lc3NhZ2VIaXN0b3J5KHVzZXJOYW1lKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgaGFuZGxlQ2hhbmdlTWVzc2FnZVJlYWRTdGF0dXNSZXNwb25zZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLW5hbWUnKT8udGV4dENvbnRlbnQ7XG5cbiAgICBpZiAodXNlck5hbWUpIHtcbiAgICAgIGF3YWl0IFNlcnZlci5nZXRNZXNzYWdlSGlzdG9yeSh1c2VyTmFtZSk7XG4gICAgfVxuXG4gICAgRXZlbnRCdXMuZGlzcGF0Y2goRXZlbnRCdXNFdmVudHMuRVZFTlRfREVMRVRFX05FV19NRVNTQUdFU19MSU5FLCAnJyk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgaGFuZGxlTWVzc2FnZURlbGV0aW9uUmVzcG9uc2UoXG4gICAgcmVzcG9uc2U6IEdlbmVyYWxSZXNwb25zZTxcbiAgICAgICdtZXNzYWdlJyxcbiAgICAgIHtcbiAgICAgICAgaWQ6IHN0cmluZztcbiAgICAgIH1cbiAgICA+XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmIChyZXNwb25zZS5pZCA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1uYW1lJyk/LnRleHRDb250ZW50O1xuXG4gICAgICBpZiAodXNlck5hbWUpIHtcbiAgICAgICAgYXdhaXQgU2VydmVyLmdldE1lc3NhZ2VIaXN0b3J5KHVzZXJOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBFdmVudEJ1cy5kaXNwYXRjaChFdmVudEJ1c0V2ZW50cy5FVkVOVF9ERUxFVEVfTUVTU0FHRSwgcmVzcG9uc2UucGF5bG9hZD8ubWVzc2FnZS5pZCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBpQ29udHJvbGxlcjtcbiIsImltcG9ydCB7IFNlcnZlciB9IGZyb20gJy4uLy4uLy4uL2FwaS9hcGkuc2luZ2xldG9uJztcbmltcG9ydCB7IElEZWxldGVNZXNzYWdlQnV0dG9uQ29udHJvbGxlciB9IGZyb20gJy4vZGVsZXRlTWVzc2FnZUJ1dHRvbkNvbnRyb2xsZXIuaW50ZXJmYWNlJztcblxuY2xhc3MgRGVsZXRlTWVzc2FnZUJ1dHRvbkNvbnRyb2xsZXIgaW1wbGVtZW50cyBJRGVsZXRlTWVzc2FnZUJ1dHRvbkNvbnRyb2xsZXIge1xuICBwdWJsaWMgYWRkRGVsZXRlTWVzc2FnZUJ1dHRvbkV2ZW50TGlzdGVuZXIoYnV0dG9uOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbklkID0gYnV0dG9uLmlkO1xuICAgICAgY29uc3QgbWVzc2FnZUlkID0gZGVsZXRlQnV0dG9uSWQuc3Vic3RyaW5nKGRlbGV0ZUJ1dHRvbklkLmluZGV4T2YoJy0nKSArIDEpO1xuXG4gICAgICBhd2FpdCBTZXJ2ZXIuZGVsZXRlTWVzc2FnZShtZXNzYWdlSWQpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERlbGV0ZU1lc3NhZ2VCdXR0b25Db250cm9sbGVyO1xuIiwiaW1wb3J0IHsgSUxvZ291dEJ1dHRvbkNvbnRyb2xsZXIgfSBmcm9tICcuL2xvZ291dEJ1dHRvbkNvbnRyb2xsZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IFNlcnZlciB9IGZyb20gJy4uLy4uLy4uL2FwaS9hcGkuc2luZ2xldG9uJztcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uLy4uL2FwaS9hcGkuaW50ZXJmYWNlcyc7XG5pbXBvcnQgU2Vzc2lvblN0b3JhZ2UgZnJvbSAnLi4vLi4vLi4vc2Vzc2lvblN0b3JhZ2Uvc2Vzc2lvblN0b3JhZ2Uuc2luZ2xldG9uJztcblxuY2xhc3MgTG9nb3V0QnV0dG9uQ29udHJvbGxlciBpbXBsZW1lbnRzIElMb2dvdXRCdXR0b25Db250cm9sbGVyIHtcbiAgcHVibGljIGFkZExvZ291dEJ1dHRvbkV2ZW50TGlzdGVuZXIoY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubG9nb3V0LWJ0bicpIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgdXNlcjogVXNlciA9IFNlc3Npb25TdG9yYWdlLmdldFVzZXIoKSBhcyBVc2VyO1xuXG4gICAgICBhd2FpdCBTZXJ2ZXIubG9nb3V0VXNlcih1c2VyKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dvdXRCdXR0b25Db250cm9sbGVyO1xuIiwiaW1wb3J0IHsgSVJldHVybkJ1dHRvbkNvbnRyb2xsZXIgfSBmcm9tICcuL3JldHVybkJ1dHRvbkNvbnRyb2xsZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IFNlcnZlciB9IGZyb20gJy4uLy4uLy4uL2FwaS9hcGkuc2luZ2xldG9uJztcbmltcG9ydCB7IFBhZ2VJRHMgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMvcGFnZXNDb25zdGFudHMnO1xuaW1wb3J0IHsgUGFnZXNSb3V0ZXIgfSBmcm9tICcuLi8uLi8uLi9yb3V0ZXIvcm91dGVyLnNpbmdsZXRvbic7XG5pbXBvcnQgU2Vzc2lvblN0b3JhZ2UgZnJvbSAnLi4vLi4vLi4vc2Vzc2lvblN0b3JhZ2Uvc2Vzc2lvblN0b3JhZ2Uuc2luZ2xldG9uJztcblxuY2xhc3MgUmV0dXJuQnV0dG9uQ29udHJvbGxlciBpbXBsZW1lbnRzIElSZXR1cm5CdXR0b25Db250cm9sbGVyIHtcbiAgcHVibGljIGFkZFJldHVybkJ1dHRvbkV2ZW50TGlzdGVuZXIoY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IHJldHVybkJ1dHRvbiA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmV0dXJuLWJ0bicpIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgcmV0dXJuQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKFNlc3Npb25TdG9yYWdlLmdldFVzZXJTdGF0dXMoKSkge1xuICAgICAgICBQYWdlc1JvdXRlci5yb3V0ZVRvUGFnZShQYWdlSURzLkNIQVRfUEFHRSk7XG5cbiAgICAgICAgYXdhaXQgU2VydmVyLmdldEFjdGl2ZVVzZXJzKCk7XG4gICAgICAgIGF3YWl0IFNlcnZlci5nZXRJbmFjdGl2ZVVzZXJzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBQYWdlc1JvdXRlci5yb3V0ZVRvUGFnZShQYWdlSURzLkxPR0lOX1BBR0UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJldHVybkJ1dHRvbkNvbnRyb2xsZXI7XG4iLCJpbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tICcuLi8uLi9hcGkvYXBpLnNpbmdsZXRvbic7XG5pbXBvcnQgeyBFdmVudEJ1c0V2ZW50cyB9IGZyb20gJy4uLy4uL2V2ZW50QnVzL2V2ZW50QnVzLmludGVyZmFjZSc7XG5pbXBvcnQgRXZlbnRCdXMgZnJvbSAnLi4vLi4vZXZlbnRCdXMvZXZlbnRCdXMuc2luZ2xldG9uJztcbmltcG9ydCB7IElDaGF0Q29udHJvbGxlciB9IGZyb20gJy4vY2hhdENvbnRyb2xsZXIuaW50ZXJmYWNlJztcblxuY2xhc3MgQ2hhdENvbnRyb2xsZXIgaW1wbGVtZW50cyBJQ2hhdENvbnRyb2xsZXIge1xuICBwdWJsaWMgYWRkQ2hhdEV2ZW50TGlzdGVuZXIoY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGRpYWxvZ3VlQm94ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2d1ZS1ib3gnKSBhcyBIVE1MRWxlbWVudDtcblxuICAgIGNvbnN0IGhhbmRsZU1lc3NhZ2VzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgbWVzc2FnZXMgPSBkaWFsb2d1ZUJveC5xdWVyeVNlbGVjdG9yQWxsKCcubWVzc2FnZScpO1xuICAgICAgY29uc3QgbWVzc2FnZXNJZHM6IHN0cmluZ1tdID0gW107XG5cbiAgICAgIGNvbnN0IHVzZXJJdGVtTmFtZSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudXNlci1uYW1lJyk/LnRleHRDb250ZW50IGFzIHN0cmluZztcblxuICAgICAgaWYgKHVzZXJJdGVtTmFtZSkge1xuICAgICAgICBFdmVudEJ1cy5kaXNwYXRjaChFdmVudEJ1c0V2ZW50cy5FVkVOVF9ERUxFVEVfTUVTU0FHRV9SRUNFSVZFRF9OT1RJRklDQVRJT04sIHVzZXJJdGVtTmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZXNzYWdlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBtZXNzYWdlcy5mb3JFYWNoKChtZXNzYWdlKSA9PiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VJZCA9IG1lc3NhZ2UuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgICBpZiAobWVzc2FnZUlkKSB7XG4gICAgICAgICAgbWVzc2FnZXNJZHMucHVzaChtZXNzYWdlSWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgIG1lc3NhZ2VzSWRzLm1hcChhc3luYyAobWVzc2FnZUlkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICBhd2FpdCBTZXJ2ZXIuc2V0TWVzc2FnZVJlYWRTdGF0dXMobWVzc2FnZUlkKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfTtcblxuICAgIGRpYWxvZ3VlQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlTWVzc2FnZXMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXRDb250cm9sbGVyO1xuIiwiaW1wb3J0IHsgSUV2ZW50c0NvbnRyb2xsZXIgfSBmcm9tICcuL2V2ZW50c0NvbnRyb2xsZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IFVzZXJGcm9tU2VydmVyLCBVc2VyTWVzc2FnZUZyb21TZXJ2ZXIgfSBmcm9tICcuLi8uLi9hcGkvYXBpLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgTk9USUZJQ0FUSU9OX0lDT04sIFVzZXJTdGF0dXNlcyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jaGF0UGFnZUNvbnN0YW50cyc7XG5pbXBvcnQgeyBFdmVudEJ1c0V2ZW50cyB9IGZyb20gJy4uLy4uL2V2ZW50QnVzL2V2ZW50QnVzLmludGVyZmFjZSc7XG5pbXBvcnQgRXZlbnRCdXMgZnJvbSAnLi4vLi4vZXZlbnRCdXMvZXZlbnRCdXMuc2luZ2xldG9uJztcbmltcG9ydCBTZXNzaW9uU3RvcmFnZSBmcm9tICcuLi8uLi9zZXNzaW9uU3RvcmFnZS9zZXNzaW9uU3RvcmFnZS5zaW5nbGV0b24nO1xuaW1wb3J0IFVzZXJzTGlzdEl0ZW1WaWV3IGZyb20gJy4uLy4uL3VpL2NoYXRQYWdlL2NoYXRCb3gvbWFpbi91c2Vyc1NpZGViYXIvdXNlcnNMaXN0L3VzZXJzTGlzdEl0ZW0vdXNlcnNMaXN0SXRlbSc7XG5pbXBvcnQgTWVzc2FnZUl0ZW1WaWV3IGZyb20gJy4uLy4uL3VpL2NoYXRQYWdlL2NoYXRCb3gvbWFpbi9jaGF0L21lc3NhZ2VJdGVtcy9tZXNzYWdlSXRlbS9tZXNzYWdlSXRlbVZpZXcnO1xuaW1wb3J0IENoYXRWaWV3IGZyb20gJy4uLy4uL3VpL2NoYXRQYWdlL2NoYXRCb3gvbWFpbi9jaGF0L2NoYXRWaWV3JztcbmltcG9ydCBOZXdNZXNzYWdlc0xpbmUgZnJvbSAnLi4vLi4vdWkvY2hhdFBhZ2UvY2hhdEJveC9tYWluL2NoYXQvbWVzc2FnZUl0ZW1zL25ld01lc3NhZ2VzTGluZS9uZXdNZXNzYWdlc0xpbmVWaWV3JztcblxuY2xhc3MgRXZlbnRzQ29udHJvbGxlciBpbXBsZW1lbnRzIElFdmVudHNDb250cm9sbGVyIHtcbiAgcHJpdmF0ZSB1bnJlZ2lzdGVyQWRkVXNlckV2ZW50OiAoKSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgcHJpdmF0ZSB1bnJlZ2lzdGVyRGVsZXRlVXNlckV2ZW50OiAoKSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgcHJpdmF0ZSB1bnJlZ2lzdGVyQWRkTWVzc2FnZUV2ZW50OiAoKSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgcHJpdmF0ZSB1bnJlZ2lzdGVyRGVsZXRlTWVzc2FnZUV2ZW50OiAoKSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgcHJpdmF0ZSB1bnJlZ2lzdGVyU2hvd01lc3NhZ2VSZWNlaXZlZE5vdGlmaWNhdGlvbkV2ZW50OiAoKSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgcHJpdmF0ZSB1bnJlZ2lzdGVyRGVsZXRlTWVzc2FnZVJlY2VpdmVkTm90aWZpY2F0aW9uRXZlbnQ6ICgpID0+IHZvaWQgPSAoKSA9PiB7fTtcblxuICBwcml2YXRlIHVucmVnaXN0ZXJBZGRSZWNlaXZlZE1lc3NhZ2VFdmVudDogKCkgPT4gdm9pZCA9ICgpID0+IHt9O1xuXG4gIHByaXZhdGUgdW5yZWdpc3RlclNldEN1cnJlbnRVc2VyTmFtZUV2ZW50OiAoKSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgcHJpdmF0ZSB1bnJlZ2lzdGVyU2hvd05ld01lc3NhZ2VzTGluZUV2ZW50OiAoKSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgcHJpdmF0ZSB1bnJlZ2lzdGVyRGVsZXRlTmV3TWVzc2FnZXNMaW5lRXZlbnQ6ICgpID0+IHZvaWQgPSAoKSA9PiB7fTtcblxuICBwdWJsaWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmliZVNldEN1cnJlbnRVc2VyTmFtZUV2ZW50KCk7XG5cbiAgICB0aGlzLnN1YnNjcmliZUFkZFVzZXJFdmVudCgpO1xuICAgIHRoaXMuc3Vic2NyaWJlRGVsZXRlVXNlckV2ZW50KCk7XG4gICAgdGhpcy5zdWJzY3JpYmVEZWxldGVNZXNzYWdlRXZlbnQoKTtcblxuICAgIHRoaXMuc3Vic2NyaWJlVXBkYXRlRGlhbG9ndWVIZWFkZXJFdmVudCgpO1xuICAgIHRoaXMuc3Vic2NyaWJlVXBkYXRlRGlhbG9ndWVIZWFkZXJTdGF0dXNFdmVudCgpO1xuXG4gICAgdGhpcy5zdWJzY3JpYmVPcGVuRGlhbG9ndWVCb3hFdmVudCgpO1xuXG4gICAgdGhpcy5zdWJzY3JpYmVBZGRNZXNzYWdlRXZlbnQoKTtcbiAgICB0aGlzLnN1YnNjcmliZUFkZFJlY2VpdmVkTWVzc2FnZUV2ZW50KCk7XG5cbiAgICB0aGlzLnN1YnNjcmliZVNob3dNZXNzYWdlUmVjZWl2ZWROb3RpZmljYXRpb25FdmVudCgpO1xuICAgIHRoaXMuc3Vic2NyaWJlRGVsZXRlTWVzc2FnZVJlY2VpdmVkTm90aWZpY2F0aW9uRXZlbnQoKTtcblxuICAgIHRoaXMuc3Vic2NyaWJlU2hvd05ld01lc3NhZ2VzTGluZUV2ZW50KCk7XG4gICAgdGhpcy5zdWJzY3JpYmVEZWxldGVOZXdNZXNzYWdlc0xpbmVFdmVudCgpO1xuXG4gICAgRXZlbnRCdXMuZGlzcGF0Y2goXG4gICAgICBFdmVudEJ1c0V2ZW50cy5FVkVOVF9TRVRfQ1VSUkVOVF9VU0VSTkFNRSxcbiAgICAgIFNlc3Npb25TdG9yYWdlLmdldFVzZXIoKT8ubG9naW4gYXMgc3RyaW5nXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cnVjdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVucmVnaXN0ZXJTZXRDdXJyZW50VXNlck5hbWVFdmVudCgpO1xuXG4gICAgdGhpcy51bnJlZ2lzdGVyQWRkVXNlckV2ZW50KCk7XG4gICAgdGhpcy51bnJlZ2lzdGVyRGVsZXRlVXNlckV2ZW50KCk7XG4gICAgdGhpcy51bnJlZ2lzdGVyRGVsZXRlTWVzc2FnZUV2ZW50KCk7XG5cbiAgICB0aGlzLnVucmVnaXN0ZXJTaG93TWVzc2FnZVJlY2VpdmVkTm90aWZpY2F0aW9uRXZlbnQoKTtcbiAgICB0aGlzLnVucmVnaXN0ZXJEZWxldGVNZXNzYWdlUmVjZWl2ZWROb3RpZmljYXRpb25FdmVudCgpO1xuXG4gICAgdGhpcy51bnJlZ2lzdGVyQWRkTWVzc2FnZUV2ZW50KCk7XG4gICAgdGhpcy51bnJlZ2lzdGVyQWRkUmVjZWl2ZWRNZXNzYWdlRXZlbnQoKTtcblxuICAgIHRoaXMudW5yZWdpc3RlclNob3dOZXdNZXNzYWdlc0xpbmVFdmVudCgpO1xuICAgIHRoaXMudW5yZWdpc3RlckRlbGV0ZU5ld01lc3NhZ2VzTGluZUV2ZW50KCk7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZVNldEN1cnJlbnRVc2VyTmFtZUV2ZW50KCk6IHZvaWQge1xuICAgIHRoaXMudW5yZWdpc3RlclNldEN1cnJlbnRVc2VyTmFtZUV2ZW50ID0gRXZlbnRCdXMucmVnaXN0ZXIoXG4gICAgICBFdmVudEJ1c0V2ZW50cy5FVkVOVF9TRVRfQ1VSUkVOVF9VU0VSTkFNRSxcbiAgICAgICh1c2VyTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXVzZXJOYW1lJykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRVc2VyTmFtZSkge1xuICAgICAgICAgIGN1cnJlbnRVc2VyTmFtZS5pbm5lckhUTUwgPSB1c2VyTmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICkudW5yZWdpc3RlcjtcbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlQWRkVXNlckV2ZW50KCk6IHZvaWQge1xuICAgIHRoaXMudW5yZWdpc3RlckFkZFVzZXJFdmVudCA9IEV2ZW50QnVzLnJlZ2lzdGVyKFxuICAgICAgRXZlbnRCdXNFdmVudHMuRVZFTlRfQUREX1VTRVIsXG4gICAgICBhc3luYyAodXNlcjogVXNlckZyb21TZXJ2ZXIpID0+IHtcbiAgICAgICAgRXZlbnRCdXMuZGlzcGF0Y2goRXZlbnRCdXNFdmVudHMuRVZFTlRfREVMRVRFX1VTRVIsIHVzZXIpO1xuXG4gICAgICAgIG5ldyBVc2Vyc0xpc3RJdGVtVmlldyh1c2VyKTtcbiAgICAgIH1cbiAgICApLnVucmVnaXN0ZXI7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZURlbGV0ZVVzZXJFdmVudCgpOiB2b2lkIHtcbiAgICB0aGlzLnVucmVnaXN0ZXJEZWxldGVVc2VyRXZlbnQgPSBFdmVudEJ1cy5yZWdpc3RlcihcbiAgICAgIEV2ZW50QnVzRXZlbnRzLkVWRU5UX0RFTEVURV9VU0VSLFxuICAgICAgKHVzZXI6IFVzZXJGcm9tU2VydmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHVzZXJzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXJzLWNvbnRhaW5lcicpO1xuICAgICAgICBpZiAoIXVzZXJzQ29udGFpbmVyKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXNlckl0ZW0gPSB1c2Vyc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGAudXNlci1pdGVtLSR7dXNlci5sb2dpbn1gKTtcbiAgICAgICAgaWYgKCF1c2VySXRlbSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHVzZXJzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHVzZXJJdGVtKTtcbiAgICAgIH1cbiAgICApLnVucmVnaXN0ZXI7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZVVwZGF0ZURpYWxvZ3VlSGVhZGVyRXZlbnQoKTogdm9pZCB7XG4gICAgRXZlbnRCdXMucmVnaXN0ZXIoRXZlbnRCdXNFdmVudHMuRVZFTlRfVVBEQVRFX0RJQUxPR1VFX0hFQURFUiwgKHVzZXI6IFVzZXJGcm9tU2VydmVyKSA9PiB7XG4gICAgICBjb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLW5hbWUnKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIHVzZXJOYW1lLmlubmVySFRNTCA9IHVzZXIubG9naW47XG5cbiAgICAgIGNvbnN0IHVzZXJTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1zdGF0dXMnKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIHVzZXJTdGF0dXMuaW5uZXJIVE1MID0gdXNlci5pc0xvZ2luZWQgPyBVc2VyU3RhdHVzZXMuT05MSU5FIDogVXNlclN0YXR1c2VzLk9GRkxJTkU7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZVVwZGF0ZURpYWxvZ3VlSGVhZGVyU3RhdHVzRXZlbnQoKTogdm9pZCB7XG4gICAgRXZlbnRCdXMucmVnaXN0ZXIoXG4gICAgICBFdmVudEJ1c0V2ZW50cy5FVkVOVF9VUERBVEVfRElBTE9HVUVfSEVBREVSX1VTRVJfU1RBVFVTLFxuICAgICAgKHVzZXI6IFVzZXJGcm9tU2VydmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItbmFtZScpIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgIGlmICh1c2VyTmFtZSAmJiB1c2VyTmFtZS50ZXh0Q29udGVudCA9PT0gdXNlci5sb2dpbikge1xuICAgICAgICAgIGNvbnN0IHVzZXJTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1zdGF0dXMnKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICB1c2VyU3RhdHVzLmlubmVySFRNTCA9IHVzZXIuaXNMb2dpbmVkID8gVXNlclN0YXR1c2VzLk9OTElORSA6IFVzZXJTdGF0dXNlcy5PRkZMSU5FO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlT3BlbkRpYWxvZ3VlQm94RXZlbnQoKTogdm9pZCB7XG4gICAgRXZlbnRCdXMucmVnaXN0ZXIoRXZlbnRCdXNFdmVudHMuRVZFTlRfT1BFTl9ESUFMT0dVRV9CT1gsIChpc01lc3NhZ2VIaXN0b3J5RW1wdHk6IGJvb2xlYW4pID0+IHtcbiAgICAgIGNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItbmFtZScpIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICBpZiAoIXVzZXJOYW1lLnRleHRDb250ZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGlhbG9ndWVCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9ndWUtYm94JykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBkaWFsb2d1ZUJveC5pbm5lckhUTUwgPSAnJztcblxuICAgICAgaWYgKGlzTWVzc2FnZUhpc3RvcnlFbXB0eSkge1xuICAgICAgICBDaGF0Vmlldy5jcmVhdGVXcml0ZUZpcnN0TWVzc2FnZU5vdGlmaWNhdGlvbigpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzZW5kTWVzc2FnZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LXNlbmQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgc2VuZE1lc3NhZ2VJbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpYmVBZGRNZXNzYWdlRXZlbnQoKTogdm9pZCB7XG4gICAgdGhpcy51bnJlZ2lzdGVyQWRkTWVzc2FnZUV2ZW50ID0gRXZlbnRCdXMucmVnaXN0ZXIoXG4gICAgICBFdmVudEJ1c0V2ZW50cy5FVkVOVF9BRERfTUVTU0FHRSxcbiAgICAgIChtZXNzYWdlOiBVc2VyTWVzc2FnZUZyb21TZXJ2ZXIpID0+IHtcbiAgICAgICAgY29uc3QgZGlhbG9ndWVCb3hOb3RpZmljYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICcuZGlhbG9ndWUtYm94LW5vdGlmaWNhdGlvbidcbiAgICAgICAgKSBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICBpZiAoZGlhbG9ndWVCb3hOb3RpZmljYXRpb24pIHtcbiAgICAgICAgICBkaWFsb2d1ZUJveE5vdGlmaWNhdGlvbi5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbWVzc2FnZS50ZXh0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSBTZXNzaW9uU3RvcmFnZS5nZXRVc2VyKCk/LmxvZ2luO1xuXG4gICAgICAgIGxldCBjYW1lRnJvbSA9ICcnO1xuICAgICAgICBpZiAobWVzc2FnZS5mcm9tID09PSBjdXJyZW50VXNlcikge1xuICAgICAgICAgIGNhbWVGcm9tID0gJ2N1cnJlbnQtdXNlcic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FtZUZyb20gPSAndXNlcic7XG4gICAgICAgIH1cblxuICAgICAgICBuZXcgTWVzc2FnZUl0ZW1WaWV3KG1lc3NhZ2UsIGNhbWVGcm9tKTtcbiAgICAgIH1cbiAgICApLnVucmVnaXN0ZXI7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZUFkZFJlY2VpdmVkTWVzc2FnZUV2ZW50KCk6IHZvaWQge1xuICAgIHRoaXMudW5yZWdpc3RlckFkZFJlY2VpdmVkTWVzc2FnZUV2ZW50ID0gRXZlbnRCdXMucmVnaXN0ZXIoXG4gICAgICBFdmVudEJ1c0V2ZW50cy5FVkVOVF9BRERfUkVDRUlWRURfTUVTU0FHRSxcbiAgICAgIChtZXNzYWdlOiBVc2VyTWVzc2FnZUZyb21TZXJ2ZXIpID0+IHtcbiAgICAgICAgaWYgKCFtZXNzYWdlLnRleHQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IFNlc3Npb25TdG9yYWdlLmdldFVzZXIoKT8ubG9naW47XG5cbiAgICAgICAgY29uc3QgY2FtZUZyb20gPSAndXNlcic7XG5cbiAgICAgICAgY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1uYW1lJykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHVzZXJOYW1lLnRleHRDb250ZW50ID09PSBtZXNzYWdlLmZyb20gJiYgY3VycmVudFVzZXIgPT09IG1lc3NhZ2UudG8pIHtcbiAgICAgICAgICBuZXcgTWVzc2FnZUl0ZW1WaWV3KG1lc3NhZ2UsIGNhbWVGcm9tKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICkudW5yZWdpc3RlcjtcbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlRGVsZXRlTWVzc2FnZUV2ZW50KCk6IHZvaWQge1xuICAgIHRoaXMudW5yZWdpc3RlckRlbGV0ZU1lc3NhZ2VFdmVudCA9IEV2ZW50QnVzLnJlZ2lzdGVyKFxuICAgICAgRXZlbnRCdXNFdmVudHMuRVZFTlRfREVMRVRFX01FU1NBR0UsXG4gICAgICAobWVzc2FnZUlkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgZGlhbG9ndWVCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9ndWUtYm94JykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGRpYWxvZ3VlQm94LnF1ZXJ5U2VsZWN0b3IoYFtpZD1cIiR7bWVzc2FnZUlkfVwiXWApIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgIGlmICghbWVzc2FnZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lc3NhZ2UucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgKS51bnJlZ2lzdGVyO1xuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpYmVTaG93TWVzc2FnZVJlY2VpdmVkTm90aWZpY2F0aW9uRXZlbnQoKTogdm9pZCB7XG4gICAgdGhpcy51bnJlZ2lzdGVyU2hvd01lc3NhZ2VSZWNlaXZlZE5vdGlmaWNhdGlvbkV2ZW50ID0gRXZlbnRCdXMucmVnaXN0ZXIoXG4gICAgICBFdmVudEJ1c0V2ZW50cy5FVkVOVF9TSE9XX01FU1NBR0VfUkVDRUlWRURfTk9USUZJQ0FUSU9OLFxuICAgICAgKG1lc3NhZ2U6IFVzZXJNZXNzYWdlRnJvbVNlcnZlcikgPT4ge1xuICAgICAgICBjb25zdCBub3RpZmljYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubm90aWZpY2F0aW9uLSR7bWVzc2FnZS5mcm9tfWApO1xuXG4gICAgICAgIGlmIChub3RpZmljYXRpb24pIHtcbiAgICAgICAgICBub3RpZmljYXRpb24uaW5uZXJIVE1MID0gTk9USUZJQ0FUSU9OX0lDT047XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApLnVucmVnaXN0ZXI7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZURlbGV0ZU1lc3NhZ2VSZWNlaXZlZE5vdGlmaWNhdGlvbkV2ZW50KCk6IHZvaWQge1xuICAgIHRoaXMudW5yZWdpc3RlckRlbGV0ZU1lc3NhZ2VSZWNlaXZlZE5vdGlmaWNhdGlvbkV2ZW50ID0gRXZlbnRCdXMucmVnaXN0ZXIoXG4gICAgICBFdmVudEJ1c0V2ZW50cy5FVkVOVF9ERUxFVEVfTUVTU0FHRV9SRUNFSVZFRF9OT1RJRklDQVRJT04sXG4gICAgICAodXNlckl0ZW1OYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3Qgbm90aWZpY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm5vdGlmaWNhdGlvbi0ke3VzZXJJdGVtTmFtZX1gKTtcblxuICAgICAgICBpZiAobm90aWZpY2F0aW9uKSB7XG4gICAgICAgICAgbm90aWZpY2F0aW9uLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKS51bnJlZ2lzdGVyO1xuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpYmVTaG93TmV3TWVzc2FnZXNMaW5lRXZlbnQoKTogdm9pZCB7XG4gICAgdGhpcy51bnJlZ2lzdGVyU2hvd05ld01lc3NhZ2VzTGluZUV2ZW50ID0gRXZlbnRCdXMucmVnaXN0ZXIoXG4gICAgICBFdmVudEJ1c0V2ZW50cy5FVkVOVF9TSE9XX05FV19NRVNTQUdFU19MSU5FLFxuICAgICAgKGZpcnN0VW5yZWFkTWVzc2FnZTogVXNlck1lc3NhZ2VGcm9tU2VydmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpYWxvZ3VlQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpYWxvZ3VlLWJveCcpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICBjb25zdCBuZXdNZXNzYWdlc0xpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LW1lc3NhZ2VzLWxpbmUnKSBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICBpZiAobmV3TWVzc2FnZXNMaW5lKSB7XG4gICAgICAgICAgY29uc3QgbGluZVBvc2l0aW9uID0gbmV3TWVzc2FnZXNMaW5lLm9mZnNldFRvcDtcblxuICAgICAgICAgIGRpYWxvZ3VlQm94LnNjcm9sbFRvcCA9IGxpbmVQb3NpdGlvbjtcblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ldyBOZXdNZXNzYWdlc0xpbmUoZmlyc3RVbnJlYWRNZXNzYWdlKTtcbiAgICAgIH1cbiAgICApLnVucmVnaXN0ZXI7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZURlbGV0ZU5ld01lc3NhZ2VzTGluZUV2ZW50KCk6IHZvaWQge1xuICAgIHRoaXMudW5yZWdpc3RlckRlbGV0ZU5ld01lc3NhZ2VzTGluZUV2ZW50ID0gRXZlbnRCdXMucmVnaXN0ZXIoXG4gICAgICBFdmVudEJ1c0V2ZW50cy5FVkVOVF9ERUxFVEVfTkVXX01FU1NBR0VTX0xJTkUsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld01lc3NhZ2VzTGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctbWVzc2FnZXMtbGluZScpIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgIGlmIChuZXdNZXNzYWdlc0xpbmUpIHtcbiAgICAgICAgICBuZXdNZXNzYWdlc0xpbmUucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApLnVucmVnaXN0ZXI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRzQ29udHJvbGxlcjtcbiIsImltcG9ydCB7IElMb2dpbkZvcm1Db250cm9sbGVyIH0gZnJvbSAnLi9sb2dpbkZvcm1Db250cm9sbGVyLmludGVyZmFjZSc7XG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi8uLi9hcGkvYXBpLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgU2VydmVyIH0gZnJvbSAnLi4vLi4vLi4vYXBpL2FwaS5zaW5nbGV0b24nO1xuaW1wb3J0IHtcbiAgRVJST1JfSUNPTixcbiAgSW5wdXRFcnJvck1lc3NhZ2VzLFxuICBWYWxpZElucHV0TGVuZ3RoLFxuICBWYWxpZGF0aW9uUGF0dGVybnMsXG59IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cy9sb2dpblBhZ2VDb25zdGFudHMnO1xuaW1wb3J0IHsgUGFnZUlEcyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cy9wYWdlc0NvbnN0YW50cyc7XG5pbXBvcnQgU2Vzc2lvblN0b3JhZ2UgZnJvbSAnLi4vLi4vLi4vc2Vzc2lvblN0b3JhZ2Uvc2Vzc2lvblN0b3JhZ2Uuc2luZ2xldG9uJztcblxuY2xhc3MgTG9naW5Gb3JtQ29udHJvbGxlciBpbXBsZW1lbnRzIElMb2dpbkZvcm1Db250cm9sbGVyIHtcbiAgcHVibGljIGFkZExvZ2luRm9ybUV2ZW50TGlzdGVuZXJzKGZvcm1Db250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgbG9naW5Gb3JtID0gZm9ybUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubG9naW4tZm9ybScpIGFzIEhUTUxGb3JtRWxlbWVudDtcblxuICAgIGlmIChsb2dpbkZvcm0pIHtcbiAgICAgIGxvZ2luRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0aGlzLnN1Ym1pdEZvcm0obG9naW5Gb3JtKTtcbiAgICAgIH0pO1xuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInIHx8IGRvY3VtZW50LmJvZHkuaWQgPT09IFBhZ2VJRHMuTE9HSU5fUEFHRSkge1xuICAgICAgICAgIHRoaXMuc3VibWl0Rm9ybShsb2dpbkZvcm0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICB0aGlzLnZhbGlkYXRlRm9ybUlucHV0c0FuZEdldFN0YXR1cyhsb2dpbkZvcm0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBzdWJtaXRGb3JtKGZvcm06IEhUTUxGb3JtRWxlbWVudCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh0aGlzLnZhbGlkYXRlRm9ybUlucHV0c0FuZEdldFN0YXR1cyhmb3JtKSkge1xuICAgICAgY29uc3QgdXNlcjogVXNlciA9IHtcbiAgICAgICAgbG9naW46IHRoaXMuZ2V0TG9naW5JbnB1dFZhbHVlKGZvcm0pLFxuICAgICAgICBwYXNzd29yZDogdGhpcy5nZXRQYXNzd29yZElucHV0VmFsdWUoZm9ybSksXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBzdG9yZVVzZXIgPSBTZXNzaW9uU3RvcmFnZS5nZXRVc2VyKCk7XG4gICAgICBpZiAodXNlci5sb2dpbiAhPT0gc3RvcmVVc2VyPy5sb2dpbikge1xuICAgICAgICBTZXNzaW9uU3RvcmFnZS5zZXRVc2VyKHVzZXIpO1xuICAgICAgfVxuXG4gICAgICBhd2FpdCBTZXJ2ZXIubG9naW5Vc2VyKHVzZXIpO1xuXG4gICAgICB0aGlzLmNsZWFyRm9ybUlucHV0cyhmb3JtKTtcbiAgICAgIHRoaXMuZGlzYWJsZUxvZ2luQnV0dG9uKGZvcm0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0TG9naW5JbnB1dFZhbHVlKGZvcm06IEhUTUxGb3JtRWxlbWVudCk6IHN0cmluZyB7XG4gICAgY29uc3QgdXNlckxvZ2luSW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC11c2VyTG9naW4nKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IGlucHV0VmFsdWUgPSB1c2VyTG9naW5JbnB1dC52YWx1ZTtcblxuICAgIHJldHVybiBpbnB1dFZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQYXNzd29yZElucHV0VmFsdWUoZm9ybTogSFRNTEZvcm1FbGVtZW50KTogc3RyaW5nIHtcbiAgICBjb25zdCB1c2VyUGFzc3dvcmRJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmlucHV0LXVzZXJQYXNzd29yZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IHVzZXJQYXNzd29yZElucHV0LnZhbHVlO1xuXG4gICAgcmV0dXJuIGlucHV0VmFsdWU7XG4gIH1cblxuICBwcml2YXRlIGNsZWFyRm9ybUlucHV0cyhmb3JtOiBIVE1MRm9ybUVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBpbnB1dHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG4gICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBkaXNhYmxlTG9naW5CdXR0b24oZm9ybTogSFRNTEZvcm1FbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgbG9naW5CdXR0b24gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbi1idG4nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcblxuICAgIGxvZ2luQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgdmFsaWRhdGVGb3JtSW5wdXRzQW5kR2V0U3RhdHVzKGZvcm06IEhUTUxGb3JtRWxlbWVudCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHVzZXJMb2dpbklucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtdXNlckxvZ2luJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCB1c2VyUGFzc3dvcmRJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmlucHV0LXVzZXJQYXNzd29yZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgdXNlckxvZ2luRXJyb3IgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci1tZXNzYWdlLXVzZXJMb2dpbicpIGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IHVzZXJQYXNzd29yZEVycm9yID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZXJyb3ItbWVzc2FnZS11c2VyUGFzc3dvcmQnKSBhcyBIVE1MRWxlbWVudDtcblxuICAgIHRoaXMuY2xlYXJFcnJvck1lc3NhZ2VzKHVzZXJMb2dpbkVycm9yLCB1c2VyUGFzc3dvcmRFcnJvcik7XG5cbiAgICBjb25zdCBpc1VzZXJOYW1lVmFsaWQgPSB0aGlzLnZhbGlkYXRlSW5wdXQoXG4gICAgICB1c2VyTG9naW5JbnB1dCxcbiAgICAgIHVzZXJMb2dpbkVycm9yLFxuICAgICAgVmFsaWRhdGlvblBhdHRlcm5zLmVuZ2xpc2hMZXR0ZXJzQW5kRGlnaXRzT25seSxcbiAgICAgIFZhbGlkYXRpb25QYXR0ZXJucy5maXJzdExldHRlcklzVXBwZXJjYXNlLFxuICAgICAgVmFsaWRJbnB1dExlbmd0aC5VU0VSX0xPR0lOX01JTl9MRU5HVEhcbiAgICApO1xuXG4gICAgY29uc3QgaXNVc2VyU3VybmFtZVZhbGlkID0gdGhpcy52YWxpZGF0ZUlucHV0KFxuICAgICAgdXNlclBhc3N3b3JkSW5wdXQsXG4gICAgICB1c2VyUGFzc3dvcmRFcnJvcixcbiAgICAgIFZhbGlkYXRpb25QYXR0ZXJucy5lbmdsaXNoTGV0dGVyc0FuZERpZ2l0c09ubHksXG4gICAgICBWYWxpZGF0aW9uUGF0dGVybnMuZmlyc3RMZXR0ZXJJc1VwcGVyY2FzZSxcbiAgICAgIFZhbGlkSW5wdXRMZW5ndGguVVNFUl9QQVNTV09SRF9NSU5fTEVOR1RIXG4gICAgKTtcblxuICAgIGNvbnN0IGxvZ2luQnV0dG9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcubG9naW4tYnRuJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgaWYgKGxvZ2luQnV0dG9uKSB7XG4gICAgICBsb2dpbkJ1dHRvbi5kaXNhYmxlZCA9ICEoaXNVc2VyTmFtZVZhbGlkICYmIGlzVXNlclN1cm5hbWVWYWxpZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzVXNlck5hbWVWYWxpZCAmJiBpc1VzZXJTdXJuYW1lVmFsaWQ7XG4gIH1cblxuICBwcml2YXRlIGNsZWFyRXJyb3JNZXNzYWdlcyguLi5tZXNzYWdlczogSFRNTEVsZW1lbnRbXSk6IHZvaWQge1xuICAgIG1lc3NhZ2VzLmZvckVhY2goKG1lc3NhZ2UpID0+IHtcbiAgICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgPSAnJztcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdmFsaWRhdGVJbnB1dChcbiAgICBpbnB1dDogSFRNTElucHV0RWxlbWVudCxcbiAgICBlcnJvckVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIGxldHRlcnNQYXR0ZXJuOiBSZWdFeHAsXG4gICAgZmlyc3RMZXR0ZXJQYXR0ZXJuOiBSZWdFeHAsXG4gICAgbWluTGVuZ3RoOiBudW1iZXJcbiAgKTogYm9vbGVhbiB7XG4gICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xuXG4gICAgaWYgKCF0aGlzLnZhbGlkYXRlUGF0dGVybihpbnB1dC52YWx1ZSwgbGV0dGVyc1BhdHRlcm4pKSB7XG4gICAgICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtFUlJPUl9JQ09OfSAke0lucHV0RXJyb3JNZXNzYWdlcy5FTkdMSVNIX0xFVFRFUlNfQU5EX0RJR0lUU31gO1xuICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMudmFsaWRhdGVQYXR0ZXJuKGlucHV0LnZhbHVlWzBdLCBmaXJzdExldHRlclBhdHRlcm4pKSB7XG4gICAgICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtFUlJPUl9JQ09OfSAke0lucHV0RXJyb3JNZXNzYWdlcy5GSVJTVF9MRVRURVJfVVBQRVJDQVNFfWA7XG4gICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChpbnB1dC52YWx1ZS5sZW5ndGggPCBtaW5MZW5ndGgpIHtcbiAgICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IGAke0VSUk9SX0lDT059ICR7SW5wdXRFcnJvck1lc3NhZ2VzLk1JTl9MRU5HVEh9ICR7bWluTGVuZ3RofSBgO1xuICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9XG5cbiAgcHJpdmF0ZSB2YWxpZGF0ZVBhdHRlcm4odmFsdWU6IHN0cmluZywgcGF0dGVybjogUmVnRXhwKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHBhdHRlcm4udGVzdCh2YWx1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtQ29udHJvbGxlcjtcbiIsImltcG9ydCB7IElTZWFyY2hGb3JtQ29udHJvbGxlciB9IGZyb20gJy4vc2VhcmNoRm9ybUNvbnRyb2xsZXIuaW50ZXJmYWNlJztcblxuY2xhc3MgU2VhcmNoRm9ybUNvbnRyb2xsZXIgaW1wbGVtZW50cyBJU2VhcmNoRm9ybUNvbnRyb2xsZXIge1xuICBwdWJsaWMgYWRkU2VhcmNoRm9ybUV2ZW50TGlzdGVuZXIoZm9ybUNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBzZWFyY2hJbnB1dCA9IGZvcm1Db250YWluZXIucXVlcnlTZWxlY3RvcignLmlucHV0LXNlYXJjaCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgIGNvbnN0IHVzZXJzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXJzLWNvbnRhaW5lcicpIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICBpZiAoIXVzZXJzQ29udGFpbmVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdXNlcnNJdGVtcyA9IHVzZXJzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy51c2VyLWl0ZW0nKSBhcyBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PjtcblxuICAgICAgaWYgKCF1c2Vyc0l0ZW1zKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXNlcnNJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlYXJjaFRleHQgPSBzZWFyY2hJbnB1dC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1UZXh0ID0gaXRlbS50ZXh0Q29udGVudCEudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKGl0ZW1UZXh0LmluY2x1ZGVzKHNlYXJjaFRleHQpKSB7XG4gICAgICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoRm9ybUNvbnRyb2xsZXI7XG4iLCJpbXBvcnQgeyBJU2VuZEZvcm1Db250cm9sbGVyIH0gZnJvbSAnLi9zZW5kRm9ybUNvbnRyb2xsZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IFVzZXJNZXNzYWdlIH0gZnJvbSAnLi4vLi4vLi4vYXBpL2FwaS5pbnRlcmZhY2VzJztcbmltcG9ydCB7IFNlcnZlciB9IGZyb20gJy4uLy4uLy4uL2FwaS9hcGkuc2luZ2xldG9uJztcbmltcG9ydCB7IFBhZ2VJRHMgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMvcGFnZXNDb25zdGFudHMnO1xuXG5jbGFzcyBTZW5kRm9ybUNvbnRyb2xsZXIgaW1wbGVtZW50cyBJU2VuZEZvcm1Db250cm9sbGVyIHtcbiAgcHVibGljIGFkZFNlbmRGb3JtRXZlbnRMaXN0ZW5lcnMoZm9ybUNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBzZW5kRm9ybSA9IGZvcm1Db250YWluZXIucXVlcnlTZWxlY3RvcignLnNlbmQtZm9ybScpIGFzIEhUTUxGb3JtRWxlbWVudDtcbiAgICBjb25zdCBzZW5kSW5wdXQgPSBmb3JtQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1zZW5kJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBzZW5kQnV0dG9uID0gZm9ybUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuc2VuZC1idG4nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcblxuICAgIGlmIChzZW5kRm9ybSkge1xuICAgICAgc2VuZEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdGhpcy5zdWJtaXRGb3JtKHNlbmRGb3JtKTtcblxuICAgICAgICB0aGlzLnRvZ2dsZVNlbmRCdXR0b24oc2VuZElucHV0LCBzZW5kQnV0dG9uKTtcbiAgICAgIH0pO1xuXG4gICAgICBzZW5kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdGhpcy5zdWJtaXRGb3JtKHNlbmRGb3JtKTtcblxuICAgICAgICB0aGlzLnRvZ2dsZVNlbmRCdXR0b24oc2VuZElucHV0LCBzZW5kQnV0dG9uKTtcbiAgICAgIH0pO1xuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInIHx8IGRvY3VtZW50LmJvZHkuaWQgPT09IFBhZ2VJRHMuQ0hBVF9QQUdFKSB7XG4gICAgICAgICAgdGhpcy5zdWJtaXRGb3JtKHNlbmRGb3JtKTtcblxuICAgICAgICAgIHRoaXMudG9nZ2xlU2VuZEJ1dHRvbihzZW5kSW5wdXQsIHNlbmRCdXR0b24pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgc2VuZElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICB0aGlzLnRvZ2dsZVNlbmRCdXR0b24oc2VuZElucHV0LCBzZW5kQnV0dG9uKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdG9nZ2xlU2VuZEJ1dHRvbihpbnB1dDogSFRNTElucHV0RWxlbWVudCwgYnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCk6IHZvaWQge1xuICAgIGlmIChpbnB1dC52YWx1ZS50cmltKCkgPT09ICcnKSB7XG4gICAgICBidXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBidXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHN1Ym1pdEZvcm0oZm9ybTogSFRNTEZvcm1FbGVtZW50KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgbWVzc2FnZVRleHQgPSB0aGlzLmdldE1lc3NhZ2VJbnB1dChmb3JtKTtcblxuICAgIGlmICghbWVzc2FnZVRleHQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlOiBVc2VyTWVzc2FnZSA9IHtcbiAgICAgIHRvOiB0aGlzLmdldFJlY2lwaWVudCgpLFxuICAgICAgdGV4dDogbWVzc2FnZVRleHQsXG4gICAgfTtcblxuICAgIHRoaXMuY2xlYXJNZXNzYWdlSW5wdXQoZm9ybSk7XG5cbiAgICBhd2FpdCBTZXJ2ZXIuc2VuZE1lc3NhZ2VUb1VzZXIobWVzc2FnZSk7XG4gIH1cblxuICBwcml2YXRlIGdldE1lc3NhZ2VJbnB1dChmb3JtOiBIVE1MRWxlbWVudCk6IHN0cmluZyB7XG4gICAgY29uc3Qgc2VuZElucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtc2VuZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcmV0dXJuIHNlbmRJbnB1dC52YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJNZXNzYWdlSW5wdXQoZm9ybTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBpbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmlucHV0LXNlbmQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGlucHV0LnZhbHVlID0gJyc7XG4gIH1cblxuICBwcml2YXRlIGdldFJlY2lwaWVudCgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHVzZXJUb1NlbmRNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItbmFtZScpIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgcmV0dXJuIHVzZXJUb1NlbmRNZXNzYWdlLnRleHRDb250ZW50ITtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZW5kRm9ybUNvbnRyb2xsZXI7XG4iLCJpbXBvcnQgeyBJVXNlckl0ZW1Db250cm9sbGVyIH0gZnJvbSAnLi91c2VySXRlbUNvbnRyb2xsZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IFVzZXJGcm9tU2VydmVyIH0gZnJvbSAnLi4vLi4vYXBpL2FwaS5pbnRlcmZhY2VzJztcbmltcG9ydCB7IFNlcnZlciB9IGZyb20gJy4uLy4uL2FwaS9hcGkuc2luZ2xldG9uJztcbmltcG9ydCB7IEV2ZW50QnVzRXZlbnRzIH0gZnJvbSAnLi4vLi4vZXZlbnRCdXMvZXZlbnRCdXMuaW50ZXJmYWNlJztcbmltcG9ydCBFdmVudEJ1cyBmcm9tICcuLi8uLi9ldmVudEJ1cy9ldmVudEJ1cy5zaW5nbGV0b24nO1xuXG5jbGFzcyBVc2VySXRlbUNvbnRyb2xsZXIgaW1wbGVtZW50cyBJVXNlckl0ZW1Db250cm9sbGVyIHtcbiAgcHVibGljIGFkZFVzZXJJdGVtRXZlbnRMaXN0ZW5lcih1c2VySXRlbTogSFRNTEVsZW1lbnQsIHVzZXI6IFVzZXJGcm9tU2VydmVyKTogdm9pZCB7XG4gICAgdXNlckl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCBTZXJ2ZXIuZ2V0TWVzc2FnZUhpc3RvcnkodXNlci5sb2dpbik7XG5cbiAgICAgIEV2ZW50QnVzLmRpc3BhdGNoKEV2ZW50QnVzRXZlbnRzLkVWRU5UX1VQREFURV9ESUFMT0dVRV9IRUFERVIsIHVzZXIpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJJdGVtQ29udHJvbGxlcjtcbiIsImV4cG9ydCBpbnRlcmZhY2UgUmVnaXN0cnkge1xuICB1bnJlZ2lzdGVyOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhbGxhYmxlIHtcbiAgW2tleTogc3RyaW5nXTogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdWJzY3JpYmVyIHtcbiAgW2tleTogc3RyaW5nXTogQ2FsbGFibGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUV2ZW50QnVzIHtcbiAgZGlzcGF0Y2g8VD4oZXZlbnQ6IHN0cmluZywgYXJnPzogVCk6IHZvaWQ7XG4gIHJlZ2lzdGVyKGV2ZW50OiBzdHJpbmcsIGNhbGxiYWNrOiAoKSA9PiB2b2lkKTogUmVnaXN0cnk7XG59XG5cbmV4cG9ydCBlbnVtIEV2ZW50QnVzRXZlbnRzIHtcbiAgRVZFTlRfU0VUX0NVUlJFTlRfVVNFUk5BTUUgPSAnRXZlbnRTZXRDdXJyZW50VXNlcm5hbWUnLFxuXG4gIEVWRU5UX0FERF9VU0VSID0gJ0V2ZW50QWRkVXNlcicsXG4gIEVWRU5UX0RFTEVURV9VU0VSID0gJ0V2ZW50RGVsZXRlVXNlcicsXG5cbiAgRVZFTlRfVVBEQVRFX0RJQUxPR1VFX0hFQURFUiA9ICdFdmVudFVwZGF0ZURpYWxvZ3VlSGVhZGVyJyxcbiAgRVZFTlRfVVBEQVRFX0RJQUxPR1VFX0hFQURFUl9VU0VSX1NUQVRVUyA9ICdFdmVudFVwZGF0ZURpYWxvZ3VlSGVhZGVyVXNlclN0YXR1cycsXG5cbiAgRVZFTlRfT1BFTl9ESUFMT0dVRV9CT1ggPSAnRXZlbnRPcGVuRGlhbG9ndWVCb3gnLFxuICBFVkVOVF9TSE9XX1dSSVRFX0ZJUlNUX01FU1NBR0VfTk9USUZJQ0FUSU9OID0gJ0V2ZW50U2hvd1dyaXRlRmlyc3RNZXNzYWdlTm90aWZpY2F0aW9uJyxcblxuICBFVkVOVF9TSE9XX05FV19NRVNTQUdFU19MSU5FID0gJ0V2ZW50U2hvd05ld01lc3NhZ2VzTGluZScsXG4gIEVWRU5UX0RFTEVURV9ORVdfTUVTU0FHRVNfTElORSA9ICdFdmVudERlbGV0ZU5ld01lc3NhZ2VzTGluZScsXG5cbiAgRVZFTlRfQUREX01FU1NBR0UgPSAnRXZlbnRBZGRNZXNzYWdlJyxcbiAgRVZFTlRfQUREX1JFQ0VJVkVEX01FU1NBR0UgPSAnRXZlbnRBZGRSZWNlaXZlZE1lc3NhZ2UnLFxuICBFVkVOVF9ERUxFVEVfTUVTU0FHRSA9ICdFdmVudERlbGV0ZU1lc3NhZ2UnLFxuXG4gIEVWRU5UX0NIQU5HRV9NRVNTQUdFX1JFQURfU1RBVFVTID0gJ0V2ZW50Q2hhbmdlTWVzc2FnZVJlYWRTdGF0dXMnLFxuXG4gIEVWRU5UX1NIT1dfTUVTU0FHRV9SRUNFSVZFRF9OT1RJRklDQVRJT04gPSAnRXZlbnRTaG93TWVzc2FnZVJlY2VpdmVkTm90aWZpY2F0aW9uJyxcbiAgRVZFTlRfREVMRVRFX01FU1NBR0VfUkVDRUlWRURfTk9USUZJQ0FUSU9OID0gJ0V2ZW50RGVsZXRlTWVzc2FnZVJlY2VpdmVkTm90aWZpY2F0aW9uJyxcbn1cbiIsImltcG9ydCBFdmVudEJ1cyBmcm9tICcuL2V2ZW50QnVzJztcblxuY29uc3QgZXZlbnRCdXMgPSBuZXcgRXZlbnRCdXMoKTtcbmV4cG9ydCBkZWZhdWx0IGV2ZW50QnVzO1xuIiwiaW1wb3J0IHsgSUV2ZW50QnVzLCBSZWdpc3RyeSwgU3Vic2NyaWJlciB9IGZyb20gJy4vZXZlbnRCdXMuaW50ZXJmYWNlJztcblxuY2xhc3MgRXZlbnRCdXMgaW1wbGVtZW50cyBJRXZlbnRCdXMge1xuICBwcml2YXRlIHN1YnNjcmliZXJzOiBTdWJzY3JpYmVyO1xuXG4gIHByaXZhdGUgc3RhdGljIG5leHRJZCA9IDA7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zdWJzY3JpYmVycyA9IHt9O1xuICB9XG5cbiAgcHVibGljIGRpc3BhdGNoPFQ+KGV2ZW50OiBzdHJpbmcsIGFyZz86IFQpOiB2b2lkIHtcbiAgICBjb25zdCBzdWJzY3JpYmVyID0gdGhpcy5zdWJzY3JpYmVyc1tldmVudF07XG5cbiAgICBpZiAoc3Vic2NyaWJlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXMoc3Vic2NyaWJlcikuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgKHN1YnNjcmliZXJba2V5XSBhcyAoYXJnOiBUKSA9PiB2b2lkKShhcmcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyPFQ+KGV2ZW50OiBzdHJpbmcsIGNhbGxiYWNrOiAoYXJnOiBUKSA9PiB2b2lkKTogUmVnaXN0cnkge1xuICAgIGNvbnN0IGlkID0gdGhpcy5nZXROZXh0SWQoKTtcblxuICAgIGlmICghdGhpcy5zdWJzY3JpYmVyc1tldmVudF0pIHtcbiAgICAgIHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdID0ge307XG4gICAgfVxuXG4gICAgdGhpcy5zdWJzY3JpYmVyc1tldmVudF1baWRdID0gKC4uLmFyZ3M6IHVua25vd25bXSkgPT4ge1xuICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBhcmcgPSBhcmdzWzBdIGFzIFQ7XG4gICAgICAgIGNhbGxiYWNrKGFyZyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICB1bnJlZ2lzdGVyOiAoKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XVtpZF07XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLnN1YnNjcmliZXJzW2V2ZW50XSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGdldE5leHRJZCgpOiBudW1iZXIge1xuICAgIEV2ZW50QnVzLm5leHRJZCArPSAxO1xuICAgIHJldHVybiBFdmVudEJ1cy5uZXh0SWQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRCdXM7XG4iLCJpbXBvcnQgUm91dGVyIGZyb20gJy4vcm91dGVyJztcblxuZXhwb3J0IGNvbnN0IFBhZ2VzUm91dGVyID0gbmV3IFJvdXRlcigpO1xuIiwiaW1wb3J0IHsgSVJvdXRlciB9IGZyb20gJy4vcm91dGVyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBQYWdlSURzIH0gZnJvbSAnLi4vY29uc3RhbnRzL3BhZ2VzQ29uc3RhbnRzJztcbmltcG9ydCBBYm91dFBhZ2VWaWV3IGZyb20gJy4uL3VpL2Fib3V0UGFnZS9hYm91dFBhZ2VWaWV3JztcbmltcG9ydCBDaGF0UGFnZVZpZXcgZnJvbSAnLi4vdWkvY2hhdFBhZ2UvY2hhdFBhZ2VWaWV3JztcbmltcG9ydCBMb2dpblBhZ2VWaWV3IGZyb20gJy4uL3VpL2xvZ2luUGFnZS9sb2dpblBhZ2VWaWV3JztcbmltcG9ydCBTZXNzaW9uU3RvcmFnZSBmcm9tICcuLi9zZXNzaW9uU3RvcmFnZS9zZXNzaW9uU3RvcmFnZS5zaW5nbGV0b24nO1xuaW1wb3J0IEV2ZW50c0NvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlci9ldmVudHNDb250cm9sbGVyL2V2ZW50c0NvbnRyb2xsZXInO1xuXG5jbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBJUm91dGVyIHtcbiAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuYm9keTtcblxuICBwcml2YXRlIGV2ZW50c0NvbnRyb2xsZXIgPSBuZXcgRXZlbnRzQ29udHJvbGxlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgcHVibGljIHJvdXRlVG9QYWdlKHBhZ2VJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckNvbnRhaW5lcigpO1xuXG4gICAgbGV0IHBhZ2U6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cbiAgICBzd2l0Y2ggKHBhZ2VJZCkge1xuICAgICAgY2FzZSBQYWdlSURzLkxPR0lOX1BBR0U6XG4gICAgICAgIGlmICghU2Vzc2lvblN0b3JhZ2UuZ2V0VXNlclN0YXR1cygpKSB7XG4gICAgICAgICAgcGFnZSA9IG5ldyBMb2dpblBhZ2VWaWV3KHBhZ2VJZCkucmVuZGVyKCk7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VIYXNoKHBhZ2VJZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFnZSA9IG5ldyBDaGF0UGFnZVZpZXcoUGFnZUlEcy5DSEFUX1BBR0UpLnJlbmRlcigpO1xuICAgICAgICAgIHRoaXMuY2hhbmdlSGFzaChQYWdlSURzLkNIQVRfUEFHRSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFBhZ2VJRHMuQ0hBVF9QQUdFOlxuICAgICAgICBpZiAoU2Vzc2lvblN0b3JhZ2UuZ2V0VXNlclN0YXR1cygpKSB7XG4gICAgICAgICAgcGFnZSA9IG5ldyBDaGF0UGFnZVZpZXcocGFnZUlkKS5yZW5kZXIoKTtcbiAgICAgICAgICB0aGlzLmNoYW5nZUhhc2gocGFnZUlkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYWdlID0gbmV3IExvZ2luUGFnZVZpZXcoUGFnZUlEcy5MT0dJTl9QQUdFKS5yZW5kZXIoKTtcbiAgICAgICAgICB0aGlzLmNoYW5nZUhhc2goUGFnZUlEcy5MT0dJTl9QQUdFKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUGFnZUlEcy5BQk9VVF9QQUdFOlxuICAgICAgICBwYWdlID0gbmV3IEFib3V0UGFnZVZpZXcocGFnZUlkKS5yZW5kZXIoKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VIYXNoKHBhZ2VJZCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHBhZ2UpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZChwYWdlKTtcblxuICAgICAgdGhpcy5ldmVudHNDb250cm9sbGVyLmRlc3RydWN0KCk7XG5cbiAgICAgIHRoaXMuZXZlbnRzQ29udHJvbGxlci5pbml0aWFsaXplKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckNvbnRhaW5lcigpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIHByaXZhdGUgY2hhbmdlSGFzaChuZXdIYXNoOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IG5ld0hhc2g7XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpemUoKTogdm9pZCB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCBuZXdIYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpO1xuICAgICAgdGhpcy5yb3V0ZVRvUGFnZShuZXdIYXNoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGluaXRpYWxIYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpO1xuICAgIGlmIChpbml0aWFsSGFzaCkge1xuICAgICAgdGhpcy5yb3V0ZVRvUGFnZShpbml0aWFsSGFzaCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlcjtcbiIsImltcG9ydCBTZXNzaW9uU3RvcmUgZnJvbSAnLi9zZXNzaW9uU3RvcmFnZSc7XG5pbXBvcnQgeyBJU2Vzc2lvblN0b3JlIH0gZnJvbSAnLi9zZXNzaW9uU3RvcmFnZS5pbnRlcmZhY2UnO1xuXG5jb25zdCBTZXNzaW9uU3RvcmFnZTogSVNlc3Npb25TdG9yZSA9IG5ldyBTZXNzaW9uU3RvcmUoKTtcbmV4cG9ydCBkZWZhdWx0IFNlc3Npb25TdG9yYWdlO1xuIiwiaW1wb3J0IHsgSVNlc3Npb25TdG9yZSB9IGZyb20gJy4vc2Vzc2lvblN0b3JhZ2UuaW50ZXJmYWNlJztcbmltcG9ydCBVc2VyIGZyb20gJy4uL2FwaS9hcGkuaW50ZXJmYWNlcyc7XG5cbmNsYXNzIFNlc3Npb25TdG9yZSBpbXBsZW1lbnRzIElTZXNzaW9uU3RvcmUge1xuICBwdWJsaWMgc2V0VXNlcih1c2VyOiBVc2VyKTogdm9pZCB7XG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnVXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRVc2VyKCk6IFVzZXIge1xuICAgIGNvbnN0IHVzZXIgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdVc2VyJykgYXMgc3RyaW5nO1xuXG4gICAgcmV0dXJuIEpTT04ucGFyc2UodXNlcikgYXMgVXNlcjtcbiAgfVxuXG4gIHB1YmxpYyBzZXRVc2VyU3RhdHVzKHN0YXR1czogYm9vbGVhbik6IHZvaWQge1xuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2lzTG9naW5lZCcsIEpTT04uc3RyaW5naWZ5KHN0YXR1cykpO1xuICB9XG5cbiAgcHVibGljIGdldFVzZXJTdGF0dXMoKTogYm9vbGVhbiB8IG51bGwge1xuICAgIGNvbnN0IGlzTG9naW5lZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2lzTG9naW5lZCcpO1xuXG4gICAgcmV0dXJuIGlzTG9naW5lZCA/IEpTT04ucGFyc2UoaXNMb2dpbmVkKSA6IG51bGw7XG4gIH1cblxuICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XG4gICAgc2Vzc2lvblN0b3JhZ2UuY2xlYXIoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXNzaW9uU3RvcmU7XG4iLCJpbXBvcnQgQ3JlYXRlRWxlbWVudCBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvY3JlYXRlRWxlbWVudCc7XG5pbXBvcnQgQ3JlYXRlTGlua0VsZW1lbnQgZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2NyZWF0ZUxpbmtFbGVtZW50JztcbmltcG9ydCB7IEFCT1VUX0JPWF9URVhUX0NPTlRFTlQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb25zdGFudHMvYWJvdXRQYWdlQ29uc3RhbnRzJztcbmltcG9ydCB7XG4gIEFQUF9OQU1FLFxuICBHSVRIVUJfTElOSyxcbiAgR0lUSFVCX0xPR09fU1RSSU5HX1NWR19FTEVNRU5ULFxufSBmcm9tICcuLi8uLi8uLi8uLi9jb25zdGFudHMvcGFnZXNDb25zdGFudHMnO1xuaW1wb3J0IFJldHVybkJ1dHRvbkNvbnRyb2xsZXIgZnJvbSAnLi4vLi4vLi4vLi4vY29udHJvbGxlci9idXR0b25Db250cm9sbGVycy9yZXR1cm5CdXR0b25Db250cm9sbGVyL3JldHVybkJ1dHRvbkNvbnRyb2xsZXInO1xuXG5jbGFzcyBBYm91dEJveENvbnRlbnRWaWV3IHtcbiAgcHJpdmF0ZSByZXR1cm5CdXR0b25Db250cm9sbGVyOiBSZXR1cm5CdXR0b25Db250cm9sbGVyID0gbmV3IFJldHVybkJ1dHRvbkNvbnRyb2xsZXIoKTtcblxuICBwdWJsaWMgcmVuZGVyKCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBhYm91dEJveENvbnRlbnQgPSB0aGlzLmNyZWF0ZUFib3V0Qm94Q29udGVudCgpO1xuXG4gICAgdGhpcy5yZXR1cm5CdXR0b25Db250cm9sbGVyLmFkZFJldHVybkJ1dHRvbkV2ZW50TGlzdGVuZXIoYWJvdXRCb3hDb250ZW50KTtcblxuICAgIHJldHVybiBhYm91dEJveENvbnRlbnQ7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUFib3V0Qm94Q29udGVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgYWJvdXRCb3hDb250ZW50ID0gbmV3IENyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ2Fib3V0LWJveC1jb250ZW50JyxcbiAgICB9KS5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuY3JlYXRlVGl0bGUoKTtcbiAgICBjb25zdCB0ZXh0Q29udGVudCA9IHRoaXMuY3JlYXRlVGV4dENvbnRlbnQoKTtcbiAgICBjb25zdCBnaXRodWJMaW5rID0gdGhpcy5jcmVhdGVHaXRodWJMaW5rKCk7XG4gICAgY29uc3QgcmV0dXJuQnV0dG9uID0gdGhpcy5jcmVhdGVSZXR1cm5CdXR0b24oKTtcblxuICAgIGFib3V0Qm94Q29udGVudC5hcHBlbmQodGl0bGUsIHRleHRDb250ZW50LCBnaXRodWJMaW5rLCByZXR1cm5CdXR0b24pO1xuXG4gICAgcmV0dXJuIGFib3V0Qm94Q29udGVudDtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlVGl0bGUoKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHRpdGxlID0gbmV3IENyZWF0ZUVsZW1lbnQoXG4gICAgICAncCcsXG4gICAgICB7IGNsYXNzTmFtZTogJ2Fib3V0LWJveC10aXRsZScgfSxcbiAgICAgIEFQUF9OQU1FXG4gICAgKS5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICByZXR1cm4gdGl0bGU7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVRleHRDb250ZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCB0ZXh0Q29udGVudCA9IG5ldyBDcmVhdGVFbGVtZW50KFxuICAgICAgJ3AnLFxuICAgICAgeyBjbGFzc05hbWU6ICdhYm91dC1ib3gtdGV4dCcgfSxcbiAgICAgIEFCT1VUX0JPWF9URVhUX0NPTlRFTlRcbiAgICApLmNyZWF0ZUVsZW1lbnQoKTtcblxuICAgIHJldHVybiB0ZXh0Q29udGVudDtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlR2l0aHViTGluaygpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgZ2l0aHViTGluayA9IG5ldyBDcmVhdGVMaW5rRWxlbWVudCh7XG4gICAgICBocmVmOiBHSVRIVUJfTElOSyxcbiAgICAgIHRhcmdldDogJ19ibGFuaycsXG4gICAgICBjbGFzc05hbWU6ICdnaXRodWItbGluaycsXG4gICAgICBpbm5lckhUTUw6IEdJVEhVQl9MT0dPX1NUUklOR19TVkdfRUxFTUVOVCxcbiAgICB9KS5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICByZXR1cm4gZ2l0aHViTGluaztcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlUmV0dXJuQnV0dG9uKCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCByZXR1cm5CdXR0b24gPSBuZXcgQ3JlYXRlRWxlbWVudChcbiAgICAgICdidXR0b24nLFxuICAgICAgeyBjbGFzc05hbWU6ICdyZXR1cm4tYnRuJyB9LFxuICAgICAgJ1JldHVybidcbiAgICApLmNyZWF0ZUVsZW1lbnQoKTtcblxuICAgIHJldHVybiByZXR1cm5CdXR0b247XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJvdXRCb3hDb250ZW50VmlldztcbiIsImltcG9ydCBDcmVhdGVFbGVtZW50IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9jcmVhdGVFbGVtZW50JztcbmltcG9ydCBBYm91dEJveENvbnRlbnRWaWV3IGZyb20gJy4vYWJvdXRCb3hDb250ZW50L2Fib3V0Qm94Q29udGVudFZpZXcnO1xuXG5jbGFzcyBBYm91dEJveFZpZXcge1xuICBwcml2YXRlIGFib3V0Qm94Q29udGVudFZpZXc6IEFib3V0Qm94Q29udGVudFZpZXc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hYm91dEJveENvbnRlbnRWaWV3ID0gbmV3IEFib3V0Qm94Q29udGVudFZpZXcoKTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGFib3V0Qm94ID0gdGhpcy5jcmVhdGVBYm91dEJveCgpO1xuXG4gICAgcmV0dXJuIGFib3V0Qm94O1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVBYm91dEJveCgpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgYWJvdXRCb3ggPSBuZXcgQ3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzc05hbWU6ICdhYm91dC1ib3gnIH0pLmNyZWF0ZUVsZW1lbnQoKTtcblxuICAgIGNvbnN0IGFib3V0Qm94Q29udGVudCA9IHRoaXMuYWJvdXRCb3hDb250ZW50Vmlldy5yZW5kZXIoKTtcblxuICAgIGFib3V0Qm94LmFwcGVuZChhYm91dEJveENvbnRlbnQpO1xuXG4gICAgcmV0dXJuIGFib3V0Qm94O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0Qm94VmlldztcbiIsImltcG9ydCB7IElBYm91dFBhZ2VWaWV3IH0gZnJvbSAnLi9hYm91dFBhZ2UuaW50ZXJmYWNlJztcbmltcG9ydCBDcmVhdGVFbGVtZW50IGZyb20gJy4uLy4uL3V0aWxpdGllcy9jcmVhdGVFbGVtZW50JztcbmltcG9ydCBBYm91dEJveFZpZXcgZnJvbSAnLi9hYm91dEJveC9hYm91dEJveFZpZXcnO1xuXG5pbXBvcnQgJy4vYWJvdXRQYWdlLmNzcyc7XG5cbmNsYXNzIEFib3V0UGFnZVZpZXcgaW1wbGVtZW50cyBJQWJvdXRQYWdlVmlldyB7XG4gIHByaXZhdGUgY29udGFpbmVyOiBIVE1MRWxlbWVudDtcblxuICBwcml2YXRlIGFib3V0Qm94VmlldzogQWJvdXRCb3hWaWV3O1xuXG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lcklkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBDcmVhdGVFbGVtZW50KCdkaXYnLCB7IGlkOiBjb250YWluZXJJZCB9KS5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICB0aGlzLmFib3V0Qm94VmlldyA9IG5ldyBBYm91dEJveFZpZXcoKTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGFib3V0Qm94ID0gdGhpcy5hYm91dEJveFZpZXcucmVuZGVyKCk7XG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQoYWJvdXRCb3gpO1xuXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0UGFnZVZpZXc7XG4iLCJpbXBvcnQgSGVhZGVyVmlldyBmcm9tICcuL2hlYWRlci9oZWFkZXJDb250ZW50Vmlldyc7XG5pbXBvcnQgRm9vdGVyVmlldyBmcm9tICcuL2Zvb3Rlci9mb290ZXJDb250ZW50Vmlldyc7XG5pbXBvcnQgQ3JlYXRlRWxlbWVudCBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvY3JlYXRlRWxlbWVudCc7XG5pbXBvcnQgTWFpbkNvbnRlbnRWaWV3IGZyb20gJy4vbWFpbi9tYWluQ29udGVudFZpZXcnO1xuXG5jbGFzcyBDaGF0Qm94VmlldyB7XG4gIHByaXZhdGUgaGVhZGVyVmlldzogSGVhZGVyVmlldztcblxuICBwcml2YXRlIG1haW5WaWV3OiBNYWluQ29udGVudFZpZXc7XG5cbiAgcHJpdmF0ZSBmb290ZXJWaWV3OiBGb290ZXJWaWV3O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaGVhZGVyVmlldyA9IG5ldyBIZWFkZXJWaWV3KCk7XG4gICAgdGhpcy5tYWluVmlldyA9IG5ldyBNYWluQ29udGVudFZpZXcoKTtcbiAgICB0aGlzLmZvb3RlclZpZXcgPSBuZXcgRm9vdGVyVmlldygpO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcigpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgY2hhdEJveCA9IHRoaXMuY3JlYXRlQ2hhdEJveCgpO1xuXG4gICAgcmV0dXJuIGNoYXRCb3g7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUNoYXRCb3goKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGNoYXRCb3ggPSBuZXcgQ3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgY2xhc3NOYW1lOiAnY2hhdC1ib3gnLFxuICAgIH0pLmNyZWF0ZUVsZW1lbnQoKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuaGVhZGVyVmlldy5yZW5kZXIoKTtcbiAgICBjb25zdCBtYWluID0gdGhpcy5tYWluVmlldy5yZW5kZXIoKTtcbiAgICBjb25zdCBmb290ZXIgPSB0aGlzLmZvb3RlclZpZXcucmVuZGVyKCk7XG5cbiAgICBjaGF0Qm94LmFwcGVuZChoZWFkZXIsIG1haW4sIGZvb3Rlcik7XG5cbiAgICByZXR1cm4gY2hhdEJveDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGF0Qm94VmlldztcbiIsImltcG9ydCBDcmVhdGVFbGVtZW50IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxpdGllcy9jcmVhdGVFbGVtZW50JztcbmltcG9ydCBDcmVhdGVMaW5rRWxlbWVudCBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvY3JlYXRlTGlua0VsZW1lbnQnO1xuaW1wb3J0IHtcbiAgR0lUSFVCX0xJTkssXG4gIFNDSE9PTF9MSU5LLFxuICBHSVRIVUJfTE9HT19TVFJJTkdfU1ZHX0VMRU1FTlQsXG4gIFNDSE9PTF9MT0dPX1NUUklOR19TVkdfRUxFTUVOVCxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vY29uc3RhbnRzL3BhZ2VzQ29uc3RhbnRzJztcblxuaW1wb3J0ICcuL2Zvb3Rlci5jc3MnO1xuXG5jbGFzcyBGb290ZXJDb250ZW50VmlldyB7XG4gIHB1YmxpYyByZW5kZXIoKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGZvb3RlckNvbnRlbnQgPSB0aGlzLmNyZWF0ZUZvb3RlckNvbnRlbnQoKTtcblxuICAgIHJldHVybiBmb290ZXJDb250ZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVGb290ZXJDb250ZW50KCkge1xuICAgIGNvbnN0IGZvb3RlckNvbnRlbnQgPSBuZXcgQ3JlYXRlRWxlbWVudCgnZm9vdGVyJywge1xuICAgICAgY2xhc3NOYW1lOiAnZm9vdGVyLWNvbnRlbnQnLFxuICAgIH0pLmNyZWF0ZUVsZW1lbnQoKTtcblxuICAgIGNvbnN0IHNjaG9vbExvZ28gPSB0aGlzLmNyZWF0ZVNjaG9vbExvZ29BbmRMaW5rKCk7XG4gICAgY29uc3QgeWVhck9mQXBwQ3JlYXRpb24gPSB0aGlzLmNyZWF0ZVllYXJPZkFwcENyZWF0aW9uKCk7XG4gICAgY29uc3QgZ2l0aHViTG9nbyA9IHRoaXMuY3JlYXRlR2l0aHViTG9nb0FuZExpbmsoKTtcblxuICAgIGZvb3RlckNvbnRlbnQuYXBwZW5kKHNjaG9vbExvZ28sIHllYXJPZkFwcENyZWF0aW9uLCBnaXRodWJMb2dvKTtcblxuICAgIHJldHVybiBmb290ZXJDb250ZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVTY2hvb2xMb2dvQW5kTGluaygpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3Qgc2Nob29sTG9nbyA9IG5ldyBDcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogJ3NjaG9vbC1sb2dvJyB9KS5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICBjb25zdCBzY2hvb2xMaW5rID0gbmV3IENyZWF0ZUxpbmtFbGVtZW50KHtcbiAgICAgIGhyZWY6IFNDSE9PTF9MSU5LLFxuICAgICAgdGFyZ2V0OiAnX2JsYW5rJyxcbiAgICAgIGNsYXNzTmFtZTogJ3NjaG9vbC1saW5rJyxcbiAgICAgIGlubmVySFRNTDogU0NIT09MX0xPR09fU1RSSU5HX1NWR19FTEVNRU5ULFxuICAgIH0pLmNyZWF0ZUVsZW1lbnQoKTtcblxuICAgIHNjaG9vbExvZ28uYXBwZW5kKHNjaG9vbExpbmspO1xuXG4gICAgcmV0dXJuIHNjaG9vbExvZ287XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUdpdGh1YkxvZ29BbmRMaW5rKCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBnaXRodWJMb2dvID0gbmV3IENyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiAnZ2l0aHViLWxvZ28nIH0pLmNyZWF0ZUVsZW1lbnQoKTtcblxuICAgIGNvbnN0IGdpdGh1YkxpbmsgPSBuZXcgQ3JlYXRlTGlua0VsZW1lbnQoe1xuICAgICAgaHJlZjogR0lUSFVCX0xJTkssXG4gICAgICB0YXJnZXQ6ICdfYmxhbmsnLFxuICAgICAgY2xhc3NOYW1lOiAnZ2l0aHViLWxpbmsnLFxuICAgICAgaW5uZXJIVE1MOiBHSVRIVUJfTE9HT19TVFJJTkdfU1ZHX0VMRU1FTlQsXG4gICAgfSkuY3JlYXRlRWxlbWVudCgpO1xuXG4gICAgZ2l0aHViTG9nby5hcHBlbmQoZ2l0aHViTGluayk7XG5cbiAgICByZXR1cm4gZ2l0aHViTG9nbztcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlWWVhck9mQXBwQ3JlYXRpb24oKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHllYXJPZkFwcENyZWF0aW9uID0gbmV3IENyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnY3JlYXRpb24teWVhcicsXG4gICAgICB9LFxuICAgICAgJzIwMjQnXG4gICAgKS5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICByZXR1cm4geWVhck9mQXBwQ3JlYXRpb247XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEZvb3RlckNvbnRlbnRWaWV3O1xuIiwiaW1wb3J0IENyZWF0ZUVsZW1lbnQgZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2NyZWF0ZUVsZW1lbnQnO1xuaW1wb3J0IExvZ291dEJ1dHRvbkNvbnRyb2xsZXIgZnJvbSAnLi4vLi4vLi4vLi4vY29udHJvbGxlci9idXR0b25Db250cm9sbGVycy9sb2dvdXRCdXR0b25Db250cm9sbGVyL2xvZ291dEJ1dHRvbkNvbnRyb2xsZXInO1xuaW1wb3J0IEFib3V0SWNvbkNvbnRyb2xsZXIgZnJvbSAnLi4vLi4vLi4vLi4vY29udHJvbGxlci9hYm91dEljb25Db250cm9sbGVyL2Fib3V0SWNvbkNvbnRyb2xsZXInO1xuaW1wb3J0IHtcbiAgQUJPVVRfSUNPTl9TVFJJTkdfU1ZHX0VMRU1FTlQsXG4gIFVTRVJfSUNPTl9TVFJJTkdfU1ZHX0VMRU1FTlQsXG4gIEFQUF9OQU1FLFxufSBmcm9tICcuLi8uLi8uLi8uLi9jb25zdGFudHMvcGFnZXNDb25zdGFudHMnO1xuXG5pbXBvcnQgJy4vaGVhZGVyLmNzcyc7XG5cbmNsYXNzIEhlYWRlckNvbnRlbnRWaWV3IHtcbiAgcHJpdmF0ZSBsb2dvdXRCdXR0b25Db250cm9sbGVyOiBMb2dvdXRCdXR0b25Db250cm9sbGVyID0gbmV3IExvZ291dEJ1dHRvbkNvbnRyb2xsZXIoKTtcblxuICBwcml2YXRlIEFib3V0SWNvbkNvbnRyb2xsZXI6IEFib3V0SWNvbkNvbnRyb2xsZXIgPSBuZXcgQWJvdXRJY29uQ29udHJvbGxlcigpO1xuXG4gIHB1YmxpYyByZW5kZXIoKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGhlYWRlckNvbnRlbnQgPSB0aGlzLmNyZWF0ZUhlYWRlckNvbnRlbnQoKTtcblxuICAgIHRoaXMubG9nb3V0QnV0dG9uQ29udHJvbGxlci5hZGRMb2dvdXRCdXR0b25FdmVudExpc3RlbmVyKGhlYWRlckNvbnRlbnQpO1xuICAgIHRoaXMuQWJvdXRJY29uQ29udHJvbGxlci5hZGRDaGF0QWJvdXRJY29uRXZlbnRMaXN0ZW5lcihoZWFkZXJDb250ZW50KTtcblxuICAgIHJldHVybiBoZWFkZXJDb250ZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVIZWFkZXJDb250ZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBoZWFkZXJDb250ZW50ID0gbmV3IENyZWF0ZUVsZW1lbnQoJ2hlYWRlcicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ2hlYWRlci1jb250ZW50JyxcbiAgICB9KS5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICBjb25zdCBjdXJyZW50VXNlciA9IHRoaXMuY3JlYXRlQ3VycmVudFVzZXJEaXNwbGF5KCk7XG4gICAgY29uc3QgY3JlYXRlQXBwTmFtZSA9IHRoaXMuY3JlYXRlQXBwTmFtZSgpO1xuICAgIGNvbnN0IGFib3V0SWNvbiA9IHRoaXMuY3JlYXRlQWJvdXRJY29uKCk7XG4gICAgY29uc3QgbG9nb3V0QnV0dG9uID0gdGhpcy5jcmVhdGVMb2dvdXRCdXR0b24oKTtcblxuICAgIGhlYWRlckNvbnRlbnQuYXBwZW5kKGN1cnJlbnRVc2VyLCBhYm91dEljb24sIGNyZWF0ZUFwcE5hbWUsIGxvZ291dEJ1dHRvbik7XG5cbiAgICByZXR1cm4gaGVhZGVyQ29udGVudDtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlQ3VycmVudFVzZXJEaXNwbGF5KCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBjdXJyZW50VXNlckRpc3BsYXkgPSBuZXcgQ3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgY2xhc3NOYW1lOiAnY3VycmVudC11c2VyJyxcbiAgICB9KS5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICBjb25zdCBjdXJyZW50VXNlckljb24gPSBuZXcgQ3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd1c2VyLWljb24nLFxuICAgICAgfSxcbiAgICAgIFVTRVJfSUNPTl9TVFJJTkdfU1ZHX0VMRU1FTlRcbiAgICApLmNyZWF0ZUVsZW1lbnQoKTtcblxuICAgIGNvbnN0IGN1cnJlbnRVc2VyTmFtZSA9IG5ldyBDcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICBjbGFzc05hbWU6ICdjdXJyZW50LXVzZXJOYW1lJyxcbiAgICB9KS5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICBjdXJyZW50VXNlckRpc3BsYXkuYXBwZW5kKGN1cnJlbnRVc2VySWNvbiwgY3VycmVudFVzZXJOYW1lKTtcblxuICAgIHJldHVybiBjdXJyZW50VXNlckRpc3BsYXk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUFwcE5hbWUoKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGFwcE5hbWUgPSBuZXcgQ3JlYXRlRWxlbWVudCgncCcsIHsgY2xhc3NOYW1lOiAnYXBwLW5hbWUnIH0sIEFQUF9OQU1FKS5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICByZXR1cm4gYXBwTmFtZTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlQWJvdXRJY29uKCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBhYm91dEljb24gPSBuZXcgQ3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6ICdjaGF0LWFib3V0LWljb24nIH0sXG4gICAgICBBQk9VVF9JQ09OX1NUUklOR19TVkdfRUxFTUVOVFxuICAgICkuY3JlYXRlRWxlbWVudCgpO1xuXG4gICAgcmV0dXJuIGFib3V0SWNvbjtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlTG9nb3V0QnV0dG9uKCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBsb2dvdXRCdXR0b24gPSBuZXcgQ3JlYXRlRWxlbWVudChcbiAgICAgICdidXR0b24nLFxuICAgICAgeyBjbGFzc05hbWU6ICdsb2dvdXQtYnRuJyB9LFxuICAgICAgJ0xvZ291dCdcbiAgICApLmNyZWF0ZUVsZW1lbnQoKTtcblxuICAgIHJldHVybiBsb2dvdXRCdXR0b247XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyQ29udGVudFZpZXc7XG4iLCJpbXBvcnQgeyBEaWFsb2d1ZU5vdGlmaWNhdGlvbnMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb25zdGFudHMvY2hhdFBhZ2VDb25zdGFudHMnO1xuaW1wb3J0IENoYXRDb250cm9sbGVyIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbnRyb2xsZXIvY2hhdENvbnRyb2xsZXIvY2hhdENvbnRyb2xsZXInO1xuaW1wb3J0IENyZWF0ZUVsZW1lbnQgZnJvbSAnLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2NyZWF0ZUVsZW1lbnQnO1xuaW1wb3J0IFNlbmRNZXNzYWdlRm9ybVZpZXcgZnJvbSAnLi9zZW5kTWVzc2FnZUZvcm0vc2VuZE1lc3NhZ2VGb3JtVmlldyc7XG5cbmNsYXNzIENoYXRWaWV3IHtcbiAgc2VuZEZvcm06IFNlbmRNZXNzYWdlRm9ybVZpZXcgPSBuZXcgU2VuZE1lc3NhZ2VGb3JtVmlldygpO1xuXG4gIGNoYXRDb250cm9sbGVyOiBDaGF0Q29udHJvbGxlciA9IG5ldyBDaGF0Q29udHJvbGxlcigpO1xuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgY29uc3QgY2hhdCA9IHRoaXMuY3JlYXRlQ2hhdCgpO1xuXG4gICAgdGhpcy5jaGF0Q29udHJvbGxlci5hZGRDaGF0RXZlbnRMaXN0ZW5lcihjaGF0KTtcblxuICAgIHJldHVybiBjaGF0O1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVDaGF0KCkge1xuICAgIGNvbnN0IGNoYXQgPSBuZXcgQ3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzc05hbWU6ICdjaGF0JyB9KS5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICBjb25zdCBkaWFsb2d1ZUhlYWRlciA9IHRoaXMuY3JlYXRlRGlhbG9ndWVIZWFkZXIoKTtcblxuICAgIGNvbnN0IGRpYWxvZ3VlQm94ID0gbmV3IENyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiAnZGlhbG9ndWUtYm94JyB9KS5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICBjb25zdCBub3RpZmljYXRpb24gPSBuZXcgQ3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdkaWFsb2d1ZS1ib3gtbm90aWZpY2F0aW9uJyxcbiAgICAgIH0sXG4gICAgICBEaWFsb2d1ZU5vdGlmaWNhdGlvbnMuU0VMRUNUX1VTRVJfTk9USUZJQ0FUSU9OXG4gICAgKS5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICBjb25zdCBzZW5kRm9ybSA9IHRoaXMuc2VuZEZvcm0ucmVuZGVyKCk7XG5cbiAgICBkaWFsb2d1ZUJveC5hcHBlbmQobm90aWZpY2F0aW9uKTtcbiAgICBjaGF0LmFwcGVuZChkaWFsb2d1ZUhlYWRlciwgZGlhbG9ndWVCb3gsIHNlbmRGb3JtKTtcblxuICAgIHJldHVybiBjaGF0O1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVEaWFsb2d1ZUhlYWRlcigpIHtcbiAgICBjb25zdCBkaWFsb2d1ZUJveEhlYWRlciA9IG5ldyBDcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICBjbGFzc05hbWU6ICdkaWFsb2d1ZS1ib3gtaGVhZGVyJyxcbiAgICB9KS5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICBjb25zdCB1c2VyTmFtZSA9IG5ldyBDcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICBjbGFzc05hbWU6ICd1c2VyLW5hbWUnLFxuICAgIH0pLmNyZWF0ZUVsZW1lbnQoKTtcblxuICAgIGNvbnN0IHVzZXJTdGF0dXMgPSBuZXcgQ3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgY2xhc3NOYW1lOiAndXNlci1zdGF0dXMnLFxuICAgIH0pLmNyZWF0ZUVsZW1lbnQoKTtcblxuICAgIGRpYWxvZ3VlQm94SGVhZGVyLmFwcGVuZCh1c2VyTmFtZSwgdXNlclN0YXR1cyk7XG5cbiAgICByZXR1cm4gZGlhbG9ndWVCb3hIZWFkZXI7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlV3JpdGVGaXJzdE1lc3NhZ2VOb3RpZmljYXRpb24oKTogdm9pZCB7XG4gICAgY29uc3QgZGlhbG9ndWVCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9ndWUtYm94JykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICBjb25zdCBub3RpZmljYXRpb24gPSBuZXcgQ3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdkaWFsb2d1ZS1ib3gtbm90aWZpY2F0aW9uJyxcbiAgICAgIH0sXG4gICAgICBEaWFsb2d1ZU5vdGlmaWNhdGlvbnMuV1JJVEVfRklSU1RfTUVTU0FHRV9OT1RJRklDQVRJT05cbiAgICApLmNyZWF0ZUVsZW1lbnQoKTtcblxuICAgIGRpYWxvZ3VlQm94LmFwcGVuZChub3RpZmljYXRpb24pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXRWaWV3O1xuIiwiaW1wb3J0IHsgVXNlck1lc3NhZ2VGcm9tU2VydmVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBpL2FwaS5pbnRlcmZhY2VzJztcbmltcG9ydCB7XG4gIERFTEVURV9JQ09OLFxuICBNZXNzYWdlU3RhdHVzZXNJY29ucyxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29uc3RhbnRzL2NoYXRQYWdlQ29uc3RhbnRzJztcbmltcG9ydCBEZWxldGVNZXNzYWdlQnV0dG9uQ29udHJvbGxlciBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb250cm9sbGVyL2J1dHRvbkNvbnRyb2xsZXJzL2RlbGV0ZU1lc3NhZ2VCdXR0b25Db250cm9sbGVyL2RlbGV0ZU1lc3NhZ2VCdXR0b25Db250cm9sbGVyJztcbmltcG9ydCBDcmVhdGVFbGVtZW50IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9jcmVhdGVFbGVtZW50JztcblxuY2xhc3MgTWVzc2FnZUl0ZW1WaWV3IHtcbiAgcHJpdmF0ZSBkZWxldGVNZXNzYWdlQnV0dG9uQ29udHJvbGxlcjogRGVsZXRlTWVzc2FnZUJ1dHRvbkNvbnRyb2xsZXIgPVxuICAgIG5ldyBEZWxldGVNZXNzYWdlQnV0dG9uQ29udHJvbGxlcigpO1xuXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IFVzZXJNZXNzYWdlRnJvbVNlcnZlciwgY2FtZUZyb206IHN0cmluZykge1xuICAgIGNvbnN0IGRpYWxvZ3VlQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpYWxvZ3VlLWJveCcpIGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IG1lc3NhZ2VJdGVtID0gdGhpcy5jcmVhdGVNZXNzYWdlSXRlbShtZXNzYWdlLCBjYW1lRnJvbSk7XG5cbiAgICBpZiAoZGlhbG9ndWVCb3gpIHtcbiAgICAgIGRpYWxvZ3VlQm94LmFwcGVuZChtZXNzYWdlSXRlbSk7XG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGxEaWFsb2d1ZUJveFRvTGFzdE1lc3NhZ2UoZGlhbG9ndWVCb3gpO1xuICB9XG5cbiAgcHJpdmF0ZSBzY3JvbGxEaWFsb2d1ZUJveFRvTGFzdE1lc3NhZ2UoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnRhaW5lci5zY3JvbGxUb3AgPSBjb250YWluZXIuc2Nyb2xsSGVpZ2h0O1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVNZXNzYWdlSXRlbShtZXNzYWdlOiBVc2VyTWVzc2FnZUZyb21TZXJ2ZXIsIGNhbWVGcm9tOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgbWVzc2FnZUl0ZW0gPSBuZXcgQ3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgY2xhc3NOYW1lOiBgbWVzc2FnZSAke2NhbWVGcm9tfWAsXG4gICAgICBpZDogbWVzc2FnZS5pZCxcbiAgICB9KS5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICBjb25zdCBmcm9tID0gdGhpcy5jcmVhdGVGcm9tRWxlbWVudChjYW1lRnJvbSwgbWVzc2FnZSk7XG4gICAgY29uc3QgZGF0ZVRpbWUgPSB0aGlzLmNyZWF0ZURhdGVUaW1lRWxlbWVudChtZXNzYWdlKTtcbiAgICBjb25zdCBtZXNzYWdlVGV4dCA9IHRoaXMuY3JlYXRlTWVzc2FnZVRleHRFbGVtZW50KG1lc3NhZ2UpO1xuICAgIGNvbnN0IG1lc3NhZ2VFZGl0ZWRTdGF0dXMgPSB0aGlzLmNyZWF0ZU1lc3NhZ2VFZGl0ZWRTdGF0dXNFbGVtZW50KG1lc3NhZ2UpO1xuICAgIGNvbnN0IG1lc3NhZ2VEZWxpdmVyZWRTdGF0dXMgPSB0aGlzLmNyZWF0ZU1lc3NhZ2VEZWxpdmVyZWRTdGF0dXNFbGVtZW50KG1lc3NhZ2UpO1xuICAgIGNvbnN0IGRlbGV0ZU1lc3NhZ2VCdXR0b24gPSB0aGlzLmNyZWF0ZURlbGV0ZU1lc3NhZ2VCdXR0b25FbGVtZW50KG1lc3NhZ2UpO1xuXG4gICAgaWYgKGNhbWVGcm9tID09PSAnY3VycmVudC11c2VyJykge1xuICAgICAgbWVzc2FnZUl0ZW0uYXBwZW5kKFxuICAgICAgICBmcm9tLFxuICAgICAgICBkYXRlVGltZSxcbiAgICAgICAgbWVzc2FnZVRleHQsXG4gICAgICAgIG1lc3NhZ2VFZGl0ZWRTdGF0dXMsXG4gICAgICAgIG1lc3NhZ2VEZWxpdmVyZWRTdGF0dXMsXG4gICAgICAgIGRlbGV0ZU1lc3NhZ2VCdXR0b25cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2VJdGVtLmFwcGVuZChmcm9tLCBkYXRlVGltZSwgbWVzc2FnZVRleHQsIG1lc3NhZ2VFZGl0ZWRTdGF0dXMpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlSXRlbTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRnJvbUVsZW1lbnQoY2FtZUZyb206IHN0cmluZywgbWVzc2FnZTogVXNlck1lc3NhZ2VGcm9tU2VydmVyKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGZyb20gPSBuZXcgQ3JlYXRlRWxlbWVudChcbiAgICAgICdwJyxcbiAgICAgIHsgY2xhc3NOYW1lOiAnbWVzc2FnZS1mcm9tJyB9LFxuICAgICAgYCR7Y2FtZUZyb20gPT09ICdjdXJyZW50LXVzZXInID8gJ1lvdScgOiBtZXNzYWdlLmZyb219YFxuICAgICkuY3JlYXRlRWxlbWVudCgpO1xuXG4gICAgcmV0dXJuIGZyb207XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZURhdGVUaW1lRWxlbWVudChtZXNzYWdlOiBVc2VyTWVzc2FnZUZyb21TZXJ2ZXIpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgZm9ybWF0dGVkRGF0ZVRpbWUgPSB0aGlzLmZvcm1hdERhdGVUaW1lKG1lc3NhZ2UuZGF0ZXRpbWUpO1xuICAgIGNvbnN0IGRhdGVUaW1lID0gbmV3IENyZWF0ZUVsZW1lbnQoXG4gICAgICAncCcsXG4gICAgICB7IGNsYXNzTmFtZTogJ21lc3NhZ2UtZGF0ZVRpbWUnIH0sXG4gICAgICBgJHtmb3JtYXR0ZWREYXRlVGltZX1gXG4gICAgKS5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICByZXR1cm4gZGF0ZVRpbWU7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZU1lc3NhZ2VUZXh0RWxlbWVudChtZXNzYWdlOiBVc2VyTWVzc2FnZUZyb21TZXJ2ZXIpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgbWVzc2FnZVRleHQgPSBuZXcgQ3JlYXRlRWxlbWVudChcbiAgICAgICdwJyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWVzc2FnZS10ZXh0JyxcbiAgICAgIH0sXG4gICAgICBtZXNzYWdlLnRleHRcbiAgICApLmNyZWF0ZUVsZW1lbnQoKTtcblxuICAgIHJldHVybiBtZXNzYWdlVGV4dDtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlTWVzc2FnZUVkaXRlZFN0YXR1c0VsZW1lbnQobWVzc2FnZTogVXNlck1lc3NhZ2VGcm9tU2VydmVyKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IG1lc3NhZ2VFZGl0ZWRTdGF0dXMgPSBuZXcgQ3JlYXRlRWxlbWVudChcbiAgICAgICdwJyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWVzc2FnZS1lZGl0ZWQtc3RhdHVzJyxcbiAgICAgIH0sXG4gICAgICBtZXNzYWdlLnN0YXR1cy5pc0VkaXRlZCA/ICdlZGl0ZWQnIDogJydcbiAgICApLmNyZWF0ZUVsZW1lbnQoKTtcblxuICAgIHJldHVybiBtZXNzYWdlRWRpdGVkU3RhdHVzO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVNZXNzYWdlRGVsaXZlcmVkU3RhdHVzRWxlbWVudChtZXNzYWdlOiBVc2VyTWVzc2FnZUZyb21TZXJ2ZXIpOiBIVE1MRWxlbWVudCB7XG4gICAgbGV0IGRlbGl2ZXJlZFN0YXR1c0ljb24gPSAnJztcbiAgICBpZiAobWVzc2FnZS5zdGF0dXMuaXNSZWFkZWQpIHtcbiAgICAgIGRlbGl2ZXJlZFN0YXR1c0ljb24gPSBNZXNzYWdlU3RhdHVzZXNJY29ucy5SRUFERUQ7XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLnN0YXR1cy5pc0RlbGl2ZXJlZCkge1xuICAgICAgZGVsaXZlcmVkU3RhdHVzSWNvbiA9IE1lc3NhZ2VTdGF0dXNlc0ljb25zLkRFTElWRVJFRDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsaXZlcmVkU3RhdHVzSWNvbiA9IE1lc3NhZ2VTdGF0dXNlc0ljb25zLlNFTlQ7XG4gICAgfVxuXG4gICAgY29uc3QgbWVzc2FnZURlbGl2ZXJlZFN0YXR1cyA9IG5ldyBDcmVhdGVFbGVtZW50KFxuICAgICAgJ3AnLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXNzYWdlLWRlbGl2ZXJlZC1zdGF0dXMnLFxuICAgICAgfSxcbiAgICAgIGRlbGl2ZXJlZFN0YXR1c0ljb25cbiAgICApLmNyZWF0ZUVsZW1lbnQoKTtcblxuICAgIHJldHVybiBtZXNzYWdlRGVsaXZlcmVkU3RhdHVzO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVEZWxldGVNZXNzYWdlQnV0dG9uRWxlbWVudChtZXNzYWdlOiBVc2VyTWVzc2FnZUZyb21TZXJ2ZXIpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgZGVsZXRlTWVzc2FnZUJ1dHRvbiA9IG5ldyBDcmVhdGVFbGVtZW50KFxuICAgICAgJ2J1dHRvbicsXG4gICAgICB7IGNsYXNzTmFtZTogJ2RlbGV0ZS1idG4nLCBpZDogYGRlbGV0ZUJ0bi0ke21lc3NhZ2UuaWR9YCB9LFxuICAgICAgREVMRVRFX0lDT05cbiAgICApLmNyZWF0ZUVsZW1lbnQoKTtcbiAgICB0aGlzLmRlbGV0ZU1lc3NhZ2VCdXR0b25Db250cm9sbGVyLmFkZERlbGV0ZU1lc3NhZ2VCdXR0b25FdmVudExpc3RlbmVyKGRlbGV0ZU1lc3NhZ2VCdXR0b24pO1xuXG4gICAgcmV0dXJuIGRlbGV0ZU1lc3NhZ2VCdXR0b247XG4gIH1cblxuICBwcml2YXRlIGZvcm1hdERhdGVUaW1lKGRhdGV0aW1lOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRldGltZSk7XG5cbiAgICBjb25zdCBmb3JtYXR0ZWREYXRlVGltZSA9IGAke1N0cmluZyhkYXRlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKX0uJHtTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKX0uJHtkYXRlLmdldEZ1bGxZZWFyKCl9LCAke1N0cmluZyhkYXRlLmdldEhvdXJzKCkpLnBhZFN0YXJ0KDIsICcwJyl9OiR7U3RyaW5nKGRhdGUuZ2V0TWludXRlcygpKS5wYWRTdGFydCgyLCAnMCcpfToke1N0cmluZyhkYXRlLmdldFNlY29uZHMoKSkucGFkU3RhcnQoMiwgJzAnKX1gO1xuXG4gICAgcmV0dXJuIGZvcm1hdHRlZERhdGVUaW1lO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VJdGVtVmlldztcbiIsImltcG9ydCB7IFVzZXJNZXNzYWdlRnJvbVNlcnZlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwaS9hcGkuaW50ZXJmYWNlcyc7XG5pbXBvcnQgQ3JlYXRlRWxlbWVudCBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvY3JlYXRlRWxlbWVudCc7XG5cbmNsYXNzIE5ld01lc3NhZ2VzTGluZSB7XG4gIGNvbnN0cnVjdG9yKGZpcnN0VW5yZWFkTWVzc2FnZTogVXNlck1lc3NhZ2VGcm9tU2VydmVyKSB7XG4gICAgY29uc3QgZGlhbG9ndWVCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9ndWUtYm94JykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICBjb25zdCB1bnJlYWRNZXNzYWdlID0gZGlhbG9ndWVCb3gucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbaWQ9XCIke2ZpcnN0VW5yZWFkTWVzc2FnZS5pZH1cIl1gXG4gICAgKSBhcyBIVE1MRWxlbWVudDtcblxuICAgIGlmICghdW5yZWFkTWVzc2FnZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld01lc3NhZ2VzTGluZSA9IHRoaXMuY3JlYXRlTmV3TWVzc2FnZXNMaW5lKCk7XG5cbiAgICBpZiAoZGlhbG9ndWVCb3gpIHtcbiAgICAgIGRpYWxvZ3VlQm94Lmluc2VydEJlZm9yZShuZXdNZXNzYWdlc0xpbmUsIHVucmVhZE1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHRoaXMuc2Nyb2xsRGlhbG9ndWVCb3hUb0xpbmUoZGlhbG9ndWVCb3gsIG5ld01lc3NhZ2VzTGluZSk7XG4gIH1cblxuICBwcml2YXRlIHNjcm9sbERpYWxvZ3VlQm94VG9MaW5lKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIGxpbmU6IEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3QgbGluZVBvc2l0aW9uID0gbGluZS5vZmZzZXRUb3A7XG5cbiAgICBjb250YWluZXIuc2Nyb2xsVG9wID0gbGluZVBvc2l0aW9uO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVOZXdNZXNzYWdlc0xpbmUoKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IG5ld01lc3NhZ2VzTGluZSA9IG5ldyBDcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ25ldy1tZXNzYWdlcy1saW5lJyxcbiAgICAgIH0sXG4gICAgICAnbmV3J1xuICAgICkuY3JlYXRlRWxlbWVudCgpO1xuXG4gICAgcmV0dXJuIG5ld01lc3NhZ2VzTGluZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXdNZXNzYWdlc0xpbmU7XG4iLCJpbXBvcnQgeyBTRU5EX0lDT05fU1RSSU5HX1NWR19FTEVNRU5UIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29uc3RhbnRzL2NoYXRQYWdlQ29uc3RhbnRzJztcbmltcG9ydCBTZW5kRm9ybUNvbnRyb2xsZXIgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29udHJvbGxlci9pbnB1dENvbnRyb2xsZXJzL3NlbmRGb3JtQ29udHJvbGxlci9zZW5kRm9ybUNvbnRyb2xsZXInO1xuaW1wb3J0IENyZWF0ZUVsZW1lbnQgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2NyZWF0ZUVsZW1lbnQnO1xuaW1wb3J0IENyZWF0ZUlucHV0RWxlbWVudCBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvY3JlYXRlSW5wdXRFbGVtZW50JztcblxuY2xhc3MgU2VuZE1lc3NhZ2VGb3JtVmlldyB7XG4gIHNlbmRGb3JtQ29udHJvbGxlcjogU2VuZEZvcm1Db250cm9sbGVyID0gbmV3IFNlbmRGb3JtQ29udHJvbGxlcigpO1xuXG4gIHB1YmxpYyByZW5kZXIoKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHNlbmRNZXNzYWdlRm9ybUNvbnRhaW5lciA9IHRoaXMuY3JlYXRlU2VuZE1lc3NhZ2VGb3JtQ29udGFpbmVyKCk7XG5cbiAgICB0aGlzLnNlbmRGb3JtQ29udHJvbGxlci5hZGRTZW5kRm9ybUV2ZW50TGlzdGVuZXJzKHNlbmRNZXNzYWdlRm9ybUNvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gc2VuZE1lc3NhZ2VGb3JtQ29udGFpbmVyO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVTZW5kTWVzc2FnZUZvcm1Db250YWluZXIoKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHNlbmRNZXNzYWdlRm9ybUNvbnRhaW5lciA9IG5ldyBDcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICBjbGFzc05hbWU6ICdzZW5kLWZvcm0tY29udGFpbmVyJyxcbiAgICB9KS5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICBjb25zdCBzZW5kTWVzc2FnZUZvcm0gPSB0aGlzLmNyZWF0ZVNlbmRNZXNzYWdlRm9ybSgpO1xuXG4gICAgc2VuZE1lc3NhZ2VGb3JtQ29udGFpbmVyLmFwcGVuZChzZW5kTWVzc2FnZUZvcm0pO1xuXG4gICAgcmV0dXJuIHNlbmRNZXNzYWdlRm9ybUNvbnRhaW5lcjtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlU2VuZE1lc3NhZ2VGb3JtKCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBzZW5kTWVzc2FnZUZvcm0gPSBuZXcgQ3JlYXRlRWxlbWVudCgnZm9ybScsIHtcbiAgICAgIGNsYXNzTmFtZTogJ3NlbmQtZm9ybScsXG4gICAgfSkuY3JlYXRlRWxlbWVudCgpIGFzIEhUTUxGb3JtRWxlbWVudDtcblxuICAgIGNvbnN0IGZvcm1TZW5kTWVzc2FnZUlucHV0ID0gbmV3IENyZWF0ZUlucHV0RWxlbWVudCh7XG4gICAgICBwbGFjZWhvbGRlcjogJ01lc3NhZ2UuLi4nLFxuICAgICAgY2xhc3NOYW1lOiBgaW5wdXQtc2VuZGAsXG4gICAgfSkuY3JlYXRlRWxlbWVudCgpO1xuICAgIGZvcm1TZW5kTWVzc2FnZUlucHV0LmRpc2FibGVkID0gdHJ1ZTtcblxuICAgIGNvbnN0IHNlbmRCdXR0b24gPSBuZXcgQ3JlYXRlRWxlbWVudChcbiAgICAgICdidXR0b24nLFxuICAgICAgeyBjbGFzc05hbWU6ICdzZW5kLWJ0bicgfSxcbiAgICAgIFNFTkRfSUNPTl9TVFJJTkdfU1ZHX0VMRU1FTlRcbiAgICApLmNyZWF0ZUVsZW1lbnQoKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBzZW5kQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcblxuICAgIHNlbmRNZXNzYWdlRm9ybS5hcHBlbmQoZm9ybVNlbmRNZXNzYWdlSW5wdXQsIHNlbmRCdXR0b24pO1xuXG4gICAgcmV0dXJuIHNlbmRNZXNzYWdlRm9ybTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZW5kTWVzc2FnZUZvcm1WaWV3O1xuIiwiaW1wb3J0IENyZWF0ZUVsZW1lbnQgZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2NyZWF0ZUVsZW1lbnQnO1xuaW1wb3J0IFVzZXJzU2lkZWJhclZpZXcgZnJvbSAnLi91c2Vyc1NpZGViYXIvdXNlcnNTaWRlYmFyVmlldyc7XG5pbXBvcnQgQ2hhdFZpZXcgZnJvbSAnLi9jaGF0L2NoYXRWaWV3JztcblxuaW1wb3J0ICcuL2NoYXQuY3NzJztcblxuY2xhc3MgTWFpbkNvbnRlbnRWaWV3IHtcbiAgcHJpdmF0ZSB1c2Vyc1NpZGViYXJWaWV3OiBVc2Vyc1NpZGViYXJWaWV3O1xuXG4gIHByaXZhdGUgY2hhdFZpZXc6IENoYXRWaWV3O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudXNlcnNTaWRlYmFyVmlldyA9IG5ldyBVc2Vyc1NpZGViYXJWaWV3KCk7XG4gICAgdGhpcy5jaGF0VmlldyA9IG5ldyBDaGF0VmlldygpO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcigpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSB0aGlzLmNyZWF0ZU1haW5Db250ZW50KCk7XG5cbiAgICByZXR1cm4gbWFpbkNvbnRlbnQ7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZU1haW5Db250ZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBtYWluQ29udGVudCA9IG5ldyBDcmVhdGVFbGVtZW50KCdtYWluJywge1xuICAgICAgY2xhc3NOYW1lOiAnbWFpbi1jb250ZW50JyxcbiAgICB9KS5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICBjb25zdCB1c2Vyc1NpZGViYXIgPSB0aGlzLnVzZXJzU2lkZWJhclZpZXcucmVuZGVyKCk7XG4gICAgY29uc3QgY2hhdCA9IHRoaXMuY2hhdFZpZXcucmVuZGVyKCk7XG5cbiAgICBtYWluQ29udGVudC5hcHBlbmQodXNlcnNTaWRlYmFyLCBjaGF0KTtcblxuICAgIHJldHVybiBtYWluQ29udGVudDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluQ29udGVudFZpZXc7XG4iLCJpbXBvcnQgeyBTRUFSQ0hfSUNPTiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbnN0YW50cy9jaGF0UGFnZUNvbnN0YW50cyc7XG5pbXBvcnQgU2VhcmNoRm9ybUNvbnRyb2xsZXIgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29udHJvbGxlci9pbnB1dENvbnRyb2xsZXJzL3NlYXJjaEZvcm1Db250cm9sbGVyL3NlYXJjaEZvcm1Db250cm9sbGVyJztcbmltcG9ydCBDcmVhdGVFbGVtZW50IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9jcmVhdGVFbGVtZW50JztcbmltcG9ydCBDcmVhdGVJbnB1dEVsZW1lbnQgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2NyZWF0ZUlucHV0RWxlbWVudCc7XG5cbmNsYXNzIFNlYXJjaEZvcm1WaWV3IHtcbiAgcHJpdmF0ZSBzZWFyY2hGb3JtQ29udHJvbGxlcjogU2VhcmNoRm9ybUNvbnRyb2xsZXIgPSBuZXcgU2VhcmNoRm9ybUNvbnRyb2xsZXIoKTtcblxuICBwdWJsaWMgcmVuZGVyKCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBzZWFyY2hGb3JtQ29udGFpbmVyID0gdGhpcy5jcmVhdGVTZWFyY2hGb3JtQ29udGFpbmVyKCk7XG5cbiAgICB0aGlzLnNlYXJjaEZvcm1Db250cm9sbGVyLmFkZFNlYXJjaEZvcm1FdmVudExpc3RlbmVyKHNlYXJjaEZvcm1Db250YWluZXIpO1xuXG4gICAgcmV0dXJuIHNlYXJjaEZvcm1Db250YWluZXI7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVNlYXJjaEZvcm1Db250YWluZXIoKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHNlYXJjaEZvcm1Db250YWluZXIgPSBuZXcgQ3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgY2xhc3NOYW1lOiAnc2VhcmNoLWZvcm0tY29udGFpbmVyJyxcbiAgICB9KS5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICBjb25zdCBzZWFyY2hGb3JtID0gdGhpcy5jcmVhdGVTZWFyY2hGb3JtKCk7XG5cbiAgICBzZWFyY2hGb3JtQ29udGFpbmVyLmFwcGVuZChzZWFyY2hGb3JtKTtcblxuICAgIHJldHVybiBzZWFyY2hGb3JtQ29udGFpbmVyO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVTZWFyY2hGb3JtKCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBzZWFyY2hGb3JtID0gbmV3IENyZWF0ZUVsZW1lbnQoJ2Zvcm0nLCB7XG4gICAgICBjbGFzc05hbWU6ICdzZWFyY2gtZm9ybScsXG4gICAgfSkuY3JlYXRlRWxlbWVudCgpIGFzIEhUTUxGb3JtRWxlbWVudDtcblxuICAgIGNvbnN0IGZvcm1TZWFyY2hJbnB1dCA9IG5ldyBDcmVhdGVJbnB1dEVsZW1lbnQoe1xuICAgICAgcGxhY2Vob2xkZXI6IGAke1NFQVJDSF9JQ09OfSBTZWFyY2hgLFxuICAgICAgY2xhc3NOYW1lOiBgaW5wdXQtc2VhcmNoYCxcbiAgICB9KS5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICBzZWFyY2hGb3JtLmFwcGVuZChmb3JtU2VhcmNoSW5wdXQpO1xuXG4gICAgcmV0dXJuIHNlYXJjaEZvcm07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoRm9ybVZpZXc7XG4iLCJpbXBvcnQgeyBVc2VyRnJvbVNlcnZlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwaS9hcGkuaW50ZXJmYWNlcyc7XG5pbXBvcnQgVXNlckl0ZW1Db250cm9sbGVyIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbnRyb2xsZXIvdXNlckl0ZW1Db250cm9sbGVyL3VzZXJJdGVtQ29udHJvbGxlcic7XG5pbXBvcnQgQ3JlYXRlRWxlbWVudCBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvY3JlYXRlRWxlbWVudCc7XG5cbmNsYXNzIFVzZXJzTGlzdEl0ZW1WaWV3IHtcbiAgcHJpdmF0ZSB1c2VySXRlbUNvbnRyb2xsZXI6IFVzZXJJdGVtQ29udHJvbGxlciA9IG5ldyBVc2VySXRlbUNvbnRyb2xsZXIoKTtcblxuICBjb25zdHJ1Y3Rvcih1c2VyOiBVc2VyRnJvbVNlcnZlcikge1xuICAgIGNvbnN0IHVzZXJJdGVtID0gdGhpcy5jcmVhdGVVc2VySXRlbSh1c2VyLmxvZ2luLCB1c2VyLmlzTG9naW5lZCk7XG5cbiAgICBjb25zdCB1c2Vyc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2Vycy1jb250YWluZXInKSBhcyBIVE1MRWxlbWVudDtcblxuICAgIGlmICh1c2Vyc0NvbnRhaW5lcikge1xuICAgICAgaWYgKHVzZXIuaXNMb2dpbmVkKSB7XG4gICAgICAgIHVzZXJzQ29udGFpbmVyLnByZXBlbmQodXNlckl0ZW0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXNlcnNDb250YWluZXIuYXBwZW5kKHVzZXJJdGVtKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy51c2VySXRlbUNvbnRyb2xsZXIuYWRkVXNlckl0ZW1FdmVudExpc3RlbmVyKHVzZXJJdGVtLCB1c2VyKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVVzZXJJdGVtKGxvZ2luOiBzdHJpbmcsIHN0YXR1czogYm9vbGVhbik6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCB1c2VySXRlbSA9IG5ldyBDcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICBjbGFzc05hbWU6IGB1c2VyLWl0ZW0gdXNlci1pdGVtLSR7bG9naW59YCxcbiAgICB9KS5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICBjb25zdCB1c2VyTmFtZSA9IHRoaXMuY3JlYXRlVXNlckl0ZW1OYW1lKGxvZ2luKTtcbiAgICBjb25zdCBub3RpZmljYXRpb24gPSB0aGlzLmNyZWF0ZVVzZXJOb3RpZmljYXRpb24obG9naW4pO1xuICAgIGNvbnN0IHVzZXJTdGF0dXMgPSB0aGlzLmNyZWF0ZVVzZXJTdGF0dXMoc3RhdHVzKTtcblxuICAgIHVzZXJJdGVtLmFwcGVuZCh1c2VyTmFtZSwgbm90aWZpY2F0aW9uLCB1c2VyU3RhdHVzKTtcblxuICAgIHJldHVybiB1c2VySXRlbTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlVXNlckl0ZW1OYW1lKG5hbWU6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCB1c2VyTmFtZSA9IG5ldyBDcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogJ3VzZXItaXRlbS1uYW1lJyB9LFxuICAgICAgbmFtZVxuICAgICkuY3JlYXRlRWxlbWVudCgpO1xuXG4gICAgcmV0dXJuIHVzZXJOYW1lO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVVc2VyU3RhdHVzKHN0YXR1czogYm9vbGVhbik6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCB1c2VyU3RhdHVzID0gbmV3IENyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgIGNsYXNzTmFtZTogYHVzZXItaXRlbS1zdGF0dXMgJHtzdGF0dXN9YCxcbiAgICB9KS5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICByZXR1cm4gdXNlclN0YXR1cztcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlVXNlck5vdGlmaWNhdGlvbih1c2VyTmFtZTogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IG5ldyBDcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICBjbGFzc05hbWU6IGBub3RpZmljYXRpb24gbm90aWZpY2F0aW9uLSR7dXNlck5hbWV9YCxcbiAgICB9KS5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICByZXR1cm4gbm90aWZpY2F0aW9uO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJzTGlzdEl0ZW1WaWV3O1xuIiwiaW1wb3J0IENyZWF0ZUVsZW1lbnQgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2NyZWF0ZUVsZW1lbnQnO1xuXG5jbGFzcyBVc2Vyc0xpc3RWaWV3IHtcbiAgcHVibGljIHJlbmRlcigpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgdXNlcnNMaXN0Q29udGFpbmVyID0gdGhpcy5jcmVhdGVVc2Vyc0NvbnRhaW5lcigpO1xuXG4gICAgcmV0dXJuIHVzZXJzTGlzdENvbnRhaW5lcjtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlVXNlcnNDb250YWluZXIoKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHVzZXJzQ29udGFpbmVyID0gbmV3IENyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ3VzZXJzLWNvbnRhaW5lcicsXG4gICAgfSkuY3JlYXRlRWxlbWVudCgpO1xuXG4gICAgcmV0dXJuIHVzZXJzQ29udGFpbmVyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJzTGlzdFZpZXc7XG4iLCJpbXBvcnQgQ3JlYXRlRWxlbWVudCBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvY3JlYXRlRWxlbWVudCc7XG5pbXBvcnQgU2VhcmNoRm9ybVZpZXcgZnJvbSAnLi9zZWFyY2hGb3JtL3NlYXJjaEZvcm1WaWV3JztcbmltcG9ydCBVc2Vyc0xpc3RWaWV3IGZyb20gJy4vdXNlcnNMaXN0L3VzZXJzTGlzdFZpZXcnO1xuXG5jbGFzcyBVc2Vyc1NpZGViYXJWaWV3IHtcbiAgcHJpdmF0ZSBzZWFyY2hGb3JtVmlldzogU2VhcmNoRm9ybVZpZXc7XG5cbiAgcHJpdmF0ZSB1c2Vyc0xpc3RWaWV3OiBVc2Vyc0xpc3RWaWV3O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2VhcmNoRm9ybVZpZXcgPSBuZXcgU2VhcmNoRm9ybVZpZXcoKTtcbiAgICB0aGlzLnVzZXJzTGlzdFZpZXcgPSBuZXcgVXNlcnNMaXN0VmlldygpO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcigpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgdXNlcnNTaWRlYmFyID0gdGhpcy5jcmVhdGVVc2Vyc1NpZGViYXIoKTtcblxuICAgIHJldHVybiB1c2Vyc1NpZGViYXI7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVVzZXJzU2lkZWJhcigpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgdXNlcnNTaWRlYmFyID0gbmV3IENyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiAndXNlcnMtc2lkZWJhcicgfSkuY3JlYXRlRWxlbWVudCgpO1xuXG4gICAgY29uc3Qgc2VhcmNoRm9ybSA9IHRoaXMuc2VhcmNoRm9ybVZpZXcucmVuZGVyKCk7XG4gICAgY29uc3QgdXNlcnNMaXN0ID0gdGhpcy51c2Vyc0xpc3RWaWV3LnJlbmRlcigpO1xuXG4gICAgdXNlcnNTaWRlYmFyLmFwcGVuZChzZWFyY2hGb3JtLCB1c2Vyc0xpc3QpO1xuXG4gICAgcmV0dXJuIHVzZXJzU2lkZWJhcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2Vyc1NpZGViYXJWaWV3O1xuIiwiaW1wb3J0IHsgSUNoYXRQYWdlVmlldyB9IGZyb20gJy4vY2hhdFBhZ2UuaW50ZXJmYWNlJztcbmltcG9ydCBDcmVhdGVFbGVtZW50IGZyb20gJy4uLy4uL3V0aWxpdGllcy9jcmVhdGVFbGVtZW50JztcbmltcG9ydCBDaGF0Qm94VmlldyBmcm9tICcuL2NoYXRCb3gvY2hhdEJveFZpZXcnO1xuXG5pbXBvcnQgJy4vY2hhdFBhZ2UuY3NzJztcblxuY2xhc3MgQ2hhdFBhZ2VWaWV3IGltcGxlbWVudHMgSUNoYXRQYWdlVmlldyB7XG4gIHByaXZhdGUgY29udGFpbmVyOiBIVE1MRWxlbWVudDtcblxuICBwcml2YXRlIGNoYXRCb3hWaWV3OiBDaGF0Qm94VmlldztcblxuICBjb25zdHJ1Y3Rvcihjb250YWluZXJJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBuZXcgQ3JlYXRlRWxlbWVudCgnZGl2JywgeyBpZDogY29udGFpbmVySWQgfSkuY3JlYXRlRWxlbWVudCgpO1xuXG4gICAgdGhpcy5jaGF0Qm94VmlldyA9IG5ldyBDaGF0Qm94VmlldygpO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcigpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgY2hhdEJveCA9IHRoaXMuY2hhdEJveFZpZXcucmVuZGVyKCk7XG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQoY2hhdEJveCk7XG5cbiAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhdFBhZ2VWaWV3O1xuIiwiaW1wb3J0IHtcbiAgQUJPVVRfSUNPTl9TVFJJTkdfU1ZHX0VMRU1FTlQsXG4gIFVTRVJfSUNPTl9TVFJJTkdfU1ZHX0VMRU1FTlQsXG59IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cy9wYWdlc0NvbnN0YW50cyc7XG5pbXBvcnQgQWJvdXRJY29uQ29udHJvbGxlciBmcm9tICcuLi8uLi8uLi9jb250cm9sbGVyL2Fib3V0SWNvbkNvbnRyb2xsZXIvYWJvdXRJY29uQ29udHJvbGxlcic7XG5pbXBvcnQgTG9naW5Gb3JtQ29udHJvbGxlciBmcm9tICcuLi8uLi8uLi9jb250cm9sbGVyL2lucHV0Q29udHJvbGxlcnMvbG9naW5Gb3JtQ29udHJvbGxlci9sb2dpbkZvcm1Db250cm9sbGVyJztcbmltcG9ydCBDcmVhdGVFbGVtZW50IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9jcmVhdGVFbGVtZW50JztcbmltcG9ydCBDcmVhdGVJbnB1dEVsZW1lbnQgZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL2NyZWF0ZUlucHV0RWxlbWVudCc7XG5cbmNsYXNzIExvZ2luRm9ybVZpZXcge1xuICBwcml2YXRlIGxvZ2luRm9ybUNvbnRyb2xsZXI6IExvZ2luRm9ybUNvbnRyb2xsZXIgPSBuZXcgTG9naW5Gb3JtQ29udHJvbGxlcigpO1xuXG4gIHByaXZhdGUgYWJvdXRJY29uQ29udHJvbGxlcjogQWJvdXRJY29uQ29udHJvbGxlciA9IG5ldyBBYm91dEljb25Db250cm9sbGVyKCk7XG5cbiAgcHVibGljIHJlbmRlcigpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgbG9naW5Gb3JtQ29udGFpbmVyID0gdGhpcy5jcmVhdGVMb2dpbkZvcm1Db250YWluZXIoKTtcblxuICAgIHRoaXMubG9naW5Gb3JtQ29udHJvbGxlci5hZGRMb2dpbkZvcm1FdmVudExpc3RlbmVycyhsb2dpbkZvcm1Db250YWluZXIpO1xuICAgIHRoaXMuYWJvdXRJY29uQ29udHJvbGxlci5hZGRMb2dpbkFib3V0SWNvbkV2ZW50TGlzdGVuZXIobG9naW5Gb3JtQ29udGFpbmVyKTtcblxuICAgIHJldHVybiBsb2dpbkZvcm1Db250YWluZXI7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUxvZ2luRm9ybUNvbnRhaW5lcigpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgbG9naW5Gb3JtQ29udGFpbmVyID0gbmV3IENyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ2xvZ2luLWZvcm0tY29udGFpbmVyJyxcbiAgICB9KS5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICBjb25zdCBsb2dpbkZvcm0gPSB0aGlzLmNyZWF0ZUxvZ2luRm9ybSgpO1xuXG4gICAgbG9naW5Gb3JtQ29udGFpbmVyLmFwcGVuZChsb2dpbkZvcm0pO1xuXG4gICAgcmV0dXJuIGxvZ2luRm9ybUNvbnRhaW5lcjtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlTG9naW5Gb3JtKCk6IEhUTUxGb3JtRWxlbWVudCB7XG4gICAgY29uc3QgbG9naW5Gb3JtID0gbmV3IENyZWF0ZUVsZW1lbnQoJ2Zvcm0nLCB7XG4gICAgICBjbGFzc05hbWU6ICdsb2dpbi1mb3JtJyxcbiAgICB9KS5jcmVhdGVFbGVtZW50KCkgYXMgSFRNTEZvcm1FbGVtZW50O1xuXG4gICAgY29uc3QgdXNlckljb24gPSBuZXcgQ3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6ICd1c2VyLWljb24nIH0sXG4gICAgICBVU0VSX0lDT05fU1RSSU5HX1NWR19FTEVNRU5UXG4gICAgKS5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICBjb25zdCBhYm91dEljb24gPSBuZXcgQ3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6ICdhYm91dC1pY29uJyB9LFxuICAgICAgQUJPVVRfSUNPTl9TVFJJTkdfU1ZHX0VMRU1FTlRcbiAgICApLmNyZWF0ZUVsZW1lbnQoKTtcblxuICAgIGNvbnN0IGZvcm1MYWJlbFVzZXJOYW1lID0gdGhpcy5jcmVhdGVGb3JtTGFiZWwoXG4gICAgICAnVXNlcm5hbWU6JyxcbiAgICAgICd1c2VyTG9naW4nLFxuICAgICAgJ0VudGVyIHVzZXJuYW1lJyxcbiAgICAgICd0ZXh0J1xuICAgICk7XG5cbiAgICBjb25zdCBmb3JtTGFiZWxVc2VyUGFzc3dvcmQgPSB0aGlzLmNyZWF0ZUZvcm1MYWJlbChcbiAgICAgICdQYXNzd29yZDonLFxuICAgICAgJ3VzZXJQYXNzd29yZCcsXG4gICAgICAnRW50ZXIgcGFzc3dvcmQnLFxuICAgICAgJ3Bhc3N3b3JkJ1xuICAgICk7XG5cbiAgICBjb25zdCBsb2dpbkJ1dHRvbiA9IHRoaXMuY3JlYXRlTG9naW5CdXR0b24oKTtcblxuICAgIGxvZ2luRm9ybS5hcHBlbmQodXNlckljb24sIGFib3V0SWNvbik7XG4gICAgbG9naW5Gb3JtLmFwcGVuZChmb3JtTGFiZWxVc2VyTmFtZSwgZm9ybUxhYmVsVXNlclBhc3N3b3JkLCBsb2dpbkJ1dHRvbik7XG5cbiAgICByZXR1cm4gbG9naW5Gb3JtO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVGb3JtTGFiZWwoXG4gICAgbGFiZWxUZXh0OiBzdHJpbmcsXG4gICAgaW5wdXROYW1lOiBzdHJpbmcsXG4gICAgaW5wdXRQbGFjZWhvbGRlcjogc3RyaW5nLFxuICAgIGlucHV0VHlwZTogc3RyaW5nXG4gICk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBsYWJlbCA9IG5ldyBDcmVhdGVFbGVtZW50KFxuICAgICAgJ2xhYmVsJyxcbiAgICAgIHsgY2xhc3NOYW1lOiBgbGFiZWwtJHtpbnB1dE5hbWV9YCB9LFxuICAgICAgbGFiZWxUZXh0XG4gICAgKS5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICBjb25zdCBpbnB1dCA9IG5ldyBDcmVhdGVJbnB1dEVsZW1lbnQoe1xuICAgICAgcGxhY2Vob2xkZXI6IGlucHV0UGxhY2Vob2xkZXIsXG4gICAgICB0eXBlOiBpbnB1dFR5cGUsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIGNsYXNzTmFtZTogYGlucHV0LSR7aW5wdXROYW1lfWAsXG4gICAgfSkuY3JlYXRlRWxlbWVudCgpO1xuICAgIGlucHV0Lm1heExlbmd0aCA9IDEwO1xuXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gbmV3IENyZWF0ZUVsZW1lbnQoXG4gICAgICAncCcsXG4gICAgICB7IGNsYXNzTmFtZTogYGVycm9yLW1lc3NhZ2UtJHtpbnB1dE5hbWV9YCB9LFxuICAgICAgJyAnXG4gICAgKS5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICBsYWJlbC5hcHBlbmQoZXJyb3JNZXNzYWdlLCBpbnB1dCk7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUxvZ2luQnV0dG9uKCk6IEhUTUxCdXR0b25FbGVtZW50IHtcbiAgICBjb25zdCBsb2dpbkJ1dHRvbiA9IG5ldyBDcmVhdGVFbGVtZW50KFxuICAgICAgJ2J1dHRvbicsXG4gICAgICB7IGNsYXNzTmFtZTogJ2xvZ2luLWJ0bicgfSxcbiAgICAgICdMb2dpbidcbiAgICApLmNyZWF0ZUVsZW1lbnQoKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBsb2dpbkJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gbG9naW5CdXR0b247XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtVmlldztcbiIsImltcG9ydCB7IElMb2dpblBhZ2VWaWV3IH0gZnJvbSAnLi9sb2dpblBhZ2UuaW50ZXJmYWNlJztcbmltcG9ydCBDcmVhdGVFbGVtZW50IGZyb20gJy4uLy4uL3V0aWxpdGllcy9jcmVhdGVFbGVtZW50JztcbmltcG9ydCBMb2dpbkZvcm1WaWV3IGZyb20gJy4vbG9naW5Gb3JtL2xvZ2luRm9ybVZpZXcnO1xuXG5pbXBvcnQgJy4vbG9naW5QYWdlLmNzcyc7XG5cbmNsYXNzIExvZ2luUGFnZVZpZXcgaW1wbGVtZW50cyBJTG9naW5QYWdlVmlldyB7XG4gIHByaXZhdGUgY29udGFpbmVyOiBIVE1MRWxlbWVudDtcblxuICBwcml2YXRlIGxvZ2luRm9ybVZpZXc6IExvZ2luRm9ybVZpZXc7XG5cbiAgY29uc3RydWN0b3IoY29udGFpbmVySWQ6IHN0cmluZykge1xuICAgIHRoaXMuY29udGFpbmVyID0gbmV3IENyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgaWQ6IGNvbnRhaW5lcklkIH0pLmNyZWF0ZUVsZW1lbnQoKTtcblxuICAgIHRoaXMubG9naW5Gb3JtVmlldyA9IG5ldyBMb2dpbkZvcm1WaWV3KCk7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBsb2dpbkZvcm1Db250YWluZXIgPSB0aGlzLmxvZ2luRm9ybVZpZXcucmVuZGVyKCk7XG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQobG9naW5Gb3JtQ29udGFpbmVyKTtcblxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpblBhZ2VWaWV3O1xuIiwiaW1wb3J0IENvbm5lY3Rpb25Qb3B1cCBmcm9tICcuL2Nvbm5lY3Rpb25Qb3B1cFZpZXcnO1xuXG5leHBvcnQgY29uc3QgQ29ubmVjdGlvblBvcFVwID0gbmV3IENvbm5lY3Rpb25Qb3B1cCgpO1xuIiwiaW1wb3J0IENyZWF0ZUVsZW1lbnQgZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL2NyZWF0ZUVsZW1lbnQnO1xuXG5pbXBvcnQgJy4vY29ubmVjdGlvblBvcHVwLmNzcyc7XG5cbmNsYXNzIENvbm5lY3Rpb25Qb3B1cCB7XG4gIHByaXZhdGUgcG9wdXA6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cbiAgcHVibGljIGluaXRpYWxpemUoKTogdm9pZCB7XG4gICAgdGhpcy5wb3B1cCA9IHRoaXMuY3JlYXRlUG9wdXBDb250YWluZXIoKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMucG9wdXApO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVQb3B1cENvbnRhaW5lcigpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgcG9wdXBDb250YWluZXIgPSBuZXcgQ3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgY2xhc3NOYW1lOiAnY29ubmVjdGlvbi1wb3B1cC1jb250YWluZXInLFxuICAgIH0pLmNyZWF0ZUVsZW1lbnQoKTtcblxuICAgIGNvbnN0IHBvcHVwID0gbmV3IENyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiAnY29ubmVjdGlvbi1wb3B1cCcgfSkuY3JlYXRlRWxlbWVudCgpO1xuXG4gICAgY29uc3QgbG9hZGVyV3JhcHBlciA9IG5ldyBDcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogJ2xvYWRlci13cmFwcGVyJyB9KS5jcmVhdGVFbGVtZW50KCk7XG4gICAgY29uc3QgbG9hZGVyID0gbmV3IENyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ2xvYWRlcicsXG4gICAgfSkuY3JlYXRlRWxlbWVudCgpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG5cbiAgICBjb25zdCBjb25uZWN0aW9uTWVzc2FnZSA9IG5ldyBDcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2Nvbm5lY3Rpb24tbWVzc2FnZScsXG4gICAgICB9LFxuICAgICAgJ0Nvbm5lY3Rpb24uLi4nXG4gICAgKS5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICBsb2FkZXJXcmFwcGVyLmFwcGVuZChsb2FkZXIpO1xuXG4gICAgcG9wdXAuYXBwZW5kKGxvYWRlcldyYXBwZXIsIGNvbm5lY3Rpb25NZXNzYWdlKTtcblxuICAgIHBvcHVwQ29udGFpbmVyLmFwcGVuZChwb3B1cCk7XG5cbiAgICByZXR1cm4gcG9wdXBDb250YWluZXI7XG4gIH1cblxuICBwdWJsaWMgb3BlbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wb3B1cCkge1xuICAgICAgdGhpcy5wb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjbG9zZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wb3B1cCkge1xuICAgICAgdGhpcy5wb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25uZWN0aW9uUG9wdXA7XG4iLCJpbXBvcnQgTG9naW5FcnJvclBvcHVwIGZyb20gJy4vbG9naW5FcnJvclBvcHVwVmlldyc7XG5cbmV4cG9ydCBjb25zdCBMb2dpbkVycm9yUG9wVXAgPSBuZXcgTG9naW5FcnJvclBvcHVwKCk7XG4iLCJpbXBvcnQgeyBDTE9TRV9JQ09OX1NUUklOR19TVkdfRUxFTUVOVCB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cy9wYWdlc0NvbnN0YW50cyc7XG5pbXBvcnQgQ3JlYXRlRWxlbWVudCBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvY3JlYXRlRWxlbWVudCc7XG5cbmltcG9ydCAnLi9sb2dpbkVycm9yUG9wdXAuY3NzJztcblxuY2xhc3MgTG9naW5FcnJvclBvcHVwIHtcbiAgcHJpdmF0ZSBwb3B1cDogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcblxuICBwdWJsaWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnBvcHVwID0gdGhpcy5jcmVhdGVQb3B1cENvbnRhaW5lcigpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5wb3B1cCk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVBvcHVwQ29udGFpbmVyKCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBwb3B1cENvbnRhaW5lciA9IG5ldyBDcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICBjbGFzc05hbWU6ICdsb2dpbi1lcnJvci1wb3B1cC1jb250YWluZXInLFxuICAgIH0pLmNyZWF0ZUVsZW1lbnQoKTtcblxuICAgIGNvbnN0IHBvcHVwID0gbmV3IENyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiAnbG9naW4tZXJyb3ItcG9wdXAnIH0pLmNyZWF0ZUVsZW1lbnQoKTtcblxuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IG5ldyBDcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICBjbGFzc05hbWU6ICdsb2dpbi1lcnJvci1tZXNzYWdlJyxcbiAgICB9KS5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IG5ldyBDcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2Nsb3NlLWJ0bicsXG4gICAgICB9LFxuICAgICAgQ0xPU0VfSUNPTl9TVFJJTkdfU1ZHX0VMRU1FTlRcbiAgICApLmNyZWF0ZUVsZW1lbnQoKTtcblxuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgcG9wdXAuYXBwZW5kKGNsb3NlQnV0dG9uLCBlcnJvck1lc3NhZ2UpO1xuXG4gICAgcG9wdXBDb250YWluZXIuYXBwZW5kKHBvcHVwKTtcblxuICAgIHJldHVybiBwb3B1cENvbnRhaW5lcjtcbiAgfVxuXG4gIHByaXZhdGUgc2V0RXJyb3JNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IHRoaXMucG9wdXA/LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbi1lcnJvci1tZXNzYWdlJykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICBlcnJvck1lc3NhZ2UuaW5uZXJIVE1MID0gbWVzc2FnZTtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBvcHVwKSB7XG4gICAgICB0aGlzLnNldEVycm9yTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhpcy5wb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjbG9zZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wb3B1cCkge1xuICAgICAgdGhpcy5wb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkVycm9yUG9wdXA7XG4iLCJleHBvcnQgY2xhc3MgQ3JlYXRlRWxlbWVudCB7XG4gIHB1YmxpYyB0YWc6IHN0cmluZztcblxuICBwdWJsaWMgaW5uZXJIVE1MPzogc3RyaW5nO1xuXG4gIHB1YmxpYyBhdHRyaWJ1dGVzPzoge1xuICAgIGNsYXNzTmFtZT86IHN0cmluZztcbiAgICBpZD86IHN0cmluZztcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcih0YWc6IHN0cmluZywgYXR0cmlidXRlcz86IHsgY2xhc3NOYW1lPzogc3RyaW5nOyBpZD86IHN0cmluZyB9LCBpbm5lckhUTUw/OiBzdHJpbmcpIHtcbiAgICB0aGlzLnRhZyA9IHRhZztcbiAgICB0aGlzLmF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzO1xuICAgIHRoaXMuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuICB9XG5cbiAgY3JlYXRlRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGhpcy50YWcpO1xuICAgIGlmICh0aGlzLmF0dHJpYnV0ZXM/LmNsYXNzTmFtZSkge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSB0aGlzLmF0dHJpYnV0ZXMuY2xhc3NOYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5hdHRyaWJ1dGVzPy5pZCkge1xuICAgICAgZWxlbWVudC5pZCA9IHRoaXMuYXR0cmlidXRlcy5pZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuaW5uZXJIVE1MKSB7XG4gICAgICBlbGVtZW50LmlubmVySFRNTCA9IHRoaXMuaW5uZXJIVE1MO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZUVsZW1lbnQ7XG4iLCJpbXBvcnQgQ3JlYXRlRWxlbWVudCBmcm9tICcuL2NyZWF0ZUVsZW1lbnQnO1xuXG5jbGFzcyBDcmVhdGVJbnB1dEVsZW1lbnQgZXh0ZW5kcyBDcmVhdGVFbGVtZW50IHtcbiAgcHVibGljIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cbiAgcHVibGljIHR5cGU6IHN0cmluZztcblxuICBwdWJsaWMgcmVxdWlyZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczoge1xuICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICAgIHR5cGU/OiBzdHJpbmc7XG4gICAgcmVxdWlyZWQ/OiBib29sZWFuO1xuICAgIHRhcmdldD86IHN0cmluZztcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIH0pIHtcbiAgICBzdXBlcignaW5wdXQnLCBvcHRpb25zLmNsYXNzTmFtZSA/IHsgY2xhc3NOYW1lOiBvcHRpb25zLmNsYXNzTmFtZSB9IDogdW5kZWZpbmVkKTtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gb3B0aW9ucy5wbGFjZWhvbGRlciB8fCAnJztcbiAgICB0aGlzLnR5cGUgPSBvcHRpb25zLnR5cGUgfHwgJ3RleHQnO1xuICAgIHRoaXMucmVxdWlyZWQgPSBvcHRpb25zLnJlcXVpcmVkIHx8IGZhbHNlO1xuICB9XG5cbiAgY3JlYXRlRWxlbWVudCgpOiBIVE1MSW5wdXRFbGVtZW50IHtcbiAgICBjb25zdCBpbnB1dCA9IHN1cGVyLmNyZWF0ZUVsZW1lbnQoKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGlucHV0LnBsYWNlaG9sZGVyID0gdGhpcy5wbGFjZWhvbGRlcjtcbiAgICBpbnB1dC50eXBlID0gdGhpcy50eXBlO1xuICAgIGlucHV0LnJlcXVpcmVkID0gdGhpcy5yZXF1aXJlZDtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlSW5wdXRFbGVtZW50O1xuIiwiaW1wb3J0IENyZWF0ZUVsZW1lbnQgZnJvbSAnLi9jcmVhdGVFbGVtZW50JztcblxuZXhwb3J0IGNsYXNzIENyZWF0ZUxpbmtFbGVtZW50IGV4dGVuZHMgQ3JlYXRlRWxlbWVudCB7XG4gIHB1YmxpYyBocmVmOiBzdHJpbmc7XG5cbiAgcHVibGljIHRhcmdldDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IHsgaHJlZjogc3RyaW5nOyBpbm5lckhUTUw/OiBzdHJpbmc7IHRhcmdldD86IHN0cmluZzsgY2xhc3NOYW1lPzogc3RyaW5nIH0pIHtcbiAgICBzdXBlcignYScsIG9wdGlvbnMuY2xhc3NOYW1lID8geyBjbGFzc05hbWU6IG9wdGlvbnMuY2xhc3NOYW1lIH0gOiB1bmRlZmluZWQsIG9wdGlvbnMuaW5uZXJIVE1MKTtcbiAgICB0aGlzLmhyZWYgPSBvcHRpb25zLmhyZWY7XG4gICAgdGhpcy50YXJnZXQgPSBvcHRpb25zLnRhcmdldCB8fCAnX2JsYW5rJztcbiAgfVxuXG4gIGNyZWF0ZUVsZW1lbnQoKTogSFRNTExpbmtFbGVtZW50IHtcbiAgICBjb25zdCBsaW5rID0gc3VwZXIuY3JlYXRlRWxlbWVudCgpIGFzIEhUTUxMaW5rRWxlbWVudDtcbiAgICBsaW5rLmhyZWYgPSB0aGlzLmhyZWY7XG4gICAgbGluay5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsIHRoaXMudGFyZ2V0KTtcbiAgICBsaW5rLmlubmVySFRNTCA9IHRoaXMuaW5uZXJIVE1MIHx8ICcnO1xuICAgIHJldHVybiBsaW5rO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZUxpbmtFbGVtZW50O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQXBwIGZyb20gJy4vYXBwL2FwcCc7XG5cbmltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJztcblxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xuYXBwLnN0YXJ0KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=