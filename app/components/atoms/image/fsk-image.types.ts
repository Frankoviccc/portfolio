export interface Props {
    source: string;
    alt: string | undefined;
    sizes?: { width: number; height: number; media: string }[];
    objectFit?: string;
    pictureClass?: string;
}