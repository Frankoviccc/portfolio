import type { iconType } from "~/components/atoms/button/fsk-button.types";

export interface Props {
    title?: string;
    text?: string;
    link?: string;
    label?: string;
    image?: { src: string; alt: string };
    buttonGroup?: buttonItem[];
    buttonBackground?: boolean;
    desktopOnly?: boolean;
}

export interface buttonItem {
    icon?: iconType | undefined | string;
    label: string;
    link: string;
}
