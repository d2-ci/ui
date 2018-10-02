"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Button = void 0;

require("core-js/modules/es6.object.assign");

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../utils");

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Button = function Button(_ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      onClick = _ref.onClick,
      onDoubleClick = _ref.onDoubleClick,
      role = _ref.role,
      size = _ref.size,
      title = _ref.title,
      type = _ref.type,
      kind = _ref.kind;
  return _react.default.createElement("button", _extends({
    className: (0, _styles.default)('button', 'align-icon', kind, size)
  }, {
    disabled: disabled,
    onClick: onClick,
    onDoubleClick: onDoubleClick,
    title: title,
    type: type,
    role: role
  }), (0, _utils.wrapTextNodesInSpans)(children));
};

exports.Button = Button;
Button.defaultProps = {
  type: 'button',
  size: 'medium',
  kind: 'raised'
};
var _default = Button;
exports.default = _default;