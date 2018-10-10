"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MenuItem;

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _index = _interopRequireDefault(require("./index"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function MenuItem(_ref) {
  var label = _ref.label,
      value = _ref.value,
      icon = _ref.icon,
      list = _ref.list,
      disabled = _ref.disabled,
      _onClick = _ref.onClick;
  return _react.default.createElement("li", {
    className: (0, _styles.default)('li', _defineProperty({}, disabled, disabled)),
    onClick: function onClick() {
      return _onClick(value);
    }
  }, icon && _react.default.createElement(_Icon.default, {
    name: icon,
    className: (0, _styles.default)('icon')
  }), _react.default.createElement("div", {
    className: (0, _styles.default)('label')
  }, label), list.length > 0 && _react.default.createElement(_index.default, {
    list: list
  }));
}

MenuItem.defaultProps = {
  icon: '',
  list: [],
  disabled: false
};