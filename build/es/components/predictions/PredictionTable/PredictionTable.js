import React from 'react';
import i18n from '@dhis2/d2-i18n';
import styles from './PredictionTable.module.css';
import { DataTable, DataTableHead, DataTableRow, DataTableBody, DataTableCell, DataTableColumnHeader } from '@dhis2/ui';
export const PredictionTable = ({
  series
}) => {
  var _series$orgUnitId;
  const orgUnitId = (_series$orgUnitId = series.orgUnitId) !== null && _series$orgUnitId !== void 0 ? _series$orgUnitId : 'ou';
  const periods = series.points.map(p => p.periodLabel);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    key: orgUnitId
  }, /*#__PURE__*/React.createElement(DataTable, {
    className: styles.table
  }, /*#__PURE__*/React.createElement(DataTableHead, null, /*#__PURE__*/React.createElement(DataTableRow, null, /*#__PURE__*/React.createElement(DataTableColumnHeader, {
    className: styles.headerRight
  }, i18n.t('Quantiles')), periods.map((label, idx) => /*#__PURE__*/React.createElement(DataTableColumnHeader, {
    className: styles.headerRight,
    key: `${orgUnitId}-${idx}`
  }, label)))), /*#__PURE__*/React.createElement(DataTableBody, null, /*#__PURE__*/React.createElement(DataTableRow, null, /*#__PURE__*/React.createElement(DataTableCell, {
    className: styles.quantile_low
  }, i18n.t('Quantile 0.1 (low)')), series.points.map((pt, idx) => /*#__PURE__*/React.createElement(DataTableCell, {
    key: `low-${idx}`,
    className: styles.quantile_low
  }, pt.quantiles.quantile_low))), /*#__PURE__*/React.createElement(DataTableRow, null, /*#__PURE__*/React.createElement(DataTableCell, null, i18n.t('Quantile 0.25')), series.points.map((pt, idx) => /*#__PURE__*/React.createElement(DataTableCell, {
    key: `mid-low-${idx}`
  }, pt.quantiles.quantile_mid_low))), /*#__PURE__*/React.createElement(DataTableRow, null, /*#__PURE__*/React.createElement(DataTableCell, {
    align: "left"
  }, i18n.t('Quantile 0.5 (median)')), series.points.map((pt, idx) => /*#__PURE__*/React.createElement(DataTableCell, {
    key: `median-${idx}`,
    align: "left"
  }, pt.quantiles.median))), /*#__PURE__*/React.createElement(DataTableRow, null, /*#__PURE__*/React.createElement(DataTableCell, null, i18n.t('Quantile 0.75')), series.points.map((pt, idx) => /*#__PURE__*/React.createElement(DataTableCell, {
    key: `mid-high-${idx}`
  }, pt.quantiles.quantile_mid_high))), /*#__PURE__*/React.createElement(DataTableRow, null, /*#__PURE__*/React.createElement(DataTableCell, {
    className: styles.quantile_high
  }, i18n.t('Quantile 0.9 (high)')), series.points.map((pt, idx) => /*#__PURE__*/React.createElement(DataTableCell, {
    key: `high-${idx}`,
    className: styles.quantile_high
  }, pt.quantiles.quantile_high)))))));
};