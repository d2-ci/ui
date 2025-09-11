import type { CancelablePromise } from '../core/CancelablePromise';
export declare class VisualizationService {
    /**
     * List Visualizations
     * List available visualizations
     * @returns string Successful Response
     * @throws ApiError
     */
    static listVisualizationsVisualizationGet(): CancelablePromise<Array<string>>;
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
