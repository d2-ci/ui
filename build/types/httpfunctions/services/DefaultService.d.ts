import type { CompatibilityResponse } from '../models/CompatibilityResponse';
import type { EvaluationResponse } from '../models/EvaluationResponse';
import type { Feature } from '../models/Feature';
import type { FullPredictionResponse } from '../models/FullPredictionResponse';
import type { HealthResponse } from '../models/HealthResponse';
import type { ModelSpec } from '../models/ModelSpec';
import type { State } from '../models/State';
import type { SystemInfoResponse } from '../models/SystemInfoResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DefaultService {
    /**
     * Favicon
     * @returns any Successful Response
     * @throws ApiError
     */
    static faviconfaviconIcoGet(): CancelablePromise<any>;
    /**
     * @deprecated
     * List Models
     * List all available models. These are not validated. Should set up test suite to validate them
     * @returns ModelSpec Successful Response
     * @throws ApiError
     */
    static listModelsListModelsGet(): CancelablePromise<Array<ModelSpec>>;
    /**
     * @deprecated
     * List Features
     * List all available features
     * @returns Feature Successful Response
     * @throws ApiError
     */
    static listFeaturesListFeaturesGet(): CancelablePromise<Array<Feature>>;
    /**
     * Get Results
     * Retrieve results made by the model
     * @returns FullPredictionResponse Successful Response
     * @throws ApiError
     */
    static getResultsGetResultsGet(): CancelablePromise<FullPredictionResponse>;
    /**
     * Get Evaluation Results
     * Retrieve evaluation results made by the model
     * @returns EvaluationResponse Successful Response
     * @throws ApiError
     */
    static getEvaluationResultsGetEvaluationResultsGet(): CancelablePromise<EvaluationResponse>;
    /**
     * Get Exception
     * Retrieve exception information if the job failed
     * @returns string Successful Response
     * @throws ApiError
     */
    static getExceptionGetExceptionGet(): CancelablePromise<string>;
    /**
     * Cancel
     * Cancel the current training
     * @returns any Successful Response
     * @throws ApiError
     */
    static cancelCancelPost(): CancelablePromise<Record<string, any>>;
    /**
     * Get Status
     * Retrieve the current status of the model
     * @returns State Successful Response
     * @throws ApiError
     */
    static getStatusStatusGet(): CancelablePromise<State>;
    /**
     * Health
     * @returns HealthResponse Successful Response
     * @throws ApiError
     */
    static healthHealthGet(): CancelablePromise<HealthResponse>;
    /**
     * Version
     * Retrieve the current version of the API
     * @returns any Successful Response
     * @throws ApiError
     */
    static versionVersionGet(): CancelablePromise<Record<string, any>>;
    /**
     * Is Compatible
     * Check if the modelling app version is compatible with the current API version
     * @param modellingAppVersion
     * @returns CompatibilityResponse Successful Response
     * @throws ApiError
     */
    static isCompatibleIsCompatibleGet(modellingAppVersion: string): CancelablePromise<CompatibilityResponse>;
    /**
     * System Info
     * Retrieve system information
     * @returns SystemInfoResponse Successful Response
     * @throws ApiError
     */
    static systemInfoSystemInfoGet(): CancelablePromise<SystemInfoResponse>;
}
