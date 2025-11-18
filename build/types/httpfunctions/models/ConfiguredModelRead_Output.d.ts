import type { ModelTemplateDB } from './ModelTemplateDB';
export type ConfiguredModelRead_Output = {
    userOptionValues?: (Record<string, any> | null);
    additionalContinuousCovariates?: Array<string>;
    name: string;
    id: number;
    modelTemplate: ModelTemplateDB;
};
