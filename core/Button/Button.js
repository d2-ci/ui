"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Button = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.function.bind");

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../utils");

var _bind = _interopRequireDefault(require("classnames/bind"));

require("./styles.css");

var _styles2 = _interopRequireDefault(require("./styles.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var cx = _bind.default.bind(_styles2.default);

var Button = function Button(_ref) {
  var _cx;

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
    className: cx((_cx = {
      button: true
    }, _defineProperty(_cx, "".concat(kind), true), _defineProperty(_cx, "".concat(size), true), _defineProperty(_cx, 'd2ui-align-icon', true), _cx))
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