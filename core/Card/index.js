"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = Card;
exports.default = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _colors = require("../colors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Card(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return _react.default.createElement("div", {
    className: _style.default.dynamic([["84828388", [_colors.colors.white]]]) + " " + ((0, _classnames.default)('base', className) || "")
  }, children, _react.default.createElement(_style.default, {
    id: "84828388",
    dynamic: [_colors.colors.white]
  }, ".base.__jsx-style-dynamic-selector{display:inline-block;position:relative;width:100%;height:100%;border-radius:2px;background:".concat(_colors.colors.white, ";box-shadow:0 0 2px 0 rgba(0,0,0,0.14), 0 2px 2px 0 rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.2);}")));
}

Card.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node
};
var _default = Card;
exports.default = _default;