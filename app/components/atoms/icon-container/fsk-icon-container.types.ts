export interface Props {
    icon?: string | null;
    iconColor?: string;
    iconColorItem?: string;
    size?: "sm" | "md" | "lg";
    image?: { src: string; alt: string }
    to?: string;
    label?: string;
    ariaLabel?: string;
    center?: boolean;
}