export type ObservationBase = {
    period: string;
    orgUnit: string;
    value: (number | null);
    featureName: (string | null);
};
