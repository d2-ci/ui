"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConditionalTooltip = void 0;
var _react = _interopRequireDefault(require("react"));
var _ui = require("@dhis2/ui");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ConditionalTooltip = props => {
  const {
    enabled,
    wrapperClassName,
    children,
    ...passOnProps
  } = props;
  return enabled ? /*#__PURE__*/_react.default.createElement(_ui.Tooltip, passOnProps, ({
    onMouseOver,
    onMouseOut,
    ref
  }) => /*#__PURE__*/_react.default.createElement("span", {
    className: wrapperClassName,
    ref: btnRef => {
      if (btnRef) {
        // @ts-expect-error - pointer events are not supported in older browsers
        btnRef.onpointerenter = onMouseOver;
        // @ts-expect-error - pointer events are not supported in older browsers
        btnRef.onpointerleave = onMouseOut;
        ref.current = btnRef;
      }
    }
  }, children)) : children;
};
exports.ConditionalTooltip = ConditionalTooltip;