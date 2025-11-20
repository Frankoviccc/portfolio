<template>
    <div class="form">
        <h2 class="footer__form-title" v-html="title"/>

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
            rows="3"
            :error="values.message.error"
            :error-message="values.message.errorMessage"
            :value="values.message.value"
            @blur="(value) => handleUserInput(value, 'message')"
        />

        <FskButton
            icon="arrow-up-right"
            :background="true"
            @click="handleForm"
        >
            Send Message
        </FskButton>
    </div>
</template>
<script setup lang="ts">
import FskInputField from "~/components/atoms/input-field/fsk-input-field.vue";
import FskButton from "~/components/atoms/button/fsk-button.vue";
import type { Props, FormValues } from "./fsk-contact-form.types";
import { defaultFormValues } from "./fsk-contact-form.types";

defineProps<Props>()

const values = ref<FormValues>(defaultFormValues);
const formIsValid = ref<boolean>(false);

function handleForm() {
    Object.entries(values.value).forEach(([key, value]) => {
         if ('value' in value) {
            value.error = value.value === '';
        }
    });

    formIsValid.value = !Object.values(values.value).some((field) => field.error);

    console.log(formIsValid.value)
}

function handleUserInput(value: string, objectKey: string) {
    console.log(values.value[objectKey])
    if (values.value[objectKey]) {
        if (values.value[objectKey].pattern.test(value)) {
            console.log('dit werkt')
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