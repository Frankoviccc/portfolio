export interface Props {
    title: string;
    text: string;
    projectOptions: Array<{ value: string; label: string; }>;
    designOptions: Array<{ value: string; label: string; }>;
    timelineOptions: Array<{ value: string; label: string; }>;
    featureOptions?: Array<{ label: string; }>;
}

export interface FormValues {
    [key: string]: {
        value?: string;
        answers?: string[];
        error: boolean;
        errorMessage: string
    };
    projectType: {
        value: string;
        error: boolean;
        errorMessage: string
    };
    designAvailability: {
        value: string;
        error: boolean;
        errorMessage: string
    };
    features: {
        answers: string[];
        error: boolean;
        errorMessage: string
    };
    timeline: {
        value: string;
        error: boolean;
        errorMessage: string
    };
    numberOfPages: {
        value: string;
        error: boolean;
        errorMessage: string
    };
}

export const defaultFormValues: FormValues = {
    projectType: {
        value: '',
        error: false,
        errorMessage: 'Please select a project type',
    },
    designAvailability: {
        value: '',
        error: false,
        errorMessage: 'Please select a design availability option',
    },
    features: {
        answers: [],
        error: false,
        errorMessage: 'Please select at least one feature',
    },
    numberOfPages: {
        value: '',
        error: false,
        errorMessage: 'Please enter a number of pages',
    },
    timeline: {
        value: '',
        error: false,
        errorMessage: 'Please select a timeline option',
    }
}