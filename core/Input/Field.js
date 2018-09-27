"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Field = exports.bem = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../utils");

require("./field.css");

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */
var bem = (0, _utils.bemClassNames)('field');
exports.bem = bem;
var FILLED = 'filled';
var OUTLINED = 'outlined';

var computeTrailingIcon = function computeTrailingIcon(trailingIcon, error, warning, valid) {
  switch (true) {
    case Boolean(trailingIcon):
      return trailingIcon;

    case error:
      return 'error';

    case warning:
      return 'warning';

    case valid:
      return 'check_circle';

    default:
      return null;
  }
};

var Field = function Field(_ref) {
  var variant = _ref.variant,
      dense = _ref.dense,
      label = _ref.label,
      value = _ref.value,
      leadingIcon = _ref.leadingIcon,
      trailingIcon = _ref.trailingIcon,
      error = _ref.error,
      valid = _ref.valid,
      warning = _ref.warning,
      disabled = _ref.disabled,
      inputComponent = _ref.inputComponent,
      multiline = _ref.multiline,
      block = _ref.block,
      required = _ref.required;
  var computedTrailingIcon = computeTrailingIcon(trailingIcon, error, warning, valid);
  var focusIndicator = variant === OUTLINED ? 'notched-outline' : 'bottom-line';
  var wrapperClassName = bem.b(variant, {
    'with-value': value !== '',
    'with-trailing-icon': computedTrailingIcon,
    'with-leading-icon': leadingIcon,
    'full-width': block,
    dense: dense,
    error: error,
    valid: valid,
    warning: warning,
    disabled: disabled,
    multiline: multiline
  });
  return _react.default.createElement("label", {
    className: wrapperClassName
  }, inputComponent, _react.default.createElement("span", {
    className: bem.e(focusIndicator)
  }), leadingIcon && _react.default.createElement(_Icon.default, {
    name: leadingIcon,
    className: bem.e('icon', 'leading')
  }), computedTrailingIcon && _react.default.createElement(_Icon.default, {
    name: computedTrailingIcon,
    className: bem.e('icon', 'trailing')
  }), _react.default.createElement("span", {
    className: bem.e('floating-label')
  }, (0, _utils.getRequiredText)(label, required)));
};

exports.Field = Field;
Field.defaultProps = {
  value: '',
  dense: false,
  variant: FILLED
};
var _default = Field;
exports.default = _default;