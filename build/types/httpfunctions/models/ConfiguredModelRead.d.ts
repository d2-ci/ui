import type { ModelTemplateDB } from './ModelTemplateDB';
export type ConfiguredModelRead = {
    userOptionValues?: (Record<string, any> | null);
    additionalContinuousCovariates?: Array<string>;
    name: string;
    id: number;
    modelTemplate: ModelTemplateDB;
};
