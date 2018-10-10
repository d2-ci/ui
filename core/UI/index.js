"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UI = UI;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("typeface-roboto");

require("material-design-icons/iconfont/material-icons.css");

require("./base/index.css");

require("./theme/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import as part of the UI component to make sure that the font is
// loaded for selective imports which might not import the root index
function UI(_ref) {
  var theme = _ref.theme,
      children = _ref.children;
  return _react.default.createElement("div", {
    className: theme
  }, children);
}

UI.defaultProps = {
  theme: 'blue'
};
var _default = UI;
exports.default = _default;