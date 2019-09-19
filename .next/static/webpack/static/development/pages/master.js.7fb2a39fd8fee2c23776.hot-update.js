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
/* harmony import */ var _LectureRoomList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LectureRoomList */ "./components/LectureRoomList.jsx");
var _jsxFileName = "/Users/jaykim/SWOT2/components/BuildingList.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var TabPane = antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"].TabPane;
var Text = antd__WEBPACK_IMPORTED_MODULE_1__["Typography"].Text;

var BuildingList = function BuildingList() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      visible = _useState[0],
      setVisible = _useState[1];

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
    action: "//jsonplaceholder.typicode.com/posts/",
    listType: "picture",
    previewFile: function previewFile(file) {
      console.log("Your upload file:", file); // Your process logic. Here we just mock to the same file

      return fetch("https://next.json-generator.com/api/json/get/4ytyBoLK8", {
        method: "POST",
        body: file
      }).then(function (res) {
        return res.json();
      }).then(function (_ref) {
        var thumbnail = _ref.thumbnail;
        return thumbnail;
      });
    }
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    title: "\uAC15\uC758\uC2E4 \uCD94\uAC00",
    visible: visible,
    footer: null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Upload"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    type: "upload",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), " Click to Upload"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    addonBefore: "\uAC15\uC758\uC2E4 \uCF54\uB4DC",
    style: {
      width: "50%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    addonBefore: "\uAC15\uC758\uC2E4\uBA85",
    style: {
      width: "50%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(Text, {
    type: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "\uCD5C\uB300 \uC778\uC6D0\uC218 : "), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["InputNumber"], {
    min: 3,
    max: 30,
    defaultVAlue: 3,
    style: {
      width: "50%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    style: {
      marginRight: "20px"
    },
    htmlType: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "\uCD94\uAC00"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "danger",
    onClick: handleCancel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "\uCDE8\uC18C")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
    defaultActiveKey: "11",
    style: {
      marginTop: "70px",
      textAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx(TabPane, {
    tab: "\uC2B9\uC5F0\uAD00",
    key: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), __jsx(TabPane, {
    tab: "\uC77C\uB9CC\uAD00",
    key: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), __jsx(TabPane, {
    tab: "\uC6D4\uB2F9\uAD00",
    key: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), __jsx(TabPane, {
    tab: "\uB098\uB214\uAD00",
    key: "5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), __jsx(TabPane, {
    tab: "\uC774\uCC9C\uD658\uAD00",
    key: "6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), __jsx(TabPane, {
    tab: "\uC0C8\uCC9C\uB144\uAD00",
    key: "7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), __jsx(TabPane, {
    tab: "\uC131\uBBF8\uAC00\uC5D8\uC131\uB2F9",
    key: "9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), __jsx(TabPane, {
    tab: "\uBBF8\uAC00\uC5D8\uAD00",
    key: "11",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    style: {
      marginBottom: "20px",
      textAlign: "right"
    },
    type: "primary",
    onClick: showModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "\uAC15\uC758\uC2E4 \uCD94\uAC00"), __jsx(_LectureRoomList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (BuildingList);

/***/ })

})
//# sourceMappingURL=master.js.7fb2a39fd8fee2c23776.hot-update.js.map