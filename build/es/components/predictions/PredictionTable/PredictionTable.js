import i18n from '@dhis2/d2-i18n';
import styles from './PredictionTable.module.css';
import React from 'react';
import { getUniqeOrgUnits, findOrgUnitName, getUniqePeriods, getUniqeQuantiles } from '../../../utils/PredictionResponse';
import { createFixedPeriodFromPeriodId } from '@dhis2/multi-calendar-dates';
export const PredictionTable = ({
  data
}) => {
  const dataValues = data.dataValues;
  return /*#__PURE__*/React.createElement(React.Fragment, null, getUniqeOrgUnits(dataValues).map(ou => {
    return /*#__PURE__*/React.createElement("div", {
      key: ou
    }, /*#__PURE__*/React.createElement("h3", null, i18n.t('Prediction for {{orgUnitName}}', {
      orgUnitName: findOrgUnitName(ou, dataValues)
    })), /*#__PURE__*/React.createElement("table", {
      className: styles.table
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Quantiles"), getUniqePeriods(dataValues).map(p => {
      return /*#__PURE__*/React.createElement("th", {
        key: p
      }, createFixedPeriodFromPeriodId({
        periodId: p,
        calendar: 'gregory'
      }).displayName);
    }))), /*#__PURE__*/React.createElement("tbody", null, getUniqeQuantiles(dataValues).map(q => /*#__PURE__*/React.createElement("tr", {
      key: q
    }, /*#__PURE__*/React.createElement("td", null, q.replaceAll('_', ' ')), getUniqePeriods(dataValues).map(p => {
      return /*#__PURE__*/React.createElement("td", {
        key: p
      }, dataValues.filter(d => d.dataElement === q && d.orgUnit === ou && d.period === p)[0].value);
    }))))));
  }));
};