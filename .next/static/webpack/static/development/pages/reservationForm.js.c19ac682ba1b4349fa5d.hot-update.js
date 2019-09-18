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
      lineNumber: 18
    },
    __self: this
  }, __jsx("img", {
    src: "static/images/lectureroom2.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
    style: {
      marginTop: "30px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
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
      lineNumber: 23
    },
    __self: this
  }, "\uB300\uC5EC\uC77C\uC790 \uC120\uD0DD"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["DatePicker"], {
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
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
      lineNumber: 27
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
      lineNumber: 30
    },
    __self: this
  }, reservationDate))), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["ReservationTable"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["Facilityrental"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (reservationForm);

/***/ })

})
//# sourceMappingURL=reservationForm.js.c19ac682ba1b4349fa5d.hot-update.js.map