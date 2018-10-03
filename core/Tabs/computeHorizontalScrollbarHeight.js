"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */
var horizontalScrollbarHeight;

function _default() {
  if (horizontalScrollbarHeight) {
    return horizontalScrollbarHeight;
  }

  var el = document.createElement('div');
  el.classList.add((0, _styles.default)('test-horizontal-scrollbar-height'));
  document.body.appendChild(el); // cache the result

  horizontalScrollbarHeight = el.offsetHeight - el.clientHeight;
  document.body.removeChild(el);
  return horizontalScrollbarHeight;
}