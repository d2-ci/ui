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

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// CSS selectors like :first-child, :only-child, :last-child do not take text nodes
// into account, so wrapping text nodes in spans simplifies the CSS file a lot.
function wrapTextNodesInSpans(children) {
  return _react.Children.map(children, function (child, index) {
    if (['string', 'number'].includes(_typeof(child))) {
      return _react.default.createElement("span", {
        key: "key-".concat(index)
      }, child);
    }

    return child;
  });
}
/**
 * get <html> or the <body> element in document
 * @returns {HTMLElement}
 */


function getDoc() {
  return document.documentElement || document.body;
}