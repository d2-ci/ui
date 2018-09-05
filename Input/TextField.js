"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../utils");

require("./textfield.css");

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bem = (0, _utils.bemClassNames)('d2ui-text-field');
var FILLED = 'filled';
var OUTLINED = 'outlined';
var MINIMAL = 'minimal';

var TextField = function TextField(_ref) {
  var variant = _ref.variant,
      type = _ref.type,
      dense = _ref.dense,
      label = _ref.label,
      value = _ref.value,
      onChange = _ref.onChange,
      leadingIcon = _ref.leadingIcon,
      trailingIcon = _ref.trailingIcon;
  var wrapperClassName = bem.b(variant, {
    'with-value': value !== '',
    'with-trailing-icon': trailingIcon,
    'with-leading-icon': leadingIcon,
    dense: dense
  });
  var focusIndicator = variant === OUTLINED ? 'notched-outline' : 'bottom-line';
  return _react.default.createElement("label", {
    className: wrapperClassName
  }, _react.default.createElement("input", {
    className: bem.e('input'),
    value: value,
    onChange: onChange,
    type: type
  }), _react.default.createElement("div", {
    className: bem.e(focusIndicator)
  }), leadingIcon && _react.default.createElement(_Icon.default, {
    name: leadingIcon,
    className: bem.e('icon', 'leading')
  }), trailingIcon && _react.default.createElement(_Icon.default, {
    name: trailingIcon,
    className: bem.e('icon', 'trailing')
  }), _react.default.createElement("span", {
    className: bem.e('floating-label')
  }, label));
};

TextField.defaultProps = {
  value: '',
  dense: false,
  variant: FILLED,
  type: 'text'
};
var _default = TextField;
exports.default = _default;