export type ModelConfigurationCreate = {
    name: string;
    modelTemplateId: number;
    userOptionValues?: (Record<string, any> | null);
    additionalContinuousCovariates?: Array<string>;
};
