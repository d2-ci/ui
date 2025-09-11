"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PredictionTable = void 0;
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _PredictionTableModule = _interopRequireDefault(require("./PredictionTable.module.css"));
var _react = _interopRequireDefault(require("react"));
var _PredictionResponse = require("../../../utils/PredictionResponse");
var _multiCalendarDates = require("@dhis2/multi-calendar-dates");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const PredictionTable = ({
  data
}) => {
  const dataValues = data.dataValues;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (0, _PredictionResponse.getUniqeOrgUnits)(dataValues).map(ou => {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: ou
    }, /*#__PURE__*/_react.default.createElement("h3", null, _d2I18n.default.t('Prediction for {{orgUnitName}}', {
      orgUnitName: (0, _PredictionResponse.findOrgUnitName)(ou, dataValues)
    })), /*#__PURE__*/_react.default.createElement("table", {
      className: _PredictionTableModule.default.table
    }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, "Quantiles"), (0, _PredictionResponse.getUniqePeriods)(dataValues).map(p => {
      return /*#__PURE__*/_react.default.createElement("th", {
        key: p
      }, (0, _multiCalendarDates.createFixedPeriodFromPeriodId)({
        periodId: p,
        calendar: 'gregory'
      }).displayName);
    }))), /*#__PURE__*/_react.default.createElement("tbody", null, (0, _PredictionResponse.getUniqeQuantiles)(dataValues).map(q => /*#__PURE__*/_react.default.createElement("tr", {
      key: q
    }, /*#__PURE__*/_react.default.createElement("td", null, q.replaceAll('_', ' ')), (0, _PredictionResponse.getUniqePeriods)(dataValues).map(p => {
      return /*#__PURE__*/_react.default.createElement("td", {
        key: p
      }, dataValues.filter(d => d.dataElement === q && d.orgUnit === ou && d.period === p)[0].value);
    }))))));
  }));
};
exports.PredictionTable = PredictionTable;