"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinearProgress = LinearProgress;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = _interopRequireWildcard(require("./styles"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LinearProgress(_ref) {
  var amount = _ref.amount,
      margin = _ref.margin;
  var type = typeof amount === 'undefined' ? (0, _styles.default)('indeterminate') : (0, _styles.default)('determinate');
  var style = amount ? {
    width: "".concat(amount, "%")
  } : null;
  return _react.default.createElement("div", {
    role: "progressbar",
    className: (0, _styles.rx)('base'),
    style: {
      margin: margin
    }
  }, _react.default.createElement("div", {
    style: style,
    className: (0, _styles.rx)('progress', type)
  }));
}

LinearProgress.propTypes = {
  amount: _propTypes.default.number,
  margin: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
};
var _default = LinearProgress;
exports.default = _default;