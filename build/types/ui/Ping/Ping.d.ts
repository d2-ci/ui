export type PingVariant = 'default' | 'destructive' | 'info' | 'warning' | 'success';
export type Props = {
    active?: boolean;
    variant?: PingVariant;
};
export declare const Ping: ({ active, variant }: Props) => import("react/jsx-runtime").JSX.Element;
