"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JobsService = void 0;
var _OpenAPI = require("../core/OpenAPI");
var _request = require("../core/request");
/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

class JobsService {
  /**
   * List Jobs
   * List all jobs currently in the queue.
   * Optionally filters by a list of job IDs, a list of statuses, and/or a job type.
   * Filtering order: IDs, then type, then status.
   * @param ids
   * @param status
   * @param type
   * @returns JobDescription Successful Response
   * @throws ApiError
   */
  static listJobsJobsGet(ids, status, type) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/jobs',
      query: {
        'ids': ids,
        'status': status,
        'type': type
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Job Status
   * @param jobId
   * @returns string Successful Response
   * @throws ApiError
   */
  static getJobStatusJobsJobIdGet(jobId) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/jobs/{job_id}',
      path: {
        'job_id': jobId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Job
   * @param jobId
   * @returns any Successful Response
   * @throws ApiError
   */
  static deleteJobJobsJobIdDelete(jobId) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'DELETE',
      url: '/jobs/{job_id}',
      path: {
        'job_id': jobId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Cancel Job
   * Cancel a running job
   * @param jobId
   * @returns any Successful Response
   * @throws ApiError
   */
  static cancelJobJobsJobIdCancelPost(jobId) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'POST',
      url: '/jobs/{job_id}/cancel',
      path: {
        'job_id': jobId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Logs
   * @param jobId
   * @returns string Successful Response
   * @throws ApiError
   */
  static getLogsJobsJobIdLogsGet(jobId) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/jobs/{job_id}/logs',
      path: {
        'job_id': jobId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Prediction Result
   * @param jobId
   * @returns FullPredictionResponse Successful Response
   * @throws ApiError
   */
  static getPredictionResultJobsJobIdPredictionResultGet(jobId) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/jobs/{job_id}/prediction_result',
      path: {
        'job_id': jobId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Evaluation Result
   * @param jobId
   * @returns EvaluationResponse Successful Response
   * @throws ApiError
   */
  static getEvaluationResultJobsJobIdEvaluationResultGet(jobId) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/jobs/{job_id}/evaluation_result',
      path: {
        'job_id': jobId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Database Result
   * @param jobId
   * @returns chap_core__rest_api__v1__jobs__DataBaseResponse Successful Response
   * @throws ApiError
   */
  static getDatabaseResultJobsJobIdDatabaseResultGet(jobId) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/jobs/{job_id}/database_result',
      path: {
        'job_id': jobId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
}
exports.JobsService = JobsService;