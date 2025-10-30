"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ping = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _PingModule = _interopRequireDefault(require("./Ping.module.css"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Ping = ({
  active = false,
  variant = 'default'
}) => {
  return /*#__PURE__*/_react.default.createElement("span", {
    className: _PingModule.default.wrapper
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _classnames.default)(_PingModule.default.ping, _PingModule.default[variant], {
      [_PingModule.default.active]: active
    })
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _classnames.default)(_PingModule.default.dot, _PingModule.default[variant])
  }));
};
exports.Ping = Ping;