"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToggleField = ToggleField;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

ToggleField.propTypes = {
  children: _propTypes.default.node,
  disabled: _propTypes.default.bool,
  dense: _propTypes.default.bool
};
ToggleField.defaultProps = {
  disabled: false
};
var _default = ToggleField;
exports.default = _default;