"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/** @format */
// Adapted from https://github.com/danro/jquery-easing/blob/master/jquery.easing.js
var easeInOutQuad = function easeInOutQuad(currentTime, initialValue, change, duration) {
  return (currentTime /= duration / 2) < 1 ? change / 2 * currentTime * currentTime + initialValue : -change / 2 * (--currentTime * (currentTime - 2) - 1) + initialValue;
};

var _default = {
  easeInOutQuad: easeInOutQuad
};
exports.default = _default;