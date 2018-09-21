"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.function.name");

var _react = _interopRequireDefault(require("react"));

require("./icon.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(_ref) {
  var name = _ref.name,
      className = _ref.className;
  return _react.default.createElement("i", {
    className: "material-icons ".concat(className ? ' ' + className : '')
  }, name);
};

var _default = Icon;
exports.default = _default;