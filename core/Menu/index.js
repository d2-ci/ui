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

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Card = _interopRequireDefault(require("../Card"));

var _MenuItem = _interopRequireDefault(require("./MenuItem"));

var _Divider = _interopRequireDefault(require("../Divider"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = _interopRequireDefault(require("./styles"));

var _colors = require("../colors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Menu(_ref) {
  var size = _ref.size,
      width = _ref.width,
      list = _ref.list,
      onClick = _ref.onClick,
      className = _ref.className;
  return _react.default.createElement(_Card.default, null, _react.default.createElement("ul", {
    className: "jsx-".concat(_colors.fonts.__hash, " jsx-").concat(_styles.default.__hash) + " " + ((0, _classnames.default)('base', size, className) || "")
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
  })), _react.default.createElement(_style.default, {
    id: _colors.fonts.__hash
  }, _colors.fonts), _react.default.createElement(_style.default, {
    id: _styles.default.__hash
  }, _styles.default));
}

Menu.defaultProps = {
  size: 'default'
};
Menu.propTypes = {
  className: _propTypes.default.string,
  list: _propTypes.default.arrayOf(_propTypes.default.shape({
    type: _propTypes.default.oneOf(['divider']),
    label: _propTypes.default.string,
    value: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
    list: _propTypes.default.array,
    icon: _propTypes.default.element,
    active: _propTypes.default.bool,
    disabled: _propTypes.default.bool
  })).isRequired,
  onClick: _propTypes.default.func.isRequired,
  size: _propTypes.default.oneOf(['default', 'dense'])
};
var _default = Menu;
exports.default = _default;