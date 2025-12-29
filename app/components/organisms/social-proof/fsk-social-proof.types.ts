export interface SocialProofItem {
    icon?: string;
    image?: string;
    to?: string;
}

export interface Props {
    title: string;
    icons: SocialProofItem[];
}
