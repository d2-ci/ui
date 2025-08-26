"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusIndicator = void 0;
var _react = _interopRequireDefault(require("react"));
var _Pill = require("../Pill");
var _Ping = require("../Ping");
var _StatusIndicatorModule = _interopRequireDefault(require("./StatusIndicator.module.css"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const StatusIndicator = ({
  label,
  variant = 'default',
  active = false
}) => {
  return /*#__PURE__*/_react.default.createElement(_Pill.Pill, {
    variant: variant
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _StatusIndicatorModule.default.contentWrapper
  }, /*#__PURE__*/_react.default.createElement(_Ping.Ping, {
    variant: variant,
    active: active
  }), /*#__PURE__*/_react.default.createElement("span", null, label)));
};
exports.StatusIndicator = StatusIndicator;