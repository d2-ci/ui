"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Divider = Divider;
exports.default = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 =
/*#__PURE__*/
_react.default.createElement(_style.default, {
  id: "2819666615"
}, ".base.jsx-2819666615{display:inline-block;width:100%;height:1px;background-color:var(--grey300);}");

function Divider(_ref) {
  var margin = _ref.margin;
  var style = {
    margin: margin
  };
  return _react.default.createElement("div", {
    style: style,
    className: "jsx-2819666615" + " " + "base"
  }, _ref2);
}

Divider.defaultProps = {
  margin: '8px 0'
};
Divider.propTypes = {
  margin: _propTypes.default.string
};
var _default = Divider;
exports.default = _default;