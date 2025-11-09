export interface Props {
    is: 'input' | 'select' | 'textarea' | 'checkbox';
    options?: Array<{ value?: string; label: string; minNumberOfPages?: number }>;
    placeholder?: string;
    error?: boolean;
    errorMessage?: string;
    featureLabel?: Array<string> | string;
    value?: string | number;
    fieldId: string;
}