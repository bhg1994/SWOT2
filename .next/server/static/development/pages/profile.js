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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/NicknameEditForm.jsx":
/*!*****************************************!*\
  !*** ./components/NicknameEditForm.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jaykim/SWOT2/components/NicknameEditForm.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const NicknameEditForm = () => {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    style: {
      margin: "20px 0 20px 0",
      border: "1px solid #d9d9d9",
      padding: "20px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      display: "flex"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    style: {
      marginTop: "2px"
    },
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: undefined
    }, "S"),
    title: "Seong_Jin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    style: {
      marginLeft: "30px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "\uB85C\uADF8\uC544\uC6C3")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    addonBefore: "\uB2C9\uB124\uC784",
    style: {
      width: "50%",
      marginRight: "50px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    style: {
      marginTop: "20px"
    },
    type: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "\uC218\uC815")));
};

/* harmony default export */ __webpack_exports__["default"] = (NicknameEditForm);

/***/ }),

/***/ "./pages/profile.jsx":
/*!***************************!*\
  !*** ./pages/profile.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_NicknameEditForm_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NicknameEditForm.jsx */ "./components/NicknameEditForm.jsx");
var _jsxFileName = "/Users/jaykim/SWOT2/pages/profile.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const data = [{
  title: "1",
  content: "승연관",
  studypurpose: "JAVA Study"
}, {
  title: "2",
  content: "미가엘관",
  studypurpose: "회의"
}, {
  title: "3",
  content: "새천년관",
  studypurpose: "동아리"
}];

const Profile = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx(_components_NicknameEditForm_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
    itemLayout: "horizontal",
    style: {
      marginBottom: "20px"
    },
    grid: {
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 6,
      xxl: 3
    },
    size: "small",
    header: __jsx("div", {
      style: {
        textAlign: "center",
        fontSize: "20px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: undefined
    }, "\uAC15\uC758\uC2E4 \uC608\uC57D \uD604\uD669"),
    loadMore: __jsx("div", {
      style: {
        textAlign: "center"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: undefined
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      style: {
        width: "50%",
        marginBottom: "30px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: undefined
    }, "\uAC15\uC758\uC2E4 \uB354 \uBCF4\uAE30")),
    bordered: true,
    dataSource: data,
    renderItem: item => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
      style: {
        maraginTop: "20px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: undefined
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      style: {
        marginTop: "20px"
      },
      title: item.title,
      extra: __jsx("a", {
        href: "Notification",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: undefined
      }, "More"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: undefined
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
    style: {
      marginBottom: "20px"
    },
    grid: {
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 6,
      xxl: 3
    },
    size: "small",
    header: __jsx("div", {
      style: {
        textAlign: "center",
        fontSize: "20px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: undefined
    }, "\uC2A4\uD130\uB514 \uC608\uC57D \uD604\uD669"),
    loadMore: __jsx("div", {
      style: {
        textAlign: "center"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: undefined
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      style: {
        width: "50%",
        marginBottom: "30px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: undefined
    }, "\uC2A4\uD130\uB514 \uB354 \uBCF4\uAE30")),
    bordered: true,
    dataSource: data,
    renderItem: item => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
      style: {
        maraginTop: "20px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: undefined
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      style: {
        marginTop: "20px"
      },
      title: item.title,
      extra: __jsx("a", {
        href: "Notification",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: undefined
      }, "More"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: undefined
    }, item.content, " ", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: undefined
    }), item.studypurpose)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ 6:
/*!*********************************!*\
  !*** multi ./pages/profile.jsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jaykim/SWOT2/pages/profile.jsx */"./pages/profile.jsx");


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
//# sourceMappingURL=profile.js.map