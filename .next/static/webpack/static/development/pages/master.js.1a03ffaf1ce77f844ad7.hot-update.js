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
  console.log(e.target.value);
};

var data = [{
  key: "1",
  buildingname: "승연관",
  button: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: onMoreClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "More")
}, {
  key: "2",
  buildingname: "일만관",
  button: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "More")
}, {
  key: "3",
  buildingname: "월당관",
  button: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "More")
}, {
  key: "5",
  buildingname: "나눔관",
  button: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "More")
}, {
  key: "6",
  buildingname: "이천환관",
  button: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "More")
}, {
  key: "7",
  buildingname: "새천년관",
  button: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "More")
}, {
  key: "9",
  buildingname: "성미가엘성당",
  button: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "More")
}, {
  key: "11",
  buildingname: "미가엘관",
  button: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "More")
}];

var BuildingList = function BuildingList() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    style: {
      width: "40%"
    },
    dataSource: data,
    pagination: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(Column, {
    title: "\uAC74\uBB3C\uBA85",
    dataIndex: "buildingname",
    key: "buildingname",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx(Column, {
    title: "\uC120\uD0DD\uB780",
    dataIndex: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (BuildingList);

/***/ })

})
//# sourceMappingURL=master.js.1a03ffaf1ce77f844ad7.hot-update.js.map