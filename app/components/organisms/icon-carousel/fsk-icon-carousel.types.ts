export interface Props {
    title: string;
    centerTrack?: boolean;
    doubleTrack?: boolean;
    items: IconItem[];
    animate?: boolean;
    square?: boolean;
    glowEffect?: boolean;
}

export interface IconItem {
    icon: string;
    label?: string;
}