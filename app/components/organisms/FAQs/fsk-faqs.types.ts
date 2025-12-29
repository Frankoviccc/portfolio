export interface Props {
    title: string;
    items: FAQItem[];
}

interface FAQItem {
    title: string;
    text: string;
}