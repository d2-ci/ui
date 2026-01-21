import { PredictionOrgUnitSeries } from '../../../interfaces/Prediction';
import { FeatureCollection } from '../../maps/utils';
interface PredictionMapProps {
    series: PredictionOrgUnitSeries[];
    predictionTargetName: string;
    orgUnits: FeatureCollection;
}
export declare const PredictionMap: ({ series, predictionTargetName, orgUnits }: PredictionMapProps) => import("react/jsx-runtime").JSX.Element;
export {};
