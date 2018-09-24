"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopoverMenu = void 0;

require("core-js/modules/es6.object.assign");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Menu = _interopRequireDefault(require("./Menu"));

var _index = _interopRequireDefault(require("../Popover/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var PopoverMenu = function PopoverMenu(_ref) {
  var anchorAttachPoint = _ref.anchorAttachPoint,
      closePopover = _ref.closePopover,
      getAnchorRef = _ref.getAnchorRef,
      menuProps = _ref.menuProps,
      open = _ref.open,
      popoverAttachPoint = _ref.popoverAttachPoint,
      appearAnimation = _ref.appearAnimation;
  return _react.default.createElement(_index.default, {
    anchorAttachPoint: anchorAttachPoint,
    closePopover: closePopover,
    getAnchorRef: getAnchorRef,
    open: open,
    popoverAttachPoint: popoverAttachPoint,
    appearAnimation: appearAnimation
  }, _react.default.createElement(_Menu.default, _extends({
    closePopover: closePopover
  }, menuProps)));
};

exports.PopoverMenu = PopoverMenu;
PopoverMenu.defaultProps = {
  open: _propTypes.default.bool.isRequired,
  anchorAttachPoint: {
    vertical: 'middle',
    horizontal: 'center'
  },
  popoverAttachPoint: {
    vertical: 'middle',
    horizontal: 'center'
  }
};