"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PredictionMap = void 0;
var _react = _interopRequireDefault(require("react"));
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _PredictionResponse = require("../../../utils/PredictionResponse");
var _MapItem = _interopRequireDefault(require("../../maps/MapItem"));
var _Choropleth = _interopRequireDefault(require("../../maps/Choropleth"));
var _Legend = _interopRequireDefault(require("../../maps/Legend"));
var _Basemap = _interopRequireDefault(require("../../maps/Basemap"));
var _utils = require("../../maps/utils");
var _useOrgUnits = _interopRequireDefault(require("../../../hooks/useOrgUnits"));
var _PredictionMapModule = _interopRequireDefault(require("./PredictionMap.module.css"));
var _multiCalendarDates = require("@dhis2/multi-calendar-dates");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const colors = ['#FFFFD4', '#FED98E', '#FE9929', '#D95F0E', '#993404'];
const PredictionMap = ({
  data,
  predictionTargetName
}) => {
  // get all orgunits
  const orgUnitIds = (0, _PredictionResponse.getUniqeOrgUnits)(data.dataValues);

  // load orgunit geoms
  const {
    orgUnits
  } = (0, _useOrgUnits.default)(orgUnitIds);

  // get and classify periods
  const periods = (0, _PredictionResponse.getUniqePeriods)(data.dataValues);
  const values = data.dataValues.map(d => d.value);
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);
  const bins = (0, _utils.getEqualIntervals)(minValue, maxValue);
  return orgUnits ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", null, "Prediction Maps for", predictionTargetName), /*#__PURE__*/_react.default.createElement("div", {
    className: _PredictionMapModule.default.predictionMapGroup
  }, periods.map((period, index) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: _PredictionMapModule.default.predictionMapCard,
      key: index
    }, /*#__PURE__*/_react.default.createElement("h4", null, _d2I18n.default.t((0, _multiCalendarDates.createFixedPeriodFromPeriodId)({
      periodId: period,
      calendar: 'gregory'
    }).displayName)), /*#__PURE__*/_react.default.createElement(_MapItem.default, {
      key: period,
      index: index,
      count: periods.length,
      syncId: "prediction-map"
    }, /*#__PURE__*/_react.default.createElement(_Basemap.default, null), /*#__PURE__*/_react.default.createElement(_Choropleth.default, {
      period: period,
      prediction: data,
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