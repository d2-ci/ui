import type { Metric } from '../models/Metric';
import type { VisualizationInfo } from '../models/VisualizationInfo';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class VisualizationService {
    /**
     * List Visualizations
     * List available visualizations
     * @param backtestId
     * @returns VisualizationInfo Successful Response
     * @throws ApiError
     */
    static listVisualizationsVisualizationBacktestIdGet(backtestId: number): CancelablePromise<Array<VisualizationInfo>>;
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
    static generateVisualizationVisualizationVisualizationNameBacktestIdMetricIdGet(visualizationName: string, backtestId: number, metricId: string): CancelablePromise<any>;
}
