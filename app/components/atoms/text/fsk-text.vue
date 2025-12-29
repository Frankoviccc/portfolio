<template>
    <div class="text bento">
        <div
            class="text__content"
            v-html="text"
        />
    </div>
</template>

<script setup lang="ts">
import type { Props } from './fsk-text.types';

defineProps<Props>()
</script>

<style lang="scss">
@use 'fsk-text';
</style>