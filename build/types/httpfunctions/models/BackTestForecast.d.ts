export type BackTestForecast = {
    period: string;
    orgUnit: string;
    id?: (number | null);
    backtestId: number;
    lastTrainPeriod: string;
    lastSeenPeriod: string;
    values?: Array<number>;
};
