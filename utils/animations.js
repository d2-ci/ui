"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animations = animations;

var _css = require("./css");

/** @format */
var HORIZONTAL = 'horizontal';
var VERTICAL = 'vertical';
var END = 'end';
var START = 'start';
/**
 * to: can be an element or one of "end" "start"
 * scrollBox: can be the window object or an element
 * direction: can be one of "horizontal" "vertical"
 * offset: is a number by which to scroll beyond a target, scrolling will stop before the target if a negative number is provided
 * duration: is a number which describes the animation's duration in ms
 * callback: is an optional function to execute when the scroll animation is done
 */

function animations(_ref) {
  var to = _ref.to,
      _ref$scrollBox = _ref.scrollBox,
      scrollBox = _ref$scrollBox === void 0 ? window : _ref$scrollBox,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'vertical' : _ref$direction,
      _ref$offset = _ref.offset,
      offset = _ref$offset === void 0 ? 0 : _ref$offset,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 350 : _ref$duration,
      callback = _ref.callback;
  var isWindowScroll = scrollBox instanceof Window;
  var scrollHandler = getScrollHandler(scrollBox, direction, isWindowScroll);
  var startValue = getStartValue(scrollBox, direction, isWindowScroll);
  var endValue = getEndValue(to, direction, scrollBox, offset, isWindowScroll, startValue);
  var change = endValue - startValue;
  var startTimestamp, elapsedTime, scrollValue;

  function step(timestamp) {
    if (!startTimestamp) {
      startTimestamp = timestamp;
    }

    elapsedTime = timestamp - startTimestamp;
    scrollValue = (0, _css.easeInOutQuad)(elapsedTime, startValue, change, duration);

    if (elapsedTime >= duration) {
      if (scrollValue !== endValue) {
        scrollHandler(endValue);
      }

      callback && callback();
    } else {
      scrollHandler(scrollValue);
      window.requestAnimationFrame(step);
    }
  }

  window.requestAnimationFrame(step);
}

function getScrollHandler(scrollBox, direction, isWindowScroll) {
  switch (true) {
    case !isWindowScroll && direction === HORIZONTAL:
      return function (scrollValue) {
        return scrollBox.scrollLeft = scrollValue;
      };

    case !isWindowScroll && direction === VERTICAL:
      return function (scrollValue) {
        return scrollBox.scrollTop = scrollValue;
      };

    case isWindowScroll && direction === HORIZONTAL:
      return function (scrollValue) {
        return window.scrollTo({
          left: scrollValue
        });
      };

    case isWindowScroll && direction === VERTICAL:
    default:
      return function (scrollValue) {
        return window.scrollTo({
          top: scrollValue
        });
      };
  }
}

function getStartValue(scrollBox, direction, isWindowScroll) {
  var doc = getDoc();

  switch (true) {
    case !isWindowScroll && direction === HORIZONTAL:
      return scrollBox.scrollLeft;

    case !isWindowScroll && direction === VERTICAL:
      return scrollBox.scrollTop;

    case isWindowScroll && direction === HORIZONTAL:
      return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);

    case isWindowScroll && direction === VERTICAL:
    default:
      return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  }
}

function getEndValue(to, direction, scrollBox, offset, isWindowScroll, startValue) {
  var doc = getDoc();
  var scrollingToElement = Boolean(to.nodeType);

  switch (true) {
    case scrollingToElement:
      return getElemEndValue(to, direction, scrollBox, offset, isWindowScroll, startValue);

    case to === START:
      return 0;

    case to === END && isWindowScroll && direction === HORIZONTAL:
      return doc.scrollWidth - window.innerWidth;

    case to === END && isWindowScroll && direction === VERTICAL:
    default:
      return doc.scrollHeight - window.innerHeight;
  }
}

function getElemEndValue(el, direction, scrollBox, offset, isWindowScroll, startValue) {
  var _el$getBoundingClient = el.getBoundingClientRect(),
      top = _el$getBoundingClient.top,
      left = _el$getBoundingClient.left,
      width = _el$getBoundingClient.width,
      height = _el$getBoundingClient.height;

  var doc = getDoc();
  var typeSelector = isWindowScroll ? 'window' : 'element';
  var movementSelector = direction === HORIZONTAL && el.offsetLeft > startValue || direction === VERTICAL && el.offsetTop > startValue ? 'forward' : 'back';
  var lookup = {
    window: {
      horizontal: {
        forward: left + window.scrollX + width + offset - doc.clientWidth,
        back: left + window.scrollX - offset
      },
      vertical: {
        forward: top + window.scrollY + height + offset - doc.clientHeight,
        back: top + window.scrollY - offset
      }
    },
    element: {
      horizontal: {
        forward: el.offsetLeft + el.offsetWidth - scrollBox.offsetWidth + offset,
        back: el.offsetLeft - offset
      },
      vertical: {
        forward: el.offsetTop + el.offsetHeight - scrollBox.clientHeight + offset,
        back: el.offsetTop - offset
      }
    }
  };
  return Math.round(lookup[typeSelector][direction][movementSelector]);
}

function getDoc() {
  return document.documentElement || document.body;
}