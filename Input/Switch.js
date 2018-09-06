"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ToggleField = _interopRequireDefault(require("./ToggleField"));

require("./switch.css");

var _utils = require("../utils");

var _FormField = _interopRequireDefault(require("./FormField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bem = (0, _utils.bemClassNames)('d2ui-switch');

var Switch = function Switch(_ref) {
  var label = _ref.label,
      checked = _ref.checked,
      valid = _ref.valid,
      warning = _ref.warning,
      error = _ref.error,
      disabled = _ref.disabled,
      onChange = _ref.onChange,
      dense = _ref.dense,
      helpText = _ref.helpText;
  return _react.default.createElement(_FormField.default, {
    valid: valid,
    warning: warning,
    disabled: disabled,
    error: error,
    dense: dense,
    helpText: helpText
  }, _react.default.createElement(_ToggleField.default, {
    disabled: disabled
  }, _react.default.createElement("div", {
    className: bem.b({
      checked: checked,
      disabled: disabled
    })
  }, _react.default.createElement("div", {
    className: bem.e('track')
  }), _react.default.createElement("div", {
    className: bem.e('thumb-underlay')
  }, _react.default.createElement("div", {
    className: bem.e('thumb')
  }, _react.default.createElement("input", {
    onChange: onChange,
    type: "checkbox",
    id: "basic-switch",
    className: bem.e('native-control'),
    "aria-checked": checked,
    checked: checked,
    role: "switch",
    disabled: disabled
  })))), _react.default.createElement("span", {
    className: bem.e('label-text', {
      disabled: disabled
    })
  }, label)));
};

Switch.defaultProps = {
  checked: false,
  disabled: false
};
var _default = Switch;
exports.default = _default;