webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./pages/login.jsx":
/*!*************************!*\
  !*** ./pages/login.jsx ***!
  \*************************/
/*! exports provided: useInput, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInput", function() { return useInput; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/Link */ "./node_modules/next/Link.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "./node_modules/@material-ui/core/esm/useMediaQuery/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");



var _makeStyles,
    _jsxFileName = "C:\\Users\\6201-20\\SWOT2\\pages\\login.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])((_makeStyles = {
  wrapper: {
    position: "absolute",
    width: 800,
    height: 500,
    left: "50%",
    top: "50%",
    marginLeft: -400,
    marginTop: -250
  },
  loginwrap: {
    backgroundColor: "white",
    display: "inline-block",
    width: "70%",
    height: "100%",
    margin: "auto"
  },
  textLogin: {
    fontSize: 20,
    marginBottom: 20
  },
  textRegister: {
    fontSize: 20,
    color: "white",
    marginTop: 20
  },
  registerwrap: {
    background: "gray",
    display: "inline-block",
    width: "30%",
    height: "100%"
  },
  email: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column"
  },
  password: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column"
  },
  loginContainer: {
    position: "absolute",
    margin: 40
  },
  registerContainer: {
    position: "absolute",
    margin: 40
  },
  article: {
    marginTop: 20
  },
  loginBtn: {
    marginTop: 60,
    width: 150,
    height: 50,
    color: "white",
    backgroundColor: "black"
  },
  registerBtn: {
    marginTop: 30,
    width: 150,
    height: 50,
    color: "white",
    backgroundColor: "gray"
  },
  input: {
    marginTop: 20,
    width: 300,
    height: 40
  }
}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_makeStyles, "@media (max-width:1080px)", {
  wrapper: {
    position: "absolute",
    width: 600,
    height: 500,
    left: "50%",
    top: "50%",
    marginLeft: -300,
    marginTop: -250
  },
  loginwrap: {
    width: "60%",
    height: "100%"
  },
  registerwrap: {
    width: "40%",
    height: "100%"
  }
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_makeStyles, "@media (max-width:780px)", {
  wrapper: {
    position: "absolute",
    width: 400,
    height: 500,
    left: "50%",
    top: "50%",
    marginLeft: -200,
    marginTop: -250
  },
  loginwrap: {
    width: "50%",
    height: "100%"
  },
  registerwrap: {
    width: "50%",
    height: "100%"
  },
  input: {
    width: 150
  }
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_makeStyles, "@media (max-width:600px)", {
  wrapper: {
    position: "absolute",
    width: 200,
    height: 500,
    left: "50%",
    top: "50%",
    marginLeft: -100,
    marginTop: -250
  },
  input: {
    width: 120
  },
  registerwrap: {
    display: "none"
  }
}), _makeStyles));
var useInput = function useInput() {
  var initValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initValue),
      value = _useState[0],
      setter = _useState[1];

  var handler = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

var Loginscreen = function Loginscreen() {
  var classes = useStyles();
  var matches = Object(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_7__["default"])("(min-width:600px)");

  var _useInput = useInput(""),
      _useInput2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      id = _useInput2[0],
      onChangeId = _useInput2[1];

  var _useInput3 = useInput(""),
      _useInput4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
      password = _useInput4[0],
      onChangePassword = _useInput4[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(function (state) {
    return state.user;
  }),
      isLoggingIn = _useSelector.isLoggingIn;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"])();

  var onClickedLogin = function onClickedLogin() {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_8__["LOG_IN_REQUEST"],
      data: {
        id: id,
        password: password
      }
    });
  };

  var loginBoxes = __jsx("section", {
    className: classes.wrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, __jsx("div", {
    className: classes.loginwrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, __jsx("div", {
    className: classes.loginContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, __jsx("label", {
    className: classes.textLogin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, "LOGIN"), __jsx("div", {
    className: classes.email,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "emailLabel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, "EMAIL ADDRESS"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    className: classes.input,
    name: "login_email",
    type: "text",
    placeholder: "YOUR EMAIL ADDRESS",
    onChange: onChangeId,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  })), __jsx("div", {
    className: classes.password,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "passwordLabel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, "PASSWORD"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    className: classes.input,
    name: "login_password",
    type: "password",
    placeholder: "ENTER VALID PASSWORD",
    onChange: onChangePassword,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: classes.loginBtn,
    onClick: onClickedLogin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, "Login"))), __jsx("div", {
    className: classes.registerwrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, __jsx("div", {
    className: classes.registerContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, __jsx("label", {
    className: classes.textRegister,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, "NOT A MEMBER?"), __jsx("article", {
    className: classes.article,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, "If you are using SWOT as a member, you can experience a wider variety of services.", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }), " ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }), "Classroom reservation system, study collection board, and various services are available."), __jsx(next_Link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/signup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: classes.registerBtn,
    htmlType: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, "REGISTER NOW"))))));

  var loginView = __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, loginBoxes)));

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }, __jsx("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }), __jsx("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  })), loginView);
};

/* harmony default export */ __webpack_exports__["default"] = (Loginscreen);

/***/ })

})
//# sourceMappingURL=login.js.bc0405d86334233acc80.hot-update.js.map