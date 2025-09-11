"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = void 0;
var _react = _interopRequireDefault(require("react"));
var _CardModule = _interopRequireDefault(require("./Card.module.css"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Card = ({
  children,
  className
}) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: `${_CardModule.default.card} ${className || ''}`
  }, children);
};
exports.Card = Card;