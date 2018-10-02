"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = Icon;
exports.default = void 0;

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.function.name");

var _react = _interopRequireDefault(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Icon(_ref) {
  var name = _ref.name,
      className = _ref.className,
      onClick = _ref.onClick;
  return _react.default.createElement("i", {
    className: (0, _styles.default)('container', className, _defineProperty({}, name, true)),
    onClick: onClick
  }, name);
}

Icon.defaultProps = {
  name: '',
  className: '',
  onClick: function onClick() {
    return null;
  }
};
var _default = Icon;
exports.default = _default;