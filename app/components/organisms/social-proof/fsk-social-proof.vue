<template>
    <section class="social-proof bento">
        <h2 class="social-proof__title">
            {{ title }}
        </h2>

        <div class="social-proof__icons">
            <FskIconContainer
                v-for="(item, index) in icons"
                :key="index"
                :item="item"
            />
        </div>
    </section>
</template>

<script lang="ts" setup>
import type { Props } from './fsk-social-proof.types';
import FskIconContainer from "~/components/atoms/icon-container/fsk-icon-container.vue";

defineProps<Props>()
</script>

<style lang="scss">
@use 'fsk-social-proof';
</style>