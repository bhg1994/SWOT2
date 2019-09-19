webpackHotUpdate("static/development/pages/reservationForm.js",{

/***/ "./components/LectureRoomList.jsx":
/*!****************************************!*\
  !*** ./components/LectureRoomList.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/jaykim/SWOT2/components/LectureRoomList.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var columns = [{
  title: "강의실코드",
  dataIndex: "lecturecode",
  key: "lecturecode"
}, {
  title: "강의실명",
  dataIndex: "lecturename",
  key: "lecturename",
  render: function render(text) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/reservationForm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, text));
  }
}, {
  title: "수용인원",
  dataIndex: "capacity",
  key: "capacity"
}];
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

var LectureRoomList = function LectureRoomList() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    columns: columns,
    dataSource: data,
    pagination: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LectureRoomList);

/***/ })

})
//# sourceMappingURL=reservationForm.js.070167de6de4260b6dd8.hot-update.js.map