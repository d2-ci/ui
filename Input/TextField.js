"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../utils");

require("./textfield.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bem = (0, _utils.bemClassNames)('d2ui-text-field');
var FILLED = 'filled';
var OUTLINED = 'outlined';

var TextField = function TextField(_ref) {
  var type = _ref.type,
      dense = _ref.dense,
      label = _ref.label,
      value = _ref.value,
      onChange = _ref.onChange;
  var wrapperClassName = bem.b(type, {
    'with-value': value !== '',
    dense: dense
  });
  var focusIndicatorType = type === FILLED ? 'bottom-line' : 'notched-outline';
  console.log('hoi', value);
  return _react.default.createElement("label", {
    className: wrapperClassName
  }, _react.default.createElement("input", {
    type: "text",
    className: bem.e('input'),
    value: value,
    onChange: onChange
  }), _react.default.createElement("div", {
    className: bem.e(focusIndicatorType)
  }), _react.default.createElement("span", {
    className: bem.e('floating-label')
  }, label));
};

TextField.defaultProps = {
  value: '',
  dense: false,
  type: FILLED
};
var _default = TextField;
exports.default = _default;