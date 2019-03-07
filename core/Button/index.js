"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = Button;
exports.default = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = _interopRequireDefault(require("./styles.js"));

var _colors = require("../colors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Button(_ref) {
  var type = _ref.type,
      children = _ref.children,
      kind = _ref.kind,
      size = _ref.size,
      icon = _ref.icon,
      label = _ref.label,
      disabled = _ref.disabled,
      onClick = _ref.onClick,
      className = _ref.className;
  return _react.default.createElement("button", {
    disabled: disabled,
    onClick: onClick,
    className: "jsx-".concat(_colors.fonts.__hash, " jsx-").concat(_styles.default.__hash) + " " + ((0, _classnames.default)('base', "kind-".concat(kind), "size-".concat(size), className, {
      'icon-only': icon && !label && !children,
      icon: icon
    }) || "")
  }, icon && _react.default.createElement("span", {
    className: "jsx-".concat(_colors.fonts.__hash, " jsx-").concat(_styles.default.__hash) + " " + "button-icon"
  }, icon), label || children, _react.default.createElement(_style.default, {
    id: _colors.fonts.__hash
  }, _colors.fonts), _react.default.createElement(_style.default, {
    id: _styles.default.__hash
  }, _styles.default));
}

Button.defaultProps = {
  kind: 'basic',
  type: 'button',
  size: 'medium',
  disabled: false,
  onClick: undefined
};
Button.propTypes = {
  className: _propTypes.default.string,
  icon: _propTypes.default.element,
  label: _propTypes.default.string,
  kind: _propTypes.default.oneOf(['basic', 'primary', 'secondary', 'destructive']),
  type: _propTypes.default.oneOf(['submit', 'reset', 'button']),
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),
  disabled: _propTypes.default.bool,
  onClick: _propTypes.default.func
};
var _default = Button;
exports.default = _default;