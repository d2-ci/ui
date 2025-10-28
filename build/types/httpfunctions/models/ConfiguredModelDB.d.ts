export type ConfiguredModelDB = {
    userOptionValues?: (Record<string, any> | null);
    additionalContinuousCovariates?: Array<string>;
    name: string;
    id?: (number | null);
    modelTemplateId: number;
    archived?: boolean;
    usesChapkit?: boolean;
};
