"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.object.assign");

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("../Icon"));

require("./chip.css");

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var bem = (0, _utils.bemClassNames)('d2ui-chip');

var Chip = function Chip(_ref) {
  var label = _ref.label,
      variant = _ref.variant,
      onClick = _ref.onClick,
      onRemoveClick = _ref.onRemoveClick,
      icon = _ref.icon,
      selected = _ref.selected,
      disabled = _ref.disabled,
      dragging = _ref.dragging;
  var mainClassName = bem.b(variant, {
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
    className: bem.e('icon')
  }), _react.default.createElement("span", {
    className: bem.e('label')
  }, label), onRemoveClick && _react.default.createElement("button", {
    className: bem.e('remove-button'),
    onClick: onRemoveClick
  }, _react.default.createElement(_Icon.default, {
    name: "cancel",
    className: bem.e('remove-icon')
  })));
};

var _default = Chip;
exports.default = _default;