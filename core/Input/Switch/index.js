"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Switch = void 0;

require("core-js/modules/es6.object.assign");

var _react = _interopRequireDefault(require("react"));

var _ToggleField = _interopRequireDefault(require("../ToggleField"));

var _utils = require("../../../utils");

var _Field = _interopRequireDefault(require("../shared/Field"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Switch = function Switch(_ref) {
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
      checked: checked,
      disabled: disabled
    })
  }, _react.default.createElement("div", {
    className: (0, _styles.default)('track')
  }), _react.default.createElement("div", {
    className: (0, _styles.default)('thumb-underlay')
  }, _react.default.createElement("div", {
    className: (0, _styles.default)('thumb')
  }, _react.default.createElement("input", {
    onChange: onChange,
    type: "checkbox",
    id: "basic-switch",
    className: (0, _styles.default)('native-control'),
    "aria-checked": checked,
    checked: checked,
    role: "switch",
    disabled: disabled
  })))), _react.default.createElement("span", {
    className: (0, _styles.default)('label-text', {
      disabled: disabled
    })
  }, (0, _utils.getRequiredText)(label, required))));
};

exports.Switch = Switch;
Switch.defaultProps = {
  checked: false,
  disabled: false
};
var _default = Switch;
exports.default = _default;