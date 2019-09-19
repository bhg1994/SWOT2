webpackHotUpdate("static/development/pages/master.js",{

/***/ "./components/BuildingList.jsx":
/*!*************************************!*\
  !*** ./components/BuildingList.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

var _jsxFileName = "/Users/jaykim/SWOT2/components/BuildingList.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var TabPane = antd__WEBPACK_IMPORTED_MODULE_2__["Tabs"].TabPane;
var data = [{
  key: "1",
  buildingname: "승연관"
}, {
  key: "2",
  buildingname: "일만관"
}, {
  key: "3",
  buildingname: "월당관"
}, {
  key: "5",
  buildingname: "나눔관"
}, {
  key: "6",
  buildingname: "이천환관"
}, {
  key: "7",
  buildingname: "새천년관"
}, {
  key: "9",
  buildingname: "성미가엘성당"
}, {
  key: "11",
  buildingname: "미가엘관"
}];

var BuildingList = function BuildingList() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
    defaultActiveKey: "1",
    style: {
      marginTop: "70px",
      width: "50%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Array(8).keys()).map(function (data) {
    return __jsx(TabPane, {
      tab: "Tab-".concat(data.buildingname),
      key: data,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "Content of tab ", data);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (BuildingList);

/***/ })

})
//# sourceMappingURL=master.js.0a84f4420fb1981467c1.hot-update.js.map