export type PredictionBaseRead = {
    datasetId: number;
    modelId: string;
    nPeriods: number;
    name: string;
    created: string;
    metaData?: Record<string, any>;
    id: number;
};
