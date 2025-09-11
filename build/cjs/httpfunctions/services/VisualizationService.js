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
   * @returns string Successful Response
   * @throws ApiError
   */
  static listVisualizationsVisualizationGet() {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/visualization/'
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