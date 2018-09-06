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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bem = (0, _utils.bemClassNames)('d2ui-switch');

var Switch = function Switch(_ref) {
  var label = _ref.label,
      value = _ref.value,
      disabled = _ref.disabled,
      onChange = _ref.onChange;
  return _react.default.createElement(_ToggleField.default, {
    disabled: disabled
  }, _react.default.createElement("div", {
    className: bem.b({
      checked: value,
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
    "aria-checked": value,
    checked: value,
    role: "switch",
    disabled: disabled
  })))), _react.default.createElement("span", {
    className: bem.e('label-text', {
      disabled: disabled
    })
  }, label));
};

Switch.defaultProps = {
  value: false,
  disabled: false
};
var _default = Switch;
exports.default = _default;