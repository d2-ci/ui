import type { ForecastRead } from './ForecastRead';
export type PredictionRead = {
    datasetId: number;
    modelId: string;
    nPeriods: number;
    name: string;
    created: string;
    metaData?: Record<string, any>;
    id: number;
    forecasts: Array<ForecastRead>;
};
