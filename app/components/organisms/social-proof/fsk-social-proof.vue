<template>
    <section class="social-proof bento">
        <h2 class="social-proof__title">
            {{ title }}
        </h2>

        <div
            v-if="icons"
            class="social-proof__icons"
        >
            <FskIconContainer
                v-for="(item, index) in icons"
                :key="index"
                :to="item.to"
                :icon="item.icon"
                :image="item.image"
                :aria-label="item.ariaLabel"
            />
        </div>
    </section>
</template>

<script lang="ts" setup>
import type { Props } from './fsk-social-proof.types';

defineProps<Props>()
</script>

<style lang="scss">
@use 'fsk-social-proof';
</style>