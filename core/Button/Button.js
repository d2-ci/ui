"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = Button;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Button(_ref) {
  var role = _ref.role,
      type = _ref.type,
      size = _ref.size,
      kind = _ref.kind,
      icon = _ref.icon,
      label = _ref.label,
      active = _ref.active,
      disabled = _ref.disabled,
      onClick = _ref.onClick;
  return _react.default.createElement("button", {
    type: type,
    role: role,
    disabled: disabled,
    onClick: onClick,
    className: (0, _styles.default)('button', kind, size, {
      active: active
    })
  }, icon && _react.default.createElement(_Icon.default, {
    name: icon
  }), label);
}

Button.defaultProps = {
  icon: '',
  label: '',
  role: 'button',
  type: 'button',
  size: 'medium',
  kind: 'raised',
  active: false,
  disabled: false,
  onClick: undefined
};
var _default = Button;
exports.default = _default;