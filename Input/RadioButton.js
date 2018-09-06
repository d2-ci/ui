"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./radiobutton.css");

require("./togglerwrap.css");

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bem = (0, _utils.bemClassNames)('d2ui-radio-button');

var RadioButton = function RadioButton(_ref) {
  var label = _ref.label;
  return _react.default.createElement("label", {
    className: "".concat(bem.e('label-wrap'), " d2ui-toggler-wrap")
  }, _react.default.createElement("div", {
    className: bem.b()
  }, _react.default.createElement("input", {
    className: bem.e('native-control'),
    type: "radio",
    name: "radios"
  }), _react.default.createElement("div", {
    className: bem.e('background')
  }, _react.default.createElement("div", {
    className: bem.e('outer-circle')
  }), _react.default.createElement("div", {
    className: bem.e('inner-circle')
  }))), _react.default.createElement("span", {
    className: bem.e('label-text')
  }, label));
};

var _default = RadioButton;
exports.default = _default;