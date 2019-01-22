"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Help = require("./Help");

Object.keys(_Help).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Help[key];
    }
  });
});

var _Divider = require("./Divider");

Object.keys(_Divider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Divider[key];
    }
  });
});