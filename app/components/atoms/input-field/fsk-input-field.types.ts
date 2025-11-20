export interface Props {
    is: 'input' | 'select' | 'textarea' | 'checkbox';
    name?: string;
    options?: Array<{ value?: string; label: string; minNumberOfPages?: number }>;
    inputMode?: 'numeric' | 'email' | 'text';
    rows?: number | string;
    placeholder?: string;
    error?: boolean;
    errorMessage?: string;
    featureLabel?: Array<string> | string;
    value?: string | number;
    fieldId?: string; // Deze gebruik ik enkel voor het sluiten van niet actieve fields
}