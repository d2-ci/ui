import { FullPredictionResponseExtended } from '../../../interfaces/Prediction';
interface PredicationChartProps {
    data: FullPredictionResponseExtended;
    predictionTargetName: string;
}
export declare const UncertaintyAreaChart: ({ data, predictionTargetName, }: PredicationChartProps) => import("react/jsx-runtime").JSX.Element;
export {};
