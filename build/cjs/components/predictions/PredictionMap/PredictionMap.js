"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PredictionMap = void 0;
var _react = _interopRequireDefault(require("react"));
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _MapItem = _interopRequireDefault(require("../../maps/MapItem"));
var _Choropleth = _interopRequireDefault(require("../../maps/Choropleth"));
var _Legend = _interopRequireDefault(require("../../maps/Legend"));
var _Basemap = _interopRequireDefault(require("../../maps/Basemap"));
var _utils = require("../../maps/utils");
var _useOrgUnits = _interopRequireDefault(require("../../../hooks/useOrgUnits"));
var _PredictionMapModule = _interopRequireDefault(require("./PredictionMap.module.css"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const colors = ['#FFFFD4', '#FED98E', '#FE9929', '#D95F0E', '#993404'];
const PredictionMap = ({
  series,
  predictionTargetName
}) => {
  const orgUnitIds = Array.from(new Set(series.map(s => s.orgUnitId)));
  const {
    orgUnits
  } = (0, _useOrgUnits.default)(orgUnitIds);

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
  const bins = (0, _utils.getEqualIntervals)(minValue, maxValue);
  const adaptedPrediction = {
    dataValues: series.flatMap(s => s.points.map(p => ({
      orgUnit: s.orgUnitId,
      period: p.period,
      dataElement: 'median',
      value: p.quantiles.median
    })))
  };
  return orgUnits ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: _PredictionMapModule.default.predictionMapGroup
  }, periods.map((period, index) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: _PredictionMapModule.default.predictionMapCard,
      key: index
    }, /*#__PURE__*/_react.default.createElement("h4", null, periodToLabel.get(period) || period), /*#__PURE__*/_react.default.createElement(_MapItem.default, {
      key: period,
      index: index,
      count: periods.length,
      syncId: "prediction-map"
    }, /*#__PURE__*/_react.default.createElement(_Basemap.default, null), /*#__PURE__*/_react.default.createElement(_Choropleth.default, {
      period: period,
      prediction: adaptedPrediction,
      geojson: orgUnits,
      bins: bins,
      colors: colors
    })));
  })), /*#__PURE__*/_react.default.createElement(_Legend.default, {
    title: _d2I18n.default.t('Median Prediction for {{predictionTargetName}}', {
      predictionTargetName
    }),
    bins: bins,
    colors: colors
  })) : null;
};
exports.PredictionMap = PredictionMap;