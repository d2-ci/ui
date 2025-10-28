"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PredictionTable = void 0;
var _react = _interopRequireDefault(require("react"));
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _PredictionTableModule = _interopRequireDefault(require("./PredictionTable.module.css"));
var _ui = require("@dhis2/ui");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const PredictionTable = ({
  series
}) => {
  var _series$orgUnitId;
  const orgUnitId = (_series$orgUnitId = series.orgUnitId) !== null && _series$orgUnitId !== void 0 ? _series$orgUnitId : 'ou';
  const periods = series.points.map(p => p.periodLabel);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    key: orgUnitId
  }, /*#__PURE__*/_react.default.createElement(_ui.DataTable, {
    className: _PredictionTableModule.default.table
  }, /*#__PURE__*/_react.default.createElement(_ui.DataTableHead, null, /*#__PURE__*/_react.default.createElement(_ui.DataTableRow, null, /*#__PURE__*/_react.default.createElement(_ui.DataTableColumnHeader, {
    className: _PredictionTableModule.default.headerRight
  }, _d2I18n.default.t('Quantiles')), periods.map((label, idx) => /*#__PURE__*/_react.default.createElement(_ui.DataTableColumnHeader, {
    className: _PredictionTableModule.default.headerRight,
    key: `${orgUnitId}-${idx}`
  }, label)))), /*#__PURE__*/_react.default.createElement(_ui.DataTableBody, null, /*#__PURE__*/_react.default.createElement(_ui.DataTableRow, null, /*#__PURE__*/_react.default.createElement(_ui.DataTableCell, {
    align: "left"
  }, _d2I18n.default.t('Quantile median')), series.points.map((pt, idx) => /*#__PURE__*/_react.default.createElement(_ui.DataTableCell, {
    key: `median-${idx}`,
    align: "left"
  }, pt.quantiles.median))), /*#__PURE__*/_react.default.createElement(_ui.DataTableRow, null, /*#__PURE__*/_react.default.createElement(_ui.DataTableCell, {
    className: _PredictionTableModule.default.quantile_low
  }, _d2I18n.default.t('quantile low')), series.points.map((pt, idx) => /*#__PURE__*/_react.default.createElement(_ui.DataTableCell, {
    key: `low-${idx}`,
    className: _PredictionTableModule.default.quantile_low
  }, pt.quantiles.quantile_low))), /*#__PURE__*/_react.default.createElement(_ui.DataTableRow, null, /*#__PURE__*/_react.default.createElement(_ui.DataTableCell, {
    className: _PredictionTableModule.default.quantile_high
  }, _d2I18n.default.t('quantile high')), series.points.map((pt, idx) => /*#__PURE__*/_react.default.createElement(_ui.DataTableCell, {
    key: `high-${idx}`,
    className: _PredictionTableModule.default.quantile_high
  }, pt.quantiles.quantile_high)))))));
};
exports.PredictionTable = PredictionTable;