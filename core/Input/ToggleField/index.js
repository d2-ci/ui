"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToggleField = ToggleField;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */
function ToggleField(_ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      dense = _ref.dense;
  return _react.default.createElement("label", {
    className: (0, _styles.default)('container', {
      disabled: disabled,
      dense: dense
    })
  }, children);
}

ToggleField.defaultProps = {
  disabled: false
};
var _default = ToggleField;
exports.default = _default;