"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Help = Help;
exports.default = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _theme = require("../theme.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Help(_ref) {
  var text = _ref.text,
      status = _ref.status,
      className = _ref.className;
  return _react.default.createElement("p", {
    className: "jsx-".concat(_theme.fonts.__hash) + " " + _style.default.dynamic([["3335312656", [_theme.colors.grey700, _theme.colors.blue600, _theme.colors.red500, _theme.colors.yellow500]]]) + " " + ((0, _classnames.default)('base', className, _defineProperty({}, "status-".concat(status), true)) || "")
  }, text, _react.default.createElement(_style.default, {
    id: _theme.fonts.__hash
  }, _theme.fonts), _react.default.createElement(_style.default, {
    id: "3335312656",
    dynamic: [_theme.colors.grey700, _theme.colors.blue600, _theme.colors.red500, _theme.colors.yellow500]
  }, ".base.__jsx-style-dynamic-selector{height:12px;padding-top:8px;padding-left:14px;font-size:12px;line-height:12px;cursor:help;}.status-default.__jsx-style-dynamic-selector{color:".concat(_theme.colors.grey700, ";}.status-valid.__jsx-style-dynamic-selector{color:").concat(_theme.colors.blue600, ";}.status-error.__jsx-style-dynamic-selector{color:").concat(_theme.colors.red500, ";}.status-warning.__jsx-style-dynamic-selector{color:").concat(_theme.colors.yellow500, ";}")));
}

Help.defaultProps = {
  status: 'default'
};
Help.propTypes = {
  className: _propTypes.default.string,
  text: _propTypes.default.string.isRequired,
  status: _propTypes.default.oneOf(['default', 'valid', 'warning', 'error'])
};
var _default = Help;
exports.default = _default;