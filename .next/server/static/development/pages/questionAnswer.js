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

/***/ "./pages/questionAnswer.jsx":
/*!**********************************!*\
  !*** ./pages/questionAnswer.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jaykim/SWOT2/pages/questionAnswer.jsx";

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
const columns = [{
  title: "글번호",
  dataIndex: "number"
}, {
  title: "제목",
  dataIndex: "title",
  render: text => __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, text)
}, {
  title: "작성자",
  dataIndex: "name"
}, {
  title: "등록일",
  dataIndex: "date"
}, {
  title: "조회수",
  dataIndex: "views"
}, {
  title: "상태",
  key: "status",
  dataIndex: "status",
  render: status => __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, status.map(status => {
    let color = status === "답변완료" ? "geekblue" : "green";

    if (status === "답변대기") {
      color = "volcano";
    }

    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tag"], {
      color: color,
      key: status,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: undefined
    }, status);
  }))
}];
const data = [{
  key: "1",
  number: "1",
  title: "제목1",
  name: "김성진",
  date: "2019년 9월 20일",
  views: "20",
  status: ["답변대기"]
}, {
  key: "2",
  number: "2",
  title: "제목2",
  name: "방효근",
  date: "2019년 9월 24일",
  views: "24",
  status: ["답변완료"]
}, {
  key: "3",
  number: "3",
  title: "제목3",
  name: "박혜린",
  date: "2019년 9월 26일",
  views: "14",
  status: ["답변완료"]
}, {
  key: "4",
  number: "4",
  title: "제목4",
  name: "서주은",
  date: "2019년 9월 29일",
  views: "29",
  status: ["답변대기"]
}];
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

const questionAnswer = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    style: {
      backgroundColor: "white"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      marginRight: "110px",
      textAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, __jsx("img", {
    src: "static/images/Q&A_logo.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  })), __jsx("header", {
    style: {
      display: "flex"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      width: "150px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    type: "bell",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }), __jsx(Text, {
    strong: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }, " \uC804\uCCB420\uAC74"), __jsx(Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }, "(1/4)\uD398\uC774\uC9C0")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    style: {
      marginLeft: "20px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }, "\uAE00\uC4F0\uAE30"), __jsx("div", {
    style: {
      width: 1200,
      textAlign: "right"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    defaultValue: "\uAC80\uC0C9\uC870\uAC74",
    style: {
      width: 120
    } //   onChange={handleChange}
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }, __jsx(Option, {
    value: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }, "\uC81C\uBAA9"), __jsx(Option, {
    value: "lectureroom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }, "\uC791\uC131\uC790")), __jsx(Search, {
    style: {
      width: 200,
      marginLeft: "10px"
    },
    enterButton: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: undefined
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    rowSelection: rowSelection,
    columns: columns,
    dataSource: data,
    pagination: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
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
      lineNumber: 158
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (questionAnswer);

/***/ }),

/***/ 6:
/*!****************************************!*\
  !*** multi ./pages/questionAnswer.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jaykim/SWOT2/pages/questionAnswer.jsx */"./pages/questionAnswer.jsx");


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
//# sourceMappingURL=questionAnswer.js.map