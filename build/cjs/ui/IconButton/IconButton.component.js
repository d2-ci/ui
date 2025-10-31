"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _iconButtonModule = _interopRequireDefault(require("./iconButton.module.css"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const IconButton = ({
  children,
  className,
  dataTest,
  onClick,
  disabled,
  ...passOnProps
}) => /*#__PURE__*/_react.default.createElement("button", _extends({}, passOnProps, {
  onClick: onClick,
  disabled: disabled,
  "data-test": dataTest,
  className: (0, _classnames.default)(_iconButtonModule.default.button, {
    disabled,
    ...(className ? {
      [className]: true
    } : {})
  }),
  type: "button",
  tabIndex: 0
}), children);
exports.IconButton = IconButton;