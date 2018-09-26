"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CircularProgress = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../utils");

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */
var bem = (0, _utils.bemClassNames)('circular-progress');

var CircularProgress = function CircularProgress(_ref) {
  var size = _ref.size,
      center = _ref.center;

  var circularProgress = _react.default.createElement("div", {
    className: "spinner"
  }, _react.default.createElement("svg", {
    viewBox: "22 22 44 44",
    className: "viewbox ".concat(size)
  }, _react.default.createElement("circle", {
    className: "circle",
    cx: "44",
    cy: "44",
    r: "20.2",
    fill: "none",
    strokeWidth: "3.6"
  })));

  var overlay = '';

  if (center) {
    overlay = 'overlay';
  }

  return _react.default.createElement("div", {
    className: "d2ui-circular-progress ".concat(overlay),
    role: "progressbar"
  }, circularProgress);
};

exports.CircularProgress = CircularProgress;
CircularProgress.defaultProps = {
  size: 'medium'
};
var _default = CircularProgress;
exports.default = _default;