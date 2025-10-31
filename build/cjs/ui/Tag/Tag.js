"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tag = void 0;
var _react = _interopRequireDefault(require("react"));
var _ui = require("@dhis2/ui");
var _classnames = _interopRequireDefault(require("classnames"));
var _TagModule = _interopRequireDefault(require("./Tag.module.css"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Tag = ({
  children,
  variant = 'default',
  onRemove,
  className
}) => {
  return /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _classnames.default)(_TagModule.default.tagWrapper, {
      [_TagModule.default.default]: variant === 'default',
      [_TagModule.default.destructive]: variant === 'destructive',
      [_TagModule.default.info]: variant === 'info',
      [_TagModule.default.warning]: variant === 'warning',
      [_TagModule.default.success]: variant === 'success'
    }, className)
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: _TagModule.default.tag
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: _TagModule.default.content
  }, children), onRemove && /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: _TagModule.default.removeButton,
    onClick: onRemove,
    "aria-label": "Remove"
  }, /*#__PURE__*/_react.default.createElement(_ui.IconCross16, null))));
};
exports.Tag = Tag;