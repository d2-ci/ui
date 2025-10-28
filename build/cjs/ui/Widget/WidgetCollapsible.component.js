"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WidgetCollapsible = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _ui = require("@dhis2/ui");
var _IconButton = require("../IconButton");
var _WidgetModule = _interopRequireDefault(require("./Widget.module.css"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const WidgetCollapsible = ({
  header,
  open,
  onOpen,
  onClose,
  color = _ui.colors.white,
  borderless = false,
  children
}) => {
  const [childrenVisible, setChildrenVisibility] = (0, _react.useState)(open); // controls whether children are rendered to the DOM
  const [animationsReady, setAnimationsReadyStatus] = (0, _react.useState)(false);
  const [postEffectOpen, setPostEffectOpenStatus] = (0, _react.useState)(open);
  const hideChildrenTimeoutRef = (0, _react.useRef)(null);
  const initialRenderRef = (0, _react.useRef)(true);
  (0, _react.useEffect)(() => {
    if (initialRenderRef.current) {
      initialRenderRef.current = false;
      return;
    }
    if (!animationsReady) {
      setAnimationsReadyStatus(true);
    }
    setPostEffectOpenStatus(open);
    clearTimeout(hideChildrenTimeoutRef.current);
    if (open) {
      setChildrenVisibility(true);
    } else {
      hideChildrenTimeoutRef.current = setTimeout(() => {
        setChildrenVisibility(false);
      }, 200);
    }
  }, [open, animationsReady]);
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: color,
      borderRadius: 3
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(_WidgetModule.default.headerContainer, {
      [_WidgetModule.default.headerContainerChildrenVisible]: childrenVisible,
      [_WidgetModule.default.borderless]: borderless
    })
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _WidgetModule.default.headerCollapsible
  }, header, /*#__PURE__*/_react.default.createElement(_IconButton.IconButton, {
    dataTest: "widget-open-close-toggle-button",
    className: (0, _classnames.default)(_WidgetModule.default.toggleButton, {
      [_WidgetModule.default.toggleButtonCloseInit]: !animationsReady && !postEffectOpen,
      [_WidgetModule.default.toggleButtonOpen]: animationsReady && postEffectOpen,
      [_WidgetModule.default.toggleButtonClose]: animationsReady && !postEffectOpen
    }),
    onClick: open ? onClose : onOpen
  }, /*#__PURE__*/_react.default.createElement(_ui.IconChevronUp24, null)))), childrenVisible ? /*#__PURE__*/_react.default.createElement("div", {
    "data-test": "widget-contents",
    className: (0, _classnames.default)(_WidgetModule.default.children, {
      [_WidgetModule.default.childrenOpen]: animationsReady && open,
      [_WidgetModule.default.childrenClose]: animationsReady && !open,
      [_WidgetModule.default.borderless]: borderless
    })
  }, children) : null);
};
exports.WidgetCollapsible = WidgetCollapsible;