"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../utils");

require("./fieldwrap.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bem = (0, _utils.bemClassNames)('d2ui-form-field');

var FieldWrap = function FieldWrap(_ref) {
  var children = _ref.children,
      valid = _ref.valid,
      warning = _ref.warning,
      disabled = _ref.disabled,
      error = _ref.error,
      dense = _ref.dense,
      fullWidth = _ref.fullWidth,
      helpText = _ref.helpText;
  return _react.default.createElement("div", {
    className: bem.b({
      valid: valid,
      warning: warning,
      disabled: disabled,
      error: error,
      dense: dense,
      'full-width': fullWidth
    })
  }, children, helpText && _react.default.createElement("div", {
    className: bem.e('help-text')
  }, helpText));
};

var _default = FieldWrap;
exports.default = _default;