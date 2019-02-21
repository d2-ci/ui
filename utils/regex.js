"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.escapeRegExp = escapeRegExp;

// from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}