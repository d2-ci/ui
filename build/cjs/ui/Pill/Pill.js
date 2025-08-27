"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pill = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _PillModule = _interopRequireDefault(require("./Pill.module.css"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Pill = ({
  children,
  variant = 'default'
}) => {
  return /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _classnames.default)(_PillModule.default.pillWrapper, {
      [_PillModule.default.default]: variant === 'default',
      [_PillModule.default.destructive]: variant === 'destructive',
      [_PillModule.default.info]: variant === 'info',
      [_PillModule.default.warning]: variant === 'warning',
      [_PillModule.default.success]: variant === 'success'
    })
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _PillModule.default.pill
  }, children));
};
exports.Pill = Pill;