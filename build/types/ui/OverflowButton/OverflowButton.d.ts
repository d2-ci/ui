import React from 'react';
interface Props {
    label?: string;
    primary?: boolean;
    secondary?: boolean;
    icon?: React.ReactElement;
    onClick?: () => void;
    open?: boolean;
    component: React.ReactNode;
    dataTest?: string;
    small?: boolean;
    large?: boolean;
    disabled?: boolean;
}
export declare const OverflowButton: ({ label, primary, secondary, small, large, disabled, onClick: handleClick, open: propsOpen, icon, dataTest, component, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
