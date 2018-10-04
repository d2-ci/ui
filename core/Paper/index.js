"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Paper = Paper;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */
function Paper(_ref) {
  var elevation = _ref.elevation,
      children = _ref.children;
  return _react.default.createElement("div", {
    className: (0, _styles.default)('container', "elevation-".concat(elevation))
  }, children);
}

Paper.defaultProps = {
  elevation: 1
};
var _default = Paper;
exports.default = _default;