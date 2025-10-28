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
   * Get Avilable Metric Plots
   * List available visualizations
   * @param backtestId
   * @returns VisualizationInfo Successful Response
   * @throws ApiError
   */
  static getAvilableMetricPlotsVisualizationMetricPlotsBacktestIdGet(backtestId) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/visualization/metric-plots/{backtest_id}',
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
  static generateVisualizationVisualizationMetricPlotsVisualizationNameBacktestIdMetricIdGet(visualizationName, backtestId, metricId) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/visualization/metric-plots/{visualization_name}/{backtest_id}/{metric_id}',
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
  /**
   * Generate Data Plots
   * @param visualizationName
   * @param datasetId
   * @returns any Successful Response
   * @throws ApiError
   */
  static generateDataPlotsVisualizationDatasetPlotsVisualizationNameDatasetIdGet(visualizationName, datasetId) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/visualization/dataset-plots/{visualization_name}/{dataset_id}',
      path: {
        'visualization_name': visualizationName,
        'dataset_id': datasetId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Backtest Plot Types
   * @returns any Successful Response
   * @throws ApiError
   */
  static listBacktestPlotTypesVisualizationBacktestPlotsGet() {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/visualization/backtest-plots/'
    });
  }
  /**
   * Generate Backtest Plots
   * @param visualizationName
   * @param backtestId
   * @returns any Successful Response
   * @throws ApiError
   */
  static generateBacktestPlotsVisualizationBacktestPlotsVisualizationNameBacktestIdGet(visualizationName, backtestId) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/visualization/backtest-plots/{visualization_name}/{backtest_id}',
      path: {
        'visualization_name': visualizationName,
        'backtest_id': backtestId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
}
exports.VisualizationService = VisualizationService;