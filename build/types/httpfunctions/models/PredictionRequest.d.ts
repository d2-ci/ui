import type { DataList } from './DataList';
import type { FeatureCollectionModel } from './FeatureCollectionModel';
export type PredictionRequest = {
    orgUnitsGeoJson: FeatureCollectionModel;
    features: Array<DataList>;
    estimator_id?: string;
    n_periods?: number;
    include_data?: boolean;
};
