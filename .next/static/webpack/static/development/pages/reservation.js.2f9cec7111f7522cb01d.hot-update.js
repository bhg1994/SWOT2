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
  var classes = useStyles();

  var imageClick = function imageClick(area, event) {
    console.log(event);
    console.log(area);
    console.log(area.name);

    __jsx("a", {
      href: "/reservation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    });
  };

  var mapView = __jsx(react_image_mapper__WEBPACK_IMPORTED_MODULE_3___default.a, {
    src: "static/images/SWOTMAP.png",
    width: 600,
    height: 400,
    imgWidth: 500,
    map: lectureRoom,
    onClick: imageClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  });

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, mapView));
};

/* harmony default export */ __webpack_exports__["default"] = (SWOTMap);

/***/ })

})
//# sourceMappingURL=reservation.js.2f9cec7111f7522cb01d.hot-update.js.map