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

function SubMenu(_ref) {
  var size = _ref.size,
      width = _ref.width,
      list = _ref.list,
      onClick = _ref.onClick;
  return _react.default.createElement("div", {
    className: (0, _styles.default)('sub-menu')
  }, _react.default.createElement(_index.default, {
    size: size,
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
      active = _ref2.active,
      disabled = _ref2.disabled,
      size = _ref2.size,
      width = _ref2.width,
      _onClick = _ref2.onClick;
  var hasMenu = list.length > 0;
  return _react.default.createElement("li", {
    className: (0, _styles.default)('item', {
      disabled: disabled,
      active: active
    }),
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
    size: size,
    width: width,
    list: list,
    onClick: _onClick
  }));
}

MenuItem.defaultProps = {
  icon: '',
  list: [],
  active: false,
  disabled: false
};