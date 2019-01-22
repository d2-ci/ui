"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = Menu;
Object.defineProperty(exports, "MenuItem", {
  enumerable: true,
  get: function get() {
    return _MenuItem.default;
  }
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Card = _interopRequireDefault(require("../Card"));

var _MenuItem = _interopRequireDefault(require("./MenuItem"));

var _Divider = _interopRequireDefault(require("../helpers/Divider"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Menu(_ref) {
  var size = _ref.size,
      width = _ref.width,
      list = _ref.list,
      onClick = _ref.onClick;
  return _react.default.createElement(_Card.default, null, _react.default.createElement("ul", {
    className: (0, _styles.rx)('base', size)
  }, list.map(function (_ref2, i) {
    var label = _ref2.label,
        value = _ref2.value,
        icon = _ref2.icon,
        list = _ref2.list,
        active = _ref2.active,
        type = _ref2.type,
        disabled = _ref2.disabled;

    if (type === 'divider') {
      return _react.default.createElement(_Divider.default, {
        key: "mid-".concat(i)
      });
    }

    return _react.default.createElement(_MenuItem.default, {
      key: "mi-".concat(value),
      label: label,
      value: value,
      icon: icon,
      list: list,
      type: type,
      size: size,
      disabled: disabled,
      active: active,
      onClick: onClick
    });
  })));
}

Menu.defaultProps = {
  size: 'default'
};
Menu.propTypes = {
  list: _propTypes.default.arrayOf(_propTypes.default.shape({
    type: _propTypes.default.oneOf(['divider']),
    label: _propTypes.default.string,
    value: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
    list: _propTypes.default.array,
    icon: _propTypes.default.string,
    active: _propTypes.default.bool,
    disabled: _propTypes.default.bool
  })).isRequired,
  onClick: _propTypes.default.func.isRequired,
  size: _propTypes.default.oneOf(['default', 'dense'])
};
var _default = Menu;
exports.default = _default;