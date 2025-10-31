import type { PredictionResponse } from './PredictionResponse';
export type FullPredictionResponse = {
    diseaseId: string;
    dataValues: Array<PredictionResponse>;
};
