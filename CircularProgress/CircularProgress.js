"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../utils");

require("./circular-progress.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bem = (0, _utils.bemClassNames)('d2ui-circular-progress');

var CircularProgress = function CircularProgress(_ref) {
  var size = _ref.size,
      center = _ref.center;

  var circularProgress = _react.default.createElement("div", {
    className: bem.b(size)
  }, _react.default.createElement("div", {
    className: bem.e('spinner-layer')
  }, _react.default.createElement("div", {
    className: bem.e('circle-clipper', 'left')
  }, _react.default.createElement("div", {
    className: bem.e('circle')
  })), _react.default.createElement("div", {
    className: bem.e('gap-patch')
  }, _react.default.createElement("div", {
    className: bem.e('circle')
  })), _react.default.createElement("div", {
    className: bem.e('circle-clipper', 'right')
  }, _react.default.createElement("div", {
    className: bem.e('circle')
  }))));

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