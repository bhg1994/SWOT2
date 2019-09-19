webpackHotUpdate("static/development/pages/reservationForm.js",{

/***/ "./pages/reservationForm.jsx":
/*!***********************************!*\
  !*** ./pages/reservationForm.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./components/index.js");
/* harmony import */ var react_minimal_pie_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-minimal-pie-chart */ "./node_modules/react-minimal-pie-chart/dist/index.js");
/* harmony import */ var react_minimal_pie_chart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_minimal_pie_chart__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/jaykim/SWOT2/pages/reservationForm.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Text = antd__WEBPACK_IMPORTED_MODULE_1__["Typography"].Text;

var reservationForm = function reservationForm() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      reservationDate = _useState[0],
      setReseravtionDate = _useState[1];

  function onChange(date, dateString) {
    console.log(date, dateString);
    setReseravtionDate(dateString);
  }

  console.log(reservationDate);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    style: {
      textAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("img", {
    src: "static/images/lectureroom2.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
    style: {
      marginTop: "30px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(Text, {
    type: "danger",
    style: {
      marginRight: "30px",
      fontSize: "15px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "\uB300\uC5EC\uC77C\uC790 \uC120\uD0DD"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["DatePicker"], {
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    style: {
      marginLeft: "30px"
    },
    type: "primary",
    icon: "search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "\uC870 \uD68C"), __jsx(Text, {
    style: {
      fontSize: "15px",
      marginLeft: "270px"
    },
    type: "danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, reservationDate))), __jsx("div", {
    style: {
      width: "500px",
      height: "500px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(react_minimal_pie_chart__WEBPACK_IMPORTED_MODULE_3___default.a, {
    totalValue: "48",
    radius: "40",
    data: [{
      title: "One",
      value: 10,
      color: "#E38627"
    }, {
      title: "Two",
      value: 15,
      color: "#C13C37"
    }, {
      title: "Three",
      value: 20,
      color: "#6A2135"
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["Facilityrental"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (reservationForm);

/***/ })

})
//# sourceMappingURL=reservationForm.js.077c9dc9d6e883fa4c31.hot-update.js.map