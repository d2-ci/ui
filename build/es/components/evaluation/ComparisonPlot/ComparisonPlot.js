import React, { useState } from 'react';
import styles from './ComparisonPlot.module.css';
import { ResultPlot } from '../ResultPlot/ResultPlot';
export const ComparisonPlot = /*#__PURE__*/React.memo(function ComparisonPlot({
  orgUnitsData,
  nameLabel
}) {
  // read during render, so we should store in state over useRef
  const [baseRef, setBaseRef] = useState(null);
  const [comparisonRef, setComparisonRef] = useState(null);
  function handleSyncChartZoom(event) {
    if (event.trigger !== 'zoom') {
      // prevent multiple calls from other charts
      return;
    }
    const triggeringChart = this.chart;
    const chartToSync = baseRef !== null && triggeringChart === (baseRef === null || baseRef === void 0 ? void 0 : baseRef.chart) ? comparisonRef === null || comparisonRef === void 0 ? void 0 : comparisonRef.chart : baseRef === null || baseRef === void 0 ? void 0 : baseRef.chart;
    if (!chartToSync) {
      return;
    }
    const isReset = event.userMax === undefined && event.userMin === undefined;
    if (isReset) {
      chartToSync.zoomOut();
      triggeringChart.zoomOut();
      return;
    }
    const triggeringYAxis = this.chart.yAxis[0];
    const {
      min: xMin,
      max: xMax
    } = event;
    const {
      min: yMin,
      max: yMax
    } = triggeringYAxis;
    // sync zoom for both axes
    chartToSync.yAxis[0].setExtremes(yMin, yMax, false);
    chartToSync.xAxis[0].setExtremes(xMin, xMax, false);

    // handle reset zoom button
    const extremes = chartToSync.xAxis[0].getExtremes();
    const wasZooming = extremes.userMax !== undefined && extremes.userMin !== undefined;
    if (!wasZooming) {
      // only show reset zoom if we were not zooming before
      // if this is called multiple times, the button wont disappear
      // when zooming out
      chartToSync.showResetZoom();
    }
    chartToSync.redraw(true);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: styles.comparionBox
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.title
  }, orgUnitsData.orgUnitName), /*#__PURE__*/React.createElement("div", {
    className: styles.comparionBoxSideBySide
  }, orgUnitsData.models.map((modelData, index) => {
    var _baseRef$chart;
    const isBaseEvaluation = index === 0;
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: styles.comparionBoxSideBySideItem
    }, /*#__PURE__*/React.createElement(ResultPlot, {
      syncZoom: orgUnitsData.models.length > 0 && handleSyncChartZoom,
      data: modelData.data,
      modelName: modelData.modelName,
      nameLabel: nameLabel,
      ref: isBaseEvaluation ? setBaseRef : setComparisonRef,
      maxY: !isBaseEvaluation ? baseRef === null || baseRef === void 0 || (_baseRef$chart = baseRef.chart) === null || _baseRef$chart === void 0 ? void 0 : _baseRef$chart.yAxis[0].max : undefined
    }));
  })));
});