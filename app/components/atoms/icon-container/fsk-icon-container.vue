<template>
    <div class="icon-container">
        <component
            :is="to ? NuxtLink : 'div'"
            :to="to || undefined"
            :target="to ? '_blank' : undefined"
            :rel="to ? 'noopener noreferrer' : undefined"
            :class="[
                'icon-container__wrapper',
                { 'icon-container__wrapper--center': center },
            ]"
            :aria-label="to ? ariaLabel: undefined"
        >
            <NuxtImg
                v-if="image?.src"
                :src="image.src"
                :alt="image.alt"
                class="icon-container__image"
            />

            <component
                v-else-if="icon && !label"
                :is="getIcon(icon)"
                :class="[
                    'icon-container__icon',
                    size && `icon-container__icon--${size}`,
                    { 'icon-container__icon--set-size': size }
                ]"
                :style="{
                    '--icon-color': iconColor || iconColorItem
                }"
            />

            <Icon
                v-else-if="icon && label"
                :name="'tabler:' + icon"
                :class="[
                    'icon-container__icon',
                    size && `icon-container__icon--${size}`,
                    { 'icon-container__icon--set-size': size }
                ]"
                :style="{
                    '--icon-color': iconColor
                }"
            />

            <span
                v-if="label"
                class="icon-container__label"
                v-html="label"
            />
        </component>
    </div>
</template>

<script setup lang="ts">
import type { Props } from './fsk-icon-container.types';
import NuxtLink from "#app/components/nuxt-link.js";

defineProps<Props>()
</script>

<style lang="scss">
@use 'fsk-icon-container';
</style>