"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = computePosition;

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

var _utils = require("../../utils");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Enough to make sure the popop doesn't hide under a scroll-bar
var EDGE_MARGIN = 18;

function computePosition(targetEl, anchorEl, anchorAttachPoint, popoverAttachPoint) {
  var anchorPosition = getAnchorPosition(anchorEl, (0, _utils.isRtl)() ? flipHorizontal(anchorAttachPoint) : anchorAttachPoint);
  var relativePosition = getRelativePosition(targetEl, anchorPosition, (0, _utils.isRtl)() ? flipHorizontal(popoverAttachPoint) : popoverAttachPoint);
  return getWindowContainedPosition(relativePosition);
}

function flipHorizontal(attachPoint) {
  var horizontal = attachPoint.horizontal;

  if (attachPoint.horizontal === 'left') {
    horizontal = 'right';
  } else if (attachPoint.horizontal === 'right') {
    horizontal = 'left';
  }

  return _objectSpread({}, attachPoint, {
    horizontal: horizontal
  });
}

function getAnchorPosition(el, _ref) {
  var horizontal = _ref.horizontal,
      vertical = _ref.vertical;
  var rect = el.getBoundingClientRect();

  var _getScrollAndClientOf = getScrollAndClientOffset(),
      scrollTop = _getScrollAndClientOf.scrollTop,
      scrollLeft = _getScrollAndClientOf.scrollLeft,
      clientTop = _getScrollAndClientOf.clientTop,
      clientLeft = _getScrollAndClientOf.clientLeft;

  return {
    left: getHorizontalPosition(horizontal, el, rect) + scrollLeft - clientLeft,
    top: getVerticalPosition(vertical, el, rect) + scrollTop - clientTop
  };
}

function getRelativePosition(el, anchor, _ref2) {
  var horizontal = _ref2.horizontal,
      vertical = _ref2.vertical;
  return {
    top: getVerticalPosition(vertical, el, anchor, true),
    left: getHorizontalPosition(horizontal, el, anchor, true),
    width: el.offsetWidth,
    height: el.offsetHeight
  };
}

function getHorizontalPosition(horizontal, el, rect, toLeft) {
  var multiplier = toLeft ? -1 : 1;

  if (typeof horizontal === 'number') {
    return rect.left + horizontal;
  } else {
    switch (horizontal) {
      case 'left':
        return rect.left;

      case 'center':
        return rect.left + multiplier * (el.offsetWidth / 2);

      case 'right':
      default:
        return rect.left + multiplier * el.offsetWidth;
    }
  }
}

function getVerticalPosition(vertical, el, rect, toLeft) {
  var multiplier = toLeft ? -1 : 1;

  if (typeof vertical === 'number') {
    return rect.top + vertical;
  } else {
    switch (vertical) {
      case 'top':
        return rect.top;

      case 'middle':
        return rect.top + multiplier * (el.offsetHeight / 2);

      case 'bottom':
      default:
        return rect.top + multiplier * el.offsetHeight;
    }
  }
}

function getWindowContainedPosition(_ref3) {
  var top = _ref3.top,
      left = _ref3.left,
      width = _ref3.width,
      height = _ref3.height;

  var _getScrollAndClientOf2 = getScrollAndClientOffset(),
      scrollTop = _getScrollAndClientOf2.scrollTop,
      scrollLeft = _getScrollAndClientOf2.scrollLeft,
      clientTop = _getScrollAndClientOf2.clientTop,
      clientLeft = _getScrollAndClientOf2.clientLeft;

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
    left: containedLeft,
    opacity: 1
  };
}

function getScrollAndClientOffset() {
  var body = document.body;
  var docEl = document.documentElement;
  return {
    scrollTop: window.pageYOffset || docEl.scrollTop || body.scrollTop,
    scrollLeft: window.pageXOffset || docEl.scrollLeft || body.scrollLeft,
    clientTop: docEl.clientTop || body.clientTop || 0,
    clientLeft: docEl.clientLeft || body.clientLeft || 0
  };
}