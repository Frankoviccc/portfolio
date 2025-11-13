<template>
    <section class="calculator bento">
        <div class="calculator__header">
            <h2 class="calculator__title">
                {{ title }}
            </h2>

            <p class="calculator__text">
                {{ text }}
            </p>
        </div>

        <form class="calculator__form">
            <FskInputField
                is="select"
                field-id="project-type"
                :options="projectOptions"
                :error="values.projectType.error"
                :error-message="values.projectType.errorMessage"
                @input="(value, minNumberOfPages) => handleProjectType(value, minNumberOfPages)"
            />

            <FskInputField
                is="input"
                field-id="number-of-pages"
                placeholder="Number of Pages"
                :error="values.numberOfPages.error"
                :error-message="values.numberOfPages.errorMessage"
                :value="values.numberOfPages.value"
                @blur="(value) => handleInput(value, 'numberOfPages')"
            />

            <FskInputField
                is="select"
                field-id="design-availability"
                :options="designOptions"
                :error="values.designAvailability.error"
                :error-message="values.designAvailability.errorMessage"
                @input="(value) => handleInput(value, 'designAvailability')"
            />

            <FskInputField
                is="checkbox"
                field-id="features"
                :options="optionList"
                :error="values.features.error"
                :error-message="values.features.errorMessage"
                :feature-label="featureLabel.toString().replace(/,/g, ', ')"
                @input="(value, index, label) => handleInputCheckbox(value, index, label)"
            />

            <FskInputField
                is="select"
                field-id="timeline"
                :options="timelineOptions"
                :error="values.timeline.error"
                :error-message="values.timeline.errorMessage"
                @input="(value) => handleInput(value, 'timeline')"
            />

            <FskButton
                :icon="'coin-euro'"
                :background="true"
                class="calculator__button"
                @click="calculate"
            >
                Calculate
            </FskButton>
        </form>

        <div
            v-if="formIsValid"
            class="calculator__footer"
        >
            <div
                class="calculator__price"
            >
                <span class="calculator__price-tag">
                         Price Estimation:
                </span>

                <span class="calculator__price-value">
                    ${{ price }}
                </span>
            </div>

            <FskButton
                :icon="'arrow-up-right'"
                class="calculator__button"
            >
                Let's Talk
            </FskButton>
        </div>
    </section>
</template>
<script setup lang="ts">
import FskInputField from "~/components/atoms/input-field/fsk-input-field.vue";
import FskButton from "~/components/atoms/button/fsk-button.vue";
import type { Props, FormValues } from './fsk-calculator.types';
import { defaultFormValues } from './fsk-calculator.types'

defineProps<Props>();

const values = ref<FormValues>(defaultFormValues);

const formIsValid = ref(false);
const price = ref<number | undefined>(0);
const featureLabel = ref<Array<string>>([]);
const projectType = ref<string>('');

const optionList = computed(() => {
    if (projectType.value === '') {
        return [];
    } else if (projectType.value === 'web-app') {
        return featureOptionsWebApp;
    } else if (projectType.value === 'e-commerce') {
        return featureOptionsEcom;
    } else {
        return featureOptions;
    }
})

function handleInputCheckbox(value: string, index: number, label: string) {
    if (!values.value.features.answers.includes(value)) {
        values.value.features.answers.push(value);
        featureLabel.value.push(label);
    } else {
        values.value.features.answers.splice(values.value.features.answers.indexOf(value), 1);
        featureLabel.value.splice(featureLabel.value.indexOf(label), 1);
    }

    if (values.value.features.error) {
        values.value.features.error = false;
    }
}

function handleInput(value: string, objectKey: string) {
    if (values.value[objectKey]) {
        values.value[objectKey].value = value;

        if (values.value[objectKey].error) {
            values.value[objectKey].error = false;
        }
    }
}

function handleProjectType(value: string, minNumberOfPages: number) {
    featureLabel.value = [];
    values.value.features.answers = [];
    values.value.projectType.value = value;

    projectType.value = value;

    values.value.numberOfPages.value = String(minNumberOfPages);

    values.value.projectType.error ? values.value.projectType.error = false : null;
    values.value.numberOfPages.error ? values.value.numberOfPages.error = false : null;
}

function calculate() {
    Object.entries(values.value).forEach(([key, value]) => {
        if (key === 'features' && 'answers' in value) {
            value.error = value.answers?.length === 0;
        } else if ('value' in value) {
            value.error = value.value === '';
        }
    });

    formIsValid.value = !Object.values(values.value).some((field) => field.error);

    if (formIsValid.value) {
        price.value = calculatePrice(values.value);
    }
}

const calculatePrice = ((form: any) => {

    if (form.projectType.value === 'landing-page') {
        let price = 1000;

        price += form.numberOfPages.value * 100;

        if (form.designAvailability.value === 'no') {
            price += 500;
        }

        if (form.timeline.value === 'urgent') {
            price += 250;
        }

        form.features.answers.forEach((answer: string) => {
            if (answer === 'performance-optimization') {
                price += 150;
            } else if (answer === 'seo-optimization') {
                price += 150;
            } else if (answer === 'accessibility') {
                price += 150;
            } else if (answer === 'animations') {
                price += 150;
            } else if (answer === 'api') {
                price += 200;
            } else if (answer === 'authenication') {
                price += 350;
            } else if (answer === 'payments') {
                price += 400;
            }
        })

        return Number(price);
    }

    else if (form.projectType.value === 'corporate-website') {
        let price = 3000;

        if (form.numberOfPages.value > 5) {
            price += (form.numberOfPages - 5) * 300;
        }

        if (form.designAvailability.value === 'no') {
            price += 1000;
        }

        if (form.timeline.value === 'urgent') {
            price += 750;
        }

        form.features.answers.forEach((answer: string) => {
            if (answer === 'performance-optimization') {
                price += 300;
            } else if (answer === 'seo-optimization') {
                price += 300;
            } else if (answer === 'accessibility') {
                price += 200;
            } else if (answer === 'animations') {
                price += 400;
            } else if (answer === 'api') {
                price += 400;
            } else if (answer === 'authentication') {
                price += 500;
            } else if (answer === 'payments') {
                price += 600;
            }
        })

        return Number(price)
    }

    else if (form.projectType.value === 'web-app') {
        let price = 3000;

        if (form.numberOfPages.value > 5) {
            price += (form.numberOfPages - 5) * 400;
        }

        if (form.designAvailability.value === 'no') {
            price += 1000;
        }

        if (form.timeline.value === 'urgent') {
            price += 750;
        }

        form.features.answers.forEach((answer: string) => {
            if (answer === 'basic-crud') {
                price += 500;
            } else if (answer === 'authentication') {
                price += 600;
            } else if (answer === 'user-roles') {
                price += 400;
            } else if (answer === 'real-time') {
                price += 800;
            } else if (answer === 'file-upload') {
                price += 400;
            } else if (answer === 'notifications') {
                price += 350;
            } else if (answer === 'search-filter') {
                price += 300;
            } else if (answer === 'analytics') {
                price += 500;
            } else if (answer === 'payments') {
                price += 800;
            } else if (answer === 'api') {
                price += 400;
            }
        })

        return Number(price);
    }

    else if (form.projectType.value === 'e-commerce') {
        let price = 5000;

        if (form.numberOfPages.value > 5) {
            price += (form.numberOfPages - 5) * 400;
        }

        if (form.designAvailability.value === 'no') {
            price += 1500;
        }

        if (form.timeline.value === 'urgent') {
            price += 750;
        }

        form.features.answers.forEach((answer: string) => {
            if (answer === 'performance-optimization') {
                price += 300;
            } else if (answer === 'seo-optimization') {
                price += 300;
            } else if (answer === 'accessibility') {
                price += 200;
            } else if (answer === 'animations') {
                price += 400;
            } else if (answer === 'api') {
                price += 400;
            } else if (answer === 'authentication') {
                price += 500;
            }
        })

        return Number(price);
    }
})

const featureOptions = [
    {  value: 'performance-optimization', label: 'Performance Optimization' },
    {  value: 'seo-optimization', label: 'SEO Optimization' },
    {  value: 'accessibility', label: 'Accessibility' },
    {  value: 'animations', label: 'Animations' },
    {  value: 'api', label: 'API' },
    {  value: 'authentication', label: 'Authentication' },
    {  value: 'payments', label: 'Payments' },
]

const featureOptionsWebApp = [
    {  value: 'basic-crud', label: 'Basic Crud' },
    {  value: 'authentication', label: 'Authentication' },
    {  value: 'user-roles', label: 'User Roles' },
    {  value: 'real-time', label: 'Real Time' },
    {  value: 'file-upload', label: 'File Upload' },
    {  value: 'notifications', label: 'Notifications' },
    {  value: 'search-filter', label: 'Search Filter' },
    {  value: 'analytics', label: 'Analytics' },
    {  value: 'Payments', label: 'Payments' },
    {  value: 'api', label: 'API' },
]

const featureOptionsEcom = [
    {  value: 'performance-optimization', label: 'Performance Optimization' },
    {  value: 'seo-optimization', label: 'SEO Optimization' },
    {  value: 'accessibility', label: 'Accessibility' },
    {  value: 'animations', label: 'Animations' },
    {  value: 'api', label: 'API' },
    {  value: 'authentication', label: 'Authentication' },
]
</script>
<style lang="scss">
@use 'fsk-calculator';
</style>