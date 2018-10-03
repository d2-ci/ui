"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = Button;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */
function Button(_ref) {
  var role = _ref.role,
      type = _ref.type,
      size = _ref.size,
      kind = _ref.kind,
      title = _ref.title,
      disabled = _ref.disabled,
      onClick = _ref.onClick,
      onDoubleClick = _ref.onDoubleClick,
      children = _ref.children;
  return _react.default.createElement("button", {
    role: role,
    type: type,
    title: title,
    disabled: disabled,
    onClick: onClick,
    onDoubleClick: onDoubleClick,
    className: (0, _styles.default)('button', 'align-icon', kind, size)
  }, children);
}

Button.defaultProps = {
  role: 'button',
  type: 'button',
  size: 'medium',
  kind: 'raised',
  title: '',
  disabled: false,
  onClick: undefined,
  onDoubleClick: undefined
};
var _default = Button;
exports.default = _default;