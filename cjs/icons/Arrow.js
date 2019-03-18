"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrowDown = ArrowDown;
exports.ArrowUp = ArrowUp;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 =
/*#__PURE__*/
_react.default.createElement("path", {
  d: "M14 20l10 10 10-10z"
});

var _ref3 =
/*#__PURE__*/
_react.default.createElement("path", {
  d: "M0 0h48v48H0z",
  fill: "none"
});

function ArrowDown(_ref) {
  var className = _ref.className;
  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    className: className
  }, _ref2, _ref3);
}

var _ref5 =
/*#__PURE__*/
_react.default.createElement("path", {
  d: "M14 28l10-10 10 10z"
});

var _ref6 =
/*#__PURE__*/
_react.default.createElement("path", {
  d: "M0 0h48v48H0z",
  fill: "none"
});

function ArrowUp(_ref4) {
  var className = _ref4.className;
  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    className: className
  }, _ref5, _ref6);
}