export type MakeBacktestRequest = {
    nPeriods: number;
    nSplits: number;
    stride: number;
    name: string;
    modelId: string;
    datasetId: number;
};
