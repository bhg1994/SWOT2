webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./pages/signup.jsx":
/*!**************************!*\
  !*** ./pages/signup.jsx ***!
  \**************************/
/*! exports provided: useInput, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInput", function() { return useInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _jsxFileName = "/Users/jaykim/SWOT2/pages/signup.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  wrapper: {
    position: "absolute",
    width: 600,
    height: 550,
    left: "50%",
    top: "50%",
    marginLeft: -300,
    marginTop: -250,
    border: "1px solid gray"
  },
  registerWrap: {
    backgroundColor: "white",
    display: "inline-block",
    height: "100%",
    width: "100%"
  },
  registerContainer: {
    position: "absolute",
    margin: 40
  },
  secondSection: {
    display: "flex",
    flexDirection: "row"
  },
  email: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column"
  },
  duplicate: {
    margin: "70px 0 0 20px",
    display: "flex",
    flexDirection: "column"
  },
  thirdSection: {
    display: "flex",
    flexDirection: "row"
  },
  password: {
    margin: "20px 0 0 0",
    display: "flex",
    flexDirection: "column"
  },
  repassword: {
    margin: "20px 0 0 20px",
    display: "flex",
    flexDirection: "column"
  },
  fourthSection: {
    display: "flex",
    flexDirection: "row"
  },
  telephone: {
    margin: "20px 0 0 0",
    display: "flex",
    flexDirection: "column"
  },
  name: {
    margin: "20px 0 0 20px",
    display: "flex",
    flexDirection: "column"
  },
  fifthSection: {
    display: "flex",
    flexDirection: "row"
  },
  check: {
    margin: "auto"
  }
});
/* custom Hooks */

var useInput = function useInput() {
  var initValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initValue),
      value = _useState[0],
      setter = _useState[1];

  var handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

var Signup = function Signup() {
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      id = _useState2[0],
      setId = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      name = _useState3[0],
      setName = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      password = _useState4[0],
      setPassword = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      passwordCheck = _useState5[0],
      setPasswordCheck = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      term = _useState6[0],
      setTerm = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      passwordError = _useState7[0],
      setPasswordError = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      termError = _useState8[0],
      setTermError = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      telephone = _useState9[0],
      setTelephone = _useState9[1];

  var Text = antd__WEBPACK_IMPORTED_MODULE_1__["Typography"].Text;
  var classes = useStyles();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  }),
      isSigningUp = _useSelector.isSigningUp,
      me = _useSelector.me; // useCallback으로 감쌀때 함수 내부에서 쓰는 state를 deps배열로 넣는다.


  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    e.preventDefault();

    if (password !== passwordCheck) {
      return setPasswordError(true);
    }

    if (!term) {
      return setTermError(true);
    }

    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["SIGN_UP_REQUEST"],
      data: {
        id: id,
        name: name,
        password: password,
        telephone: telephone
      }
    });
  }, [id, name, password, passwordCheck, telephone, term]);

  var onChangeId = function onChangeId(e) {
    setId(e.target.value);
  };

  var onChangeName = function onChangeName(e) {
    setName(e.target.value);
  };

  var onChangePassword = function onChangePassword(e) {
    setPasswordError(e.target.value !== passwordCheck);
    setPassword(e.target.value);
  };

  var onChangeTelephone = function onChangeTelephone(e) {
    setTelephone(e.target.value);
  };

  var onChangePasswordChk = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  }, [password]);
  var onChangeTerm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", {
    className: classes.wrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, __jsx("div", {
    className: classes.registerWrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, __jsx("section", {
    className: classes.registerContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, __jsx(Text, {
    strong: true,
    style: {
      fontSize: "25px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, "CREATE AN ACCOUNT"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: onSubmit,
    style: {
      padding: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, __jsx("div", {
    className: classes.secondSection,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, __jsx("div", {
    className: classes.email,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, __jsx("label", {
    className: classes.emailLabel,
    htmlFor: "emailLabel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, "EMAIL ADDRESS"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "register_email",
    value: id,
    required: true,
    onChange: onChangeId,
    placeholder: "YOUR EMAIL ADDRESS",
    style: {
      width: 225,
      height: 50
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  })), __jsx("div", {
    className: classes.duplicate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, "\uC911\uBCF5 \uD655\uC778"))), __jsx("div", {
    className: classes.thirdSection,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, __jsx("div", {
    className: classes.password,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "passwordLabel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, "PASSWORD"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "register_password",
    type: "password",
    value: password,
    required: true,
    onChange: onChangePassword,
    placeholder: "ENTER VALID PASSWORD",
    style: {
      width: 225,
      height: 50
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  })), __jsx("div", {
    className: classes.repassword,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "rePasswordLabel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, "RE-ENTER PASSWORD"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "register_password2",
    type: "password",
    value: passwordCheck,
    required: true,
    onChange: onChangePasswordChk,
    placeholder: "ENTER VALID PASSWORD",
    style: {
      width: 225,
      height: 50
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }))), passwordError && __jsx("div", {
    style: {
      color: "red"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."), __jsx("div", {
    className: classes.fourthSection,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, __jsx("div", {
    className: classes.telephone,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "TELEPHONE",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, "TELEPHONE"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "register_telephone",
    type: "text",
    value: telephone,
    required: true,
    onChange: onChangeTelephone,
    placeholder: "ENTER VALID TELEPHONE",
    style: {
      width: 225,
      height: 50
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  })), __jsx("div", {
    className: classes.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "nameLabel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, "NAME"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "register_name",
    value: name,
    required: true,
    onChange: onChangeName,
    placeholder: "YOUR NAME",
    style: {
      width: 225,
      height: 50
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }))), __jsx("div", {
    className: classes.fifthSection,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }, __jsx("div", {
    className: classes.check,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    name: "user-term",
    checked: term,
    onChange: onChangeTerm,
    style: {
      marginTop: "20px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }, "\uD68C\uC6D0\uAC00\uC785 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4."), termError && __jsx("div", {
    style: {
      color: "red"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }, "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC154\uC57C \uD569\uB2C8\uB2E4.")), __jsx("div", {
    style: {
      margin: "20px 0 0 50px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }, "\uAC00\uC785\uD558\uAE30")))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ })

})
//# sourceMappingURL=signup.js.ee40470b95c957ba81e2.hot-update.js.map