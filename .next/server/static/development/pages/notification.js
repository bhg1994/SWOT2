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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
var _jsxFileName = "C:\\Users\\6201-20\\SWOT2\\pages\\notification.jsx";
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
const {
  TextArea
} = antd__WEBPACK_IMPORTED_MODULE_1__["Input"];
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
  title: "이름",
  dataIndex: "name"
}, {
  title: "조회수",
  dataIndex: "views"
}, {
  title: "날짜",
  dataIndex: "date"
}, {
  title: "삭제",
  dataIndex: "button",
  render: text => __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, text)
}];
const data = [{
  key: "1",
  number: "1",
  title: "SWOT[안내] 홈페이지 점검 안내 공지 2018.09.21(토) 09:00 ~ 10:00",
  name: "운영자",
  views: "20",
  date: "2019.09.19",
  button: "삭제"
}, {
  key: "2",
  number: "2",
  title: "SWOT[안내] SWOT 멤버십 앱 다운로드 정상화 완료",
  name: "운영자",
  views: "24",
  date: "2019.09.22",
  button: "삭제"
}, {
  key: "3",
  number: "3",
  title: "SWOT[안내] 앱 다운로드 오류 안내",
  name: "운영자",
  views: "14",
  date: "2019.09.24",
  button: "삭제"
}, {
  key: "4",
  number: "4",
  title: "SWOT[긴급안내] 현재 홈페이지에서 발견되는 오류와 관련한 진행사항",
  name: "운영자",
  views: "29",
  date: "2019.09.26",
  button: "삭제"
}];

function handleChange(value) {
  console.log(`selected ${value}`);
}

const studyboard = () => {
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: notificationtitle,
    1: setNotificationtitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: notificationcontent,
    1: setNotificationcontent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

  const handleCancel = () => {
    setVisible(false);
    console.log("취소 버튼");
  };

  const showModal = () => {
    setVisible(true);
  };

  const onChangeValue = e => {
    if (e.target.id === "notificationtitle") {
      setStudytitle(e.target.value);
    } else if (e.target.id === "notificationcontent") {
      setStudycontent(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setVisible(false);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    style: {
      backgroundColor: "white"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      marginRight: "110px",
      textAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, __jsx("img", {
    src: "static/images/notification_logo.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  })), __jsx("header", {
    style: {
      display: "flex"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      width: "200px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    type: "bell",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }), __jsx(Text, {
    strong: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }, " \uC804\uCCB4 30\uAC74"), __jsx(Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }, "(1/5)\uD398\uC774\uC9C0")), __jsx("div", {
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
    },
    onChange: handleChange,
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
  }, "\uC774\uB984"), __jsx(Option, {
    value: "lectureroom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }, "\uAC15\uC758\uC2E4"), __jsx(Option, {
    value: "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
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
      lineNumber: 149
    },
    __self: undefined
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: undefined
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    columns: columns,
    dataSource: data,
    pagination: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  }), __jsx("div", {
    style: {
      display: "flex",
      marginTop: "50px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      width: "60%",
      textAlign: "right"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Pagination"], {
    defaultCurrent: 6,
    total: 50,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: undefined
  })), __jsx("div", {
    style: {
      width: "40%",
      textAlign: "right"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "danger",
    size: "large",
    onClick: showModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: undefined
  }, "\uACF5\uC9C0\uC0AC\uD56D \uCD94\uAC00"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    title: "\uACF5\uC9C0\uC0AC\uD56D \uCD94\uAC00",
    visible: visible,
    footer: null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    id: "notificationtitle",
    value: notificationtitle,
    addonBefore: "\uACF5\uC9C0\uC0AC\uD56D \uC81C\uBAA9",
    style: {
      width: "50%"
    },
    onChange: onChangeValue,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: undefined
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: undefined
  }, __jsx(TextArea, {
    id: "notificationcontent",
    value: notificationcontent,
    autosize: {
      minRows: 3,
      maxRows: 6
    },
    rows: 4,
    onChange: onChangeValue,
    placeholder: "\uACF5\uC9C0\uC0AC\uD56D \uB0B4\uC6A9 \uC785\uB825",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: undefined
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    style: {
      marginRight: "20px"
    },
    htmlType: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: undefined
  }, "\uCD94\uAC00"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "danger",
    onClick: handleCancel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: undefined
  }, "\uCDE8\uC18C"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (studyboard);

/***/ }),

/***/ 3:
/*!**************************************!*\
  !*** multi ./pages/notification.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\6201-20\SWOT2\pages\notification.jsx */"./pages/notification.jsx");


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