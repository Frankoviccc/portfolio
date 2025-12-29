export type Props = {
    title?: string;
    direction?: "row" | "column";
    items: CollectionItem[] | undefined;
    center?: boolean;
    square?: boolean;
    size?: "sm" | "md" | "lg";
    responsive?: boolean;
    color?: string;
}

export interface CollectionItem {
    icon: string | Component;
    color?: string;
    link?: string;
    label?: string;
    image?: string;
    action?: string;
}
