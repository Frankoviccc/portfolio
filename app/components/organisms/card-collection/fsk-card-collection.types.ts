export interface Props {
    title?: string;
    buttonLabel?: string;
    buttonLink?: string;
    isSwipe?: boolean;
    filterImage?: boolean;
    cards: { slug: string; image: { src: string, alt: string }; title: string; text?: string; year?: string; items?: { label: string }[] }[]
    pathName?: string;
}