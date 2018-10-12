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
  var width = _ref.width,
      height = _ref.height,
      children = _ref.children;
  var style = {
    width: width,
    height: height
  };
  return _react.default.createElement("div", {
    style: style,
    className: (0, _styles.default)('container')
  }, children);
}

Card.defaultProps = {
  width: 'inherit',
  height: 'inherit'
};
Card.propTypes = {
  width: _propTypes.default.string,
  height: _propTypes.default.string,
  children: _propTypes.default.node
};
var _default = Card;
exports.default = _default;