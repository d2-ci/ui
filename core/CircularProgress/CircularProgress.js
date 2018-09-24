"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("../../utils/index");

require("./circular-progress.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */
var bem = (0, _index.bemClassNames)('circular-progress');

var CircularProgress = function CircularProgress(_ref) {
  var size = _ref.size,
      center = _ref.center;

  var circularProgress = _react.default.createElement("div", {
    role: "progressbar",
    className: bem.b(size)
  }, _react.default.createElement("svg", {
    viewBox: "22 22 44 44",
    className: bem.e('viewbox')
  }, _react.default.createElement("circle", {
    className: bem.e('circle'),
    cx: "44",
    cy: "44",
    r: "20.2",
    fill: "none",
    strokeWidth: "3.6"
  })));

  if (center) {
    return _react.default.createElement("div", {
      className: bem.e('overlay')
    }, circularProgress);
  }

  return circularProgress;
};

CircularProgress.defaultProps = {
  size: 'medium'
};
var _default = CircularProgress;
exports.default = _default;