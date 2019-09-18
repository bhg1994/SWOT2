webpackHotUpdate("static/development/pages/reservationForm.js",{

/***/ "./components/ Facilityrental.jsx":
/*!****************************************!*\
  !*** ./components/ Facilityrental.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SuccessResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SuccessResult */ "./components/SuccessResult.jsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _jsxFileName = "/Users/jaykim/SWOT2/components/ Facilityrental.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Text = antd__WEBPACK_IMPORTED_MODULE_2__["Typography"].Text;
var TextArea = antd__WEBPACK_IMPORTED_MODULE_2__["Input"].TextArea;

function onChange(date, dateString) {
  console.log(date, dateString);
}

function oncontentChange(content) {
  setContent(e.target.value);
}

var Facilityrental = function Facilityrental() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      content = _useState[0],
      setContent = _useState[1];

  var oncontentChange = function oncontentChange(e) {
    setContent(e.target.value);
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    console.log(content);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", {
    style: {
      width: "50%",
      marginTop: "50px",
      border: "1px solid gray"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("div", {
    style: {
      marginTop: "20px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(Text, {
    strong: true,
    style: {
      fontSize: "18px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "\uC2DC\uC124 \uB300\uC5EC \uC2E0\uCCAD : \uB300\uC5EC \uD558\uACE0\uC790 \uD558\uB294 \uC591\uC2DD\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694")), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    style: {
      padding: 10
    },
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(Text, {
    type: "secondary",
    style: {
      fontSize: "18px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "\uB300\uC5EC \uC2DC\uAC04"), __jsx("div", {
    style: {
      display: "flex",
      marginTop: "20px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    style: {
      display: "flex"
    } // validateStatus="error"
    ,
    label: "Start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["TimePicker"], {
    style: {
      marginRight: "20px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    style: {
      display: "flex"
    } // validateStatus="error"
    ,
    label: "End",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["TimePicker"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }))), __jsx(Text, {
    type: "secondary",
    style: {
      fontSize: "18px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "\uB300\uC5EC \uC0AC\uC720 / \uB300\uC720 \uC778\uC6D0 \uBAA9\uB85D"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    style: {
      marginTop: "20px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx(TextArea, {
    value: content,
    onChange: oncontentChange,
    autosize: {
      minRows: 4,
      maxRows: 8
    },
    style: {
      width: "50%"
    },
    rows: 4,
    placeholder: "\uAC15\uC758\uC2E4 \uB300\uC5EC \uC2E0\uCCAD\uC790\uB294 \uD559\uBC88\uACFC \uC774\uB984\uC744 \uBAA8\uB450 \uAE30\uC7AC\uD574 \uC8FC\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4. \uC778\uC6D0\uACFC \uCC28\uC774\uAC00 \uC788\uC744 \uC2DC, \uB300\uC5EC \uBC18\uB824\uC758 \uC0AC\uC720\uAC00 \uB429\uB2C8\uB2E4.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    style: {
      marginTop: "20px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    addonBefore: "\uC2E0\uCCAD\uC790 \uC804\uD654\uBC88\uD638",
    style: {
      width: "50%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(Text, {
    type: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "\uC2DC\uC124\uBB3C \uB300\uC5EC \uADDC\uC815\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4 : "), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    style: {
      marginLeft: "30px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    htmlType: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "\uB300\uC5EC \uC2E0\uCCAD")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Facilityrental);

/***/ })

})
//# sourceMappingURL=reservationForm.js.90aa9bdae49fc7266e74.hot-update.js.map