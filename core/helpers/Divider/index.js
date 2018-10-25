"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Divider = Divider;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Divider(_ref) {
  var margin = _ref.margin;
  var style = {
    margin: margin
  };
  return _react.default.createElement("div", {
    style: style,
    className: (0, _styles.default)('divider')
  });
}

Divider.defaultProps = {
  margin: '8px 0'
};
Divider.propTypes = {
  margin: _propTypes.default.string
};
var _default = Divider;
exports.default = _default;