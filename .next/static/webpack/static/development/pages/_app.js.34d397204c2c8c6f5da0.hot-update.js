webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");



var _marked =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logIn),
    _marked2 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogIn),
    _marked3 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(signUp),
    _marked4 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchSignUp),
    _marked5 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logOut),
    _marked6 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogOut),
    _marked7 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadUser),
    _marked8 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadUser),
    _marked9 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(userSaga),
    _marked10 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(reservate),
    _marked11 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchReservation);





function logInAPI(loginData) {
  // 서버에 요청을 보내는 부분
  var form = new FormData();
  form.append('email', loginData.id);
  form.append('password', loginData.password);
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("http://swot.devdogs.kr:8080/api/auth/signin", form).then(function (response) {
    console.log("id,password : " + loginData.id, loginData.password);
    console.log('response : ', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(response, null, 2));
    var result = response.data;
    return result;
  })["catch"](function (error) {
    console.log('failed', error);
    return error;
  });
}

function logIn(action) {
  var result;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logIn$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(logInAPI, action.data);

        case 3:
          result = _context.sent;

          if (!(result.statusMsg === "success")) {
            _context.next = 13;
            break;
          }

          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            // put은 dispatch 동일
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["LOG_IN_SUCCESS"]
          });

        case 7:
          localStorage.setItem("accessToken", result.accessToken);
          localStorage.setItem("refreshToken", result.refreshToken);
          alert("로그인 성공");
          location.href = "/";
          _context.next = 17;
          break;

        case 13:
          _context.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["LOG_IN_FAILURE"]
          });

        case 15:
          alert("로그인 정보 틀림");
          location.href = "/login";

        case 17:
          _context.next = 25;
          break;

        case 19:
          _context.prev = 19;
          _context.t0 = _context["catch"](0);
          // loginAPI 실패
          console.error(_context.t0);
          _context.next = 24;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["LOG_IN_FAILURE"]
          });

        case 24:
          alert("통신 장애");

        case 25:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 19]]);
}

function watchLogIn() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogIn$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_reducers_user__WEBPACK_IMPORTED_MODULE_4__["LOG_IN_REQUEST"], logIn);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

function signUpAPI(signUpData) {
  console.log(signUpData); // 서버에 요청을 보내는 부분

  var form = new FormData();
  form.append('email', signUpData.id);
  form.append('password', signUpData.password);
  form.append('name', signUpData.name);
  form.append('phone', signUpData.telephone);
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("http://swot.devdogs.kr:8080/api/auth/signup", form).then(function (response) {
    console.log('response : ', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(response, null, 2));
    var result = response.data;
    return result;
  })["catch"](function (error) {
    console.log('failed', error);
    return error;
  });
}

function signUp(action) {
  var result;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function signUp$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(signUpAPI, action.data);

        case 3:
          result = _context3.sent;

          if (!(result.statusMsg === "success")) {
            _context3.next = 11;
            break;
          }

          _context3.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            // put은 dispatch 동일
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["SIGN_UP_SUCCESS"]
          });

        case 7:
          alert("이메일인증 진행 후 다시 로그인 해 주세요");
          location.href = "/login";
          _context3.next = 15;
          break;

        case 11:
          _context3.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["SIGN_UP_FAILURE"]
          });

        case 13:
          alert("오류. 다시 진행해");
          location.href = "/signup";

        case 15:
          _context3.next = 24;
          break;

        case 17:
          _context3.prev = 17;
          _context3.t0 = _context3["catch"](0);
          // loginAPI 실패
          console.error(_context3.t0);
          _context3.next = 22;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["SIGN_UP_FAILURE"],
            error: _context3.t0
          });

        case 22:
          alert("오류. 다시 진행해");
          location.href = "/signup";

        case 24:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 17]]);
}

function watchSignUp() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchSignUp$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_reducers_user__WEBPACK_IMPORTED_MODULE_4__["SIGN_UP_REQUEST"], signUp);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

function logOutAPI() {
  // 서버에 요청을 보내는 부분
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/user/logout', {}, {
    withCredentials: true
  });
}

function logOut() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logOut$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(logOutAPI);

        case 3:
          _context5.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            // put은 dispatch 동일
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["LOG_OUT_SUCCESS"]
          });

        case 5:
          _context5.next = 12;
          break;

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          // loginAPI 실패
          console.error(_context5.t0);
          _context5.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["LOG_OUT_FAILURE"],
            error: _context5.t0
          });

        case 12:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 7]]);
}

function watchLogOut() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogOut$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_reducers_user__WEBPACK_IMPORTED_MODULE_4__["LOG_OUT_REQUEST"], logOut);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}

function loadUserAPI() {
  // 서버에 요청을 보내는 부분
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/user/', {
    withCredentials: true
  });
}

function loadUser() {
  var result;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadUser$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(loadUserAPI);

        case 3:
          result = _context7.sent;
          _context7.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            // put은 dispatch 동일
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["LOAD_USER_SUCCESS"],
            data: result.data
          });

        case 6:
          _context7.next = 13;
          break;

        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](0);
          // loginAPI 실패
          console.error(_context7.t0);
          _context7.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["LOAD_USER_FAILURE"],
            error: _context7.t0
          });

        case 13:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7, null, [[0, 8]]);
}

function watchLoadUser() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadUser$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_reducers_user__WEBPACK_IMPORTED_MODULE_4__["LOAD_USER_REQUEST"], loadUser);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}

function userSaga() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function userSaga$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchLoadUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchSignUp)]);

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
}

function reservateAPI(reservateData) {
  // 서버에 요청을 보내는 부분
  var form = new FormData(); // form.append('email', reservateData.id)
  // form.append('password', reservateData.password)

  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("http://swot.devdogs.kr:8080/api/auth/reservation", form).then(function (response) {
    console.log('response : ', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(response, null, 2));
    var result = response.data;
    return result;
  })["catch"](function (error) {
    console.log('failed', error);
    return error;
  });
}

function reservate(action) {
  var result;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function reservate$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(reservateAPI, action.data);

        case 3:
          result = _context10.sent;

          if (!(result.statusMsg === "success")) {
            _context10.next = 11;
            break;
          }

          _context10.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            // put은 dispatch 동일
            type: RESERVATION_SUCCESS
          });

        case 7:
          alert("예약 성공");
          location.href = "/";
          _context10.next = 15;
          break;

        case 11:
          _context10.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: RESERVATION_FAILURE
          });

        case 13:
          alert("예약 실패");
          location.href = "/Reservation";

        case 15:
          _context10.next = 23;
          break;

        case 17:
          _context10.prev = 17;
          _context10.t0 = _context10["catch"](0);
          // loginAPI 실패
          console.error(_context10.t0);
          _context10.next = 22;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: RESERVATION_FAILURE
          });

        case 22:
          alert("통신 장애");

        case 23:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10, null, [[0, 17]]);
}

function watchReservation() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchReservation$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_reducers_user__WEBPACK_IMPORTED_MODULE_4__["RESERVATION_REQUEST"], reservate);

        case 2:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11);
}

/***/ })

})
//# sourceMappingURL=_app.js.34d397204c2c8c6f5da0.hot-update.js.map