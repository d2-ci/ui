"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.object.assign");

var _react = _interopRequireDefault(require("react"));

var VARIANTS = _interopRequireWildcard(require("./variants"));

var _utils = require("../utils");

require("./button.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var bem = (0, _utils.bemClassNames)('d2ui-button');

var Button = function Button(_ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      onClick = _ref.onClick,
      onDoubleClick = _ref.onDoubleClick,
      role = _ref.role,
      size = _ref.size,
      title = _ref.title,
      type = _ref.type,
      variant = _ref.variant;
  return _react.default.createElement("button", _extends({
    className: bem.b(variant, size)
  }, {
    disabled: disabled,
    onClick: onClick,
    onDoubleClick: onDoubleClick,
    title: title,
    type: type,
    role: role
  }), (0, _utils.wrapTextNodesInSpans)(children));
};

Button.defaultProps = {
  type: 'button',
  size: 'medium',
  variant: VARIANTS.RAISED
};
var _default = Button;
exports.default = _default;