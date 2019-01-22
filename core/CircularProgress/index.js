"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CircularProgress = CircularProgress;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = _interopRequireWildcard(require("./styles"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Circle() {
  return _react.default.createElement("svg", {
    viewBox: "22 22 44 44"
  }, _react.default.createElement("circle", {
    className: (0, _styles.default)('circle'),
    cx: "44",
    cy: "44",
    r: "20.2",
    fill: "none",
    strokeWidth: "3.6"
  }));
}

var _ref2 =
/*#__PURE__*/
_react.default.createElement(Circle, null);

function CircularProgress(_ref) {
  var size = _ref.size,
      overlay = _ref.overlay;

  var loader = _react.default.createElement("div", {
    role: "progressbar",
    className: (0, _styles.rx)('base', size)
  }, _ref2);

  if (overlay) {
    return _react.default.createElement("div", {
      className: (0, _styles.rx)('overlay')
    }, loader);
  }

  return loader;
}

CircularProgress.defaultProps = {
  overlay: false,
  size: 'medium'
};
CircularProgress.propTypes = {
  overlay: _propTypes.default.bool,
  size: _propTypes.default.oneOf(['small', 'medium', 'large'])
};
var _default = CircularProgress;
exports.default = _default;