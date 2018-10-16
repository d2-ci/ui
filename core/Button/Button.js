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
      kind = _ref.kind,
      icon = _ref.icon,
      label = _ref.label,
      disabled = _ref.disabled,
      onClick = _ref.onClick;
  return _react.default.createElement("button", {
    disabled: disabled,
    onClick: onClick,
    className: (0, _styles.default)('button', kind, {
      'icon-only': icon && !label
    })
  }, icon && _react.default.createElement(_Icon.default, {
    name: icon
  }), label);
}

Button.defaultProps = {
  icon: '',
  label: '',
  kind: 'raised',
  disabled: false,
  onClick: undefined
};
Button.propTypes = {
  label: _propTypes.default.string,
  icon: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  type: _propTypes.default.oneOf(['submit', 'reset', 'button']),
  kind: _propTypes.default.oneOf(['flat', 'raised', 'primary', 'outlined', 'circle']),
  onClick: _propTypes.default.func
};
var _default = Button;
exports.default = _default;