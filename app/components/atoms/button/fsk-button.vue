<template>
    <component
        v-if="$slots.default || icon"
        :is="is"
        :to="to"
        :background="background"
        class="button"
        :class="[
            type ? `button-type--${type}` : null,
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
            :size="iconSize"
            class="button__icon"
        />
    </component>
</template>

<script setup lang="ts">
import type { Props } from './fsk-button.types';
import NuxtLink from '#app/components/nuxt-link.js'

withDefaults(defineProps<Props>(), {
    is: NuxtLink,
    type: 'primary',
    iconSize: '28',
})
</script>

<style lang="scss">
@use 'fsk-button';
</style>