"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Exit = Exit;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 =
/*#__PURE__*/
_react.default.createElement("path", {
  d: "M0 0h48v48H0z",
  fill: "none"
});

var _ref3 =
/*#__PURE__*/
_react.default.createElement("path", {
  d: "M20.17 31.17L23 34l10-10-10-10-2.83 2.83L25.34 22H6v4h19.34l-5.17 5.17zM38 6H10c-2.21 0-4 1.79-4 4v8h4v-8h28v28H10v-8H6v8c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4z"
});

function Exit(_ref) {
  var className = _ref.className;
  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    className: className
  }, _ref2, _ref3);
}