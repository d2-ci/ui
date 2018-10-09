"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = Icon;
exports.default = void 0;

require("core-js/modules/es6.function.name");

var _react = _interopRequireDefault(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */
function Icon(_ref) {
  var name = _ref.name,
      className = _ref.className,
      onClick = _ref.onClick;
  return _react.default.createElement("i", {
    onClick: onClick,
    className: (0, _styles.default)('container', (0, _utils.t)(className))
  }, name);
}

Icon.defaultProps = {
  name: '',
  className: '',
  onClick: undefined
};
var _default = Icon;
exports.default = _default;