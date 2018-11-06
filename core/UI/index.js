"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UI = UI;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("typeface-roboto/index.css");

require("material-design-icons/iconfont/material-icons.css");

require("./base/index.css");

require("./theme/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import as part of the UI component to make sure that the font is
// loaded for selective imports which might not import the root index
// ---
// note: import css-files with file exts for regexps in e.g. jest/webpack
function UI(_ref) {
  var theme = _ref.theme,
      children = _ref.children;
  return _react.default.createElement("div", {
    className: theme
  }, children);
}

UI.propTypes = {
  theme: _propTypes.default.string,
  children: _propTypes.default.node
};
UI.defaultProps = {
  theme: 'blue'
};
var _default = UI;
exports.default = _default;