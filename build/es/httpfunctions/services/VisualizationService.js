/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VisualizationService {
  /**
   * List Visualizations
   * List available visualizations
   * @param backtestId
   * @returns VisualizationInfo Successful Response
   * @throws ApiError
   */
  static listVisualizationsVisualizationBacktestIdGet(backtestId) {
    return __request(OpenAPI, {
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
    return __request(OpenAPI, {
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
    return __request(OpenAPI, {
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