"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Paper = Paper;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../utils");

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */
var bem = (0, _utils.bemClassNames)('paper');

function Paper(_ref) {
  var elevation = _ref.elevation,
      children = _ref.children,
      className = _ref.className;
  var elevationClass = bem.b("elevation-".concat(elevation));
  return _react.default.createElement("div", {
    className: "".concat(elevationClass, " ").concat(className)
  }, children);
}

Paper.defaultProps = {
  elevation: 1,
  className: 'd2ui-paper-defaults'
};
var _default = Paper;
exports.default = _default;