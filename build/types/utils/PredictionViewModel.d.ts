import type { PredictionRead } from '../httpfunctions';
import type { PredictionOrgUnitSeries } from '../interfaces/Prediction';
export declare function computeQuantile(quantile: number, values?: number[]): number;
export type OrgUnitsById = Map<string, {
    displayName: string;
}>;
export declare function buildPredictionSeries(prediction: PredictionRead, orgUnitsById: OrgUnitsById, targetId: string): PredictionOrgUnitSeries[];
