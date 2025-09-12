import { PredictionResponseExtended } from '../interfaces/Prediction';
export declare const getUniqePeriods: (values: Array<PredictionResponseExtended>) => string[];
export declare const getUniqeOrgUnits: (values: Array<PredictionResponseExtended>) => string[];
export declare const getUniqeQuantiles: (values: Array<PredictionResponseExtended>) => string[];
export declare const findOrgUnitName: (orgUnitId: string, values: Array<PredictionResponseExtended>) => string | undefined;
