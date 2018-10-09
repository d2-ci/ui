"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Help = Help;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Help(_ref) {
  var text = _ref.text,
      status = _ref.status;
  return _react.default.createElement("div", {
    className: (0, _styles.default)('container', _defineProperty({}, "status-".concat(status), true))
  }, text);
}

Help.defaultProps = {
  status: 'default'
};
var _default = Help;
exports.default = _default;