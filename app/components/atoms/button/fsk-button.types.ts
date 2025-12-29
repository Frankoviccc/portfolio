import NuxtLink from '#app/components/nuxt-link.js';
export interface Props {
    is?: 'button' | typeof NuxtLink;
    to?: string;
    icon?: iconType | undefined | string;
    iconSize?: string;
    type?: 'primary' | 'secondary';
    background?: boolean;
    mirror?: boolean;
}

export type iconType =
    | 'arrow-right'
    | 'arrow-left'
    | 'arrow-up-right'
    | 'arrow-down-right'
    | 'chevron-right'
    | 'chevron-left'
    | 'chevron-up'
    | 'chevron-down'
    | 'external-link'
    | 'download'
    | 'brand-github-filled'
    | 'brand-linkedin-filled'
    | 'brand-x-filled'
    | 'facebook'
    | 'instagram'
    | 'coin-euro';