"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UncertaintyAreaChart = void 0;
var _react = _interopRequireWildcard(require("react"));
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _highcharts = _interopRequireDefault(require("highcharts"));
var _accessibility = _interopRequireDefault(require("highcharts/modules/accessibility"));
var _highchartsMore = _interopRequireDefault(require("highcharts/highcharts-more"));
var _exporting = _interopRequireDefault(require("highcharts/modules/exporting"));
var _highchartsReactOfficial = _interopRequireDefault(require("highcharts-react-official"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
(0, _accessibility.default)(_highcharts.default);
(0, _exporting.default)(_highcharts.default);
(0, _highchartsMore.default)(_highcharts.default);
const getChartOptions = (series, predictionTargetName) => {
  var _series$actualCases, _series$orgUnitName;
  const median = series.points.map(p => ({
    name: p.period,
    y: p.quantiles.median
  }));
  const outerRange = series.points.map(p => ({
    name: p.period,
    low: p.quantiles.quantile_low,
    high: p.quantiles.quantile_high
  }));
  const midRange = series.points.map(p => ({
    name: p.period,
    low: p.quantiles.quantile_mid_low,
    high: p.quantiles.quantile_mid_high
  }));
  const actualCases = (_series$actualCases = series.actualCases) === null || _series$actualCases === void 0 ? void 0 : _series$actualCases.map(ac => ({
    name: ac.period,
    y: ac.value
  }));
  const chartSeries = [
  // median
  {
    type: 'line',
    data: median,
    name: _d2I18n.default.t('Median prediction'),
    color: '#004bbd',
    zIndex: 3,
    connectNulls: false
  }, {
    type: 'arearange',
    name: _d2I18n.default.t('80% prediction interval'),
    data: outerRange,
    zIndex: 0,
    lineWidth: 0,
    color: '#c4dcf2',
    fillOpacity: 1,
    connectNulls: false
  }, {
    type: 'arearange',
    name: _d2I18n.default.t('50% prediction interval'),
    data: midRange,
    zIndex: 1,
    lineWidth: 0,
    color: '#9bbdff',
    fillOpacity: 1,
    connectNulls: false
  }];
  if (actualCases && actualCases.length > 0) {
    chartSeries.unshift({
      type: 'line',
      data: actualCases,
      name: _d2I18n.default.t('Actual Cases'),
      color: '#f68000',
      zIndex: 4,
      marker: {
        enabled: false
      },
      lineWidth: 2.5,
      connectNulls: false
    });
  }
  return {
    title: {
      style: {
        fontSize: '0.8rem'
      },
      text: _d2I18n.default.t('Prediction for {{predictionTargetName}} for {{orgUnitName}}', {
        predictionTargetName,
        orgUnitName: (_series$orgUnitName = series.orgUnitName) !== null && _series$orgUnitName !== void 0 ? _series$orgUnitName : ''
      })
    },
    tooltip: {
      shared: true,
      valueDecimals: 2
    },
    xAxis: {
      type: 'category',
      labels: {
        enabled: true,
        formatter: function () {
          return this.value.toString();
        },
        style: {
          fontSize: '0.8rem'
        }
      }
    },
    yAxis: {
      title: {
        text: _d2I18n.default.t('Number of cases')
      }
    },
    credits: {
      text: 'CHAP'
    },
    chart: {
      height: 9 / 16 * 100 + '%',
      marginBottom: 125,
      zooming: {
        type: 'x'
      }
    },
    plotOptions: {
      series: {
        lineWidth: 5
      }
    },
    series: chartSeries
  };
};
const UncertaintyAreaChart = ({
  series,
  predictionTargetName
}) => {
  const options = (0, _react.useMemo)(() => {
    if (!series || series.points.length === 0) return undefined;
    return getChartOptions(series, predictionTargetName);
  }, [series, predictionTargetName]);
  return /*#__PURE__*/_react.default.createElement(_highchartsReactOfficial.default, {
    highcharts: _highcharts.default,
    constructorType: "chart",
    options: options
  });
};
exports.UncertaintyAreaChart = UncertaintyAreaChart;