"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VisualizationService = void 0;
var _OpenAPI = require("../core/OpenAPI");
var _request = require("../core/request");
/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

class VisualizationService {
  /**
   * List Visualizations
   * List available visualizations
   * @param backtestId
   * @returns VisualizationInfo Successful Response
   * @throws ApiError
   */
  static listVisualizationsVisualizationBacktestIdGet(backtestId) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/visualization/{backtest_id}',
      path: {
        'backtest_id': backtestId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Available Metrics
   * @param backtestId
   * @returns Metric Successful Response
   * @throws ApiError
   */
  static getAvailableMetricsVisualizationMetricsBacktestIdGet(backtestId) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/visualization/metrics/{backtest_id}',
      path: {
        'backtest_id': backtestId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Generate Visualization
   * @param visualizationName
   * @param backtestId
   * @param metricId
   * @returns any Successful Response
   * @throws ApiError
   */
  static generateVisualizationVisualizationVisualizationNameBacktestIdMetricIdGet(visualizationName, backtestId, metricId) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/visualization/{visualization_name}/{backtest_id}/{metric_id}',
      path: {
        'visualization_name': visualizationName,
        'backtest_id': backtestId,
        'metric_id': metricId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
}
exports.VisualizationService = VisualizationService;