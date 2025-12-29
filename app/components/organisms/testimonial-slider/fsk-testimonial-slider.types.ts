export interface Props {
    title: string;
    items: Testimonial[];
}

export type Testimonial = {
    stars?: number;
    text?: string;
    author?: string;
    date?: string;
}