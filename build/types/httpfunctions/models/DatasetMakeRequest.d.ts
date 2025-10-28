import type { DataSource } from './DataSource';
import type { FeatureCollectionModel } from './FeatureCollectionModel';
import type { FetchRequest } from './FetchRequest';
import type { ObservationBase } from './ObservationBase';
export type DatasetMakeRequest = {
    name: string;
    dataSources?: (Array<DataSource> | null);
    type?: (string | null);
    geojson: FeatureCollectionModel;
    providedData: Array<ObservationBase>;
    dataToBeFetched: Array<FetchRequest>;
};
