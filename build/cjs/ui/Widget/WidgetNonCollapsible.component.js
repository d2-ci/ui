"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WidgetNonCollapsible = void 0;
var _react = _interopRequireDefault(require("react"));
var _ui = require("@dhis2/ui");
var _classnames = _interopRequireDefault(require("classnames"));
var _WidgetModule = _interopRequireDefault(require("./Widget.module.css"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const WidgetNonCollapsible = ({
  header,
  children,
  color = _ui.colors.white,
  borderless = false
}) => /*#__PURE__*/_react.default.createElement("div", {
  className: (0, _classnames.default)(_WidgetModule.default.container, {
    [_WidgetModule.default.borderless]: borderless
  }),
  style: {
    backgroundColor: color
  }
}, /*#__PURE__*/_react.default.createElement("div", {
  className: _WidgetModule.default.headerNonCollapsible,
  "data-test": "widget-header"
}, header), /*#__PURE__*/_react.default.createElement("div", {
  className: _WidgetModule.default.contents,
  "data-test": "widget-contents"
}, children));
exports.WidgetNonCollapsible = WidgetNonCollapsible;