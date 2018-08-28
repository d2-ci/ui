"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("../../dist/Icon"));

var _bemClassNames = _interopRequireDefault(require("../../dist/utils/bemClassNames"));

require("./tab.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bem = (0, _bemClassNames.default)('d2ui-tab');

var Tab = function Tab(_ref) {
  var label = _ref.label,
      icon = _ref.icon,
      selectHandler = _ref.selectHandler,
      active = _ref.active,
      disabled = _ref.disabled,
      stacked = _ref.stacked,
      addTabRef = _ref.addTabRef;
  return _react.default.createElement("button", {
    className: "".concat(bem.b({
      active: active,
      disabled: disabled,
      stacked: stacked
    }), " d2ui-align-icon"),
    onClick: selectHandler,
    ref: addTabRef
  }, icon && _react.default.createElement(_Icon.default, {
    name: icon
  }), label && _react.default.createElement("span", null, label));
};

Tab.defaultProps = {
  active: false,
  disabled: false,
  stacked: false
};
var _default = Tab;
exports.default = _default;