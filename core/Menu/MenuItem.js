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

function SubMenu(_ref) {
  var kind = _ref.kind,
      width = _ref.width,
      list = _ref.list,
      onClick = _ref.onClick;
  return _react.default.createElement("div", {
    className: (0, _styles.default)('sub-menu')
  }, _react.default.createElement(_index.default, {
    kind: kind,
    width: width,
    list: list,
    onClick: onClick
  }));
}

function MenuItem(_ref2) {
  var label = _ref2.label,
      value = _ref2.value,
      icon = _ref2.icon,
      list = _ref2.list,
      disabled = _ref2.disabled,
      kind = _ref2.kind,
      width = _ref2.width,
      _onClick = _ref2.onClick;
  var hasMenu = list.length > 0;
  return _react.default.createElement("li", {
    className: (0, _styles.default)('item', _defineProperty({}, disabled, disabled)),
    onClick: function onClick(evt) {
      evt.preventDefault();
      evt.stopPropagation();

      _onClick(value);
    }
  }, icon && _react.default.createElement(_Icon.default, {
    name: icon,
    className: (0, _styles.default)('icon')
  }), _react.default.createElement("div", {
    className: (0, _styles.default)('label')
  }, label), hasMenu && _react.default.createElement(_Icon.default, {
    name: "chevron_right",
    className: (0, _styles.default)('chevron')
  }), hasMenu && _react.default.createElement(SubMenu, {
    kind: kind,
    width: width,
    list: list,
    onClick: _onClick
  }));
}

MenuItem.defaultProps = {
  icon: '',
  list: [],
  disabled: false
};