"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./togglefield.css");

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */
var bem = (0, _utils.bemClassNames)('d2ui-toggle-field');

var ToggleField = function ToggleField(_ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      dense = _ref.dense;
  return _react.default.createElement("label", {
    className: bem.b({
      disabled: disabled,
      dense: dense
    })
  }, children);
};

var _default = ToggleField;
exports.default = _default;