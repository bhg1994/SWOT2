module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/LectureRoominfo.jsx":
/*!****************************************!*\
  !*** ./components/LectureRoominfo.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jaykim/SWOT2/components/LectureRoominfo.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const columns = [{
  title: "예약자",
  dataIndex: "name",
  key: "name"
}, {
  title: "강의실",
  dataIndex: "lectureName",
  key: "lectureName",
  render: text => __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, text)
}, {
  title: "위치",
  dataIndex: "location",
  key: "location"
}, {
  title: "예약 목적",
  key: "tags",
  dataIndex: "tags",
  render: tags => __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, tags.map(tag => {
    let color = tag.length > 5 ? "geekblue" : "green";

    if (tag === "동아리 활동") {
      color = "volcano";
    }

    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tag"], {
      color: color,
      key: tag,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: undefined
    }, tag.toUpperCase());
  }))
}, {
  title: "예약 날짜",
  key: "date",
  render: (text, record) => __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, record.date))
}];
const data = [{
  key: "1",
  name: "김성진",
  lectureName: "승연관",
  location: "1502호",
  date: "9월 20일",
  tags: ["자바스크립트 스터디"]
}, {
  key: "2",
  name: "방효근",
  lectureName: "미가엘관",
  location: "M401",
  date: "9월 27일",
  tags: ["동아리 활동"]
}, {
  key: "3",
  name: "박혜린",
  lectureName: "정보과학관",
  location: "4201호",
  date: "9월 25일",
  tags: ["회의"]
}, {
  key: "4",
  name: "서주은",
  lectureName: "새천년관",
  location: "7302호",
  date: "10월 11일",
  tags: ["조모임 활동"]
}];

const LectureRoominfo = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    columns: columns,
    dataSource: data,
    pagination: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LectureRoominfo);

/***/ }),

/***/ "./components/Notification.jsx":
/*!*************************************!*\
  !*** ./components/Notification.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jaykim/SWOT2/components/Notification.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Notification = () => {
  const {
    0: maintitle,
    1: setMaintitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: subtitle,
    1: setSubtitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: content,
    1: setContent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: noticeimg,
    1: setNoticeimg
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: container,
    1: setContainer
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]); // useEffect : 클래스형 컴포넌트의 componentDidMount 와 componentDidUpdate 를 합친 형태
  // useEffect(() => {
  //   setMaintitle("Main--title");
  //   setSubtitle("Sub-title");
  //   setContent(
  //     "Contents Contents Contents Contents Contents Contents Contents Contents Contents"
  //   );
  //   setNoticeimg(<img src="../../../images/groot.jpg"></img>);
  // }, setContainer);
  // const onChangeValue = e => {
  //   e.preventDefault();
  //   setContainer([
  //     {
  //       maintitle,
  //       subtitle,
  //       content,
  //       noticeimg
  //     }
  //   ]);
  //   console.log(container);
  // };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "\uACF5\uC9C0\uC0AC\uD56D1",
    extra: __jsx("a", {
      href: "Notification",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: undefined
    }, "More"),
    style: {
      margin: "50px 0 0 0",
      width: 300
    },
    hoverable: true,
    cover: __jsx("img", {
      alt: "example",
      src: "static/images/lectureroom.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, "notice__subtitle"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, "notice__content"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, "Card content")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "\uACF5\uC9C0\uC0AC\uD56D2",
    extra: __jsx("a", {
      href: "Notification",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: undefined
    }, "More"),
    hoverable: true,
    style: {
      margin: "100px 0 0 0",
      width: 300
    },
    cover: __jsx("img", {
      alt: "example",
      src: "static/images/lectureroom.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, "Card content"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, "Card content"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, "Card content"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Notification);

/***/ }),

/***/ "./components/NotificationPagination.jsx":
/*!***********************************************!*\
  !*** ./components/NotificationPagination.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jaykim/SWOT2/components/NotificationPagination.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const NotifiactionPagination = () => {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Pagination"], {
    defaultCurrent: 1,
    total: 100,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (NotifiactionPagination);

/***/ }),

/***/ "./components/Studyinfo.jsx":
/*!**********************************!*\
  !*** ./components/Studyinfo.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jaykim/SWOT2/components/Studyinfo.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Studyinfo = ({
  studyInfo
}) => {
  console.log(studyInfo);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    style: {
      marginBottom: "30px"
    },
    hoverable: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "studyimg"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "lectureroom"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "studytitle"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "roominfo"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "studytitle"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "studydate"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "minimum"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "maximum"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "time"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "studypurpose")));
};

/* harmony default export */ __webpack_exports__["default"] = (Studyinfo);

/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! exports provided: LectureRoominfo, Notification, Studyinfo, NotifiactionPagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notification */ "./components/Notification.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return _Notification__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _LectureRoominfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LectureRoominfo */ "./components/LectureRoominfo.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LectureRoominfo", function() { return _LectureRoominfo__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Studyinfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Studyinfo */ "./components/Studyinfo.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Studyinfo", function() { return _Studyinfo__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _NotificationPagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NotificationPagination */ "./components/NotificationPagination.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotifiactionPagination", function() { return _NotificationPagination__WEBPACK_IMPORTED_MODULE_3__["default"]; });







/***/ }),

/***/ "./containers/Study.jsx":
/*!******************************!*\
  !*** ./containers/Study.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Studyinfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Studyinfo */ "./components/Studyinfo.jsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/jaykim/SWOT2/containers/Study.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Study = () => {
  // const [studyimg, setStudyimg] = useState("");
  // const [lectureroom, setLectureroom] = useState("");
  // const [roominfo, setRoomInfo] = useState("");
  // const [studytitle, setStudytitle] = useState("");
  // const [studydate, setStudyDate] = useState("");
  // const [minimum, setMinimum] = useState("");
  // const [maximum, setMaximum] = useState("");
  // const [time, setTime] = useState("");
  // const [studypurpose, setStudypurpose] = useState("");
  // const [container, setContainer] = useState([]);
  // useEffect(() => {
  //   setStudyimg(<img src="../../../images/lectureroom.jpg"></img>);
  //   setLectureroom("미가엘관 401호");
  //   setRoomInfo("미가엘관 4번 건물 1층");
  //   setStudytitle("Java Programming Study");
  //   setStudyDate("2019년 9월 10일");
  //   setMinimum("3명");
  //   setMaximum("5명");
  //   setTime("오후 1시 ~ 오후 6시 ( 총 5시간 ) ");
  //   setStudypurpose(
  //     "자바 프로그래밍 상속에 관하여 실시간 라이브 코딩 및 서로간 코드 리뷰"
  //   );
  // }, setContainer);
  // const onChangeValue = e => {
  //   e.preventDefault();
  //   setContainer([
  //     {
  //       studyimg,
  //       lectureroom,
  //       roominfo,
  //       studytitle,
  //       studydate,
  //       minimum,
  //       maximum,
  //       time,
  //       studypurpose
  //     }
  //   ]);
  //   console.log(container);
  // };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    style: {
      marginTop: "50px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    style: {
      width: 700
    },
    title: "\uC2A4\uD130\uB514 \uACF5\uC9C0\uC0AC\uD56D",
    extra: __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: undefined
    }, "Study > "),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary",
    style: {
      marginRight: "50px",
      width: "100px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, "\uC778\uC6D0 \uC218"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "danger",
    style: {
      width: "100px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, "\uB0A0 \uC9DC")), __jsx("div", {
    style: {
      marginTop: "50px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, __jsx(_components_Studyinfo__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }), __jsx(_components_Studyinfo__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Pagination"], {
    defaultCurrent: 1,
    total: 100,
    style: {
      textAlign: "center",
      marginTop: "20px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Study);

/***/ }),

/***/ "./containers/SwotMap.jsx":
/*!********************************!*\
  !*** ./containers/SwotMap.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SWOTMap; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_image_mapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-image-mapper */ "react-image-mapper");
/* harmony import */ var react_image_mapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_image_mapper__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/jaykim/SWOT2/containers/SwotMap.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {}
});
const lectureRoom = {
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
    coords: [515, 160, 18],
    preFillColor: "blue",
    fillColor: "purple"
  }]
};
function SWOTMap() {
  const classes = useStyles();

  const imageClick = (area, event) => {
    console.log(event);
    console.log(area);
    console.log(area.name);
  };

  const mapView = __jsx(react_image_mapper__WEBPACK_IMPORTED_MODULE_2___default.a, {
    src: "static/images/SWOTMAP.png",
    width: 550,
    height: 700,
    map: lectureRoom,
    onClick: imageClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  });

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
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
  }, mapView)));
}

/***/ }),

/***/ "./containers/index.js":
/*!*****************************!*\
  !*** ./containers/index.js ***!
  \*****************************/
/*! exports provided: SwotMap, Study */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SwotMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SwotMap */ "./containers/SwotMap.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwotMap", function() { return _SwotMap__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Study__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Study */ "./containers/Study.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Study", function() { return _Study__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ "./components/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../containers */ "./containers/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/jaykim/SWOT2/pages/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // import MainCarousel from "../components/MainCarousel";

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  ["@media (max-width:780px)"]: {
    map: {
      display: "none",
      backgroundColor: "red"
    }
  }
});

const Home = () => {
  const classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    gutter: 24,
    type: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    bordered: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 24,
    md: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["Notification"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 24,
    md: 12,
    style: {
      marginBottom: "70px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["Notification"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  })), __jsx("div", {
    style: {
      textAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["NotifiactionPagination"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 24,
    md: 12,
    style: {
      marginTop: "50px",
      minHeight: 900
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    extra: __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: undefined
    }, "Lecture >"),
    title: "SWOT MAP",
    hoverable: true,
    style: {
      textAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx(_containers__WEBPACK_IMPORTED_MODULE_3__["SwotMap"], {
    className: classes.map,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    style: {
      marginTop: "30px"
    },
    title: "\uAC15\uC758\uC2E4 \uC608\uC57D\uD604\uD669",
    hoverable: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["LectureRoominfo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }))))), __jsx(_containers__WEBPACK_IMPORTED_MODULE_3__["Study"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jaykim/SWOT2/pages/index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-image-mapper":
/*!*************************************!*\
  !*** external "react-image-mapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-image-mapper");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map