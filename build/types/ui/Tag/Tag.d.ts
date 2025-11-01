import { ReactNode } from 'react';
export type TagVariant = 'default' | 'destructive' | 'info' | 'warning' | 'success';
interface TagProps {
    children: ReactNode;
    variant?: TagVariant;
    onRemove?: () => void;
    className?: string;
}
export declare const Tag: ({ children, variant, onRemove, className }: TagProps) => import("react/jsx-runtime").JSX.Element;
export {};
