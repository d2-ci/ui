"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.function.name");

var _react = _interopRequireDefault(require("react"));

require("./radiobutton.css");

require("./togglerwrap.css");

var _utils = require("../utils");

var _ToggleField = _interopRequireDefault(require("../../build/Input/ToggleField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bem = (0, _utils.bemClassNames)('d2ui-radio-button');

var RadioButton = function RadioButton(_ref) {
  var label = _ref.label,
      name = _ref.name,
      value = _ref.value,
      checked = _ref.checked,
      disabled = _ref.disabled,
      onChange = _ref.onChange;
  return _react.default.createElement(_ToggleField.default, {
    disabled: disabled
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
  }, label));
};

RadioButton.defaultProps = {
  disabled: false
};
var _default = RadioButton;
exports.default = _default;