"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinearProgress = LinearProgress;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */
function LinearProgress(_ref) {
  var amount = _ref.amount,
      padded = _ref.padded;
  var type = typeof amount === 'undefined' ? (0, _styles.default)('indeterminate') : (0, _styles.default)('determinate');
  var style = amount ? {
    width: "".concat(amount, "%")
  } : null;
  return _react.default.createElement("div", {
    role: "progressbar",
    className: (0, _styles.default)('container', {
      padded: padded
    })
  }, _react.default.createElement("div", {
    style: style,
    className: (0, _styles.default)('progress', type)
  }));
}

var _default = LinearProgress;
exports.default = _default;