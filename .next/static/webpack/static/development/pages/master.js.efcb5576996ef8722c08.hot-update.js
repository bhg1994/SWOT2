webpackHotUpdate("static/development/pages/master.js",{

/***/ "./components/BuildingList.jsx":
/*!*************************************!*\
  !*** ./components/BuildingList.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _jsxFileName = "/Users/jaykim/SWOT2/components/BuildingList.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Column = antd__WEBPACK_IMPORTED_MODULE_1__["Table"].Column;

var onMoreClick = function onMoreClick(e) {
  console.log(e.target.id);
};

var data = [{
  key: "1",
  buildingname: "승연관",
  button: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    id: "\uC2B9\uC5F0\uAD00",
    onClick: onMoreClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "More")
}, {
  key: "2",
  buildingname: "일만관",
  button: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    id: "\uC77C\uB9CC\uAD00",
    onClick: onMoreClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "More")
}, {
  key: "3",
  buildingname: "월당관",
  button: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    id: "\uC6D4\uB2F9\uAD00",
    onClick: onMoreClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "More")
}, {
  key: "5",
  buildingname: "나눔관",
  button: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    id: "\uB098\uB214\uAD00",
    onClick: onMoreClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "More")
}, {
  key: "6",
  buildingname: "이천환관",
  button: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    id: "\uC774\uCC9C\uD658\uAD00",
    onClick: onMoreClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "More")
}, {
  key: "7",
  buildingname: "새천년관",
  button: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    id: "\uC0C8\uCC9C\uB144\uAD00",
    onClick: onMoreClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, "More")
}, {
  key: "9",
  buildingname: "성미가엘성당",
  button: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    id: "\uC131\uBBF8\uAC00\uC5D8\uC131\uB2F9",
    onClick: onMoreClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, "More")
}, {
  key: "11",
  buildingname: "미가엘관",
  button: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    id: "\uBBF8\uAC00\uC5D8\uAD00",
    onClick: onMoreClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, "More")
}];

var BuildingList = function BuildingList() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    style: {
      width: "40%",
      marginTop: "80px"
    },
    dataSource: data,
    pagination: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx(Column, {
    title: "\uAC74\uBB3C\uBA85",
    dataIndex: "buildingname",
    key: "buildingname",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), __jsx(Column, {
    title: "",
    style: {
      width: "50%"
    },
    dataIndex: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (BuildingList);

/***/ })

})
//# sourceMappingURL=master.js.efcb5576996ef8722c08.hot-update.js.map