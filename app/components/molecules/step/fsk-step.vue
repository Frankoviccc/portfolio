<template>
    <li class="step">
        <span class="step__number">
            {{ number }}
        </span>

        <div class="step__content">
            <h3 class="step__content-title">
                {{ title }}
            </h3>

            <p class="step__content-text">
                {{ text }}
            </p>
        </div>
    </li>
</template>

<script setup lang="ts">
interface Props {
    number: string;
    title: string;
    text: string;
}

defineProps<Props>()
</script>

<style lang="scss">
@use 'fsk-step';
</style>