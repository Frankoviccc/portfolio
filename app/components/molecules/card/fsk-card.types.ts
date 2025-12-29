export interface Props {
    link?: string;
    image?: { src: string, alt: string };
    filterImage?: boolean
    title?: string;
    text?: string;
    year?: string;
    items?: { label: string }[];
}