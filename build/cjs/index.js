"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  UncertaintyAreaChart: true,
  evaluationResultToViewData: true,
  getSplitPeriod: true,
  createHighChartsData: true,
  joinRealAndPredictedData: true,
  ConditionalTooltip: true,
  ResultPlot: true,
  ComparisonPlot: true,
  ComparisonPlotList: true,
  ComparionPlotWrapper: true,
  PredictionTable: true,
  PredictionMap: true,
  OverflowButton: true,
  Ping: true,
  Pill: true,
  Card: true,
  StatusIndicator: true,
  Tag: true,
  Widget: true,
  SplitPeriodSelector: true,
  CrudService: true,
  AnalyticsService: true,
  enableQueue: true,
  disableQueue: true,
  getQueue: true,
  buildPredictionSeries: true,
  PERIOD_TYPES: true,
  toDHIS2PeriodData: true,
  convertServerToClientPeriod: true,
  sortPeriods: true,
  comparePeriods: true,
  getLastNPeriods: true,
  parseOrgUnits: true
};
Object.defineProperty(exports, "AnalyticsService", {
  enumerable: true,
  get: function () {
    return _AnalyticsService.AnalyticsService;
  }
});
Object.defineProperty(exports, "Card", {
  enumerable: true,
  get: function () {
    return _ui.Card;
  }
});
Object.defineProperty(exports, "ComparionPlotWrapper", {
  enumerable: true,
  get: function () {
    return _ComparionPlotWrapper.ComparionPlotWrapper;
  }
});
Object.defineProperty(exports, "ComparisonPlot", {
  enumerable: true,
  get: function () {
    return _ComparisonPlot.ComparisonPlot;
  }
});
Object.defineProperty(exports, "ComparisonPlotList", {
  enumerable: true,
  get: function () {
    return _ComparisonPlotList.ComparisonPlotList;
  }
});
Object.defineProperty(exports, "ConditionalTooltip", {
  enumerable: true,
  get: function () {
    return _ConditionalTooltip.ConditionalTooltip;
  }
});
Object.defineProperty(exports, "CrudService", {
  enumerable: true,
  get: function () {
    return _CrudService.CrudService;
  }
});
Object.defineProperty(exports, "OverflowButton", {
  enumerable: true,
  get: function () {
    return _ui.OverflowButton;
  }
});
Object.defineProperty(exports, "PERIOD_TYPES", {
  enumerable: true,
  get: function () {
    return _timePeriodUtils.PERIOD_TYPES;
  }
});
Object.defineProperty(exports, "Pill", {
  enumerable: true,
  get: function () {
    return _ui.Pill;
  }
});
Object.defineProperty(exports, "Ping", {
  enumerable: true,
  get: function () {
    return _ui.Ping;
  }
});
Object.defineProperty(exports, "PredictionMap", {
  enumerable: true,
  get: function () {
    return _PredictionMap.PredictionMap;
  }
});
Object.defineProperty(exports, "PredictionTable", {
  enumerable: true,
  get: function () {
    return _PredictionTable.PredictionTable;
  }
});
Object.defineProperty(exports, "ResultPlot", {
  enumerable: true,
  get: function () {
    return _ResultPlot.ResultPlot;
  }
});
Object.defineProperty(exports, "SplitPeriodSelector", {
  enumerable: true,
  get: function () {
    return _SplitPeriodSelector.default;
  }
});
Object.defineProperty(exports, "StatusIndicator", {
  enumerable: true,
  get: function () {
    return _ui.StatusIndicator;
  }
});
Object.defineProperty(exports, "Tag", {
  enumerable: true,
  get: function () {
    return _ui.Tag;
  }
});
Object.defineProperty(exports, "UncertaintyAreaChart", {
  enumerable: true,
  get: function () {
    return _UncertaintyAreaChart.UncertaintyAreaChart;
  }
});
Object.defineProperty(exports, "Widget", {
  enumerable: true,
  get: function () {
    return _ui.Widget;
  }
});
Object.defineProperty(exports, "buildPredictionSeries", {
  enumerable: true,
  get: function () {
    return _PredictionViewModel.buildPredictionSeries;
  }
});
Object.defineProperty(exports, "comparePeriods", {
  enumerable: true,
  get: function () {
    return _timePeriodUtils.comparePeriods;
  }
});
Object.defineProperty(exports, "convertServerToClientPeriod", {
  enumerable: true,
  get: function () {
    return _timePeriodUtils.convertServerToClientPeriod;
  }
});
Object.defineProperty(exports, "createHighChartsData", {
  enumerable: true,
  get: function () {
    return _EvaluationResponse.createHighChartsData;
  }
});
Object.defineProperty(exports, "disableQueue", {
  enumerable: true,
  get: function () {
    return _request.disableQueue;
  }
});
Object.defineProperty(exports, "enableQueue", {
  enumerable: true,
  get: function () {
    return _request.enableQueue;
  }
});
Object.defineProperty(exports, "evaluationResultToViewData", {
  enumerable: true,
  get: function () {
    return _EvaluationResponse.evaluationResultToViewData;
  }
});
Object.defineProperty(exports, "getLastNPeriods", {
  enumerable: true,
  get: function () {
    return _timePeriodUtils.getLastNPeriods;
  }
});
Object.defineProperty(exports, "getQueue", {
  enumerable: true,
  get: function () {
    return _request.getQueue;
  }
});
Object.defineProperty(exports, "getSplitPeriod", {
  enumerable: true,
  get: function () {
    return _EvaluationResponse.getSplitPeriod;
  }
});
Object.defineProperty(exports, "joinRealAndPredictedData", {
  enumerable: true,
  get: function () {
    return _EvaluationResponse.joinRealAndPredictedData;
  }
});
Object.defineProperty(exports, "parseOrgUnits", {
  enumerable: true,
  get: function () {
    return _utils.parseOrgUnits;
  }
});
Object.defineProperty(exports, "sortPeriods", {
  enumerable: true,
  get: function () {
    return _timePeriodUtils.sortPeriods;
  }
});
Object.defineProperty(exports, "toDHIS2PeriodData", {
  enumerable: true,
  get: function () {
    return _timePeriodUtils.toDHIS2PeriodData;
  }
});
var _UncertaintyAreaChart = require("./components/predictions/UncertaintyAreaChart/UncertaintyAreaChart");
var _index = require("./httpfunctions/index");
Object.keys(_index).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _index[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _index[key];
    }
  });
});
var _EvaluationResponse = require("./utils/EvaluationResponse");
var _ConditionalTooltip = require("./utils/ConditionalTooltip");
var _ResultPlot = require("./components/evaluation/ResultPlot/ResultPlot");
var _ComparisonPlot = require("./components/evaluation/ComparisonPlot/ComparisonPlot");
var _ComparisonPlotList = require("./components/evaluation/ComparisonPlotList/ComparisonPlotList");
var _ComparionPlotWrapper = require("./components/evaluation/ComparionPlotWrapper/ComparionPlotWrapper");
var _PredictionTable = require("./components/predictions/PredictionTable/PredictionTable");
var _PredictionMap = require("./components/predictions/PredictionMap/PredictionMap");
var _ui = require("./ui");
var _SplitPeriodSelector = _interopRequireDefault(require("./components/evaluation/SplitPeriodSelector/SplitPeriodSelector"));
var _CrudService = require("./httpfunctions/services/CrudService");
var _AnalyticsService = require("./httpfunctions/services/AnalyticsService");
var _request = require("./httpfunctions/core/request");
var _PredictionViewModel = require("./utils/PredictionViewModel");
var _timePeriodUtils = require("./utils/timePeriodUtils");
var _utils = require("./components/maps/utils");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }