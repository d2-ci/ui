"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = Label;
exports.default = void 0;

require("core-js/modules/es6.object.define-property");

var _react = _interopRequireDefault(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Label(_ref) {
  var _s;

  var text = _ref.text,
      size = _ref.size,
      height = _ref.height,
      status = _ref.status,
      border = _ref.border,
      hasIcon = _ref.hasIcon;
  var style = {
    height: height,
    lineHeight: height
  };
  return _react.default.createElement("div", {
    style: style,
    className: (0, _styles.default)('container', (_s = {
      'has-icon': hasIcon
    }, _defineProperty(_s, "size-".concat(size), true), _defineProperty(_s, "status-".concat(status), true), _defineProperty(_s, "border-".concat(border), true), _s))
  }, _react.default.createElement("div", {
    className: (0, _styles.default)('content', _defineProperty({}, "size-".concat(size), true))
  }, text));
}

Label.defaultProps = {
  hasIcon: false,
  size: 'default',
  status: 'default',
  border: 'none',
  height: '100%'
};
var _default = Label;
exports.default = _default;