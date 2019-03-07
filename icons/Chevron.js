"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChevronRight = ChevronRight;
exports.ChevronLeft = ChevronLeft;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 =
/*#__PURE__*/
_react.default.createElement("path", {
  d: "M20 12l-2.83 2.83L26.34 24l-9.17 9.17L20 36l12-12z"
});

var _ref3 =
/*#__PURE__*/
_react.default.createElement("path", {
  d: "M0 0h48v48H0z",
  fill: "none"
});

function ChevronRight(_ref) {
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
  d: "M30.83 14.83L28 12 16 24l12 12 2.83-2.83L21.66 24z"
});

var _ref6 =
/*#__PURE__*/
_react.default.createElement("path", {
  d: "M0 0h48v48H0z",
  fill: "none"
});

function ChevronLeft(_ref4) {
  var className = _ref4.className;
  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    className: className
  }, _ref5, _ref6);
}