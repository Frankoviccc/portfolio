<template>
    <form
        class="form"
        @submit.prevent="handleForm"
    >
        <h2 class="footer__form-title">
            {{ title }}
        </h2>

        <FskInputField
            is="input"
            name="name"
            field-id="name"
            placeholder="Name"
            :error="values.name.error"
            :error-message="values.name.errorMessage"
            :value="values.name.value"
            @blur="(value) => handleUserInput(value, 'name')"
        />

        <FskInputField
            is="input"
            name="email"
            field-id="email"
            placeholder="Email"
            :error="values.email.error"
            :error-message="values.email.errorMessage"
            :value="values.email.value"
            @blur="(value) => handleUserInput(value, 'email')"
        />

        <FskInputField
            is="textarea"
            name="message"
            field-id="message"
            placeholder="Message"
            rows="6"
            :error="values.message.error"
            :error-message="values.message.errorMessage"
            :value="values.message.value"
            @blur="(value) => handleUserInput(value, 'message')"
        />

        <FskButton
            is="button"
            aria-label="Submit form"
            :icon="icon"
            :background="true"
            :class="[
                'form__button',
                { 'form__button--loading': iconLoading }
            ]"
        >
            {{ label }}
        </FskButton>
    </form>
</template>
<script setup lang="ts">
import FskInputField from "~/components/atoms/input-field/fsk-input-field.vue";
import FskButton from "~/components/atoms/button/fsk-button.vue";
import type { Props, FormValues } from "./fsk-contact-form.types";
import { defaultFormValues } from "./fsk-contact-form.types";

defineProps<Props>()

const values = ref<FormValues>(defaultFormValues);
const formIsValid = ref<boolean>(false);
const iconLoading = ref(false)

function iconHandler() {
    iconLoading.value = true

    setTimeout(() => {
        iconLoading.value = false
    }, 1500);
}

const icon = computed(() => {
    return iconLoading.value ? 'loader-2' : 'arrow-up-right'
})

const label = computed(() => {
    return iconLoading.value ? 'Sending...' : 'Send Message'
})

function handleForm() {
    Object.entries(values.value).forEach(([key, value]) => {
         if ('value' in value) {
            value.error = value.value === '';
        }
    });

    formIsValid.value = !Object.values(values.value).some((field) => field.error);

    if (formIsValid.value) {
        iconHandler()

        $fetch('/api/contact', {
            method: 'POST',
            body: {
                name: values.value.name.value,
                email: values.value.email.value,
                message: values.value.message.value
            }
        })

        Object.entries(values.value).forEach(([key, field]) => {
            console.log(field.value)
            field.value = ''
        })
    }
}

function handleUserInput(value: string, objectKey: string) {
    if (values.value[objectKey]) {
        if (values.value[objectKey].pattern.test(value)) {
            values.value[objectKey].value = value;
            values.value[objectKey].error = false;
        } else {
            values.value[objectKey].error = true;
        }
    }
}
</script>

<style lang="scss">
@use 'fsk-contact-form';
</style>