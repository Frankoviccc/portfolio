<template>
    <div class="indicator bento">
        <component
            :is="isContactPage ? 'div' : NuxtLink"
            :to="isContactPage ? undefined : '/contact'"
            class="indicator__button"
        >
            <div class="indicator__container">
                <div
                    :class="[
                        'indicator__pulsing',
                        { 'indicator__pulsing--unavailable': !available }
                    ]"
                >
                    <div class="indicator__pulsing-1" />
                    <div class="indicator__pulsing-2" />
                    <div class="indicator__pulsing-3" />
                </div>
            </div>

            <span class="indicator__text">
                {{ text }}
            </span>

            <Icon
                v-if="!isContactPage"
                class="indicator__button-icon"
                name="tabler:arrow-up-right"
            />
        </component>
    </div>
</template>

<script setup lang="ts">
import NuxtLink from '#app/components/nuxt-link.js'

interface Props {
    available?: boolean;
    text?: string;
}

withDefaults(defineProps<Props>(), {
    available: false,
    text: 'Available'
});

const route = useRoute()

const isContactPage = computed(() => {
    return route.path === '/contact'
})
</script>

<style lang="scss">
@use 'fsk-indicator';
</style>