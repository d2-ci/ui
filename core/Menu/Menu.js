"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.array.map");

var _react = _interopRequireDefault(require("react"));

var _MenuItem = _interopRequireDefault(require("./MenuItem"));

var _index = _interopRequireDefault(require("../Paper/index"));

require("./menu.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Menu = function Menu(_ref) {
  var options = _ref.options,
      selectHandler = _ref.selectHandler,
      closePopover = _ref.closePopover,
      children = _ref.children;
  return _react.default.createElement(_index.default, {
    elevation: 4
  }, _react.default.createElement("ul", {
    className: "d2ui-menu"
  }, children ? children : options.map(function (_ref2, index) {
    var onClick = _ref2.onClick,
        rest = _objectWithoutProperties(_ref2, ["onClick"]);

    return _react.default.createElement(_MenuItem.default, _extends({
      key: "key-".concat(index),
      onClick: onClick || selectHandler,
      closePopover: closePopover
    }, rest));
  })));
};

exports.Menu = Menu;