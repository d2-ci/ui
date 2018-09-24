"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("../../utils/index");

require("./linear-progress.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */
var bem = (0, _index.bemClassNames)('linear-progress');

var LinearProgress = function LinearProgress(_ref) {
  var progress = _ref.progress,
      padded = _ref.padded;
  var progressClass = typeof progress === 'undefined' ? 'indeterminate' : 'determinate';
  var progressStyle = progress ? {
    width: "".concat(progress, "%")
  } : null;
  return _react.default.createElement("div", {
    className: bem.b({
      padded: padded
    })
  }, _react.default.createElement("div", {
    className: bem.e('progress', progressClass),
    style: progressStyle
  }));
};

var _default = LinearProgress;
exports.default = _default;