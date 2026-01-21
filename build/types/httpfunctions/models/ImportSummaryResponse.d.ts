import type { ValidationError } from './ValidationError';
export type ImportSummaryResponse = {
    id: (string | null);
    importedCount: number;
    rejected: Array<ValidationError>;
};
