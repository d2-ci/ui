"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Paper = Paper;
exports.default = void 0;

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.function.bind");

var _react = _interopRequireDefault(require("react"));

var _bind = _interopRequireDefault(require("classnames/bind"));

require("./styles.css");

var _styles2 = _interopRequireDefault(require("./styles.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var cx = _bind.default.bind(_styles2.default);

function Paper(_ref) {
  var _cx;

  var elevation = _ref.elevation,
      children = _ref.children,
      className = _ref.className;
  var classes = cx((_cx = {}, _defineProperty(_cx, "elevation-".concat(elevation), true), _defineProperty(_cx, "defaults", true), _cx));
  return _react.default.createElement("div", {
    className: classes
  }, children);
}

Paper.defaultProps = {
  elevation: 1
};
var _default = Paper;
exports.default = _default;