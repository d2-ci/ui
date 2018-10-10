"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = Menu;
Object.defineProperty(exports, "MenuItem", {
  enumerable: true,
  get: function get() {
    return _MenuItem.default;
  }
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Paper = _interopRequireDefault(require("../Paper"));

var _MenuItem = _interopRequireDefault(require("./MenuItem"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Menu(_ref) {
  var kind = _ref.kind,
      width = _ref.width,
      height = _ref.height,
      list = _ref.list,
      onClick = _ref.onClick;
  return _react.default.createElement(_Paper.default, {
    width: width,
    height: height
  }, _react.default.createElement("ul", {
    className: (0, _styles.default)('ul', kind)
  }, list.map(function (_ref2, i) {
    var label = _ref2.label,
        value = _ref2.value,
        icon = _ref2.icon,
        list = _ref2.list,
        type = _ref2.type,
        disabled = _ref2.disabled;

    if (type === 'divider') {
      return _react.default.createElement("div", {
        key: "mid-".concat(i),
        className: (0, _styles.default)('divider')
      });
    }

    return _react.default.createElement(_MenuItem.default, {
      key: "mi-".concat(value),
      label: label,
      value: value,
      icon: icon,
      list: list,
      type: type,
      disabled: disabled,
      onClick: onClick
    });
  })));
}

Menu.defaultProps = {
  width: 'inherit',
  height: 'inherit',
  kind: 'default'
};
var _default = Menu;
exports.default = _default;