"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Help = Help;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Help(_ref) {
  var text = _ref.text,
      status = _ref.status;
  return _react.default.createElement("p", {
    className: (0, _styles.rx)('base', _defineProperty({}, "status-".concat(status), true))
  }, text);
}

Help.defaultProps = {
  status: 'default'
};
Help.propTypes = {
  text: _propTypes.default.string.isRequired,
  status: _propTypes.default.oneOf(['default', 'valid', 'warning', 'error'])
};
var _default = Help;
exports.default = _default;