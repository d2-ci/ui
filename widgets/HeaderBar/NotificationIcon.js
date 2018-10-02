"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("../../core/Icon"));

var _utils = require("../../utils");

var _styles = _interopRequireDefault(require("./styles.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */
var css = (0, _utils.componentStyles)(_styles.default);

function NotificationIcon(_ref) {
  var icon = _ref.icon,
      count = _ref.count;
  return _react.default.createElement("div", {
    className: "".concat(css('notification'), " ").concat(icon)
  }, count > 0 && _react.default.createElement("div", {
    className: css('count')
  }, count), _react.default.createElement(_Icon.default, {
    name: icon
  }));
}

NotificationIcon.defaultProps = {
  count: 0
};
var _default = NotificationIcon;
exports.default = _default;