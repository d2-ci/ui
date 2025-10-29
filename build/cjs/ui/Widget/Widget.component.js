"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Widget = void 0;
var _react = _interopRequireDefault(require("react"));
var _WidgetCollapsible = require("./WidgetCollapsible.component");
var _WidgetNonCollapsible = require("./WidgetNonCollapsible.component");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Widget = ({
  noncollapsible = false,
  ...passOnProps
}) => {
  if (!noncollapsible) {
    const collapsibleProps = passOnProps;
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_WidgetCollapsible.WidgetCollapsible, collapsibleProps));
  }
  const nonCollapsibleProps = passOnProps;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_WidgetNonCollapsible.WidgetNonCollapsible, nonCollapsibleProps));
};
exports.Widget = Widget;