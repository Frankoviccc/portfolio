export interface Props {
    title: string;
    items: ExperienceItem[];
}

export interface ExperienceItem {
    logo: string;
    name: string;
    title: string;
    date: string;
    tasks: string[]
}