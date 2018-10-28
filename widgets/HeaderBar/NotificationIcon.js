"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../../core/Icon"));

var _utils = require("../../utils");

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NotificationIcon(_ref) {
  var icon = _ref.icon,
      count = _ref.count;
  return _react.default.createElement("div", {
    className: (0, _styles.default)('notification', {
      icon: icon
    })
  }, count > 0 && _react.default.createElement("div", {
    className: (0, _styles.default)('count', (0, _utils.t)('secondary-light-bg'))
  }, count), _react.default.createElement(_Icon.default, {
    name: icon
  }));
}

NotificationIcon.propTypes = {
  count: _propTypes.default.number,
  icon: _propTypes.default.string.isRequired
};
NotificationIcon.defaultProps = {
  count: 0
};
var _default = NotificationIcon;
exports.default = _default;