import type { PredictionEntry, DataElement } from '../httpfunctions';
import type { PredictionOrgUnitSeries } from '../interfaces/Prediction';
import { PERIOD_TYPES } from './timePeriodUtils';
export type OrgUnitsById = Map<string, {
    displayName: string;
}>;
export declare function buildPredictionSeries(predictionEntries: PredictionEntry[], orgUnitsById: OrgUnitsById, targetId: string, actualCases?: DataElement[], periodType?: keyof typeof PERIOD_TYPES): PredictionOrgUnitSeries[];
