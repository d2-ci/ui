"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Chip = void 0;

require("core-js/modules/es6.object.assign");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Chip = function Chip(_ref) {
  var label = _ref.label,
      variant = _ref.variant,
      onClick = _ref.onClick,
      onRemoveClick = _ref.onRemoveClick,
      icon = _ref.icon,
      selected = _ref.selected,
      disabled = _ref.disabled,
      dragging = _ref.dragging;
  var mainClassName = (0, _styles.default)('container', variant, {
    static: !onClick,
    'with-icon': Boolean(icon),
    'with-delete-icon': Boolean(onRemoveClick),
    selected: selected,
    disabled: disabled,
    dragging: dragging
  });
  var clickProps = onClick && !disabled ? {
    onClick: onClick
  } : null;
  return _react.default.createElement("div", _extends({
    className: mainClassName
  }, clickProps), icon && _react.default.createElement(_Icon.default, {
    name: icon,
    className: (0, _styles.default)('icon')
  }), _react.default.createElement("span", {
    className: (0, _styles.default)('label')
  }, label), onRemoveClick && _react.default.createElement("button", {
    className: (0, _styles.default)('remove-button'),
    onClick: onRemoveClick
  }, _react.default.createElement(_Icon.default, {
    name: "cancel",
    className: (0, _styles.default)('remove-icon')
  })));
};

exports.Chip = Chip;
Chip.propTypes = {
  label: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func,
  onRemoveClick: _propTypes.default.func,
  icon: _propTypes.default.string,
  selected: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  dragging: _propTypes.default.bool
};
var _default = Chip;
exports.default = _default;