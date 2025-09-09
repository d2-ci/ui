"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComparisonPlot = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ComparisonPlotModule = _interopRequireDefault(require("./ComparisonPlot.module.css"));
var _ResultPlot = require("../ResultPlot/ResultPlot");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const ComparisonPlot = exports.ComparisonPlot = /*#__PURE__*/_react.default.memo(function ComparisonPlot({
  orgUnitsData,
  nameLabel
}) {
  // read during render, so we should store in state over useRef
  const [baseRef, setBaseRef] = (0, _react.useState)(null);
  const [comparisonRef, setComparisonRef] = (0, _react.useState)(null);
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
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _ComparisonPlotModule.default.comparionBox
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _ComparisonPlotModule.default.title
  }, orgUnitsData.orgUnitName), /*#__PURE__*/_react.default.createElement("div", {
    className: _ComparisonPlotModule.default.comparionBoxSideBySide
  }, orgUnitsData.models.map((modelData, index) => {
    var _baseRef$chart;
    const isBaseEvaluation = index === 0;
    return /*#__PURE__*/_react.default.createElement("div", {
      key: index,
      className: _ComparisonPlotModule.default.comparionBoxSideBySideItem
    }, /*#__PURE__*/_react.default.createElement(_ResultPlot.ResultPlot, {
      syncZoom: orgUnitsData.models.length > 0 && handleSyncChartZoom,
      data: modelData.data,
      modelName: modelData.modelName,
      nameLabel: nameLabel,
      ref: isBaseEvaluation ? setBaseRef : setComparisonRef,
      maxY: !isBaseEvaluation ? baseRef === null || baseRef === void 0 || (_baseRef$chart = baseRef.chart) === null || _baseRef$chart === void 0 ? void 0 : _baseRef$chart.yAxis[0].max : undefined
    }));
  })));
});