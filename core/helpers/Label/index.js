"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = Label;
exports.default = void 0;

require("core-js/modules/es6.object.define-property");

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("../../Icon"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var statusToIcon = {
  valid: 'check_circle',
  warning: 'warning',
  error: 'error'
};

function Label(_ref) {
  var _s;

  var text = _ref.text,
      type = _ref.type,
      focused = _ref.focused,
      size = _ref.size,
      kind = _ref.kind,
      state = _ref.state,
      status = _ref.status,
      disabled = _ref.disabled,
      hasIcon = _ref.hasIcon;
  return _react.default.createElement("div", {
    className: (0, _styles.default)('container', (_s = {
      'has-icon': hasIcon
    }, _defineProperty(_s, "focused", focused), _defineProperty(_s, "disabled", disabled), _defineProperty(_s, "state-".concat(state), true), _defineProperty(_s, "size-".concat(size), true), _defineProperty(_s, "type-".concat(type), true), _defineProperty(_s, "status-".concat(status), true), _defineProperty(_s, "kind-".concat(kind), true), _s))
  }, _react.default.createElement("div", {
    className: (0, _styles.default)('content', _defineProperty({}, "state-".concat(state), true))
  }, text), status !== 'default' && _react.default.createElement(_Icon.default, {
    name: statusToIcon[status],
    className: (0, _styles.default)('icon')
  }));
}

Label.defaultProps = {
  type: 'text',
  hasIcon: false,
  size: 'default',
  status: 'default',
  border: 'none',
  disabled: false
};
var _default = Label;
exports.default = _default;