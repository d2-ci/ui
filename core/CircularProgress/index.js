"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CircularProgress = CircularProgress;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../utils");

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */
var bem = (0, _utils.bemClassNames)('circular-progress');

function CircularProgress(_ref) {
  var size = _ref.size,
      center = _ref.center,
      dashed = _ref.dashed;

  var progressBar = _react.default.createElement("div", {
    role: "progressbar",
    className: bem.b(size)
  }, _react.default.createElement("svg", {
    viewBox: "22 22 44 44",
    className: bem.e('viewbox')
  }, _react.default.createElement("circle", {
    className: dashed ? bem.e('dashed') : '',
    cx: "44",
    cy: "44",
    r: "20.2",
    fill: "none",
    strokeWidth: "3.6",
    strokeDashoffset: "0"
  })));

  if (center) {
    return _react.default.createElement("div", {
      className: bem.e('overlay')
    }, progressBar);
  }

  return progressBar;
}

CircularProgress.defaultProps = {
  size: 'medium',
  dashed: true
};
var _default = CircularProgress;
exports.default = _default;