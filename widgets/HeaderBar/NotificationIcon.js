"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("../../core/Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */
function NotificationIcon(_ref) {
  var icon = _ref.icon,
      count = _ref.count;
  return _react.default.createElement("div", {
    className: "notification ".concat(icon)
  }, count > 0 && _react.default.createElement("div", {
    className: "count"
  }, count), _react.default.createElement(_Icon.default, {
    name: icon
  }));
}

NotificationIcon.defaultProps = {
  count: 0
};
var _default = NotificationIcon;
exports.default = _default;