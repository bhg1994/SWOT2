module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
var _jsxFileName = "/Users/jaykim/SWOT2/pages/_app.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const {
  Header,
  Sider,
  Content,
  Footer
} = antd__WEBPACK_IMPORTED_MODULE_3__["Layout"];






const SWOT = ({
  Component
}) => {
  const {
    0: collapsed,
    1: setCollapsed
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  const toggle = () => {
    if (collapsed === true) {
      setCollapsed(false);
    } else {
      setCollapsed(true);
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), __jsx("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Layout"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx(Sider, {
    trigger: null,
    collapsible: true,
    collapsed: collapsed,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("div", {
    className: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    theme: "dark",
    mode: "inline",
    defaultSelectedKeys: ["1"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    type: "home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "Home")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/signup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    type: "user-add",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "Register")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    type: "login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, "Login")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/notification",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    type: "notification",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, "Notification")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    type: "user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, "MyPage")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/Reservation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    type: "schedule",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, "Reservation")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/studyboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    type: "read",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, "StudyBoard")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/qa",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    type: "check-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, "Q&A")))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Layout"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, __jsx(Header, {
    style: {
      background: "#fff",
      padding: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    style: {
      fontSize: "20px",
      padding: "0 20px",
      lineHeight: "64px"
    },
    type: collapsed ? "menu-unfold" : "menu-fold",
    onClick: toggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }), __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, __jsx("img", {
    src: "static/images/SWOT_logo.png",
    style: {
      float: "right",
      position: "relative",
      right: "50%",
      marginTop: "8px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }))), __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
    src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    style: {
      float: "right",
      marginTop: "15px",
      backgroundColor: "black"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  })))), __jsx(Content, {
    style: {
      margin: "24px 16px",
      padding: 24,
      background: "#fff",
      minHeight: 1000
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  }, __jsx(Component, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  })), __jsx(Footer, {
    style: {
      textAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  }, "\uC804\uD654\uBC88\uD638 02-2610-4114 ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  }), " SWOT, \uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uAD6C\uB85C\uAD6C \uC624\uB9582\uB3D9 \uC5F0\uB3D9\uB85C 320 ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: undefined
  }), " Seoul, KR 08359"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: undefined
  }, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: undefined
  }), "\uC800\uC791\uAD8C \uBCF4\uD638 \xA9 SWOT Companies Inc. \uBAA8\uB4E0 \uAD8C\uB9AC \uC720\uBCF4"))))));
};

SWOT.Proptypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_4__["elementType"]
}; // export default withRedux((initialState, options) => {
//   const middlewares = [];
//   const enhancer = compose(
//     applyMiddleware(...middlewares),
//     !options.isServer && window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
//       ? window.__REDUX_DEVTOOLS_EXTENSION__()
//       : f => f
//   );
//   const store = createStore(reducer, initialState, enhancer);
//   return store;
// })(SWOT);

/* harmony default export */ __webpack_exports__["default"] = (SWOT);

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);

const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.jsx */"./pages/_app.jsx");


/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/Link");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map