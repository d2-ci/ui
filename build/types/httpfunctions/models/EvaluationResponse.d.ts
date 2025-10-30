import type { DataList } from './DataList';
import type { EvaluationEntry } from './EvaluationEntry';
export type EvaluationResponse = {
    actualCases: DataList;
    predictions: Array<EvaluationEntry>;
};
