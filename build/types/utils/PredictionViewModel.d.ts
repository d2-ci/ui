import type { PredictionEntry } from '../httpfunctions';
import type { PredictionOrgUnitSeries } from '../interfaces/Prediction';
export type OrgUnitsById = Map<string, {
    displayName: string;
}>;
export declare function buildPredictionSeries(predictionEntries: PredictionEntry[], orgUnitsById: OrgUnitsById, targetId: string): PredictionOrgUnitSeries[];
