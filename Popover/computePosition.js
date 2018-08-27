"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
exports.RIGHT = exports.CENTER = exports.LEFT = exports.BOTTOM = exports.MIDDLE = exports.TOP = void 0;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.for-each");

var _utils = require("../utils");

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
var RIGHT = 'right';
exports.RIGHT = RIGHT;

function _default(targetEl, anchorEl, anchorAttachPoint, popoverAttachPoint) {
  if ((0, _utils.isRtl)()) {
    flipHorizontal([anchorAttachPoint, popoverAttachPoint]);
  }

  var anchorPosition = getAnchorPosition(anchorEl, anchorAttachPoint);
  var virtualPosition = getRelativePosition(targetEl, anchorPosition, popoverAttachPoint);
  var restrictedPosition = getWindowContainedPosition(virtualPosition);
  return restrictedPosition;
}

function flipHorizontal(attachPoints) {
  attachPoints.forEach(function (point) {
    if (point.horizontal === LEFT) {
      point.horizontal = RIGHT;
    } else if (point.horizontal === RIGHT) {
      point.horizontal = LEFT;
    }
  });
}

function getAnchorPosition(el, anchorAttachPoint) {
  var x, y;
  var horizontal = anchorAttachPoint.horizontal,
      vertical = anchorAttachPoint.vertical;
  var rect = el.getBoundingClientRect();

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
        x = rect.right;
        break;

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
        y = rect.bottom;
        break;

      default:
        y = rect.bottom;
    }
  }

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
        left = anchor.x - rect.width;
        break;

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
        top = anchor.y - rect.height;
        break;

      default:
        top = anchor.y;
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
  var containedTop = top;
  var containedLeft = left;

  if (top + height > window.innerHeight) {
    containedTop = window.innerHeight - height;
  }

  if (left + width > window.innerWidth) {
    containedLeft = window.innerWidth - width;
  }

  if (top < 0) {
    containedTop = 0;
  }

  if (left < 0) {
    containedLeft = 0;
  }

  return {
    top: containedTop,
    left: containedLeft
  };
}