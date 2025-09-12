interface Interval {
    startValue: number;
    endValue: number;
}
export declare const getEqualIntervals: (minValue: number, maxValue: number, numClasses?: number) => Interval[];
interface OrgUnit {
    id: string;
    na: string;
    ty: number;
    co: string;
}
interface GeoFeature {
    type: 'Feature';
    id: string;
    properties: {
        name: string;
    };
    geometry: {
        type: 'Point' | 'Polygon' | 'MultiPolygon';
        coordinates: any;
    };
}
interface FeatureCollection {
    type: 'FeatureCollections';
    features: GeoFeature[];
}
export declare const parseOrgUnits: (orgUnits: OrgUnit[]) => FeatureCollection;
export {};
