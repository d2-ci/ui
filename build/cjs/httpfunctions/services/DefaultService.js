"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultService = void 0;
var _OpenAPI = require("../core/OpenAPI");
var _request = require("../core/request");
/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

class DefaultService {
  /**
   * Favicon
   * @returns any Successful Response
   * @throws ApiError
   */
  static faviconfaviconIcoGet() {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: 'favicon.ico'
    });
  }
  /**
   * @deprecated
   * List Models
   * List all available models. These are not validated. Should set up test suite to validate them
   * @returns ModelSpec Successful Response
   * @throws ApiError
   */
  static listModelsListModelsGet() {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/list-models'
    });
  }
  /**
   * @deprecated
   * List Features
   * List all available features
   * @returns Feature Successful Response
   * @throws ApiError
   */
  static listFeaturesListFeaturesGet() {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/list-features'
    });
  }
  /**
   * Get Results
   * Retrieve results made by the model
   * @returns FullPredictionResponse Successful Response
   * @throws ApiError
   */
  static getResultsGetResultsGet() {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/get-results'
    });
  }
  /**
   * Get Evaluation Results
   * Retrieve evaluation results made by the model
   * @returns EvaluationResponse Successful Response
   * @throws ApiError
   */
  static getEvaluationResultsGetEvaluationResultsGet() {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/get-evaluation-results'
    });
  }
  /**
   * Get Exception
   * Retrieve exception information if the job failed
   * @returns string Successful Response
   * @throws ApiError
   */
  static getExceptionGetExceptionGet() {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/get-exception'
    });
  }
  /**
   * Cancel
   * Cancel the current training
   * @returns any Successful Response
   * @throws ApiError
   */
  static cancelCancelPost() {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'POST',
      url: '/cancel'
    });
  }
  /**
   * Get Status
   * Retrieve the current status of the model
   * @returns State Successful Response
   * @throws ApiError
   */
  static getStatusStatusGet() {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/status'
    });
  }
  /**
   * Health
   * @returns HealthResponse Successful Response
   * @throws ApiError
   */
  static healthHealthGet() {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/health'
    });
  }
  /**
   * Version
   * Retrieve the current version of the API
   * @returns any Successful Response
   * @throws ApiError
   */
  static versionVersionGet() {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/version'
    });
  }
  /**
   * Is Compatible
   * Check if the modelling app version is compatible with the current API version
   * @param modellingAppVersion
   * @returns CompatibilityResponse Successful Response
   * @throws ApiError
   */
  static isCompatibleIsCompatibleGet(modellingAppVersion) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/is-compatible',
      query: {
        'modelling_app_version': modellingAppVersion
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * System Info
   * Retrieve system information
   * @returns SystemInfoResponse Successful Response
   * @throws ApiError
   */
  static systemInfoSystemInfoGet() {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/system-info'
    });
  }
}
exports.DefaultService = DefaultService;