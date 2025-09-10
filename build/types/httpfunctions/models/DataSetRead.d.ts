export type DataSetRead = {
    id: number;
    name: string;
    type: (string | null);
    created: (string | null);
    covariates: Array<string>;
};
