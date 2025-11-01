import { FullPredictionResponse, PredictionResponse, PredictionInfo } from '../httpfunctions';
export interface FullPredictionResponseExtended extends FullPredictionResponse {
    diseaseId: string;
    dataValues: Array<PredictionResponseExtended>;
}
export interface PredictionResponseExtended extends PredictionResponse {
    displayName: string;
}
export type QuantileKey = 'quantile_low' | 'quantile_mid_low' | 'median' | 'quantile_mid_high' | 'quantile_high';
export interface PredictionPointVM {
    period: string;
    periodLabel: string;
    quantiles: Record<QuantileKey, number>;
}
export interface PredictionOrgUnitSeries {
    targetId: string;
    orgUnitId: string;
    orgUnitName: string;
    points: PredictionPointVM[];
    actualCases?: Array<{
        period: string;
        value: number | null;
    }>;
}
export type { PredictionInfo };
