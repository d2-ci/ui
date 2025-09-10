import type { BacktestDomain } from '../models/BacktestDomain';
import type { BackTestRead } from '../models/BackTestRead';
import type { DataList } from '../models/DataList';
import type { DatasetMakeRequest } from '../models/DatasetMakeRequest';
import type { DataSource } from '../models/DataSource';
import type { EvaluationEntry } from '../models/EvaluationEntry';
import type { ImportSummaryResponse } from '../models/ImportSummaryResponse';
import type { JobResponse } from '../models/JobResponse';
import type { MakeBacktestRequest } from '../models/MakeBacktestRequest';
import type { MakeBacktestWithDataRequest } from '../models/MakeBacktestWithDataRequest';
import type { MakePredictionRequest } from '../models/MakePredictionRequest';
import type { PredictionEntry } from '../models/PredictionEntry';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class AnalyticsService {
    /**
     * Make Dataset
     * This endpoint creates a dataset from the provided data and the data to be fetched3
     * and puts it in the database
     * @param requestBody
     * @returns ImportSummaryResponse Successful Response
     * @throws ApiError
     */
    static makeDatasetAnalyticsMakeDatasetPost(requestBody: DatasetMakeRequest): CancelablePromise<ImportSummaryResponse>;
    /**
     * Get Compatible Backtests
     * Return a list of backtests that are compatible for comparison with the given backtest
     * @param backtestId
     * @returns BackTestRead Successful Response
     * @throws ApiError
     */
    static getCompatibleBacktestsAnalyticsCompatibleBacktestsBacktestIdGet(backtestId: number): CancelablePromise<Array<BackTestRead>>;
    /**
     * Get Backtest Overlap
     * Return the org units and split periods that are common between two backtests
     * @param backtestId1
     * @param backtestId2
     * @returns BacktestDomain Successful Response
     * @throws ApiError
     */
    static getBacktestOverlapAnalyticsBacktestOverlapBacktestId1BacktestId2Get(backtestId1: number, backtestId2: number): CancelablePromise<BacktestDomain>;
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
    static getEvaluationEntriesAnalyticsEvaluationEntryGet(backtestId: number, quantiles: Array<number>, splitPeriod?: string, orgUnits?: Array<string>): CancelablePromise<Array<EvaluationEntry>>;
    /**
     * Create Backtest
     * @param requestBody
     * @returns JobResponse Successful Response
     * @throws ApiError
     */
    static createBacktestAnalyticsCreateBacktestPost(requestBody: MakeBacktestRequest): CancelablePromise<JobResponse>;
    /**
     * Make Prediction
     * @param requestBody
     * @returns JobResponse Successful Response
     * @throws ApiError
     */
    static makePredictionAnalyticsMakePredictionPost(requestBody: MakePredictionRequest): CancelablePromise<JobResponse>;
    /**
     * Get Prediction Entries
     * @param predictionId
     * @param quantiles
     * @returns PredictionEntry Successful Response
     * @throws ApiError
     */
    static getPredictionEntriesAnalyticsPredictionEntryPredictionIdGet(predictionId: number, quantiles: Array<number>): CancelablePromise<Array<PredictionEntry>>;
    /**
     * Get Actual Cases
     * Return the actual disease cases corresponding to a backtest. Can optionally be filtered on org units.
     * @param backtestId
     * @param orgUnits
     * @returns DataList Successful Response
     * @throws ApiError
     */
    static getActualCasesAnalyticsActualCasesBacktestIdGet(backtestId: number, orgUnits?: Array<string>): CancelablePromise<DataList>;
    /**
     * Get Data Sources
     * @returns DataSource Successful Response
     * @throws ApiError
     */
    static getDataSourcesAnalyticsDataSourcesGet(): CancelablePromise<Array<DataSource>>;
    /**
     * Create Backtest With Data
     * @param requestBody
     * @param dryRun If True, only run validation and do not create a backtest
     * @returns ImportSummaryResponse Successful Response
     * @throws ApiError
     */
    static createBacktestWithDataAnalyticsCreateBacktestWithDataPost(requestBody: MakeBacktestWithDataRequest, dryRun?: boolean): CancelablePromise<ImportSummaryResponse>;
}
