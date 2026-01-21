import React from 'react';
import { EvaluationPerOrgUnit } from '../../../interfaces/Evaluation';
import { VirtuosoProps } from 'react-virtuoso';
interface ComparisonPlotListProps {
    evaluationPerOrgUnits: EvaluationPerOrgUnit[];
    useVirtuoso?: boolean;
    useVirtuosoWindowScroll?: boolean;
    virtuosoProps?: VirtuosoProps<any, any>;
    nameLabel?: string;
}
export declare const ComparisonPlotList: React.FC<ComparisonPlotListProps>;
export {};
