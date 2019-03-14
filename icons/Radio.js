"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checked = Checked;
exports.Unchecked = Unchecked;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 =
/*#__PURE__*/
_react.default.createElement("path", {
  d: "M24 14c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0-10C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
});

var _ref3 =
/*#__PURE__*/
_react.default.createElement("path", {
  d: "M0 0h48v48H0z",
  fill: "none"
});

function Checked(_ref) {
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
  d: "M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
});

var _ref6 =
/*#__PURE__*/
_react.default.createElement("path", {
  d: "M0 0h48v48H0z",
  fill: "none"
});

function Unchecked(_ref4) {
  var className = _ref4.className;
  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    className: className
  }, _ref5, _ref6);
}