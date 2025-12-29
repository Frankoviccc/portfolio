export interface IconItem {
    icon: string | Component;
    label: string;
}

export interface Props {
    title: string;
    subtitle: string;
    text: string;
    items: IconItem[];
    image: { src: string; alt: string }
}