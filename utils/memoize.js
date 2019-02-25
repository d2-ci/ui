"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = memoize;

function argsEqual(args1, args2) {
  return args1.every(function (arg, idx) {
    return args2[idx] === arg;
  });
}

function memoize(func) {
  var prevRes;
  var prevArgs = [];
  var calledOnce = false;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (calledOnce && argsEqual(prevArgs, args)) {
      return prevRes;
    }

    prevRes = func.apply(this, args);
    prevArgs = args;
    calledOnce = true;
    return prevRes;
  };
}