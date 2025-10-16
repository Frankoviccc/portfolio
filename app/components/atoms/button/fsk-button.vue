<template>
    <component
        v-if="$slots.default || icon"
        :is="is"
        :to="to"
        :background="background"
        class="button"
        :class="[
            type ? `button--type-${type}` : null,
            { 'button--background': background },
            { 'button--mirror': mirror },
            ]"
    >
        <span
            v-if="$slots.default"
            class="button__content"
        >
            <slot />
        </span>

        <div v-if="!background && type === 'primary'" class="button__border" />

        <Icon
            v-if="icon"
            :name="`tabler:${icon}`"
            size="28"
            class="button__icon"
        />
    </component>
</template>

<script setup lang="ts">
import NuxtLink from '#app/components/nuxt-link.js'
interface Props {
    is?: 'button' | typeof NuxtLink;
    to?: string;
    icon?: iconType;
    type?: 'primary' | 'secondary';
    background?: boolean;
    mirror?: boolean;
}

withDefaults(defineProps<Props>(), {
    type: 'primary',
})

export type iconType =
    | 'arrow-right'
    | 'arrow-left'
    | 'arrow-up-right'
    | 'arrow-down-right'
    | 'chevron-right'
    | 'chevron-left'
    | 'chevron-up'
    | 'chevron-down'
    | 'external-link'
    | 'download'
    | 'brand-github-filled'
    | 'brand-linkedin-filled'
    | 'brand-x-filled'
    | 'facebook'
    | 'instagram'
    | 'coin-euro';
</script>

<style lang="scss">
@use 'fsk-button';
</style>