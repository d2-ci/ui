"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CircularProgress = CircularProgress;
exports.default = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = _interopRequireDefault(require("./styles.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 =
/*#__PURE__*/
_react.default.createElement(_style.default, {
  id: "1483867407"
}, ".jsx-1483867407{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;top:0;right:0;bottom:0;left:0;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;}");

function CircularProgress(_ref) {
  var size = _ref.size,
      overlay = _ref.overlay,
      className = _ref.className;

  var loader = _react.default.createElement("div", {
    role: "progressbar",
    className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)('base', size, className) || "")
  }, _react.default.createElement("svg", {
    viewBox: "22 22 44 44",
    className: "jsx-".concat(_styles.default.__hash)
  }, _react.default.createElement("circle", {
    cx: "44",
    cy: "44",
    r: "20.2",
    fill: "none",
    strokeWidth: "3.6",
    className: "jsx-".concat(_styles.default.__hash) + " " + 'circle'
  })), _react.default.createElement(_style.default, {
    id: _styles.default.__hash
  }, _styles.default));

  if (overlay) {
    return _react.default.createElement("div", {
      className: "jsx-1483867407"
    }, loader, _ref2);
  }

  return loader;
}

CircularProgress.defaultProps = {
  overlay: false,
  size: 'medium'
};
CircularProgress.propTypes = {
  className: _propTypes.default.string,
  overlay: _propTypes.default.bool,
  size: _propTypes.default.oneOf(['small', 'medium', 'large'])
};
var _default = CircularProgress;
exports.default = _default;