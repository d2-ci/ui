"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopoverMenu = PopoverMenu;
exports.default = void 0;

require("core-js/modules/es6.object.assign");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Menu = _interopRequireDefault(require("./Menu"));

var _Popover = _interopRequireDefault(require("../Popover"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function PopoverMenu(_ref) {
  var anchorPosition = _ref.anchorPosition,
      closePopover = _ref.closePopover,
      getAnchorRef = _ref.getAnchorRef,
      menuProps = _ref.menuProps,
      open = _ref.open,
      popoverPosition = _ref.popoverPosition,
      animation = _ref.animation;
  return _react.default.createElement(_Popover.default, {
    anchorPosition: anchorPosition,
    closePopover: closePopover,
    getAnchorRef: getAnchorRef,
    open: open,
    popoverPosition: popoverPosition,
    animation: animation
  }, _react.default.createElement(_Menu.default, _extends({
    closePopover: closePopover
  }, menuProps)));
}

PopoverMenu.defaultProps = {
  open: _propTypes.default.bool.isRequired,
  anchorPosition: {
    vertical: 'middle',
    horizontal: 'center'
  },
  popoverPosition: {
    vertical: 'middle',
    horizontal: 'center'
  }
};
var _default = PopoverMenu;
exports.default = _default;