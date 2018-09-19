"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(text, required) {
  return required ? "".concat(text, " *") : text;
}