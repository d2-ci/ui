"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = _interopRequireDefault(require("./styles.js"));

var _colors = require("../../core/colors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NotificationIcon(_ref) {
  var count = _ref.count,
      href = _ref.href,
      children = _ref.children;
  return _react.default.createElement("a", {
    href: href,
    className: "jsx-".concat(_styles.default.__hash) + " " + "notification"
  }, count > 0 && _react.default.createElement("span", {
    className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)('count') || "")
  }, count), children, _react.default.createElement(_style.default, {
    id: _styles.default.__hash
  }, _styles.default));
}

NotificationIcon.defaultProps = {
  count: 0
};
NotificationIcon.propTypes = {
  children: _propTypes.default.element,
  href: _propTypes.default.string.isRequired,
  count: _propTypes.default.number
};
var _default = NotificationIcon;
exports.default = _default;