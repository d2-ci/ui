"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../../core/Icon"));

var _utils = require("../../utils");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NotificationIcon(_ref) {
  var icon = _ref.icon,
      count = _ref.count,
      href = _ref.href;
  return _react.default.createElement("a", {
    className: (0, _styles.rx)('notification', {
      icon: icon
    }),
    href: href
  }, count > 0 && _react.default.createElement("span", {
    className: (0, _styles.rx)('count')
  }, count), _react.default.createElement(_Icon.default, {
    name: icon
  }));
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