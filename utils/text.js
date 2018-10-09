"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRequiredText = getRequiredText;

/** @format */

/**
 * when required is True, Modifies text to include a required marker e.g. *
 *
 * @param text
 * @param required
 * @returns {string}
 */
function getRequiredText(text, required) {
  return required ? "".concat(text, " *") : text;
}