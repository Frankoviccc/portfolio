export interface Props {
    title: string;
    links: { label: string; to: string }[];
    icons: { icon: string; to: string, ariaLabel?: string }[];
    text?: string;
}