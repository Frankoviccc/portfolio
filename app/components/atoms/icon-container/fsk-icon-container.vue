<template>
    <div class="icon-container">
        <NuxtLink
            :to="item.to"
            target="_blank"
            :class="[
                'icon-container__link',
                { 'icon-container__link--small': small }
            ]"
        >
            <NuxtImg
                v-if="item.image"
                :src="item.image"
                class="icon-container__image"
            />

            <component
                v-else
                class="icon-container__icon"
                :is="item.icon"
            />
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
import type { Props } from './fsk-icon-container.types';

defineProps<Props>()
</script>

<style lang="scss">
@use 'fsk-icon-container';
</style>