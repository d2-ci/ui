"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinearProgress = LinearProgress;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../utils");

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */
var bem = (0, _utils.bemClassNames)('linear-progress');

function LinearProgress(_ref) {
  var amount = _ref.amount,
      padded = _ref.padded;
  var type = typeof amount === 'undefined' ? 'indeterminate' : 'determinate';
  var style = amount ? {
    width: "".concat(amount, "%")
  } : null;
  return _react.default.createElement("div", {
    className: bem.b({
      padded: padded
    })
  }, _react.default.createElement("div", {
    style: style,
    className: bem.e('progress', type)
  }));
}

var _default = LinearProgress;
exports.default = _default;