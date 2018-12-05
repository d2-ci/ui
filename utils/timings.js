import _Date$now from "@babel/runtime-corejs2/core-js/date/now";

/**
 *
 * @param fn
 * @param threshold
 * @param scope     the (this) context in which the function runs
 */
export function throttle(fn) {
  var threshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 150;
  var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  var last;
  var deferTimer;
  return function () {
    var context = scope || this;

    var now = _Date$now();

    var args = arguments;

    if (last && now < last + threshold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}
/**
 * defers running the function passed as argument by 1 millisecond
 *
 * @param fn
 */

export function defer(fn) {
  setTimeout(fn, 1);
}