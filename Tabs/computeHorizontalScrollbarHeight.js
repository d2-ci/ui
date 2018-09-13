"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _Tabs = require("./Tabs");

var horizontalScrollbarHeight;

function _default() {
  if (horizontalScrollbarHeight) {
    return horizontalScrollbarHeight;
  }

  var el = document.createElement('div');
  el.classList.add(_Tabs.bem.e('test-horizontal-scrollbar-height'));
  document.body.appendChild(el); // cache the result

  horizontalScrollbarHeight = el.offsetHeight - el.clientHeight;
  document.body.removeChild(el);
  return horizontalScrollbarHeight;
}