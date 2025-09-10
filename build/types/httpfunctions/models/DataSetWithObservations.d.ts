import type { ObservationBase } from './ObservationBase';
export type DataSetWithObservations = {
    name: string;
    type?: (string | null);
    geojson?: (string | null);
    id: number;
    observations: Array<ObservationBase>;
    created: (string | null);
};
