webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ReservationRoominfo.jsx":
/*!********************************************!*\
  !*** ./components/ReservationRoominfo.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _jsxFileName = "/Users/jaykim/SWOT2/components/ReservationRoominfo.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var columns = [{
  title: "예약자",
  dataIndex: "name",
  key: "name"
}, {
  title: "강의실",
  dataIndex: "lectureName",
  key: "lectureName",
  render: function render(text) {
    return __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, text);
  }
}, {
  title: "위치",
  dataIndex: "location",
  key: "location"
}, {
  title: "예약 목적",
  key: "tags",
  dataIndex: "tags",
  render: function render(tags) {
    return __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, tags.map(function (tag) {
      var color = tag.length > 5 ? "geekblue" : "green";

      if (tag === "동아리 활동") {
        color = "volcano";
      }

      return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tag"], {
        color: color,
        key: tag,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, tag.toUpperCase());
    }));
  }
}, {
  title: "예약 날짜",
  key: "date",
  render: function render(text, record) {
    return __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, record.date));
  }
}];
var data = [{
  key: "1",
  name: "김성진",
  lectureName: "승연관",
  location: "1502호",
  date: "9월 20일",
  tags: ["자바스크립트 스터디"]
}, {
  key: "2",
  name: "방효근",
  lectureName: "미가엘관",
  location: "M401",
  date: "9월 27일",
  tags: ["동아리 활동"]
}, {
  key: "3",
  name: "박혜린",
  lectureName: "정보과학관",
  location: "4201호",
  date: "9월 25일",
  tags: ["회의"]
}, {
  key: "4",
  name: "서주은",
  lectureName: "새천년관",
  location: "7302호",
  date: "10월 11일",
  tags: ["조모임 활동"]
}];

var ReservationRoominfo = function ReservationRoominfo() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    style: {
      margin: "30px 30px 0 0",
      width: "600px"
    },
    title: "\uAC15\uC758\uC2E4 \uC608\uC57D\uD604\uD669",
    hoverable: true,
    extra: __jsx("a", {
      href: "reservation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, "More"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    columns: columns,
    dataSource: data,
    pagination: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ReservationRoominfo);

/***/ })

})
//# sourceMappingURL=index.js.6029303162bcb7609137.hot-update.js.map