"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inputColorClass = inputColorClass;

function inputColorClass() {
  var checked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var disabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (checked) {
    return 'secondary-light';
  } else if (disabled) {
    return 'grey-light';
  }

  return 'grey';
}