import type { DataSource } from './DataSource';
import type { FeatureCollectionModel } from './FeatureCollectionModel';
import type { FetchRequest } from './FetchRequest';
import type { ObservationBase } from './ObservationBase';
export type MakeBacktestWithDataRequest = {
    nPeriods: number;
    nSplits: number;
    stride: number;
    name: string;
    dataSources?: (Array<DataSource> | null);
    type?: (string | null);
    geojson: FeatureCollectionModel;
    providedData: Array<ObservationBase>;
    dataToBeFetched: Array<FetchRequest>;
    modelId: string;
};
