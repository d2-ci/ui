"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = Button;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Button(_ref) {
  var type = _ref.type,
      children = _ref.children,
      kind = _ref.kind,
      size = _ref.size,
      icon = _ref.icon,
      label = _ref.label,
      disabled = _ref.disabled,
      onClick = _ref.onClick;
  return _react.default.createElement("button", {
    disabled: disabled,
    onClick: onClick,
    className: (0, _styles.default)('button', "kind-".concat(kind), "size-".concat(size), {
      'icon-only': icon && !label && !children,
      icon: icon
    })
  }, icon && _react.default.createElement(_Icon.default, {
    className: "button-icon",
    name: icon
  }), label || children);
}

Button.defaultProps = {
  icon: '',
  label: '',
  kind: 'basic',
  size: 'medium',
  disabled: false,
  onClick: undefined
};
Button.propTypes = {
  label: _propTypes.default.string,
  icon: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  type: _propTypes.default.oneOf(['submit', 'reset', 'button']),
  kind: _propTypes.default.oneOf(['basic', 'primary', 'secondary', 'destructive']),
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),
  onClick: _propTypes.default.func
};
var _default = Button;
exports.default = _default;