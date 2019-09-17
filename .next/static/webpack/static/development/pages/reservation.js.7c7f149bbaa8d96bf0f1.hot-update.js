webpackHotUpdate("static/development/pages/reservation.js",{

/***/ "./containers/SwotMap.jsx":
/*!********************************!*\
  !*** ./containers/SwotMap.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_image_mapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-image-mapper */ "./node_modules/react-image-mapper/lib/ImageMapper.js");
/* harmony import */ var react_image_mapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_image_mapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_LectureRoomModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LectureRoomModal */ "./components/LectureRoomModal.jsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

var _jsxFileName = "/Users/jaykim/SWOT2/containers/SwotMap.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
  root: {}
}, "@media (max-width:1520px)", {
  map: {
    display: "none"
  }
}));
var lectureRoom = {
  name: "Swot-map",
  areas: [{
    name: "1",
    shape: "circle",
    coords: [445, 285, 18],
    preFillColor: "red",
    fillColor: "blue"
  }, {
    name: "2",
    shape: "circle",
    coords: [400, 220, 18],
    preFillColor: "orange",
    fillColor: "blue"
  }, {
    name: "3",
    shape: "circle",
    coords: [520, 245, 18],
    preFillColor: "yellow",
    fillColor: "blue"
  }, {
    name: "5",
    shape: "circle",
    coords: [420, 495, 18],
    preFillColor: "green",
    fillColor: "blue"
  }, {
    name: "6",
    shape: "circle",
    coords: [440, 130, 18],
    preFillColor: "blue",
    fillColor: "purple"
  }]
};

var SWOTMap = function SWOTMap() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("미가엘관"),
      Lectureroom = _useState[0],
      setLectureroom = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var handleCancel = function handleCancel() {
    setVisible(false);
  };

  var handleOk = function handleOk() {
    setVisible(false);
  };

  var showModal = function showModal() {
    console.log(visible);

    __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
      title: "\uAC15\uC758\uC2E4 \uC815\uBCF4",
      visible: visible,
      onOk: handleOk,
      onCancel: handleCancel,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, Lectureroom)));
  };

  var classes = useStyles();

  var imageClick = function imageClick(area, event) {
    showModal();
    console.log(event);
    console.log(area);
    console.log(area.name);
  };

  var mapView = __jsx(react_image_mapper__WEBPACK_IMPORTED_MODULE_3___default.a, {
    src: "static/images/SWOTMAP.png",
    width: 600,
    height: 400,
    imgWidth: 500,
    map: lectureRoom,
    onClick: showModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  });

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, mapView));
};

/* harmony default export */ __webpack_exports__["default"] = (SWOTMap);

/***/ })

})
//# sourceMappingURL=reservation.js.7c7f149bbaa8d96bf0f1.hot-update.js.map