import type { BackTestCreate } from '../models/BackTestCreate';
import type { BackTestFull } from '../models/BackTestFull';
import type { BackTestRead } from '../models/BackTestRead';
import type { BackTestUpdate } from '../models/BackTestUpdate';
import type { Body_create_dataset_csv_crud_datasets_csvFile_post } from '../models/Body_create_dataset_csv_crud_datasets_csvFile_post';
import type { chap_core__rest_api__v1__jobs__DataBaseResponse } from '../models/chap_core__rest_api__v1__jobs__DataBaseResponse';
import type { ConfiguredModelDB } from '../models/ConfiguredModelDB';
import type { DatasetCreate } from '../models/DatasetCreate';
import type { DataSetInfo } from '../models/DataSetInfo';
import type { DataSetWithObservations } from '../models/DataSetWithObservations';
import type { DebugEntry } from '../models/DebugEntry';
import type { JobResponse } from '../models/JobResponse';
import type { ModelConfigurationCreate } from '../models/ModelConfigurationCreate';
import type { ModelSpecRead } from '../models/ModelSpecRead';
import type { ModelTemplateRead } from '../models/ModelTemplateRead';
import type { PredictionBaseRead } from '../models/PredictionBaseRead';
import type { PredictionCreate } from '../models/PredictionCreate';
import type { PredictionRead } from '../models/PredictionRead';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class CrudService {
    /**
     * Get Backtests
     * Returns a list of backtests/evaluations with only the id and name
     * @returns BackTestRead Successful Response
     * @throws ApiError
     */
    static getBacktestsCrudBacktestsGet(): CancelablePromise<Array<BackTestRead>>;
    /**
     * Create Backtest
     * @param requestBody
     * @returns JobResponse Successful Response
     * @throws ApiError
     */
    static createBacktestCrudBacktestsPost(requestBody: BackTestCreate): CancelablePromise<JobResponse>;
    /**
     * Delete Backtest Batch
     * @param ids
     * @returns any Successful Response
     * @throws ApiError
     */
    static deleteBacktestBatchCrudBacktestsDelete(ids: string): CancelablePromise<any>;
    /**
     * Get Backtest
     * @param backtestId
     * @returns BackTestFull Successful Response
     * @throws ApiError
     */
    static getBacktestCrudBacktestsBacktestIdGet(backtestId: number): CancelablePromise<BackTestFull>;
    /**
     * Delete Backtest
     * @param backtestId
     * @returns any Successful Response
     * @throws ApiError
     */
    static deleteBacktestCrudBacktestsBacktestIdDelete(backtestId: number): CancelablePromise<any>;
    /**
     * Update Backtest
     * @param backtestId
     * @param requestBody
     * @returns BackTestRead Successful Response
     * @throws ApiError
     */
    static updateBacktestCrudBacktestsBacktestIdPatch(backtestId: number, requestBody: BackTestUpdate): CancelablePromise<BackTestRead>;
    /**
     * Get Backtest Info
     * @param backtestId
     * @returns BackTestRead Successful Response
     * @throws ApiError
     */
    static getBacktestInfoCrudBacktestsBacktestIdInfoGet(backtestId: number): CancelablePromise<BackTestRead>;
    /**
     * Get Predictions
     * @returns PredictionBaseRead Successful Response
     * @throws ApiError
     */
    static getPredictionsCrudPredictionsGet(): CancelablePromise<Array<PredictionBaseRead>>;
    /**
     * Create Prediction
     * @param requestBody
     * @returns JobResponse Successful Response
     * @throws ApiError
     */
    static createPredictionCrudPredictionsPost(requestBody: PredictionCreate): CancelablePromise<JobResponse>;
    /**
     * Get Prediction
     * @param predictionId
     * @returns PredictionRead Successful Response
     * @throws ApiError
     */
    static getPredictionCrudPredictionsPredictionIdGet(predictionId: number): CancelablePromise<PredictionRead>;
    /**
     * Delete Prediction
     * @param predictionId
     * @returns any Successful Response
     * @throws ApiError
     */
    static deletePredictionCrudPredictionsPredictionIdDelete(predictionId: number): CancelablePromise<any>;
    /**
     * Get Datasets
     * @returns DataSetInfo Successful Response
     * @throws ApiError
     */
    static getDatasetsCrudDatasetsGet(): CancelablePromise<Array<DataSetInfo>>;
    /**
     * Create Dataset
     * @param requestBody
     * @returns JobResponse Successful Response
     * @throws ApiError
     */
    static createDatasetCrudDatasetsPost(requestBody: DatasetCreate): CancelablePromise<JobResponse>;
    /**
     * Get Dataset
     * @param datasetId
     * @returns DataSetWithObservations Successful Response
     * @throws ApiError
     */
    static getDatasetCrudDatasetsDatasetIdGet(datasetId: number): CancelablePromise<DataSetWithObservations>;
    /**
     * Delete Dataset
     * @param datasetId
     * @returns any Successful Response
     * @throws ApiError
     */
    static deleteDatasetCrudDatasetsDatasetIdDelete(datasetId: number): CancelablePromise<any>;
    /**
     * Create Dataset Csv
     * @param formData
     * @returns chap_core__rest_api__v1__jobs__DataBaseResponse Successful Response
     * @throws ApiError
     */
    static createDatasetCsvCrudDatasetsCsvFilePost(formData: Body_create_dataset_csv_crud_datasets_csvFile_post): CancelablePromise<chap_core__rest_api__v1__jobs__DataBaseResponse>;
    /**
     * Get Dataset Df
     * @param datasetId
     * @returns any Successful Response
     * @throws ApiError
     */
    static getDatasetDfCrudDatasetsDatasetIdDfGet(datasetId: number): CancelablePromise<any>;
    /**
     * List Model Templates
     * Lists all model templates from the db.
     * @returns ModelTemplateRead Successful Response
     * @throws ApiError
     */
    static listModelTemplatesCrudModelTemplatesGet(): CancelablePromise<Array<ModelTemplateRead>>;
    /**
     * List Configured Models
     * List all configured models from the db
     * @returns ModelSpecRead Successful Response
     * @throws ApiError
     */
    static listConfiguredModelsCrudConfiguredModelsGet(): CancelablePromise<Array<ModelSpecRead>>;
    /**
     * Add Configured Model
     * Add a configured model to the database
     * @param requestBody
     * @returns ConfiguredModelDB Successful Response
     * @throws ApiError
     */
    static addConfiguredModelCrudConfiguredModelsPost(requestBody: ModelConfigurationCreate): CancelablePromise<ConfiguredModelDB>;
    /**
     * Delete Configured Model
     * Soft delete a configured model by setting archived to True
     * @param configuredModelId
     * @returns any Successful Response
     * @throws ApiError
     */
    static deleteConfiguredModelCrudConfiguredModelsConfiguredModelIdDelete(configuredModelId: number): CancelablePromise<any>;
    /**
     * List Models
     * List all models from the db (alias for configured models)
     * @returns ModelSpecRead Successful Response
     * @throws ApiError
     */
    static listModelsCrudModelsGet(): CancelablePromise<Array<ModelSpecRead>>;
    /**
     * Add Model
     * Add a model to the database (alias for configured models)
     * @param requestBody
     * @returns ConfiguredModelDB Successful Response
     * @throws ApiError
     */
    static addModelCrudModelsPost(requestBody: ModelConfigurationCreate): CancelablePromise<ConfiguredModelDB>;
    /**
     * Debug Entry
     * @returns JobResponse Successful Response
     * @throws ApiError
     */
    static debugEntryCrudDebugPost(): CancelablePromise<JobResponse>;
    /**
     * Get Debug Entry
     * @param debugId
     * @returns DebugEntry Successful Response
     * @throws ApiError
     */
    static getDebugEntryCrudDebugDebugIdGet(debugId: number): CancelablePromise<DebugEntry>;
}
