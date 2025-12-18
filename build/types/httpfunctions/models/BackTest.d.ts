export type BackTest = {
    datasetId: number;
    modelId: string;
    name?: (string | null);
    created?: (string | null);
    modelTemplateVersion?: (string | null);
    id?: (number | null);
    orgUnits?: Array<string>;
    splitPeriods?: Array<string>;
    aggregateMetrics?: Record<string, number>;
    modelDbId: number;
};
