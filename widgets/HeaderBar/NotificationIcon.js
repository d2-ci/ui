"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../../core/Icon"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = _interopRequireDefault(require("./styles.js"));

var _colors = require("../../core/colors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var notificationIcon = {
  styles: _react.default.createElement(_style.default, {
    id: "1118766463"
  }, ".jsx-1118766463{color:".concat(_colors.colors.white, ";}")),
  className: "jsx-1118766463"
};

function NotificationIcon(_ref) {
  var icon = _ref.icon,
      count = _ref.count,
      href = _ref.href;
  return _react.default.createElement("a", {
    href: href,
    className: "jsx-".concat(_styles.default.__hash) + " " + "notification"
  }, count > 0 && _react.default.createElement("span", {
    className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)('count') || "")
  }, count), _react.default.createElement(_Icon.default, {
    name: icon,
    className: notificationIcon.className
  }), notificationIcon.styles, _react.default.createElement(_style.default, {
    id: _styles.default.__hash
  }, _styles.default));
}

NotificationIcon.defaultProps = {
  count: 0
};
NotificationIcon.propTypes = {
  icon: _propTypes.default.string.isRequired,
  href: _propTypes.default.string.isRequired,
  count: _propTypes.default.number
};
var _default = NotificationIcon;
exports.default = _default;