"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OverflowButton = void 0;
var _react = _interopRequireWildcard(require("react"));
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _ui = require("@dhis2/ui");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const OverflowButton = ({
  label,
  primary,
  secondary,
  small,
  large,
  disabled,
  onClick: handleClick,
  open: propsOpen,
  icon,
  dataTest,
  component
}) => {
  const [isOpen, setIsOpen] = (0, _react.useState)(false);
  const anchorRef = (0, _react.useRef)(null);
  const open = propsOpen !== undefined ? propsOpen : isOpen;
  const toggle = () => {
    if (propsOpen === undefined) {
      setIsOpen(prev => !prev);
    }
    handleClick === null || handleClick === void 0 || handleClick();
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: anchorRef
  }, /*#__PURE__*/_react.default.createElement(_ui.Button, {
    title: label !== null && label !== void 0 ? label : _d2I18n.default.t('More'),
    primary: primary,
    secondary: secondary,
    dataTest: dataTest,
    disabled: disabled,
    small: small,
    large: large,
    onClick: toggle,
    icon: icon
  }, label), open && /*#__PURE__*/_react.default.createElement(_ui.Layer, {
    onBackdropClick: toggle
  }, /*#__PURE__*/_react.default.createElement(_ui.Popper, {
    reference: anchorRef,
    placement: "bottom-start"
  }, component)));
};
exports.OverflowButton = OverflowButton;