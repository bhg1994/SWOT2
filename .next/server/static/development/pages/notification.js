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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/notification.jsx":
/*!********************************!*\
  !*** ./pages/notification.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jaykim/SWOT2/pages/notification.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const {
  Column,
  ColumnGroup
} = antd__WEBPACK_IMPORTED_MODULE_1__["Table"];
const {
  Text
} = antd__WEBPACK_IMPORTED_MODULE_1__["Typography"];
const {
  Search
} = antd__WEBPACK_IMPORTED_MODULE_1__["Input"];
const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];
const columns = [{
  title: "글번호",
  dataIndex: "number"
}, {
  title: "제목",
  dataIndex: "title",
  render: text => __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, text)
}, {
  title: "이름",
  dataIndex: "name"
}, {
  title: "날짜",
  dataIndex: "date"
}, {
  title: "조회수",
  dataIndex: "views"
}, {
  title: "삭제",
  dataIndex: "button",
  render: text => __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, text)
}];
const data = [{
  key: "1",
  number: "1",
  title: "제목1",
  name: "김성진",
  date: "2019년 9월 20일",
  views: "20",
  button: "삭제"
}, {
  key: "2",
  number: "2",
  title: "제목2",
  name: "방효근",
  date: "2019년 9월 24일",
  views: "24",
  button: "삭제"
}, {
  key: "3",
  number: "3",
  title: "제목3",
  name: "박혜린",
  date: "2019년 9월 26일",
  views: "14",
  button: "삭제"
}, {
  key: "4",
  number: "4",
  title: "제목4",
  name: "서주은",
  date: "2019년 9월 29일",
  views: "29",
  button: "삭제"
}];

function handleChange(value) {
  console.log(`selected ${value}`);
}

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, "selectedRows: ", selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === "Disabled User",
    // Column configuration not to be checked
    name: record.name
  })
};

const studyboard = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    style: {
      backgroundColor: "white"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      marginRight: "110px",
      textAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, __jsx("img", {
    src: "static/images/notification_logo.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  })), __jsx("header", {
    style: {
      display: "flex"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    type: "bell",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }), __jsx(Text, {
    strong: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }, " \uC804\uCCB4 30\uAC74"), __jsx(Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, "(1/5)\uD398\uC774\uC9C0"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "danger",
    size: "large",
    style: {
      marginLeft: "20px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, "\uACF5\uC9C0\uC0AC\uD56D \uCD94\uAC00")), __jsx("div", {
    style: {
      width: 1200,
      textAlign: "right"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
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
      lineNumber: 126
    },
    __self: undefined
  }, __jsx(Option, {
    value: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }, "\uC774\uB984"), __jsx(Option, {
    value: "lectureroom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }, "\uAC15\uC758\uC2E4"), __jsx(Option, {
    value: "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
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
      lineNumber: 135
    },
    __self: undefined
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    rowSelection: rowSelection,
    columns: columns,
    dataSource: data,
    pagination: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Pagination"], {
    style: {
      textAlign: "center",
      marginTop: "50px"
    },
    defaultCurrent: 6,
    total: 50,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (studyboard);

/***/ }),

/***/ 9:
/*!**************************************!*\
  !*** multi ./pages/notification.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jaykim/SWOT2/pages/notification.jsx */"./pages/notification.jsx");


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
//# sourceMappingURL=notification.js.map