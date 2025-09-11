export type BackTestMetric = {
    id?: (number | null);
    backtestId: number;
    metricId: string;
    period: string;
    orgUnit: string;
    lastTrainPeriod: string;
    lastSeenPeriod: string;
    value: number;
};
