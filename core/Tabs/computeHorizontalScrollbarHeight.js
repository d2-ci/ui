"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.computeHorizontalScrollbarHeight = computeHorizontalScrollbarHeight;

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */
var horizontalScrollbarHeight;
/**
 * @link https://github.com/material-components/material-components-web/blob/master/packages/mdc-tab-scroller/util.js#L39-L55
 * Computes the height of browser-rendered horizontal scrollbars using a self-created test element.
 * May return 0 (e.g. on OS X browsers under default configuration).
 * @param {!Document} documentObj
 * @param {boolean=} shouldCacheResult
 * @return {number}
 */

function computeHorizontalScrollbarHeight() {
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