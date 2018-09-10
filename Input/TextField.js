"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.bem = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../utils");

require("./textfield.css");

var _Icon = _interopRequireDefault(require("../Icon"));

var _FormField = _interopRequireDefault(require("./FormField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bem = (0, _utils.bemClassNames)('d2ui-text-field');
exports.bem = bem;
var FILLED = 'filled';
var OUTLINED = 'outlined';
var MINIMAL = 'minimal';

var computeTrailingIcon = function computeTrailingIcon(trailingIcon, error, warning, valid) {
  switch (true) {
    case error:
      return 'error';

    case warning:
      return 'warning';

    case valid:
      return 'check_circle';

    default:
      return trailingIcon;
  }
};

var TextField = function TextField(_ref) {
  var variant = _ref.variant,
      type = _ref.type,
      dense = _ref.dense,
      label = _ref.label,
      value = _ref.value,
      onChange = _ref.onChange,
      leadingIcon = _ref.leadingIcon,
      trailingIcon = _ref.trailingIcon,
      error = _ref.error,
      valid = _ref.valid,
      warning = _ref.warning,
      disabled = _ref.disabled,
      fullWidth = _ref.fullWidth,
      helpText = _ref.helpText,
      inputComponent = _ref.inputComponent;
  var computedTrailingIcon = computeTrailingIcon(trailingIcon, error, warning, valid);
  var focusIndicator = variant === OUTLINED ? 'notched-outline' : 'bottom-line';
  var wrapperClassName = bem.b(variant, {
    'with-value': value !== '',
    'with-trailing-icon': computedTrailingIcon,
    'with-leading-icon': leadingIcon,
    dense: dense,
    error: error,
    valid: valid,
    warning: warning,
    disabled: disabled
  });
  return _react.default.createElement(_FormField.default, {
    valid: valid,
    warning: warning,
    disabled: disabled,
    error: error,
    dense: dense,
    fullWidth: fullWidth,
    helpText: helpText
  }, _react.default.createElement("label", {
    className: wrapperClassName
  }, inputComponent || _react.default.createElement("input", {
    className: bem.e('input'),
    value: value,
    onChange: onChange,
    type: type,
    disabled: disabled
  }), _react.default.createElement("span", {
    className: bem.e(focusIndicator)
  }), leadingIcon && _react.default.createElement(_Icon.default, {
    name: leadingIcon,
    className: bem.e('icon', 'leading')
  }), computedTrailingIcon && _react.default.createElement(_Icon.default, {
    name: computedTrailingIcon,
    className: bem.e('icon', 'trailing')
  }), _react.default.createElement("span", {
    className: bem.e('floating-label')
  }, label)));
};

TextField.defaultProps = {
  value: '',
  dense: false,
  variant: FILLED,
  type: 'text'
};
var _default = TextField;
exports.default = _default;