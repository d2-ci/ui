"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LabelField = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../../../../utils");

var _Icon = _interopRequireDefault(require("../../../Icon"));

var _Field = _interopRequireDefault(require("../Field"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var LabelField = function LabelField(_ref) {
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
      children = _ref.children,
      multiline = _ref.multiline,
      block = _ref.block,
      required = _ref.required,
      helpText = _ref.helpText;
  var computedTrailingIcon = computeTrailingIcon(trailingIcon, error, warning, valid);
  var focusIndicator = variant === 'outlined' ? (0, _styles.default)('notched-outline') : (0, _styles.default)('bottom-line');
  var wrapperClassName = (0, _styles.default)('container', variant, {
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
  return _react.default.createElement(_Field.default, {
    valid: valid,
    warning: warning,
    disabled: disabled,
    error: error,
    dense: dense,
    block: block,
    helpText: helpText
  }, _react.default.createElement("label", {
    className: wrapperClassName
  }, children, _react.default.createElement("span", {
    className: (0, _styles.default)(focusIndicator)
  }), leadingIcon && _react.default.createElement(_Icon.default, {
    name: leadingIcon,
    className: (0, _styles.default)('icon', 'leading')
  }), computedTrailingIcon && _react.default.createElement(_Icon.default, {
    name: computedTrailingIcon,
    className: (0, _styles.default)('icon', 'trailing')
  }), _react.default.createElement("span", {
    className: (0, _styles.default)('floating')
  }, (0, _utils.getRequiredText)(label, required))));
};

exports.LabelField = LabelField;
LabelField.propTypes = {
  label: _propTypes.default.string.isRequired,
  children: _propTypes.default.element.isRequired,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  dense: _propTypes.default.bool,
  variant: _propTypes.default.oneOf(['filled', 'outlined', 'minimal']),
  leadingIcon: _propTypes.default.string,
  trailingIcon: _propTypes.default.string,
  error: _propTypes.default.bool,
  valid: _propTypes.default.bool,
  warning: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  block: _propTypes.default.bool,
  multiline: _propTypes.default.bool,
  required: _propTypes.default.bool,
  helpText: _propTypes.default.string
};
LabelField.defaultProps = {
  value: '',
  dense: false,
  variant: 'filled'
};
var _default = LabelField;
exports.default = _default;