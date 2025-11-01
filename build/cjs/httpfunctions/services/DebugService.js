"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DebugService = void 0;
var _OpenAPI = require("../core/OpenAPI");
var _request = require("../core/request");
/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

class DebugService {
  /**
   * Run Add Numbers
   * Trigger a Celery task to add two numbers.
   * @param a
   * @param b
   * @returns any Successful Response
   * @throws ApiError
   */
  static runAddNumbersDebugAddNumbersGet(a, b) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/debug/add-numbers',
      query: {
        'a': a,
        'b': b
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Trigger Exception
   * @returns JobResponse Successful Response
   * @throws ApiError
   */
  static triggerExceptionDebugTriggerExceptionPost() {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'POST',
      url: '/debug/trigger-exception'
    });
  }
  /**
   * Get Status
   * Get the status and result of a task.
   * @param taskId
   * @returns any Successful Response
   * @throws ApiError
   */
  static getStatusDebugGetStatusGet(taskId) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/debug/get-status',
      query: {
        'task_id': taskId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
}
exports.DebugService = DebugService;