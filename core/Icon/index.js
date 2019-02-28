"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = Icon;
exports.default = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = _interopRequireDefault(require("./styles"));

require("material-design-icons-iconfont/dist/material-design-icons.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Icon(_ref) {
  var name = _ref.name,
      className = _ref.className,
      onClick = _ref.onClick;
  return _react.default.createElement("i", {
    onClick: onClick,
    className: "jsx-".concat(_styles.default.__hash) + " " + (className || "")
  }, name, _react.default.createElement(_style.default, {
    id: _styles.default.__hash
  }, _styles.default));
}

Icon.defaultProps = {
  name: '',
  className: '',
  onClick: undefined
};
Icon.propTypes = {
  name: _propTypes.default.string.isRequired,
  className: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = Icon;
exports.default = _default;