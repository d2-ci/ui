import React from 'react';
import i18n from '@dhis2/d2-i18n';
import MapItem from '../../maps/MapItem';
import Choropleth from '../../maps/Choropleth';
import Legend from '../../maps/Legend';
import Basemap from '../../maps/Basemap';
import { getEqualIntervals } from '../../maps/utils';
import useOrgUnits from '../../../hooks/useOrgUnits';
import styles from './PredictionMap.module.css';
const colors = ['#FFFFD4', '#FED98E', '#FE9929', '#D95F0E', '#993404'];
export const PredictionMap = ({
  series,
  predictionTargetName
}) => {
  const orgUnitIds = Array.from(new Set(series.map(s => s.orgUnitId)));
  const {
    orgUnits
  } = useOrgUnits(orgUnitIds);

  // collect periods and labels
  const periodToLabel = new Map();
  for (const s of series) {
    for (const p of s.points) {
      if (!periodToLabel.has(p.period)) {
        periodToLabel.set(p.period, p.periodLabel);
      }
    }
  }
  const periods = Array.from(periodToLabel.keys());
  const allMedianValues = series.flatMap(s => s.points.map(p => p.quantiles.median));
  const minValue = Math.min(...allMedianValues);
  const maxValue = Math.max(...allMedianValues);
  const bins = getEqualIntervals(minValue, maxValue);
  const adaptedPrediction = {
    dataValues: series.flatMap(s => s.points.map(p => ({
      orgUnit: s.orgUnitId,
      period: p.period,
      dataElement: 'median',
      value: p.quantiles.median
    })))
  };
  return orgUnits ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: styles.predictionMapGroup
  }, periods.map((period, index) => {
    return /*#__PURE__*/React.createElement("div", {
      className: styles.predictionMapCard,
      key: index
    }, /*#__PURE__*/React.createElement("h4", null, periodToLabel.get(period) || period), /*#__PURE__*/React.createElement(MapItem, {
      key: period,
      index: index,
      count: periods.length,
      syncId: "prediction-map"
    }, /*#__PURE__*/React.createElement(Basemap, null), /*#__PURE__*/React.createElement(Choropleth, {
      period: period,
      prediction: adaptedPrediction,
      geojson: orgUnits,
      bins: bins,
      colors: colors
    })));
  })), /*#__PURE__*/React.createElement(Legend, {
    title: i18n.t('Median Prediction for {{predictionTargetName}}', {
      predictionTargetName
    }),
    bins: bins,
    colors: colors
  })) : null;
};