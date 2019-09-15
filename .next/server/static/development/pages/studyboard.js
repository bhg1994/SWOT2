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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/studyboard.jsx":
/*!******************************!*\
  !*** ./pages/studyboard.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jaykim/SWOT2/pages/studyboard.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const {
  Text
} = antd__WEBPACK_IMPORTED_MODULE_1__["Typography"];
const {
  Search
} = antd__WEBPACK_IMPORTED_MODULE_1__["Input"];
const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];

function handleChange(value) {
  console.log(`selected ${value}`);
}

const studyboard = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    style: {
      backgroundColor: "white"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      margin: "0 110px 50px 0",
      textAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("img", {
    src: "static/images/studyboard_logo.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  })), __jsx("header", {
    style: {
      display: "flex"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    type: "bell",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }), __jsx(Text, {
    strong: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, " \uC804\uCCB425\uAC74"), __jsx(Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "(1/5)\uD398\uC774\uC9C0"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    style: {
      marginLeft: "20px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "\uC2A4\uD130\uB514 \uCD94\uAC00")), __jsx("div", {
    style: {
      width: 1200,
      textAlign: "right"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    defaultValue: "\uAC80\uC0C9\uC870\uAC74",
    style: {
      width: 120
    },
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx(Option, {
    value: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, "\uC774\uB984"), __jsx(Option, {
    value: "lectureroom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "\uAC15\uC758\uC2E4"), __jsx(Option, {
    value: "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "\uB0A0\uC9DC")), __jsx(Search, {
    style: {
      width: 200,
      marginLeft: "10px"
    },
    enterButton: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }), __jsx("div", {
    style: {
      marginLeft: "130px",
      padding: "30px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: 16,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    md: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    style: {
      width: 300,
      height: 300
    },
    title: "September 16, 2019",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, "Card content")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    md: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    style: {
      width: 300,
      height: 300
    },
    title: "September 17, 2019",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, "Card content")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    md: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    style: {
      width: 300,
      height: 300
    },
    title: "September 18, 2019",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, "Card content")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }), __jsx("div", {
    style: {
      marginLeft: "130px",
      padding: "30px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: 16,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    md: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    style: {
      width: 300,
      height: 300
    },
    title: "October 23,2019",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, "Card content")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    md: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    style: {
      width: 300,
      height: 300
    },
    title: "October 24, 2019",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, "Card content")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    md: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    style: {
      width: 300,
      height: 300
    },
    title: "October 25, 2019",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, "Card content")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Pagination"], {
    style: {
      textAlign: "center"
    },
    defaultCurrent: 6,
    total: 50,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (studyboard);

/***/ }),

/***/ 8:
/*!************************************!*\
  !*** multi ./pages/studyboard.jsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jaykim/SWOT2/pages/studyboard.jsx */"./pages/studyboard.jsx");


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=studyboard.js.map