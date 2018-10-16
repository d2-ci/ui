"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Checkbox = void 0;

require("core-js/modules/es6.object.assign");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../../../utils");

var _ToggleField = _interopRequireDefault(require("../ToggleField"));

var _Field = _interopRequireDefault(require("../shared/Field"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Checkbox = function Checkbox(_ref) {
  var label = _ref.label,
      checked = _ref.checked,
      valid = _ref.valid,
      warning = _ref.warning,
      error = _ref.error,
      disabled = _ref.disabled,
      onChange = _ref.onChange,
      dense = _ref.dense,
      block = _ref.block,
      helpText = _ref.helpText,
      required = _ref.required;
  return _react.default.createElement(_Field.default, _extends({
    className: (0, _styles.default)('container')
  }, {
    valid: valid,
    warning: warning,
    disabled: disabled,
    error: error,
    dense: dense,
    block: block,
    helpText: helpText
  }), _react.default.createElement(_ToggleField.default, {
    disabled: disabled,
    dense: dense
  }, _react.default.createElement("div", {
    className: (0, _styles.default)({
      disabled: disabled
    })
  }, _react.default.createElement("input", {
    type: "checkbox",
    className: (0, _styles.default)('native-control'),
    checked: checked,
    disabled: disabled,
    onChange: onChange
  }), _react.default.createElement("div", {
    className: (0, _styles.default)('background')
  }, _react.default.createElement("svg", {
    className: (0, _styles.default)('checkmark'),
    viewBox: "0 0 24 24"
  }, _react.default.createElement("path", {
    className: (0, _styles.default)('checkmark-path'),
    fill: "none",
    d: "M1.73,12.91 8.1,19.28 22.79,4.59"
  })), _react.default.createElement("div", {
    className: (0, _styles.default)('mixedmark')
  }))), _react.default.createElement("span", {
    className: (0, _styles.default)('label-text', {
      disabled: disabled
    })
  }, (0, _utils.getRequiredText)(label, required))));
};

exports.Checkbox = Checkbox;
Checkbox.propTypes = {
  label: _propTypes.default.string,
  checked: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  valid: _propTypes.default.bool,
  warning: _propTypes.default.bool,
  error: _propTypes.default.bool,
  dense: _propTypes.default.bool,
  helpText: _propTypes.default.string,
  block: _propTypes.default.bool,
  required: _propTypes.default.bool,
  onChange: _propTypes.default.func.isRequired
};
Checkbox.defaultProps = {
  value: false,
  disabled: false
};
var _default = Checkbox;
exports.default = _default;