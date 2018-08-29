"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../utils");

require("../theme/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bem = (0, _utils.bemClassNames)('d2ui-app');

var UI = function UI(_ref) {
  var theme = _ref.theme,
      direction = _ref.direction,
      children = _ref.children;
  return _react.default.createElement("div", {
    dir: direction,
    className: bem.b(theme)
  }, children);
};

UI.defaultProps = {
  direction: 'ltr',
  theme: 'default'
};
var _default = UI;
exports.default = _default;