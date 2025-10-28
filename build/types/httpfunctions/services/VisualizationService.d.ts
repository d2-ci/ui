import type { Metric } from '../models/Metric';
import type { VisualizationInfo } from '../models/VisualizationInfo';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class VisualizationService {
    /**
     * Get Avilable Metric Plots
     * List available visualizations
     * @param backtestId
     * @returns VisualizationInfo Successful Response
     * @throws ApiError
     */
    static getAvilableMetricPlotsVisualizationMetricPlotsBacktestIdGet(backtestId: number): CancelablePromise<Array<VisualizationInfo>>;
    /**
     * Get Available Metrics
     * @param backtestId
     * @returns Metric Successful Response
     * @throws ApiError
     */
    static getAvailableMetricsVisualizationMetricsBacktestIdGet(backtestId: number): CancelablePromise<Array<Metric>>;
    /**
     * Generate Visualization
     * @param visualizationName
     * @param backtestId
     * @param metricId
     * @returns any Successful Response
     * @throws ApiError
     */
    static generateVisualizationVisualizationMetricPlotsVisualizationNameBacktestIdMetricIdGet(visualizationName: string, backtestId: number, metricId: string): CancelablePromise<any>;
    /**
     * Generate Data Plots
     * @param visualizationName
     * @param datasetId
     * @returns any Successful Response
     * @throws ApiError
     */
    static generateDataPlotsVisualizationDatasetPlotsVisualizationNameDatasetIdGet(visualizationName: string, datasetId: number): CancelablePromise<any>;
    /**
     * List Backtest Plot Types
     * @returns any Successful Response
     * @throws ApiError
     */
    static listBacktestPlotTypesVisualizationBacktestPlotsGet(): CancelablePromise<any>;
    /**
     * Generate Backtest Plots
     * @param visualizationName
     * @param backtestId
     * @returns any Successful Response
     * @throws ApiError
     */
    static generateBacktestPlotsVisualizationBacktestPlotsVisualizationNameBacktestIdGet(visualizationName: string, backtestId: number): CancelablePromise<any>;
}
