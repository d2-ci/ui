import type { Coordinates } from './Coordinates';
export type MultiPolygonModel = {
    type?: string;
    coordinates: Array<Array<Array<Coordinates>>>;
};
