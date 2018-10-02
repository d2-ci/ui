"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRequiredText = getRequiredText;

/** @format */
function getRequiredText(text, required) {
  return required ? "".concat(text, " *") : text;
}