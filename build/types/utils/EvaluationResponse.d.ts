import { DataElement, EvaluationEntry } from '../httpfunctions';
import { EvaluationEntryExtend, EvaluationForSplitPoint, HighChartsData } from '../interfaces/Evaluation';
export declare function joinRealAndPredictedData(predictedData: HighChartsData, realData: DataElement[]): HighChartsData;
export declare const evaluationResultToViewData: (data: EvaluationEntryExtend[], realValues: DataElement[], modelName?: string) => EvaluationForSplitPoint[];
export declare function createHighChartsData(plotData: EvaluationEntryExtend[], quantileFunc: (item: any) => string): HighChartsData;
export declare function getSplitPeriod(data: EvaluationEntry[]): string[];
