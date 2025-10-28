export type BackTestForecast = {
    period: string;
    orgUnit: string;
    values?: Array<number>;
    id?: (number | null);
    backtestId: number;
    lastTrainPeriod: string;
    lastSeenPeriod: string;
};
