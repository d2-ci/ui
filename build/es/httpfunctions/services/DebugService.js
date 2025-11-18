/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DebugService {
  /**
   * Run Add Numbers
   * Trigger a Celery task to add two numbers.
   * @param a
   * @param b
   * @returns any Successful Response
   * @throws ApiError
   */
  static runAddNumbersDebugAddNumbersGet(a, b) {
    return __request(OpenAPI, {
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
    return __request(OpenAPI, {
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
    return __request(OpenAPI, {
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