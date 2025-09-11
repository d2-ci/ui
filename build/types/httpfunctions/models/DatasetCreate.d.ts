import type { FeatureCollectionModel } from './FeatureCollectionModel';
import type { ObservationBase } from './ObservationBase';
export type DatasetCreate = {
    name: string;
    type?: (string | null);
    geojson: FeatureCollectionModel;
    observations: Array<ObservationBase>;
};
