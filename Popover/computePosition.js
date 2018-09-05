"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
exports.RIGHT = exports.CENTER = exports.LEFT = exports.BOTTOM = exports.MIDDLE = exports.TOP = void 0;

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

var _utils = require("../utils");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TOP = 'top';
exports.TOP = TOP;
var MIDDLE = 'middle';
exports.MIDDLE = MIDDLE;
var BOTTOM = 'bottom';
exports.BOTTOM = BOTTOM;
var LEFT = 'left';
exports.LEFT = LEFT;
var CENTER = 'center';
exports.CENTER = CENTER;
var RIGHT = 'right'; // Enough to make sure the popop doesn't hide under a scroll-bar

exports.RIGHT = RIGHT;
var EDGE_MARGIN = 18;

function _default(targetEl, anchorEl, anchorAttachPoint, popoverAttachPoint) {
  var flippedAnchorAttachPoint, flippedPopoverAttachPoint;

  if ((0, _utils.isRtl)()) {
    flippedAnchorAttachPoint = flipHorizontal(anchorAttachPoint);
    flippedPopoverAttachPoint = flipHorizontal(popoverAttachPoint);
  } else {
    flippedAnchorAttachPoint = anchorAttachPoint;
    flippedPopoverAttachPoint = popoverAttachPoint;
  }

  var anchorPosition = getAnchorPosition(anchorEl, flippedAnchorAttachPoint);
  var virtualPosition = getRelativePosition(targetEl, anchorPosition, flippedPopoverAttachPoint);
  var restrictedPosition = getWindowContainedPosition(virtualPosition);
  return restrictedPosition;
}

function flipHorizontal(attachPoint) {
  var horizontal = attachPoint.horizontal;

  if (attachPoint.horizontal === LEFT) {
    horizontal = RIGHT;
  } else if (attachPoint.horizontal === RIGHT) {
    horizontal = LEFT;
  }

  return _objectSpread({}, attachPoint, {
    horizontal: horizontal
  });
}

function getAnchorPosition(el, anchorAttachPoint) {
  var x, y;
  var rect = el.getBoundingClientRect();
  var horizontal = anchorAttachPoint.horizontal,
      vertical = anchorAttachPoint.vertical;

  var _getScrolllAndClientO = getScrolllAndClientOffset(),
      scrollTop = _getScrolllAndClientO.scrollTop,
      scrollLeft = _getScrolllAndClientO.scrollLeft,
      clientTop = _getScrolllAndClientO.clientTop,
      clientLeft = _getScrolllAndClientO.clientLeft;

  if (typeof horizontal === 'number') {
    x = rect.left + horizontal;
  } else {
    switch (horizontal) {
      case LEFT:
        x = rect.left;
        break;

      case CENTER:
        x = rect.left + rect.width / 2;
        break;

      case RIGHT:
      default:
        x = rect.right;
    }
  }

  if (typeof vertical === 'number') {
    y = rect.top + vertical;
  } else {
    switch (vertical) {
      case TOP:
        y = rect.top;
        break;

      case MIDDLE:
        y = rect.top + rect.height / 2;
        break;

      case BOTTOM:
      default:
        y = rect.top + rect.height;
    }
  }

  x += scrollLeft - clientLeft;
  y += scrollTop - clientTop;
  return {
    x: x,
    y: y
  };
}

function getRelativePosition(el, anchor, popoverAttachPoint) {
  var top, left;
  var horizontal = popoverAttachPoint.horizontal,
      vertical = popoverAttachPoint.vertical;
  var rect = el.getBoundingClientRect();

  if (typeof horizontal === 'number') {
    left = rect.left + horizontal;
  } else {
    switch (horizontal) {
      case LEFT:
        left = anchor.x;
        break;

      case CENTER:
        left = anchor.x - rect.width / 2;
        break;

      case RIGHT:
      default:
        left = anchor.x - rect.width;
    }
  }

  if (typeof vertical === 'number') {
    top = rect.top + vertical;
  } else {
    switch (vertical) {
      case TOP:
        top = anchor.y;
        break;

      case MIDDLE:
        top = anchor.y - rect.height / 2;
        break;

      case BOTTOM:
      default:
        top = anchor.y - rect.height;
    }
  }

  return {
    top: top,
    left: left,
    width: rect.width,
    height: rect.height
  };
}

function getWindowContainedPosition(_ref) {
  var top = _ref.top,
      left = _ref.left,
      width = _ref.width,
      height = _ref.height;

  var _getScrolllAndClientO2 = getScrolllAndClientOffset(),
      scrollTop = _getScrolllAndClientO2.scrollTop,
      scrollLeft = _getScrolllAndClientO2.scrollLeft,
      clientTop = _getScrolllAndClientO2.clientTop,
      clientLeft = _getScrolllAndClientO2.clientLeft;

  var windowTopEdge = scrollTop - clientTop + EDGE_MARGIN;
  var windowBottomEdge = window.innerHeight + scrollTop - clientTop - EDGE_MARGIN;
  var windowLeftEdge = scrollLeft - clientLeft + EDGE_MARGIN;
  var windowRightEdge = window.innerWidth + scrollLeft - clientLeft - EDGE_MARGIN;
  var containedTop = top;
  var containedLeft = left;

  if (top + height > windowBottomEdge) {
    containedTop = windowBottomEdge - height;
  }

  if (left + width > windowRightEdge) {
    containedLeft = windowRightEdge - width;
  }

  if (top < windowTopEdge) {
    containedTop = windowTopEdge;
  }

  if (left < windowLeftEdge) {
    containedLeft = windowLeftEdge;
  }

  return {
    top: containedTop,
    left: containedLeft
  };
}

function getScrolllAndClientOffset() {
  var body = document.body;
  var docEl = document.documentElement;
  return {
    scrollTop: window.pageYOffset || docEl.scrollTop || body.scrollTop,
    scrollLeft: window.pageXOffset || docEl.scrollLeft || body.scrollLeft,
    clientTop: docEl.clientTop || body.clientTop || 0,
    clientLeft: docEl.clientLeft || body.clientLeft || 0
  };
}