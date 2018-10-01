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

var _styles2 = _interopRequireDefault(require("./styles.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */
var myst = (0, _utils.componentStyles)(_styles2.default);

function Paper(_ref) {
  var elevation = _ref.elevation,
      children = _ref.children,
      className = _ref.className;
  var ele = "elevation-".concat(elevation);
  var classes = "".concat(myst('d2ui-paper'), " ").concat(myst(ele), " ").concat(myst('defaults'));
  return _react.default.createElement("div", {
    className: classes
  }, children);
}

Paper.defaultProps = {
  elevation: 1
};
var _default = Paper;
exports.default = _default;