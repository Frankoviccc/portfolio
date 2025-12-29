export type Props = {
    title: string | undefined;
    text?: string;
    image?: { src: string; alt: string };
    items?: { label: string; icon: string; text: string; color?: string }[]
};