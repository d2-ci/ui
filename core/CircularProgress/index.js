"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CircularProgress = CircularProgress;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */
function CircularProgress(_ref) {
  var size = _ref.size,
      center = _ref.center,
      dashed = _ref.dashed;

  var progressBar = _react.default.createElement("div", {
    role: "progressbar",
    className: (0, _styles.default)('container', size)
  }, _react.default.createElement("svg", {
    viewBox: "22 22 44 44",
    className: (0, _styles.default)('viewbox')
  }, _react.default.createElement("circle", {
    className: dashed ? (0, _styles.default)('dashed') : '',
    cx: "44",
    cy: "44",
    r: "20.2",
    fill: "none",
    strokeWidth: "3.6",
    strokeDashoffset: "0"
  })));

  if (center) {
    return _react.default.createElement("div", {
      className: (0, _styles.default)('overlay')
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