"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.t = t;

require("core-js/modules/web.dom.iterable");

/**
 * Provide static theme classes for components to be used in cx.bind
 * e.g. 'primary', 'primary-bg'
 * @returns { 'primary': true , 'primary-bg': true }
 */
function t() {
  var obj = {};

  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  classes.forEach(function (n) {
    if (typeof n === 'string' || typeof n === 'number' || !!n) {
      obj[n] = true;
    }
  });
  return obj;
}