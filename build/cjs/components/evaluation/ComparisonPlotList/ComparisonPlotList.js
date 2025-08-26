"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComparisonPlotList = void 0;
var _react = _interopRequireDefault(require("react"));
var _ComparisonPlot = require("../ComparisonPlot/ComparisonPlot");
var _reactVirtuoso = require("react-virtuoso");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ComparisonPlotList = ({
  evaluationPerOrgUnits,
  useVirtuoso = true,
  useVirtuosoWindowScroll = false,
  virtuosoProps,
  nameLabel
}) => {
  if (!useVirtuoso) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, evaluationPerOrgUnits.map(orgUnitsData => {
      if (!orgUnitsData) {
        return null;
      }
      return /*#__PURE__*/_react.default.createElement(_ComparisonPlot.ComparisonPlot, {
        key: orgUnitsData.orgUnitId,
        orgUnitsData: orgUnitsData,
        nameLabel: nameLabel
      });
    }));
  }
  return /*#__PURE__*/_react.default.createElement(_reactVirtuoso.Virtuoso, _extends({}, virtuosoProps, {
    style: {
      height: '100%'
    },
    useWindowScroll: useVirtuosoWindowScroll,
    totalCount: evaluationPerOrgUnits.length,
    itemContent: index => /*#__PURE__*/_react.default.createElement(_ComparisonPlot.ComparisonPlot, {
      orgUnitsData: evaluationPerOrgUnits[index],
      nameLabel: nameLabel
    })
  }));
};
exports.ComparisonPlotList = ComparisonPlotList;