"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapTextNodesInSpans = wrapTextNodesInSpans;
exports.getDoc = getDoc;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

require("core-js/modules/es6.array.map");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * CSS selectors like :first-child, :only-child, :last-child do not take text nodes
 * into account, so wrapping text nodes in spans simplifies the CSS file a lot.
 *
 * @param nodes list of text nodes
 */
function wrapTextNodesInSpans(nodes) {
  return _react.default.Children.map(nodes, function (node, idx) {
    if (['string', 'number'].includes(_typeof(node))) {
      return _react.default.createElement("span", {
        key: "key-".concat(idx)
      }, node);
    }

    return node;
  });
}

function getDoc() {
  return document.documentElement || document.body;
}