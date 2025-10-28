"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UncertaintyAreaChart = void 0;
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _highcharts = _interopRequireDefault(require("highcharts"));
var _accessibility = _interopRequireDefault(require("highcharts/modules/accessibility"));
var _highchartsMore = _interopRequireDefault(require("highcharts/highcharts-more"));
var _exporting = _interopRequireDefault(require("highcharts/modules/exporting"));
var _react = _interopRequireWildcard(require("react"));
var _highchartsReactOfficial = _interopRequireDefault(require("highcharts-react-official"));
var _multiCalendarDates = require("@dhis2/multi-calendar-dates");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
(0, _accessibility.default)(_highcharts.default);
(0, _exporting.default)(_highcharts.default);
(0, _highchartsMore.default)(_highcharts.default);
const getChartOptions = (series, predictionTargetName) => {
  var _series$orgUnitName;
  const median = series.points.map(p => ({
    name: p.period,
    y: p.quantiles.median
  }));
  const range = series.points.map(p => ({
    name: p.period,
    low: p.quantiles.quantile_low,
    high: p.quantiles.quantile_high
  }));
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
      shared: true
    },
    xAxis: {
      type: 'category',
      labels: {
        enabled: true,
        formatter: function () {
          return (0, _multiCalendarDates.createFixedPeriodFromPeriodId)({
            periodId: this.value.toString(),
            calendar: 'gregory'
          }).displayName;
        },
        style: {
          fontSize: '0.8rem'
        }
      }
    },
    yAxis: {
      title: {
        text: 'Number of cases'
      }
    },
    credits: {
      text: 'CHAP'
    },
    chart: {
      height: 9 / 16 * 100 + '%',
      marginBottom: 125
    },
    plotOptions: {
      series: {
        lineWidth: 5
      }
    },
    series: [
    // median
    {
      type: 'line',
      data: median,
      name: _d2I18n.default.t('Quantile median'),
      color: '#004bbd',
      zIndex: 2
    },
    // high
    {
      type: 'arearange',
      name: _d2I18n.default.t('Range'),
      data: range,
      zIndex: 1,
      lineWidth: 0,
      color: '#004bbd',
      fillOpacity: 0.4
    }]
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