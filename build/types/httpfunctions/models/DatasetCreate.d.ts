import type { DataSource } from './DataSource';
import type { FeatureCollectionModel } from './FeatureCollectionModel';
import type { ObservationBase } from './ObservationBase';
export type DatasetCreate = {
    name: string;
    dataSources?: (Array<DataSource> | null);
    type?: (string | null);
    observations: Array<ObservationBase>;
    geojson: FeatureCollectionModel;
};
