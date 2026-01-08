export interface Props {
    title: string;
}

export interface FormValues {
    [key: string]: {
        value?: string;
        error: boolean;
        errorMessage: string;
        pattern: any;
    };
    name: {
        value: string;
        error: boolean;
        errorMessage: string;
        pattern: any;
    };
    email: {
        value: string;
        error: boolean;
        errorMessage: string;
        pattern: any;
    };
    message: {
        value: string;
        error: boolean;
        errorMessage: string;
        pattern: any;
    }
}

export const defaultFormValues: FormValues = {
    name: {
        value: '',
        error: false,
        errorMessage: 'Please fill in your name',
        pattern: /^[a-zA-ZÀ-ÿ\s'-]{2,}$/
    },
    email: {
        value: '',
        error: false,
        errorMessage: 'Please fill in your email',
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    message: {
        value: '',
        error: false,
        errorMessage: 'Please write your message (min 20 characters)',
        pattern: /^.{20,}$/,
    }
}