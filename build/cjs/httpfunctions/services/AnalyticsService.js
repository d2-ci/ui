"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnalyticsService = void 0;
var _OpenAPI = require("../core/OpenAPI");
var _request = require("../core/request");
/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

class AnalyticsService {
  /**
   * Make Dataset
   * This endpoint creates a dataset from the provided data and the data to be fetched3
   * and puts it in the database
   * @param requestBody
   * @returns ImportSummaryResponse Successful Response
   * @throws ApiError
   */
  static makeDatasetAnalyticsMakeDatasetPost(requestBody) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'POST',
      url: '/analytics/make-dataset',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Compatible Backtests
   * Return a list of backtests that are compatible for comparison with the given backtest
   * @param backtestId
   * @returns BackTestRead Successful Response
   * @throws ApiError
   */
  static getCompatibleBacktestsAnalyticsCompatibleBacktestsBacktestIdGet(backtestId) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/analytics/compatible-backtests/{backtestId}',
      path: {
        'backtestId': backtestId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Backtest Overlap
   * Return the org units and split periods that are common between two backtests
   * @param backtestId1
   * @param backtestId2
   * @returns BacktestDomain Successful Response
   * @throws ApiError
   */
  static getBacktestOverlapAnalyticsBacktestOverlapBacktestId1BacktestId2Get(backtestId1, backtestId2) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/analytics/backtest-overlap/{backtestId1}/{backtestId2}',
      path: {
        'backtestId1': backtestId1,
        'backtestId2': backtestId2
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Prediction Entry
   * return
   * @param predictionId
   * @param quantiles
   * @returns PredictionEntry Successful Response
   * @throws ApiError
   */
  static getPredictionEntryAnalyticsPredictionEntryGet(predictionId, quantiles) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/analytics/prediction-entry',
      query: {
        'predictionId': predictionId,
        'quantiles': quantiles
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Evaluation Entries
   * Return quantiles for the forecasts in a backtest. Can optionally be filtered on split period and org units.
   * @param backtestId
   * @param quantiles
   * @param splitPeriod
   * @param orgUnits
   * @returns EvaluationEntry Successful Response
   * @throws ApiError
   */
  static getEvaluationEntriesAnalyticsEvaluationEntryGet(backtestId, quantiles, splitPeriod, orgUnits) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/analytics/evaluation-entry',
      query: {
        'backtestId': backtestId,
        'quantiles': quantiles,
        'splitPeriod': splitPeriod,
        'orgUnits': orgUnits
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Backtest
   * @param requestBody
   * @returns JobResponse Successful Response
   * @throws ApiError
   */
  static createBacktestAnalyticsCreateBacktestPost(requestBody) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'POST',
      url: '/analytics/create-backtest',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Make Prediction
   * @param requestBody
   * @returns JobResponse Successful Response
   * @throws ApiError
   */
  static makePredictionAnalyticsMakePredictionPost(requestBody) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'POST',
      url: '/analytics/make-prediction',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Prediction Entries
   * @param predictionId
   * @param quantiles
   * @returns PredictionEntry Successful Response
   * @throws ApiError
   */
  static getPredictionEntriesAnalyticsPredictionEntryPredictionIdGet(predictionId, quantiles) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/analytics/prediction-entry/{predictionId}',
      path: {
        'predictionId': predictionId
      },
      query: {
        'quantiles': quantiles
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Actual Cases
   * Return the actual disease cases corresponding to a backtest. Can optionally be filtered on org units.
   * @param backtestId
   * @param orgUnits
   * @returns DataList Successful Response
   * @throws ApiError
   */
  static getActualCasesAnalyticsActualCasesBacktestIdGet(backtestId, orgUnits) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/analytics/actualCases/{backtestId}',
      path: {
        'backtestId': backtestId
      },
      query: {
        'orgUnits': orgUnits
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Data Sources
   * @returns ChapDataSource Successful Response
   * @throws ApiError
   */
  static getDataSourcesAnalyticsDataSourcesGet() {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/analytics/data-sources'
    });
  }
  /**
   * Create Backtest With Data
   * @param requestBody
   * @param dryRun If True, only run validation and do not create a backtest
   * @returns ImportSummaryResponse Successful Response
   * @throws ApiError
   */
  static createBacktestWithDataAnalyticsCreateBacktestWithDataPost(requestBody, dryRun = false) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'POST',
      url: '/analytics/create-backtest-with-data/',
      query: {
        'dryRun': dryRun
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`
      }
    });
  }
}
exports.AnalyticsService = AnalyticsService;