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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/BuildingList.jsx":
/*!*************************************!*\
  !*** ./components/BuildingList.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _LectureRoomList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LectureRoomList */ "./components/LectureRoomList.jsx");

var _jsxFileName = "C:\\Users\\6201-20\\SWOT2\\components\\BuildingList.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const {
  TabPane
} = antd__WEBPACK_IMPORTED_MODULE_2__["Tabs"];
const {
  Text
} = antd__WEBPACK_IMPORTED_MODULE_2__["Typography"];

const BuildingList = () => {
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: image,
    1: setImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");

  const showModal = () => {
    setVisible(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setVisible(false);
    console.log(image);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    listType: "picture",
    headers: {
      authorization: "authorization-text"
    },

    onChange(info) {
      setImage(info.file.name);

      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }

      if (info.file.status === "done") {
        antd__WEBPACK_IMPORTED_MODULE_2__["message"].success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        antd__WEBPACK_IMPORTED_MODULE_2__["message"].error(`${info.file.name} file upload failed.`);
      }
    }

  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    title: "\uAC15\uC758\uC2E4 \uCD94\uAC00",
    visible: visible,
    footer: null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Upload"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    type: "upload",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }), " Click to Upload"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    addonBefore: "\uAC15\uC758\uC2E4 \uCF54\uB4DC",
    style: {
      width: "50%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    addonBefore: "\uAC15\uC758\uC2E4\uBA85",
    style: {
      width: "50%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, __jsx(Text, {
    type: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, "\uCD5C\uB300 \uC778\uC6D0\uC218 : "), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["InputNumber"], {
    min: 3,
    max: 30,
    defaultVAlue: 3,
    style: {
      width: "50%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary",
    style: {
      marginRight: "20px"
    },
    htmlType: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, "\uCD94\uAC00"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "danger",
    onClick: handleCancel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, "\uCDE8\uC18C")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
    defaultActiveKey: "11",
    style: {
      marginTop: "70px",
      textAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, __jsx(TabPane, {
    tab: "\uC2B9\uC5F0\uAD00",
    key: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }), __jsx(TabPane, {
    tab: "\uC77C\uB9CC\uAD00",
    key: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }), __jsx(TabPane, {
    tab: "\uC6D4\uB2F9\uAD00",
    key: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }), __jsx(TabPane, {
    tab: "\uB098\uB214\uAD00",
    key: "5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }), __jsx(TabPane, {
    tab: "\uC774\uCC9C\uD658\uAD00",
    key: "6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }), __jsx(TabPane, {
    tab: "\uC0C8\uCC9C\uB144\uAD00",
    key: "7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }), __jsx(TabPane, {
    tab: "\uC131\uBBF8\uAC00\uC5D8\uC131\uB2F9",
    key: "9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }), __jsx(TabPane, {
    tab: "\uBBF8\uAC00\uC5D8\uAD00",
    key: "11",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: {
      marginBottom: "20px",
      textAlign: "right"
    },
    type: "primary",
    onClick: showModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, "\uAC15\uC758\uC2E4 \uCD94\uAC00"), __jsx(_LectureRoomList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (BuildingList);

/***/ }),

/***/ "./components/Facilityrental.jsx":
/*!***************************************!*\
  !*** ./components/Facilityrental.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\6201-20\\SWOT2\\components\\Facilityrental.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const {
  Text
} = antd__WEBPACK_IMPORTED_MODULE_1__["Typography"];
const {
  TextArea
} = antd__WEBPACK_IMPORTED_MODULE_1__["Input"];

function onChange(date, dateString) {
  console.log(date, dateString);
}

function oncontentChange(content) {
  setContent(e.target.value);
}

const Facilityrental = () => {
  const {
    0: content,
    1: setContent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: maximum,
    1: setMaximum
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

  const oncontentChange = e => {
    setContent(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setVisible(true);
    console.log(content);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onChangeMaximum = value => {
    setMaximum(value);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    style: {
      margin: "auto",
      width: "50%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx("section", {
    style: {
      marginTop: "50px",
      border: "1px solid gray",
      textAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      marginTop: "20px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx(Text, {
    strong: true,
    style: {
      marginLeft: "10px",
      fontSize: "18px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, "\uC2DC\uC124 \uB300\uC5EC \uC2E0\uCCAD : \uB300\uC5EC \uD558\uACE0\uC790 \uD558\uB294 \uC591\uC2DD\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    style: {
      padding: 10
    },
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, __jsx(Text, {
    type: "secondary",
    style: {
      fontSize: "18px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, "\uB300\uC5EC \uC2DC\uAC04"), __jsx("div", {
    style: {
      display: "flex",
      marginTop: "20px",
      justifyContent: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    style: {
      display: "flex"
    },
    label: "Start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["TimePicker"], {
    style: {
      marginRight: "20px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    style: {
      display: "flex"
    },
    label: "End",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["TimePicker"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }))), __jsx(Text, {
    type: "secondary",
    style: {
      fontSize: "18px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, "\uB300\uC5EC \uC0AC\uC720"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    style: {
      marginTop: "20px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, __jsx(TextArea, {
    value: content,
    onChange: oncontentChange,
    autosize: {
      minRows: 4,
      maxRows: 8
    },
    style: {
      width: "50%"
    },
    rows: 4,
    placeholder: "\uAC15\uC758\uC2E4 \uB300\uC5EC \uC2E0\uCCAD\uC790\uB294 \uD559\uBC88\uACFC \uC774\uB984\uC744 \uBAA8\uB450 \uAE30\uC7AC\uD574 \uC8FC\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4. \uC778\uC6D0\uACFC \uCC28\uC774\uAC00 \uC788\uC744 \uC2DC, \uB300\uC5EC \uBC18\uB824\uC758 \uC0AC\uC720\uAC00 \uB429\uB2C8\uB2E4.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  })), __jsx(Text, {
    type: "secondary",
    style: {
      fontSize: "18px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, "\uC778\uC6D0 \uC218"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["InputNumber"], {
    id: "maximum",
    onChange: onChangeMaximum,
    min: 3,
    max: 30,
    defaultVAlue: 3,
    style: {
      width: "130px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    style: {
      marginTop: "20px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    addonBefore: "\uC2E0\uCCAD\uC790 \uC804\uD654\uBC88\uD638",
    style: {
      width: "50%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, __jsx(Text, {
    type: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, "\uC2DC\uC124\uBB3C \uB300\uC5EC \uADDC\uC815\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4 : "), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    htmlType: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, "\uB300\uC5EC \uC2E0\uCCAD")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    title: "\uC608\uC57D \uC2E0\uCCAD \uC644\uB8CC",
    visible: visible,
    onOk: handleOk,
    onCancel: handleCancel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }, "\uC608\uC57D\uC2E0\uCCAD\uC774 \uC644\uB8CC \uB418\uC5C8\uC2B5\uB2C8\uB2E4."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }, "\uC608\uC57D \uD604\uD669\uC740 \uB9C8\uC774\uD398\uC774\uC9C0\uC5D0\uC11C \uD655\uC778\uC774 \uAC00\uB2A5\uD558\uBA70 3\uC77C \uC774\uB0B4\uC5D0 \uCC98\uB9AC\uAC00 \uC644\uB8CC\uB420 \uC608\uC815\uC785\uB2C8\uB2E4.")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Facilityrental);

/***/ }),

/***/ "./components/LectureRoomApplication.jsx":
/*!***********************************************!*\
  !*** ./components/LectureRoomApplication.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\6201-20\\SWOT2\\components\\LectureRoomApplication.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const {
  Column
} = antd__WEBPACK_IMPORTED_MODULE_1__["Table"];
const data = [{
  key: "1",
  lecturecode: "M201",
  lecturename: "대학원강의실",
  capacity: "14"
}, {
  key: "2",
  lecturecode: "M202",
  lecturename: "대학원강의실",
  capacity: "14"
}, {
  key: "3",
  lecturecode: "M204",
  lecturename: "일반강의실",
  capacity: "14"
}, {
  key: "4",
  lecturecode: "M301",
  lecturename: "일반강의실",
  capacity: "120"
}, {
  key: "5",
  lecturecode: "M401",
  lecturename: "컴퓨터강의실",
  capacity: "40"
}, {
  key: "6",
  lecturecode: "M402",
  lecturename: "일반강의실",
  capacity: "50"
}];

const LectureRoomApplication = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    dataSource: data,
    pagination: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx(Column, {
    title: "\uAC15\uC758\uC2E4 \uCF54\uB4DC",
    dataIndex: "lecturecode",
    key: "lecturecode",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }), __jsx(Column, {
    title: "\uAC15\uC758\uC2E4\uBA85",
    dataIndex: "lecturename",
    key: "lecturename",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }), __jsx(Column, {
    title: "\uC218\uC6A9\uC778\uC6D0",
    dataIndex: "capacity",
    key: "capacity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }), __jsx(Column, {
    title: "\uD655\uC778\uB780",
    key: "action",
    render: () => __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: undefined
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: undefined
    }, "\uC218\uB77D"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
      type: "vertical",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: undefined
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: undefined
    }, "\uAC70\uC808")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (LectureRoomApplication);

/***/ }),

/***/ "./components/LectureRoomList.jsx":
/*!****************************************!*\
  !*** ./components/LectureRoomList.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\6201-20\\SWOT2\\components\\LectureRoomList.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const columns = [{
  title: "강의실코드",
  dataIndex: "lecturecode",
  key: "lecturecode"
}, {
  title: "강의실명",
  dataIndex: "lecturename",
  key: "lecturename",
  render: text => __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/reservationForm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, text))
}, {
  title: "수용인원",
  dataIndex: "capacity",
  key: "capacity"
}];
const data = [{
  key: "1",
  lecturecode: "M201",
  lecturename: "대학원강의실",
  capacity: "14"
}, {
  key: "2",
  lecturecode: "M202",
  lecturename: "대학원강의실",
  capacity: "14"
}, {
  key: "3",
  lecturecode: "M204",
  lecturename: "일반강의실",
  capacity: "14"
}, {
  key: "4",
  lecturecode: "M301",
  lecturename: "일반강의실",
  capacity: "120"
}, {
  key: "5",
  lecturecode: "M401",
  lecturename: "컴퓨터강의실",
  capacity: "40"
}, {
  key: "6",
  lecturecode: "M402",
  lecturename: "일반강의실",
  capacity: "50"
}, {
  key: "7",
  lecturecode: "M402",
  lecturename: "일반강의실",
  capacity: "50"
}, {
  key: "8",
  lecturecode: "M402",
  lecturename: "일반강의실",
  capacity: "50"
}, {
  key: "9",
  lecturecode: "M402",
  lecturename: "일반강의실",
  capacity: "50"
}, {
  key: "10",
  lecturecode: "M402",
  lecturename: "일반강의실",
  capacity: "50"
}, {
  key: "11",
  lecturecode: "M402",
  lecturename: "일반강의실",
  capacity: "50"
}, {
  key: "12",
  lecturecode: "M402",
  lecturename: "일반강의실",
  capacity: "50"
}, {
  key: "13",
  lecturecode: "M402",
  lecturename: "일반강의실",
  capacity: "50"
}, {
  key: "14",
  lecturecode: "M402",
  lecturename: "일반강의실",
  capacity: "50"
}];

const LectureRoomList = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    columns: columns,
    dataSource: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LectureRoomList);

/***/ }),

/***/ "./components/LectureRoomModal.jsx":
/*!*****************************************!*\
  !*** ./components/LectureRoomModal.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\6201-20\\SWOT2\\components\\LectureRoomModal.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const LectureRoomModal = () => {
  console.log("test");
  const {
    0: Lectureroom,
    1: setLectureroom
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("미가엘관");
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true); // useEffect(() => {
  //   setVisible(isvisible);
  // }, [isvisible]);

  const handleCancel = () => {
    setVisible(false);
  };

  const handleOk = () => {
    setVisible(false);
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    title: "\uAC15\uC758\uC2E4 \uC815\uBCF4",
    visible: visible,
    onOk: handleOk,
    onCancel: handleCancel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, Lectureroom)));
};

/* harmony default export */ __webpack_exports__["default"] = (LectureRoomModal);

/***/ }),

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
var _jsxFileName = "C:\\Users\\6201-20\\SWOT2\\components\\LectureRoominfo.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const columns = [{
  title: "강의실 이미지",
  dataIndex: "lectureroomimage",
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
  title: "최소 인원수",
  dataIndex: "minimum",
  key: "minimum"
}, {
  title: "최대 인원수",
  dataIndex: "maximum",
  key: "maximum"
}, {
  title: "예약 상태",
  dataIndex: "status",
  key: "status",
  render: status => __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, status.map(status => {
    let color = status === "예약 가능" ? "geekblue" : "green";

    if (status === "예약 중") {
      color = "volcano";
    }

    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tag"], {
      color: color,
      key: status,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: undefined
    }, status);
  }))
}];
const data = [{
  key: "1",
  lectureroomimage: "김성진",
  lectureName: "M401호",
  minimum: "3명",
  maximum: "6명",
  status: ["예약 중"]
}, {
  key: "2",
  lectureroomimage: "방효근",
  lectureName: "M404호",
  minimum: "5명",
  maximum: "10명",
  status: ["예약 가능"]
}, {
  key: "3",
  lectureroomimage: "박혜린",
  lectureName: "M201호",
  minimum: "3명",
  maximum: "9명",
  status: ["예약 중"]
}, {
  key: "4",
  lectureroomimage: "서주은",
  lectureName: "M304호",
  minimum: "10명",
  maximum: "20명",
  status: ["예약 가능"]
}];

const LectureRoominfo = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    style: {
      marginRight: "30px",
      textAlign: "center"
    },
    title: "\uBBF8\uAC00\uC5D8\uAD00",
    hoverable: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    columns: columns,
    dataSource: data,
    pagination: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (LectureRoominfo);

/***/ }),

/***/ "./components/MainCarousel.jsx":
/*!*************************************!*\
  !*** ./components/MainCarousel.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\6201-20\\SWOT2\\components\\MainCarousel.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


let settings = {
  centerMode: true,
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 2
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
};

const MainCarousel = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    charSet: "UTF-8",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }), __jsx("div", {
    style: {
      margin: "40px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx("img", {
    src: "static/images/lectureroom.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx("img", {
    src: "static/images/lectureroom2.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx("img", {
    src: "static/images/lectureroom3.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, __jsx("img", {
    src: "static/images/lectureroom4.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, __jsx("img", {
    src: "static/images/lectureroom.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, __jsx("img", {
    src: "static/images/lectureroom2.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, __jsx("img", {
    src: "static/images/lectureroom3.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, __jsx("img", {
    src: "static/images/lectureroom4.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (MainCarousel);

/***/ }),

/***/ "./components/MainFooter.jsx":
/*!***********************************!*\
  !*** ./components/MainFooter.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\6201-20\\SWOT2\\components\\MainFooter.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const {
  Footer
} = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"];

const MainFooter = () => {
  return __jsx(Footer, {
    style: {
      textAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "\uC804\uD654\uBC88\uD638 02-2610-4114 ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), " SWOT, \uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uAD6C\uB85C\uAD6C \uC624\uB9582\uB3D9 \uC5F0\uB3D9\uB85C 320 ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), " Seoul, KR 08359"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), "\uC800\uC791\uAD8C \uBCF4\uD638 \xA9 SWOT Companies Inc. \uBAA8\uB4E0 \uAD8C\uB9AC \uC720\uBCF4")));
};

/* harmony default export */ __webpack_exports__["default"] = (MainFooter);

/***/ }),

/***/ "./components/MasternameEditForm.jsx":
/*!*******************************************!*\
  !*** ./components/MasternameEditForm.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\6201-20\\SWOT2\\components\\MasternameEditForm.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const MasternameEditForm = () => {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    style: {
      margin: "20px 0 20px 0",
      border: "1px solid #d9d9d9",
      padding: "20px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      display: "flex"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    style: {
      marginTop: "2px"
    },
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: undefined
    }, "M"),
    title: "Master",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    style: {
      marginLeft: "30px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "\uB85C\uADF8\uC544\uC6C3"))));
};

/* harmony default export */ __webpack_exports__["default"] = (MasternameEditForm);

/***/ }),

/***/ "./components/NotificationBoard.jsx":
/*!******************************************!*\
  !*** ./components/NotificationBoard.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\6201-20\\SWOT2\\components\\NotificationBoard.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const NotificationBoard = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, "Hi"));
};

/* harmony default export */ __webpack_exports__["default"] = (NotificationBoard);

/***/ }),

/***/ "./components/ReservationRoominfo.jsx":
/*!********************************************!*\
  !*** ./components/ReservationRoominfo.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\6201-20\\SWOT2\\components\\ReservationRoominfo.jsx";

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

const ReservationRoominfo = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    style: {
      margin: "30px 30px 0 0",
      width: "600px"
    },
    title: "\uAC15\uC758\uC2E4 \uC608\uC57D\uD604\uD669",
    hoverable: true,
    extra: __jsx("a", {
      href: "reservation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: undefined
    }, "More"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    columns: columns,
    dataSource: data,
    pagination: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ReservationRoominfo);

/***/ }),

/***/ "./components/ReservationTable.jsx":
/*!*****************************************!*\
  !*** ./components/ReservationTable.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\6201-20\\SWOT2\\components\\ReservationTable.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

// const columns = [
//   {
//     title: "시간",
//     width: 50,
//     dataIndex: "clock",
//     key: "clock"
//   },
//   {
//     title: "00",
//     width: 30,
//     dataIndex: "zero",
//     key: "zero"
//   },
//   {
//     title: "01",
//     width: 30,
//     dataIndex: "one",
//     key: "one"
//   },
//   {
//     title: "02",
//     width: 30,
//     dataIndex: "two",
//     key: "two"
//   },
//   {
//     title: "03",
//     width: 30,
//     dataIndex: "three",
//     key: "three"
//   },
//   {
//     title: "04",
//     width: 30,
//     dataIndex: "four",
//     key: "four"
//   },
//   {
//     title: "05",
//     width: 30,
//     dataIndex: "five",
//     key: "five"
//   },
//   {
//     title: "06",
//     width: 30,
//     dataIndex: "six",
//     key: "six"
//   },
//   {
//     title: "07",
//     width: 30,
//     dataIndex: "seven",
//     key: "seven"
//   },
//   {
//     title: "08",
//     width: 30,
//     dataIndex: "eight",
//     key: "eight"
//   },
//   {
//     title: "09",
//     width: 30,
//     dataIndex: "nine",
//     key: "nine"
//   },
//   {
//     title: "10",
//     width: 30,
//     dataIndex: "ten",
//     key: "ten"
//   },
//   {
//     title: "11",
//     width: 30,
//     dataIndex: "eleven",
//     key: "eleven"
//   },
//   {
//     title: "12",
//     width: 30,
//     dataIndex: "twelve",
//     key: "twelve"
//   },
//   {
//     title: "13",
//     width: 30,
//     dataIndex: "thirteen",
//     key: "thirteen"
//   },
//   {
//     title: "14",
//     width: 30,
//     dataIndex: "fourteen",
//     key: "fourteen"
//   },
//   {
//     title: "15",
//     width: 30,
//     dataIndex: "fifteen",
//     key: "fifteen"
//   },
//   {
//     title: "16",
//     width: 30,
//     dataIndex: "sixteen",
//     key: "sixteen"
//   },
//   {
//     title: "17",
//     width: 30,
//     dataIndex: "seventeen",
//     key: "seventeen"
//   },
//   {
//     title: "18",
//     width: 30,
//     dataIndex: "eighteen",
//     key: "eighteen"
//   },
//   {
//     title: "19",
//     width: 30,
//     dataIndex: "nineteen",
//     key: "nineteen"
//   },
//   {
//     title: "20",
//     width: 30,
//     dataIndex: "twenty",
//     key: "twenty"
//   },
//   {
//     title: "21",
//     width: 30,
//     dataIndex: "twenty_one",
//     key: "twenty_one"
//   },
//   {
//     title: "22",
//     width: 30,
//     dataIndex: "twenty_two",
//     key: "twenty_two"
//   },
//   {
//     title: "23",
//     width: 30,
//     dataIndex: "twenty_three",
//     key: "twenty_three"
//   }
// ];
const ReservationTable = () => {
  const columns = ["시  간", "00시", "01시", "02시", "03시", "04시", "05시", "06시", "07시", "08시", "09시", "10시", "11시", "12시", "13시", "14시", "15시", "16시", "17시", "18시", "19시", "20시", "21시", "22시", "23시"];
  const columnList = columns.map((column, index) => __jsx("div", {
    key: index,
    style: {
      margin: "0 auto",
      padding: "2px",
      borderRight: "1px solid gray",
      height: "30px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: undefined
  }, column));
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    style: {
      width: "1400px",
      height: "200px",
      border: "1px solid gray",
      borderWidth: "thin"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      height: "50px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      borderBottom: "1px solid gray"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: undefined
  }, columnList))));
};

/* harmony default export */ __webpack_exports__["default"] = (ReservationTable);

/***/ }),

/***/ "./components/ReservationTime.jsx":
/*!****************************************!*\
  !*** ./components/ReservationTime.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\6201-20\\SWOT2\\components\\ReservationTime.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const {
  Column
} = antd__WEBPACK_IMPORTED_MODULE_1__["Table"];

const ReservationTime = ({
  value
}) => {
  const morning = ["00시", "01시", "02시", "03시", "04시", "05시", "06시", "07시", "08시", "09시", "10시", "11시"];
  const afternoon = ["12시", "13시", "14시", "15시", "16시", "17시", "18시", "19시", "20시", "21시", "22시", "23시"];
  const moringData = [{
    key: "moringData",
    0: "예약불가",
    1: "예약불가",
    2: "예약불가",
    3: "예약불가",
    4: "예약불가",
    5: "예약불가",
    6: "예약불가",
    7: "예약불가",
    8: "예약불가",
    9: "예약가능",
    10: "예약가능",
    11: "예약 중"
  }];
  const AfternoonData = [{
    key: "moringData",
    0: "예약 중",
    1: "예약 중",
    2: "예약가능",
    3: "예약가능",
    4: "예약가능",
    5: "예약 중",
    6: "예약 중",
    7: "예약 중",
    8: "예약 중",
    9: "예약가능",
    10: "예약불가",
    11: "예약불가"
  }];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    dataSource: moringData,
    pagination: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, value ? morning.map((time, i) => __jsx(Column, {
    title: time,
    dataIndex: i,
    key: i,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  })) : ""), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    dataSource: AfternoonData,
    pagination: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, value ? afternoon.map((time, i) => __jsx(Column, {
    title: time,
    dataIndex: i,
    key: i,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  })) : ""));
};

/* harmony default export */ __webpack_exports__["default"] = (ReservationTime);

/***/ }),

/***/ "./components/StudyBoard.jsx":
/*!***********************************!*\
  !*** ./components/StudyBoard.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\6201-20\\SWOT2\\components\\StudyBoard.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const {
  Text
} = antd__WEBPACK_IMPORTED_MODULE_1__["Typography"];

const StudyBoard = () => {
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
      lineNumber: 38
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    style: {
      width: "300px"
    },
    title: "\uC2A4\uD130\uB514 \uBAA8\uC9D1 \uAC8C\uC2DC\uAE00",
    hoverable: true,
    cover: __jsx("img", {
      alt: "example",
      src: "static/images/lectureroom.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx(Text, {
    type: "warning",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "\b\uAC04\uB2E8\uD55C \uC0AC\uC774\uB4DC \uD504\uB85C\uC81D\uD2B8 \uD574\uCEE4\uD1A4"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }), __jsx(Text, {
    mark: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "\uB0A0\uC9DC : 9\uC6D4 28\uC77C \uC624\uC804 9\uC2DC ~ \uC624\uD6C4 9\uC2DC"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }), __jsx(Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, "\uBAA9\uC801 : \uC8FC\uC81C\uB294 \uD22C\uB450 \uCE98\uB9B0\uB354\uB85C \uD3C9\uC18C\uC5D0 \uC27D\uAC8C \uC811\uD560 \uC218 \uC788\uB294 \uD22C\uB450\uC571 \uBCF4\uB2E4\uB294 \uC544\uC8FC \uC57D\uAC04 \uC870\uAE08\uB354 \uACE0\uB3C4\uD654 \uB420 \uC218 \uC788\uAE30 \uB54C\uBB38\uC5D0 \uC774 \uC810\uC5D0 \uB300\uD574\uC11C \uC778\uC9C0\uD55C \uD6C4 \uC2A4\uD130\uB514 \uC608\uC57D \uC2E0\uCCAD \uBD80\uD0C1 \uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4."), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }), __jsx(Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, "\uCD5C\uB300 \uC778\uC6D0\uC218 : 6\uBA85")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "\uC2A4\uD130\uB514 \uBAA8\uC9D1 \uAC8C\uC2DC\uAE00",
    hoverable: true,
    style: {
      margin: "50px 0 0 0",
      width: "300px"
    },
    cover: __jsx("img", {
      alt: "example",
      src: "static/images/lectureroom2.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx(Text, {
    type: "warning",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, "\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uC2A4\uD130\uB514"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }), __jsx(Text, {
    mark: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, "\uB0A0\uC9DC : 9\uC6D4 27\uC77C \uC624\uD6C4 1\uC2DC ~ \uC624\uD6C4 5\uC2DC"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }), __jsx(Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, "\uBAA9\uC801 : \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uB97C \uD65C\uC6A9\uD558\uC5EC HTTP\uD1B5\uC2E0, JSON, \uB3D9\uAE30/\uBE44\uB3D9\uAE30, \uB0B4\uC7A5\uAC1D\uCCB4, this\uBC14\uC778\uB529, \uD504\uB85C\uD1A0\uD0C0\uC785\uC5D0 \uAD00\uD558\uC5EC \uAC04\uB2E8\uD558\uAC8C \uAC1C\uB150 \uC815\uB9AC"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }), __jsx(Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, "\uCD5C\uB300 \uC778\uC6D0\uC218 : 4\uBA85"))));
};

/* harmony default export */ __webpack_exports__["default"] = (StudyBoard);

/***/ }),

/***/ "./components/StudyBoardPagination.jsx":
/*!*********************************************!*\
  !*** ./components/StudyBoardPagination.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\6201-20\\SWOT2\\components\\StudyBoardPagination.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const StudyBoardPagination = () => {
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

/* harmony default export */ __webpack_exports__["default"] = (StudyBoardPagination);

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
var _jsxFileName = "C:\\Users\\6201-20\\SWOT2\\components\\Studyinfo.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Studyinfo = ({
  studyInfo
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    style: {
      marginBottom: "30px"
    },
    hoverable: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "studyimg"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "lectureroom"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "studytitle"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "roominfo"), __jsx("p", {
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
  }, "studydate"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "minimum"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "maximum"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "time"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
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
/*! exports provided: MainCarousel, ReservationRoominfo, StudyBoard, Studyinfo, StudyBoardPagination, LectureRoominfo, LectureRoomModal, ReservationTable, Facilityrental, LectureRoomList, MasternameEditForm, LectureRoomApplication, BuildingList, MainFooter, ReservationTime, NotificationBoard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StudyBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StudyBoard */ "./components/StudyBoard.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StudyBoard", function() { return _StudyBoard__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ReservationRoominfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReservationRoominfo */ "./components/ReservationRoominfo.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReservationRoominfo", function() { return _ReservationRoominfo__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Studyinfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Studyinfo */ "./components/Studyinfo.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Studyinfo", function() { return _Studyinfo__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _StudyBoardPagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StudyBoardPagination */ "./components/StudyBoardPagination.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StudyBoardPagination", function() { return _StudyBoardPagination__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _LectureRoominfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LectureRoominfo */ "./components/LectureRoominfo.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LectureRoominfo", function() { return _LectureRoominfo__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _MainCarousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MainCarousel */ "./components/MainCarousel.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainCarousel", function() { return _MainCarousel__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _LectureRoomModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LectureRoomModal */ "./components/LectureRoomModal.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LectureRoomModal", function() { return _LectureRoomModal__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _ReservationTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ReservationTable */ "./components/ReservationTable.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReservationTable", function() { return _ReservationTable__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _Facilityrental__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Facilityrental */ "./components/Facilityrental.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Facilityrental", function() { return _Facilityrental__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _LectureRoomList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LectureRoomList */ "./components/LectureRoomList.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LectureRoomList", function() { return _LectureRoomList__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _MasternameEditForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MasternameEditForm */ "./components/MasternameEditForm.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MasternameEditForm", function() { return _MasternameEditForm__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _LectureRoomApplication__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LectureRoomApplication */ "./components/LectureRoomApplication.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LectureRoomApplication", function() { return _LectureRoomApplication__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _BuildingList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./BuildingList */ "./components/BuildingList.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BuildingList", function() { return _BuildingList__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _MainFooter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./MainFooter */ "./components/MainFooter.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainFooter", function() { return _MainFooter__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _ReservationTime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ReservationTime */ "./components/ReservationTime.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReservationTime", function() { return _ReservationTime__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _NotificationBoard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./NotificationBoard */ "./components/NotificationBoard.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationBoard", function() { return _NotificationBoard__WEBPACK_IMPORTED_MODULE_15__["default"]; });



















/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.fromExternal) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          console.error('The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as');
          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if ( // @ts-ignore workaround for dead-code elimination
    (self.__HAS_SPR || "development" !== 'production') && Component.__NEXT_SPR) {
      let status;
      const url = ctx.asPath ? ctx.asPath : url_1.format({
        pathname: ctx.pathname,
        query: ctx.query
      });
      props = await fetch(url, {
        headers: {
          'content-type': 'application/json'
        }
      }).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).then(pageProps => {
        return {
          pageProps
        };
      }).catch(err => {
        return {
          error: err.message,
          status
        };
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(Component, ctx) {
  if (true) {
    if (Component.prototype && Component.prototype.getInitialProps) {
      const message = `"${getDisplayName(Component)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(Component)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic prerendering. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/master.jsx":
/*!**************************!*\
  !*** ./pages/master.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ "./components/index.js");
var _jsxFileName = "C:\\Users\\6201-20\\SWOT2\\pages\\master.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const master = () => {
  console.log("asdASDDASDASDASDASD");
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["MasternameEditForm"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["LectureRoomApplication"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["BuildingList"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (master);

/***/ }),

/***/ 10:
/*!********************************!*\
  !*** multi ./pages/master.jsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\6201-20\SWOT2\pages\master.jsx */"./pages/master.jsx");


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=master.js.map