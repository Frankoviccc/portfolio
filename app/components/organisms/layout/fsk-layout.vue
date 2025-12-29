<template>
    <div
        :class="[
            'layout',
            `layout--${direction}`,
            `layout--${layout}`,
            collapse && `layout--collapse-${collapse}`,
            { 'layout--spacing': spacing }
        ]"
    >
        <slot />
    </div>
</template>
<script setup lang="ts">
import type { Props } from './fsk-layout.types';

withDefaults(defineProps<Props>(), {
    direction: 'row',
    layout: 'equal'
})
</script>

<style lang="scss">
@use 'fsk-layout';
</style>