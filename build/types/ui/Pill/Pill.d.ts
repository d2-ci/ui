import { ReactNode } from 'react';
export type PillVariant = 'default' | 'destructive' | 'info' | 'warning' | 'success';
interface PillProps {
    children: ReactNode;
    variant?: PillVariant;
}
export declare const Pill: ({ children, variant }: PillProps) => import("react/jsx-runtime").JSX.Element;
export {};
