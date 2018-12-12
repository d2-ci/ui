/**
 * Check if object { x, y } passed in first param exists within
 * second param { left, right, top, bottom }
 *
 * @returns {boolean}
 */
export function isPointInRect(_ref, _ref2) {
  var x = _ref.x,
      y = _ref.y;
  var left = _ref2.left,
      right = _ref2.right,
      top = _ref2.top,
      bottom = _ref2.bottom;
  return x >= left && x <= right && y >= top && y <= bottom;
}