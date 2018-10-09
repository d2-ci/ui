"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Field = Field;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */
function Field(_ref) {
  var children = _ref.children,
      valid = _ref.valid,
      warning = _ref.warning,
      disabled = _ref.disabled,
      error = _ref.error,
      dense = _ref.dense,
      block = _ref.block,
      helpText = _ref.helpText,
      className = _ref.className;
  return _react.default.createElement("div", {
    className: (0, _styles.default)('container', className, {
      valid: valid,
      warning: warning,
      disabled: disabled,
      error: error,
      dense: dense,
      'full-width': block
    })
  }, children, helpText && _react.default.createElement("div", {
    className: (0, _styles.default)('help-text')
  }, helpText));
}

var _default = Field;
exports.default = _default;