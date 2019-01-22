"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = Button;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _styles = _interopRequireWildcard(require("./styles"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
    className: (0, _styles.rx)('base', "kind-".concat(kind), "size-".concat(size), {
      'icon-only': icon && !label && !children,
      icon: icon
    })
  }, icon && _react.default.createElement(_Icon.default, {
    className: (0, _styles.default)('button-icon'),
    name: icon
  }), label || children);
}

Button.defaultProps = {
  icon: '',
  label: '',
  kind: 'basic',
  type: 'button',
  size: 'medium',
  disabled: false,
  onClick: undefined
};
Button.propTypes = {
  icon: _propTypes.default.string,
  label: _propTypes.default.string,
  kind: _propTypes.default.oneOf(['basic', 'primary', 'secondary', 'destructive']),
  type: _propTypes.default.oneOf(['submit', 'reset', 'button']),
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),
  disabled: _propTypes.default.bool,
  onClick: _propTypes.default.func
};
var _default = Button;
exports.default = _default;