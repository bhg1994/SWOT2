webpackHotUpdate("static/development/pages/master.js",{

/***/ "./components/LectureRoomApplication.jsx":
/*!***********************************************!*\
  !*** ./components/LectureRoomApplication.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _jsxFileName = "/Users/jaykim/SWOT2/components/LectureRoomApplication.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Column = antd__WEBPACK_IMPORTED_MODULE_1__["Table"].Column;
var data = [{
  key: "1",
  lecturecode: "M201",
  lecturename: "대학원강의실",
  capacity: "14"
}, {
  key: "2",
  lecturecode: "M202",
  lecturename: "대학원강의실",
  capacity: "14"
}, {
  key: "3",
  lecturecode: "M204",
  lecturename: "일반강의실",
  capacity: "14"
}, {
  key: "4",
  lecturecode: "M301",
  lecturename: "일반강의실",
  capacity: "120"
}, {
  key: "5",
  lecturecode: "M401",
  lecturename: "컴퓨터강의실",
  capacity: "40"
}, {
  key: "6",
  lecturecode: "M402",
  lecturename: "일반강의실",
  capacity: "50"
}];

var LectureRoomApplication = function LectureRoomApplication() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    dataSource: data,
    pagination: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(Column, {
    title: "\uAC15\uC758\uC2E4 \uCF54\uB4DC",
    dataIndex: "lecturecode",
    key: "lecturecode",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx(Column, {
    title: "\uAC15\uC758\uC2E4\uBA85",
    dataIndex: "lecturename",
    key: "lecturename",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx(Column, {
    title: "\uC218\uC6A9\uC778\uC6D0",
    dataIndex: "capacity",
    key: "capacity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx(Column, {
    title: "\uD655\uC778\uB780",
    key: "action",
    render: function render() {
      return __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        type: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "\uC218\uB77D"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
        type: "vertical",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "\uAC70\uC808"));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (LectureRoomApplication);

/***/ })

})
//# sourceMappingURL=master.js.1acddb96be3039ea0cad.hot-update.js.map