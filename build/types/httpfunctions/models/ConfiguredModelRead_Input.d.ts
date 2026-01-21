import type { ModelTemplateDB } from './ModelTemplateDB';
export type ConfiguredModelRead_Input = {
    userOptionValues?: (Record<string, any> | null);
    additionalContinuousCovariates?: Array<string>;
    name: string;
    id: number;
    modelTemplate: ModelTemplateDB;
};
