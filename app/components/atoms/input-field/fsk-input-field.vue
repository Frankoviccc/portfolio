<template>
    <div
        v-if="is === 'select'"
        ref="inputField"
        class="input-field__container"
        @click="setCalculatorHeight"
    >
        <div
            :class="[
                'input-field',
                'input-field--select',
                { 'input-field--list-open': optionsListVisible },
                { 'input-field--error': error }
            ]"
        >
            <div
                v-if="options"
                class="input-field__selected"
                @click="toggleList"
            >
                {{ options[currentIndex]?.label }}

                <Icon
                    class="input-field__icon"
                    name="tabler:chevron-down"
                />
            </div>

            <div
                v-show="optionsListVisible"
                ref="optionsList"
                class="input-field__list"
            >
                <div
                    v-for="(option, index) in options?.slice(1)"
                    :key="index"
                    class="input-field__list-item"
                    @click="handleOptionSelect(option, index)"
                >
                    {{ option.label }}
                </div>
            </div>
        </div>

        <p
            v-if="error"
            class="input-field__error-message"
        >
            {{ errorMessage }}
        </p>
    </div>

    <div
        v-if="is === 'checkbox'"
        ref="inputField"
        class="input-field__container"
        @click="setCalculatorHeight"
    >
        <div
            :title="options?.length === 0 ? 'Please select Project Type' : ''"
            :class="[
                'input-field',
                'input-field--checkbox',
                { 'input-field--list-open': optionsListVisible },
                { 'input-field--error': error },
                { 'input-field--empty': options?.length === 0 }
            ]"
        >
            <div
                v-if="options"
                class="input-field__selected"
                @click="toggleList"
            >
                <div class="input-field__content">
                    {{ featureLabel ? featureLabel : 'Features & Functionality' }}
                </div>

                <Icon
                    class="input-field__icon"
                    name="tabler:chevron-down"
                />
            </div>

            <div
                v-show="optionsListVisible && options?.length"
                ref="optionsList"
                class="input-field__list"
                key="options-list-checkbox"
            >
                <div
                    v-for="(option, index) in options"
                    :key="index"
                    class="input-field__list-item"
                >
                    <input
                        class="input-field__checkbox"
                        type="checkbox"
                        @click="$emit('input', option.value, index, option.label)"
                    >
                    {{ option.label }}
                </div>
            </div>
        </div>

        <p
            v-if="error"
            class="input-field__error-message"
        >
            {{ errorMessage }}
        </p>
    </div>

    <div
        v-if="is === 'input'"
        class="input-field__container"
    >
        <div
            :class="[
                'input-field',
                'input-field--input',
                { 'input-field--error': error }
            ]"
        >
            <input
                class="input-field__input"
                type="text"
                pattern="[0-9]*"
                inputmode="numeric"
                :placeholder="placeholder"
                :value="value"
                @input="handleInput"
                @blur="handleBlur"
            >
        </div>

        <p
            v-if="error"
            class="input-field__error-message"
        >
            {{ errorMessage }}
        </p>
    </div>
</template>

<script setup lang="ts">
import { useInputFieldState } from "~/composables/useInputFieldState";
import type { Props } from './fsk-input-field.types';

const props = defineProps<Props>();

const { openField, closeField, isFieldOpen } = useInputFieldState();

const emit = defineEmits(['input', 'blur'])

const marginBottom = ref(0 + 'px');

const optionsListVisible = isFieldOpen(props.fieldId)
const optionsList = ref();
const currentIndex = ref<number>(0);

const general = useGeneralStore();
const { calculatorHeight } = storeToRefs(general);
const inputField = ref<HTMLElement>();

function setCalculatorHeight() {
    if (inputField.value) {
        calculatorHeight.value = inputField.value.clientHeight + 'px';
    }
}

function toggleList() {
    if (optionsListVisible.value) {
        // Als de lijst zichtbaar is, sluit deze dan
        closeField();
    } else {
        // Zo niet, open de lijst
        openField(props.fieldId);
    }

    nextTick(() => {
        if (optionsListVisible.value && optionsList.value) {
            marginBottom.value = optionsList.value.offsetHeight + 'px';
        } else {
            marginBottom.value = '0px';
        }
    });
}

const handleOptionSelect = (option: any, index: number) => {
    emit('input', option.value, option.minNumberOfPages);
    currentIndex.value = index + 1;
    toggleList()
}

const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    target.value = target.value.replace(/[^0-9]/g, '');
}

const handleBlur = (event: Event) => {
    const target = event.target as HTMLInputElement;
    emit('blur', target.value);
}
</script>

<style lang="scss" scoped>
@use 'fsk-input-field';

.input-field {
    --options-list-height: v-bind(marginBottom);
}
</style>