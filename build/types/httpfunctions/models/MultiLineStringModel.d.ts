import type { Coordinates } from './Coordinates';
export type MultiLineStringModel = {
    type?: string;
    coordinates: Array<Array<Coordinates>>;
};
