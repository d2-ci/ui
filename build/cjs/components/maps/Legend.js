"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _LegendModule = _interopRequireDefault(require("./Legend.module.css"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Legend = ({
  title,
  bins,
  colors
}) => {
  console.log('Legend:', bins, colors);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _LegendModule.default.legend
  }, /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("div", {
    className: _LegendModule.default.legendTitle
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: _LegendModule.default.legendSymbols
  }, bins.map((bin, index) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: _LegendModule.default.classItem,
      key: index
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: _LegendModule.default.classSymbol,
      style: {
        backgroundColor: colors[index]
      }
    }), /*#__PURE__*/_react.default.createElement("span", {
      className: _LegendModule.default.classLabel
    }, bin.startValue, " - ", bin.endValue));
  })));
};
var _default = exports.default = Legend;