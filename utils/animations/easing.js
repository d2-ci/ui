"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.easeInOutQuad = easeInOutQuad;

/**
 * ease-in-out animation adapted from
 * @link https://github.com/danro/jquery-easing/blob/master/jquery.easing.js
 *
 * @param currentTime
 * @param initialValue
 * @param change
 * @param duration
 * @returns {*}
 */
function easeInOutQuad(currentTime, initialValue, change, duration) {
  return (currentTime /= duration / 2) < 1 ? change / 2 * currentTime * currentTime + initialValue : -change / 2 * (--currentTime * (currentTime - 2) - 1) + initialValue;
}