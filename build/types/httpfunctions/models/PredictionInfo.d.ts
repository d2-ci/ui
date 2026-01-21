import type { ConfiguredModelDB } from './ConfiguredModelDB';
import type { DataSetMeta } from './DataSetMeta';
export type PredictionInfo = {
    datasetId: number;
    modelId: string;
    nPeriods: number;
    name: string;
    created: string;
    metaData?: Record<string, any>;
    orgUnits?: Array<string>;
    id: number;
    configuredModel: ConfiguredModelDB;
    dataset: DataSetMeta;
};
