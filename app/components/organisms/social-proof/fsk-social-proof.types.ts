export interface SocialProofItem {
    icon?: string;
    image?: { src: string; alt: string };
    to?: string;
    ariaLabel?: string;
}

export interface Props {
    title: string;
    icons: SocialProofItem[];
}
