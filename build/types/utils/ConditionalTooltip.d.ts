import { type TooltipProps } from '@dhis2/ui';
type Props = {
    enabled: boolean;
    wrapperClassName?: string;
    children: any;
} & TooltipProps;
export declare const ConditionalTooltip: (props: Props) => any;
export {};
