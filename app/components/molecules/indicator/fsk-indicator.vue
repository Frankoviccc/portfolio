<template>
    <div class="indicator bento">
        <div class="indicator__container">
            <div
                class="indicator__pulsing"
                :class="!available ? 'pulsing--unavailable' : ''"
            >
                <div class="indicator__pulsing-1" />
                <div class="indicator__pulsing-2" />
                <div class="indicator__pulsing-3" />
            </div>

            <NuxtLink class="indicator__button">
                {{ text }}

                <Icon
                    class="indicator__button-icon"
                    name="tabler:arrow-up-right"
                />
            </NuxtLink>
            <FskButton

            >

            </FskButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import NuxtLink from '#app/components/nuxt-link.js'
import FskButton from "~/components/atoms/button/fsk-button.vue";

interface Props {
    available?: boolean;
    text?: string;
}

withDefaults(defineProps<Props>(), {
    available: false,
});
</script>

<style lang="scss">
@use 'fsk-indicator';
</style>