"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tab = Tab;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */
function Tab(_ref) {
  var icon = _ref.icon,
      label = _ref.label,
      onClick = _ref.onClick,
      active = _ref.active,
      disabled = _ref.disabled,
      stacked = _ref.stacked,
      addTabRef = _ref.addTabRef,
      children = _ref.children;
  return _react.default.createElement("button", {
    className: (0, _styles.default)('tab', 'align-icon', {
      active: active,
      disabled: disabled,
      stacked: stacked
    }),
    onClick: onClick,
    ref: addTabRef
  }, children ? children : (icon && _react.default.createElement(_Icon.default, {
    name: icon
  }), label && _react.default.createElement("span", null, label)));
}

Tab.defaultProps = {
  active: false,
  disabled: false,
  stacked: false
};
var _default = Tab;
exports.default = _default;