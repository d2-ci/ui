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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _ref2 =
/*#__PURE__*/
_react.default.createElement(_style.default, {
  id: "4102157999"
}, ".base.jsx-4102157999{height:12px;padding-left:14px;font-size:12px;line-height:12px;cursor:help;}.status-default.jsx-4102157999{color:var(--grey700);}.status-valid.jsx-4102157999{color:var(--blue600);}.status-error.jsx-4102157999{color:var(--red500);}.status-warning.jsx-4102157999{color:var(--yellow500);}");

function Help(_ref) {
  var text = _ref.text,
      status = _ref.status;
  return _react.default.createElement("p", {
    className: "jsx-4102157999" + " " + ((0, _classnames.default)('base', _defineProperty({}, "status-".concat(status), true)) || "")
  }, text, _ref2);
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