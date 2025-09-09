import { EvaluationForSplitPoint } from '../../../interfaces/Evaluation';
interface ComparionPlotWrapperProps {
    evaluationName: string;
    modelName: string;
    evaluations: EvaluationForSplitPoint[];
    splitPeriods: string[];
}
export declare const ComparionPlotWrapper: ({ evaluationName, modelName, evaluations, splitPeriods, }: ComparionPlotWrapperProps) => import("react/jsx-runtime").JSX.Element;
export {};
