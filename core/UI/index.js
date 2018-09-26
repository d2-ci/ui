"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.UI = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../utils");

require("typeface-roboto");

require("material-design-icons/iconfont/material-icons.css");

require("./theme/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */
// import as part of the UI component to make sure that the font is
// loaded for selective imports which might not import the root index
var bem = (0, _utils.bemClassNames)('app');

var UI = function UI(_ref) {
  var theme = _ref.theme,
      children = _ref.children;
  return _react.default.createElement("div", {
    className: bem.b(theme)
  }, children);
};

exports.UI = UI;
UI.defaultProps = {
  theme: 'default'
};
var _default = UI;
exports.default = _default;