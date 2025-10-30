/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CrudService {
  /**
   * Get Backtests
   * Returns a list of backtests/evaluations with only the id and name
   * @returns BackTestRead Successful Response
   * @throws ApiError
   */
  static getBacktestsCrudBacktestsGet() {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/crud/backtests'
    });
  }
  /**
   * Create Backtest
   * @param requestBody
   * @returns JobResponse Successful Response
   * @throws ApiError
   */
  static createBacktestCrudBacktestsPost(requestBody) {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/crud/backtests',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Backtest Batch
   * @param ids
   * @returns any Successful Response
   * @throws ApiError
   */
  static deleteBacktestBatchCrudBacktestsDelete(ids) {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/crud/backtests',
      query: {
        'ids': ids
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Backtest
   * @param backtestId
   * @returns BackTestFull Successful Response
   * @throws ApiError
   */
  static getBacktestCrudBacktestsBacktestIdGet(backtestId) {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/crud/backtests/{backtestId}',
      path: {
        'backtestId': backtestId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Backtest
   * @param backtestId
   * @returns any Successful Response
   * @throws ApiError
   */
  static deleteBacktestCrudBacktestsBacktestIdDelete(backtestId) {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/crud/backtests/{backtestId}',
      path: {
        'backtestId': backtestId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Backtest
   * @param backtestId
   * @param requestBody
   * @returns BackTestRead Successful Response
   * @throws ApiError
   */
  static updateBacktestCrudBacktestsBacktestIdPatch(backtestId, requestBody) {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/crud/backtests/{backtestId}',
      path: {
        'backtestId': backtestId
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Backtest Info
   * @param backtestId
   * @returns BackTestRead Successful Response
   * @throws ApiError
   */
  static getBacktestInfoCrudBacktestsBacktestIdInfoGet(backtestId) {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/crud/backtests/{backtestId}/info',
      path: {
        'backtestId': backtestId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Predictions
   * @returns PredictionInfo Successful Response
   * @throws ApiError
   */
  static getPredictionsCrudPredictionsGet() {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/crud/predictions'
    });
  }
  /**
   * Create Prediction
   * @param requestBody
   * @returns JobResponse Successful Response
   * @throws ApiError
   */
  static createPredictionCrudPredictionsPost(requestBody) {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/crud/predictions',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Prediction
   * @param predictionId
   * @returns PredictionInfo Successful Response
   * @throws ApiError
   */
  static getPredictionCrudPredictionsPredictionIdGet(predictionId) {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/crud/predictions/{predictionId}',
      path: {
        'predictionId': predictionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Prediction
   * @param predictionId
   * @returns any Successful Response
   * @throws ApiError
   */
  static deletePredictionCrudPredictionsPredictionIdDelete(predictionId) {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/crud/predictions/{predictionId}',
      path: {
        'predictionId': predictionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Datasets
   * @returns DataSetInfo Successful Response
   * @throws ApiError
   */
  static getDatasetsCrudDatasetsGet() {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/crud/datasets'
    });
  }
  /**
   * Create Dataset
   * @param requestBody
   * @returns JobResponse Successful Response
   * @throws ApiError
   */
  static createDatasetCrudDatasetsPost(requestBody) {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/crud/datasets',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Dataset
   * @param datasetId
   * @returns DataSetWithObservations Successful Response
   * @throws ApiError
   */
  static getDatasetCrudDatasetsDatasetIdGet(datasetId) {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/crud/datasets/{datasetId}',
      path: {
        'datasetId': datasetId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Dataset
   * @param datasetId
   * @returns any Successful Response
   * @throws ApiError
   */
  static deleteDatasetCrudDatasetsDatasetIdDelete(datasetId) {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/crud/datasets/{datasetId}',
      path: {
        'datasetId': datasetId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Dataset Csv
   * @param formData
   * @returns chap_core__rest_api__v1__jobs__DataBaseResponse Successful Response
   * @throws ApiError
   */
  static createDatasetCsvCrudDatasetsCsvFilePost(formData) {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/crud/datasets/csvFile',
      formData: formData,
      mediaType: 'multipart/form-data',
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Dataset Df
   * @param datasetId
   * @returns any Successful Response
   * @throws ApiError
   */
  static getDatasetDfCrudDatasetsDatasetIdDfGet(datasetId) {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/crud/datasets/{datasetId}/df',
      path: {
        'datasetId': datasetId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Model Templates
   * Lists all model templates from the db.
   * @returns ModelTemplateRead Successful Response
   * @throws ApiError
   */
  static listModelTemplatesCrudModelTemplatesGet() {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/crud/model-templates'
    });
  }
  /**
   * List Configured Models
   * List all configured models from the db
   * @returns ModelSpecRead Successful Response
   * @throws ApiError
   */
  static listConfiguredModelsCrudConfiguredModelsGet() {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/crud/configured-models'
    });
  }
  /**
   * Add Configured Model
   * Add a configured model to the database
   * @param requestBody
   * @returns ConfiguredModelDB Successful Response
   * @throws ApiError
   */
  static addConfiguredModelCrudConfiguredModelsPost(requestBody) {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/crud/configured-models',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Configured Model
   * Soft delete a configured model by setting archived to True
   * @param configuredModelId
   * @returns any Successful Response
   * @throws ApiError
   */
  static deleteConfiguredModelCrudConfiguredModelsConfiguredModelIdDelete(configuredModelId) {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/crud/configured-models/{configuredModelId}',
      path: {
        'configuredModelId': configuredModelId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Models
   * List all models from the db (alias for configured models)
   * @returns ModelSpecRead Successful Response
   * @throws ApiError
   */
  static listModelsCrudModelsGet() {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/crud/models'
    });
  }
  /**
   * Add Model
   * Add a model to the database (alias for configured models)
   * @param requestBody
   * @returns ConfiguredModelDB Successful Response
   * @throws ApiError
   */
  static addModelCrudModelsPost(requestBody) {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/crud/models',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Debug Entry
   * @returns JobResponse Successful Response
   * @throws ApiError
   */
  static debugEntryCrudDebugPost() {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/crud/debug'
    });
  }
  /**
   * Get Debug Entry
   * @param debugId
   * @returns DebugEntry Successful Response
   * @throws ApiError
   */
  static getDebugEntryCrudDebugDebugIdGet(debugId) {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/crud/debug/{debugId}',
      path: {
        'debugId': debugId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
}