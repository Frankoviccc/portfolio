export interface Props {
    links: { label: string; to: string }[];
    icons: { icon: string; to: string, ariaLabel?: string }[];
    text?: string;
}