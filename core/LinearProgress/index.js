"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinearProgress = LinearProgress;
exports.default = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LinearProgress(_ref) {
  var amount = _ref.amount,
      margin = _ref.margin;
  var type = typeof amount === 'undefined' ? (0, _classnames.default)('indeterminate') : (0, _classnames.default)('determinate');
  var style = amount ? {
    width: "".concat(amount, "%")
  } : null;
  return _react.default.createElement("div", {
    role: "progressbar",
    style: {
      margin: margin
    },
    className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)('base') || "")
  }, _react.default.createElement("div", {
    style: style,
    className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)('progress', type) || "")
  }), _react.default.createElement(_style.default, {
    id: _styles.default.__hash
  }, _styles.default));
}

LinearProgress.propTypes = {
  amount: _propTypes.default.number,
  margin: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
};
var _default = LinearProgress;
exports.default = _default;