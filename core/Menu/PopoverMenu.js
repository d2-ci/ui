"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopoverMenu = PopoverMenu;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Menu = _interopRequireDefault(require("./Menu"));

var _Popover = _interopRequireDefault(require("../Popover"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PopoverMenu(_ref) {
  var open = _ref.open,
      list = _ref.list,
      animation = _ref.animation,
      popoverPosition = _ref.popoverPosition,
      anchorPosition = _ref.anchorPosition,
      onSelect = _ref.onSelect,
      onClose = _ref.onClose,
      getAnchorRef = _ref.getAnchorRef;
  return _react.default.createElement(_Popover.default, {
    open: open,
    onClose: onClose,
    animation: animation,
    getAnchorRef: getAnchorRef,
    anchorPosition: anchorPosition,
    popoverPosition: popoverPosition
  }, _react.default.createElement(_Menu.default, {
    list: list,
    onSelect: onSelect,
    onClose: onClose
  }));
}

PopoverMenu.defaultProps = {
  list: [],
  animation: 'slide-down'
};
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