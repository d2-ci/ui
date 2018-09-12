"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

var _react = _interopRequireDefault(require("react"));

var _utils = require("../utils");

var _RadioButton = _interopRequireDefault(require("./RadioButton"));

var _FormField = _interopRequireDefault(require("./FormField"));

require("./radiobuttongroup.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var bem = (0, _utils.bemClassNames)('d2ui-radio-button-group');

var randomName = function randomName() {
  return Math.random().toString(36).substring(2, 15);
};

var RadioButtonGroup = function RadioButtonGroup(_ref) {
  var options = _ref.options,
      name = _ref.name,
      value = _ref.value,
      label = _ref.label,
      inline = _ref.inline,
      _onChange = _ref.onChange,
      disabled = _ref.disabled,
      dense = _ref.dense,
      valid = _ref.valid,
      warning = _ref.warning,
      error = _ref.error,
      helpText = _ref.helpText;
  return _react.default.createElement(_FormField.default, {
    valid: valid,
    warning: warning,
    disabled: disabled,
    error: error,
    dense: dense,
    fullWidth: true,
    helpText: helpText
  }, _react.default.createElement("p", {
    className: bem.e('description', {
      error: error,
      valid: valid,
      warning: warning
    })
  }, label), _react.default.createElement("div", {
    className: bem.b({
      error: error,
      warning: warning,
      valid: valid,
      stacked: !inline
    })
  }, options.map(function (option) {
    return _react.default.createElement(_RadioButton.default, _extends({
      key: option.value,
      label: option.label,
      name: name || randomName(),
      value: option.value,
      checked: option.value === value,
      fullWidth: !inline,
      onChange: function onChange() {
        return _onChange(option.value);
      },
      dense: dense,
      disabled: disabled
    }, {
      dense: dense,
      disabled: disabled,
      error: error
    }));
  })));
};

var _default = RadioButtonGroup;
exports.default = _default;