"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDoc = getDoc;

/**
 * get <html> or the <body> element in document
 * @returns {HTMLElement}
 */
function getDoc() {
  return document.documentElement || document.body;
}