"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throttle = throttle;

require("core-js/modules/es6.date.now");

/** @format */
function throttle(fn) {
  var threshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 150;
  var scope = arguments.length > 2 ? arguments[2] : undefined;
  var last;
  var deferTimer;
  return function () {
    var context = scope || this;
    var now = Date.now();
    var args = arguments;

    if (last && now < last + threshold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}