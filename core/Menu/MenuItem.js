"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MenuItem;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _index = _interopRequireDefault(require("./index"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SubMenu(_ref) {
  var size = _ref.size,
      list = _ref.list,
      onClick = _ref.onClick;
  return _react.default.createElement("div", {
    className: (0, _styles.default)('sub-menu')
  }, _react.default.createElement(_index.default, {
    size: size,
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
    list: list,
    onClick: _onClick
  }));
}

MenuItem.defaultProps = {
  icon: '',
  list: [],
  size: 'default',
  active: false,
  disabled: false
};
MenuItem.propTypes = {
  label: _propTypes.default.string.isRequired,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  icon: _propTypes.default.string,
  list: _propTypes.default.array,
  active: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  size: _propTypes.default.string,
  onClick: _propTypes.default.func.isRequired
};