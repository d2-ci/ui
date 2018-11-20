"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = Card;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Card(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return _react.default.createElement("div", {
    className: (0, _styles.default)('container', className)
  }, children);
}

Card.defaultProps = {
  className: ''
};
Card.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node
};
var _default = Card;
exports.default = _default;