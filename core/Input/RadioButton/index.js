"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RadioButton = void 0;

require("core-js/modules/es6.function.name");

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../../utils");

var _ToggleField = _interopRequireDefault(require("../ToggleField"));

var _Field = _interopRequireDefault(require("../shared/Field"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */
var bem = (0, _utils.bemClassNames)('radio-button');

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
  return _react.default.createElement(_Field.default, {
    valid: valid,
    warning: warning,
    disabled: disabled,
    error: error,
    dense: dense,
    block: block,
    helpText: helpText
  }, _react.default.createElement(_ToggleField.default, {
    disabled: disabled,
    dense: dense
  }, _react.default.createElement("div", {
    className: bem.b({
      disabled: disabled
    })
  }, _react.default.createElement("input", {
    className: bem.e('native-control'),
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled
  }), _react.default.createElement("div", {
    className: bem.e('background')
  }, _react.default.createElement("div", {
    className: bem.e('outer-circle')
  }), _react.default.createElement("div", {
    className: bem.e('inner-circle')
  }))), _react.default.createElement("span", {
    className: bem.e('label-text', {
      disabled: disabled
    })
  }, (0, _utils.getRequiredText)(label, required))));
};

exports.RadioButton = RadioButton;
RadioButton.defaultProps = {
  disabled: false
};
var _default = RadioButton;
exports.default = _default;