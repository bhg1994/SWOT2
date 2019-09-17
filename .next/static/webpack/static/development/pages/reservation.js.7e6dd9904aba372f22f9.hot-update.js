webpackHotUpdate("static/development/pages/reservation.js",{

/***/ "./components/LectureRoomModal.jsx":
/*!*****************************************!*\
  !*** ./components/LectureRoomModal.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _jsxFileName = "/Users/jaykim/SWOT2/components/LectureRoomModal.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var LectureRoomModal = function LectureRoomModal() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("미가엘관"),
      Lectureroom = _useState[0],
      setLectureroom = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(isvisible),
      visible = _useState2[0],
      setVisible = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setVisible(isvisible);
  }, [isvisible]);

  var handleCancel = function handleCancel() {
    setVisible(false);
  };

  var handleOk = function handleOk() {
    setVisible(false);
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    title: "\uAC15\uC758\uC2E4 \uC815\uBCF4",
    visible: visible,
    onOk: handleOk,
    onCancel: handleCancel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, Lectureroom)));
};

/* harmony default export */ __webpack_exports__["default"] = (LectureRoomModal);

/***/ })

})
//# sourceMappingURL=reservation.js.7e6dd9904aba372f22f9.hot-update.js.map