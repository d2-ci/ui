"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = Icon;
exports.default = void 0;

require("core-js/modules/es6.function.name");

var _react = _interopRequireDefault(require("react"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */
function Icon(_ref) {
  var name = _ref.name,
      className = _ref.className,
      onClick = _ref.onClick;
  return _react.default.createElement("i", {
    className: "material-icons ".concat(name, " ").concat(className),
    onClick: onClick
  }, name);
}

Icon.defaultProps = {
  name: '',
  className: '',
  onClick: function onClick() {
    return null;
  }
};
var _default = Icon;
exports.default = _default;