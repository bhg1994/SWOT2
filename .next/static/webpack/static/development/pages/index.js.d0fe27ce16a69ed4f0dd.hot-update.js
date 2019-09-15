webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components */ "./components/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../containers */ "./containers/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");






var _jsxFileName = "/Users/jaykim/SWOT2/pages/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;




 // import MainCarousel from "../components/MainCarousel";

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])({}, "@media (max-width:780px)", {
  map: {
    display: "none"
  }
}));

var Home =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, _React$Component);

  function Home() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Home).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("test");

      if (true) {
        __webpack_require__(/*! react-leaf-carousel */ "./node_modules/react-leaf-carousel/lib/react-infinite-carusel.min.js");
      }
    }
  }, {
    key: "render",
    value: function render() {
      var classes = useStyles();
      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Row"], {
        gutter: 24,
        type: "flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Card"], {
        bordered: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        xs: 24,
        md: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["Notification"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      })), __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        xs: 24,
        md: 12,
        style: {
          marginBottom: "70px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["Notification"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      })), __jsx("div", {
        style: {
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["NotifiactionPagination"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        xs: 24,
        md: 12,
        style: {
          marginTop: "50px",
          minHeight: 900
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Card"], {
        extra: __jsx("a", {
          href: "#",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, "Lecture >"),
        title: "SWOT MAP",
        hoverable: true,
        style: {
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx(_containers__WEBPACK_IMPORTED_MODULE_9__["SwotMap"], {
        className: classes.map,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Card"], {
        style: {
          marginTop: "30px"
        },
        title: "\uAC15\uC758\uC2E4 \uC608\uC57D\uD604\uD669",
        hoverable: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["LectureRoominfo"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }))))), __jsx(_containers__WEBPACK_IMPORTED_MODULE_9__["Study"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.d0fe27ce16a69ed4f0dd.hot-update.js.map