"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDoc = getDoc;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */

/**
 * get <html> or the <body> element in document
 * @returns {HTMLElement}
 */
function getDoc() {
  return document.documentElement || document.body;
}