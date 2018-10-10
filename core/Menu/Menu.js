"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = Menu;
exports.default = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

var _react = _interopRequireDefault(require("react"));

var _MenuItem = _interopRequireDefault(require("./MenuItem"));

var _Card = _interopRequireDefault(require("../Card"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Menu(_ref) {
  var width = _ref.width,
      height = _ref.height,
      list = _ref.list,
      onSelect = _ref.onSelect,
      onClose = _ref.onClose,
      children = _ref.children;

  if (children) {
    return _react.default.createElement(_Card.default, {
      width: width,
      height: height
    }, _react.default.createElement("ul", {
      className: (0, _styles.default)('container')
    }, children));
  }

  return _react.default.createElement(_Card.default, {
    width: width,
    height: height
  }, _react.default.createElement("ul", {
    className: (0, _styles.default)('container')
  }, list.map(function (_ref2, idx) {
    var onClick = _ref2.onClick,
        rest = _objectWithoutProperties(_ref2, ["onClick"]);

    return _react.default.createElement(_MenuItem.default, _extends({
      key: "mi-".concat(idx),
      onClick: onClick || onSelect,
      onSelect: onSelect,
      onClose: onClose
    }, rest));
  })));
}

Menu.defaultProps = {
  options: [],
  width: 'inherit',
  height: 'inherit'
};
var _default = Menu;
exports.default = _default;