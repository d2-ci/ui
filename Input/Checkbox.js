"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./checkbox.css");

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bem = (0, _utils.bemClassNames)('d2ui-checkbox');

var Checkbox = function Checkbox(props) {
  return _react.default.createElement("label", {
    className: bem.b()
  }, _react.default.createElement("input", {
    type: "checkbox"
  }), _react.default.createElement("span", null, "Checkbox"));
};

var _default = Checkbox;
exports.default = _default;