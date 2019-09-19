webpackHotUpdate("static/development/pages/master.js",{

/***/ "./components/BuildingList.jsx":
/*!*************************************!*\
  !*** ./components/BuildingList.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _LectureRoomList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LectureRoomList */ "./components/LectureRoomList.jsx");

var _jsxFileName = "/Users/jaykim/SWOT2/components/BuildingList.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var TabPane = antd__WEBPACK_IMPORTED_MODULE_2__["Tabs"].TabPane;
var Text = antd__WEBPACK_IMPORTED_MODULE_2__["Typography"].Text;

var BuildingList = function BuildingList() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      visible = _useState[0],
      setVisible = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      image = _useState2[0],
      setImage = _useState2[1];

  var showModal = function showModal() {
    setVisible(true);
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    setVisible(false);
  };

  var handleCancel = function handleCancel() {
    setVisible(false);
  };

  var props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text"
    },
    onChange: function onChange(info) {
      setImage(info);

      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }

      if (info.file.status === "done") {
        antd__WEBPACK_IMPORTED_MODULE_2__["message"].success("".concat(info.file.name, " file uploaded successfully"));
      } else if (info.file.status === "error") {
        antd__WEBPACK_IMPORTED_MODULE_2__["message"].error("".concat(info.file.name, " file upload failed."));
      }
    }
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    title: "\uAC15\uC758\uC2E4 \uCD94\uAC00",
    visible: visible,
    footer: null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Upload"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    type: "upload",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), " Click to Upload"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    addonBefore: "\uAC15\uC758\uC2E4 \uCF54\uB4DC",
    style: {
      width: "50%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    addonBefore: "\uAC15\uC758\uC2E4\uBA85",
    style: {
      width: "50%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx(Text, {
    type: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "\uCD5C\uB300 \uC778\uC6D0\uC218 : "), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["InputNumber"], {
    min: 3,
    max: 30,
    defaultVAlue: 3,
    style: {
      width: "50%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary",
    style: {
      marginRight: "20px"
    },
    htmlType: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "\uCD94\uAC00"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "danger",
    onClick: handleCancel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "\uCDE8\uC18C")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
    defaultActiveKey: "11",
    style: {
      marginTop: "70px",
      textAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx(TabPane, {
    tab: "\uC2B9\uC5F0\uAD00",
    key: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), __jsx(TabPane, {
    tab: "\uC77C\uB9CC\uAD00",
    key: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), __jsx(TabPane, {
    tab: "\uC6D4\uB2F9\uAD00",
    key: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), __jsx(TabPane, {
    tab: "\uB098\uB214\uAD00",
    key: "5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }), __jsx(TabPane, {
    tab: "\uC774\uCC9C\uD658\uAD00",
    key: "6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }), __jsx(TabPane, {
    tab: "\uC0C8\uCC9C\uB144\uAD00",
    key: "7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }), __jsx(TabPane, {
    tab: "\uC131\uBBF8\uAC00\uC5D8\uC131\uB2F9",
    key: "9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), __jsx(TabPane, {
    tab: "\uBBF8\uAC00\uC5D8\uAD00",
    key: "11",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: {
      marginBottom: "20px",
      textAlign: "right"
    },
    type: "primary",
    onClick: showModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "\uAC15\uC758\uC2E4 \uCD94\uAC00"), __jsx(_LectureRoomList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (BuildingList);

/***/ })

})
//# sourceMappingURL=master.js.66ac8cba84cb43fcf00a.hot-update.js.map