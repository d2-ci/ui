"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RadioButton = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.function.name");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../../../utils");

var _ToggleField = _interopRequireDefault(require("../ToggleField"));

var _Field = _interopRequireDefault(require("../shared/Field"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var RadioButton = function RadioButton(_ref) {
  var label = _ref.label,
      name = _ref.name,
      value = _ref.value,
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
    className: (0, _styles.default)('native-control'),
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled
  }), _react.default.createElement("div", {
    className: (0, _styles.default)('background')
  }, _react.default.createElement("div", {
    className: (0, _styles.default)('outer-circle')
  }), _react.default.createElement("div", {
    className: (0, _styles.default)('inner-circle')
  }))), _react.default.createElement("span", {
    className: (0, _styles.default)('label-text', {
      disabled: disabled
    })
  }, (0, _utils.getRequiredText)(label, required))));
};

exports.RadioButton = RadioButton;
RadioButton.propTypes = {
  label: _propTypes.default.string,
  name: _propTypes.default.string,
  value: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
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
RadioButton.defaultProps = {
  disabled: false
};
var _default = RadioButton;
exports.default = _default;